"use client";

import React from "react";
import { motion } from "framer-motion";
import { MousePointerClick, FileDown, MessageSquare, Zap } from "lucide-react";

const SolutionSection = () => {
    const solutions = [
        {
            icon: <MousePointerClick className="text-brand-primary" size={24} />,
            title: "One-Click Extraction",
            description: "Extract hundreds of leads in seconds with a single click from Google Maps.",
        },
        {
            icon: <FileDown className="text-brand-secondary" size={24} />,
            title: "Instant CSV Export",
            description: "Get verified emails, phone numbers, and social links in a clean CSV file.",
        },
        {
            icon: <MessageSquare className="text-brand-accent" size={24} />,
            title: "Smart Personalization",
            description: "Automatically inject lead names into your WhatsApp campaigns for higher trust.",
        },
        {
            icon: <Zap className="text-yellow-400" size={24} />,
            title: "Faster Conversions",
            description: "Reach your leads while they're hot and close deals 10x faster than before.",
        },
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            A Smarter Way to <br />
                            <span className="text-gradient">Grow Your Business</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-10">
                            LeadZap combines powerful data extraction with intelligent outreach.
                            Everything you need to find, reach, and convert customers is now in one place.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {solutions.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl glass flex items-center justify-center text-brand-primary">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">{item.title}</h4>
                                        <p className="text-sm text-slate-500">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="relative z-10 glass rounded-3xl p-2 rotate-2 hover:rotate-0 transition-transform duration-500">
                            <div className="bg-background-dark rounded-2xl overflow-hidden aspect-video relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-brand-secondary/20" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-full bg-brand-primary/20 flex items-center justify-center animate-pulse">
                                        <Zap size={40} className="text-brand-primary fill-current" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-secondary/30 blur-3xl rounded-full" />
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-primary/30 blur-3xl rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
