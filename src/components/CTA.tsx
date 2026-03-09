"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

const CTA = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative glass rounded-[48px] p-12 md:p-24 text-center overflow-hidden border-brand-primary/20 shadow-2xl shadow-brand-primary/10"
                >
                    {/* Background Elements */}
                    <div className="absolute -top-1/2 -left-1/4 w-[600px] h-[600px] bg-brand-primary/20 blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] bg-brand-secondary/20 blur-[120px] rounded-full pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 rounded-2xl bg-brand-primary flex items-center justify-center mb-10 shadow-lg shadow-brand-primary/50 animate-bounce">
                            <Zap className="text-white fill-white" size={32} />
                        </div>

                        <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
                            Start Generating <br />
                            <span className="text-gradient">Leads Today</span>
                        </h2>

                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                            Join 500+ businesses who have automated their lead extraction and outreach with LeadZap.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="#contact" className="group bg-white text-black px-10 py-5 rounded-2xl text-xl font-black hover:scale-105 transition-all flex items-center gap-3">
                                Get Started Now <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-brand-secondary/50 flex items-center justify-center text-[10px] font-bold">U{i}</div>
                                    ))}
                                </div>
                                <span className="text-sm text-slate-500 font-medium">500+ Active Users</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
