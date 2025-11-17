'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Target, Heart } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Image/Visual */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-cyan-500/20 p-8 backdrop-blur-sm border border-purple-500/30">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl">
                    👋
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Hello!</h3>
                    <p className="text-purple-300">Nice to meet you</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-lg">
                    <Sparkles className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Passionate</h4>
                      <p className="text-sm text-gray-400">About building thriving Web3 communities</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-lg">
                    <Target className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Focused</h4>
                      <p className="text-sm text-gray-400">On creating safe and engaging spaces</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-lg">
                    <Heart className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Dedicated</h4>
                      <p className="text-sm text-gray-400">To fostering positive community culture</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative gradient orbs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500 rounded-full filter blur-3xl opacity-20"></div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <motion.div
                variants={itemVariants}
                className="inline-block mb-4"
              >
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
                  About Me
                </span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                  Building Communities,
                </span>
                <br />
                <span className="text-white">Creating Connections</span>
              </motion.h2>
            </div>

            <motion.div variants={itemVariants} className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                With <span className="text-purple-400 font-semibold">three years of hands-on experience</span>,
                I&apos;ve dedicated myself to building and managing vibrant communities in the Web3, AI, and Tech spaces.
                Currently moderating over <span className="text-cyan-400 font-semibold">100,000+ members</span> at Gaianet,
                a leading decentralized AI network.
              </p>

              <p>
                My expertise lies in <span className="text-cyan-400 font-semibold">Discord and Telegram moderation</span>,
                where I create safe, engaging, and productive environments for community members to connect,
                learn, and grow together. I&apos;m available <span className="text-purple-400 font-semibold">12+ hours daily</span>,
                providing fast, professional, and reliable support.
              </p>

              <p>
                I specialize in:
              </p>

              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">▸</span>
                  <span><strong className="text-white">User Engagement:</strong> Creating strategies that foster active participation and meaningful interactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">▸</span>
                  <span><strong className="text-white">Conflict Resolution:</strong> Maintaining harmony and addressing disputes with professionalism and empathy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">▸</span>
                  <span><strong className="text-white">Web3 & AI Knowledge:</strong> Deep understanding of blockchain, NFTs, DeFi, and AI community dynamics</span>
                </li>
              </ul>

              <p className="pt-4">
                <span className="text-purple-300 font-medium">Education:</span> B.Sc. Food Engineering, University of Lagos, Nigeria
              </p>

              <p className="text-purple-300 font-medium">
                Let&apos;s work together to build a thriving community for your Web3 project!
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
