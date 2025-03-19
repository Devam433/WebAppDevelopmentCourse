
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useEffect } from "react";

const benefits = [
  "Hands-on project-based learning",
  "Access to modern computer lab",
  "Access to exclusive developer community",
  "Certificate of completion"
];

const CallToAction = () => {
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
    <section className="py-24 px-6 md:px-10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-celestial/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-selective/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-resolution via-resolution to-celestial rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8 md:p-12 text-white animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Take the First Step Toward Your New Career
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Enrollment is now open. Secure your spot today and begin your journey to becoming a professional web developer.
              </p>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-resolution hover:bg-white/90">
                  Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white hover:text-white bg-white/10">
                  Request Information
                </Button>
              </div>
            </div>
            
            <div className="hidden md:block relative h-full animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MzgzMDc2Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080" 
                alt="Developer working on code" 
                className="object-cover h-full w-full"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-resolution/30"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 text-center space-y-8 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-display font-semibold mb-3">Do I need prior coding experience?</h3>
              <p className="text-foreground/70">
                No prior experience is required. Our curriculum is designed to take you from the basics to advanced concepts at a manageable pace.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-display font-semibold mb-3">What is the time commitment?</h3>
              <p className="text-foreground/70">
                Students should expect to dedicate alteast 30+ hours per week apart from the classes. Part-time options require atleast 15-20 hours weekly over a longer period.
              </p>
            </div>
            
            {/* <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-display font-semibold mb-3">Is there financial assistance available?</h3>
              <p className="text-foreground/70">
                Yes, we offer various payment plans, scholarships, and income share agreements. Our admissions team can help find the right option for you.
              </p>
            </div> */}
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-display font-semibold mb-3">What kind of support will I receive?</h3>
              <p className="text-foreground/70">
                Students receive mentorship from experienced developers, code reviews, career coaching, and lifetime access to our alumni network and resources.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-display font-semibold mb-3">Does this course includes building projects?</h3>
              <p className="text-foreground/70">
                This course is heavely focused on project based learning where students will actively engage in building projects and solving real word problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
