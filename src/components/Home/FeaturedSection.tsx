// components/Home/FeaturedSection.tsx
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { Mountain, Sparkles } from "lucide-react";
import FeaturedCarousel from "./FeaturedCarousel";
import { serverFetch } from "@/lib/core/server";

interface FeaturedItem {
  _id: string;
  name: string;
  description: string;
  image: string;
  type: string;
  location: {
    lat: number;
    lng: number;
  };
  capacity: number;
  pricePerDay: number;
  features: string[];
  createdAt: string;
  bookingCount?: number;
  rating?: number;
}

async function getFeaturedListings(): Promise<FeaturedItem[]> {
  try {
    const data = await serverFetch<FeaturedItem[]>("/featured");
    return data || [];
  } catch (error) {
    console.error("Error fetching featured listings:", error);
    return [];
  }
}

export default async function FeaturedSection() {
  const listings = await getFeaturedListings();

  if (!listings.length) return null;

  return (
    <section className="bg-gradient-to-b from-(--background) to-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end md:gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block h-1.5 w-8 rounded-full bg-(--primary)" />
              <span className="text-xs font-semibold uppercase tracking-[3px] text-(--primary)">
                Featured Adventures
              </span>
            </div>

            <h2 className="text-3xl font-bold text-(--dark) md:text-4xl tracking-tight">
              Discover{" "}
              <span className="bg-gradient-to-r from-(--primary) to-(--secondary) bg-clip-text text-transparent">
                Amazing Places
              </span>
            </h2>

            <p className="mt-2 text-(--text-secondary) md:text-lg">
              Explore the best campsites and gear curated just for you.
            </p>
          </div>

          {/* Action Button */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full md:w-auto self-start md:self-auto">
            <Link
              href="/explore"
              className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-(--primary)/20 bg-white px-6 py-3 text-sm font-medium text-(--primary) transition-all duration-300 hover:border-(--primary) hover:bg-(--primary)/5 hover:shadow-lg active:scale-95 w-full sm:w-auto"
            >
              <span>View All Adventures</span>
              <FaArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
                size={14}
              />
            </Link>
          </div>
        </div>

        {/* Carousel */}
        <FeaturedCarousel listings={listings} />
      </div>
    </section>
  );
}
