import Container from "@/components/Ui/Container";
import { Shield, TreePine, Users, Zap } from "lucide-react";

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

  return (
    <div className="py-16 md:py-24 bg-white text-gray-900">
      <Container>
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-(--dark) sm:text-5xl">
              Our Mission
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              We are building a decentralized, highly sustainable eco-network
              designed to streamline listing assets safely, intelligently, and
              directly within neighborhoods worldwide.
            </p>
          </div>

          <div className="border-y border-gray-100 py-10 my-8">
            <h2 className="text-2xl font-bold mb-6 text-(--dark)">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded by developers and green advocates, this platform addresses
              the missing link between simple online resource distribution and
              premium, trustworthy community spaces.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8 text-center text-(--dark)">
              Core Values
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="p-5 border border-gray-100 rounded-2xl bg-gray-50/50"
                >
                  <v.icon className="h-6 w-6 text-(--primary) mb-3" />
                  <h3 className="font-semibold text-base text-(--dark) mb-1">
                    {v.title}
                  </h3>
                  <p className="text-sm text-gray-500">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
