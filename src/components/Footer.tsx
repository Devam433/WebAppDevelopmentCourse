
import { Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-resolution text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-celestial to-white/30 flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <span className="text-xl font-display font-semibold">WebDevMaster</span>
            </div>
            <p className="text-white/80 mb-6">
              Empowering the next generation of web developers with industry-relevant skills and hands-on experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-selective transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-selective transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-selective transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About Us", "Courses", "Curriculum", "Testimonials", "FAQ"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/80 hover:text-selective transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* <div>
            <h3 className="font-display font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {["Blog", "Career Support", "Alumni Network", "Free Tutorials", "Student Handbook", "Partnership"].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/80 hover:text-selective transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-celestial" />
                <span className="text-white/80">
                  Koachgaon, Biswanath Chariali, 784179, Assam, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-celestial" />
                <span className="text-white/80">+91 6002113161</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-celestial" />
                <div className="flex flex-col">
                <p className="text-white/80">smartskillsacademy24@gmail.com</p>
                <p className="text-white/80">www.smartskills.net.in</p>
                </div>

              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} WebDevMaster. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
