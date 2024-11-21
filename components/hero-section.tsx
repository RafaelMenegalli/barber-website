"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative isolate">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
 
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl pt-32 sm:pt-48 lg:pt-56">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Seu Sistema de Gestão Completo para {" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Barbearias
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Transforme sua barbearia em um negócio de sucesso: gestão simples, clientes satisfeitos e tempo para o que importa!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="group">
                Entre em Contato
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                <Sparkles className="mr-2 h-4 w-4" />
                Testar
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}