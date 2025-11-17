'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { FaDiscord, FaTelegram, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    {
      name: 'Discord',
      icon: FaDiscord,
      href: 'https://discord.com/users/liamquadri',
      username: '@liamquadri'
    },
    {
      name: 'Telegram',
      icon: FaTelegram,
      href: 'https://t.me/tejumolah7',
      username: '@tejumolah7'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      href: 'https://twitter.com/tejumola076',
      username: '@tejumola076'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-4">Get in Touch</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Let&apos;s Build Something Great
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            Ready to build an amazing community? Reach out and let&apos;s discuss how I can help your Web3 project thrive.
          </p>

          {/* Email */}
          <a
            href="mailto:tolaide73@gmail.com"
            className="group inline-flex items-center gap-3 px-6 py-3 text-lg font-medium text-white bg-gray-900 dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 rounded-lg transition-colors mb-12"
          >
            <Mail className="w-5 h-5" />
            tolaide73@gmail.com
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Social Links */}
          <div className="pt-12 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Find me on</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 p-4 bg-gray-50 dark:bg-gray-950 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-lg transition-colors"
                >
                  <social.icon className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                  <div className="text-center">
                    <div className="text-xs font-medium text-gray-900 dark:text-white">{social.name}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{social.username}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Olaide Tejumola. Web3 Community Manager.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
