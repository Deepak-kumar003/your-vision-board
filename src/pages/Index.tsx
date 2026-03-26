import { Link } from "react-router-dom";
import { Scan, Leaf, Star, CheckCircle, ArrowRight, Upload, Shield, TrendingDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroField from "@/assets/hero-field.jpg";
import leafCloseup from "@/assets/leaf-closeup.jpg";

const steps = [
  { num: "1. Upload Leaf", icon: Upload, desc: "Capture a clear photo of your plant's leaf, including any visible signs of damage or disease." },
  { num: "2. Get Diagnosis", icon: Scan, desc: "Instantly receive a detailed report identifying potential diseases with recommended treatments." },
  { num: "3. Follow Advisory", icon: Shield, desc: "Tailored treatment plans based on your crop's type and local growing conditions." },
];

const testimonials = [
  {
    name: "SaravanaR",
    role: "Owner of Organic Specialist",
    quote: "AgroVision saved my entire tomato crop this season. I caught blight 4 days earlier than ever before!",
    stars: 5,
  },
  {
    name: "Clara K.",
    role: "Independent Farmer, Kenya",
    quote: "The cultural chemical tips are very easy to follow. My soil is healthier and crop yield improved too.",
    stars: 5,
  },
  {
    name: "Ajith P.",
    role: "Farm Tech Consultant",
    quote: "As a farm tech advisor, having a digital recommendation for my paddy field is changing. I finally have data to advise better.",
    stars: 5,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground leading-tight">
                Precision Care<br />for <span className="text-primary italic">Every Leaf.</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-md">
                Empower your farm with AI-driven visual diagnostics. Identify diseases, receive actionable advice, and protect your harvest — in seconds, not weeks.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/upload"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Scan className="h-4 w-4" />
                  Scan Your Crop
                </Link>
                <Link
                  to="/advisory"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                >
                  Learn More
                </Link>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-accent border-2 border-background flex items-center justify-center">
                      <Leaf className="h-3 w-3 text-primary" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Trusted by 50,000+ farmers</span>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={heroField} alt="Lush green crop field" width={800} height={600} className="w-full h-auto object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg p-3 border border-border">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <div>
                    <p className="text-xs font-medium text-foreground">Active AI Scans</p>
                    <p className="text-lg font-bold text-primary">124,350+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-3">The Digital Agronomist Path</h2>
          <p className="text-muted-foreground mb-12 max-w-lg mx-auto">Three simple steps to transform your harvest through the power of AI.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-5">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg text-foreground mb-2">{step.num}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading text-foreground mb-2">Voices From The Field</h2>
          <p className="text-muted-foreground mb-10">Real impact reported by farmers who transformed their farming.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-sm text-foreground mb-4">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl overflow-hidden grid md:grid-cols-2">
            <div className="bg-primary p-10 md:p-14 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-heading text-primary-foreground mb-6">Cultivate More<br />With Less.</h2>
              <ul className="space-y-4">
                {[
                  { icon: TrendingDown, text: "35% Higher Yield" },
                  { icon: Shield, text: "Reduced Chemical Use" },
                  { icon: CheckCircle, text: "Secure Record Keeping" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-primary-foreground/90">
                    <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <item.icon className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-accent p-10 md:p-14 flex flex-col justify-center">
              <h3 className="font-heading text-2xl text-foreground mb-3">Start Scanning Today</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Join 50,000+ farmers using AgroVision AI to protect their harvest and grow smarter.
              </p>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <Link
                  to="/upload"
                  className="flex items-center justify-center gap-2 w-full rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Create Free Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
