import { describe, it, expect } from "vitest";
import { profile } from "../profile";

describe("profile", () => {
  it("has a name", () => {
    expect(profile.name).toBeTruthy();
  });

  it("has an email", () => {
    expect(profile.email).toBeTruthy();
  });

  it("has a linkedin URL", () => {
    expect(profile.linkedin).toBeTruthy();
  });

  it("has a whatsapp link", () => {
    expect(profile.whatsapp).toBeTruthy();
  });

  it("has odooPartner flag", () => {
    expect(typeof profile.odooPartner).toBe("boolean");
  });

  it("has shopifyExperience flag", () => {
    expect(typeof profile.shopifyExperience).toBe("boolean");
  });
});
