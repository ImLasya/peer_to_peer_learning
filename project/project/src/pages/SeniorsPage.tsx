


// import { useState, useEffect, useCallback } from 'react';
// import { Search, Filter, Briefcase, Building, GraduationCap, Linkedin } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { Senior } from '../../../../project 1/src/types';

// // SeniorCard Component
// const SeniorCard = ({ senior, className }: { senior: Senior; className?: string }) => {
//   return (
//     <motion.div
//       className={`${className} p-6 rounded-xl backdrop-filter backdrop-blur-lg transition-all duration-300 bg-cyber-deep/70 border-2 border-neon-cyan/30 hover:border-neon-magenta/50`}
//       whileHover={{ y: -5 }}
//     >
//       <div className="flex items-start justify-between mb-4">
//         <div className="flex items-center gap-4">
//           <img 
//             src={senior.image} 
//             alt={senior.name} 
//             className="w-12 h-12 rounded-full border-2 border-neon-cyan/50"
//           />
//           <div>
//             <h3 className="text-neon-cyan font-bold text-lg">{senior.name}</h3>
//             <p className="text-cyber-gray text-sm">{senior.role}</p>
//           </div>
//         </div>
//         <a
//           href={senior.linkedin}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-neon-magenta hover:text-neon-cyan transition-colors"
//         >
//           <Linkedin size={20} />
//         </a>
//       </div>

//       <div className="space-y-3">
//         <div className="flex justify-between text-cyber-gray">
//           <span>Corporation:</span>
//           <span className="text-neon-cyan">{senior.company}</span>
//         </div>
//         <div className="flex justify-between text-cyber-gray">
//           <span>Batch:</span>
//           <span className="text-neon-cyan">{senior.batch}</span>
//         </div>
//         <div className="flex justify-between text-cyber-gray">
//           <span>Package:</span>
//           <span className="text-neon-magenta">{senior.package}</span>
//         </div>
//       </div>

//       <div className="mt-4 pt-4 border-t border-neon-cyan/30">
//         <h4 className="text-neon-cyan text-sm mb-2">Skill Matrix:</h4>
//         <div className="flex flex-wrap gap-2">
//           {senior.skills.map((skill, index) => (
//             <span 
//               key={index}
//               className="px-3 py-1 text-xs border border-neon-cyan/50 rounded-full text-neon-cyan bg-cyber-deep/50"
//             >
//               {skill}
//             </span>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // Main Page Component
// const seniorsData: Senior[] = [
//   {
//     id: 1,
//     name: 'Priya Sharma',
//     company: 'Google',
//     role: 'Software Engineer',
//     batch: '2022',
//     package: '32 LPA',
//     image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
//     skills: ['React', 'Node.js', 'Python'],
//     linkedin: 'https://linkedin.com/in/priyasharma',
//   },
//   {
//     id: 2,
//     name: 'Rahul Verma',
//     company: 'Microsoft',
//     role: 'Product Manager',
//     batch: '2021',
//     package: '28 LPA',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
//     skills: ['Product Management', 'UX Design'],
//     linkedin: 'https://linkedin.com/in/rahulverma',
//   },
//   {
//     id: 3,
//     name: 'Ananya Patel',
//     company: 'Amazon',
//     role: 'Software Development Engineer',
//     batch: '2022',
//     package: '30 LPA',
//     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
//     skills: ['Java', 'AWS', 'Algorithms'],
//     linkedin: 'https://linkedin.com/in/ananyapatel',
//   },
//   {
//     id: 4,
//     name: 'Vikram Singh',
//     company: 'Adobe',
//     role: 'UI/UX Designer',
//     batch: '2021',
//     package: '24 LPA',
//     image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
//     skills: ['Figma', 'Adobe XD', 'UI Design'],
//     linkedin: 'https://linkedin.com/in/vikramsingh',
//   },
//   // Add other senior entries here...
// ];

// const companies = ['All', 'Google', 'Microsoft', 'Amazon', 'Adobe', 'Flipkart', 'Goldman Sachs'] as const;
// const batches = ['All', '2021', '2022', '2023'] as const;
// const roles = ['All', 'Software Engineer', 'Product Manager', 'Data Scientist', 'UI/UX Designer', 'Financial Analyst'] as const;

// type Company = typeof companies[number];
// type Batch = typeof batches[number];
// type Role = typeof roles[number];

// const SeniorsPage = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCompany, setSelectedCompany] = useState<Company>('All');
//   const [selectedBatch, setSelectedBatch] = useState<Batch>('All');
//   const [selectedRole, setSelectedRole] = useState<Role>('All');
//   const [showFilters, setShowFilters] = useState(false);
//   const [cursor, setCursor] = useState({ x: -100, y: -100, isHovering: false });

//   const handleMouseMove = useCallback((e: MouseEvent) => {
//     setCursor({
//       x: e.clientX - 10,
//       y: e.clientY - 10,
//       isHovering: Boolean((e.target as HTMLElement).closest('button, a'))
//     });
//   }, []);

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, [handleMouseMove]);

//   const filteredSeniors = seniorsData.filter(senior => {
//     const matchesSearch = senior.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//                          senior.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          senior.role.toLowerCase().includes(searchTerm.toLowerCase());
    
//     const matchesCompany = selectedCompany === 'All' || senior.company === selectedCompany;
//     const matchesBatch = selectedBatch === 'All' || senior.batch === selectedBatch;
//     const matchesRole = selectedRole === 'All' || senior.role === selectedRole;
    
//     return matchesSearch && matchesCompany && matchesBatch && matchesRole;
//   });

//   return (
//     <div className="font-space-grotesk bg-cyber-deep text-white min-h-screen">
//       <motion.div
//         className="fixed w-5 h-5 border-2 border-neon-cyan rounded-full pointer-events-none z-50"
//         style={{
//           left: cursor.x,
//           top: cursor.y,
//           scale: cursor.isHovering ? 1.8 : 1,
//           borderColor: cursor.isHovering ? 'var(--neon-magenta)' : 'var(--neon-cyan)',
//           filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.4))'
//         }}
//         transition={{ type: 'spring', stiffness: 200 }}
//       />

//       <main className="container mx-auto px-4 py-8">
//         <motion.section 
//           className="cyber-bg glass-panel rounded-xl p-8 mb-8"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="max-w-3xl">
//             <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
//               Connect with Seniors
//             </h1>
//             <p className="text-xl mb-6 text-cyber-gray">
//               Find and connect with seniors who share your career interests and aspirations.
//             </p>
//             <div className="flex items-center space-x-2 text-neon-cyan">
//               <GraduationCap size={20} />
//               <span>Over 500+ seniors to connect with</span>
//             </div>
//           </div>
//         </motion.section>

//         <section className="glass-panel rounded-lg p-6 mb-8 border border-neon-cyan/30">
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
//             <div className="relative flex-grow">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Search size={20} className="text-neon-cyan" />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Search by name, company, or role..."
//                 className="pl-10 pr-4 py-2 bg-cyber-deep border-2 border-neon-cyan/50 rounded-md w-full focus:outline-none focus:border-neon-cyan text-cyber-gray"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
            
//             <motion.button 
//               className="flex items-center gap-2 px-4 py-2 glass-panel border-2 border-neon-magenta text-neon-magenta rounded-md hover:border-neon-cyan transition-colors"
//               onClick={() => setShowFilters(!showFilters)}
//               whileHover={{ scale: 1.05 }}
//             >
//               <Filter size={18} />
//               <span>Filters</span>
//             </motion.button>
//           </div>
          
//           {showFilters && (
//             <motion.div 
//               className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-neon-cyan/30"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//             >
//               <div>
//                 <label className="block text-sm font-medium text-neon-cyan mb-1">Company</label>
//                 <div className="relative">
//                   <Building size={18} className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neon-cyan" />
//                   <select
//                     className="pl-10 pr-4 py-2 bg-cyber-deep border-2 border-neon-cyan/50 rounded-md w-full focus:outline-none focus:border-neon-cyan text-cyber-gray"
//                     value={selectedCompany}
//                     onChange={(e) => setSelectedCompany(e.target.value as Company)}
//                   >
//                     {companies.map(company => (
//                       <option key={company} value={company} className="bg-cyber-deep">{company}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-neon-cyan mb-1">Batch</label>
//                 <div className="relative">
//                   <GraduationCap size={18} className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neon-cyan" />
//                   <select
//                     className="pl-10 pr-4 py-2 bg-cyber-deep border-2 border-neon-cyan/50 rounded-md w-full focus:outline-none focus:border-neon-cyan text-cyber-gray"
//                     value={selectedBatch}
//                     onChange={(e) => setSelectedBatch(e.target.value as Batch)}
//                   >
//                     {batches.map(batch => (
//                       <option key={batch} value={batch} className="bg-cyber-deep">{batch}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-neon-cyan mb-1">Role</label>
//                 <div className="relative">
//                   <Briefcase size={18} className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neon-cyan" />
//                   <select
//                     className="pl-10 pr-4 py-2 bg-cyber-deep border-2 border-neon-cyan/50 rounded-md w-full focus:outline-none focus:border-neon-cyan text-cyber-gray"
//                     value={selectedRole}
//                     onChange={(e) => setSelectedRole(e.target.value as Role)}
//                   >
//                     {roles.map(role => (
//                       <option key={role} value={role} className="bg-cyber-deep">{role}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </section>

//         <section>
//           <h2 className="text-2xl font-bold mb-6 text-neon-magenta">
//             {filteredSeniors.length > 0 
//               ? `Found ${filteredSeniors.length} ${filteredSeniors.length === 1 ? 'senior' : 'seniors'}`
//               : 'No seniors found'}
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredSeniors.map(senior => (
//               <motion.div 
//                 key={senior.id}
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ type: 'spring', stiffness: 300 }}
//               >
//                 <SeniorCard 
//                   senior={senior} 
//                   className="glass-panel"
//                 />
//               </motion.div>
//             ))}
//           </div>
          
//           {filteredSeniors.length === 0 && (
//             <div className="text-center py-12">
//               <p className="text-cyber-gray mb-4">No seniors match your search criteria.</p>
//               <motion.button 
//                 onClick={() => {
//                   setSearchTerm('');
//                   setSelectedCompany('All');
//                   setSelectedBatch('All');
//                   setSelectedRole('All');
//                 }}
//                 className="text-neon-cyan hover:text-neon-magenta"
//                 whileHover={{ scale: 1.1 }}
//               >
//                 Clear all filters
//               </motion.button>
//             </div>
//           )}
//         </section>
//       </main>
//     </div>
//   );
// };

// export default SeniorsPage;


import { useState, useEffect, useCallback } from 'react';
import { Search, Filter, Briefcase, Building, GraduationCap, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Senior } from '../../../../project 1/src/types';

// SeniorCard Component (unchanged)
// const SeniorCard = ({ senior, className }: { senior: Senior; className?: string }) => {
//   /* ... same as provided ... */
// };
const SeniorCard = ({ senior, className }: { senior: Senior; className?: string }) => {
  return (
    <motion.div
      className={`${className} p-6 rounded-xl backdrop-filter backdrop-blur-lg transition-all duration-300 bg-cyber-deep/70 border-2 border-neon-cyan/30 hover:border-neon-magenta/50`}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <img 
            src={senior.image} 
            alt={senior.name} 
            className="w-12 h-12 rounded-full border-2 border-neon-cyan/50"
          />
          <div>
            <h3 className="text-neon-cyan font-bold text-lg">{senior.name}</h3>
            <p className="text-cyber-gray text-sm">{senior.role}</p>
          </div>
        </div>
        <a
          href={senior.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neon-magenta hover:text-neon-cyan transition-colors"
        >
          <Linkedin size={20} />
        </a>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between text-cyber-gray">
          <span>Corporation:</span>
          <span className="text-neon-cyan">{senior.company}</span>
        </div>
        <div className="flex justify-between text-cyber-gray">
          <span>Batch:</span>
          <span className="text-neon-cyan">{senior.batch}</span>
        </div>
        <div className="flex justify-between text-cyber-gray">
          <span>Package:</span>
          <span className="text-neon-magenta">{senior.package}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-neon-cyan/30">
        <h4 className="text-neon-cyan text-sm mb-2">Skill Matrix:</h4>
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
    </motion.div>
  );
};

// Mock data (unchanged)
const seniorsData: Senior[] = [/* ... same as provided ... */

  {
        id: 1,
        name: 'Priya Sharma',
        company: 'Google',
        role: 'Software Engineer',
        batch: '2022',
        package: '32 LPA',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
        skills: ['React', 'Node.js', 'Python'],
        linkedin: 'https://linkedin.com/in/priyasharma',
      },
      {
        id: 2,
        name: 'Rahul Verma',
        company: 'Microsoft',
        role: 'Product Manager',
        batch: '2021',
        package: '28 LPA',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
        skills: ['Product Management', 'UX Design'],
        linkedin: 'https://linkedin.com/in/rahulverma',
      },
      {
        id: 3,
        name: 'Ananya Patel',
        company: 'Amazon',
        role: 'Software Development Engineer',
        batch: '2022',
        package: '30 LPA',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
        skills: ['Java', 'AWS', 'Algorithms'],
        linkedin: 'https://linkedin.com/in/ananyapatel',
      },
      {
        id: 4,
        name: 'Vikram Singh',
        company: 'Adobe',
        role: 'UI/UX Designer',
        batch: '2021',
        package: '24 LPA',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
        skills: ['Figma', 'Adobe XD', 'UI Design'],
        linkedin: 'https://linkedin.com/in/vikramsingh',
      },

];

const companies = ['All', 'Google', 'Microsoft', 'Amazon', 'Adobe', 'Flipkart', 'Goldman Sachs'] as const;
const batches = ['All', '2021', '2022', '2023'] as const;
const roles = ['All', 'Software Engineer', 'Product Manager', 'Data Scientist', 'UI/UX Designer', 'Financial Analyst'] as const;

// Extract unique skills
const allSkills = Array.from(new Set(seniorsData.flatMap((senior) => senior.skills)));

type Company = typeof companies[number];
type Batch = typeof batches[number];
type Role = typeof roles[number];

const SeniorsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState<Company>('All');
  const [selectedBatch, setSelectedBatch] = useState<Batch>('All');
  const [selectedRole, setSelectedRole] = useState<Role>('All');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [cursor, setCursor] = useState({ x: -100, y: -100, isHovering: false });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setCursor({
      x: e.clientX - 10,
      y: e.clientY - 10,
      isHovering: Boolean((e.target as HTMLElement).closest('button, a')),
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const filteredSeniors = seniorsData.filter((senior) => {
    const matchesSearch =
      senior.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      senior.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      senior.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCompany = selectedCompany === 'All' || senior.company === selectedCompany;
    const matchesBatch = selectedBatch === 'All' || senior.batch === selectedBatch;
    const matchesRole = selectedRole === 'All' || senior.role === selectedRole;
    const matchesSkills =
      selectedSkills.length === 0 || selectedSkills.some((skill) => senior.skills.includes(skill));
    return matchesSearch && matchesCompany && matchesBatch && matchesRole && matchesSkills;
  });

  return (
    <div className="font-space-grotesk bg-cyber-deep text-white min-h-screen">
      <motion.div
        className="fixed w-5 h-5 border-2 border-neon-cyan rounded-full pointer-events-none z-50"
        style={{
          left: cursor.x,
          top: cursor.y,
          scale: cursor.isHovering ? 1.8 : 1,
          borderColor: cursor.isHovering ? 'var(--neon-magenta)' : 'var(--neon-cyan)',
          filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.4))',
        }}
        transition={{ type: 'spring', stiffness: 200 }}
      />

      <main className="container mx-auto px-4 py-8">
        <motion.section
          className="cyber-bg glass-panel rounded-xl p-8 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
              Connect with Seniors
            </h1>
            <p className="text-xl mb-6 text-cyber-gray">
              Find and connect with seniors who share your career interests and aspirations.
            </p>
          </div>
        </motion.section>

        <section className="glass-panel rounded-lg p-6 mb-8 border border-neon-cyan/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-neon-cyan" />
              </div>
              <input
                type="text"
                placeholder="Search by name, company, or role..."
                className="pl-10 pr-4 py-2 bg-cyber-deep border-2 border-neon-cyan/50 rounded-md w-full focus:outline-none focus:border-neon-cyan text-cyber-gray"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <motion.button
              className="flex items-center gap-2 px-4 py-2 glass-panel border-2 border-neon-magenta text-neon-magenta rounded-md hover:border-neon-cyan transition-colors"
              onClick={() => setShowFilters(!showFilters)}
              whileHover={{ scale: 1.05 }}
            >
              <Filter size={18} />
              <span>Filters</span>
            </motion.button>
          </div>

          {showFilters && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-neon-cyan/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div>
                <label className="block text-sm font-medium text-neon-cyan mb-1">Company</label>
                <div className="relative">
                  <Building size={18} className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neon-cyan" />
                  <select
                    className="pl-10 pr-4 py-2 bg-cyber-deep border-2 border-neon-cyan/50 rounded-md w-full focus:outline-none focus:border-neon-cyan text-cyber-gray"
                    value={selectedCompany}
                    onChange={(e) => setSelectedCompany(e.target.value as Company)}
                  >
                    {companies.map((company) => (
                      <option key={company} value={company} className="bg-cyber-deep">
                        {company}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neon-cyan mb-1">Batch</label>
                <div className="relative">
                  <GraduationCap size={18} className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neon-cyan" />
                  <select
                    className="pl-10 pr-4 py-2 bg-cyber-deep border-2 border-neon-cyan/50 rounded-md w-full focus:outline-none focus:border-neon-cyan text-cyber-gray"
                    value={selectedBatch}
                    onChange={(e) => setSelectedBatch(e.target.value as Batch)}
                  >
                    {batches.map((batch) => (
                      <option key={batch} value={batch} className="bg-cyber-deep">
                        {batch}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neon-cyan mb-1">Role</label>
                <div className="relative">
                  <Briefcase size={18} className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neon-cyan" />
                  <select
                    className="pl-10 pr-4 py-2 bg-cyber-deep border-2 border-neon-cyan/50 rounded-md w-full focus:outline-none focus:border-neon-cyan text-cyber-gray"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value as Role)}
                  >
                    {roles.map((role) => (
                      <option key={role} value={role} className="bg-cyber-deep">
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          )}

          {showFilters && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-neon-cyan mb-2">Filter by Skills</label>
              <div className="flex flex-wrap gap-2">
                {allSkills.map((skill) => (
                  <button
                    key={skill}
                    className={`px-3 py-1 text-sm rounded-full transition-colors ${
                      selectedSkills.includes(skill)
                        ? 'bg-neon-magenta text-white'
                        : 'bg-cyber-deep text-neon-cyan border border-neon-cyan hover:bg-neon-cyan/20'
                    }`}
                    onClick={() =>
                      setSelectedSkills((prev) =>
                        prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
                      )
                    }
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-neon-magenta">
            {filteredSeniors.length > 0
              ? `Found ${filteredSeniors.length} ${filteredSeniors.length === 1 ? 'senior' : 'seniors'}`
              : 'No seniors found'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSeniors.map((senior) => (
              <motion.div
                key={senior.id}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <SeniorCard senior={senior} className="glass-panel" />
              </motion.div>
            ))}
          </div>
          {filteredSeniors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-cyber-gray mb-4">No seniors match your search criteria.</p>
              <motion.button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCompany('All');
                  setSelectedBatch('All');
                  setSelectedRole('All');
                  setSelectedSkills([]);
                }}
                className="text-neon-cyan hover:text-neon-magenta"
                whileHover={{ scale: 1.1 }}
              >
                Clear all filters
              </motion.button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default SeniorsPage;
