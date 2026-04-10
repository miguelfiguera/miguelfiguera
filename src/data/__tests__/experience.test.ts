import { describe, it, expect } from "vitest";
import { experiences } from "../experience";

describe("experiences", () => {
  it("contains 6 entries", () => {
    expect(experiences).toHaveLength(6);
  });

  it.each(experiences.map((exp, i) => [exp.company, exp, i] as const))(
    "%s has all required fields",
    (_company, exp) => {
      expect(exp.company).toBeTruthy();
      expect(exp.title).toBeTruthy();
      expect(exp.type).toBeTruthy();
      expect(exp.startDate).toBeTruthy();
      expect(exp.location).toBeTruthy();
      expect(typeof exp.remote).toBe("boolean");
      expect(Array.isArray(exp.description)).toBe(true);
      expect(exp.description.length).toBeGreaterThan(0);
    },
  );
});
