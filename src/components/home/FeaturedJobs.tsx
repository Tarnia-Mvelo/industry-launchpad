import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Clock, DollarSign, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedJobs = () => {
  const featuredJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Takealot Tech",
      location: "Cape Town, WC",
      type: "Full-time",
      salary: "R900k - R1.2M",
      logo: "🚀",
      tags: ["React", "TypeScript", "Next.js"],
      posted: "2 days ago",
      remote: true,
    },
    {
      id: 2,
      title: "Python Backend Engineer",
      company: "Capitec Bank",
      location: "Stellenbosch, WC",
      type: "Full-time",
      salary: "R750k - R950k",
      logo: "🤖",
      tags: ["Python", "Django", "PostgreSQL"],
      posted: "1 day ago",
      remote: true,
    },
    {
      id: 3,
      title: "DevOps Engineer",
      company: "Dimension Data",
      location: "Johannesburg, GP",
      type: "Full-time",
      salary: "R850k - R1.1M",
      logo: "☁️",
      tags: ["AWS", "Kubernetes", "Docker"],
      posted: "3 days ago",
      remote: false,
    },
    {
      id: 4,
      title: "Mobile Developer",
      company: "22Seven",
      location: "Cape Town, WC",
      type: "Full-time",
      salary: "R650k - R850k",
      logo: "📱",
      tags: ["React Native", "Swift", "Kotlin"],
      posted: "1 day ago",
      remote: true,
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "Discovery Health",
      location: "Sandton, GP",
      type: "Full-time",
      salary: "R800k - R1M",
      logo: "📊",
      tags: ["Python", "ML", "TensorFlow"],
      posted: "4 days ago",
      remote: true,
    },
    {
      id: 6,
      title: "Full Stack Engineer",
      company: "Yoco",
      location: "Cape Town, WC",
      type: "Full-time",
      salary: "R700k - R900k",
      logo: "⚡",
      tags: ["Node.js", "React", "MongoDB"],
      posted: "2 days ago",
      remote: false,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured <span className="gradient-text">Tech Jobs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover hand-picked opportunities from top tech companies actively hiring
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredJobs.map((job) => (
            <Card key={job.id} className="hover-lift shadow-soft border-border group">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-2xl">
                      {job.logo}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-accent transition-smooth">
                        {job.title}
                      </h3>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Building2 className="w-3 h-3 mr-1" />
                        {job.company}
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-smooth">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="py-3">
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                    {job.remote && (
                      <Badge variant="secondary" className="ml-2 text-xs">
                        Remote
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {job.salary}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {job.posted}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-3">
                <Button asChild className="w-full" variant="outline">
                  <Link to={`/jobs/${job.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button asChild size="lg" className="gold-gradient text-primary hover-lift">
            <Link to="/jobs">
              View All Tech Jobs
              <span className="ml-2">→</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;