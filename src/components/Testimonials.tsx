
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";
import { useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Frontend Developer at TechCorp",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    content: "This course completely transformed my career path. The project-based approach gave me hands-on experience that I was able to showcase in interviews. Within a month of completing the course, I landed my dream job as a frontend developer.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Full Stack Engineer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    content: "As someone with a non-CS background, I was worried about transitioning into web development. This course broke down complex concepts into manageable chunks. The instructors were incredibly supportive and the community is amazing.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "UX Developer",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    content: "The curriculum strikes the perfect balance between theory and practice. I especially appreciated the focus on modern technologies like React and Node.js, which made me job-ready. The capstone project was challenging but rewarding.",
    rating: 5
  },
  {
    name: "David Kim",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    content: "What sets this course apart is the dedication of the instructors. They go above and beyond to ensure you understand the material, offering detailed feedback on assignments and being available for questions. Highly recommended!",
    rating: 5
  }
];

const Testimonials = () => {
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
    <section id="testimonials" className="py-24 px-6 md:px-10 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 bg-selective/10 text-rust rounded-full text-sm font-medium animate-on-scroll">
            <Star className="mr-2 h-4 w-4" />
            Student Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold animate-on-scroll">
            Hear From Our <span className="text-celestial">Graduates</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto animate-on-scroll">
            Our students come from diverse backgrounds but share a common goal: to become professional web developers.
          </p>
        </div>

        <div className="animate-on-scroll">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-6">
                  <div className="h-full bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col">
                    <div className="mb-6 text-selective">
                      <Quote className="h-10 w-10 opacity-20" />
                    </div>
                    <p className="flex-grow text-foreground/80 italic mb-6">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                        loading="lazy"
                      />
                      <div>
                        <div className="font-medium">{testimonial.name}</div>
                        <div className="text-sm text-foreground/60">{testimonial.role}</div>
                        <div className="flex mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-selective text-selective" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="static transform-none" />
              <CarouselNext className="static transform-none" />
            </div>
          </Carousel>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 animate-on-scroll">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
            <div className="text-4xl font-bold text-resolution mb-2">95%</div>
            <p className="text-foreground/70">Job Placement Rate</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
            <div className="text-4xl font-bold text-celestial mb-2">1200+</div>
            <p className="text-foreground/70">Graduates</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
            <div className="text-4xl font-bold text-selective mb-2">$75K</div>
            <p className="text-foreground/70">Average Starting Salary</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
