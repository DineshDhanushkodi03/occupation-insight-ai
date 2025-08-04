export interface Occupation {
  id: string;
  code: string;
  title: string;
  description: string;
  category: string;
  subCategory: string;
  skills: string[];
  education: string;
  experience: string;
  salary: string;
  keywords: string[];
  relatedOccupations: string[];
}

export const occupations: Occupation[] = [
  {
    id: "1",
    code: "2511",
    title: "Software Developer",
    description: "Design, develop, and maintain software applications and systems. Work with programming languages, frameworks, and tools to create user-friendly and efficient software solutions.",
    category: "Professional, Scientific and Technical Activities",
    subCategory: "Information Technology",
    skills: ["Programming", "Problem Solving", "Software Design", "Testing", "Debugging"],
    education: "Bachelor's degree in Computer Science or related field",
    experience: "0-2 years for entry level, 3+ years for senior positions",
    salary: "₹4,00,000 - ₹15,00,000 per annum",
    keywords: ["software", "developer", "programmer", "coding", "application", "web", "mobile"],
    relatedOccupations: ["Web Developer", "Mobile App Developer", "System Analyst"]
  },
  {
    id: "2",
    code: "2221",
    title: "Medical Doctor",
    description: "Diagnose and treat patients with various medical conditions. Provide healthcare services, prescribe medications, and perform medical procedures to ensure patient well-being.",
    category: "Human Health and Social Work Activities",
    subCategory: "Medical Practice",
    skills: ["Medical Knowledge", "Patient Care", "Diagnosis", "Communication", "Emergency Response"],
    education: "MBBS degree followed by specialization",
    experience: "Internship required, 5+ years for specialist roles",
    salary: "₹6,00,000 - ₹25,00,000 per annum",
    keywords: ["doctor", "physician", "medical", "healthcare", "patient", "treatment", "medicine"],
    relatedOccupations: ["Surgeon", "Pediatrician", "Cardiologist"]
  },
  {
    id: "3",
    code: "2320",
    title: "Secondary School Teacher",
    description: "Teach students in grades 6-12 in various subjects. Plan lessons, assess student progress, and contribute to their academic and personal development.",
    category: "Education",
    subCategory: "Secondary Education",
    skills: ["Teaching", "Subject Expertise", "Classroom Management", "Assessment", "Communication"],
    education: "Bachelor's degree in subject area plus B.Ed",
    experience: "0-2 years for fresher, 5+ years for senior positions",
    salary: "₹3,00,000 - ₹8,00,000 per annum",
    keywords: ["teacher", "education", "school", "teaching", "student", "classroom", "academic"],
    relatedOccupations: ["Primary School Teacher", "Education Administrator", "Private Tutor"]
  },
  {
    id: "4",
    code: "1211",
    title: "Finance Manager",
    description: "Oversee financial operations, budgeting, and financial planning for organizations. Ensure compliance with financial regulations and optimize financial performance.",
    category: "Financial and Insurance Activities",
    subCategory: "Financial Management",
    skills: ["Financial Analysis", "Budgeting", "Risk Management", "Leadership", "Strategic Planning"],
    education: "Bachelor's in Finance, Accounting or MBA",
    experience: "5+ years in finance roles",
    salary: "₹8,00,000 - ₹20,00,000 per annum",
    keywords: ["finance", "manager", "budget", "accounting", "financial", "money", "investment"],
    relatedOccupations: ["Accountant", "Financial Analyst", "Investment Advisor"]
  },
  {
    id: "5",
    code: "2261",
    title: "Dentist",
    description: "Diagnose and treat dental and oral health issues. Perform dental procedures, educate patients on oral hygiene, and maintain dental records.",
    category: "Human Health and Social Work Activities",
    subCategory: "Dental Practice",
    skills: ["Dental Procedures", "Patient Care", "Manual Dexterity", "Attention to Detail", "Communication"],
    education: "BDS (Bachelor of Dental Surgery)",
    experience: "Internship required, 3+ years for specialized practice",
    salary: "₹5,00,000 - ₹15,00,000 per annum",
    keywords: ["dentist", "dental", "teeth", "oral", "cavity", "treatment", "clinic"],
    relatedOccupations: ["Orthodontist", "Oral Surgeon", "Dental Hygienist"]
  },
  {
    id: "6",
    code: "3512",
    title: "Civil Engineer",
    description: "Design, plan, and supervise construction of infrastructure projects including roads, bridges, buildings, and water systems.",
    category: "Professional, Scientific and Technical Activities",
    subCategory: "Engineering",
    skills: ["Engineering Design", "Project Management", "CAD Software", "Problem Solving", "Safety Management"],
    education: "Bachelor's degree in Civil Engineering",
    experience: "0-2 years for entry level, 5+ years for project leadership",
    salary: "₹3,50,000 - ₹12,00,000 per annum",
    keywords: ["engineer", "civil", "construction", "building", "infrastructure", "bridge", "road"],
    relatedOccupations: ["Structural Engineer", "Construction Manager", "Urban Planner"]
  },
  {
    id: "7",
    code: "5223",
    title: "Shop Sales Assistant",
    description: "Assist customers with purchases, handle transactions, maintain store displays, and provide product information in retail environments.",
    category: "Wholesale and Retail Trade",
    subCategory: "Retail Sales",
    skills: ["Customer Service", "Sales", "Communication", "Product Knowledge", "Cash Handling"],
    education: "High school diploma, on-the-job training",
    experience: "0-1 years, entry-level position",
    salary: "₹1,80,000 - ₹4,00,000 per annum",
    keywords: ["sales", "retail", "shop", "customer", "assistant", "cashier", "store"],
    relatedOccupations: ["Cashier", "Sales Manager", "Store Supervisor"]
  },
  {
    id: "8",
    code: "7231",
    title: "Motor Vehicle Mechanic",
    description: "Diagnose, repair, and maintain motor vehicles including cars, trucks, and motorcycles. Use specialized tools and equipment for automotive repair.",
    category: "Other Service Activities",
    subCategory: "Repair Services",
    skills: ["Mechanical Repair", "Diagnostic Skills", "Tool Usage", "Problem Solving", "Technical Knowledge"],
    education: "Technical diploma or certification in automotive repair",
    experience: "1-3 years apprenticeship, 5+ years for master technician",
    salary: "₹2,50,000 - ₹6,00,000 per annum",
    keywords: ["mechanic", "automotive", "car", "repair", "vehicle", "garage", "maintenance"],
    relatedOccupations: ["Auto Electrician", "Body Shop Technician", "Service Advisor"]
  }
];

export const languages = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "hi", name: "Hindi", nativeName: "हिंदी" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી" },
  { code: "mr", name: "Marathi", nativeName: "मराठी" },
  { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ" }
];