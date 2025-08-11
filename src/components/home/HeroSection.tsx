import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Briefcase, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-tech-jobs.jpg";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");

  const handleSearch = () => {
    // This would navigate to jobs page with filters
    console.log("Searching for:", { searchQuery, location, jobType });
  };

  const stats = [
    { label: "Active Jobs", value: "12,500+", icon: Briefcase },
    { label: "Companies", value: "2,800+", icon: TrendingUp },
    { label: "Developers Hired", value: "45,000+", icon: TrendingUp },
  ];

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Tech professionals working"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Find Your Dream{" "}
              <span className="gradient-text">Tech Job</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Connect with top tech companies and discover opportunities that match your skills. 
              Join thousands of developers, engineers, and tech professionals building their careers.
            </p>

            {/* Search Bar */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-strong mb-8">
              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Job title, skills, or keywords"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Location or Remote"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={jobType} onValueChange={setJobType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                onClick={handleSearch}
                className="w-full gold-gradient text-primary font-semibold py-3 hover-lift"
                size="lg"
              >
                <Search className="w-5 h-5 mr-2" />
                Search Tech Jobs
              </Button>
            </div>

            {/* Popular Searches */}
            <div className="text-center lg:text-left">
              <p className="text-white/70 text-sm mb-3">Popular searches:</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {["React Developer", "Python Engineer", "DevOps", "Full Stack", "Data Scientist"].map((term) => (
                  <button
                    key={term}
                    className="px-3 py-1 bg-white/20 text-white text-sm rounded-full hover:bg-white/30 transition-smooth"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="lg:flex lg:justify-end">
            <div className="grid grid-cols-1 gap-6 max-w-sm mx-auto lg:mx-0">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover-lift"
                  >
                    <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 w-full h-20 bg-background transform -skew-y-1 origin-bottom-right"></div>
    </section>
  );
};

export default HeroSection;