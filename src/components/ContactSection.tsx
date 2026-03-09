"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, User, AtSign, Briefcase } from "lucide-react";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:dsriharik8432@gmail.com?subject=${encodeURIComponent(
            formData.subject || "LeadZap Inquiry"
        )}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoLink;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-background-dark/80">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left Side: Info */}
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            Let&apos;s Scale Your <br />
                            <span className="text-gradient">Growth Together</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-12 max-w-lg">
                            Have questions about LeadZap? Whether you need a custom agency plan
                            or technical support, our AI-driven support engine is here to help you scale success.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-6 items-start group">
                                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">Email Us Directly</h4>
                                    <p className="text-slate-500 mb-2">For all inquiries and support</p>
                                    <a href="mailto:dsriharik8432@gmail.com" className="text-brand-primary font-bold hover:underline">
                                        dsriharik8432@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start group">
                                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-brand-secondary group-hover:scale-110 transition-transform">
                                    <MessageSquare size={28} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">Live Support</h4>
                                    <p className="text-slate-500">Available for Pro & Agency users via specialized channels.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 w-full"
                    >
                        <div className="glass rounded-[40px] p-8 md:p-12 relative overflow-hidden border-white/5">
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-400 ml-1">Your Name</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all placeholder:text-slate-600"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-400 ml-1">Email Address</label>
                                        <div className="relative">
                                            <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all placeholder:text-slate-600"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-400 ml-1">Subject</label>
                                    <div className="relative">
                                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                                        <input
                                            required
                                            type="text"
                                            name="subject"
                                            placeholder="Agency Plan Inquiry"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all placeholder:text-slate-600"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-400 ml-1">Message</label>
                                    <textarea
                                        required
                                        name="message"
                                        rows={5}
                                        placeholder="How can we help you?"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all placeholder:text-slate-600 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-5 rounded-2xl bg-gradient-to-r from-brand-primary to-brand-secondary text-lg font-black flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-lg shadow-brand-primary/20"
                                >
                                    Send Message <Send size={20} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
