

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Building2, Search, Code2, Users2, Brain, MessagesSquare, CheckCircle2, Briefcase } from 'lucide-react';

// Interfaces
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

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-gray-500 hover:text-gray-700"
    onClick={onClick}
  >
    &gt;
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-3xl text-gray-500 hover:text-gray-700"
    onClick={onClick}
  >
    &lt;
  </div>
);

// CompanyCarousel Component
function CompanyCarousel({ companies, onSelectCompany }) {
  const settings = {
    dots: false,              // Remove dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,      // Faster speed (1.5 seconds)
    pauseOnHover: true,
    arrows: true,             // Enable arrows
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    rtl: false,               // Left-to-right scrolling
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-4xl mx-auto mb-8">
      <Slider {...settings}>
        {companies.map((company) => (
          <div
            key={company.name}
            className="flex flex-col items-center justify-center h-64 cursor-pointer"
            onClick={() => onSelectCompany(company)}
          >
            <img src={company.logo} alt={company.name} className="w-32 h-32 object-contain" />
            <p className="text-center mt-4 font-medium text-gray-800 text-2xl">{company.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

// CompanyDetails Component
function CompanyDetails({ company }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <img src={company.logo} alt={`${company.name} logo`} className="w-12 h-12 object-contain" />
        <h2 className="text-2xl font-semibold text-gray-900">{company.name}</h2>
      </div>
      <p className="text-gray-600 mb-4">{company.description}</p>
      <div className="bg-indigo-50 p-4 rounded-lg">
        <p className="text-indigo-700 font-medium">Average Timeline: {company.averageTimeline}</p>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Eligibility Criteria:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {company.eligibility.map((criteria, index) => (
            <li key={index}>{criteria}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
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
      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Additional Information:</h3>
        <p className="text-gray-600">{company.additionalInfo}</p>
      </div>
    </div>
  );
}

// App Component
function App() {
  const companies = [
    {
      "name": "Google",
      "logo": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
      "description": "Google's hiring process is known for its thoroughness and focus on technical skills.",
      "averageTimeline": "4-8 weeks",
      "eligibility": ["Bachelor's/Master's in CS", "Strong coding skills"],
      "steps": [
        { "icon": "Search", "title": "Online Assessment", "description": "2-3 coding problems." },
        { "icon": "Code2", "title": "Phone Screen", "description": "45-60 min technical interview." },
        { "icon": "Brain", "title": "Onsite Interviews", "description": "4-5 rounds of coding and design." },
        { "icon": "CheckCircle2", "title": "Team Matching", "description": "Find your team fit." }
      ],
      "additionalInfo": "Focus on algorithms and code quality."
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
      "name": "Tesla",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Tesla_logo.png",
      "description": "Tesla is an electric vehicle and clean energy company.",
      "averageTimeline": "2-4 weeks",
      "eligibility": ["Bachelor's/Master's in Engineering", "Passion for sustainability"],
      "steps": [
        { "icon": "Search", "title": "Resume Screening", "description": "Review of qualifications." },
        { "icon": "Code2", "title": "Technical Assessment", "description": "Solve engineering problems." },
        { "icon": "Brain", "title": "Innovation Challenge", "description": "Present a creative solution." },
        { "icon": "CheckCircle2", "title": "Final Interview", "description": "Meet with Elon Musk." }
      ],
      "additionalInfo": "Tesla looks for innovators and risk-takers."
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
      "name": "Intel",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg",
      "description": "Intel is a multinational corporation and technology company known for its semiconductor chips.",
      "averageTimeline": "4-7 weeks",
      "eligibility": ["Bachelor's/Master's in Engineering", "Experience with hardware design"],
      "steps": [
        { "icon": "Search", "title": "Application", "description": "Submit resume and cover letter." },
        { "icon": "Code2", "title": "Technical Interview", "description": "Discuss hardware concepts." },
        { "icon": "Brain", "title": "Design Challenge", "description": "Solve a hardware design problem." },
        { "icon": "CheckCircle2", "title": "Final Interview", "description": "Meet with the team." }
      ],
      "additionalInfo": "Intel values innovation and technical excellence."
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
      "name": "Dropbox",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/7/73/Dropbox_logo.svg",
      "description": "Dropbox is a file hosting service offering cloud storage and synchronization.",
      "averageTimeline": "3-5 weeks",
      "eligibility": ["Bachelor's/Master's in CS", "Experience with cloud storage"],
      "steps": [
        { "icon": "Search", "title": "Application", "description": "Submit resume and cover letter." },
        { "icon": "Code2", "title": "Technical Interview", "description": "Discuss file systems." },
        { "icon": "Brain", "title": "System Design", "description": "Design a cloud storage solution." },
        { "icon": "CheckCircle2", "title": "Final Interview", "description": "Meet with the team." }
      ],
      "additionalInfo": "Dropbox values simplicity and user experience."
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
  ];

  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tech Company Recruitment Processes</h1>
          <p className="text-xl text-gray-600">Explore recruitment details for top tech companies</p>
        </div>
        <CompanyCarousel companies={companies} onSelectCompany={setSelectedCompany} />
        {selectedCompany && <CompanyDetails company={selectedCompany} />}
      </div>
    </div>
  );
}

export default App;