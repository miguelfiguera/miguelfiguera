import { describe, it, expect } from "vitest";
import { technologies } from "../technologies";

describe("technologies", () => {
  it("has categories defined", () => {
    expect(technologies.length).toBeGreaterThan(0);
  });

  it.each(technologies.map((cat) => [cat.category, cat] as const))(
    "%s has non-empty items",
    (_category, cat) => {
      expect(cat.category).toBeTruthy();
      expect(cat.items.length).toBeGreaterThan(0);
      for (const item of cat.items) {
        expect(item.name).toBeTruthy();
        expect(item.iconName).toBeTruthy();
      }
    },
  );

  it("includes React, Rails, and Laravel", () => {
    const allNames = technologies.flatMap((cat) =>
      cat.items.map((item) => item.name),
    );
    expect(allNames).toContain("React");
    expect(allNames).toContain("Rails");
    expect(allNames).toContain("Laravel");
  });
});
