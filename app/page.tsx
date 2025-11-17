'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle, Users, Shield, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { FaDiscord, FaTelegram, FaTwitter } from 'react-icons/fa';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 text-sm mb-6">
              ✨ Available for Web3 Projects
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Olaide Tejumola
              </span>
            </h1>

            <p className="text-3xl md:text-4xl text-gray-300 mb-4">
              Web3 Community Manager
            </p>

            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              3 years managing <span className="text-purple-400 font-semibold">100,000+ members</span> across Discord & Telegram for Web3, AI, and Tech communities
            </p>

            <div className="flex gap-4 justify-center mb-16">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
              >
                Get in Touch
              </a>
              <a
                href="#work"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 transition-all"
              >
                View My Work
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">3+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">100K+</div>
                <div className="text-gray-400">Members</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">Expert</div>
                <div className="text-gray-400">Moderation</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                With <strong className="text-purple-400">three years of hands-on experience</strong>, I've dedicated myself to building and managing vibrant communities in the Web3, AI, and Tech spaces.
              </p>

              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Currently moderating over <strong className="text-pink-400">100,000+ members</strong> at Gaianet, a leading decentralized AI network. I'm available <strong className="text-blue-400">12+ hours daily</strong>, providing fast, professional, and reliable support.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">User Engagement</h4>
                    <p className="text-gray-400 text-sm">Creating strategies that foster active participation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Conflict Resolution</h4>
                    <p className="text-gray-400 text-sm">Maintaining harmony with professionalism</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Web3 & AI Knowledge</h4>
                    <p className="text-gray-400 text-sm">Deep understanding of blockchain & AI ecosystems</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-gray-400"><strong className="text-white">Education:</strong> B.Sc. Food Engineering, University of Lagos, Nigeria</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="space-y-8">
            {/* Gaianet */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 text-gray-400 mb-4">
                <Calendar className="w-5 h-5" />
                <span>May 2024 - Present</span>
                <span>•</span>
                <MapPin className="w-5 h-5" />
                <span>Remote</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Community Moderator</h3>
              <p className="text-purple-400 mb-4">Gaianet • Decentralized AI Network</p>

              <ul className="space-y-2">
                {[
                  'Managed and moderated 100,000+ members on Discord and Telegram',
                  'Enforced community guidelines, resolved conflicts, and provided real-time support',
                  'Led weekly AMAs, polls, and Web3/AI discussions',
                  'Developed content calendar aligned with product updates'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Freelance */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 text-gray-400 mb-4">
                <Calendar className="w-5 h-5" />
                <span>Jan 2022 - Apr 2024</span>
                <span>•</span>
                <MapPin className="w-5 h-5" />
                <span>Remote</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">Moderator</h3>
              <p className="text-pink-400 mb-4">Freelance • Various Web3 Projects</p>

              <ul className="space-y-2">
                {[
                  'Supported community onboarding, moderation, and education',
                  'Assisted with NFT drops, token launches, and live Q&A',
                  'Created FAQs and community guidelines',
                  'Built strong relationships across multiple Web3 communities'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proof of Work Section */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Proof of Work
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Community Management at Scale', desc: '100,000+ users across Discord & Telegram' },
              { title: 'Fair & Transparent Moderation', desc: 'Consistent enforcement with fairness' },
              { title: 'Engaging Content Creation', desc: 'Educational threads, polls, and trivia events' },
              { title: 'Cross-Functional Collaboration', desc: 'Working with core team on updates' },
              { title: 'Seamless Member Onboarding', desc: 'Clear explanations and support systems' },
              { title: 'Community Growth Strategy', desc: 'Sustainable growth while maintaining quality' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>

          <p className="text-xl text-gray-300 mb-12">
            Ready to build an amazing community? Reach out and let's discuss how I can help your Web3 project thrive.
          </p>

          <a
            href="mailto:tolaide73@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 transition-all mb-12 text-lg"
          >
            <Mail className="w-5 h-5" />
            tolaide73@gmail.com
          </a>

          <div className="flex justify-center gap-4 mb-16">
            {[
              { icon: FaDiscord, name: 'Discord', username: '@liamquadri', href: 'https://discord.com/users/liamquadri' },
              { icon: FaTelegram, name: 'Telegram', username: '@tejumolah7', href: 'https://t.me/tejumolah7' },
              { icon: FaTwitter, name: 'Twitter', username: '@tejumola076', href: 'https://twitter.com/tejumola076' }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-6 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all"
              >
                <social.icon className="w-8 h-8 text-purple-400" />
                <div className="text-white font-semibold">{social.name}</div>
                <div className="text-gray-400 text-sm">{social.username}</div>
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 text-gray-400">
            © {new Date().getFullYear()} Olaide Tejumola • Web3 Community Manager
          </div>
        </div>
      </section>
    </div>
  );
}
