// import { useParams, Link } from 'react-router-dom';
// import { Mail, Linkedin, Github as GitHub, Globe, MapPin, Briefcase, GraduationCap } from 'lucide-react';
// import { Senior, seniorsData } from './seniors-data';

// const SeniorProfilePage = () => {
//   const { seniorId } = useParams<{ seniorId: string }>();
//   const senior = seniorsData.find(s => s.id === Number(seniorId));

//   if (!senior) return (
//     <div className="min-h-screen bg-[#0a0a1a] flex items-center justify-center text-[#00ffff]">
//       Senior not found - <Link to="/" className="ml-2 text-[#ff00ff] hover:underline">Back to Seniors</Link>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-[#0a0a1a] flex flex-col">
//       <main className="flex-grow container mx-auto px-4 py-8">
//         <div className="bg-[#0f0f1f] rounded-lg shadow-[0_0_20px_rgba(0,255,255,0.1)] overflow-hidden border border-[#00ffff33]">
//           <div className="bg-gradient-to-r from-[#00ffff] to-[#ff00ff] h-48 relative">
//             <div className="absolute -bottom-16 left-8">
//               <img 
//                 src={senior.image} 
//                 alt={senior.name} 
//                 className="w-32 h-32 rounded-full border-4 border-[#00ffff] object-cover shadow-[0_0_15px_rgba(0,255,255,0.3)]"
//               />
//             </div>
//           </div>
          
//           <div className="pt-20 pb-8 px-8">
//             <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
//               <div>
//                 <h1 className="text-3xl font-bold text-[#00ffff]">{senior.name}</h1>
//                 <p className="text-[#d0d0f0] flex items-center mt-1">
//                   <Briefcase size={18} className="mr-2 text-[#ff00ff]" />
//                   {senior.role} at {senior.company}
//                 </p>
//                 {senior.campus && (
//                   <p className="text-[#d0d0f0] flex items-center mt-1">
//                     <MapPin size={18} className="mr-2 text-[#ff00ff]" />
//                     {senior.campus} Campus • {senior.branch}
//                   </p>
//                 )}
//                 <p className="text-[#d0d0f0] flex items-center mt-1">
//                   <GraduationCap size={18} className="mr-2 text-[#ff00ff]" />
//                   Batch of {senior.batch} • Package: {senior.package}
//                 </p>
//               </div>
              
//               <div className="mt-4 md:mt-0 flex space-x-3">
//                 <a 
//                   href={senior.linkedin} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="p-2 bg-[#1a1a2f] rounded-full hover:bg-[#00ffff22] transition-colors border border-[#00ffff33]"
//                   title="LinkedIn"
//                 >
//                   <Linkedin size={20} className="text-[#00ffff]" />
//                 </a>
//                 {senior.github && (
//                   <a 
//                     href={senior.github} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="p-2 bg-[#1a1a2f] rounded-full hover:bg-[#00ffff22] transition-colors border border-[#00ffff33]"
//                     title="GitHub"
//                   >
//                     <GitHub size={20} className="text-[#00ffff]" />
//                   </a>
//                 )}
//                 {senior.website && (
//                   <a 
//                     href={senior.website} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="p-2 bg-[#1a1a2f] rounded-full hover:bg-[#00ffff22] transition-colors border border-[#00ffff33]"
//                     title="Website"
//                   >
//                     <Globe size={20} className="text-[#00ffff]" />
//                   </a>
//                 )}
//               </div>
//             </div>

//             {senior.bio && (
//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold mb-2 text-[#00ffff]">About</h3>
//                 <p className="text-[#d0d0f0]">{senior.bio}</p>
//               </div>
//             )}

//             <div className="mb-6">
//               <h3 className="text-lg font-semibold mb-2 text-[#00ffff]">Skill Matrix</h3>
//               <div className="flex flex-wrap gap-2">
//                 {senior.skills.map(skill => (
//                   <span 
//                     key={skill} 
//                     className="px-3 py-1 bg-[#00ffff22] text-[#00ffff] text-sm rounded-full border border-[#00ffff33]"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {senior.projects && senior.projects.length > 0 && (
//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold mb-2 text-[#00ffff]">College Projects</h3>
//                 <div className="space-y-4">
//                   {senior.projects.map((project, index) => (
//                     <div 
//                       key={index}
//                       className="p-4 bg-[#1a1a2f] rounded-lg border border-[#00ffff33]"
//                     >
//                       <p className="text-[#d0d0f0]">• {project}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {senior.internships && senior.internships.length > 0 && (
//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold mb-2 text-[#00ffff]">Internships</h3>
//                 <div className="space-y-4">
//                   {senior.internships.map((internship, index) => (
//                     <div 
//                       key={index}
//                       className="p-4 bg-[#1a1a2f] rounded-lg border border-[#00ffff33]"
//                     >
//                       <p className="text-[#d0d0f0]">• {internship}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {senior.collegeAchievements && senior.collegeAchievements.length > 0 && (
//               <div className="mb-6">
//                 <h3 className="text-lg font-semibold mb-2 text-[#00ffff]">Achievements</h3>
//                 <div className="space-y-4">
//                   {senior.collegeAchievements.map((achievement, index) => (
//                     <div 
//                       key={index}
//                       className="p-4 bg-[#1a1a2f] rounded-lg border border-[#00ffff33]"
//                     >
//                       <p className="text-[#d0d0f0]">• {achievement}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </main>

//       <style jsx global>{`
//         .neon-text {
//           text-shadow: 0 0 10px rgba(0, 255, 255, 0.4);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SeniorProfilePage;


//good 
// import { useParams, Link } from 'react-router-dom';
// import { Mail, Linkedin, Github, Globe, MapPin, Briefcase, GraduationCap } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { Senior, seniorsData } from './seniors-data';

// const SeniorProfilePage = () => {
//   const { seniorId } = useParams<{ seniorId: string }>();
//   const senior = seniorsData.find(s => s.id === Number(seniorId));

//   if (!senior) return (
//     <div className="cyber-container">
//       <style>{`
//         @keyframes glitch {
//           0% { clip-path: inset(10% 0 89% 0); }
//           20% { clip-path: inset(5% 0 85% 0); }
//           100% { clip-path: inset(10% 0 89% 0); }
//         }
//       `}</style>
//       <div className="cyber-error">
//         <span className="glitch" data-text="PROFILE CORRUPTED">PROFILE CORRUPTED</span>
//         <Link to="/seniors" className="neon-pulse">
//           <span>↩ INITIATE RETURN PROTOCOL</span>
//         </Link>
//       </div>
//     </div>
//   );

//   return (
//     <div className="cyber-main">
//       <style>{`
//         :root {
//           --neon-blue: #00f3ff;
//           --neon-pink: #ff00ff;
//           --cyber-bg: #000a1a;
//           --cyber-border: #00f3ff33;
//         }

//         .cyber-main {
//           min-height: 100vh;
//           background: var(--cyber-bg);
//           color: #fff;
//           font-family: 'Segment7', sans-serif;
//           position: relative;
//           overflow-x: hidden;
//         }

//         .cyber-header {
//           background: linear-gradient(45deg, #000428 0%, #004e92 100%);
//           padding: 2rem;
//           border-bottom: 3px solid var(--neon-blue);
//           position: relative;
//         }

//         .cyber-grid {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           background-image: 
//             linear-gradient(var(--cyber-border) 1px, transparent 1px),
//             linear-gradient(90deg, var(--cyber-border) 1px, transparent 1px);
//           background-size: 20px 20px;
//           opacity: 0.3;
//         }

//         .cyber-avatar {
//           width: 200px;
//           height: 200px;
//           border: 3px solid var(--neon-blue);
//           box-shadow: 0 0 30px var(--neon-blue);
//           position: relative;
//           overflow: hidden;
//         }

//         .cyber-avatar::before {
//           content: '';
//           position: absolute;
//           width: 200%;
//           height: 200%;
//           background: linear-gradient(
//             45deg,
//             transparent 45%,
//             var(--neon-blue) 50%,
//             transparent 55%
//           );
//           animation: scan 6s linear infinite;
//         }

//         @keyframes scan {
//           0% { transform: translateY(-100%); }
//           100% { transform: translateY(100%); }
//         }

//         .neon-link {
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//           padding: 1rem;
//           border: 1px solid var(--neon-blue);
//           transition: all 0.3s;
//         }

//         .neon-link:hover {
//           background: var(--neon-blue);
//           color: #000;
//           box-shadow: 0 0 20px var(--neon-blue);
//         }

//         .cyber-section {
//           background: #001122;
//           border: 2px solid var(--neon-blue);
//           padding: 2rem;
//           margin: 2rem;
//           position: relative;
//         }

//         .cyber-section::before {
//           content: '▶';
//           position: absolute;
//           left: -15px;
//           top: -15px;
//           color: var(--neon-pink);
//           font-size: 24px;
//           text-shadow: 0 0 10px var(--neon-pink);
//         }

//         .skill-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
//           gap: 1rem;
//         }

//         .skill-item {
//           background: #002244;
//           padding: 1rem;
//           border: 1px solid var(--neon-blue);
//           text-align: center;
//           position: relative;
//           overflow: hidden;
//         }

//         .skill-item::before {
//           content: '';
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(
//             45deg,
//             transparent 45%,
//             var(--neon-blue) 50%,
//             transparent 55%
//           );
//           animation: scan 3s linear infinite;
//         }

//         .neon-pulse {
//           animation: pulse 2s infinite;
//         }

//         @keyframes pulse {
//           0% { opacity: 1; }
//           50% { opacity: 0.5; }
//           100% { opacity: 1; }
//         }
//       `}</style>

//       {/* Header Section */}
//       <header className="cyber-header">
//         <div className="cyber-grid" />
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="flex flex-col md:flex-row items-center gap-8"
//         >
//           <div className="cyber-avatar">
//             <img
//               src={senior.image}
//               alt={senior.name}
//               className="w-full h-full object-cover"
//             />
//           </div>
          
//           <div>
//             <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-pink">
//               {senior.name}
//             </h1>
//             <div className="flex items-center gap-4 mt-4">
//               <Briefcase className="text-neon-blue" />
//               <span className="text-xl">{senior.role} @ {senior.company}</span>
//               <span className="text-neon-pink text-2xl">{senior.package}</span>
//             </div>
//             <div className="flex gap-4 mt-4">
//               <span className="cyber-badge">{senior.batch}</span>
//               <span className="cyber-badge">{senior.campus}</span>
//               <span className="cyber-badge">{senior.branch}</span>
//             </div>
//           </div>
//         </motion.div>
//       </header>

//       {/* Main Content */}
//       <main className="cyber-content">
//         {/* Social Links */}
//         <div className="cyber-section">
//           <h2 className="text-2xl text-neon-blue mb-4">CONNECTION PROTOCOLS</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {senior.email && (
//               <a href={`mailto:${senior.email}`} className="neon-link">
//                 <Mail size={24} />
//                 <span>SECURE MAIL CHANNEL</span>
//               </a>
//             )}
//             <a href={senior.linkedin} className="neon-link">
//               <Linkedin size={24} />
//               <span>LINKED PROFILE</span>
//             </a>
//             {senior.github && (
//               <a href={senior.github} className="neon-link">
//                 <Github size={24} />
//                 <span>CODE VAULT</span>
//               </a>
//             )}
//             {senior.website && (
//               <a href={senior.website} className="neon-link">
//                 <Globe size={24} />
//                 <span>NET NODE</span>
//               </a>
//             )}
//           </div>
//         </div>

//         {/* Skills Section */}
//         <div className="cyber-section">
//           <h2 className="text-2xl text-neon-blue mb-4">SKILL MATRIX</h2>
//           <div className="skill-grid">
//             {senior.skills.map((skill, index) => (
//               <div key={index} className="skill-item">
//                 <span className="relative z-10">{skill}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bio Section */}
//         {senior.bio && (
//           <div className="cyber-section">
//             <h2 className="text-2xl text-neon-blue mb-4">PROFILE DECRYPTION</h2>
//             <p className="text-cyber-gray leading-relaxed">{senior.bio}</p>
//           </div>
//         )}

//         {/* Projects Section */}
//         {senior.projects?.length > 0 && (
//           <div className="cyber-section">
//             <h2 className="text-2xl text-neon-blue mb-4">MISSION ARCHIVES</h2>
//             <ul className="cyber-list">
//               {senior.projects.map((project, index) => (
//                 <li key={index} className="flex items-center gap-2 mb-2">
//                   <span className="text-neon-pink">⟫</span>
//                   <span>{project}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </main>

//       {/* Footer */}
//       <footer className="cyber-footer">
//         <Link to="/seniors" className="neon-pulse">
//           <span>« RETURN TO ARCHIVES</span>
//         </Link>
//       </footer>
//     </div>
//   );
// };

// export default SeniorProfilePage;


import { useParams, Link } from 'react-router-dom';
import { Mail, Linkedin, Github, Globe, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { Senior, seniorsData } from './seniors-data';

const SeniorProfilePage = () => {
  const { seniorId } = useParams<{ seniorId: string }>();
  const senior = seniorsData.find(s => s.id === Number(seniorId));

  if (!senior) return (
    <div className="cyber-container">
      <style>{`
        @keyframes glitch {
          0% { clip-path: inset(10% 0 89% 0); }
          20% { clip-path: inset(5% 0 85% 0); }
          100% { clip-path: inset(10% 0 89% 0); }
        }
      `}</style>
      <div className="cyber-error">
        <span className="glitch" data-text="PROFILE CORRUPTED">PROFILE CORRUPTED</span>
        <Link to="/seniors" className="neon-pulse">
          <span>↩ INITIATE RETURN PROTOCOL</span>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="cyber-main">
      <style>{`
        :root {
          --neon-blue: #00f3ff;
          --neon-pink: #ff00ff;
          --cyber-bg: #000a1a;
          --cyber-border: #00f3ff33;
        }

        .cyber-main {
          min-height: 100vh;
          background: var(--cyber-bg);
          color: #fff;
          font-family: 'Segment7', sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        .cyber-header {
          background: linear-gradient(45deg, #000428 0%, #004e92 100%);
          padding: 2rem;
          border-bottom: 3px solid var(--neon-blue);
          position: relative;
        }

        .cyber-grid {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(var(--cyber-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--cyber-border) 1px, transparent 1px);
          background-size: 20px 20px;
          opacity: 0.3;
        }

        .cyber-avatar {
          width: 200px;
          height: 200px;
          border: 3px solid var(--neon-blue);
          box-shadow: 0 0 30px var(--neon-blue);
          position: relative;
          overflow: hidden;
          border-radius: 50%; /* Circular profile */
        }

        .cyber-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        /* Glitch "light flash" effect for profile */
        .cyber-avatar::before {
          content: '';
          position: absolute;
          top: 0;
          left: 100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(225deg, transparent, rgba(255,255,255,0.3), transparent);
          transform: skewX(20deg);
          animation: shine 2s infinite;
        }

        @keyframes shine {
          0% {
            left: 100%;
          }
          100% {
            left: -100%;
          }
        }

        .neon-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.75rem;
          border: 1px solid var(--neon-blue);
          transition: all 0.3s;
          font-size: 0.875rem;
        }
        .neon-link:hover {
          background: var(--neon-blue);
          color: #000;
          box-shadow: 0 0 20px var(--neon-blue);
        }

        .cyber-section {
          background: #001122;
          border: 2px solid var(--neon-blue);
          padding: 2rem;
          margin: 2rem;
          position: relative;
        }
        .cyber-section::before {
          content: '▶';
          position: absolute;
          left: -15px;
          top: -15px;
          color: var(--neon-pink);
          font-size: 24px;
          text-shadow: 0 0 10px var(--neon-pink);
        }

        .skill-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
        }
        .skill-item {
          background: #002244;
          padding: 1rem;
          border: 1px solid var(--neon-blue);
          text-align: center;
          border-radius: 8px;
          box-shadow: 0 0 10px var(--neon-blue);
          position: relative;
        }

        .neon-pulse {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }

        .connections-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
      `}</style>

      {/* Header Section */}
      <header className="cyber-header">
        <div className="cyber-grid" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <div className="cyber-avatar">
            <img src={senior.image} alt={senior.name} />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-pink">
              {senior.name}
            </h1>
            <div className="flex items-center gap-4 mt-4">
              <Briefcase className="text-neon-blue" />
              <span className="text-xl">{senior.role} @ {senior.company}</span>
              <span className="text-neon-pink text-2xl">{senior.package}</span>
            </div>
            <div className="flex gap-4 mt-4">
              <span className="cyber-badge">{senior.batch}</span>
              {senior.campus && <span className="cyber-badge">{senior.campus}</span>}
              {senior.branch && <span className="cyber-badge">{senior.branch}</span>}
            </div>
          </div>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="cyber-content">
        {/* About Section */}
        {senior.bio && (
          <div className="cyber-section">
            <h2 className="text-2xl text-neon-blue mb-4">PROFILE DECRYPTION</h2>
            <p className="text-cyber-gray leading-relaxed">{senior.bio}</p>
          </div>
        )}

        {/* Skills Section */}
        <div className="cyber-section">
          <h2 className="text-2xl text-neon-blue mb-4">SKILL MATRIX</h2>
          <div className="skill-grid">
            {senior.skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <span className="relative z-10">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        {senior.projects?.length > 0 && (
          <div className="cyber-section">
            <h2 className="text-2xl text-neon-blue mb-4">MISSION ARCHIVES</h2>
            <ul className="cyber-list">
              {senior.projects.map((project, index) => (
                <li key={index} className="flex items-center gap-2 mb-2">
                  <span className="text-neon-pink">⟫</span>
                  <span>{project}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Internships Section */}
        {senior.internships?.length > 0 && (
          <div className="cyber-section">
            <h2 className="text-2xl text-neon-blue mb-4">INTERNSHIP LOGS</h2>
            <ul className="cyber-list">
              {senior.internships.map((internship, index) => (
                <li key={index} className="flex items-center gap-2 mb-2">
                  <span className="text-neon-pink">⟫</span>
                  <span>{internship}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Certifications Section */}
        {senior.certifications?.length > 0 && (
          <div className="cyber-section">
            <h2 className="text-2xl text-neon-blue mb-4">CERTIFICATIONS</h2>
            <ul className="cyber-list">
              {senior.certifications.map((cert, index) => (
                <li key={index} className="flex items-center gap-2 mb-2">
                  <span className="text-neon-pink">⟫</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* College Achievements Section */}
        {senior.collegeAchievements?.length > 0 && (
          <div className="cyber-section">
            <h2 className="text-2xl text-neon-blue mb-4">COLLEGE ACHIEVEMENTS</h2>
            <ul className="cyber-list">
              {senior.collegeAchievements.map((achievement, index) => (
                <li key={index} className="flex items-center gap-2 mb-2">
                  <span className="text-neon-pink">⟫</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Connections Section */}
        <div className="cyber-section">
          <h2 className="text-2xl text-neon-blue mb-4">CONNECTION PROTOCOLS</h2>
          <div className="connections-container">
            {senior.email && (
              <a href={`mailto:${senior.email}`} className="neon-link">
                <Mail size={24} />
                <span>MAIL</span>
              </a>
            )}
            <a href={senior.linkedin} className="neon-link">
              <Linkedin size={24} />
              <span>LINKEDIN</span>
            </a>
            {senior.github && (
              <a href={senior.github} className="neon-link">
                <Github size={24} />
                <span>GITHUB</span>
              </a>
            )}
            {senior.website && (
              <a href={senior.website} className="neon-link">
                <Globe size={24} />
                <span>WEBSITE</span>
              </a>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="cyber-footer">
        <Link to="/seniors" className="neon-pulse">
          <span>« RETURN TO ARCHIVES</span>
        </Link>
      </footer>
    </div>
  );
};

export default SeniorProfilePage;
