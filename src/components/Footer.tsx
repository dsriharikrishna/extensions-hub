"use client";

import React from "react";
import { Zap, Twitter, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="pt-24 pb-12 bg-background-dark border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center group-hover:rotate-12 transition-transform">
                                <Zap className="text-white fill-white" size={18} />
                            </div>
                            <span className="text-lg font-bold tracking-tight">LeadZap</span>
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Empowering businesses with AI-driven automation for lead extraction and personalized outreach.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={20} /></Link>
                            <Link href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></Link>
                            <Link href="#" className="text-slate-500 hover:text-white transition-colors"><Github size={20} /></Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Product</h4>
                        <ul className="space-y-4">
                            <li><Link href="#features" className="text-slate-500 hover:text-white transition-colors text-sm">Features</Link></li>
                            <li><Link href="#pricing" className="text-slate-500 hover:text-white transition-colors text-sm">Pricing</Link></li>
                            <li><Link href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Chrome Extension</Link></li>
                            <li><Link href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Roadmap</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-slate-500 hover:text-white transition-colors text-sm">About Us</Link></li>
                            <li><Link href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Contact</Link></li>
                            <li><Link href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Careers</Link></li>
                            <li><Link href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-slate-500 text-sm">
                                <Mail size={16} /> dsriharik8432@gmail.com
                            </li>
                            <li className="text-slate-500 text-sm">
                                Available 24/7 for our Pro and Agency users.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
                    <p className="text-slate-600 text-xs">
                        © {currentYear} LeadZap Automation. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="text-slate-600 hover:text-white transition-colors text-xs">Terms of Service</Link>
                        <Link href="#" className="text-slate-600 hover:text-white transition-colors text-xs">Privacy Policy</Link>
                        <Link href="#" className="text-slate-600 hover:text-white transition-colors text-xs">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
