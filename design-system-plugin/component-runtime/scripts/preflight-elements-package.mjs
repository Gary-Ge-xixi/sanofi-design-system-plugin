#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pluginRoot = path.resolve(__dirname, "..", "..");
const reportDir = path.join(pluginRoot, "outputs", "reports");
const reportPath = path.join(reportDir, "component-runtime-preflight.report.json");
const packageName = "@sanofi-accelerator/elements";
const expectedRegistry = "https://npm.pkg.github.com";

function npmConfigGet(key) {
  try {
    return execFileSync("npm", ["config", "get", key], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"]
    }).trim();
  } catch (error) {
    return "";
  }
}

function normalizeRegistry(value) {
  return String(value || "").replace(/\/$/, "");
}

function resolvePackage() {
  try {
    return require.resolve(`${packageName}/package.json`);
  } catch (error) {
    return "";
  }
}

fs.mkdirSync(reportDir, { recursive: true });

const configuredRegistry = npmConfigGet("@sanofi-accelerator:registry");
const hasExpectedRegistry = normalizeRegistry(configuredRegistry) === expectedRegistry;
const hasEnvToken = Boolean(process.env.NPM_TOKEN || process.env.GITHUB_TOKEN || process.env.GH_TOKEN);
const npmTokenConfig = npmConfigGet("//npm.pkg.github.com/:_authToken");
const hasNpmTokenConfig = Boolean(npmTokenConfig && npmTokenConfig !== "undefined" && npmTokenConfig !== "null");
const resolvedPackageJson = resolvePackage();
const failures = [];

if (!hasExpectedRegistry) {
  failures.push(`missing npm scope registry: @sanofi-accelerator:registry=${expectedRegistry}`);
}

if (!hasEnvToken && !hasNpmTokenConfig) {
  failures.push("missing GitHub Packages token for @sanofi-accelerator/elements");
}

if (!resolvedPackageJson) {
  failures.push(`cannot resolve ${packageName}/package.json`);
}

const report = {
  schema_version: "0.1.0",
  script: "component-runtime/scripts/preflight-elements-package.mjs",
  status: failures.length ? "blocked" : "pass",
  checked: {
    package_name: packageName,
    expected_registry: expectedRegistry,
    configured_registry: configuredRegistry || "undefined",
    has_expected_registry: hasExpectedRegistry,
    has_package_token: hasEnvToken || hasNpmTokenConfig,
    token_source: hasEnvToken ? "environment" : hasNpmTokenConfig ? "npm-config" : "none",
    resolved_package_json: resolvedPackageJson || "unresolved"
  },
  remediation: {
    npmrc: [
      "@sanofi-accelerator:registry=https://npm.pkg.github.com",
      "//npm.pkg.github.com/:_authToken=${NPM_TOKEN}"
    ],
    token_scope: "read:packages",
    install_command: "npm install @sanofi-accelerator/elements"
  },
  failures
};

fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + "\n");

if (failures.length) {
  console.error(`Component runtime preflight blocked: ${failures.join("; ")}`);
  console.error(`Report: ${path.relative(pluginRoot, reportPath)}`);
  process.exit(1);
}

console.log(`Component runtime preflight OK: ${packageName}`);
