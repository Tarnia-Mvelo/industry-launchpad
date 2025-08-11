import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Smartphone, Brain, Shield, Palette, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const TechCategories = () => {
  const categories = [
    {
      name: "Frontend Development",
      icon: Code,
      jobCount: "2,847",
      skills: ["React", "Vue.js", "Angular", "TypeScript"],
      color: "from-blue-500 to-purple-600",
    },
    {
      name: "Backend Development",
      icon: Database,
      jobCount: "3,124",
      skills: ["Node.js", "Python", "Java", "Go"],
      color: "from-green-500 to-teal-600",
    },
    {
      name: "Cloud & DevOps",
      icon: Cloud,
      jobCount: "1,956",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
      color: "from-orange-500 to-red-600",
    },
    {
      name: "Mobile Development",
      icon: Smartphone,
      jobCount: "1,432",
      skills: ["React Native", "Flutter", "Swift", "Kotlin"],
      color: "from-purple-500 to-pink-600",
    },
    {
      name: "AI & Machine Learning",
      icon: Brain,
      jobCount: "987",
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
      color: "from-yellow-500 to-orange-600",
    },
    {
      name: "Cybersecurity",
      icon: Shield,
      jobCount: "743",
      skills: ["Security", "Penetration Testing", "Compliance"],
      color: "from-red-500 to-pink-600",
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      jobCount: "891",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      color: "from-pink-500 to-purple-600",
    },
    {
      name: "Data Science",
      icon: BarChart,
      jobCount: "1,234",
      skills: ["Python", "R", "SQL", "Tableau"],
      color: "from-indigo-500 to-blue-600",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Explore Tech <span className="gradient-text">Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find opportunities in the tech domains that match your expertise and interests
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                to={`/jobs?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Card className="hover-lift shadow-soft border-border group cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="text-center">
                      {/* Icon with gradient background */}
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} p-4 mx-auto mb-4 group-hover:scale-110 transition-bounce`}>
                        <Icon className="w-full h-full text-white" />
                      </div>

                      {/* Category Name */}
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-smooth">
                        {category.name}
                      </h3>

                      {/* Job Count */}
                      <div className="text-2xl font-bold gradient-text mb-3">
                        {category.jobCount}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">open positions</p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-1 justify-center">
                        {category.skills.slice(0, 3).map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {category.skills.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{category.skills.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Don't see your specialty? We have opportunities in every tech domain.
          </p>
          <Link
            to="/jobs"
            className="text-accent hover:text-accent/80 font-medium transition-smooth"
          >
            Browse All Categories →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TechCategories;