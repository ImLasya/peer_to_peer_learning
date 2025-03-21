// // import  { useState } from 'react';
// // // import Navbar from '../components/Navbar';
// // // import Footer from '../components/Footer';
// // import SeniorCard from '../components/SeniorCard';
// // import { Search, Filter, Briefcase, Building, GraduationCap } from 'lucide-react';

// // // Mock data for seniors
// // const seniorsData = [
// //   {
// //     id: 1,
// //     name: 'Priya Sharma',
// //     company: 'Google',
// //     role: 'Software Engineer',
// //     batch: '2022',
// //     package: '32 LPA',
// //     image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
// //     skills: ['React', 'Node.js', 'Python'],
// //     linkedin: 'https://linkedin.com/in/priyasharma',
// //   },
// //   {
// //     id: 2,
// //     name: 'Rahul Verma',
// //     company: 'Microsoft',
// //     role: 'Product Manager',
// //     batch: '2021',
// //     package: '28 LPA',
// //     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
// //     skills: ['Product Management', 'UX Design', 'Data Analysis'],
// //     linkedin: 'https://linkedin.com/in/rahulverma',
// //   },
// //   {
// //     id: 3,
// //     name: 'Ananya Patel',
// //     company: 'Amazon',
// //     role: 'Software Development Engineer',
// //     batch: '2022',
// //     package: '30 LPA',
// //     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
// //     skills: ['Java', 'AWS', 'Algorithms'],
// //     linkedin: 'https://linkedin.com/in/ananyapatel',
// //   },
// //   {
// //     id: 4,
// //     name: 'Vikram Singh',
// //     company: 'Adobe',
// //     role: 'UI/UX Designer',
// //     batch: '2021',
// //     package: '24 LPA',
// //     image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
// //     skills: ['Figma', 'Adobe XD', 'UI Design'],
// //     linkedin: 'https://linkedin.com/in/vikramsingh',
// //   },
// //   {
// //     id: 5,
// //     name: 'Neha Gupta',
// //     company: 'Flipkart',
// //     role: 'Data Scientist',
// //     batch: '2022',
// //     package: '26 LPA',
// //     image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
// //     skills: ['Python', 'Machine Learning', 'SQL'],
// //     linkedin: 'https://linkedin.com/in/nehagupta',
// //   },
// //   {
// //     id: 6,
// //     name: 'Arjun Reddy',
// //     company: 'Goldman Sachs',
// //     role: 'Financial Analyst',
// //     batch: '2021',
// //     package: '27 LPA',
// //     image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
// //     skills: ['Financial Modeling', 'Excel', 'Data Analysis'],
// //     linkedin: 'https://linkedin.com/in/arjunreddy',
// //   },
// // ];

// // // Companies for filter
// // const companies = ['All', 'Google', 'Microsoft', 'Amazon', 'Adobe', 'Flipkart', 'Goldman Sachs'];
// // const batches = ['All', '2021', '2022', '2023'];
// // const roles = ['All', 'Software Engineer', 'Product Manager', 'Data Scientist', 'UI/UX Designer', 'Financial Analyst'];

// // const HomePage = () => {
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [selectedCompany, setSelectedCompany] = useState('All');
// //   const [selectedBatch, setSelectedBatch] = useState('All');
// //   const [selectedRole, setSelectedRole] = useState('All');
// //   const [showFilters, setShowFilters] = useState(false);

// //   // Filter seniors based on search and filters
// //   const filteredSeniors = seniorsData.filter(senior => {
// //     const matchesSearch = senior.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
// //                           senior.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //                           senior.role.toLowerCase().includes(searchTerm.toLowerCase());
    
// //     const matchesCompany = selectedCompany === 'All' || senior.company === selectedCompany;
// //     const matchesBatch = selectedBatch === 'All' || senior.batch === selectedBatch;
// //     const matchesRole = selectedRole === 'All' || senior.role === selectedRole;
    
// //     return matchesSearch && matchesCompany && matchesBatch && matchesRole;
// //   });

// //   return (
// //     <div className="min-h-screen bg-gray-50 flex flex-col">
     
      
// //       <main className="flex-grow container mx-auto px-4 py-8">
// //         {/* Hero Section */}
// //         <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 mb-8 text-white">
// //           <div className="max-w-3xl">
// //             <h1 className="text-3xl font-bold mb-4">Discover Placement Success Stories</h1>
// //             <p className="text-xl mb-6">
// //               Learn from seniors who have successfully navigated the placement process and secured positions in top companies.
// //             </p>
// //             <div className="flex items-center space-x-2">
// //               <GraduationCap size={20} />
// //               <span>Over 500+ placement success stories</span>
// //             </div>
// //           </div>
// //         </section>
        
// //         {/* Search and Filter Section */}
// //         <section className="bg-white rounded-lg shadow-md p-6 mb-8">
// //           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
// //             <div className="relative flex-grow">
// //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                 <Search size={20} className="text-gray-400" />
// //               </div>
// //               <input
// //                 type="text"
// //                 placeholder="Search by name, company, or role..."
// //                 className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                 value={searchTerm}
// //                 onChange={(e) => setSearchTerm(e.target.value)}
// //               />
// //             </div>
            
// //             <button 
// //               className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
// //               onClick={() => setShowFilters(!showFilters)}
// //             >
// //               <Filter size={18} />
// //               <span>Filters</span>
// //             </button>
// //           </div>
          
// //           {/* Filters */}
// //           {showFilters && (
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-200">
// //               {/* Company Filter */}
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
// //                 <div className="relative">
// //                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                     <Building size={18} className="text-gray-400" />
// //                   </div>
// //                   <select
// //                     className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                     value={selectedCompany}
// //                     onChange={(e) => setSelectedCompany(e.target.value)}
// //                   >
// //                     {companies.map(company => (
// //                       <option key={company} value={company}>{company}</option>
// //                     ))}
// //                   </select>
// //                 </div>
// //               </div>
              
// //               {/* Batch Filter */}
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">Batch</label>
// //                 <div className="relative">
// //                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                     <GraduationCap size={18} className="text-gray-400" />
// //                   </div>
// //                   <select
// //                     className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                     value={selectedBatch}
// //                     onChange={(e) => setSelectedBatch(e.target.value)}
// //                   >
// //                     {batches.map(batch => (
// //                       <option key={batch} value={batch}>{batch}</option>
// //                     ))}
// //                   </select>
// //                 </div>
// //               </div>
              
// //               {/* Role Filter */}
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
// //                 <div className="relative">
// //                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
// //                     <Briefcase size={18} className="text-gray-400" />
// //                   </div>
// //                   <select
// //                     className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                     value={selectedRole}
// //                     onChange={(e) => setSelectedRole(e.target.value)}
// //                   >
// //                     {roles.map(role => (
// //                       <option key={role} value={role}>{role}</option>
// //                     ))}
// //                   </select>
// //                 </div>
// //               </div>
// //             </div>
// //           )}
// //         </section>
        
// //         {/* Results Section */}
// //         <section>
// //           <h2 className="text-2xl font-bold mb-6">
// //             {filteredSeniors.length > 0 
// //               ? `Found ${filteredSeniors.length} placement ${filteredSeniors.length === 1 ? 'story' : 'stories'}`
// //               : 'No results found'}
// //           </h2>
          
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {filteredSeniors.map(senior => (
// //               <SeniorCard key={senior.id} senior={senior} />
// //             ))}
// //           </div>
          
// //           {filteredSeniors.length === 0 && (
// //             <div className="text-center py-12">
// //               <p className="text-gray-500 mb-4">No seniors match your search criteria.</p>
// //               <button 
// //                 onClick={() => {
// //                   setSearchTerm('');
// //                   setSelectedCompany('All');
// //                   setSelectedBatch('All');
// //                   setSelectedRole('All');
// //                 }}
// //                 className="text-blue-600 hover:text-blue-800"
// //               >
// //                 Clear all filters
// //               </button>
// //             </div>
// //           )}
// //         </section>
// //       </main>
      
      
// //     </div>
// //   );
// // };

// // export default HomePage;
// import { useState, useEffect, useCallback } from 'react';
// import SeniorCard from '../components/SeniorCard';
// import { Search, Filter, Briefcase, Building, GraduationCap } from 'lucide-react';
// import { motion } from 'framer-motion';

// // Mock data for seniors
// const seniorsData = [
//   {
//         id: 1,
//         name: 'Priya Sharma',
//         company: 'Google',
//         role: 'Software Engineer',
//         batch: '2022',
//         package: '32 LPA',
//         image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
//         skills: ['React', 'Node.js', 'Python'],
//         linkedin: 'https://linkedin.com/in/priyasharma',
//       },
//       {
//         id: 2,
//         name: 'Rahul Verma',
//         company: 'Microsoft',
//         role: 'Product Manager',
//         batch: '2021',
//         package: '28 LPA',
//         image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
//         skills: ['Product Management', 'UX Design', 'Data Analysis'],
//         linkedin: 'https://linkedin.com/in/rahulverma',
//       },
//       {
//         id: 3,
//         name: 'Ananya Patel',
//         company: 'Amazon',
//         role: 'Software Development Engineer',
//         batch: '2022',
//         package: '30 LPA',
//         image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
//         skills: ['Java', 'AWS', 'Algorithms'],
//         linkedin: 'https://linkedin.com/in/ananyapatel',
//       },
//       {
//         id: 4,
//         name: 'Vikram Singh',
//         company: 'Adobe',
//         role: 'UI/UX Designer',
//         batch: '2021',
//         package: '24 LPA',
//         image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
//         skills: ['Figma', 'Adobe XD', 'UI Design'],
//         linkedin: 'https://linkedin.com/in/vikramsingh',
//       },
//       {
//         id: 5,
//         name: 'Neha Gupta',
//         company: 'Flipkart',
//         role: 'Data Scientist',
//         batch: '2022',
//         package: '26 LPA',
//         image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
//         skills: ['Python', 'Machine Learning', 'SQL'],
//         linkedin: 'https://linkedin.com/in/nehagupta',
//       },
//       {
//         id: 6,
//         name: 'Arjun Reddy',
//         company: 'Goldman Sachs',
//         role: 'Financial Analyst',
//         batch: '2021',
//         package: '27 LPA',
//         image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
//         skills: ['Financial Modeling', 'Excel', 'Data Analysis'],
//         linkedin: 'https://linkedin.com/in/arjunreddy',
//       },
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

//   // Filter seniors based on search and filters
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

//       <main className="flex-grow container mx-auto px-4 py-8">
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
//                Access encrypted knowledge banks from successfully placed graduates
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
          
//           {/* Filters */}
//           {showFilters && (
//             <motion.div 
//               className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-neon-cyan/30"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//             >
//               {/* Company Filter */}
//               <div>
//                 <label className="block text-sm font-medium text-neon-cyan mb-1">CORPORATION</label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Building size={18} className="text-neon-cyan" />
//                   </div>
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
              
//               {/* Batch Filter */}
//               <div>
//                 <label className="block text-sm font-medium text-neon-cyan mb-1">BATCH CODE</label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <GraduationCap size={18} className="text-neon-cyan" />
//                   </div>
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
              
//               {/* Role Filter */}
//               <div>
//                 <label className="block text-sm font-medium text-neon-cyan mb-1">ROLE MATRIX</label>
//                 <div className="relative">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Briefcase size={18} className="text-neon-cyan" />
//                   </div>
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
//             skills: ['Product Management', 'UX Design', 'Data Analysis'],
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
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Users, Building, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for statistics
const placementStats = {
  totalPlacements: 500,
  companies: 50,
  averagePackage: '28 LPA',
  topCompanies: ['Google', 'Microsoft', 'Amazon', 'Adobe', 'Flipkart']
};

// Mock data for placement highlights
const placementHighlights = [
  { id: 1, title: 'Top Package', value: '45 LPA', company: 'Google', icon: <TrendingUp /> },
  { id: 2, title: 'Most Placements', value: '120+', company: 'Amazon', icon: <Users /> },
  { id: 3, title: 'New Companies', value: '15+', year: '2024', icon: <Building /> },
];

const HomePage = () => {
  const [hoveredStat, setHoveredStat] = useState<'placements' | 'companies' | 'package' | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    });
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  };

  return (
    <div className="font-space-grotesk bg-cyber-deep text-white min-h-screen overflow-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-cyan rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            animate={{
              y: [0, -1000],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      <main className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <motion.section
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent"
            variants={itemVariants}
            animate={pulseAnimation}
          >
            PeerConnect Network
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-cyber-gray max-w-2xl mx-auto mb-8"
            variants={itemVariants}
            animate={{ opacity: [0.7, 1, 0.7], transition: { duration: 3, repeat: Infinity } }}
          >
            Bridge the gap between ambition and achievement. Connect with seniors and explore their placement journeys.
          </motion.p>
          <Link to="/seniors">
            <motion.button
              className="glass-panel px-8 py-3 rounded-full border-2 border-neon-cyan text-neon-cyan hover:border-neon-magenta hover:text-neon-magenta transition-all"
              whileHover={{ 
                scale: 1.1, 
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
                rotate: [0, 5, -5, 0]
              }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              Explore Placement Archives
            </motion.button>
          </Link>
        </motion.section>

        {/* Placement Statistics Dashboard */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="glass-panel p-6 rounded-xl border-2 border-neon-cyan/30 relative overflow-hidden"
            variants={itemVariants}
            onHoverStart={() => setHoveredStat('placements')}
            onHoverEnd={() => setHoveredStat(null)}
          >
            <motion.div
              className="absolute inset-0 bg-neon-cyan/20"
              initial={{ opacity: 0 }}
              animate={hoveredStat === 'placements' ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <div className="relative z-10">
              <Users className="w-10 h-10 text-neon-cyan mb-4" />
              <h3 className="text-3xl font-bold text-neon-magenta">{placementStats.totalPlacements}+</h3>
              <p className="text-cyber-gray">Successful Placements</p>
            </div>
          </motion.div>

          <motion.div
            className="glass-panel p-6 rounded-xl border-2 border-neon-cyan/30 relative overflow-hidden"
            variants={itemVariants}
            onHoverStart={() => setHoveredStat('companies')}
            onHoverEnd={() => setHoveredStat(null)}
          >
            <motion.div
              className="absolute inset-0 bg-neon-cyan/20"
              initial={{ opacity: 0 }}
              animate={hoveredStat === 'companies' ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <div className="relative z-10">
              <Building className="w-10 h-10 text-neon-cyan mb-4" />
              <h3 className="text-3xl font-bold text-neon-magenta">{placementStats.companies}+</h3>
              <p className="text-cyber-gray">Partner Companies</p>
            </div>
          </motion.div>

          <motion.div
            className="glass-panel p-6 rounded-xl border-2 border-neon-cyan/30 relative overflow-hidden"
            variants={itemVariants}
            onHoverStart={() => setHoveredStat('package')}
            onHoverEnd={() => setHoveredStat(null)}
          >
            <motion.div
              className="absolute inset-0 bg-neon-cyan/20"
              initial={{ opacity: 0 }}
              animate={hoveredStat === 'package' ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <div className="relative z-10">
              <TrendingUp className="w-10 h-10 text-neon-cyan mb-4" />
              <h3 className="text-3xl font-bold text-neon-magenta">{placementStats.averagePackage}</h3>
              <p className="text-cyber-gray">Average Package</p>
            </div>
          </motion.div>
        </motion.section>

        {/* Featured Companies Marquee */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-neon-cyan mb-6">Featured Organizations</h2>
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [-1000, 0],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 20,
                    ease: 'linear'
                  }
                }
              }}
            >
              {[...placementStats.topCompanies, ...placementStats.topCompanies].map((company, index) => (
                <motion.div
                  key={index}
                  className="glass-panel px-6 py-3 rounded-full border border-neon-cyan/50 whitespace-nowrap"
                  whileHover={{ scale: 1.1, borderColor: 'var(--neon-magenta)' }}
                >
                  {company}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Placement Highlights Section */}
        <motion.section
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-neon-magenta">Placement Highlights</h2>
          <p className="text-cyber-gray mb-8 max-w-xl mx-auto">
            See how seniors are shaping the future at top companies.
          </p>
          <div className="relative overflow-hidden h-32">
            <motion.div
              className="flex gap-8 absolute"
              animate={{
                x: [0, -100 * placementHighlights.length],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: placementHighlights.length * 5,
                    ease: 'linear'
                  }
                }
              }}
            >
              {placementHighlights.map((highlight) => (
                <motion.div
                  key={highlight.id}
                  className="glass-panel p-4 rounded-xl border-2 border-neon-cyan/30 flex items-center gap-4 min-w-[300px]"
                  whileHover={{ y: -10, boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)' }}
                >
                  <div className="text-neon-cyan">{highlight.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-neon-cyan">{highlight.title}</h3>
                    <p className="text-cyber-gray">
                      {highlight.value} {highlight.company ? `at ${highlight.company}` : highlight.year ? `in ${highlight.year}` : ''}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default HomePage;