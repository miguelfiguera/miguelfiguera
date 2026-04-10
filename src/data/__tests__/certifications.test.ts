import { describe, it, expect } from "vitest";
import { certifications } from "../certifications";

const FORBIDDEN_CERTS = [
  "AWS Certified",
  "Google Cloud",
  "Azure",
  "Cisco",
  "CompTIA",
  "Certified Kubernetes",
  "Meta",
  "Udacity",
];

describe("certifications", () => {
  it("contains 5 entries", () => {
    expect(certifications).toHaveLength(5);
  });

  it.each(certifications.map((cert, i) => [cert.name, cert, i] as const))(
    "%s has all required fields",
    (_name, cert) => {
      expect(cert.name).toBeTruthy();
      expect(cert.issuer).toBeTruthy();
    },
  );

  it("does not contain fake certifications", () => {
    const allNames = certifications.map((c) => c.name).join(" ");
    for (const forbidden of FORBIDDEN_CERTS) {
      expect(allNames).not.toContain(forbidden);
    }
  });
});
