import { Occupation } from "@/data/occupations";

export interface SearchResult {
  occupation: Occupation;
  score: number;
}

export const performSemanticSearch = (query: string, occupations: Occupation[]): SearchResult[] => {
  const normalizedQuery = query.toLowerCase().trim();
  
  if (!normalizedQuery) return [];

  const results: SearchResult[] = [];

  occupations.forEach((occupation) => {
    let score = 0;
    
    // Direct title match (highest weight)
    if (occupation.title.toLowerCase().includes(normalizedQuery)) {
      score += 100;
    }
    
    // Keywords match (high weight)
    const keywordMatches = occupation.keywords.filter(keyword => 
      keyword.toLowerCase().includes(normalizedQuery) || 
      normalizedQuery.includes(keyword.toLowerCase())
    );
    score += keywordMatches.length * 80;
    
    // Description match (medium weight)
    if (occupation.description.toLowerCase().includes(normalizedQuery)) {
      score += 60;
    }
    
    // Skills match (medium weight)
    const skillMatches = occupation.skills.filter(skill => 
      skill.toLowerCase().includes(normalizedQuery) || 
      normalizedQuery.includes(skill.toLowerCase())
    );
    score += skillMatches.length * 50;
    
    // Category match (lower weight)
    if (occupation.category.toLowerCase().includes(normalizedQuery)) {
      score += 40;
    }
    
    // Partial word matching for better semantic search
    const queryWords = normalizedQuery.split(/\s+/);
    queryWords.forEach(word => {
      if (word.length > 2) { // Only consider words longer than 2 characters
        // Check all searchable text
        const searchableText = [
          occupation.title,
          occupation.description,
          ...occupation.keywords,
          ...occupation.skills,
          occupation.category,
          occupation.subCategory
        ].join(' ').toLowerCase();
        
        // Fuzzy matching for better results
        if (searchableText.includes(word)) {
          score += 30;
        }
        
        // Boost score for exact word matches
        const exactWordRegex = new RegExp(`\\b${word}\\b`, 'i');
        if (exactWordRegex.test(searchableText)) {
          score += 20;
        }
      }
    });
    
    // Semantic keyword mapping for better understanding
    const semanticMappings: { [key: string]: string[] } = {
      'computer': ['software', 'programming', 'developer', 'tech', 'it'],
      'medicine': ['doctor', 'medical', 'health', 'physician', 'healthcare'],
      'teaching': ['teacher', 'education', 'school', 'academic', 'instructor'],
      'money': ['finance', 'accounting', 'banking', 'investment', 'financial'],
      'building': ['construction', 'engineer', 'civil', 'architect', 'contractor'],
      'helping': ['social', 'care', 'service', 'support', 'assistance'],
      'creative': ['design', 'art', 'media', 'marketing', 'advertising'],
      'business': ['management', 'executive', 'administration', 'corporate', 'sales']
    };
    
    // Apply semantic mapping
    Object.entries(semanticMappings).forEach(([concept, relatedTerms]) => {
      if (normalizedQuery.includes(concept)) {
        relatedTerms.forEach(term => {
          if (occupation.keywords.some(keyword => keyword.toLowerCase().includes(term)) ||
              occupation.title.toLowerCase().includes(term) ||
              occupation.description.toLowerCase().includes(term)) {
            score += 25;
          }
        });
      }
    });
    
    // Add to results if score is above threshold
    if (score > 0) {
      results.push({ occupation, score });
    }
  });

  // Sort by score (descending) and return top results
  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, 20); // Limit to top 20 results
};

export const calculateMatchPercentage = (score: number, maxPossibleScore: number = 300): number => {
  return Math.min(Math.round((score / maxPossibleScore) * 100), 100);
};