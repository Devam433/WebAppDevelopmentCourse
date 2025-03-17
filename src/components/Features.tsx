
import { CheckCircle, Code, Database, Figma, Layout, Laptop, Server, Terminal, Zap } from "lucide-react";
import { useEffect } from "react";

const features = [
  {
    title: "Frontend Development",
    description: "Master HTML, CSS, JavaScript, and modern frameworks like React to build beautiful user interfaces.",
    icon: <Layout className="h-12 w-12 text-celestial" />,
  },
  {
    title: "Backend Development",
    description: "Build robust server-side applications with Node.js, Express, and learn database integration.",
    icon: <Server className="h-12 w-12 text-resolution" />,
  },
  {
    title: "Responsive Design",
    description: "Create websites that look great on any device with modern CSS techniques and frameworks.",
    icon: <Laptop className="h-12 w-12 text-ruddy" />,
  },
  {
    title: "Database Management",
    description: "Learn SQL and NoSQL databases to store, retrieve, and manage application data effectively.",
    icon: <Database className="h-12 w-12 text-selective" />,
  },
  {
    title: "API Development",
    description: "Design and implement RESTful APIs to enable seamless communication between systems.",
    icon: <Code className="h-12 w-12 text-celestial" />,
  },
  {
    title: "DevOps Basics",
    description: "Introduction to deployment, version control, and continuous integration for web applications.",
    icon: <Terminal className="h-12 w-12 text-rust" />,
  },
];

const Features = () => {
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
    <section id="features" className="py-24 px-6 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 bg-selective/10 text-rust rounded-full text-sm font-medium animate-on-scroll">
            <Zap className="mr-2 h-4 w-4" />
            Comprehensive curriculum
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold animate-on-scroll">
            Everything You Need to Become a <span className="text-celestial">Full Stack Developer</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-on-scroll">
            Our course covers all essential aspects of modern web development, giving you the skills to build complete web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100 animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-display font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-resolution to-celestial animate-on-scroll">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-4">
              <h3 className="text-2xl font-display font-semibold">Industry-Relevant Skillset</h3>
              <p className="opacity-90">Our curriculum is continuously updated to match industry standards and employer demands.</p>
              <ul className="space-y-2">
                {["Modern JavaScript (ES6+)", "React & State Management", "Node.js Backend Development", "Database Design & Integration"].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-black/10 rounded-lg transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MzgzMDc2Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" 
                alt="Programming on a laptop" 
                className="rounded-lg shadow-lg relative z-10 w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
