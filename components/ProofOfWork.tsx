'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, Users, Shield, FileText, Briefcase, UserPlus } from 'lucide-react';

export default function ProofOfWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      icon: Users,
      title: "Community Management at Scale",
      description: "Moderated and managed community of 100,000+ users across Discord & Telegram platforms"
    },
    {
      icon: Shield,
      title: "Fair & Transparent Moderation",
      description: "Consistently enforced community guidelines with fairness and transparency"
    },
    {
      icon: FileText,
      title: "Engaging Content Creation",
      description: "Developed engaging content including announcements, AI/Web3 educational threads, interactive polls, and community trivia events"
    },
    {
      icon: Briefcase,
      title: "Cross-Functional Collaboration",
      description: "Worked closely with the Gaia core team on platform updates and marketing campaigns"
    },
    {
      icon: UserPlus,
      title: "Seamless Member Onboarding",
      description: "Successfully onboarded new community members, providing clear explanations of node systems and participation opportunities"
    }
  ];

  return (
    <section id="proof-of-work" className="py-24 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-4">Proof of Work</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Proven Track Record at Gaianet
          </h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Real achievements and documented success building trust, driving participation, and maintaining a vibrant community culture
          </p>
        </motion.div>

        <div ref={ref} className="space-y-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 p-6 bg-gray-50 dark:bg-gray-950 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-400 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-950 rounded-lg flex items-center justify-center">
                  <achievement.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-start gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">{achievement.title}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 p-6 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg border border-indigo-200 dark:border-indigo-800"
        >
          <p className="text-gray-700 dark:text-gray-300 text-center">
            <strong className="font-semibold text-gray-900 dark:text-white">Ready to bring this level of expertise to your project?</strong> With proven experience managing 100,000+ members and a track record of successful community initiatives, I&apos;m ready to help your Web3 project thrive.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
