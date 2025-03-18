// import React from 'react';
// import { BookOpen, Code2, FileText, GraduationCap, Video, Map, Briefcase, Brain } from 'lucide-react';

// function ResourceCard({ icon: Icon, title, description, links }: {
//   icon: React.ElementType;
//   title: string;
//   description: string;
//   links: Array<{ name: string; url: string }>;
// }) {
//   return (
// //     <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
// //       <div className="flex items-center gap-3 mb-4">
// //         <Icon className="w-6 h-6 text-indigo-600" />
// //         <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
// //       </div>
// //       <p className="text-gray-600 mb-4">{description}</p>
// //       <ul className="space-y-2">
// //         {links.map((link, index) => (
// //           <li key={index}>
// //             <a
// //               href={link.url}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="text-indigo-600 hover:text-indigo-800 hover:underline flex items-center gap-2"
// //             >
// //               → {link.name}
// //             </a>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }
// <div className="flip-card min-h-[340px]"> {/* Increased min-height */}
//       <div className="flip-card-inner">
//         {/* Front Side */}
//         <div className="flip-card-front bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 shadow-md hover:shadow-lg">
//           <div className="flex flex-col items-center justify-center h-full text-center">
//             <div className="bg-indigo-100/80 text-indigo-600 p-4 rounded-2xl mb-6">
//               <Icon className="w-8 h-8" />
//             </div>
//             <h2 className="text-2xl font-bold text-gray-800 px-4">{title}</h2>
//           </div>
//         </div>

//         {/* Back Side */}
//         <div className="flip-card-back bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl p-8 shadow-md text-white">
//           <div className="flex flex-col h-full">
//             <div className="bg-white/10 p-4 rounded-2xl mb-6 w-fit mx-auto">
//               <Icon className="w-8 h-8" />
//             </div>
//             <h3 className="text-xl font-bold mb-4 text-center px-2">{title}</h3>
//             <p className="text-gray-100/90 text-center mb-6 line-clamp-3">{description}</p>
//             <ul className="space-y-3 mt-auto">
//               {links.map((link, index) => (
//                 <li key={index}>
//                   <a
//                     href={link.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-indigo-100 hover:text-white hover:underline flex items-center gap-2 transition-colors text-sm"
//                   >
//                     → <span className="truncate">{link.name}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { BookOpen, Code2, FileText, GraduationCap, Video, Map, Briefcase, Brain } from 'lucide-react';

function ResourceCard({ icon: Icon, title, description, links }: {
  icon: React.ElementType;
  title: string;
  description: string;
  links: Array<{ name: string; url: string }>;
}) {
  return (
    <div className="flip-card min-h-[340px] w-full">
      <div className="flip-card-inner">
        {/* Front Side - NFT Style */}
        <div className="flip-card-front bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all">
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            <div className="bg-cyan-400/10 p-4 rounded-full mb-4">
              <Icon className="w-8 h-8 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-bold text-white text-center px-4">{title}</h2>
            <p className="text-gray-400 text-center text-sm line-clamp-3">{description}</p>
            <div className="w-full pt-4 mt-auto">
              <hr className="border-gray-700 mb-4" />
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-lg">◘</span>
                  <p className="text-gray-300">Resources</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg text-cyan-400">◷</span>
                  <p className="text-gray-300">{links.length} links</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side - Links */}
        <div className="flip-card-back bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-xl text-white">
          <div className="flex flex-col h-full">
            <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
            <ul className="space-y-3 flex-1">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3 rounded-lg bg-gray-800 hover:bg-cyan-400/10 transition-all"
                  >
                    <span className="text-gray-400 group-hover:text-cyan-400 truncate">
                      {link.name}
                    </span>
                    <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-4 mt-auto">
              <hr className="border-gray-700 mb-3" />
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">ⓘ</span>
                  <p>Verified Resources</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Keep the App component and style block the same as in your original code






function App() {
  const resources = [
    {
      icon: Code2,
      title: "Data Structures & Algorithms",
      description: "Master DSA with these carefully curated resources",
      links: [
        { name: "LeetCode - Problem Solving Platform", url: "https://leetcode.com" },
        { name: "GeeksforGeeks - DSA Course", url: "https://www.geeksforgeeks.org/data-structures" },
        { name: "Blind 75 LeetCode Questions", url: "https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions" },
        { name: "AlgoExpert - Structured Learning", url: "https://www.algoexpert.io" }
      ]
    },
    {
      icon: BookOpen,
      title: "Coding Practice",
      description: "Improve your coding skills with these platforms",
      links: [
        { name: "HackerRank - Practice Coding", url: "https://www.hackerrank.com" },
        { name: "CodeForces - Competitive Programming", url: "https://codeforces.com" },
        { name: "CodeChef - Programming Contests", url: "https://www.codechef.com" },
        { name: "Project Euler - Mathematical Problems", url: "https://projecteuler.net" }
      ]
    },
    {
      icon: FileText,
      title: "Resume Building",
      description: "Create impressive resumes and portfolios",
      links: [
        { name: "Resume.io - Professional Templates", url: "https://resume.io" },
        { name: "Overleaf - LaTeX Resume Templates", url: "https://www.overleaf.com/gallery/tagged/cv" },
        { name: "GitHub Resume Generator", url: "https://github.com/resume/resume.github.com" },
        { name: "Canva Resume Builder", url: "https://www.canva.com/resumes" }
      ]
    },
    {
      icon: GraduationCap,
      title: "Placement Preparation",
      description: "Resources for interview preparation",
      links: [
        { name: "InterviewBit - Interview Preparation", url: "https://www.interviewbit.com" },
        { name: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
        { name: "Tech Interview Handbook", url: "https://www.techinterviewhandbook.org" },
        { name: "Pramp - Mock Interviews", url: "https://www.pramp.com" }
      ]
    },
    {
      icon: Video,
      title: "Educational Videos",
      description: "Video tutorials and courses",
      links: [
        { name: "freeCodeCamp - Free Courses", url: "https://www.freecodecamp.org" },
        { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu" },
        { name: "Coursera - Online Courses", url: "https://www.coursera.org" },
        { name: "CS50 - Harvard's CS Courses", url: "https://cs50.harvard.edu/x" }
      ]
    },
    {
      icon: Map,
      title: "Learning Roadmaps",
      description: "Career paths and learning guides",
      links: [
        { name: "roadmap.sh - Developer Roadmaps", url: "https://roadmap.sh" },
        { name: "Web Developer Roadmap", url: "https://github.com/kamranahmedse/developer-roadmap" },
        { name: "OSSU Computer Science", url: "https://github.com/ossu/computer-science" },
        { name: "AI Expert Roadmap", url: "https://github.com/AMAI-GmbH/AI-Expert-Roadmap" }
      ]
    },
    {
      icon: Briefcase,
      title: "Domain Specific Resources",
      description: "Resources for different tech domains",
      links: [
        { name: "Web.dev - Web Development", url: "https://web.dev" },
        { name: "Flutter Dev - Mobile Development", url: "https://flutter.dev" },
        { name: "Cloud Native Computing Foundation", url: "https://www.cncf.io" },
        { name: "Machine Learning Mastery", url: "https://machinelearningmastery.com" }
      ]
    },
    {
      icon: Brain,
      title: "Additional Learning",
      description: "Extra resources for comprehensive learning",
      links: [
        { name: "GitHub Student Pack", url: "https://education.github.com/pack" },
        { name: "Stack Overflow", url: "https://stackoverflow.com" },
        { name: "Dev.to - Developer Community", url: "https://dev.to" },
        { name: "Medium - Tech Articles", url: "https://medium.com/topic/technology" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
     <style>
        {`
          .flip-card {
            perspective: 1000px;
            min-height: 340px; /* Match the min-height with component */
          }
          
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            transform-style: preserve-3d;
          }
          
          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
          
          .flip-card-front,
          .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            padding: 2rem; /* Consistent padding */
            box-sizing: border-box;
          }

          .flip-card-back {
            transform: rotateY(180deg);
            display: flex;
            flex-direction: column;
          }

          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>


      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Learning Resources</h1>
          <p className="text-xl text-gray-600">Curated collection of resources to help you excel in your tech journey</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

