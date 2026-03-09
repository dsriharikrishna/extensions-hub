"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, TrendingDown, DollarSign, Ban } from "lucide-react";

const ProblemSection = () => {
    const problems = [
        {
            icon: <Clock className="text-red-400" size={32} />,
            title: "Manual lead collection wastes time",
            description: "Spending hours copy-pasting business details from maps is a bottleneck for your growth.",
        },
        {
            icon: <TrendingDown className="text-orange-400" size={32} />,
            title: "Low response rates on cold outreach",
            description: "Inconsistent outreach methods lead to wasted efforts and zero conversions.",
        },
        {
            icon: <DollarSign className="text-yellow-400" size={32} />,
            title: "Expensive lead generation tools",
            description: "Subscription costs for quality data can eat up your entire marketing budget.",
        },
        {
            icon: <Ban className="text-purple-400" size={32} />,
            title: "No automation for lead nurturing",
            description: "Managing leads manually means you lose potential clients in the follow-up gap.",
        },
    ];

    return (
        <section id="problems" className="py-24 bg-background-dark relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        The Lead Generation <span className="text-red-500">Struggle</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Traditional methods are slow, expensive, and non-scalable.
                        Stop working harder and start working smarter.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="glass p-8 rounded-3xl group hover:border-white/20 transition-all"
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                                {problem.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {problem.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
