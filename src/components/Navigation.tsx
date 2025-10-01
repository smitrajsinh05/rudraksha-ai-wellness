import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Leaf, MessageCircle, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Navigation = () => {
  const location = useLocation();
  const { user, signOut } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: "Signed out",
      description: "You've been successfully signed out.",
    });
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/quiz", label: "Wellness Quiz" },
    { href: "/shop", label: "Shop" },
    { href: "/knowledge", label: "Knowledge Hub" },
  ];

  return (
    <nav className="glass-effect border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-playfair font-semibold text-xl text-primary">
            <Leaf className="w-6 h-6 text-success" />
            Rudraksha Ayurvedic
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-smooth hover:text-accent ${
                  location.pathname === item.href ? "text-accent" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Chatbot
            </Button>
            {user ? (
              <>
                <Button asChild variant="outline" size="sm">
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
                <Button 
                  onClick={handleSignOut}
                  variant="ghost" 
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </>
            ) : (
              <Button asChild variant="outline" size="sm">
                <Link to="/auth">Login</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;