import { useState } from "react";
import Header from "@/components/Header";
import SearchBox from "@/components/SearchBox";
import OccupationCard from "@/components/OccupationCard";
import OccupationDetails from "@/components/OccupationDetails";
import ChatBot from "@/components/ChatBot";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, Users, Search as SearchIcon } from "lucide-react";
import { occupations, type Occupation } from "@/data/occupations";
import { performSemanticSearch, calculateMatchPercentage, type SearchResult } from "@/utils/searchUtils";

const Index = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedOccupation, setSelectedOccupation] = useState<Occupation | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [isChatMinimized, setIsChatMinimized] = useState(true);

  const handleSearch = async (query: string, language: string) => {
    setIsSearching(true);
    setSelectedOccupation(null);
    
    // Simulate API delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const results = performSemanticSearch(query, occupations);
    setSearchResults(results);
    setIsSearching(false);
    setHasSearched(true);
  };

  const handleViewDetails = (occupation: Occupation) => {
    setSelectedOccupation(occupation);
  };

  const handleBackToResults = () => {
    setSelectedOccupation(null);
  };

  const stats = [
    { label: "Total Occupations", value: "500+", icon: Users },
    { label: "Categories", value: "25+", icon: TrendingUp },
    { label: "Languages Supported", value: "10", icon: Sparkles }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="max-w-4xl mx-auto">
          <SearchBox onSearch={handleSearch} isLoading={isSearching} />
        </div>

        {!hasSearched && (
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="text-center p-6 hover:shadow-medium transition-smooth">
                    <CardContent className="pt-6">
                      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{stat.value}</h3>
                      <p className="text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Featured Occupations */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                Popular Career Searches
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {occupations.slice(0, 6).map((occupation) => (
                  <OccupationCard
                    key={occupation.id}
                    occupation={occupation}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            </div>

            {/* How it Works */}
            <Card className="bg-gradient-accent p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  How Our AI Search Works
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our advanced semantic search understands your career interests and matches you with relevant occupations.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SearchIcon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Smart Search</h3>
                  <p className="text-sm text-muted-foreground">
                    Describe your interests in natural language and get intelligent matches
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">AI Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Our AI analyzes job requirements, skills, and career paths
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Career Guidance</h3>
                  <p className="text-sm text-muted-foreground">
                    Get detailed information and personalized career advice
                  </p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Search Results */}
        {hasSearched && !selectedOccupation && (
          <div className="max-w-6xl mx-auto">
            {searchResults.length > 0 ? (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-foreground">
                    Search Results ({searchResults.length} found)
                  </h2>
                  <Badge variant="secondary" className="text-sm">
                    Powered by AI Semantic Search
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {searchResults.map((result) => (
                    <OccupationCard
                      key={result.occupation.id}
                      occupation={result.occupation}
                      onViewDetails={handleViewDetails}
                      matchScore={calculateMatchPercentage(result.score)}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <Card className="p-8 text-center">
                <SearchIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No results found</h3>
                <p className="text-muted-foreground mb-4">
                  Try different keywords or ask our AI assistant for help
                </p>
              </Card>
            )}
          </div>
        )}

        {/* Occupation Details */}
        {selectedOccupation && (
          <div className="max-w-4xl mx-auto">
            <OccupationDetails
              occupation={selectedOccupation}
              onBack={handleBackToResults}
            />
          </div>
        )}
      </main>

      {/* Chat Bot */}
      <ChatBot 
        isMinimized={isChatMinimized}
        onToggleMinimize={() => setIsChatMinimized(!isChatMinimized)}
      />
    </div>
  );
};

export default Index;
