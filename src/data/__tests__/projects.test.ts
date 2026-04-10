import { describe, it, expect } from "vitest";
import { projects } from "../projects";

describe("projects", () => {
  it("contains 9 entries", () => {
    expect(projects).toHaveLength(9);
  });

  it.each(projects.map((proj) => [proj.title, proj] as const))(
    "%s has all required fields",
    (_title, proj) => {
      expect(proj.id).toBeTruthy();
      expect(proj.title).toBeTruthy();
      expect(proj.description).toBeTruthy();
      expect(proj.category).toBeTruthy();
      expect(proj.imageAlt).toBeTruthy();
    },
  );

  it("has URLs on projects that provide them", () => {
    const withUrls = projects.filter((p) => p.url);
    expect(withUrls.length).toBeGreaterThan(0);
    for (const proj of withUrls) {
      expect(proj.url).toMatch(/^https?:\/\//);
    }
  });
});
