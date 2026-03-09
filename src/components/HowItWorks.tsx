"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Search, Upload, Send } from "lucide-react";

const HowItWorks = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const stepsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const steps = stepsRef.current?.children;
            if (!steps) return;

            gsap.from(steps, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                y: 50,
                stagger: 0.3,
                duration: 0.8,
                ease: "power3.out",
            });

            // Animated connector lines could be added here
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const steps = [
        {
            number: "01",
            icon: <Search size={32} />,
            title: "Extract Leads",
            description: "Search for any business category on Google Maps and click 'Extract' to gather all data point instantly.",
            color: "from-purple-500/20 to-purple-500/0",
        },
        {
            number: "02",
            icon: <Upload size={32} />,
            title: "Upload CSV",
            description: "Import your extracted CSV file into the WhatsApp tool. All names and numbers are automatically mapped.",
            color: "from-blue-500/20 to-blue-500/0",
        },
        {
            number: "03",
            icon: <Send size={32} />,
            title: "Send Campaigns",
            description: "Compose your message, add {{name}}, and hit start. Sit back while LeadZap handles the outreach.",
            color: "from-brand-accent/20 to-brand-accent/0",
        },
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-grid relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">Simple 3-Step <span className="text-gradient">Process</span></h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Go from zero data to a full-blown outreach campaign in less than 5 minutes.
                    </p>
                </div>

                <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 z-0" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                            <div className={`w-24 h-24 rounded-3xl bg-gradient-to-b ${step.color} glass flex items-center justify-center mb-8 border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                                <span className="absolute -top-4 -left-4 text-4xl font-black text-white/5 select-none">{step.number}</span>
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
