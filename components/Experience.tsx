'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      period: "May 2024 - Present",
      role: "Community Moderator",
      company: "Gaianet",
      description: "Decentralized AI Network",
      location: "Remote",
      achievements: [
        "Managed and moderated 100,000+ members on Discord and Telegram",
        "Enforced community guidelines, resolved conflicts, and provided real-time support",
        "Led weekly AMAs, polls, and Web3/AI discussions",
        "Developed content calendar aligned with product updates",
        "Coordinated with global moderators for 24/7 coverage"
      ]
    },
    {
      period: "Jan 2022 - Apr 2024",
      role: "Moderator",
      company: "Freelance",
      description: "Various Web3 Projects",
      location: "Remote",
      achievements: [
        "Supported community onboarding, moderation, and education",
        "Assisted with NFT drops, token launches, and live Q&A",
        "Created FAQs and community guidelines",
        "Engaged members to maintain active participation",
        "Built strong relationships across multiple Web3 communities"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-4">Experience</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            Professional Journey
          </h3>
        </motion.div>

        <div ref={ref} className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-indigo-600 dark:bg-indigo-400 border-4 border-white dark:border-black"></div>

              <div className="space-y-4">
                {/* Header */}
                <div>
                  <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {exp.company} • {exp.description}
                  </p>
                </div>

                {/* Achievements */}
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                      <span className="text-indigo-600 dark:text-indigo-400 mt-1.5">→</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
