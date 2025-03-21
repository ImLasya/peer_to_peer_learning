// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Briefcase, Building, GraduationCap, ExternalLink } from 'lucide-react';

// interface Senior {
//   id: number;
//   name: string;
//   company: string;
//   role: string;
//   batch: string;
//   package: string;
//   image: string;
//   skills: string[];
//   linkedin: string;
// }

// interface SeniorCardProps {
//   senior: Senior;
// }

// const SeniorCard: React.FC<SeniorCardProps> = ({ senior }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//       <div className="p-6">
//         <div className="flex items-center mb-4">
//           <img 
//             src={senior.image} 
//             alt={senior.name} 
//             className="w-16 h-16 rounded-full object-cover mr-4"
//           />
//           <div>
//             <h3 className="text-lg font-semibold">{senior.name}</h3>
//             <p className="text-gray-600 flex items-center">
//               <Briefcase size={16} className="mr-1" />
//               {senior.role}
//             </p>
//           </div>
//         </div>
        
//         <div className="space-y-2 mb-4">
//           <p className="flex items-center text-gray-700">
//             <Building size={16} className="mr-2 text-blue-600" />
//             <span className="font-medium">Company:</span>
//             <span className="ml-2">{senior.company}</span>
//           </p>
//           <p className="flex items-center text-gray-700">
//             <GraduationCap size={16} className="mr-2 text-blue-600" />
//             <span className="font-medium">Batch:</span>
//             <span className="ml-2">{senior.batch}</span>
//           </p>
//           <p className="flex items-center text-gray-700">
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-600">
//               <circle cx="12" cy="12" r="10"></circle>
//               <line x1="12" y1="8" x2="12" y2="12"></line>
//               <line x1="12" y1="16" x2="12.01" y2="16"></line>
//             </svg>
//             <span className="font-medium">Package:</span>
//             <span className="ml-2">{senior.package}</span>
//           </p>
//         </div>
        
//         <div className="mb-4">
//           <h4 className="text-sm font-medium text-gray-700 mb-2">Skills</h4>
//           <div className="flex flex-wrap gap-2">
//             {senior.skills.map((skill, index) => (
//               <span 
//                 key={index} 
//                 className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>
        
//         <div className="flex justify-between items-center">
//           <Link 
//             to={`/profile/${senior.id}`} 
//             className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
//           >
//             View Profile
//             <ExternalLink size={14} className="ml-1" />
//           </Link>
          
//           <a 
//             href={senior.linkedin} 
//             target="_blank" 
//             rel="noopener noreferrer" 
//             className="text-blue-600 hover:text-blue-800"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//             </svg>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SeniorCard;
import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Building, GraduationCap, ExternalLink } from 'lucide-react';

interface Senior {
  id: number;
  name: string;
  company: string;
  role: string;
  batch: string;
  package: string;
  image: string;
  skills: string[];
  linkedin: string;
}

interface SeniorCardProps {
  senior: Senior;
  className?: string;
}

const SeniorCard: React.FC<SeniorCardProps> = ({ senior, className }) => {
  return (
    <div className={`${className} bg-cyber-deep/70 backdrop-filter backdrop-blur-lg rounded-xl p-6 border-2 border-neon-cyan/30 hover:border-neon-magenta/50 transition-all duration-300`}>
      <div className="flex items-center mb-4">
        <img 
          src={senior.image} 
          alt={senior.name} 
          className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-neon-cyan/50"
        />
        <div>
          <h3 className="text-lg font-semibold text-neon-cyan">{senior.name}</h3>
          <p className="text-cyber-gray flex items-center">
            <Briefcase size={16} className="mr-1 text-neon-magenta" />
            {senior.role}
          </p>
        </div>
      </div>
      
      <div className="space-y-2 mb-4">
        <p className="flex items-center text-cyber-gray">
          <Building size={16} className="mr-2 text-neon-cyan" />
          <span className="font-medium">Corporation:</span>
          <span className="ml-2 text-neon-cyan">{senior.company}</span>
        </p>
        <p className="flex items-center text-cyber-gray">
          <GraduationCap size={16} className="mr-2 text-neon-cyan" />
          <span className="font-medium">Batch Code:</span>
          <span className="ml-2 text-neon-cyan">{senior.batch}</span>
        </p>
        <p className="flex items-center text-cyber-gray">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-2 text-neon-magenta">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <span className="font-medium">Package:</span>
          <span className="ml-2 text-neon-magenta">{senior.package}</span>
        </p>
      </div>
      
      <div className="mb-4">
        <h4 className="text-sm font-medium text-neon-cyan mb-2">Skill Matrix</h4>
        <div className="flex flex-wrap gap-2">
          {senior.skills.map((skill, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs border border-neon-cyan/50 rounded-full text-neon-cyan bg-cyber-deep/50"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <Link 
          to={`/profile/${senior.id}`} 
          className="text-neon-cyan hover:text-neon-magenta font-medium text-sm flex items-center"
        >
          View Profile
          <ExternalLink size={14} className="ml-1" />
        </Link>
        
        <a 
          href={senior.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-neon-magenta hover:text-neon-cyan transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default SeniorCard;