const fs = require("fs");
const path = require("path");
const cp = require("child_process");

function executableExists(filePath) {
  return Boolean(filePath) && fs.existsSync(filePath);
}

function commandPath(command) {
  const result = process.platform === "win32" ? cp.spawnSync("where", [command], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"]
  }) : cp.spawnSync("sh", ["-c", `command -v ${command}`], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"]
  });
  if (result.status !== 0) return null;
  return String(result.stdout || "").split(/\r?\n/).find(Boolean) || null;
}

function candidatePaths() {
  const candidates = [
    process.env.CHROME_PATH,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/usr/bin/google-chrome",
    "/usr/bin/google-chrome-stable",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
    "/opt/google/chrome/chrome",
    process.env.PROGRAMFILES ? path.join(process.env.PROGRAMFILES, "Google", "Chrome", "Application", "chrome.exe") : null,
    process.env["PROGRAMFILES(X86)"] ? path.join(process.env["PROGRAMFILES(X86)"], "Google", "Chrome", "Application", "chrome.exe") : null,
    process.env.LOCALAPPDATA ? path.join(process.env.LOCALAPPDATA, "Google", "Chrome", "Application", "chrome.exe") : null
  ].filter(Boolean);

  for (const command of ["google-chrome", "google-chrome-stable", "chromium", "chromium-browser", "chrome", "msedge"]) {
    const found = commandPath(command);
    if (found) candidates.push(found);
  }

  return [...new Set(candidates)];
}

function resolveChromePath() {
  return candidatePaths().find(executableExists) || null;
}

function chromeInstallHint() {
  return [
    "Chrome or Chromium executable was not found.",
    "Install Chrome/Chromium or set CHROME_PATH to the browser executable path.",
    "Example: CHROME_PATH=/path/to/chrome ./scripts/measure-oneorbit-browser-metrics"
  ].join(" ");
}

module.exports = {
  resolveChromePath,
  chromeInstallHint,
  candidatePaths
};
