import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function NewsletterSubscribe() {
  return (
    <div className="mt-20 bg-gray-900 border border-gray-800 rounded-xl p-8">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Subscribe to the Newsletter
          </h2>
          <p className="text-gray-300 mb-6">
            Get the latest articles, tutorials, and updates delivered straight
            to your inbox.
          </p>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-black border-gray-800 text-white"
            />
            <Button className="bg-silver hover:bg-gray-300 text-black">
              Subscribe
            </Button>
          </div>
        </div>
        <div className="md:w-1/3">
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Newsletter"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default NewsletterSubscribe;
