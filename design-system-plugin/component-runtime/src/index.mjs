export const runtimeId = "sanofi-elements-component-runtime";
export const runtimeSource = "@sanofi-accelerator/elements";
export const runtimeMarker = "sanofi-elements-react";

export function validateComponentSpec(spec, contract) {
  const failures = [];
  const requiredFields = contract?.component_instance_contract?.required_fields || [
    "component_id",
    "story_id",
    "props",
    "children_or_slots",
    "interaction_requirements",
    "provenance"
  ];
  const firstRound = new Set(contract?.first_round_components || []);
  const allowedFallbacks = new Set(contract?.allowed_fallback_modules || []);

  if (!spec || typeof spec !== "object") {
    failures.push("component spec must be an object");
    return { ok: false, failures };
  }

  if (!Array.isArray(spec.components) || !spec.components.length) {
    failures.push("component spec must include non-empty components array");
  }

  for (const [index, component] of (spec.components || []).entries()) {
    for (const field of requiredFields) {
      if (component[field] === undefined) {
        failures.push(`components[${index}] missing required field: ${field}`);
      }
    }

    if (component.component_id && firstRound.size && !firstRound.has(component.component_id)) {
      failures.push(`components[${index}] is outside first-round runtime scope: ${component.component_id}`);
    }

    if (component.props?.native === false && component.component_id === "select") {
      const requirements = component.interaction_requirements || [];
      if (!requirements.some((requirement) => /combobox/i.test(requirement))) {
        failures.push(`components[${index}] Select native:false must declare combobox behavior`);
      }
    }
  }

  for (const fallback of spec.fallback_modules || []) {
    if (!allowedFallbacks.has(fallback.module)) {
      failures.push(`fallback module is not allowed by runtime contract: ${fallback.module}`);
    }
    if (firstRound.has(fallback.module)) {
      failures.push(`first-round component must not be declared as fallback: ${fallback.module}`);
    }
  }

  return {
    ok: failures.length === 0,
    failures
  };
}

export function assertCanRenderRuntime(preflightReport) {
  if (preflightReport?.status !== "pass") {
    const failures = preflightReport?.failures?.join("; ") || "missing runtime preflight pass";
    throw new Error(`Sanofi component runtime is not ready: ${failures}`);
  }
}
