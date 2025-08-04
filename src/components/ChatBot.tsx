import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Send, 
  Bot, 
  User, 
  Minimize2, 
  Maximize2,
  Sparkles
} from "lucide-react";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

interface ChatBotProps {
  isMinimized: boolean;
  onToggleMinimize: () => void;
}

const ChatBot = ({ isMinimized, onToggleMinimize }: ChatBotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content: "Hello! I'm your AI career assistant. I can help you understand different occupations, career paths, salary expectations, and skill requirements. What would you like to know?",
      timestamp: new Date(),
      suggestions: [
        "What skills do I need for software development?",
        "Tell me about healthcare career options",
        "What's the salary range for teachers?",
        "How do I become an engineer?"
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase();
    let response = "";
    let suggestions: string[] = [];

    if (lowerMessage.includes("software") || lowerMessage.includes("developer") || lowerMessage.includes("programming")) {
      response = "Software development is a great career choice! You'll need skills in programming languages (like Python, Java, JavaScript), problem-solving, and software design. Most positions require a bachelor's degree in Computer Science. Entry-level salaries range from ₹4-8 lakhs, with senior developers earning ₹15+ lakhs annually.";
      suggestions = [
        "Which programming language should I learn first?",
        "What's the difference between web and mobile development?",
        "How long does it take to become a software developer?"
      ];
    } else if (lowerMessage.includes("doctor") || lowerMessage.includes("medical") || lowerMessage.includes("healthcare")) {
      response = "Healthcare offers many rewarding career paths! To become a doctor, you need an MBBS degree followed by specialization. Key skills include medical knowledge, patient care, and communication. Doctors typically earn ₹6-25 lakhs annually depending on specialization and experience.";
      suggestions = [
        "What are the different medical specializations?",
        "How long is medical school?",
        "What about nursing careers?"
      ];
    } else if (lowerMessage.includes("teacher") || lowerMessage.includes("education") || lowerMessage.includes("teaching")) {
      response = "Teaching is a noble profession! Secondary school teachers need a bachelor's degree in their subject plus a B.Ed qualification. Key skills include communication, classroom management, and subject expertise. Salaries range from ₹3-8 lakhs annually, with growth opportunities in administration.";
      suggestions = [
        "What subjects are in high demand for teachers?",
        "Can I teach without a B.Ed degree?",
        "What about private tutoring opportunities?"
      ];
    } else if (lowerMessage.includes("engineer") || lowerMessage.includes("engineering")) {
      response = "Engineering offers diverse career paths! Civil engineers design infrastructure, while software engineers build applications. Most engineering roles require a bachelor's degree in the specific field. Salaries vary by specialization: Civil (₹3.5-12 lakhs), Software (₹4-15 lakhs), Mechanical (₹3-10 lakhs).";
      suggestions = [
        "Which engineering field has the best job prospects?",
        "Do I need a master's degree for engineering?",
        "What about engineering management roles?"
      ];
    } else if (lowerMessage.includes("salary") || lowerMessage.includes("pay") || lowerMessage.includes("income")) {
      response = "Salaries vary significantly by occupation, experience, and location. Entry-level positions typically start at ₹2-5 lakhs annually, while experienced professionals can earn ₹10-25+ lakhs. Factors affecting salary include education, skills, industry demand, and geographic location.";
      suggestions = [
        "Which careers have the highest starting salaries?",
        "How does location affect salary?",
        "What about salary growth over time?"
      ];
    } else if (lowerMessage.includes("skill") || lowerMessage.includes("qualification") || lowerMessage.includes("requirement")) {
      response = "Skills requirements vary by occupation. Technical roles need specific technical skills, while all professions value soft skills like communication, problem-solving, and teamwork. Many positions require formal education, certifications, or on-the-job training.";
      suggestions = [
        "What are the most in-demand skills right now?",
        "How can I develop new skills?",
        "Are certifications important?"
      ];
    } else {
      response = "I'd be happy to help you with career-related questions! I can provide information about job requirements, salary ranges, skills needed, education paths, and career growth opportunities. What specific aspect of careers interests you?";
      suggestions = [
        "Tell me about high-paying careers",
        "What careers don't require a college degree?",
        "Which industries are growing fastest?",
        "How do I change careers?"
      ];
    }

    return {
      id: Date.now().toString(),
      type: "bot",
      content: response,
      timestamp: new Date(),
      suggestions
    };
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={onToggleMinimize}
          className="h-14 w-14 rounded-full shadow-large bg-gradient-primary hover:opacity-90 transition-smooth"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <Card className="fixed bottom-4 right-4 w-96 h-[500px] shadow-large z-50 flex flex-col">
      <CardHeader className="pb-3 bg-gradient-primary text-primary-foreground rounded-t-lg">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Bot className="h-5 w-5" />
            Career Assistant
          </CardTitle>
          <Button
            onClick={onToggleMinimize}
            variant="ghost"
            size="sm"
            className="text-primary-foreground hover:bg-primary-foreground/20"
          >
            <Minimize2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col p-0">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] rounded-lg p-3 ${
                  message.type === "user" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-foreground"
                }`}>
                  <div className="flex items-start gap-2">
                    {message.type === "bot" && <Bot className="h-4 w-4 mt-0.5 text-primary" />}
                    {message.type === "user" && <User className="h-4 w-4 mt-0.5" />}
                    <div className="flex-1">
                      <p className="text-sm">{message.content}</p>
                      {message.suggestions && (
                        <div className="mt-3 space-y-1">
                          <p className="text-xs opacity-75 flex items-center gap-1">
                            <Sparkles className="h-3 w-3" />
                            Suggested questions:
                          </p>
                          {message.suggestions.map((suggestion, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="w-full text-left justify-start text-xs h-auto py-1 px-2"
                            >
                              {suggestion}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted text-foreground rounded-lg p-3 flex items-center gap-2">
                  <Bot className="h-4 w-4 text-primary" />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about careers, skills, salaries..."
              className="flex-1"
              disabled={isTyping}
            />
            <Button 
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="bg-primary hover:bg-primary-hover"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatBot;