import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const courses = [
  { id: "web", name: "Web App Development" },
  { id: "android", name: "Android App Development" },
];

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    course: "web",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleCourseChange = (value: string) => {
    setFormState({
      ...formState,
      course: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFormError(null);

    // Basic validation
    if (!formState.name.trim()) {
      setFormError("Please provide your name");
      setLoading(false);
      return;
    }

    if (!formState.email.trim() || !/^\S+@\S+\.\S+$/.test(formState.email)) {
      setFormError("Please provide a valid email address");
      setLoading(false);
      return;
    }

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 800));
      
      toast({
        title: "Enrollment request submitted",
        description: "We'll get back to you shortly with more details!",
        duration: 5000,
      });
      
      // Clear form
      setFormState({
        name: "",
        email: "",
        phone: "",
        course: "web",
        message: "",
      });
    } catch (error) {
      setFormError("Something went wrong. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in" id="contactUs">
      <div className="glass-card rounded-2xl p-8 border border-muted/30 backdrop-blur-sm mb-8">
        <div className="text-center mb-8">
          {/* <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 animate-slide-down">
            Information
          </div> */}
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Enroll in our Courses
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Enrolling is completely free of cost. It's just a way to show that you are
            interested in doing the course.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {formError && (
            <div className="p-3 bg-destructive/10 border border-destructive/30 text-destructive rounded-lg text-sm animate-fade-in">
              {formError}
            </div>
          )}

          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  className={cn(
                    "input-field",
                    formError && !formState.name && "border-destructive"
                  )}
                  placeholder="Your full name"
                  disabled={loading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  className={cn(
                    "input-field",
                    formError && !formState.email && "border-destructive"
                  )}
                  placeholder="your.email@example.com"
                  disabled={loading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium flex items-center">
                Phone Number
                <span className="text-xs text-muted-foreground ml-2">(Optional)</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formState.phone}
                onChange={handleChange}
                className="input-field"
                placeholder="+91 1234567890"
                disabled={loading}
              />
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-medium">
                Which course would you like to enroll in?
              </Label>
              <RadioGroup
                value={formState.course}
                onValueChange={handleCourseChange}
                className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2"
              >
                {courses.map((course) => (
                  <div key={course.id} className="flex items-center space-x-2">
                    <RadioGroupItem 
                      value={course.id} 
                      id={course.id}
                      disabled={loading}
                      className="text-primary"
                    />
                    <Label 
                      htmlFor={course.id} 
                      className="cursor-pointer text-base font-normal"
                    >
                      {course.name}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Additional Information
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                className="input-field min-h-32"
                placeholder="Tell us about your experience, questions, or what you hope to learn..."
                disabled={loading}
              />
            </div>
          </div>

          <Button 
            type="submit"
            className="w-full btn-primary font-medium"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Enrollment Request"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;