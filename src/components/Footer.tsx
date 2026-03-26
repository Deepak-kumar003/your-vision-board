import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="h-5 w-5" />
            <span className="font-heading text-lg">AgroVision AI</span>
          </div>
          <p className="text-sm opacity-70">
            AI-powered digital agriculture through precise plant diagnostics.
          </p>
        </div>
        <div>
          <h4 className="font-body font-semibold text-sm mb-3">Technology</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li>Image Recognition</li>
            <li>Plant Pathology</li>
            <li>AI/ML Models</li>
            <li>API Access</li>
          </ul>
        </div>
        <div>
          <h4 className="font-body font-semibold text-sm mb-3">Resources</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li>About Us</li>
            <li>Project Demo</li>
            <li>Contact Support</li>
          </ul>
        </div>
        <div>
          <h4 className="font-body font-semibold text-sm mb-3">Community</h4>
          <ul className="space-y-2 text-sm opacity-70">
            <li>Forum</li>
            <li>Blog</li>
            <li>Events</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-xs opacity-50">
        © 2024 AgroVision AI. Lovable. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
