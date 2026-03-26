import { CheckCircle, AlertTriangle, Leaf, Shield, Bug, Droplets } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import tomatoBlight from "@/assets/tomato-blight.jpg";

const DetectionResults = () => {
  return (
    <DashboardLayout>
      <div className="p-6 md:p-10 max-w-5xl">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Diagnosis Complete</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-heading text-foreground mb-1">Tomato Early Blight</h1>
        <p className="text-sm text-muted-foreground mb-8">Detected on Field Block A-4.2 • Organism: <em>Alternaria solani</em></p>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Image & Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Leaf Image */}
            <div className="rounded-2xl overflow-hidden border border-border bg-card">
              <div className="relative">
                <img src={tomatoBlight} alt="Tomato Early Blight detection" className="w-full h-64 md:h-80 object-cover" width={800} height={600} />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-destructive/90 text-destructive-foreground text-xs font-medium px-3 py-1 rounded-full">Disease Detected</span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-card/90 backdrop-blur rounded-lg p-2 text-center border border-border">
                    <p className="text-2xl font-bold text-primary">94%</p>
                    <p className="text-[10px] text-muted-foreground">Confidence</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex gap-2 flex-wrap">
                  {["Concentric ring spots", "Yellow halos", "Lower leaf onset", "Brown necrotic tissue"].map((tag) => (
                    <span key={tag} className="text-xs bg-accent text-accent-foreground px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-card rounded-xl border border-border p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Bug className="h-4 w-4 text-destructive" />
                  <h3 className="font-body font-semibold text-sm text-foreground">Disease Histology</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Caused by fungus <em>Alternaria solani</em></li>
                  <li>• Thrives in warm, humid conditions</li>
                  <li>• Spreads via wind and water splash</li>
                  <li>• Affects leaves, stems, and fruit</li>
                </ul>
              </div>
              <div className="bg-card rounded-xl border border-border p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Droplets className="h-4 w-4 text-info" />
                  <h3 className="font-body font-semibold text-sm text-foreground">Agronomic Risk</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Yield loss potential: 30-50%</li>
                  <li>• Rapid spread under moisture</li>
                  <li>• Secondary infection possible</li>
                  <li>• Can persist in soil debris</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="space-y-4">
            {/* Severity */}
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-body font-semibold text-sm text-foreground mb-3">Plant Condition</h3>
              <div className="space-y-3">
                {[
                  { label: "Fungal Threat", value: "High", color: "text-destructive" },
                  { label: "Spread Risk", value: "Medium", color: "text-warning" },
                  { label: "Recovery Chance", value: "Good", color: "text-success" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    <span className={`text-sm font-semibold ${item.color}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Treatment */}
            <div className="bg-accent rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="h-4 w-4 text-primary" />
                <h3 className="font-body font-semibold text-sm text-foreground">Prescriptive Treatment</h3>
              </div>
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  Apply Chlorothalonil fungicide
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  Remove infected lower leaves
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  Improve air circulation
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  Rotate crops next season
                </li>
              </ul>
            </div>

            <button
              onClick={() => window.location.href = "/advisory"}
              className="flex items-center justify-center gap-2 w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View Full Advisory
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DetectionResults;
