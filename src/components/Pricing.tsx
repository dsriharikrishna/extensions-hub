"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
    {
        name: "Basic",
        price: "₹999",
        period: "/month",
        description: "Perfect for start-ups and freelancers.",
        features: [
            "1,000 Maps Leads / day",
            "Unlimited WhatsApp Messages",
            "CSV Export / Import",
            "Basic Personalization",
            "Email Support",
        ],
        cta: "Start Basic Trial",
        popular: false,
    },
    {
        name: "Pro",
        price: "₹1,999",
        period: "/month",
        description: "Best for growing marketing agencies.",
        features: [
            "Unlimited Maps Leads",
            "Unlimited WhatsApp Messages",
            "Smart Delay Control",
            "Custom Campaign Templates",
            "Priority Chat Support",
            "Cloud Sync (Coming Soon)",
        ],
        cta: "Get Started with Pro",
        popular: true,
    },
    {
        name: "Agency",
        price: "₹4,999",
        period: "/month",
        description: "For high-volume lead generation firms.",
        features: [
            "Multi-Account Support",
            "Team Collaboration",
            "Advanced Safety Logic",
            "White-label Reports",
            "Dedicated Account Manager",
            "API Access",
        ],
        cta: "Request Demo",
        popular: false,
    },
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 relative overflow-hidden">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">Simple, Honest <span className="text-gradient">Pricing</span></h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Choose a plan that fits your growth ambitions. No hidden fees, ever.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative glass rounded-[40px] p-8 flex flex-col ${plan.popular ? "border-brand-primary/40 ring-1 ring-brand-primary/40 shadow-2xl shadow-brand-primary/10 scale-105 z-10" : ""
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-xs font-black uppercase tracking-widest flex items-center gap-2">
                                    <Zap size={14} fill="white" /> Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <p className="text-slate-400 text-sm">{plan.description}</p>
                            </div>

                            <div className="mb-8 flex items-baseline gap-1">
                                <span className="text-5xl font-black">{plan.price}</span>
                                <span className="text-slate-500 font-medium">{plan.period}</span>
                            </div>

                            <div className="flex-grow space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
                                            <Check className="text-brand-primary" size={12} strokeWidth={4} />
                                        </div>
                                        <span className="text-sm font-medium text-slate-300">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="#contact" className={`w-full py-4 rounded-2xl font-extrabold text-sm transition-all text-center ${plan.popular
                                ? "bg-gradient-to-r from-brand-primary to-brand-secondary hover:opacity-90 shadow-lg shadow-brand-primary/20"
                                : "bg-white/5 hover:bg-white/10"
                                }`}>
                                {plan.cta}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
