'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      period: "May 2024 - Present",
      role: "Community Moderator",
      type: "Gaianet (Decentralized AI Network)",
      location: "Remote",
      achievements: [
        "Managed and moderated 100,000+ members on Discord and Telegram",
        "Enforced community guidelines, resolved conflicts, and provided real-time support",
        "Led weekly AMAs, polls, and Web3/AI discussions",
        "Developed content calendar aligned with product updates",
        "Coordinated with global moderators for 24/7 coverage"
      ],
      color: "purple"
    },
    {
      period: "Jan 2022 - Apr 2024",
      role: "Moderator",
      type: "Freelance Community Support (Various Web3 Projects)",
      location: "Remote",
      achievements: [
        "Supported community onboarding, moderation, and education",
        "Assisted with NFT drops, token launches, and live Q&A",
        "Created FAQs and community guidelines",
        "Engaged members to maintain active participation",
        "Built strong relationships across multiple Web3 communities"
      ],
      color: "cyan"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-5"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              Professional Experience
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Three years of dedicated service in building and managing thriving Web3 communities
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 via-cyan-500 to-pink-500 opacity-20"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                <div className="w-full md:w-11/12 lg:w-10/12">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
                  >
                    {/* Timeline dot */}
                    <div className={`hidden md:block absolute top-8 ${
                      index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                    } w-6 h-6 rounded-full bg-gradient-to-br ${
                      exp.color === 'purple' ? 'from-purple-500 to-purple-700' :
                      exp.color === 'cyan' ? 'from-cyan-500 to-cyan-700' :
                      'from-pink-500 to-pink-700'
                    } border-4 border-slate-900 shadow-lg`}></div>

                    {/* Period badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className={`w-5 h-5 ${
                        exp.color === 'purple' ? 'text-purple-400' :
                        exp.color === 'cyan' ? 'text-cyan-400' :
                        'text-pink-400'
                      }`} />
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        exp.color === 'purple' ? 'bg-purple-500/20 text-purple-300' :
                        exp.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-300' :
                        'bg-pink-500/20 text-pink-300'
                      }`}>
                        {exp.period}
                      </span>
                    </div>

                    {/* Role */}
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>

                    {/* Type & Location */}
                    <div className="flex flex-wrap gap-4 mb-6 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <span className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${
                            exp.color === 'purple' ? 'bg-purple-400' :
                            exp.color === 'cyan' ? 'bg-cyan-400' :
                            'bg-pink-400'
                          }`}></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Decorative gradient */}
                    <div className={`absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-br ${
                      exp.color === 'purple' ? 'from-purple-500' :
                      exp.color === 'cyan' ? 'from-cyan-500' :
                      'from-pink-500'
                    } to-transparent rounded-full filter blur-2xl opacity-10`}></div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
