
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  CheckCircle, 
  BookOpen, 
  Code, 
  Layers, 
  Database, 
  Globe, 
  Shield 
} from "lucide-react";
import { useEffect } from "react";

const modules = [
  {
    id: "fundamentals",
    title: "Web Fundamentals",
    icon: <BookOpen className="h-5 w-5" />,
    weeks: "Weeks 1-2",
    description: "Build a strong foundation with core web technologies",
    topics: [
      "HTML5 Semantic Structure",
      "CSS3 & Modern Layout Techniques",
      "JavaScript Fundamentals & ES6+",
      "Responsive Design Principles",
      "Web Accessibility Standards",
      "Version Control with Git"
    ]
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: <Layers className="h-5 w-5" />,
    weeks: "Weeks 3-5",
    description: "Create dynamic and interactive user interfaces",
    topics: [
      "React Component Architecture",
      "State Management Solutions",
      "Client-Side Routing",
      "CSS-in-JS & Styled Components",
      "Hooks & Custom Hooks",
      "Performance Optimization",
      "Testing React Applications"
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: <Code className="h-5 w-5" />,
    weeks: "Weeks 6-8",
    description: "Build powerful server-side applications",
    topics: [
      "Node.js Fundamentals",
      "Express.js Framework",
      "RESTful API Design",
      "Authentication & Authorization",
      "Error Handling & Logging",
      "Middleware Implementation",
      "API Documentation"
    ]
  },
  // {
  //   id: "database",
  //   title: "Database Integration",
  //   icon: <Database className="h-5 w-5" />,
  //   weeks: "Weeks 9-10",
  //   description: "Master data storage and retrieval techniques",
  //   topics: [
  //     "Database Design Principles",
  //     "SQL Fundamentals with PostgreSQL",
  //     "NoSQL with MongoDB",
  //     "ORM/ODM Tools",
  //     "Data Modeling & Relationships",
  //     "Performance Optimization",
  //     "Data Validation & Sanitization"
  //   ]
  // },
  // {
  //   id: "deployment",
  //   title: "Deployment & Beyond",
  //   icon: <Globe className="h-5 w-5" />,
  //   weeks: "Weeks 11-12",
  //   description: "Take your applications to production",
  //   topics: [
  //     "CI/CD Pipelines",
  //     "Cloud Deployment (AWS/Vercel)",
  //     "Containerization with Docker",
  //     "Monitoring & Logging",
  //     "Security Best Practices",
  //     "Performance Optimization",
  //     "Final Project Implementation"
  //   ]
  // },
];

const Curriculum = () => {
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
    <section id="curriculum" className="py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 bg-celestial/10 text-celestial rounded-full text-sm font-medium animate-on-scroll">
            <BookOpen className="mr-2 h-4 w-4" />
            12-Week Program
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold animate-on-scroll">
            A <span className="text-celestial">Structured Path</span> to Web Development Mastery
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-on-scroll">
            Our curriculum is carefully designed to take you from beginner to professional through hands-on projects and real-world applications.
          </p>
        </div>

        <div className="animate-on-scroll">
          <Tabs defaultValue="fundamentals" className="w-full">
          <TabsList className="w-full overflow-y-auto h-16 max-w-3xl mx-auto flex flex-wrap justify-center gap-4 mb-8">
              {modules.map((module) => (
                <TabsTrigger 
                  key={module.id} 
                  value={module.id}
                  className="flex items-center justify-center data-[state=active]:text-celestial data-[state=active]:border-b-2 data-[state=active]:border-celestial py-3"
                >
                  <span className="hidden md:flex mr-2">{module.icon}</span>
                  <span className="text-sm md:text-base">{module.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {modules.map((module) => (
              <TabsContent key={module.id} value={module.id} className="mt-6">
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                  <div className="bg-gradient-to-r from-resolution to-celestial p-6 text-white">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-display font-semibold flex items-center">
                        {module.icon}
                        <span className="ml-2">{module.title}</span>
                      </h3>
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                        {module.weeks}
                      </span>
                    </div>
                    <p className="mt-2 opacity-90">{module.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-lg font-medium mb-4">What You'll Learn:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {module.topics.map((topic, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-celestial mr-2 mt-0.5 flex-shrink-0" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <h4 className="text-lg font-medium mb-4">Module Projects:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="font-medium text-resolution">Individual Project</div>
                          <p className="text-sm text-foreground/70 mt-1">
                            Apply module concepts through solo development challenges
                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="font-medium text-resolution">Team Assignment</div>
                          <p className="text-sm text-foreground/70 mt-1">
                            Collaborate with peers on complex, real-world scenarios
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
