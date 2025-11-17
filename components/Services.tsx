'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  MessageSquare,
  Users,
  Shield,
  TrendingUp,
  Sparkles,
  Rocket,
  CheckCircle2
} from 'lucide-react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: MessageSquare,
      title: "Community Setup & Strategy",
      description: "Complete Discord and Telegram server setup with custom configurations, bot integration, and channel structures tailored to your project's needs.",
      features: [
        "Server architecture design",
        "Role and permission setup",
        "Bot integration & configuration",
        "Channel organization"
      ],
      gradient: "from-purple-500 to-purple-700",
      iconColor: "text-purple-400"
    },
    {
      icon: Shield,
      title: "Moderation & Safety",
      description: "Professional moderation services ensuring your community remains safe, respectful, and aligned with your project's values and guidelines.",
      features: [
        "24/7 moderation coverage",
        "Spam & scam prevention",
        "Rule enforcement",
        "Crisis management"
      ],
      gradient: "from-cyan-500 to-cyan-700",
      iconColor: "text-cyan-400"
    },
    {
      icon: Users,
      title: "User Engagement",
      description: "Create and implement engagement strategies that boost participation, foster loyalty, and build a vibrant, active community culture.",
      features: [
        "Engagement campaigns",
        "Community events",
        "Content creation",
        "Reward programs"
      ],
      gradient: "from-pink-500 to-pink-700",
      iconColor: "text-pink-400"
    },
    {
      icon: TrendingUp,
      title: "Growth & Analytics",
      description: "Data-driven strategies to grow your community sustainably while maintaining quality and tracking key performance metrics.",
      features: [
        "Growth strategies",
        "Analytics & reporting",
        "Member retention",
        "KPI tracking"
      ],
      gradient: "from-indigo-500 to-indigo-700",
      iconColor: "text-indigo-400"
    },
    {
      icon: Sparkles,
      title: "Community Experience",
      description: "Craft exceptional user experiences through thoughtful onboarding, helpful resources, and responsive support systems.",
      features: [
        "Onboarding processes",
        "Help desk setup",
        "FAQ creation",
        "Member support"
      ],
      gradient: "from-emerald-500 to-emerald-700",
      iconColor: "text-emerald-400"
    },
    {
      icon: Rocket,
      title: "Web3 Consulting",
      description: "Specialized guidance for Web3 projects including NFT drops, token launches, and blockchain community best practices.",
      features: [
        "Web3 strategy",
        "Launch support",
        "Community education",
        "Ecosystem building"
      ],
      gradient: "from-orange-500 to-orange-700",
      iconColor: "text-orange-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-5"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-5"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              Services & Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive community management services tailored to your Web3 project&apos;s unique needs
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-slate-800 rounded-xl flex items-center justify-center">
                      <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className={`w-4 h-4 ${service.iconColor} flex-shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Decorative gradient */}
                <div className={`absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Build Your Community?
            </h3>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl">
              Let&apos;s discuss how I can help you create, grow, and manage a thriving community for your Web3 project.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
