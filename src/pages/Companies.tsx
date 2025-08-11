import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Users, Calendar, ExternalLink, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Companies = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock company data
  const companies = [
    {
      id: 1,
      name: "TechFlow Inc",
      logo: "🚀",
      tagline: "Building the future of web applications",
      industry: "Software Development",
      size: "50-100",
      location: "San Francisco, CA",
      founded: "2018",
      openJobs: 8,
      description: "TechFlow Inc is a fast-growing startup building innovative web applications for enterprise clients.",
      technologies: ["React", "Node.js", "TypeScript", "AWS"],
      website: "techflow.com",
      remote: true,
    },
    {
      id: 2,
      name: "DataVision AI",
      logo: "🤖",
      tagline: "AI-powered analytics for everyone",
      industry: "Artificial Intelligence",
      size: "100-200",
      location: "Seattle, WA",
      founded: "2020",
      openJobs: 12,
      description: "DataVision AI creates cutting-edge machine learning solutions for data-driven businesses.",
      technologies: ["Python", "TensorFlow", "Docker", "Kubernetes"],
      website: "datavision.ai",
      remote: true,
    },
    {
      id: 3,
      name: "CloudScale Solutions",
      logo: "☁️",
      tagline: "Scaling your infrastructure seamlessly",
      industry: "Cloud Computing",
      size: "200-500",
      location: "Austin, TX",
      founded: "2017",
      openJobs: 15,
      description: "CloudScale Solutions provides enterprise cloud infrastructure and DevOps consulting services.",
      technologies: ["AWS", "Kubernetes", "Terraform", "Go"],
      website: "cloudscale.com",
      remote: false,
    },
    {
      id: 4,
      name: "AppCraft Studio",
      logo: "📱",
      tagline: "Crafting exceptional mobile experiences",
      industry: "Mobile Development",
      size: "20-50",
      location: "New York, NY",
      founded: "2019",
      openJobs: 6,
      description: "AppCraft Studio specializes in creating beautiful and functional mobile applications.",
      technologies: ["React Native", "Swift", "Kotlin", "Firebase"],
      website: "appcraft.studio",
      remote: true,
    },
    {
      id: 5,
      name: "InsightLabs",
      logo: "📊",
      tagline: "Data insights that drive decisions",
      industry: "Data Analytics",
      size: "100-200",
      location: "Boston, MA",
      founded: "2016",
      openJobs: 10,
      description: "InsightLabs helps companies unlock the power of their data through advanced analytics and visualization.",
      technologies: ["Python", "R", "Tableau", "Spark"],
      website: "insightlabs.com",
      remote: true,
    },
    {
      id: 6,
      name: "CyberShield Security",
      logo: "🛡️",
      tagline: "Protecting digital assets worldwide",
      industry: "Cybersecurity",
      size: "500+",
      location: "Washington, DC",
      founded: "2015",
      openJobs: 20,
      description: "CyberShield Security provides comprehensive cybersecurity solutions for enterprise clients.",
      technologies: ["Python", "C++", "Docker", "Kubernetes"],
      website: "cybershield.com",
      remote: false,
    },
  ];

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const industries = [...new Set(companies.map(c => c.industry))];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="bg-secondary/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Top Tech <span className="gradient-text">Companies</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover innovative companies that are hiring top tech talent
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search companies, industries, technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Filters */}
      <section className="py-6 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={searchQuery === "" ? "default" : "outline"}
              size="sm"
              onClick={() => setSearchQuery("")}
            >
              All Industries
            </Button>
            {industries.map((industry) => (
              <Button
                key={industry}
                variant={searchQuery === industry.toLowerCase() ? "default" : "outline"}
                size="sm"
                onClick={() => setSearchQuery(industry.toLowerCase())}
              >
                {industry}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <p className="text-muted-foreground">
              Showing {filteredCompanies.length} of {companies.length} companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company) => (
              <Card key={company.id} className="hover-lift shadow-soft group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center text-3xl">
                        {company.logo}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-smooth">
                          <Link to={`/companies/${company.name.toLowerCase().replace(/\s+/g, '-')}`}>
                            {company.name}
                          </Link>
                        </h3>
                        <p className="text-sm text-muted-foreground">{company.tagline}</p>
                      </div>
                    </div>
                    <a
                      href={`https://${company.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-smooth"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {company.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Building2 className="w-4 h-4 mr-2" />
                        {company.industry}
                      </div>
                      <Badge variant="secondary">{company.openJobs} jobs</Badge>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        {company.location}
                        {company.remote && (
                          <Badge variant="outline" className="ml-2 text-xs">Remote</Badge>
                        )}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="w-4 h-4 mr-1" />
                        {company.size}
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      Founded {company.founded}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {company.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {company.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{company.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <Button asChild className="flex-1" variant="outline">
                      <Link to={`/companies/${company.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        View Profile
                      </Link>
                    </Button>
                    <Button asChild className="flex-1">
                      <Link to={`/jobs?company=${company.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        View Jobs
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCompanies.length === 0 && (
            <div className="text-center py-12">
              <div className="text-muted-foreground text-lg mb-4">
                No companies found matching your search
              </div>
              <Button
                variant="outline"
                onClick={() => setSearchQuery("")}
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Companies;