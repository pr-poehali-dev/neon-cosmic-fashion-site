
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Главная", path: "/" },
    { name: "Портфолио", path: "/portfolio" },
    { name: "Услуги", path: "/services" },
    { name: "Контакты", path: "/contacts" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-space-darker/80 backdrop-blur-md border-b border-neon-purple/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-cyber font-bold text-white relative"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-neon-pulse">
              SPACE VISION
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-cyber relative transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-neon-pink text-glow"
                    : "text-white hover:text-neon-blue"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-pink shadow-neon-pink" />
                )}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <Button
            variant="ghost"
            className="hidden md:flex border border-neon-purple bg-space-darker hover:bg-neon-purple/10 text-white"
            asChild
          >
            <Link to="/contacts">
              <Icon name="Send" size={16} className="mr-1" />
              Связаться
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 bg-space-darker/90 backdrop-blur-md rounded-md mt-2 border border-neon-purple/20 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-2 font-cyber ${
                  location.pathname === link.path
                    ? "text-neon-pink bg-neon-pink/10"
                    : "text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pt-2 border-t border-neon-purple/20">
              <Button
                variant="ghost"
                className="w-full border border-neon-purple/50 text-white"
                asChild
              >
                <Link to="/contacts" onClick={() => setIsMobileMenuOpen(false)}>
                  <Icon name="Send" size={16} className="mr-1" />
                  Связаться
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
