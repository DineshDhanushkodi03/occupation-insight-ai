import { useState } from "react";
import { Search, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { languages } from "@/data/occupations";

interface SearchBoxProps {
  onSearch: (query: string, language: string) => void;
  isLoading?: boolean;
}

const SearchBox = ({ onSearch, isLoading = false }: SearchBoxProps) => {
  const [query, setQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim(), selectedLanguage);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Card className="p-6 shadow-medium bg-gradient-accent">
      <div className="space-y-4">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Find Your Perfect Career Match
          </h2>
          <p className="text-muted-foreground">
            Describe what you're looking for and let our AI find matching occupations
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="e.g., 'I want to work with computers and solve problems' or 'doctor'"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pl-10 h-12 text-base"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="flex gap-2">
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="w-32 h-12">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{lang.nativeName}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button 
              onClick={handleSearch} 
              disabled={!query.trim() || isLoading}
              className="h-12 px-6 bg-gradient-primary hover:opacity-90 transition-smooth"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent" />
                  Searching...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Search
                </div>
              )}
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          <span className="text-sm text-muted-foreground">Try:</span>
          {["software engineer", "doctor", "teacher", "business manager"].map((example) => (
            <Button
              key={example}
              variant="outline"
              size="sm"
              onClick={() => {
                setQuery(example);
                onSearch(example, selectedLanguage);
              }}
              className="h-7 text-xs"
              disabled={isLoading}
            >
              {example}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default SearchBox;