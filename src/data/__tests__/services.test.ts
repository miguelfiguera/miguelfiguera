import { describe, it, expect } from "vitest";
import { services } from "../services";

describe("services", () => {
  it("contains 9 services", () => {
    expect(services).toHaveLength(9);
  });

  it.each(services.map((svc) => [svc.title, svc] as const))(
    "%s has features array",
    (_title, svc) => {
      expect(svc.id).toBeTruthy();
      expect(svc.title).toBeTruthy();
      expect(svc.shortDescription).toBeTruthy();
      expect(svc.description).toBeTruthy();
      expect(svc.iconName).toBeTruthy();
      expect(Array.isArray(svc.features)).toBe(true);
      expect(svc.features.length).toBeGreaterThan(0);
    },
  );
});
