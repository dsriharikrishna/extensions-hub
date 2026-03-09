"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Globe, MessageCircle, BarChart3, Database, Filter } from "lucide-react";

const Features = () => {
    const gMapsFeatures = [
        "One-click scraping from search",
        "Extract phone, email & website",
        "Filter by rating & category",
        "Export to clean CSV / Excel",
        "No monthly lead limits",
        "Real-time data extraction",
    ];

    const whatsappFeatures = [
        "Personalized variables {{name}}",
        "Smart delay control (Human-like)",
        "Bulk sending from CSV",
        "Real-time campaign tracking",
        "Anti-blocking safety logic",
        "Detailed delivery reports",
    ];

    return (
        <section id="features" className="py-24 relative bg-background-dark/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">
                        The Ultimate <span className="text-gradient">Growth Toolkit</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Two powerful tools designed to work together and skyrocket your lead generation efficiency.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* G-Maps Extractor */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass rounded-[40px] p-10 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 text-brand-primary opacity-10 group-hover:rotate-12 transition-transform duration-500">
                            <Globe size={120} />
                        </div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-8">
                                <Globe className="text-brand-primary" size={32} />
                            </div>

                            <h3 className="text-3xl font-black mb-4">Google Maps <br /> Data Extractor</h3>
                            <p className="text-slate-400 mb-8 max-w-md">
                                Find your ideal customers on Google Maps and extract their verified contact details instantly.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {gMapsFeatures.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-brand-primary" size={18} />
                                        <span className="text-sm font-medium text-slate-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* WhatsApp Messenger */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass rounded-[40px] p-10 relative overflow-hidden group border-brand-secondary/10"
                    >
                        <div className="absolute top-0 right-0 p-8 text-brand-secondary opacity-10 group-hover:-rotate-12 transition-transform duration-500">
                            <MessageCircle size={120} />
                        </div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-brand-secondary/10 flex items-center justify-center mb-8">
                                <MessageCircle className="text-brand-secondary" size={32} />
                            </div>

                            <h3 className="text-3xl font-black mb-4">WhatsApp <br /> Bulk Messenger</h3>
                            <p className="text-slate-400 mb-8 max-w-md">
                                Send personalized campaigns to your extracted leads with safety and efficiency.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {whatsappFeatures.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-brand-secondary" size={18} />
                                        <span className="text-sm font-medium text-slate-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Features;
