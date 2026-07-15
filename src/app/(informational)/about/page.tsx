// app/about/page.tsx
"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  TreePine,
  Users,
  Zap,
  Compass,
  Award,
  Clock,
  ArrowRight,
  Star,
  Mountain,
  Tent,
  MapPin,
  Heart,
} from "lucide-react";
import Container from "@/components/Ui/Container";
import Button from "@/components/Ui/Button";

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
    },
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: TreePine,
      title: "Sustainability",
      desc: "Eco-friendly actions prioritizing the preservation of our shared spaces.",
    },
    {
      icon: Users,
      title: "Community First",
      desc: "Building trusted, long-term relationships through open local networking.",
    },
    {
      icon: Shield,
      title: "Absolute Trust",
      desc: "Verifying systems thoroughly so users interact with complete peace of mind.",
    },
  ];

  const stats = [
    { number: "500+", label: "Premium Campsites", icon: Tent },
    { number: "10K+", label: "Happy Campers", icon: Users },
    { number: "4.9★", label: "Average Rating", icon: Star },
    { number: "50+", label: "Destinations", icon: MapPin },
  ];

  const team = [
    {
      name: "Shahadat Hossain",
      role: "Co-Founder & CEO",
      avatar: "https://i.ibb.co.com/hxS97HZ3/800kb.png",
    },
    {
      name: "Ruhin Ahmed",
      role: "Lead Developer",
      avatar:
        "https://i.ibb.co.com/Psb6SdnL/Whats-App-Image-2026-05-07-at-2-19-54-PM.jpg",
    },
    {
      name: "Hasotullah Khan",
      role: "Head of Community",
      avatar:
        "https://i.ibb.co.com/xt0nBhZM/Whats-App-Image-2026-05-07-at-2-41-33-PM.jpg",
    },
    {
      name: "David Kim",
      role: "Product Designer",
      avatar: "https://i.ibb.co.com/mrTTXNFY/08.jpg",
    },
  ];

  const milestones = [
    {
      year: "2022",
      title: "Founded",
      desc: "TrailNest was born from a passion for the outdoors and community.",
    },
    {
      year: "2023",
      title: "500+ Listings",
      desc: "Grew to over 500 premium campsites and gear listings across the country.",
    },
    {
      year: "2024",
      title: "10K+ Users",
      desc: "Reached a community of 10,000+ happy adventurers.",
    },
    {
      year: "2025",
      title: "Future Forward",
      desc: "Expanding to new destinations and enhancing user experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-(--primary) to-(--dark) overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-(--secondary) rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl mx-auto text-center text-white"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white/90"
            >
              <Compass className="inline h-4 w-4 mr-2 text-(--secondary)" />
              Your Adventure Awaits
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
            >
              Connecting You to
              <span className="block text-(--secondary)">
                Nature & Community
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
            >
              We are building a decentralized, highly sustainable eco-network
              designed to streamline listing assets safely, intelligently, and
              directly within neighborhoods worldwide.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <Link href="/explore">
                <Button variant="secondary" className="text-lg px-8 py-3">
                  Start Exploring
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="text-lg px-8 py-3 text-white border-white/30 hover:bg-white/10 hover:border-white"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-(--background)">
        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 text-(--primary) mx-auto mb-3" />
                <p className="text-3xl font-bold text-(--dark)">
                  {stat.number}
                </p>
                <p className="text-sm text-(--text-secondary)">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="inline-block h-1 w-8 rounded-full bg-(--primary)" />
              <span className="text-xs font-semibold uppercase tracking-[3px] text-(--primary)">
                About Us
              </span>
              <span className="inline-block h-1 w-8 rounded-full bg-(--primary)" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-(--dark)">
              Who We Are
            </h2>
            <div className="mt-6 space-y-4 text-(--text-secondary) leading-relaxed">
              <p>
                Founded by developers and green advocates, this platform
                addresses the missing link between simple online resource
                distribution and premium, trustworthy community spaces.
              </p>
              <p>
                We believe that everyone deserves access to beautiful outdoor
                experiences without compromising safety, trust, or
                sustainability. Our team is dedicated to curating the best
                campsites and gear while fostering a community of responsible
                adventurers.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-(--background)">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="inline-block h-1 w-8 rounded-full bg-(--primary)" />
              <span className="text-xs font-semibold uppercase tracking-[3px] text-(--primary)">
                Our Values
              </span>
              <span className="inline-block h-1 w-8 rounded-full bg-(--primary)" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-(--dark)">
              What We Stand For
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-3"
          >
            {values.map((v, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover="hover"
                className="group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-(--primary)/5 to-(--secondary)/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 inline-flex rounded-xl bg-(--primary)/10 p-3 text-(--primary) group-hover:bg-(--primary) group-hover:text-white transition">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-(--dark) mb-2">
                    {v.title}
                  </h3>
                  <p className="text-(--text-secondary) leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Milestones / Timeline */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="inline-block h-1 w-8 rounded-full bg-(--primary)" />
              <span className="text-xs font-semibold uppercase tracking-[3px] text-(--primary)">
                Journey
              </span>
              <span className="inline-block h-1 w-8 rounded-full bg-(--primary)" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-(--dark)">
              Our Milestones
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 py-6 border-b border-gray-100 last:border-b-0"
              >
                <div className="flex-shrink-0 w-20 text-(--primary) font-bold text-2xl">
                  {milestone.year}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-(--dark)">
                    {milestone.title}
                  </h3>
                  <p className="text-(--text-secondary)">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-(--background)">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="inline-block h-1 w-8 rounded-full bg-(--primary)" />
              <span className="text-xs font-semibold uppercase tracking-[3px] text-(--primary)">
                Team
              </span>
              <span className="inline-block h-1 w-8 rounded-full bg-(--primary)" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-(--dark)">
              Meet the Team
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="relative mx-auto h-32 w-32 rounded-full overflow-hidden ring-4 ring-(--primary)/20">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 font-bold text-(--dark)">{member.name}</h3>
                <p className="text-sm text-(--text-secondary)">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-(--primary) to-(--dark) overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Start Your Adventure?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Join thousands of adventurers who trust TrailNest for their
              outdoor experiences.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/explore">
                <Button variant="secondary" className="text-lg px-8 py-3">
                  Explore Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="text-lg px-8 py-3 text-white border-white/30 hover:bg-white/10 hover:border-white"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
