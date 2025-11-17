'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Send, MessageCircle } from 'lucide-react';
import { FaDiscord, FaTelegram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    {
      name: 'Discord',
      icon: FaDiscord,
      href: 'https://discord.com/users/liamquadri',
      color: 'hover:text-purple-400',
      bgGradient: 'from-purple-500 to-purple-700'
    },
    {
      name: 'Telegram',
      icon: FaTelegram,
      href: 'https://t.me/tejumolah7',
      color: 'hover:text-cyan-400',
      bgGradient: 'from-cyan-500 to-cyan-700'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      href: 'https://twitter.com/tejumola076',
      color: 'hover:text-blue-400',
      bgGradient: 'from-blue-500 to-blue-700'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: '#',
      color: 'hover:text-blue-500',
      bgGradient: 'from-blue-600 to-blue-800'
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
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
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              Let&apos;s Connect
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to build an amazing community? Reach out and let&apos;s discuss how I can help your project succeed.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 p-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-full h-full bg-slate-800 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-purple-400" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <a href="mailto:tolaide73@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                        tolaide73@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-700 p-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-full h-full bg-slate-800 rounded-lg flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-cyan-400" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Quick Response</h4>
                      <p className="text-gray-400">Available for immediate consultation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Connect on Social</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${social.bgGradient} p-0.5`}>
                        <div className="w-full h-full bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-transparent transition-all duration-300">
                          <social.icon className={`w-6 h-6 text-gray-400 ${social.color} transition-colors duration-300`} />
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                  <h4 className="text-white font-semibold">Available for Projects</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  Currently accepting new community management opportunities for Web3 projects.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="project" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Type
                    </label>
                    <select
                      id="project"
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-purple-500 transition-colors duration-300"
                    >
                      <option>Web3 / Blockchain</option>
                      <option>NFT Project</option>
                      <option>DeFi Protocol</option>
                      <option>AI / Tech</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1, duration: 0.6 }}
        className="relative mt-24 pt-12 border-t border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p className="mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">
                Olaide Tejumola
              </span>
              {' '}- Web3 Community Manager
            </p>
            <p className="text-sm">
              © {new Date().getFullYear()} All rights reserved. Built with Next.js & Framer Motion.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
