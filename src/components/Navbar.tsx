import { Link, useLocation } from "react-router-dom";
import { Leaf } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="w-full border-b border-border bg-background/95 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-heading text-xl text-foreground">AgroVision AI</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Home</Link>
          <Link to="/farm-setup" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Farm</Link>
          <Link to="/upload" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Diagnose</Link>
          <Link to="/history" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">History</Link>
          <Link to="/advisory" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Advisory</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/upload" className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            Start Scanning
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
