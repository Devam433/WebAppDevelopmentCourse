
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Monitor, Server } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="home" 
      className="pt-32 pb-24 md:pt-40 md:pb-32 px-2 md:px-10 text-wrap  relative"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-celestial/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-selective/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="space-y-8 md:pr-10">
          <div className="inline-flex items-center px-4 py-2 bg-celestial/10 text-celestial rounded-full text-sm font-medium animate-on-scroll">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-celestial opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-celestial"></span>
            </span>
            New course sessions starting soon
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight animate-on-scroll text-wrap">
            Master <span className="text-celestial">Web Development</span> from Fundamentals to Full Stack
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 animate-on-scroll max-w-xl text-wrap">
            Join our comprehensive course designed by experts to build professional, responsive web applications that stand out.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-on-scroll">
            <Button size="lg" className="bg-celestial hover:bg-celestial/90 text-white"
            
            onClick={() => {
              const contactSection = document.getElementById("contactUs");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            >
              Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-celestial text-celestial hover:bg-celestial/10"
            
            onClick={() => {
              const contactSection = document.getElementById("curriculum");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            >
              View Curriculum
            </Button>
          </div>
          
          <div className="pt-4 grid grid-cols-3 gap-4 animate-on-scroll">
            <div className="text-center">
              <div className="font-bold text-3xl text-resolution">24</div>
              <div className="text-sm text-foreground/70">Weeks</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-3xl text-resolution">36</div>
              <div className="text-sm text-foreground/70">Projects</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-3xl text-resolution">24/7</div>
              <div className="text-sm text-foreground/70">Support</div>
            </div>
          </div>
        </div>
        
        <div className="relative animate-on-scroll" ref={elementRef}>
          <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-selective/30 to-rust/30 rounded-2xl transform rotate-3"></div>
          <div className="bg-white rounded-2xl shadow-xl p-8 relative z-10">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 text-sm font-mono text-foreground/70">index.html</div>
            </div>
            
            <pre className="text-sm font-mono text-left overflow-x-auto p-4 bg-gray-50 rounded-lg">
              <code className="language-html text-resolution">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" 
    content="width=device-width, initial-scale=1.0">
  <title>My Web App</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="app">
    <h1>Hello, <span class="highlight">World!</span></h1>
  </div>
  <script src="app.js"></script>
</body>
</html>`}
              </code>
            </pre>
          </div>
          
          <div className="absolute -z-10 animate-float">
            <div className="absolute -bottom-6 -right-4 p-6 bg-white shadow-lg rounded-lg">
              <Code className="h-8 w-8 text-celestial" />
            </div>
            <div className="absolute top-20 -right-12 p-5 bg-white shadow-lg rounded-lg">
              <Monitor className="h-7 w-7 text-ruddy" />
            </div>
            <div className="absolute -bottom-14 left-20 p-5 bg-white shadow-lg rounded-lg">
              <Server className="h-7 w-7 text-resolution" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
