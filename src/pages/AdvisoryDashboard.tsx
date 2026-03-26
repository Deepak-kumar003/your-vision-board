import { Shield, Droplets, Leaf, AlertTriangle, CheckCircle, Calendar } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import tomatoBlight from "@/assets/tomato-blight.jpg";

const riskDays = [
  { day: "Mon", level: "low" },
  { day: "Tue", level: "medium" },
  { day: "Wed", level: "high" },
  { day: "Thu", level: "high" },
  { day: "Fri", level: "medium" },
  { day: "Sat", level: "low" },
  { day: "Sun", level: "low" },
  { day: "Mon", level: "medium" },
  { day: "Tue", level: "medium" },
  { day: "Wed", level: "low" },
];

const levelColors: Record<string, string> = {
  low: "bg-success",
  medium: "bg-warning",
  high: "bg-destructive",
};

const AdvisoryDashboard = () => {
  return (
    <DashboardLayout>
      <div className="p-6 md:p-10 max-w-6xl">
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
          <span>AI Agronomist</span>
          <span>•</span>
          <span>Advisory Console</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-heading text-foreground mb-1">Advisory Dashboard</h1>
        <p className="text-sm text-muted-foreground mb-8">
          AI-powered action plans for the current issues of Tomato plantation — Wheat Whole exhibiting signs of Early Blight.
        </p>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Treatment Recommendations */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <div className="flex items-center gap-2 mb-5">
                <Shield className="h-5 w-5 text-primary" />
                <h2 className="font-heading text-lg text-foreground">Treatment Recommendations</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: "Azoxystrobin (25%)", subtitle: "Fungicide application", dosage: "1 ml/L water", timing: "Every 7 days", priority: "Critical" },
                  { title: "Foliar Neem Extract", subtitle: "Organic alternative", dosage: "5 ml/L water", timing: "Every 5 days", priority: "Moderate" },
                  { title: "NPK 19:19:19", subtitle: "Nutritional booster", dosage: "2 g/L water", timing: "Bi-weekly", priority: "Supportive" },
                ].map((rec, i) => (
                  <div key={i} className="rounded-xl border border-border p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-foreground">{rec.title}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">{rec.subtitle}</p>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <p>Dose: <strong className="text-foreground">{rec.dosage}</strong></p>
                      <p>Timing: <strong className="text-foreground">{rec.timing}</strong></p>
                    </div>
                    <span className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded-full ${
                      rec.priority === "Critical" ? "bg-destructive/10 text-destructive" :
                      rec.priority === "Moderate" ? "bg-warning/10 text-warning" :
                      "bg-accent text-accent-foreground"
                    }`}>
                      {rec.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 14-Day Risk Calendar */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-5 w-5 text-primary" />
                <h2 className="font-heading text-lg text-foreground">14-Day Risk Calendar</h2>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                AI-based 14-day weather-linked disease risk prediction based on humidity, temperature, and recent rainfall.
              </p>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {riskDays.map((day, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5 min-w-[48px]">
                    <div className={`w-10 h-10 rounded-lg ${levelColors[day.level]} flex items-center justify-center`}>
                      <span className="text-[10px] font-bold text-primary-foreground">{i + 1}</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground">{day.day}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-3 text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-success" /> Low</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-warning" /> Medium</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-destructive" /> High</span>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="space-y-4">
            {/* Health Score */}
            <div className="bg-card rounded-xl border border-border p-5 text-center">
              <h3 className="font-body font-semibold text-sm text-foreground mb-3">Fertilizer Adjustments</h3>
              <div className="w-24 h-24 rounded-full border-4 border-primary flex items-center justify-center mx-auto mb-3">
                <div>
                  <p className="text-2xl font-bold text-primary">82%</p>
                  <p className="text-[10px] text-muted-foreground">Health</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Overall crop health indicator</p>
            </div>

            {/* Preventive Practices */}
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-body font-semibold text-sm text-foreground mb-3">Preventive Practices</h3>
              <ul className="space-y-3">
                {[
                  "Irrigate at base level to avoid leaf moisture",
                  "Increase air gap between plants",
                  "Apply mulch to reduce soil splash",
                  "Monitor regularly in humid weather",
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Disease Images */}
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-body font-semibold text-sm text-foreground mb-3">Disease Progression Reference</h3>
              <div className="grid grid-cols-2 gap-2">
                {[tomatoBlight, tomatoBlight].map((img, i) => (
                  <div key={i} className="aspect-square rounded-lg overflow-hidden">
                    <img src={img} alt="Disease reference" className="w-full h-full object-cover" loading="lazy" width={800} height={600} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdvisoryDashboard;
