'use client';

import { motion } from 'framer-motion';
import {
  Users, Shield, TrendingUp, MessageCircle, Mail,
  Twitter, Send, Award, Calendar, Sparkles,
  BookOpen, CheckCircle, Globe, Zap, Brain, Database
} from 'lucide-react';
import { FaDiscord, FaTelegram } from 'react-icons/fa';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Tejumola Olaide
          </motion.div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="hover:text-purple-500 transition-colors">About</a>
            <a href="#experience" className="hover:text-purple-500 transition-colors">Experience</a>
            <a href="#work" className="hover:text-purple-500 transition-colors">Work</a>
            <a href="#blog" className="hover:text-purple-500 transition-colors">Blog</a>
            <a href="#contact" className="hover:text-purple-500 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-glow" style={{animationDelay: '1.5s'}}></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 mb-8">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span className="text-sm">Available for community building opportunities</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                AI + Web3
              </span>
              <br />
              <span className="text-black dark:text-white">Community Builder</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Building and scaling empowered communities in the decentralized AI ecosystem.
              Specializing in Telegram & Discord management for Web3 projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
              >
                Let's Work Together
              </a>
              <a
                href="#work"
                className="px-8 py-4 glass border border-white/20 dark:border-white/10 text-black dark:text-white font-semibold rounded-full hover:border-purple-500/50 transition-all"
              >
                View My Work
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: '700K+', label: 'Active Nodes (Gaia)' },
                { value: '12hrs', label: 'Daily Availability' },
                { value: '50+', label: 'Content Pieces' },
                { value: '2+', label: 'Years Experience' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                  className="glass rounded-2xl p-6 border border-white/10"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-12"></div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm <strong className="text-black dark:text-white">Tejumola Olaide</strong>, based in Nigeria, working at the intersection of AI and Web3 to build globally connected communities.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  As the daily manager of <strong className="text-purple-500">Gaia&apos;s official Telegram</strong> and moderator on <strong className="text-purple-500">Gaia Discord</strong>, I specialize in scaling communities while maintaining strong culture and engagement.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  My mission is to simplify complex AI + Web3 concepts into clean, engaging content that empowers users and drives ecosystem growth. I work 12 hours daily managing communities and supporting the decentralized AI revolution.
                </p>
              </div>

              <div className="glass rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">Core Focus Areas</h3>
                <div className="space-y-4">
                  {[
                    { icon: Users, text: 'Community building & scaling' },
                    { icon: MessageCircle, text: 'Telegram & Discord management' },
                    { icon: TrendingUp, text: 'Engagement loops & growth' },
                    { icon: BookOpen, text: 'Educational content creation' },
                    { icon: Shield, text: 'Moderation & safety' },
                    { icon: Zap, text: 'Campaign execution (Galxe, QuestN)' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-purple-500" />
                      <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-6 bg-gray-50 dark:bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Core Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-16 mx-auto"></div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: 'Community Management',
                skills: ['Telegram & Discord', 'Engagement loops', 'User onboarding', 'Community culture']
              },
              {
                icon: BookOpen,
                title: 'Content Creation',
                skills: ['AI/Web3 explainers', 'Educational threads', 'Announcements', 'Campaign content']
              },
              {
                icon: Shield,
                title: 'Moderation & Safety',
                skills: ['Community guidelines', 'Conflict resolution', 'Bot management', 'Security protocols']
              },
              {
                icon: Zap,
                title: 'Campaign Execution',
                skills: ['Galxe campaigns', 'QuestN setup', 'Event hosting', 'AMA coordination']
              },
              {
                icon: Brain,
                title: 'AI Agent Awareness',
                skills: ['GaiaNet ecosystem', 'Decentralized AI', 'Node operations', '$GAIA utilities']
              },
              {
                icon: Globe,
                title: 'Global Outreach',
                skills: ['Africa expansion', 'Community storytelling', 'Event speaking', 'Ecosystem support']
              }
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all"
              >
                <skill.icon className="w-12 h-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-4 text-black dark:text-white">{skill.title}</h3>
                <ul className="space-y-2">
                  {skill.skills.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Stack Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Tools & Stack</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-16 mx-auto"></div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                category: 'Discord Tools',
                tools: ['Carlbot', 'Wick', 'MEE6', 'Rose']
              },
              {
                category: 'Telegram Tools',
                tools: ['Rose Bot', 'Combot']
              },
              {
                category: 'AI Tools',
                tools: ['ChatGPT', 'Claude', 'Gemini', 'Otaku AI']
              },
              {
                category: 'Growth Tools',
                tools: ['Galxe', 'QuestN']
              },
              {
                category: 'Organization',
                tools: ['Notion', 'Google Docs']
              },
              {
                category: 'Content',
                tools: ['Typefully']
              }
            ].map((stack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-2xl p-6 border border-white/10"
              >
                <Database className="w-8 h-8 text-cyan-500 mb-3" />
                <h3 className="font-bold mb-3 text-black dark:text-white">{stack.category}</h3>
                <div className="space-y-2">
                  {stack.tools.map((tool, j) => (
                    <div key={j} className="text-sm text-gray-600 dark:text-gray-400">
                      • {tool}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - Gaia Focus */}
      <section id="experience" className="py-32 px-6 bg-gray-50 dark:bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-16"></div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500"></div>

            {/* Gaia Experience */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-24 pb-16"
            >
              <div className="absolute left-5 top-0 w-7 h-7 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-white dark:border-black"></div>

              <div className="glass rounded-3xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-purple-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">2023 - Present</span>
                </div>

                <h3 className="text-3xl font-bold mb-2 text-black dark:text-white">GaiaNet</h3>
                <p className="text-xl text-purple-500 mb-6">Telegram Manager & Discord Moderator</p>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Leading community management for GaiaNet&apos;s decentralized AI ecosystem, helping scale to 700,000+ active nodes while maintaining strong community culture and education.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "Manage Gaia's official Telegram channel daily",
                    'Active moderator on Gaia Discord server',
                    'Spoke at GaiaNet Online World Tour (Turkish Community Week)',
                    'Support ecosystem growth through education and community storytelling',
                    'Created 50+ Web3 + AI educational content pieces',
                    'Deep understanding of $GAIA token utilities and decentralized AI narrative',
                    'Facilitate weekly AMAs, polls, and community discussions'
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Community Management', 'Content Creation', 'Event Speaking', 'Education', 'Ecosystem Support'].map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm text-purple-600 dark:text-purple-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proof of Work Section */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Proof of Work</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-16 mx-auto"></div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Educational Content',
                description: '50+ Web3 & AI explainer threads, tutorials, and announcements',
                icon: BookOpen,
                color: 'from-cyan-500 to-blue-500'
              },
              {
                title: 'Event Hosting',
                description: 'GaiaNet Online World Tour speaker, AMA coordination, live sessions',
                icon: Users,
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Community Operations',
                description: 'Daily management of high-volume Telegram & Discord communities',
                icon: MessageCircle,
                color: 'from-pink-500 to-red-500'
              },
              {
                title: 'Ecosystem Growth',
                description: 'Contributing to 700K+ active nodes through education and support',
                icon: TrendingUp,
                color: 'from-green-500 to-cyan-500'
              },
              {
                title: 'Campaign Execution',
                description: 'Galxe & QuestN campaigns, community quests, reward programs',
                icon: Award,
                color: 'from-yellow-500 to-orange-500'
              },
              {
                title: 'Global Outreach',
                description: 'Building Web3 adoption in Africa, community storytelling',
                icon: Globe,
                color: 'from-indigo-500 to-purple-500'
              }
            ].map((work, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${work.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <work.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">{work.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{work.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-32 px-6 bg-gray-50 dark:bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-16 mx-auto"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'GaiaNet World Tour Speaker',
                description: 'Hosted and spoke at the GaiaNet Online World Tour during Turkish Community Week',
                badge: '🎤'
              },
              {
                title: '50+ Educational Pieces',
                description: 'Created comprehensive Web3 & AI content that simplifies complex concepts',
                badge: '📚'
              },
              {
                title: 'Trusted Community Operator',
                description: 'Strong reputation for engagement, clarity, and consistency in high-volume communities',
                badge: '⭐'
              },
              {
                title: '700K+ Node Growth',
                description: "Contributed to GaiaNet's massive ecosystem expansion through education and support",
                badge: '🚀'
              }
            ].map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 border border-white/10"
              >
                <div className="text-5xl mb-4">{achievement.badge}</div>
                <h3 className="text-2xl font-bold mb-3 text-black dark:text-white">{achievement.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Community Feedback</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-16 mx-auto"></div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Tejumola&apos;s dedication to the Gaia community is unmatched. Always available, always helpful, and always creating valuable content.",
                author: "Community Member",
                role: "GaiaNet Discord"
              },
              {
                quote: "The educational threads and clear explanations make complex AI concepts accessible. A true community builder.",
                author: "Ecosystem Participant",
                role: "Telegram Community"
              },
              {
                quote: "Professional, responsive, and genuinely invested in helping the community grow. The quality of moderation is excellent.",
                author: "Web3 Builder",
                role: "GaiaNet Ecosystem"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass rounded-2xl p-8 border border-white/10"
              >
                <div className="text-4xl text-purple-500 mb-4">"</div>
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic">{testimonial.quote}</p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-bold text-black dark:text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Engagements */}
      <section className="py-32 px-6 bg-gray-50 dark:bg-black/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Speaking & Events</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-16 mx-auto"></div>

          <div className="space-y-6">
            {[
              {
                event: 'GaiaNet Online World Tour',
                role: 'Speaker & Host',
                segment: 'Turkish Community Week',
                description: 'Presented on decentralized AI adoption and community building strategies',
                date: '2024'
              },
              {
                event: 'GaiaNet Nigerian Segment',
                role: 'Community Representative',
                segment: 'African Expansion',
                description: 'Spoke about Web3 community growth in Africa and the future of decentralized AI',
                date: '2024'
              }
            ].map((speaking, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass rounded-2xl p-8 border border-white/10"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">{speaking.event}</h3>
                    <p className="text-purple-500 font-semibold mb-2">{speaking.role} • {speaking.segment}</p>
                  </div>
                  <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
                    {speaking.date}
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{speaking.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section id="blog" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Latest Insights</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-16 mx-auto"></div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Building Web3 Communities in Africa',
                excerpt: 'Strategies for growing decentralized communities in emerging markets...',
                category: 'Community',
                readTime: '5 min read'
              },
              {
                title: 'The Future of Decentralized AI',
                excerpt: 'How GaiaNet is revolutionizing AI infrastructure with community-driven nodes...',
                category: 'AI & Web3',
                readTime: '7 min read'
              },
              {
                title: 'Effective Discord & Telegram Management',
                excerpt: 'Best practices for managing high-volume crypto communities...',
                category: 'Guide',
                readTime: '6 min read'
              }
            ].map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs text-purple-600 dark:text-purple-400 font-semibold">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black dark:text-white group-hover:text-purple-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{post.excerpt}</p>
                <div className="text-purple-500 text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More
                  <span>→</span>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-4 glass border border-purple-500/30 text-black dark:text-white font-semibold rounded-full hover:border-purple-500 transition-all">
              View All Articles
            </button>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-32 px-6 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">My Vision</h2>
            <p className="text-xl text-white/90 leading-relaxed">
              To become a leading AI/Web3 community operator, helping decentralized AI ecosystems scale globally —
              especially within Africa. Building bridges between innovation and adoption, one community at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">Let&apos;s Build Together</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-12 mx-auto"></div>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Looking for a dedicated community manager for your AI or Web3 project?
            Let&apos;s discuss how I can help your ecosystem grow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transition-all shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
            <a
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 glass border border-white/20 text-black dark:text-white font-semibold rounded-full hover:border-cyan-500/50 transition-all"
            >
              <Send className="w-5 h-5" />
              Telegram
            </a>
          </div>

          <div className="flex justify-center gap-6">
            {[
              { icon: FaTelegram, href: 'https://t.me/yourusername', label: 'Telegram' },
              { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
              { icon: FaDiscord, href: 'https://discord.com/users/yourid', label: 'Discord' }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 glass rounded-full flex items-center justify-center border border-white/10 hover:border-purple-500/50 transition-all group"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-purple-500 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-xl font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                Tejumola Olaide
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                AI + Web3 Community Builder • Nigeria 🇳🇬
              </div>
            </div>

            <div className="flex gap-8 text-sm text-gray-600 dark:text-gray-400">
              <a href="#about" className="hover:text-purple-500 transition-colors">About</a>
              <a href="#experience" className="hover:text-purple-500 transition-colors">Experience</a>
              <a href="#work" className="hover:text-purple-500 transition-colors">Work</a>
              <a href="#blog" className="hover:text-purple-500 transition-colors">Blog</a>
              <a href="#contact" className="hover:text-purple-500 transition-colors">Contact</a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Tejumola Olaide. Building the future of decentralized communities.
          </div>
        </div>
      </footer>
    </div>
  );
}
