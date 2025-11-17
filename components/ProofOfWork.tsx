'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { CheckCircle2, Users, Shield, FileText, Briefcase, UserPlus, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';

export default function ProofOfWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const proofs = [
    {
      icon: Users,
      title: "Community Management at Scale",
      description: "Moderated and managed community of 100,000+ users across Discord & Telegram platforms",
      color: "purple",
      gradient: "from-purple-500 to-purple-700",
      images: [
        { src: "/proofs/community-scale-1.png", alt: "Discord community statistics" },
        { src: "/proofs/community-scale-2.png", alt: "Telegram community overview" }
      ]
    },
    {
      icon: Shield,
      title: "Fair & Transparent Moderation",
      description: "Consistently enforced community guidelines with fairness and transparency",
      color: "cyan",
      gradient: "from-cyan-500 to-cyan-700",
      images: [
        { src: "/proofs/moderation-1.png", alt: "Moderation guidelines enforcement" },
        { src: "/proofs/moderation-2.png", alt: "Community safety measures" }
      ]
    },
    {
      icon: FileText,
      title: "Engaging Content Creation",
      description: "Developed engaging content including announcements, AI/Web3 educational threads, interactive polls, and community trivia events",
      color: "pink",
      gradient: "from-pink-500 to-pink-700",
      images: [
        { src: "/proofs/content-1.png", alt: "Educational content threads" },
        { src: "/proofs/content-2.png", alt: "Community polls and engagement" },
        { src: "/proofs/content-3.png", alt: "Interactive trivia events" },
        { src: "/proofs/content-4.png", alt: "Community announcements" }
      ]
    },
    {
      icon: Briefcase,
      title: "Cross-Functional Collaboration",
      description: "Worked closely with the Gaia core team on platform updates and marketing campaigns",
      color: "indigo",
      gradient: "from-indigo-500 to-indigo-700",
      images: [
        { src: "/proofs/collaboration-1.png", alt: "Team collaboration on updates" },
        { src: "/proofs/collaboration-2.png", alt: "Marketing campaign coordination" },
        { src: "/proofs/collaboration-3.png", alt: "Platform update communications" }
      ]
    },
    {
      icon: UserPlus,
      title: "Seamless Member Onboarding",
      description: "Successfully onboarded new community members, providing clear explanations of node systems and participation opportunities",
      color: "emerald",
      gradient: "from-emerald-500 to-emerald-700",
      images: [
        { src: "/proofs/onboarding-1.png", alt: "New member welcome and guidance" },
        { src: "/proofs/onboarding-2.png", alt: "Node system explanations" },
        { src: "/proofs/onboarding-3.png", alt: "Participation opportunity details" },
        { src: "/proofs/onboarding-4.png", alt: "Member support and assistance" },
        { src: "/proofs/onboarding-5.png", alt: "Community integration support" }
      ]
    }
  ];

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

  const ImageGallery = ({ images, color }: { images: typeof proofs[0]['images']; color: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
      <div className="relative group">
        <div
          className="relative w-full h-64 bg-slate-800/50 rounded-lg overflow-hidden cursor-pointer"
          onClick={() => setSelectedImage(images[currentIndex])}
        >
          {/* Placeholder for when images are added */}
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
            <div className="text-center p-6">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${
                color === 'purple' ? 'from-purple-500 to-purple-700' :
                color === 'cyan' ? 'from-cyan-500 to-cyan-700' :
                color === 'pink' ? 'from-pink-500 to-pink-700' :
                color === 'indigo' ? 'from-indigo-500 to-indigo-700' :
                'from-emerald-500 to-emerald-700'
              } flex items-center justify-center`}>
                <FileText className="w-8 h-8 text-white" />
              </div>
              <p className="text-gray-400 text-sm mb-2">Screenshot {currentIndex + 1} of {images.length}</p>
              <p className="text-gray-500 text-xs">Add your images to /public/proofs/</p>
            </div>
          </div>

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900/80 hover:bg-slate-900 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900/80 hover:bg-slate-900 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </>
          )}

          {/* Image counter */}
          <div className="absolute bottom-2 right-2 px-3 py-1 bg-slate-900/80 rounded-full text-xs text-gray-300">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail indicators */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 mt-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? `bg-${color}-400 w-6`
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="proof-of-work" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
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
            Proven Track Record
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              Proof of Work
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real achievements and documented success at <span className="text-purple-400 font-semibold">Gaianet</span> -
            building trust, driving participation, and maintaining a vibrant community culture
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {proofs.map((proof, index) => (
            <motion.div
              key={proof.title}
              variants={itemVariants}
              className="relative"
            >
              <div className={`grid lg:grid-cols-2 gap-8 items-start ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="sticky top-24">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${proof.gradient} p-0.5 flex-shrink-0`}>
                        <div className="w-full h-full bg-slate-800 rounded-xl flex items-center justify-center">
                          <proof.icon className={`w-7 h-7 text-${proof.color}-400`} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className={`w-5 h-5 text-${proof.color}-400`} />
                          <h3 className="text-2xl font-bold text-white">
                            {proof.title}
                          </h3>
                        </div>
                        <p className="text-gray-400 text-lg leading-relaxed">
                          {proof.description}
                        </p>
                      </div>
                    </div>

                    {/* Stats or additional info could go here */}
                    <div className={`mt-6 p-4 bg-gradient-to-r ${
                      proof.color === 'purple' ? 'from-purple-500/10 to-purple-500/5' :
                      proof.color === 'cyan' ? 'from-cyan-500/10 to-cyan-500/5' :
                      proof.color === 'pink' ? 'from-pink-500/10 to-pink-500/5' :
                      proof.color === 'indigo' ? 'from-indigo-500/10 to-indigo-500/5' :
                      'from-emerald-500/10 to-emerald-500/5'
                    } rounded-lg border border-${proof.color}-500/20`}>
                      <p className="text-sm text-gray-400">
                        <span className={`text-${proof.color}-400 font-semibold`}>
                          {proof.images.length} {proof.images.length === 1 ? 'screenshot' : 'screenshots'}
                        </span> documenting this achievement
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image Gallery */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <ImageGallery images={proof.images} color={proof.color} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to bring this level of expertise to your project?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl">
              With proven experience managing 100,000+ members and a track record of successful community initiatives,
              I&apos;m ready to help your Web3 project thrive.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              Let&apos;s Talk
            </a>
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="max-w-6xl w-full">
            <div className="bg-slate-800 rounded-lg p-2">
              <div className="w-full h-[80vh] flex items-center justify-center bg-slate-900 rounded">
                <p className="text-gray-400">Image: {selectedImage.alt}</p>
              </div>
            </div>
            <p className="text-center text-gray-400 mt-4">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
