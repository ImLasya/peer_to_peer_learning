



import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion, AnimatePresence } from 'framer-motion';
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

const cyberColors = {
  background: 'bg-[#0a0a1a]',
  primary: 'text-[#00ffff]',
  secondary: 'text-[#ff00ff]',
  accent: 'text-[#d0d0f0]',
  glass: 'bg-[#0f0f1fcc] backdrop-blur-lg border border-[#00ffff33] shadow-cyber-glow',
  gradient: 'bg-gradient-to-r from-[#00ffff] to-[#ff00ff]'
};

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 }
};

const cardVariants = {
  hover: { 
    y: -10,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
};

const NextArrow = ({ onClick }: { onClick: () => void }) => (
  <div className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-2 rounded-full bg-[#00ffff] hover:bg-[#00ffffdd] transition-all shadow-lg shadow-[#00ffff44]`} onClick={onClick}>
    <svg className="w-8 h-8" fill="none" stroke="#0a0a1a" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  </div>
);

const PrevArrow = ({ onClick }: { onClick: () => void }) => (
  <div className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer p-2 rounded-full bg-[#00ffff] hover:bg-[#00ffffdd] transition-all shadow-lg shadow-[#00ffff44]`} onClick={onClick}>
    <svg className="w-8 h-8" fill="none" stroke="#0a0a1a" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
    </svg>
  </div>
);

const CompanyCarousel = ({ companies, onSelectCompany }: { 
  companies: CompanyProcess[];
  onSelectCompany: (company: CompanyProcess) => void;
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className={`${cyberColors.glass} p-8 rounded-2xl max-w-6xl mx-auto mb-12 relative overflow-hidden border border-[#00ffff33]`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <Slider {...settings}>
        {companies.map((company) => (
          <motion.div key={company.name} className="px-4 focus:outline-none">
            <div
              className="group relative h-64 cursor-pointer transform transition-all hover:scale-105"
              onClick={() => onSelectCompany(company)}
            >
              <div className={`absolute inset-0 ${cyberColors.glass} rounded-xl transition-all group-hover:border-[#00ffff]`}>
                <div className="flex flex-col items-center justify-center h-full p-6">
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="w-32 h-32 object-contain mb-4 transition-transform group-hover:scale-110" 
                  />
                  <h3 className={`text-xl font-bold ${cyberColors.primary} text-center mb-2`}>
                    {company.name}
                  </h3>
                  <div className={`h-1 w-16 ${cyberColors.gradient} mb-4 rounded-full transition-all group-hover:w-24`} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

const CompanyDetails = ({ company }: { company: CompanyProcess }) => {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.3 }}
        className={`${cyberColors.glass} rounded-2xl p-8 max-w-6xl mx-auto relative overflow-hidden border border-[#00ffff33] mb-12`}
      >
        <div className="flex items-start gap-6 mb-8">
          <div className={`p-4 ${cyberColors.glass} rounded-xl`}>
            <img src={company.logo} alt={company.name} className="w-24 h-24 object-contain" />
          </div>
          <div>
            <h2 className={`text-3xl font-bold ${cyberColors.primary} mb-2`}>{company.name}</h2>
            <p className={`${cyberColors.accent} text-lg`}>{company.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`${cyberColors.glass} p-6 rounded-xl`}>
            <h3 className={`text-xl font-bold ${cyberColors.primary} mb-4 flex items-center gap-2`}>
              <Briefcase className="w-6 h-6" /> Recruitment Timeline
            </h3>
            <div className={`${cyberColors.glass} p-4 rounded-lg mb-4`}>
              <p className={`${cyberColors.secondary} font-semibold`}>
                Average Duration: <span className={`${cyberColors.primary}`}>{company.averageTimeline}</span>
              </p>
            </div>
          </div>

          <div className={`${cyberColors.glass} p-6 rounded-xl`}>
            <h3 className={`text-xl font-bold ${cyberColors.primary} mb-4 flex items-center gap-2`}>
              <CheckCircle2 className="w-6 h-6" /> Eligibility Criteria
            </h3>
            <ul className="space-y-3">
              {company.eligibility.map((criteria, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className={`${cyberColors.secondary}`}>▹</span>
                  <span className={`${cyberColors.accent}`}>{criteria}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className={`${cyberColors.glass} p-6 rounded-xl col-span-full`}>
            <h3 className={`text-xl font-bold ${cyberColors.primary} mb-6 flex items-center gap-2`}>
              <Code2 className="w-6 h-6" /> Recruitment Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {company.steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div 
                    key={index} 
                    className={`${cyberColors.glass} p-6 rounded-xl transition-all hover:border-[#00ffff]`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-lg ${cyberColors.glass}`}>
                        <Icon className={`w-6 h-6 ${cyberColors.secondary}`} />
                      </div>
                      <h4 className={`font-semibold ${cyberColors.primary}`}>{step.title}</h4>
                    </div>
                    <p className={`${cyberColors.accent} text-sm`}>{step.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className={`${cyberColors.glass} p-6 rounded-xl col-span-full`}>
            <h3 className={`text-xl font-bold ${cyberColors.primary} mb-4 flex items-center gap-2`}>
              <Brain className="w-6 h-6" /> Key Insights
            </h3>
            <p className={`${cyberColors.accent} leading-relaxed`}>{company.additionalInfo}</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const companies: CompanyProcess[] = [
  // Add your company data here (keep the same structure as before)
  // Example:
  {
              name: "Google",
              logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              description: "Google's hiring process is known for its thoroughness and focus on technical skills.",
              averageTimeline: "4-8 weeks",
              eligibility: ["Bachelor's/Master's in CS", "Strong coding skills"],
              steps: [
                { icon: Search, title: "Online Assessment", description: "2-3 coding problems." },
                { icon: Code2, title: "Phone Screen", description: "45-60 min technical interview." },
                { icon: Brain, title: "Onsite Interviews", description: "4-5 rounds of coding and design." },
                { icon: CheckCircle2, title: "Team Matching", description: "Find your team fit." }
              ],
              additionalInfo: "Focus on algorithms and code quality."
            },
            {
                    "name": "Apple",
                    "logo": "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png",
                    "description": "Apple seeks creativity and innovation in its hiring process.",
                    "averageTimeline": "4-6 weeks",
                    "eligibility": ["Bachelor's/Master's in CS", "Design skills"],
                    "steps": [
                      { "icon": "Search", "title": "Application", "description": "Submit resume and portfolio." },
                      { "icon": "Code2", "title": "Technical Interview", "description": "Coding discussion." },
                      { "icon": "Brain", "title": "Design Challenge", "description": "Showcase creativity." },
                      { "icon": "CheckCircle2", "title": "Final Interview", "description": "Fit discussion." }
                    ],
                    "additionalInfo": "Values out-of-the-box thinking."
                  },
                  {
                    "name": "Microsoft",
                    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
                    "description": "Microsoft is a leading technology company known for its software products and services.",
                    "averageTimeline": "4-6 weeks",
                    "eligibility": ["Bachelor's/Master's in CS", "Strong problem-solving skills"],
                    "steps": [
                      { "icon": "Code2", "title": "Online Coding Test", "description": "Solve coding problems on a platform." },
                      { "icon": "MessagesSquare", "title": "Technical Interview", "description": "Discuss technical concepts and solve problems." },
                      { "icon": "Users2", "title": "Behavioral Interview", "description": "Assess cultural fit and soft skills." },
                      { "icon": "Briefcase", "title": "Final Interview", "description": "Meet with senior leadership." }
                    ],
                    "additionalInfo": "Microsoft values innovation and teamwork."
                  },
                  {
                    "name": "Amazon",
                    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
                    "description": "Amazon is a global e-commerce and cloud computing company.",
                    "averageTimeline": "3-5 weeks",
                    "eligibility": ["Bachelor's/Master's in CS", "Experience with distributed systems"],
                    "steps": [
                      { "icon": "Search", "title": "Online Assessment", "description": "Coding and behavioral questions." },
                      { "icon": "Brain", "title": "Phone Interview", "description": "Technical and behavioral questions." },
                      { "icon": "Users2", "title": "Onsite Interviews", "description": "Multiple rounds with different teams." },
                      { "icon": "CheckCircle2", "title": "Offer", "description": "Receive and negotiate offer." }
                    ],
                    "additionalInfo": "Amazon emphasizes customer obsession and ownership."
                  },
                  {
                    "name": "Facebook",
                    "logo": "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
                    "description": "Facebook is a social media and technology company.",
                    "averageTimeline": "4-8 weeks",
                    "eligibility": ["Bachelor's/Master's in CS", "Strong coding skills"],
                    "steps": [
                      { "icon": "Code2", "title": "Coding Challenge", "description": "Solve problems on a whiteboard." },
                      { "icon": "Brain", "title": "System Design", "description": "Design scalable systems." },
                      { "icon": "Users2", "title": "Behavioral Interview", "description": "Discuss past experiences." },
                      { "icon": "Building2", "title": "Culture Fit", "description": "Assess alignment with company values." }
                    ],
                    "additionalInfo": "Facebook values impact and moving fast."
                  },
                  
                  {
                    "name": "Netflix",
                    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
                    "description": "Netflix is a streaming service for movies and TV shows.",
                    "averageTimeline": "3-6 weeks",
                    "eligibility": ["Bachelor's/Master's in CS", "Experience with streaming technologies"],
                    "steps": [
                      { "icon": "Code2", "title": "Coding Interview", "description": "Solve algorithmic problems." },
                      { "icon": "Brain", "title": "System Design", "description": "Design a scalable streaming system." },
                      { "icon": "Users2", "title": "Culture Interview", "description": "Assess fit with Netflix culture." },
                      { "icon": "Briefcase", "title": "Offer Discussion", "description": "Negotiate terms." }
                    ],
                    "additionalInfo": "Netflix values freedom and responsibility."
                  },
                  {
                    "name": "Adobe",
                    "logo": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
                    "description": "Adobe is a software company known for its creative and multimedia tools.",
                    "averageTimeline": "4-7 weeks",
                    "eligibility": ["Bachelor's/Master's in CS", "Experience with design software"],
                    "steps": [
                      { "icon": "Search", "title": "Portfolio Review", "description": "Submit design work." },
                      { "icon": "Code2", "title": "Technical Interview", "description": "Discuss software development." },
                      { "icon": "Brain", "title": "Design Task", "description": "Complete a design challenge." },
                      { "icon": "CheckCircle2", "title": "Final Interview", "description": "Meet with the team." }
                    ],
                    "additionalInfo": "Adobe values creativity and technical expertise."
                  },
                  {
                    "name": "Salesforce",
                    "logo": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
                    "description": "Salesforce is a cloud-based software company specializing in customer relationship management.",
                    "averageTimeline": "3-5 weeks",
                    "eligibility": ["Bachelor's/Master's in CS", "Experience with CRM systems"],
                    "steps": [
                      { "icon": "Search", "title": "Application", "description": "Submit resume and cover letter." },
                      { "icon": "MessagesSquare", "title": "Phone Screen", "description": "Initial interview with HR." },
                      { "icon": "Users2", "title": "Technical Interview", "description": "Discuss technical skills." },
                      { "icon": "Briefcase", "title": "Final Interview", "description": "Meet with hiring manager." }
                    ],
                    "additionalInfo": "Salesforce emphasizes customer success and innovation."
                  },
                  {
                    "name": "IBM",
                    "logo": "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
                    "description": "IBM is a multinational technology company known for its hardware, software, and consulting services.",
                    "averageTimeline": "4-8 weeks",
                    "eligibility": ["Bachelor's/Master's in CS", "Experience with enterprise solutions"],
                    "steps": [
                      { "icon": "Search", "title": "Online Assessment", "description": "Technical and cognitive tests." },
                      { "icon": "Code2", "title": "Technical Interview", "description": "Solve problems and discuss projects." },
                      { "icon": "Brain", "title": "Case Study", "description": "Analyze a business problem." },
                      { "icon": "CheckCircle2", "title": "Final Interview", "description": "Meet with senior leadership." }
                    ],
                    "additionalInfo": "IBM values diversity and inclusion."
                  },
                  {
                    "name": "Oracle",
                    "logo": "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
                    "description": "Oracle is a multinational computer technology corporation specializing in database software and technology.",
                    "averageTimeline": "3-6 weeks",
                    "eligibility": ["Bachelor's/Master's in CS", "Experience with databases"],
                    "steps": [
                      { "icon": "Search", "title": "Resume Screening", "description": "Review of qualifications." },
                      { "icon": "Code2", "title": "Technical Interview", "description": "Discuss database concepts." },
                      { "icon": "Brain", "title": "System Design", "description": "Design a database system." },
                      { "icon": "Users2", "title": "Behavioral Interview", "description": "Assess cultural fit." }
                    ],
                    "additionalInfo": "Oracle values technical expertise and customer focus."
                  },
                  
                  {
                    "name": "Cisco",
                    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg",
                    "description": "Cisco is a multinational technology conglomerate known for its networking hardware and software.",
                    "averageTimeline": "3-5 weeks",
                    "eligibility": ["Bachelor's/Master's in CS", "Experience with networking"],
                    "steps": [
                      { "icon": "Search", "title": "Online Assessment", "description": "Technical and networking questions." },
                      { "icon": "Code2", "title": "Technical Interview", "description": "Discuss networking concepts." },
                      { "icon": "Users2", "title": "Behavioral Interview", "description": "Assess teamwork and communication." },
                      { "icon": "Briefcase", "title": "Final Interview", "description": "Meet with hiring manager." }
                    ],
                    "additionalInfo": "Cisco values collaboration and customer success."
                  },
                  {
                    "name": "SAP",
                    "logo": "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
                    "description": "SAP is a multinational software corporation known for its enterprise software.",
                    "averageTimeline": "4-6 weeks",
                    "eligibility": ["Bachelor's/Master's in CS", "Experience with enterprise systems"],
                    "steps": [
                      { "icon": "Search", "title": "Application", "description": "Submit resume and cover letter." },
                      { "icon": "MessagesSquare", "title": "Phone Screen", "description": "Initial interview with HR." },
                      { "icon": "Code2", "title": "Technical Interview", "description": "Discuss software development." },
                      { "icon": "Brain", "title": "Case Study", "description": "Solve a business problem." }
                    ],
                    "additionalInfo": "SAP values innovation and customer focus."
                  },
                  {
                    "name": "Uber",
                    "logo": "https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg",
                    "description": "Uber is a multinational ride-hailing company offering services like ridesharing and food delivery.",
                    "averageTimeline": "2-4 weeks",
                    "eligibility": ["Bachelor's/Master's in CS", "Experience with mobile apps"],
                    "steps": [
                      { "icon": "Search", "title": "Online Assessment", "description": "Coding and system design questions." },
                      { "icon": "Code2", "title": "Technical Interview", "description": "Discuss app development." },
                      { "icon": "Brain", "title": "System Design", "description": "Design a scalable system." },
                      { "icon": "Users2", "title": "Behavioral Interview", "description": "Assess cultural fit." }
                    ],
                    "additionalInfo": "Uber values hustle and innovation."
                  },
                  {
                    "name": "Airbnb",
                    "logo": "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
                    "description": "Airbnb is an online marketplace for lodging and tourism experiences.",
                    "averageTimeline": "3-5 weeks",
                    "eligibility": ["Bachelor's/Master's in CS", "Experience with web development"],
                    "steps": [
                      { "icon": "Search", "title": "Application", "description": "Submit resume and portfolio." },
                      { "icon": "Code2", "title": "Technical Interview", "description": "Discuss web technologies." },
                      { "icon": "Brain", "title": "Design Challenge", "description": "Create a user interface." },
                      { "icon": "CheckCircle2", "title": "Final Interview", "description": "Meet with the team." }
                    ],
                    "additionalInfo": "Airbnb values creativity and user experience."
                  },
                  {
                    "name": "Spotify",
                    "logo": "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
                    "description": "Spotify is a digital music service offering millions of songs.",
                    "averageTimeline": "4-6 weeks",
                    "eligibility": ["Bachelor's/Master's in CS", "Experience with audio technologies"],
                    "steps": [
                      { "icon": "Search", "title": "Online Assessment", "description": "Coding and audio processing questions." },
                      { "icon": "Code2", "title": "Technical Interview", "description": "Discuss music streaming." },
                      { "icon": "Brain", "title": "System Design", "description": "Design a music recommendation system." },
                      { "icon": "Users2", "title": "Behavioral Interview", "description": "Assess teamwork and communication." }
                    ],
                    "additionalInfo": "Spotify values innovation and user engagement."
                  },
                  
                  {
                    "name": "Slack",
                    "logo": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
                    "description": "Slack is a business communication platform for team collaboration.",
                    "averageTimeline": "2-4 weeks",
                    "eligibility": ["Bachelor's/Master's in CS", "Experience with real-time communication"],
                    "steps": [
                      { "icon": "Search", "title": "Online Assessment", "description": "Coding and communication questions." },
                      { "icon": "Code2", "title": "Technical Interview", "description": "Discuss messaging systems." },
                      { "icon": "Brain", "title": "System Design", "description": "Design a chat application." },
                      { "icon": "Users2", "title": "Behavioral Interview", "description": "Assess cultural fit." }
                    ],
                    "additionalInfo": "Slack values collaboration and innovation."
                  },
                  {
                    "name": "Zoom",
                    "logo": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Zoom_Communications_Logo.svg",
                    "description": "Zoom is a videotelephony software for remote meetings and collaboration.",
                    "averageTimeline": "3-5 weeks",
                    "eligibility": ["Bachelor's/Master's in CS", "Experience with video conferencing"],
                    "steps": [
                      { "icon": "Search", "title": "Application", "description": "Submit resume and cover letter." },
                      { "icon": "Code2", "title": "Technical Interview", "description": "Discuss video streaming." },
                      { "icon": "Brain", "title": "System Design", "description": "Design a video conferencing system." },
                      { "icon": "CheckCircle2", "title": "Final Interview", "description": "Meet with the team." }
                    ],
                    "additionalInfo": "Zoom values reliability and user experience."
                  },
                  {
                    "name": "Pinterest",
                    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png",
                    "description": "Pinterest is a social media platform for sharing and discovering ideas.",
                    "averageTimeline": "4-6 weeks",
                    "eligibility": ["Bachelor's/Master's in CS", "Experience with social media platforms"],
                    "steps": [
                      { "icon": "Search", "title": "Online Assessment", "description": "Coding and social media questions." },
                      { "icon": "Code2", "title": "Technical Interview", "description": "Discuss image processing." },
                      { "icon": "Brain", "title": "System Design", "description": "Design a recommendation system." },
                      { "icon": "Users2", "title": "Behavioral Interview", "description": "Assess teamwork and communication." }
                    ],
                    "additionalInfo": "Pinterest values creativity and user engagement."
                  },
                  {
                    "name": "LinkedIn",
                    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg",
                    "description": "LinkedIn is a professional networking platform for career opportunities.",
                    "averageTimeline": "3-5 weeks",
                    "eligibility": ["Bachelor's/Master's in CS", "Experience with professional networking"],
                    "steps": [
                      { "icon": "Search", "title": "Application", "description": "Submit resume and cover letter." },
                      { "icon": "Code2", "title": "Technical Interview", "description": "Discuss web development." },
                      { "icon": "Brain", "title": "System Design", "description": "Design a job matching system." },
                      { "icon": "CheckCircle2", "title": "Final Interview", "description": "Meet with the team." }
                    ],
                    "additionalInfo": "LinkedIn values professional growth and networking."
                  }
  // Add other companies following the same structure
];

function App() {
  const [selectedCompany, setSelectedCompany] = useState<CompanyProcess | null>(null);
  const companyDetailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedCompany && companyDetailsRef.current) {
      companyDetailsRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [selectedCompany]);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className={`min-h-screen ${cyberColors.background} py-20 font-space-grotesk relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h1 
            className={`text-5xl font-bold mb-6 bg-gradient-to-r ${cyberColors.gradient} bg-clip-text text-transparent`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            TECH RECRUITMENT PORTAL
          </motion.h1>
          <motion.p 
            className={`text-2xl ${cyberColors.secondary} font-light`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Decoding Hiring Processes of Top Tech Giants
          </motion.p>
        </div>
        
        <CompanyCarousel 
          companies={companies} 
          onSelectCompany={(company) => setSelectedCompany(company)} 
        />
        
        <div ref={companyDetailsRef}>
          <AnimatePresence mode='wait'>
            {selectedCompany && <CompanyDetails company={selectedCompany} />}
          </AnimatePresence>
        </div>
      </div>

      <style jsx global>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .shadow-cyber-glow {
          box-shadow: 0 0 40px rgba(0, 255, 255, 0.1),
                     0 0 80px rgba(255, 0, 255, 0.05),
                     inset 0 0 20px rgba(0, 255, 255, 0.05);
        }
      `}</style>
    </motion.div>
  );
}

export default App;