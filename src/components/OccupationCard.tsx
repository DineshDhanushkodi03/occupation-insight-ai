import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  GraduationCap, 
  Clock, 
  IndianRupee, 
  Users, 
  ChevronRight,
  MapPin 
} from "lucide-react";
import { Occupation } from "@/data/occupations";

interface OccupationCardProps {
  occupation: Occupation;
  onViewDetails: (occupation: Occupation) => void;
  matchScore?: number;
}

const OccupationCard = ({ occupation, onViewDetails, matchScore }: OccupationCardProps) => {
  return (
    <Card className="hover:shadow-medium transition-smooth border-border/50 hover:border-primary/20">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="text-xs">
                {occupation.code}
              </Badge>
              {matchScore && (
                <Badge variant="secondary" className="text-xs">
                  {matchScore}% match
                </Badge>
              )}
            </div>
            <CardTitle className="text-lg font-semibold text-foreground">
              {occupation.title}
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              {occupation.category}
            </p>
          </div>
          <Briefcase className="h-6 w-6 text-primary" />
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-foreground line-clamp-3">
          {occupation.description}
        </p>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Education Required</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Experience</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-xs">
          <p className="text-foreground">{occupation.education}</p>
          <p className="text-foreground">{occupation.experience}</p>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <IndianRupee className="h-4 w-4 text-success" />
          <span className="font-medium text-success">{occupation.salary}</span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Key Skills</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {occupation.skills.slice(0, 4).map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {occupation.skills.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{occupation.skills.length - 4} more
              </Badge>
            )}
          </div>
        </div>

        <Button 
          onClick={() => onViewDetails(occupation)}
          variant="outline"
          className="w-full mt-4 group hover:bg-primary hover:text-primary-foreground transition-smooth"
        >
          View Details
          <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default OccupationCard;