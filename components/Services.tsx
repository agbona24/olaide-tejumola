'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, Users, Shield, TrendingUp } from 'lucide-react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: MessageSquare,
      title: "Community Setup & Strategy",
      description: "Complete Discord and Telegram server setup with custom configurations, bot integration, and channel structures tailored to your project's needs."
    },
    {
      icon: Shield,
      title: "Moderation & Safety",
      description: "Professional moderation services ensuring your community remains safe, respectful, and aligned with your project's values and guidelines."
    },
    {
      icon: Users,
      title: "User Engagement",
      description: "Create and implement engagement strategies that boost participation, foster loyalty, and build a vibrant, active community culture."
    },
    {
      icon: TrendingUp,
      title: "Growth & Analytics",
      description: "Data-driven strategies to grow your community sustainably while maintaining quality and tracking key performance metrics."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-4">Services</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            What I Offer
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Comprehensive community management services tailored to your Web3 project&apos;s unique needs
          </p>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg hover:border-indigo-600 dark:hover:border-indigo-400 transition-colors"
            >
              <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-950 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
