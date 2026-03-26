import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import FarmSetup from "./pages/FarmSetup.tsx";
import UploadLeaf from "./pages/UploadLeaf.tsx";
import DetectionResults from "./pages/DetectionResults.tsx";
import AdvisoryDashboard from "./pages/AdvisoryDashboard.tsx";
import ScanHistory from "./pages/ScanHistory.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/farm-setup" element={<FarmSetup />} />
          <Route path="/upload" element={<UploadLeaf />} />
          <Route path="/results" element={<DetectionResults />} />
          <Route path="/advisory" element={<AdvisoryDashboard />} />
          <Route path="/history" element={<ScanHistory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
