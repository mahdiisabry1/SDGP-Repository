import { Button } from "@/components/ui/button";
import React from "react";

export const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="flex items-center justify-between h-full">
        <h1 className="text-2xl font-bold">
          Mind<span className="text-blue-600">F</span>orge
        </h1>
        <nav className="flex items-center gap-4">
          <a className="text-sm cursor-pointer">
            FAQ
          </a>
          <a href="/about" className="text-sm">
            ABOUT
          </a>
          <a href="/contact" className="text-sm">
            CONTACT
          </a>
        </nav>
        <Button variant="default" size="lg">
          Get Started
        </Button>
      </div>
    </header>
  );
};
