"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Digital Agency Owner",
        content: "LeadZap has completely transformed our lead gen process. What used to take days now takes minutes. The WhatsApp automation is a game-changer!",
        avatar: "RS",
    },
    {
        name: "Sarah Jenkins",
        role: "Freelance Real Estate Agent",
        content: "The accuracy of the G-Maps extractor is incredible. I've found so many local clients that I never knew existed. Highly recommended!",
        avatar: "SJ",
    },
    {
        name: "Vikram Malhotra",
        role: "Growth Lead at SaaS Startup",
        content: "We've tried many tools, but LeadZap's safety features for WhatsApp are the best. No more worrying about account bans while scaling outreach.",
        avatar: "VM",
    },
];

const Testimonials = () => {
    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">Trusted by <span className="text-gradient">Growth Leaders</span></h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        See how businesses like yours are using LeadZap to scale their outreach and close more deals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-8 rounded-3xl relative"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, star) => (
                                    <Star key={star} size={16} className="text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>

                            <p className="text-slate-300 italic mb-8 leading-relaxed">
                                {t.content}
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center font-bold text-brand-primary">
                                    {t.avatar}
                                </div>
                                <div>
                                    <h4 className="font-bold">{t.name}</h4>
                                    <p className="text-xs text-slate-500">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
