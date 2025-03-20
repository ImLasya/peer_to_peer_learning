
// import { useState, useEffect, useCallback } from 'react';
// import SeniorCard from '../components/SeniorCard';
// import { Search, Filter, Briefcase, Building, GraduationCap } from 'lucide-react';
// import { motion } from 'framer-motion';

// // Mock data for seniors
// const seniorsData = [
//   // ... (keep the same senior data array)
//   {
//             id: 1,
//             name: 'Priya Sharma',
//             company: 'Google',
//             role: 'Software Engineer',
//             batch: '2022',
//             package: '32 LPA',
//             image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
//             skills: ['React', 'Node.js', 'Python'],
//             linkedin: 'https://linkedin.com/in/priyasharma',
//           },
//           {
//             id: 2,
//             name: 'Rahul Verma',
//             company: 'Microsoft',
//             role: 'Product Manager',
//             batch: '2021',
//             package: '28 LPA',
//             image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
//             skills: ['Product Management', 'UX Design'],
//             linkedin: 'https://linkedin.com/in/rahulverma',
//           },
//           {
//             id: 3,
//             name: 'Ananya Patel',
//             company: 'Amazon',
//             role: 'Software Development Engineer',
//             batch: '2022',
//             package: '30 LPA',
//             image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
//             skills: ['Java', 'AWS', 'Algorithms'],
//             linkedin: 'https://linkedin.com/in/ananyapatel',
//           },
//           {
//             id: 4,
//             name: 'Vikram Singh',
//             company: 'Adobe',
//             role: 'UI/UX Designer',
//             batch: '2021',
//             package: '24 LPA',
//             image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
//             skills: ['Figma', 'Adobe XD', 'UI Design'],
//             linkedin: 'https://linkedin.com/in/vikramsingh',
//           },
//           {
//             id: 5,
//             name: 'Neha Gupta',
//             company: 'Flipkart',
//             role: 'Data Scientist',
//             batch: '2022',
//             package: '26 LPA',
//             image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
//             skills: ['Python', 'Machine Learning', 'SQL'],
//             linkedin: 'https://linkedin.com/in/nehagupta',
//           },
//           {
//             id: 6,
//             name: 'Arjun Reddy',
//             company: 'Goldman Sachs',
//             role: 'Financial Analyst',
//             batch: '2021',
//             package: '27 LPA',
//             image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
//             skills: ['Financial Modeling', 'Excel', 'Data Analysis'],
//             linkedin: 'https://linkedin.com/in/arjunreddy',
//           },
// ];

// // Companies for filter
// const companies = ['All', 'Google', 'Microsoft', 'Amazon', 'Adobe', 'Flipkart', 'Goldman Sachs'];
// const batches = ['All', '2021', '2022', '2023'];
// const roles = ['All', 'Software Engineer', 'Product Manager', 'Data Scientist', 'UI/UX Designer', 'Financial Analyst'];

// const HomePage = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCompany, setSelectedCompany] = useState('All');
//   const [selectedBatch, setSelectedBatch] = useState('All');
//   const [selectedRole, setSelectedRole] = useState('All');
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
//                           senior.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                           senior.role.toLowerCase().includes(searchTerm.toLowerCase());
    
//     const matchesCompany = selectedCompany === 'All' || senior.company === selectedCompany;
//     const matchesBatch = selectedBatch === 'All' || senior.batch === selectedBatch;
//     const matchesRole = selectedRole === 'All' || senior.role === selectedRole;
    
//     return matchesSearch && matchesCompany && matchesBatch && matchesRole;
//   });

//   return (
//     <div className="font-space-grotesk bg-cyber-deep text-white min-h-screen">
//       {/* Animated Cursor */}
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
//         {/* Hero Section */}
//         <motion.section 
//           className="cyber-bg glass-panel rounded-xl p-8 mb-8"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="max-w-3xl">
//             <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
//               DISCOVER PLACEMENT SUCCESS ARCHIVES
//             </h1>
//             <p className="text-xl mb-6 text-cyber-gray">
//               Access encrypted knowledge banks from successfully placed graduates
//             </p>
//             <div className="flex items-center space-x-2 text-neon-cyan">
//               <GraduationCap size={20} />
//               <span>Over 500+ neural-linked success patterns</span>
//             </div>
//           </div>
//         </motion.section>

//         {/* Search and Filter Section */}
//         <section className="glass-panel rounded-lg p-6 mb-8 border border-neon-cyan/30">
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
//             <div className="relative flex-grow">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Search size={20} className="text-neon-cyan" />
//               </div>
//               <input
//                 type="text"
//                 placeholder="SEARCH BY NAME, CORPORATION, OR ROLE..."
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
//               <span>ACTIVATE FILTERS</span>
//             </motion.button>
//           </div>
          
//           {showFilters && (
//             <motion.div 
//               className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-neon-cyan/30"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//             >
//               <div>
//                 <label className="block text-sm font-medium text-neon-cyan mb-1">CORPORATION</label>
//                 <div className="relative">
//                   <Building size={18} className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neon-cyan" />
//                   <select
//                     className="pl-10 pr-4 py-2 bg-cyber-deep border-2 border-neon-cyan/50 rounded-md w-full focus:outline-none focus:border-neon-cyan text-cyber-gray"
//                     value={selectedCompany}
//                     onChange={(e) => setSelectedCompany(e.target.value)}
//                   >
//                     {companies.map(company => (
//                       <option key={company} value={company} className="bg-cyber-deep">{company}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-neon-cyan mb-1">BATCH CODE</label>
//                 <div className="relative">
//                   <GraduationCap size={18} className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neon-cyan" />
//                   <select
//                     className="pl-10 pr-4 py-2 bg-cyber-deep border-2 border-neon-cyan/50 rounded-md w-full focus:outline-none focus:border-neon-cyan text-cyber-gray"
//                     value={selectedBatch}
//                     onChange={(e) => setSelectedBatch(e.target.value)}
//                   >
//                     {batches.map(batch => (
//                       <option key={batch} value={batch} className="bg-cyber-deep">{batch}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-neon-cyan mb-1">ROLE MATRIX</label>
//                 <div className="relative">
//                   <Briefcase size={18} className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neon-cyan" />
//                   <select
//                     className="pl-10 pr-4 py-2 bg-cyber-deep border-2 border-neon-cyan/50 rounded-md w-full focus:outline-none focus:border-neon-cyan text-cyber-gray"
//                     value={selectedRole}
//                     onChange={(e) => setSelectedRole(e.target.value)}
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

//         {/* Results Section */}
//         <section>
//           <h2 className="text-2xl font-bold mb-6 text-neon-magenta">
//             {filteredSeniors.length > 0 
//               ? `FOUND ${filteredSeniors.length} DATA ENTRIES`
//               : 'NO RESULTS IN CURRENT MATRIX'}
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
//                   className="glass-panel border-2 border-neon-cyan/30 hover:border-neon-magenta/50"
//                 />
//               </motion.div>
//             ))}
//           </div>
          
//           {filteredSeniors.length === 0 && (
//             <div className="text-center py-12">
//               <p className="text-cyber-gray mb-4">NO MATCHING PATTERNS DETECTED IN DATABASE</p>
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
//                 INITIATE SYSTEM RESET
//               </motion.button>
//             </div>
//           )}
//         </section>
//       </main>
//     </div>
//   );
// };

// export default HomePage;
import { useState, useEffect, useCallback } from 'react';
import SeniorCard from '../components/SeniorCard';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock data for seniors (unchanged)
const seniorsData = [/* ... same as provided ... */
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
              {
                id: 5,
                name: 'Neha Gupta',
                company: 'Flipkart',
                role: 'Data Scientist',
                batch: '2022',
                package: '26 LPA',
                image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
                skills: ['Python', 'Machine Learning', 'SQL'],
                linkedin: 'https://linkedin.com/in/nehagupta',
              },
              {
                id: 6,
                name: 'Arjun Reddy',
                company: 'Goldman Sachs',
                role: 'Financial Analyst',
                batch: '2021',
                package: '27 LPA',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
                skills: ['Financial Modeling', 'Excel', 'Data Analysis'],
                linkedin: 'https://linkedin.com/in/arjunreddy',
              },

];

// Companies for tabs
const companies = ['All', 'Google', 'Microsoft', 'Amazon', 'Adobe', 'Flipkart', 'Goldman Sachs'];

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('All');
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
    return matchesSearch && matchesCompany;
  });

  return (
    <div className="font-space-grotesk bg-cyber-deep text-white min-h-screen">
      {/* Animated Cursor */}
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
        {/* Hero Section */}
        <motion.section
          className="cyber-bg glass-panel rounded-xl p-8 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
              DISCOVER PLACEMENT SUCCESS ARCHIVES
            </h1>
            <p className="text-xl mb-6 text-cyber-gray">
              Access encrypted knowledge banks from successfully placed graduates
            </p>
          </div>
        </motion.section>

        {/* Search and Company Tabs Section */}
        <section className="glass-panel rounded-lg p-6 mb-8 border border-neon-cyan/30">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={20} className="text-neon-cyan" />
            </div>
            <input
              type="text"
              placeholder="SEARCH BY NAME, CORPORATION, OR ROLE..."
              className="pl-10 pr-4 py-2 bg-cyber-deep border-2 border-neon-cyan/50 rounded-md w-full focus:outline-none focus:border-neon-cyan text-cyber-gray"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {companies.map((company) => (
              <motion.button
                key={company}
                className={`px-4 py-2 rounded-md transition-colors ${
                  selectedCompany === company
                    ? 'bg-neon-cyan text-cyber-deep'
                    : 'bg-cyber-deep text-neon-cyan border border-neon-cyan hover:bg-neon-cyan/20'
                }`}
                onClick={() => setSelectedCompany(company)}
                whileHover={{ scale: 1.05 }}
              >
                {company}
              </motion.button>
            ))}
          </div>
        </section>

        {/* Results Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-neon-magenta">
            {filteredSeniors.length > 0
              ? `FOUND ${filteredSeniors.length} DATA ENTRIES`
              : 'NO RESULTS IN CURRENT MATRIX'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSeniors.map((senior) => (
              <motion.div
                key={senior.id}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <SeniorCard
                  senior={senior}
                  className="glass-panel border-2 border-neon-cyan/30 hover:border-neon-magenta/50"
                />
              </motion.div>
            ))}
          </div>
          {filteredSeniors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-cyber-gray mb-4">NO MATCHING PATTERNS DETECTED IN DATABASE</p>
              <motion.button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCompany('All');
                }}
                className="text-neon-cyan hover:text-neon-magenta"
                whileHover={{ scale: 1.1 }}
              >
                INITIATE SYSTEM RESET
              </motion.button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default HomePage;