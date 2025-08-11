import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Building2, MapPin, Clock, DollarSign, Users, Calendar, Share2, Bookmark, ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const JobDetails = () => {
  const { id } = useParams();

  // Mock job data - in a real app, this would be fetched based on the ID
  const job = {
    id: 1,
    title: "Senior React Developer",
    company: "TechFlow Inc",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "Senior",
    salary: "$120k - $160k",
    posted: "2 days ago",
    remote: true,
    featured: true,
    description: `We are looking for a Senior React Developer to join our dynamic team and help build the next generation of web applications. You'll work on cutting-edge projects using the latest technologies and best practices.`,
    responsibilities: [
      "Develop and maintain high-quality React applications using TypeScript",
      "Collaborate with designers and backend engineers to implement new features",
      "Write clean, maintainable, and well-tested code",
      "Mentor junior developers and conduct code reviews",
      "Participate in architectural decisions and technical planning",
      "Optimize application performance and user experience"
    ],
    requirements: [
      "5+ years of experience with React and JavaScript/TypeScript",
      "Strong understanding of modern React patterns and hooks",
      "Experience with state management libraries (Redux, Zustand, etc.)",
      "Proficiency in HTML5, CSS3, and responsive design",
      "Experience with testing frameworks (Jest, React Testing Library)",
      "Knowledge of build tools and bundlers (Webpack, Vite)",
      "Bachelor's degree in Computer Science or equivalent experience"
    ],
    niceToHave: [
      "Experience with Next.js and SSR/SSG",
      "Knowledge of GraphQL and Apollo Client",
      "Familiarity with cloud platforms (AWS, Vercel)",
      "Experience with mobile development (React Native)",
      "Understanding of UI/UX design principles"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "Unlimited PTO and flexible working hours",
      "Remote work opportunities",
      "$2000 annual learning and development budget",
      "Latest MacBook Pro and equipment allowance",
      "Catered meals and snacks in office",
      "Team building events and company retreats"
    ],
    tags: ["React", "TypeScript", "Next.js", "GraphQL", "AWS"],
    companyInfo: {
      name: "TechFlow Inc",
      size: "50-100 employees",
      industry: "Software Development",
      founded: "2018",
      description: "TechFlow Inc is a fast-growing startup building innovative web applications for enterprise clients. We're passionate about creating exceptional user experiences and maintaining high code quality.",
      website: "https://techflow.com",
      logo: "🚀"
    }
  };

  const relatedJobs = [
    {
      id: 2,
      title: "Frontend Engineer",
      company: "WebCraft Labs",
      salary: "$90k - $120k",
      location: "Remote"
    },
    {
      id: 3,
      title: "React Native Developer",
      company: "MobileFirst",
      salary: "$100k - $130k",
      location: "Austin, TX"
    },
    {
      id: 4,
      title: "Full Stack Developer",
      company: "CodeCraft Solutions",
      salary: "$95k - $125k",
      location: "Seattle, WA"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/jobs" className="flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Jobs</span>
          </Link>
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header */}
            <Card className="shadow-medium">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center text-2xl">
                      {job.companyInfo.logo}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
                          {job.title}
                        </h1>
                        {job.featured && (
                          <Badge className="gold-gradient text-primary">Featured</Badge>
                        )}
                      </div>
                      <div className="flex items-center text-lg text-muted-foreground mb-3">
                        <Building2 className="w-5 h-5 mr-2" />
                        <Link to={`/companies/${job.company.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-accent transition-smooth">
                          {job.company}
                        </Link>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {job.location}
                          {job.remote && (
                            <Badge variant="secondary" className="ml-2">Remote</Badge>
                          )}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-2" />
                          {job.salary}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          Posted {job.posted}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Bookmark className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="text-muted-foreground">{job.description}</p>
              </CardContent>
            </Card>

            {/* Job Details */}
            <Card className="shadow-medium">
              <CardContent className="pt-6">
                <div className="space-y-8">
                  {/* Responsibilities */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Responsibilities</h3>
                    <ul className="space-y-2">
                      {job.responsibilities.map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  {/* Requirements */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Requirements</h3>
                    <ul className="space-y-2">
                      {job.requirements.map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  {/* Nice to Have */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Nice to Have</h3>
                    <ul className="space-y-2">
                      {job.niceToHave.map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  {/* Benefits */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Benefits & Perks</h3>
                    <ul className="space-y-2">
                      {job.benefits.map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <Card className="shadow-medium sticky top-24">
              <CardContent className="pt-6">
                <Button className="w-full gold-gradient text-primary hover-lift mb-4" size="lg">
                  Apply Now
                </Button>
                <Button variant="outline" className="w-full">
                  Save for Later
                </Button>
                
                <Separator className="my-4" />
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Job Type:</span>
                    <span className="font-medium">{job.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience:</span>
                    <span className="font-medium">{job.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Remote:</span>
                    <span className="font-medium">{job.remote ? "Yes" : "No"}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card className="shadow-medium">
              <CardHeader>
                <h3 className="text-lg font-semibold">About {job.companyInfo.name}</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {job.companyInfo.description}
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Size:</span>
                      <span className="font-medium">{job.companyInfo.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Industry:</span>
                      <span className="font-medium">{job.companyInfo.industry}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Founded:</span>
                      <span className="font-medium">{job.companyInfo.founded}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/companies/${job.company.toLowerCase().replace(/\s+/g, '-')}`}>
                      View Company Profile
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Related Jobs */}
            <Card className="shadow-medium">
              <CardHeader>
                <h3 className="text-lg font-semibold">Similar Jobs</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {relatedJobs.map((relatedJob) => (
                    <div key={relatedJob.id} className="border border-border rounded-lg p-3 hover:bg-secondary/50 transition-smooth">
                      <Link to={`/jobs/${relatedJob.id}`}>
                        <h4 className="font-medium text-foreground hover:text-accent transition-smooth mb-1">
                          {relatedJob.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-1">{relatedJob.company}</p>
                        <div className="flex justify-between items-center text-xs text-muted-foreground">
                          <span>{relatedJob.location}</span>
                          <span>{relatedJob.salary}</span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobDetails;