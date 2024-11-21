"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">Socratix</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link href="#features" className="text-foreground/60 hover:text-foreground">
              Funcionalidades
            </Link>
            <Link href="#pricing" className="text-foreground/60 hover:text-foreground">
              Preço
            </Link>
            <Link href="#testimonials" className="text-foreground/60 hover:text-foreground">
              Avaliações
            </Link>
            <ThemeToggle />
            <Button>Contato</Button>
          </div>

          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="ml-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="#features"
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground/60 hover:bg-accent hover:text-foreground"
            >
              Funcionalidades
            </Link>
            <Link
              href="#pricing"
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground/60 hover:bg-accent hover:text-foreground"
            >
              Preço
            </Link>
            <Link
              href="#testimonials"
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground/60 hover:bg-accent hover:text-foreground"
            >
              Avaliações
            </Link>
            <div className="px-3 py-2">
              <Button className="w-full">Contato</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}