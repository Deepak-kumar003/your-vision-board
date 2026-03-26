import { useState, useCallback } from "react";
import { Upload, Image, FileText, Leaf, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import diseasedLeaf from "@/assets/diseased-leaf.jpg";

const UploadLeaf = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const navigate = useNavigate();

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    setUploaded(true);
  }, []);

  return (
    <DashboardLayout>
      <div className="p-6 md:p-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-heading text-foreground mb-1">Diagnostic Scan</h1>
        <p className="text-muted-foreground text-sm mb-8">
          Upload a clear photo of the affected leaf. Our AI agronomist will analyze the patterns to identify diseases, stress, or nutrient deficiencies.
        </p>

        {/* Upload Zone */}
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => setUploaded(true)}
          className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-colors ${
            dragActive ? "border-primary bg-accent/50" : "border-border hover:border-primary/50"
          }`}
        >
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
            <Upload className="h-7 w-7 text-primary" />
          </div>
          <h3 className="font-heading text-lg text-foreground mb-1">Drag & Drop Image</h3>
          <p className="text-sm text-muted-foreground mb-4">PNG, JPG or HEIC (max 20MB)</p>
          <div className="flex justify-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors">
              <FileText className="h-4 w-4" />
              Browse Files
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
              <Image className="h-4 w-4" />
              Take Camera
            </button>
          </div>
        </div>

        {/* Recent & Analysis */}
        {uploaded && (
          <div className="mt-8 grid md:grid-cols-2 gap-6 animate-fade-in">
            <div className="bg-card rounded-2xl border border-border p-5">
              <h3 className="font-body font-semibold text-sm text-foreground mb-3">Most Recent Uploads</h3>
              <div className="grid grid-cols-3 gap-2">
                {[diseasedLeaf, diseasedLeaf, diseasedLeaf].map((img, i) => (
                  <div key={i} className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img src={img} alt="Recent upload" className="w-full h-full object-cover" loading="lazy" width={512} height={512} />
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl border border-border p-5">
              <h3 className="font-body font-semibold text-sm text-foreground mb-3">Analyzed Leaf</h3>
              <div className="aspect-square rounded-xl overflow-hidden bg-muted mb-3">
                <img src={diseasedLeaf} alt="Leaf being analyzed" className="w-full h-full object-cover" loading="lazy" width={512} height={512} />
              </div>
              <button
                onClick={() => navigate("/results")}
                className="flex items-center justify-center gap-2 w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Leaf className="h-4 w-4" />
                Analyze Leaf
              </button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default UploadLeaf;
