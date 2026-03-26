import { Eye, Search, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import tomatoBlight from "@/assets/tomato-blight.jpg";
import sweetCorn from "@/assets/sweet-corn-disease.jpg";
import coffeeDis from "@/assets/coffee-disease.jpg";
import fernDis from "@/assets/fern-disease.jpg";

const scans = [
  { name: "Tomato Crop", date: "Sep 12, 2024", status: "Early Blight Detected", severity: "high", img: tomatoBlight },
  { name: "Sweet Corn", date: "Sep 8, 2024", status: "Powdery / Mildew", severity: "medium", img: sweetCorn },
  { name: "Coffee Robusta", date: "Sep 3, 2024", status: "No Disease Detected", severity: "none", img: coffeeDis },
  { name: "Rice Paddles", date: "Aug 28, 2024", status: "Leaf Blight (Suspected)", severity: "medium", img: fernDis },
];

const severityBadge: Record<string, string> = {
  high: "bg-destructive/10 text-destructive",
  medium: "bg-warning/10 text-warning",
  none: "bg-success/10 text-success",
};

const ScanHistory = () => {
  return (
    <DashboardLayout>
      <div className="p-6 md:p-10 max-w-5xl">
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-3xl font-heading text-foreground">Scan History</h1>
          <div className="flex gap-2">
            <button className="inline-flex items-center gap-1 text-xs text-muted-foreground border border-border rounded-lg px-3 py-1.5 hover:bg-muted transition-colors">
              <Search className="h-3 w-3" />
              Search
            </button>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-8">
          Document your plant's health journey with date-stamped diagnostics for a smarter harvest.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {scans.map((scan, i) => (
            <div key={i} className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={scan.img} alt={scan.name} className="w-full h-full object-cover" loading="lazy" width={512} height={384} />
              </div>
              <div className="p-4 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-muted-foreground">{scan.date}</p>
                    <h3 className="font-body font-semibold text-sm text-foreground">{scan.name}</h3>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">{scan.status}</p>
                <span className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded-full ${severityBadge[scan.severity]}`}>
                  {scan.severity === "none" ? "Healthy" : scan.severity === "high" ? "Severe" : "Moderate"}
                </span>
                <div className="pt-1">
                  <Link
                    to="/results"
                    className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                  >
                    <Eye className="h-3 w-3" />
                    View Report
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* New Scan CTA */}
        <div className="mt-10 bg-accent rounded-2xl p-8 text-center">
          <h3 className="font-heading text-xl text-foreground mb-2">New Scan Available?</h3>
          <p className="text-sm text-muted-foreground mb-4">Upload a new leaf image and get instant AI-powered analysis.</p>
          <Link
            to="/upload"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Start New Scan
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ScanHistory;
