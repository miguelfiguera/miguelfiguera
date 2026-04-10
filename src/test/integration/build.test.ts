import { describe, it, expect } from "vitest";
import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

describe("production build", () => {
  const rootDir = resolve(__dirname, "../../..");
  const distDir = resolve(rootDir, "dist");

  it("completes with exit code 0", () => {
    expect(() => {
      execSync("npm run build", { cwd: rootDir, stdio: "pipe", timeout: 60_000 });
    }).not.toThrow();
  });

  it.each([
    ["index.html"],
    ["services/index.html"],
    ["portfolio/index.html"],
    ["products/index.html"],
  ])("generates %s", (pagePath) => {
    expect(existsSync(resolve(distDir, pagePath))).toBe(true);
  });
});
