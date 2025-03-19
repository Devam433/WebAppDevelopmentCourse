
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Curriculum", href: "#curriculum" },
    // { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#home" 
          className="flex items-center space-x-2 text-resolution hover:opacity-80 transition-opacity"
        >
          <div className="rounded-lg ">
            {/* <span className="text-white font-bold text-xl">SM</span> */}
            <img src="LOGO.png" alt="Logo" className=" w-20" />
          </div>
          <span className="text-lg md:text-xl font-display font-semibold">Smart Skills Academy</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-foreground/80 hover:text-resolution font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-celestial hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button 
  className="bg-celestial hover:bg-celestial/90 text-white"
  onClick={() => {
    const contactSection = document.getElementById("contactUs");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Enroll Now
</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg animate-slide-down">
          <nav className="p-6 flex flex-col space-y-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-foreground/80 hover:text-resolution font-medium text-lg block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button 
              className="bg-celestial hover:bg-celestial/90 text-white w-full mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Enroll Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
