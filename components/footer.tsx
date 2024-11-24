"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Github, Youtube } from "lucide-react";

const navigation = {
    product: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        // { name: "Documentation", href: "#" },
        // { name: "API Reference", href: "#" },
    ],
    company: [
        { name: "Sobre", href: "#" },
        // { name: "Blog", href: "#" },
        // { name: "Careers", href: "#" },
        // { name: "Press", href: "#" },
    ],
    legal: [
        { name: "Privacidade", href: "#" },
        { name: "Termos", href: "#" },
        // { name: "Cookie Policy", href: "#" },
        // { name: "License", href: "#" },
    ],
    social: [
        {
            name: "Facebook",
            href: "#",
            icon: Facebook,
        },
        {
            name: "Instagram",
            href: "#",
            icon: Instagram,
        },
        // {
        //     name: "Twitter",
        //     href: "#",
        //     icon: Twitter,
        // },
        {
            name: "LinkedIn",
            href: "#",
            icon: Linkedin,
        },
        {
            name: "GitHub",
            href: "#",
            icon: Github,
        },
        // {
        //     name: "YouTube",
        //     href: "#",
        //     icon: Youtube,
        // },
    ],
};

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-12 lg:px-8">
                <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                    <div className="pb-6">
                        <h3 className="text-sm font-semibold leading-6">Product</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            {navigation.product.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="pb-6">
                        <h3 className="text-sm font-semibold leading-6">Company</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            {navigation.company.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="pb-6">
                        <h3 className="text-sm font-semibold leading-6">Legal</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            {navigation.legal.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                <div className="mt-10 flex justify-center space-x-10">
                    {navigation.social.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-muted-foreground hover:text-foreground"
                            aria-label={item.name}
                        >
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </Link>
                    ))}
                </div>

                <div className="mt-10 border-t pt-8">
                    <p className="text-center text-xs leading-5 text-muted-foreground">
                        &copy; {new Date().getFullYear()} Socratix. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}