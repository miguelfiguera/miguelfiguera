import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { FileText } from "lucide-react";
import Link from "next/link";
import { Certification } from "@/lib/types/landing.data.types";

interface Props {
  cert: Certification;
}

function CertificationCard(props: Props) {
  const { cert } = props;

  return (
    <Card
      key={cert.id}
      className="bg-gradient-to-br from-gray-900 to-black border-gray-800"
    >
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-silver/10 flex items-center justify-center">
            <FileText className="w-5 h-5 text-silver" />
          </div>
          <CardTitle className="text-lg text-white">{cert.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400 mb-4">{cert.issuer}</p>
        <p className="text-gray-300">{cert.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between border-t border-gray-800 pt-4">
        <p className="text-sm text-gray-400">{cert.date}</p>
        {cert.link && (
          <Link href={cert.link}>
            <Button
              variant="ghost"
              className="text-silver hover:text-white hover:bg-gray-800"
            >
              Verify
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}

export default CertificationCard;
