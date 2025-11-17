'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white dark:bg-black overflow-hidden pt-16">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/50 rounded-full mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            Available for Projects
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white tracking-tight mb-6 leading-[1.1]"
          >
            Web3 Community Manager & Moderator
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-2xl"
          >
            3 years of experience managing <span className="font-semibold text-gray-900 dark:text-white">100,000+ members</span> across Discord and Telegram for Web3, AI, and Tech communities.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-gray-900 dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 rounded-lg transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#proof-of-work"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors"
            >
              View My Work
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 mt-20 pt-12 border-t border-gray-200 dark:border-gray-800"
          >
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-1">3+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-1">100K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Members</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-1">Expert</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Moderation</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
