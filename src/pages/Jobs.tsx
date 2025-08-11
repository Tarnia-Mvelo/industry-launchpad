import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Clock, DollarSign, Search, Filter, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Mock job data - in a real app, this would come from an API
  const jobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "Takealot Tech",
      location: "Cape Town, WC",
      type: "Full-time",
      experience: "Senior",
      salary: "R900k - R1.2M",
      description: "Join our team to build cutting-edge e-commerce web applications using React, TypeScript, and modern tools for South Africa's leading online retailer.",
      tags: ["React", "TypeScript", "Next.js", "GraphQL"],
      posted: "2 days ago",
      remote: true,
      featured: true,
    },
    {
      id: 2,
      title: "Python Backend Engineer",
      company: "Capitec Bank",
      location: "Stellenbosch, WC",
      type: "Full-time",
      experience: "Mid-level",
      salary: "R750k - R950k",
      description: "Build scalable backend systems and APIs for our digital banking platform serving millions of South Africans.",
      tags: ["Python", "Django", "PostgreSQL", "Redis"],
      posted: "1 day ago",
      remote: true,
      featured: true,
    },
    {
      id: 3,
      title: "DevOps Engineer",
      company: "Dimension Data",
      location: "Johannesburg, GP",
      type: "Full-time",
      experience: "Senior",
      salary: "R850k - R1.1M",
      description: "Design and maintain cloud infrastructure, CI/CD pipelines, and monitoring systems for enterprise clients across Africa.",
      tags: ["AWS", "Kubernetes", "Docker", "Terraform"],
      posted: "3 days ago",
      remote: false,
      featured: false,
    },
    {
      id: 4,
      title: "Frontend Developer",
      company: "Praekelt.org",
      location: "Cape Town, WC",
      type: "Full-time",
      experience: "Junior",
      salary: "R450k - R650k",
      description: "Create beautiful and responsive user interfaces for mobile and web applications that impact millions across Africa.",
      tags: ["Vue.js", "JavaScript", "CSS", "Figma"],
      posted: "1 day ago",
      remote: true,
      featured: false,
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "Discovery Health",
      location: "Sandton, GP",
      type: "Full-time",
      experience: "Mid-level",
      salary: "R800k - R1M",
      description: "Analyze complex healthcare datasets and build machine learning models to improve health outcomes for South Africans.",
      tags: ["Python", "Machine Learning", "TensorFlow", "SQL"],
      posted: "4 days ago",
      remote: true,
      featured: false,
    },
    {
      id: 6,
      title: "Full Stack Engineer",
      company: "Yoco",
      location: "Cape Town, WC",
      type: "Full-time",
      experience: "Mid-level",
      salary: "R700k - R900k",
      description: "Work across the entire stack to deliver payment solutions for small businesses across South Africa.",
      tags: ["Node.js", "React", "MongoDB", "Express"],
      posted: "2 days ago",
      remote: false,
      featured: false,
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    return (
      (searchQuery === "" || 
       job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
       job.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) &&
      (locationFilter === "" || job.location.toLowerCase().includes(locationFilter.toLowerCase())) &&
      (experienceFilter === "" || experienceFilter === "all" || job.experience === experienceFilter) &&
      (typeFilter === "" || typeFilter === "all" || job.type === typeFilter)
    );
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="bg-secondary/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Tech <span className="gradient-text">Job Opportunities</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              {filteredJobs.length} jobs available • Updated daily
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-card rounded-xl shadow-medium p-6">
            <div className="grid md:grid-cols-4 gap-4 mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search jobs, companies, skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Input
                placeholder="Location"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              />
              <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Experience Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Junior">Junior</SelectItem>
                  <SelectItem value="Mid-level">Mid-level</SelectItem>
                  <SelectItem value="Senior">Senior</SelectItem>
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Full-time">Full-time</SelectItem>
                  <SelectItem value="Part-time">Part-time</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                  <SelectItem value="Internship">Internship</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex justify-between items-center">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2"
              >
                <Filter className="w-4 h-4" />
                <span>More Filters</span>
              </Button>
              <div className="text-sm text-muted-foreground">
                Showing {filteredJobs.length} of {jobs.length} jobs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className={`hover-lift shadow-soft ${job.featured ? 'ring-2 ring-accent/20' : ''}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center text-2xl">
                        {job.company.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="text-xl font-semibold text-foreground hover:text-accent transition-smooth">
                            <Link to={`/jobs/${job.id}`}>{job.title}</Link>
                          </h3>
                          {job.featured && (
                            <Badge className="gold-gradient text-primary">Featured</Badge>
                          )}
                        </div>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <Building2 className="w-4 h-4 mr-2" />
                          <Link to={`/companies/${job.company.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-accent transition-smooth">
                            {job.company}
                          </Link>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                            {job.remote && (
                              <Badge variant="secondary" className="ml-2 text-xs">Remote</Badge>
                            )}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {job.salary}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {job.posted}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Bookmark className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {job.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">
                      {job.experience} • {job.type}
                    </Badge>
                    <Button asChild>
                      <Link to={`/jobs/${job.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-muted-foreground text-lg mb-4">
                No jobs found matching your criteria
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setLocationFilter("");
                  setExperienceFilter("all");
                  setTypeFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Jobs;