import React, { useState } from 'react';
import { Building2, Search, Code2, Users2, Brain, MessagesSquare, CheckCircle2, Briefcase } from 'lucide-react';

interface RecruitmentStep {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface CompanyProcess {
  name: string;
  logo: string;
  description: string;
  averageTimeline: string;
  steps: RecruitmentStep[];
  additionalInfo: string;
  eligibility: string[];
}

function CompanyCard({ company, isOpen, onToggle }: {
  company: CompanyProcess;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div 
        className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src={company.logo} 
              alt={`${company.name} logo`} 
              className="w-12 h-12 object-contain"
            />
            <h2 className="text-2xl font-semibold text-gray-900">{company.name}</h2>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            {isOpen ? '↑' : '↓'}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="px-6 pb-6">
          <div className="mb-6">
            <p className="text-gray-600 mb-4">{company.description}</p>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="text-indigo-700 font-medium">Average Timeline: {company.averageTimeline}</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Eligibility Criteria:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              {company.eligibility.map((criteria, index) => (
                <li key={index}>{criteria}</li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recruitment Process:</h3>
            <div className="space-y-4">
              {company.steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100">
                      <Icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Additional Information:</h3>
            <p className="text-gray-600">{company.additionalInfo}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  const [openCompany, setOpenCompany] = useState<string | null>(null);

  const companies: CompanyProcess[] = [
    {
      name: "Google",
      logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      description: "Google's hiring process is known for its thoroughness and focus on both technical skills and problem-solving ability. The company values innovation and cultural fit alongside technical expertise.",
      averageTimeline: "4-8 weeks",
      eligibility: [
        "Bachelor's/Master's degree in Computer Science or related field",
        "Strong foundation in data structures and algorithms",
        "Excellent coding skills in any programming language",
        "Problem-solving and analytical thinking abilities",
        "Minimum CGPA of 7.5 or 75% throughout academics"
      ],
      steps: [
        {
          icon: Search,
          title: "Online Assessment",
          description: "2-3 coding problems focusing on data structures, algorithms, and problem-solving skills. Time limit usually 90 minutes."
        },
        {
          icon: Code2,
          title: "Phone Screen",
          description: "45-60 minute technical interview with a Google engineer, involving coding and technical discussion."
        },
        {
          icon: Brain,
          title: "Virtual/Onsite Interviews",
          description: "4-5 rounds including coding, system design, and behavioral interviews. Each round is typically 45 minutes."
        },
        {
          icon: CheckCircle2,
          title: "Team Matching",
          description: "Discussions with potential teams to find the best fit for your skills and interests."
        }
      ],
      additionalInfo: "Google's interviews focus heavily on algorithmic problem-solving. Candidates are evaluated on code quality, optimization, and ability to handle edge cases. System design rounds are particularly important for senior roles."
    },
    {
      name: "Microsoft",
      logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
      description: "Microsoft's recruitment process emphasizes both technical excellence and leadership qualities. The company looks for candidates who can drive innovation and demonstrate growth potential.",
      averageTimeline: "3-6 weeks",
      eligibility: [
        "B.Tech/M.Tech in Computer Science or related fields",
        "Strong programming fundamentals",
        "Knowledge of operating systems and computer architecture",
        "Excellent problem-solving skills",
        "Minimum 70% or 7.0 CGPA throughout academics"
      ],
      steps: [
        {
          icon: Code2,
          title: "Online Coding Round",
          description: "Multiple coding questions focusing on algorithms and data structures. Usually includes multiple choice questions on technical concepts."
        },
        {
          icon: MessagesSquare,
          title: "Technical Phone Screen",
          description: "Initial technical discussion and coding exercise with a Microsoft engineer."
        },
        {
          icon: Users2,
          title: "Virtual/Onsite Interviews",
          description: "3-4 rounds of technical interviews covering coding, design, and behavioral aspects. Each round is approximately 1 hour."
        },
        {
          icon: Briefcase,
          title: "HR Discussion",
          description: "Final round discussing offer details, team placement, and other logistics."
        }
      ],
      additionalInfo: "Microsoft's interviews often include questions about real-world problems and how you would solve them. The company values creativity and practical problem-solving abilities."
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      description: "Amazon's hiring process is structured around their leadership principles and technical expertise. The company focuses on scalable system design and operational excellence.",
      averageTimeline: "4-7 weeks",
      eligibility: [
        "Bachelor's/Master's in Computer Science or equivalent",
        "Strong understanding of data structures and algorithms",
        "Experience with distributed systems (for senior roles)",
        "Problem-solving and analytical abilities",
        "Minimum 60% or 6.0 CGPA throughout academics"
      ],
      steps: [
        {
          icon: Code2,
          title: "Online Assessment",
          description: "Two coding challenges and a work simulation assessment. Includes debugging and coding questions."
        },
        {
          icon: Brain,
          title: "Technical Phone Screen",
          description: "1-hour technical interview focusing on coding and Amazon's leadership principles."
        },
        {
          icon: Users2,
          title: "Virtual/Onsite Interviews",
          description: "4-5 rounds including system design, coding, and behavioral questions based on leadership principles."
        },
        {
          icon: Building2,
          title: "Bar Raiser Round",
          description: "Special interview round with an experienced interviewer to ensure hiring standards."
        }
      ],
      additionalInfo: "Amazon strongly emphasizes their leadership principles throughout the interview process. Candidates should prepare examples demonstrating these principles from their experience."
    },
    {
      name: "Flipkart",
      logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png",
      description: "Flipkart's recruitment process focuses on practical problem-solving abilities and system design skills. The company values innovation and scalability in their technical solutions.",
      averageTimeline: "3-5 weeks",
      eligibility: [
        "B.Tech/M.Tech in Computer Science or related fields",
        "Strong coding skills in any programming language",
        "Knowledge of e-commerce domain (preferred)",
        "Good understanding of scalable systems",
        "Minimum 60% or 6.0 CGPA throughout academics"
      ],
      steps: [
        {
          icon: Code2,
          title: "Online Assessment",
          description: "Coding round with 2-3 problems focusing on data structures and algorithms. Additional MCQs on computer science fundamentals."
        },
        {
          icon: Brain,
          title: "Technical Rounds",
          description: "2-3 technical interviews covering DSA, system design, and problem-solving scenarios."
        },
        {
          icon: Users2,
          title: "Machine Coding Round",
          description: "Live coding round where candidates implement a real-world application with proper design patterns."
        },
        {
          icon: Briefcase,
          title: "HR and Managerial Round",
          description: "Discussion about experience, cultural fit, and role expectations."
        }
      ],
      additionalInfo: "Flipkart's interviews often include questions about e-commerce specific problems and scaling challenges. System design rounds focus on real scenarios faced by the company."
    },
    {
      name: "Infosys",
      logo: "https://www.infosys.com/content/dam/infosys-web/en/global-resource/media-resources/infosys-logo.jpg",
      description: "Infosys follows a comprehensive recruitment process focusing on both technical and aptitude skills. The company emphasizes learning ability and adaptability.",
      averageTimeline: "2-4 weeks",
      eligibility: [
        "Bachelor's degree in any engineering discipline",
        "Strong analytical and logical reasoning skills",
        "Basic programming knowledge",
        "Good communication skills",
        "Minimum 60% or 6.0 CGPA throughout academics"
      ],
      steps: [
        {
          icon: Brain,
          title: "Online Test",
          description: "Aptitude, reasoning, and technical assessment including basic programming questions."
        },
        {
          icon: Code2,
          title: "Technical Round",
          description: "Interview covering programming fundamentals, CS concepts, and project discussion."
        },
        {
          icon: MessagesSquare,
          title: "HR Interview",
          description: "Discussion about career goals, company knowledge, and cultural fit."
        },
        {
          icon: CheckCircle2,
          title: "Training Assignment",
          description: "Selected candidates undergo training program before final placement."
        }
      ],
      additionalInfo: "Infosys is known for its extensive training program (Infosys Global Education Center). Selected candidates undergo comprehensive training before joining their respective projects."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tech Company Recruitment Processes</h1>
          <p className="text-xl text-gray-600">Comprehensive guide to recruitment processes at top tech companies</p>
        </div>

        <div className="space-y-6">
          {companies.map((company) => (
            <CompanyCard
              key={company.name}
              company={company}
              isOpen={openCompany === company.name}
              onToggle={() => setOpenCompany(openCompany === company.name ? null : company.name)}
            />
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">General Tips for Tech Interviews</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              Practice data structures and algorithms regularly on platforms like LeetCode or HackerRank
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              Study system design principles and common architectural patterns
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              Prepare examples of your past projects and challenges you've overcome
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              Research the company's values and culture before the interview
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              Practice mock interviews with peers or online platforms
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;