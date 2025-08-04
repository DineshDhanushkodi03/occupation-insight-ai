import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Briefcase, 
  GraduationCap, 
  Clock, 
  IndianRupee, 
  Users, 
  ArrowLeft,
  BookOpen,
  Target,
  TrendingUp,
  MapPin,
  Star
} from "lucide-react";
import { Occupation } from "@/data/occupations";

interface OccupationDetailsProps {
  occupation: Occupation;
  onBack: () => void;
}

const OccupationDetails = ({ occupation, onBack }: OccupationDetailsProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button 
          onClick={onBack}
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Results
        </Button>
      </div>

      <Card className="shadow-medium">
        <CardHeader className="bg-gradient-accent">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline" className="text-sm">
                  Code: {occupation.code}
                </Badge>
                <Badge className="bg-primary text-primary-foreground">
                  {occupation.category}
                </Badge>
              </div>
              <CardTitle className="text-2xl font-bold text-foreground mb-2">
                {occupation.title}
              </CardTitle>
              <p className="text-muted-foreground">
                {occupation.subCategory}
              </p>
            </div>
            <div className="bg-primary/10 p-3 rounded-lg">
              <Briefcase className="h-8 w-8 text-primary" />
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Job Description
            </h3>
            <p className="text-foreground leading-relaxed">
              {occupation.description}
            </p>
          </div>

          <Separator />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  Education Requirements
                </h4>
                <p className="text-sm text-foreground bg-muted p-3 rounded-lg">
                  {occupation.education}
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  Experience Level
                </h4>
                <p className="text-sm text-foreground bg-muted p-3 rounded-lg">
                  {occupation.experience}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <IndianRupee className="h-4 w-4 text-success" />
                  Salary Range
                </h4>
                <p className="text-sm font-medium text-success bg-success/10 p-3 rounded-lg">
                  {occupation.salary}
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Industry Category
                </h4>
                <p className="text-sm text-foreground bg-muted p-3 rounded-lg">
                  {occupation.category}
                </p>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Required Skills
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {occupation.skills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="justify-center p-2 text-sm"
                >
                  <Star className="h-3 w-3 mr-1" />
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Related Occupations
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {occupation.relatedOccupations.map((related) => (
                <Card key={related} className="p-3 hover:shadow-soft transition-smooth cursor-pointer">
                  <p className="text-sm font-medium text-center">{related}</p>
                </Card>
              ))}
            </div>
          </div>

          <Separator />

          <div className="bg-info/10 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-info">Career Path Information</h4>
            <p className="text-sm text-foreground">
              This occupation offers growth opportunities in {occupation.category.toLowerCase()}. 
              Consider developing skills in {occupation.skills.slice(0, 3).join(", ")} to advance your career. 
              Network with professionals in related fields and stay updated with industry trends.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OccupationDetails;