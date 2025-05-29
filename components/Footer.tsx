import React, { FC } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Linkedin,
  Github,
  Mail,
  MessageCircle as Whatsapp,
} from "lucide-react";
interface Props {
  [key: string]: never;
}

const Footer: FC<Props> = (props) => {
  const {} = props;
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-silver">MF</span>
              <span className="text-xl font-semibold">Miguel Figuera</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Software developer specializing in creating exceptional digital
              experiences.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/miguelfiguera"
                target="_blank"
                className="text-gray-400 hover:text-silver"
              >
                <Github size={20} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/miguel-quintero725/"
                target="_blank"
                className="text-gray-400 hover:text-silver"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://wa.me/584241727988" // WhatsApp link
                target="_blank"
                className="text-gray-400 hover:text-silver"
              >
                <Whatsapp size={20} />
              </Link>
              <Link
                href="mailto:miguelqui725@gmail.com"
                target="_blank"
                className="text-gray-400 hover:text-silver"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-silver">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-gray-400 hover:text-silver"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-400 hover:text-silver"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-silver">
                  Blog
                </Link>
              </li>
              {/*               <li>
                <Link
                  href="/cv-builder"
                  className="text-gray-400 hover:text-silver"
                >
                  CV Builder
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-silver">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-silver">
                  Mobile Applications
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-silver">
                  Odoo Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-silver">
                  Technical Consulting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-silver">
                  Testing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-silver">
                  e-commerce
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates on new projects and articles.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 bg-gray-900 border border-gray-800 rounded-md text-white"
              />
              <Button className="w-full bg-silver hover:bg-gray-300 text-black">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Miguel Figuera. All rights
            reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-silver text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-silver text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
