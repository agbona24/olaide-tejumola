'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl">
            <h2 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-4">About Me</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Building thriving communities in Web3
            </h3>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                With <strong className="font-semibold text-gray-900 dark:text-white">three years of hands-on experience</strong>, I&apos;ve dedicated myself to building and managing vibrant communities in the Web3, AI, and Tech spaces.
              </p>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Currently moderating over <strong className="font-semibold text-gray-900 dark:text-white">100,000+ members</strong> at Gaianet, a leading decentralized AI network. I&apos;m available <strong className="font-semibold text-gray-900 dark:text-white">12+ hours daily</strong>, providing fast, professional, and reliable support.
              </p>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Core Competencies</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-600 dark:text-indigo-400">→</span>
                    <span><strong className="font-medium text-gray-900 dark:text-white">User Engagement:</strong> Creating strategies that foster active participation and meaningful interactions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-600 dark:text-indigo-400">→</span>
                    <span><strong className="font-medium text-gray-900 dark:text-white">Conflict Resolution:</strong> Maintaining harmony and addressing disputes with professionalism</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-600 dark:text-indigo-400">→</span>
                    <span><strong className="font-medium text-gray-900 dark:text-white">Web3 & AI Knowledge:</strong> Deep understanding of blockchain, NFTs, DeFi, and AI ecosystems</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong className="font-medium text-gray-900 dark:text-white">Education:</strong> B.Sc. Food Engineering, University of Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
