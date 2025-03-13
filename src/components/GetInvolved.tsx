
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Heart, Sprout, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const GetInvolved: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const options = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Donate",
      description: "Your contribution helps us plant more trees and recognize environmental champions.",
      buttonText: "Support Our Cause",
      buttonClass: "bg-leaf-500 hover:bg-leaf-600 text-white",
      link: "/donate"
    },
    {
      icon: <Sprout className="h-6 w-6" />,
      title: "Plant",
      description: "Join a tree planting event near you or organize one in your community.",
      buttonText: "Find Opportunities",
      buttonClass: "bg-white border border-leaf-200 text-leaf-700 hover:bg-leaf-50",
      link: "#"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Volunteer",
      description: "Lend your skills and time to help our organization grow and make a bigger impact.",
      buttonText: "Join Our Team",
      buttonClass: "bg-white border border-leaf-200 text-leaf-700 hover:bg-leaf-50",
      link: "#"
    },
  ];

  return (
    <section id="get-involved" className="section-padding bg-gradient-to-b from-white to-leaf-50" ref={ref}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className={cn(
            "inline-flex items-center justify-center w-12 h-12 rounded-full bg-leaf-100 text-leaf-500 mb-6 transition-all duration-500 ease-apple",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
          )}>
            <Sprout className="h-6 w-6" />
          </div>
          
          <h2 className={cn(
            "text-3xl sm:text-4xl font-medium mb-6 transition-all duration-700 ease-apple",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            Get Involved
          </h2>
          
          <p className={cn(
            "text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-100 ease-apple",
            inView ? "opacity-100" : "opacity-0 translate-y-4"
          )}>
            There are many ways to contribute to our mission. Whether you donate, volunteer, or participate in our events, 
            your involvement makes a real difference.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white rounded-lg p-8 shadow-sm transition-all duration-700 ease-apple hover:shadow-md",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8" 
              )}
              style={{ 
                transitionDelay: inView ? `${index * 100 + 200}ms` : '0ms',
              }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-leaf-100 text-leaf-600 mb-6">
                {option.icon}
              </div>
              
              <h3 className="text-xl font-medium mb-3">{option.title}</h3>
              
              <p className="text-foreground/70 mb-6 leading-relaxed">
                {option.description}
              </p>
              
              <Link 
                to={option.link}
                className={cn(
                  "block w-full py-3 rounded-md text-center transition-colors duration-200 font-medium",
                  option.buttonClass
                )}
              >
                {option.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
