import { Github } from "lucide-react";
import { Target } from "lucide-react";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Lead Developer",
    github: "https://github.com/alexjohnson"
  },
  {
    name: "Jamie Smith",
    role: "UI/UX Designer",
    github: "https://github.com/jamiesmith"
  },
  {
    name: "Taylor Morgan",
    role: "Backend Developer",
    github: "https://github.com/taylormorgan"
  },
  {
    name: "Jordan Casey",
    role: "Data Analyst",
    github: "https://github.com/jordancasey"
  },
  {
    name: "Chris Rivera",
    role: "Frontend Developer",
    github: "https://github.com/chrisrivera"
  },
  {
    name: "Morgan Zhang",
    role: "DevOps Engineer",
    github: "https://github.com/morganzhang"
  },
  {
    name: "Riley Patel",
    role: "Quality Assurance",
    github: "https://github.com/rileypatel"
  },
  {
    name: "Sam Nguyen",
    role: "Mobile Developer",
    github: "https://github.com/samnguyen"
  }
];

const Footer = () => {
  return (
    <footer id="team" className="border-t border-white/20 pt-12 pb-8 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                FinTrack
              </h2>
            </div>
            <p className="text-white/70 mb-4 max-w-md">
              Making financial management simple, intuitive, and even fun for students.
              Track expenses, set budgets, and reach for the stars with your finances.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a 
                href="https://github.com/fintrack/finance-tracker" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4">Links</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a></li>
              <li><a href="#faq" className="text-white/70 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#team" className="text-white/70 hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-6">
            <h3 className="text-white font-semibold mb-4">Our Team</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-black/20 p-4 rounded-lg">
              {teamMembers.map((member, index) => (
                <a 
                  href={member.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  key={index}
                  className="text-white/70 hover:text-white transition-colors p-2 rounded-md hover:bg-white/5"
                >
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-white/50">{member.role}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © 2025 FinTrack. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;