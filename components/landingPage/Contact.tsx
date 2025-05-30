"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { Calendar, Mail } from "lucide-react";
import { InlineWidget } from "react-calendly";

interface Props {
  [key: string]: never;
}

function Contact(props: Props) {
  const {} = props;

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <Badge className="mb-4 bg-gray-800 text-silver hover:bg-gray-800/90">
              Get in Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Schedule a Meeting
            </h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Let&apos;s discuss your project requirements and how I can help
              bring your vision to life.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-silver/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-silver" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white">contact@miguelfiguera.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-silver/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-silver" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Availability</p>
                  <p className="text-white">Monday - Friday, 9am - 5pm EST</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black p-6 rounded-xl border border-gray-800">
            <InlineWidget url="https://calendly.com/miguelfiguera/30min" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
