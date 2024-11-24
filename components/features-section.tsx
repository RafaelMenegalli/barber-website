"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Brain, Gauge, Lock, Zap } from "lucide-react";

const features = [
  {
    name: "Titulo card 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, error nemo aut sapiente eos praesentium.",
    icon: Brain,
  },
  {
    name: "Titulo card 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, error nemo aut sapiente eos praesentium.",
    icon: Zap,
  },
  {
    name: "Titulo card 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, error nemo aut sapiente eos praesentium.",
    icon: Lock,
  },
  {
    name: "Titulo card 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, error nemo aut sapiente eos praesentium.",
    icon: Gauge,
  },
];

export function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="features" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">titulo 1</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            frase de efeito 1
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            breve explicativo
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-8 max-w-2xl sm:mt-10 lg:mt-12 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col rounded-lg bg-card p-6 shadow-sm ring-1 ring-inset ring-muted"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}