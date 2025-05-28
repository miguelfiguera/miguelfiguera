import React from "react";
import { Certification } from "@/lib/types/landing.data.types";
import CertificationCard from "../GeneralUse/CertificationCard";
import { Badge } from "../ui/badge";

interface Props {
  certifications: Certification[];
}

function Certifications(props: Props) {
  const { certifications } = props;

  return (
    <section id="certifications" className="py-20 bg-black">
      <div className="container">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gray-800 text-silver hover:bg-gray-800/90">
            Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Certifications & Skills
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
