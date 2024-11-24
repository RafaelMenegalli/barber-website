"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Iniciante",
    price: "R$29",
    description: "Perfeito para pequenos negócios",
    features: [
      "Até 1.000 chamadas de API/mês",
      "2 modelos de IA incluídos",
      "Análises básicas",
      "Suporte por e-mail",
      "SLA de 99,9% de disponibilidade"
    ]
  },
  {
    name: "Profissional",
    price: "R$99",
    description: "Ideal para empresas em crescimento",
    features: [
      "Até 10.000 chamadas de API/mês",
      "5 modelos de IA incluídos",
      "Análises avançadas",
      "Suporte prioritário",
      "Treinamento de modelos personalizado",
      "SLA de 99,99% de disponibilidade"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Para operações em larga escala",
    features: [
      "Chamadas de API ilimitadas",
      "Todos os modelos de IA incluídos",
      "Análises empresariais",
      "Suporte dedicado 24/7",
      "Treinamento de modelos personalizado",
      "Integrações personalizadas",
      "SLA de 99,999% de disponibilidade"
    ]
  }
];

export function PricingSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div id="pricing" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nossos Preços</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Escolha o plano perfeito para suas necessidades. Todos os planos incluem nossos recursos principais.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`relative flex flex-col rounded-2xl bg-card p-8 shadow-sm ring-1 ring-muted ${plan.popular ? 'ring-2 ring-primary' : 'ring-1 ring-muted'
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold leading-7">{plan.name}</h3>
                <p className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground ml-1">/month</span>}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="mb-6 space-y-3 text-sm leading-6 text-muted-foreground">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex">
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  {plan.price === "Custom" ? "Contato Comercial" : "Começar"}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}