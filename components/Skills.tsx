'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Shield, Users, TrendingUp, Zap, Bot } from 'lucide-react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      icon: MessageCircle,
      title: "Discord Moderation",
      description: "Expert in managing Discord servers, implementing bots, and creating engaging community experiences",
      color: "from-purple-500 to-purple-700",
      iconColor: "text-purple-400"
    },
    {
      icon: Bot,
      title: "Telegram Management",
      description: "Skilled in Telegram community management, bot configuration, and group administration",
      color: "from-cyan-500 to-cyan-700",
      iconColor: "text-cyan-400"
    },
    {
      icon: Users,
      title: "User Engagement",
      description: "Creating strategies to boost participation, retention, and community satisfaction",
      color: "from-pink-500 to-pink-700",
      iconColor: "text-pink-400"
    },
    {
      icon: Shield,
      title: "Conflict Resolution",
      description: "Professionally handling disputes, maintaining peace, and enforcing community guidelines",
      color: "from-indigo-500 to-indigo-700",
      iconColor: "text-indigo-400"
    },
    {
      icon: TrendingUp,
      title: "Community Growth",
      description: "Developing and executing strategies to scale communities while maintaining quality",
      color: "from-emerald-500 to-emerald-700",
      iconColor: "text-emerald-400"
    },
    {
      icon: Zap,
      title: "Web3 Expertise",
      description: "Deep understanding of blockchain, NFTs, DeFi, and Web3 community dynamics",
      color: "from-orange-500 to-orange-700",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
            Skills & Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              What I Bring to the Table
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive skill set refined through years of hands-on experience in Web3 community management
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="relative h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} p-0.5`}>
                    <div className="w-full h-full bg-slate-800 rounded-xl flex items-center justify-center">
                      <skill.icon className={`w-8 h-8 ${skill.iconColor}`} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                  {skill.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {skill.description}
                </p>

                {/* Hover effect gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

                {/* Corner decoration */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
            <p className="text-lg text-gray-300 mb-4">
              <span className="text-purple-400 font-semibold">Tools & Platforms:</span> Discord, Telegram, Slack, Notion, Trello,
              Google Workspace, Typeform, Canva, ChatGPT, Twitter/X, Reddit
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Discord', 'Telegram', 'Slack', 'Notion', 'Trello', 'Google Workspace', 'Typeform', 'Canva', 'ChatGPT', 'Twitter/X', 'Reddit'].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-slate-800/70 rounded-full text-sm text-gray-300 border border-slate-700"
                >
                  {tool}
                </span>
              ))}
            </div>
            <p className="text-md text-gray-400 mt-6">
              <span className="text-cyan-400 font-semibold">Languages:</span> English (Fluent), Yoruba (Native)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
