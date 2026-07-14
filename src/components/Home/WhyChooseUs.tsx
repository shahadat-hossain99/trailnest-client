// components/Home/WhyChooseUs.tsx
import Container from "@/components/Ui/Container";
import {
  ShieldCheck,
  MapPinned,
  TentTree,
  BadgeDollarSign,
  Star,
  Award,
  Compass,
  Users,
} from "lucide-react";

const features = [
  {
    icon: <TentTree className="h-7 w-7" />,
    title: "Premium Campsites",
    description:
      "Browse hundreds of verified campsites across mountains, forests, lakes, and beaches.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    hoverColor: "group-hover:bg-emerald-500",
  },
  {
    icon: <ShieldCheck className="h-7 w-7" />,
    title: "Trusted Booking",
    description:
      "Book confidently with secure reservations and verified outdoor hosts.",
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50",
    hoverColor: "group-hover:bg-blue-500",
  },
  {
    icon: <BadgeDollarSign className="h-7 w-7" />,
    title: "Affordable Prices",
    description:
      "Compare listings and choose the best campsite or outdoor gear within your budget.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    hoverColor: "group-hover:bg-amber-500",
  },
  {
    icon: <MapPinned className="h-7 w-7" />,
    title: "Explore Anywhere",
    description:
      "Find nearby campsites and hidden outdoor destinations with ease.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    hoverColor: "group-hover:bg-purple-500",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-(--background) py-16 sm:py-24">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-(--primary)/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-(--secondary)/5 blur-3xl" />
      </div>

      <Container>
        {/* Section Heading Panel */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="inline-block h-1 w-8 rounded-full bg-(--primary)" />
            <span className="text-xs font-semibold uppercase tracking-[3px] text-(--primary)">
              Why TrailNest
            </span>
            <span className="inline-block h-1 w-8 rounded-full bg-(--primary)" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-(--dark) sm:text-4xl md:text-5xl">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-(--primary) to-(--secondary) bg-clip-text text-transparent">
              TrailNest
            </span>
            ?
          </h2>

          <p className="mt-4 text-base text-(--text-secondary) sm:text-lg">
            Everything you need to plan your next outdoor adventure with
            confidence.
          </p>

          {/* Stats Row */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-xl bg-white/50 p-4 backdrop-blur-sm border border-gray-100">
              <p className="text-2xl font-bold text-(--primary)">500+</p>
              <p className="text-xs text-(--text-secondary)">Campsites</p>
            </div>
            <div className="rounded-xl bg-white/50 p-4 backdrop-blur-sm border border-gray-100">
              <p className="text-2xl font-bold text-(--primary)">4.9★</p>
              <p className="text-xs text-(--text-secondary)">Average Rating</p>
            </div>
            <div className="rounded-xl bg-white/50 p-4 backdrop-blur-sm border border-gray-100">
              <p className="text-2xl font-bold text-(--primary)">10K+</p>
              <p className="text-xs text-(--text-secondary)">Happy Campers</p>
            </div>
            <div className="rounded-xl bg-white/50 p-4 backdrop-blur-sm border border-gray-100">
              <p className="text-2xl font-bold text-(--primary)">50+</p>
              <p className="text-xs text-(--text-secondary)">Destinations</p>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid Layout */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-(--primary)/20 hover:shadow-xl sm:p-8"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-(--primary)/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Icon Container */}
              <div
                className={`relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.bgColor} text-(--primary) transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg ${feature.hoverColor} group-hover:text-white`}
              >
                {feature.icon}
                {/* Subtle glow behind icon */}
                <div className="absolute inset-0 rounded-2xl bg-(--primary)/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Feature Content */}
              <div className="relative">
                <h3 className="mb-3 text-lg font-bold text-(--dark) transition-colors duration-300 group-hover:text-(--primary) sm:text-xl">
                  {feature.title}
                </h3>

                <p className="text-sm leading-relaxed text-(--text-secondary) sm:text-base">
                  {feature.description}
                </p>

                {/* Decorative Number */}
                <span className="absolute -right-2 -top-2 text-7xl font-bold text-gray-100/50 transition-opacity duration-300 group-hover:opacity-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Bottom Border Animation */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-(--primary) to-(--secondary) transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 rounded-2xl bg-white/80 p-6 backdrop-blur-sm border border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 text-sm text-(--text-secondary)">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-(--dark)">
              Trusted by 10,000+
            </span>
            outdoor enthusiasts
          </div>
          <div className="hidden h-6 w-px bg-gray-200 sm:block" />
          <div className="flex items-center gap-2 text-sm text-(--text-secondary)">
            <Award className="h-4 w-4 text-(--primary)" />
            <span className="font-medium text-(--dark)">
              Best Outdoor Platform
            </span>
            2024
          </div>
          <div className="hidden h-6 w-px bg-gray-200 sm:block" />
          <div className="flex items-center gap-2 text-sm text-(--text-secondary)">
            <Compass className="h-4 w-4 text-(--primary)" />
            <span className="font-medium text-(--dark)">50+</span>
            destinations
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
