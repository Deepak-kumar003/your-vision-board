import { useState } from "react";
import { MapPin, Leaf, ChevronDown } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import heroField from "@/assets/hero-field.jpg";

const cropOptions = ["Tomato", "Rice", "Wheat", "Coffee", "Corn", "Sugarcane"];
const soilTypes = ["Loamy", "Clay", "Sandy", "Silt", "Peat"];

const FarmSetup = () => {
  const [selectedCrop, setSelectedCrop] = useState("Tomato");
  const [soilType, setSoilType] = useState("Loamy");
  const [farmSize, setFarmSize] = useState("5.2");

  return (
    <DashboardLayout>
      <div className="p-6 md:p-10 max-w-6xl">
        <h1 className="text-3xl font-heading text-foreground mb-1">Farm Configuration</h1>
        <p className="text-muted-foreground text-sm mb-8">Configure your farm details for personalized AI diagnostics</p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Form */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl border border-border p-6 space-y-5">
              <div>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Step 1</span>
                <h2 className="font-heading text-xl text-foreground mt-1">Identify Your Crop</h2>
                <p className="text-sm text-muted-foreground mt-1">Select your primary crop for AI-optimized recommendations</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">What crop will you grow?</label>
                <div className="relative">
                  <select
                    value={selectedCrop}
                    onChange={(e) => setSelectedCrop(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    {cropOptions.map(c => <option key={c}>{c}</option>)}
                  </select>
                  <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Select Field Phase</label>
                <div className="flex flex-wrap gap-2">
                  {["Seedling", "Vegetative", "Flowering", "Fruiting"].map((phase) => (
                    <button
                      key={phase}
                      className="rounded-full border border-border px-4 py-1.5 text-xs font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {phase}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Soil Type</label>
                  <div className="relative">
                    <select
                      value={soilType}
                      onChange={(e) => setSoilType(e.target.value)}
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      {soilTypes.map(s => <option key={s}>{s}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Farm Size (Acres)</label>
                  <input
                    type="text"
                    value={farmSize}
                    onChange={(e) => setFarmSize(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Approximate Plot Dimensions</label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-border bg-muted/50 p-3 text-center">
                    <p className="text-lg font-bold text-foreground">13.5 ha</p>
                    <p className="text-xs text-muted-foreground">Total Area</p>
                  </div>
                  <div className="rounded-lg border border-border bg-muted/50 p-3 text-center">
                    <p className="text-lg font-bold text-foreground">0.2 - 0.8 ha</p>
                    <p className="text-xs text-muted-foreground">Plot Size</p>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
              Confirm Farm Setup ✓
            </button>
          </div>

          {/* Right - Map */}
          <div className="space-y-4">
            <div className="bg-card rounded-2xl border border-border p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-body font-semibold text-sm text-foreground">Located Farmland</h3>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> Lucknow Region, Plot D-12
                </span>
              </div>
              <div className="rounded-xl overflow-hidden h-64 md:h-80 relative bg-accent">
                <img src={heroField} alt="Farm plot aerial view" className="w-full h-full object-cover opacity-70" loading="lazy" width={800} height={600} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-card/90 backdrop-blur rounded-lg p-3 shadow-lg border border-border">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-foreground">Tomato Farm — Active</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-3 text-sm text-muted-foreground">
                <span>MTS: <strong className="text-foreground">5.2 ha</strong></span>
                <span>Plots: <strong className="text-foreground">4</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FarmSetup;
