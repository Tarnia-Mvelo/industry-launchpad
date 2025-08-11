import { Link } from "react-router-dom";
import { Briefcase, Twitter, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "For Job Seekers": [
      { name: "Browse Jobs", href: "/jobs" },
      { name: "Career Resources", href: "/resources" },
      { name: "Salary Guide", href: "/salary-guide" },
      { name: "Resume Tips", href: "/resume-tips" },
    ],
    "For Employers": [
      { name: "Post a Job", href: "/post-job" },
      { name: "Employer Dashboard", href: "/employer" },
      { name: "Pricing", href: "/pricing" },
      { name: "Talent Search", href: "/talent-search" },
    ],
    "Company": [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
    "Support": [
      { name: "Help Center", href: "/help" },
      { name: "FAQ", href: "/faq" },
      { name: "Community", href: "/community" },
      { name: "Blog", href: "/blog" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "GitHub", href: "#", icon: Github },
    { name: "Email", href: "mailto:hello@techcareerspro.com", icon: Mail },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 gold-gradient rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold">
                Tech<span className="gradient-text">Careers</span> Pro
              </span>
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-sm">
              Connecting top tech talent with innovative companies. Find your dream job or hire exceptional developers.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-primary-foreground/60 hover:text-accent transition-smooth p-2 rounded-md hover:bg-primary-foreground/10"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-primary-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/70 hover:text-accent transition-smooth"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="max-w-md">
            <h3 className="font-semibold text-primary-foreground mb-2">Stay Updated</h3>
            <p className="text-primary-foreground/70 mb-4">
              Get the latest tech jobs and career insights delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="px-6 py-2 gold-gradient text-primary rounded-md font-medium hover-lift transition-smooth">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 TechCareers Pro. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link
              to="/privacy"
              className="text-primary-foreground/60 hover:text-accent text-sm transition-smooth"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-primary-foreground/60 hover:text-accent text-sm transition-smooth"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookies"
              className="text-primary-foreground/60 hover:text-accent text-sm transition-smooth"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;