// components/Home/Testimonials.tsx
"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Star, Quote, Users, MapPin, Calendar } from "lucide-react";
import Container from "@/components/Ui/Container";

const testimonials = [
  {
    id: 1,
    name: "Andrew Takla",
    role: "Outdoor Enthusiast",
    location: "Rocky Mountains, CO",
    avatar: "https://i.ibb.co.com/LXrX4C2N/15215642-AP24206630683906.jpg",
    rating: 5,
    date: "June 2024",
    review:
      "TrailNest made finding the perfect campsite so easy! The detailed listings and real photos helped us pick the ideal spot for our family camping trip.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Hiking Guide",
    location: "Pacific Northwest, WA",
    avatar: "https://i.ibb.co.com/PZCggpcy/04.jpg",
    rating: 5,
    date: "May 2024",
    review:
      "I've been using TrailNest for all my guided trips. The gear rental options and campsite reviews are incredibly reliable. Highly recommend!",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Nature Photographer",
    location: "Smoky Mountains, TN",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 4.5,
    date: "April 2024",
    review:
      "As a photographer, location is everything. TrailNest helped me discover hidden gems that I would have never found otherwise. Game changer!",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Camping Gear Reviewer",
    location: "Sierra Nevada, CA",
    avatar: "https://i.pravatar.cc/150?img=4",
    rating: 5,
    date: "March 2024",
    review:
      "The gear listings are comprehensive and accurate. I've rented equipment for several trips now and everything has been top-notch quality.",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Family Travel Blogger",
    location: "Adirondacks, NY",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 4.5,
    date: "February 2024",
    review:
      "Finding family-friendly campsites can be tough, but TrailNest's filtering system makes it so simple. Our kids loved every trip!",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Solo Adventurer",
    location: "Yellowstone, WY",
    avatar: "https://i.pravatar.cc/150?img=6",
    rating: 5,
    date: "January 2024",
    review:
      "I travel solo and safety is my top priority. TrailNest's verified listings and host reviews give me peace of mind on every adventure.",
  },
];

const testimonialsRow2 = [...testimonials].reverse();

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : star - 0.5 <= rating
                ? "fill-yellow-400/50 text-yellow-400"
                : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => {
  return (
    <div className="group relative mx-4 w-[340px] shrink-0 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-(--primary)/20 hover:shadow-xl">
      {/* Background Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-(--primary)/5 to-(--secondary)/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Quote Icon */}
      <div className="absolute right-4 top-4 text-(--primary)/10 transition-opacity duration-500 group-hover:text-(--primary)/20">
        <Quote className="h-8 w-8" />
      </div>

      {/* Rating */}
      <div className="relative">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Review Text */}
      <p className="relative mt-4 text-sm text-(--text-secondary) leading-relaxed line-clamp-4">
        &quot;{testimonial.review}&quot;
      </p>

      {/* Divider */}
      <div className="relative my-4 h-px w-full bg-gray-200/70" />

      {/* Reviewer Info */}
      <div className="relative flex items-center gap-3">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-(--primary)/20">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-(--dark) truncate">
            {testimonial.name}
          </p>
          <div className="flex flex-wrap items-center gap-1 text-xs text-(--text-secondary)">
            <span>{testimonial.role}</span>
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-0.5">
              <MapPin className="h-3 w-3 text-(--primary)" />
              {testimonial.location}
            </span>
          </div>
        </div>
      </div>

      {/* Date Badge */}
      <div className="relative mt-3 flex items-center gap-1 text-xs text-(--text-secondary)/70">
        <Calendar className="h-3 w-3" />
        <span>{testimonial.date}</span>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-(--primary) to-(--secondary) scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-(--background) to-white py-16 sm:py-24">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-(--primary)/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-(--secondary)/5 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-(--primary)/5 blur-3xl" />
      </div>

      <Container>
        {/* Header */}
        <div className="relative mx-auto mb-14 max-w-3xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="inline-block h-1 w-8 rounded-full bg-(--primary)" />
            <span className="text-xs font-semibold uppercase tracking-[3px] text-(--primary)">
              Testimonials
            </span>
            <span className="inline-block h-1 w-8 rounded-full bg-(--primary)" />
          </div>

          <h2 className="text-3xl font-bold text-(--dark) sm:text-4xl md:text-5xl">
            What Our{" "}
            <span className="bg-gradient-to-r from-(--primary) to-(--secondary) bg-clip-text text-transparent">
              Adventurers
            </span>{" "}
            Say
          </h2>

          <p className="mt-4 text-base text-(--text-secondary) sm:text-lg">
            Real stories from real explorers who found their perfect outdoor
            experiences with TrailNest.
          </p>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-(--primary)" />
              <span className="text-sm font-medium text-(--dark)">
                10,000+ Happy Campers
              </span>
            </div>
            <div className="hidden h-6 w-px bg-gray-200 sm:block" />
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium text-(--dark)">
                4.9/5 Average Rating
              </span>
            </div>
          </div>
        </div>
      </Container>

      {/* Marquee Rows */}
      <div className="relative">
        {/* Fade Edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-(--background) to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        {/* Row 1 - Left to Right */}
        <div className="mb-5">
          <Marquee gradient={false} speed={40} pauseOnHover>
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={`r1-${testimonial.id}`}
                testimonial={testimonial}
              />
            ))}
          </Marquee>
        </div>

        {/* Row 2 - Right to Left */}
        <Marquee gradient={false} speed={35} direction="right" pauseOnHover>
          {testimonialsRow2.map((testimonial) => (
            <TestimonialCard
              key={`r2-${testimonial.id}`}
              testimonial={testimonial}
            />
          ))}
        </Marquee>
      </div>

      {/* Bottom CTA */}
      <Container>
        <div className="relative mt-16 text-center">
          <p className="text-sm text-(--text-secondary)">
            Join thousands of happy adventurers exploring the great outdoors
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative h-10 w-10 rounded-full ring-2 ring-white"
                >
                  <Image
                    src={`https://i.pravatar.cc/150?img=${i + 10}`}
                    alt={`User ${i}`}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              ))}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--primary) text-xs font-semibold text-white ring-2 ring-white">
                +5K
              </div>
            </div>
            <span className="text-sm text-(--text-secondary)">
              joined in the last month
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
