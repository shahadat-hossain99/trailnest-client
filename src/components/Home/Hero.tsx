// components/Home/Hero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, MapPin, CalendarDays, Zap, Star } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/Ui/Container";
import Button from "../Ui/Button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-orange-50 overflow-hidden">
      {/* Trail Pattern Background */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none select-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="trail-pattern"
              width="160"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M-40 40 Q 20 10, 80 40 T 200 40"
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M-40 80 Q 20 50, 80 80 T 200 80"
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M-40 0 Q 20 -30, 80 0 T 200 0"
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M-40 120 Q 20 90, 80 120 T 200 120"
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#trail-pattern)"
            className="text-(--dark)"
          />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid min-h-[90vh] items-center gap-12 py-12 xl:grid-cols-2 xl:py-20 xl:gap-16">
          {/* Left Content Column */}
          <div className="flex flex-col justify-center max-w-3xl xl:max-w-none mx-auto xl:mx-0">
            {/* Badge - Animated */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-(--dark) shadow-sm">
                <Zap className="w-4 h-4 text-green-500 fill-green-500" />
                Adventure Starts Here
              </span>
            </motion.div>

            {/* Heading - Animated */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-4xl font-extrabold leading-[1.15] text-(--dark) sm:text-5xl md:text-6xl xl:text-7xl"
            >
              Explore Nature,
              <br />
              Book Your Perfect
              <span className="relative inline-block sm:ml-3 mt-2 sm:mt-0">
                <span className="relative z-10 text-white px-2">Campsite.</span>
                <span className="absolute inset-0 z-0 bg-(--primary) rounded-xl scale-105 -rotate-1"></span>
              </span>
            </motion.h1>

            {/* Description - Animated */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 text-base leading-7 text-(--text-secondary) sm:text-lg sm:leading-8 max-w-xl"
            >
              Discover beautiful campsites, rent outdoor gear, and plan your
              next unforgettable adventure with TrailNest. Find the perfect spot
              under the stars.
            </motion.p>

            {/* CTA Buttons - Animated */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-row gap-4"
            >
              <Link href="/explore">
                <Button variant="primary">Explore Listings</Button>
              </Link>

              <Link href="/about">
                <Button variant="outline">Learn More</Button>
              </Link>
            </motion.div>

            {/* Statistics Row - Animated with Stagger */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 grid grid-cols-3 gap-4 border-t border-gray-100 pt-8 max-w-md"
            >
              {[
                { number: "500+", label: "Listings" },
                { number: "10K+", label: "Travelers" },
                { number: "100+", label: "Destinations" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <h2 className="text-2xl font-extrabold text-(--primary) sm:text-3xl">
                    {stat.number}
                  </h2>
                  <p className="text-xs sm:text-sm font-medium text-(--text-secondary) mt-0.5">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Layout Image Mosaic Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-2xl mx-auto xl:max-w-none h-[420px] sm:h-[480px] md:h-[520px] xl:h-[560px]"
          >
            {/* Main Application Mock Container */}
            <div className="relative w-full h-full flex flex-col rounded-3xl border border-gray-100 bg-white/60 p-4 shadow-2xl backdrop-blur-sm">
              {/* Browser Window Navigation Bar Header */}
              <div className="flex items-center gap-1.5 pb-4 px-1 border-b border-gray-100/80 mb-4 flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>

              {/* Dynamic Image Inner Grid Dashboard Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-[1.2fr_1fr] gap-4 flex-1 min-h-0 overflow-hidden">
                {/* Main Large Tent Image Column */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden shadow-md min-h-[180px] sm:min-h-0"
                >
                  <Image
                    src="/hero01.jpg"
                    alt="Main camping destination experience view"
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 30vw"
                    className="object-cover transition-transform duration-500 hover:scale-103"
                  />

                  {/* Floating Action Filter Widget inside Image Frame */}
                  <div className="absolute top-3 left-3 right-3 flex flex-wrap items-center gap-2 rounded-xl border border-white/20 bg-white/90 p-2 shadow-lg backdrop-blur-md text-xs">
                    <div className="flex items-center gap-1 text-gray-600 border-r border-gray-200/80 pr-2">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      <span>Location</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600 border-r border-gray-200/80 pr-2">
                      <CalendarDays className="w-3.5 h-3.5 text-gray-400" />
                      <span>Dates</span>
                    </div>
                    <div className="flex items-center gap-1 font-semibold text-(--dark)">
                      <Search className="w-3.5 h-3.5 text-(--primary)" />
                      <span>Activities</span>
                    </div>
                  </div>
                </motion.div>

                {/* Vertical Stack Right Column */}
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 h-full">
                  {/* Sub-image Item 01 */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-2xl overflow-hidden shadow-sm aspect-square sm:aspect-auto"
                  >
                    <Image
                      src="/hero02.jpg"
                      alt="Gathering experience around campfire"
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1280px) 25vw, 15vw"
                      className="object-cover transition-transform duration-500 hover:scale-103"
                    />
                  </motion.div>
                  {/* Sub-image Item 02 */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-2xl overflow-hidden shadow-sm aspect-square sm:aspect-auto"
                  >
                    <Image
                      src="/hero03.jpg"
                      alt="Essential outdoor camping equipment selection"
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1280px) 25vw, 15vw"
                      className="object-cover transition-transform duration-500 hover:scale-103"
                    />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Overlapping Absolute Review Badge Component */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="hidden md:flex absolute -bottom-5 right-12 items-center gap-3 rounded-2xl bg-white px-5 py-3.5 shadow-xl border border-gray-100"
            >
              <span className="text-sm font-bold text-(--dark)">Ratings</span>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
