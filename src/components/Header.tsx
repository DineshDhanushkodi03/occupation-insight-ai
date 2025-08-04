import { Search, MessageSquare, Globe } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-primary text-primary-foreground shadow-medium">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-primary-foreground/20 p-2 rounded-lg">
              <Search className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">National Occupation Search</h1>
              <p className="text-primary-foreground/80 text-sm">
                AI-Powered Semantic Search for Career Guidance
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Globe className="h-4 w-4" />
              <span>Multi-language Support</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <MessageSquare className="h-4 w-4" />
              <span>AI Assistant</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;