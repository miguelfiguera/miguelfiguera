import { describe, it, expect } from "vitest";
import { services } from "@/data/services";
import { experiences } from "@/data/experience";
import { certifications } from "@/data/certifications";
import { profile } from "@/data/profile";

const VALID_ICON_NAMES = [
  "Layers",
  "Server",
  "MonitorSmartphone",
  "ShieldCheck",
  "BrainCircuit",
  "Building2",
  "Database",
  "Headset",
  "Wrench",
];

const FORBIDDEN_CERT_KEYWORDS = [
  "AWS Certified",
  "Google Cloud",
  "Azure",
  "Cisco",
  "CompTIA",
  "Certified Kubernetes",
];

describe("cross-module data integrity", () => {
  describe("services — icon names", () => {
    it.each(services.map((s) => [s.id, s.iconName] as const))(
      "service %s has a valid iconName (%s)",
      (_id, iconName) => {
        expect(VALID_ICON_NAMES).toContain(iconName);
      },
    );
  });

  describe("experience — dates are reasonable", () => {
    const currentYear = new Date().getFullYear();

    it.each(experiences.map((e) => [e.company, e.title, e] as const))(
      "%s — %s has reasonable dates",
      (_company, _title, exp) => {
        const startYear = parseInt(exp.startDate.split("-")[0], 10);
        expect(startYear).toBeGreaterThanOrEqual(2000);
        expect(startYear).toBeLessThanOrEqual(currentYear);

        if (exp.endDate !== "present") {
          const endYear = parseInt(exp.endDate.split("-")[0], 10);
          expect(endYear).toBeGreaterThanOrEqual(startYear);
          expect(endYear).toBeLessThanOrEqual(currentYear);
        }
      },
    );
  });

  describe("certifications — no fake entries", () => {
    it("does not contain forbidden certification keywords", () => {
      const allNames = certifications.map((c) => c.name).join(" ");
      for (const keyword of FORBIDDEN_CERT_KEYWORDS) {
        expect(allNames).not.toContain(keyword);
      }
    });

    it.each(certifications.map((c) => [c.name, c] as const))(
      "%s has a non-empty issuer",
      (_name, cert) => {
        expect(cert.issuer).toBeTruthy();
      },
    );
  });

  describe("profile — contact format validation", () => {
    it("email matches a valid format", () => {
      expect(profile.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });

    it("linkedin URL starts with https://www.linkedin.com/", () => {
      expect(profile.linkedin).toMatch(/^https:\/\/www\.linkedin\.com\//);
    });

    it("whatsapp URL starts with https://wa.me/", () => {
      expect(profile.whatsapp).toMatch(/^https:\/\/wa\.me\//);
    });

    it("github URL starts with https://github.com/", () => {
      expect(profile.github).toMatch(/^https:\/\/github\.com\//);
    });

    it("website URL is a valid https URL", () => {
      expect(profile.website).toMatch(/^https:\/\/.+/);
    });
  });
});
