"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Is LeadZap safe to use with my accounts?",
        answer: "Yes! LeadZap is built with human-like safety intervals and anti-detection logic to ensure your accounts stay safe while automating outreach.",
    },
    {
        question: "Do I need any coding knowledge?",
        answer: "Absolutely not. LeadZap is designed with a clean, intuitive interface. If you can use a browser, you can use LeadZap.",
    },
    {
        question: "Does this violate Google or WhatsApp policies?",
        answer: "LeadZap operates within ethical data extraction limits. We recommend using it responsibly and following best practices for cold outreach.",
    },
    {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 7-day free trial on our Basic and Pro plans so you can experience the power of LeadZap risk-free.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 relative bg-background-dark/30">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">Frequently Asked <span className="text-gradient">Questions</span></h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Everything you need to know about LeadZap and how it can help you grow.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="glass rounded-[32px] overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full p-8 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-bold">{faq.question}</span>
                                <ChevronDown
                                    className={`text-brand-primary transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                                    size={24}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-8 pb-8 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
