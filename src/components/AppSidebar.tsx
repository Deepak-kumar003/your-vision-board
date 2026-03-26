import { Link, useLocation } from "react-router-dom";
import { Leaf, Home, Map, Upload, Search, BarChart3, History, Settings } from "lucide-react";

const sidebarItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Map, label: "Farm Setup", path: "/farm-setup" },
  { icon: Upload, label: "Diagnostic Scan", path: "/upload" },
  { icon: Search, label: "Detection Results", path: "/results" },
  { icon: BarChart3, label: "Advisory Dashboard", path: "/advisory" },
  { icon: History, label: "Scan History", path: "/history" },
];

const AppSidebar = () => {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex flex-col w-64 border-r border-border bg-background min-h-screen sticky top-0">
      <div className="flex items-center gap-2 px-6 py-5 border-b border-border">
        <Leaf className="h-6 w-6 text-primary" />
        <span className="font-heading text-lg text-foreground">AgroVision AI</span>
      </div>
      <nav className="flex-1 px-3 py-4 space-y-1">
        {sidebarItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-border">
        <Link
          to="/upload"
          className="flex items-center justify-center gap-2 w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <Upload className="h-4 w-4" />
          Scan New Crop
        </Link>
      </div>
    </aside>
  );
};

export default AppSidebar;
