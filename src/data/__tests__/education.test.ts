import { describe, it, expect } from "vitest";
import { education } from "../education";

describe("education", () => {
  it("contains 2 entries", () => {
    expect(education).toHaveLength(2);
  });

  it.each(education.map((edu) => [edu.institution, edu] as const))(
    "%s has all required fields",
    (_institution, edu) => {
      expect(edu.institution).toBeTruthy();
      expect(edu.degree).toBeTruthy();
      expect(edu.startDate).toBeTruthy();
      expect(edu.endDate).toBeTruthy();
      expect(typeof edu.ongoing).toBe("boolean");
    },
  );

  it("includes UNETI and UPEL", () => {
    const institutions = education.map((e) => e.institution);
    expect(institutions).toContain("UNETI");
    expect(institutions).toContain("UPEL");
  });
});
