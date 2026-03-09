"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Play, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const subheadlineRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const mockRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

            tl.from(headlineRef.current, {
                y: 100,
                opacity: 0,
                stagger: 0.2,
            })
                .from(subheadlineRef.current, {
                    y: 50,
                    opacity: 0,
                }, "-=0.6")
                .from(ctaRef.current, {
                    y: 50,
                    opacity: 0,
                }, "-=0.6")
                .from(mockRef.current, {
                    y: 100,
                    opacity: 0,
                    scale: 0.9,
                }, "-=0.4");

            // Floating animation for mock
            gsap.to(mockRef.current, {
                y: "+=20",
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col items-center justify-center bg-grid glow-mesh"
        >
            {/* Background Blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 blur-[120px] rounded-full animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/20 blur-[120px] rounded-full animate-pulse-slow" />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-primary/20 mb-8"
                >
                    <span className="flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
                    <span className="text-xs font-bold tracking-widest uppercase text-brand-primary">
                        Extract. Connect. Convert.
                    </span>
                </motion.div>

                <h1
                    ref={headlineRef}
                    className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[1.1]"
                >
                    Turn Google Maps Into <br />
                    <span className="text-gradient">Unlimited Leads</span>
                </h1>

                <p
                    ref={subheadlineRef}
                    className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
                >
                    Deploy <span className="text-white font-bold">AI-powered extraction engines</span> to build a scalable sales pipeline.
                    Extract hyper-accurate business data and automate <span className="text-white font-bold">high-conversion WhatsApp campaigns</span> with zero friction.
                </p>

                <div
                    ref={ctaRef}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
                >
                    <Link href="#contact" className="group relative bg-gradient-to-r from-brand-primary to-brand-secondary px-8 py-4 rounded-2xl text-lg font-extrabold hover:scale-105 transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                        <span className="flex items-center gap-2">
                            Start Free Trial <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                    <Link href="#contact" className="px-8 py-4 rounded-2xl text-lg font-bold glass-dark hover:bg-white/10 transition-colors flex items-center gap-2">
                        <Play size={20} fill="white" /> Watch Demo
                    </Link>
                </div>

                {/* Mockup Dashboard */}
                <div
                    ref={mockRef}
                    className="relative max-w-5xl mx-auto mb-20"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 h-full w-full pointer-events-none" />
                    <div className="glass rounded-[40px] p-4 overflow-hidden shadow-2xl shadow-purple-500/10 border-white/5 bg-white/5">
                        <div className="bg-background-dark/80 rounded-[32px] w-full aspect-[16/9] flex items-center justify-center border border-white/5 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                            <div className="z-20 flex flex-col items-center gap-6 p-10 w-full">
                                <div className="w-full flex justify-between gap-4">
                                    <div className="h-40 flex-1 glass rounded-2xl flex flex-col items-center justify-center gap-2">
                                        <span className="text-3xl font-black text-brand-primary">12.5k</span>
                                        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Leads Extracted</span>
                                    </div>
                                    <div className="h-40 flex-1 glass rounded-2xl flex flex-col items-center justify-center gap-2">
                                        <span className="text-3xl font-black text-brand-secondary">94%</span>
                                        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Delivery Rate</span>
                                    </div>
                                    <div className="h-40 flex-1 glass rounded-2xl flex flex-col items-center justify-center gap-2">
                                        <span className="text-3xl font-black text-green-400">8.2x</span>
                                        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">ROI Increase</span>
                                    </div>
                                </div>
                                <div className="w-full h-64 glass rounded-2xl relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 to-transparent animate-pulse" />
                                    <div className="p-8 space-y-4">
                                        <div className="w-1/2 h-2 bg-white/10 rounded-full" />
                                        <div className="w-3/4 h-2 bg-white/10 rounded-full" />
                                        <div className="w-2/3 h-2 bg-white/10 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trusted By */}
                <div className="pt-10 border-t border-white/5 max-w-4xl mx-auto">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-600 mb-8">Trusted by hyper-growth teams globally</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
                        <span className="text-2xl font-black italic tracking-tighter">VOLT</span>
                        <span className="text-2xl font-black tracking-widest">NEXUS</span>
                        <span className="text-2xl font-bold tracking-tight uppercase">Quantra</span>
                        <span className="text-2xl font-black italic">PRISM</span>
                        <span className="text-2xl font-bold tracking-[0.2em] uppercase">Zenith</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
