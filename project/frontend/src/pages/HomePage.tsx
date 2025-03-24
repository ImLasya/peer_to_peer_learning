
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Users, Building, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data remains the same
const placementStats = {
  totalPlacements: 500,
  companies: 50,
  averagePackage: '28 LPA',
  topCompanies: ['Google', 'Microsoft', 'Amazon', 'Adobe', 'Flipkart']
};

// const placementHighlights = [
//   { id: 1, title: 'Top Package', value: '45 LPA', company: 'Google', icon: <TrendingUp /> },
//   { id: 2, title: 'Most Placements', value: '120+', company: 'Amazon', icon: <Users /> },
//   { id: 3, title: 'New Companies', value: '15+', year: '2024', icon: <Building /> },
// ];
const placementHighlights = [
  { id: 1, title: 'Top Package', value: '45 LPA', company: 'Google', icon: <TrendingUp /> },
  { id: 2, title: 'Most Placements', value: '120+', company: 'Amazon', icon: <Users /> },
  { id: 3, title: 'New Companies', value: '15+', year: '2024', icon: <Building /> },
  { id: 4, title: 'Fastest Placement', value: '2 Weeks', company: 'Microsoft', icon: <TrendingUp /> },
  { id: 5, title: 'Highest Internship Stipend', value: '1.5 LPA', company: 'Adobe', icon: <Users /> },
  { id: 6, title: 'Most International Offers', value: '10+', year: '2024', icon: <Building /> },
  { id: 7, title: 'Highest PPO Rate', value: '90%', company: 'Flipkart', icon: <TrendingUp /> },
  { id: 8, title: 'Highest Hiring Domain', value: 'Software Development', company: 'Google', icon: <Users /> },
  { id: 9, title: 'Record Offers', value: '200+', company: 'Amazon', icon: <Building /> },
  { id: 10, title: 'New Industry Partners', value: '8+', year: '2025', icon: <Building /> },
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
        {/* Hero Section - Removed pulse animation */}
        <motion.section
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent"
            variants={itemVariants}
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

        {/* Placement Statistics Dashboard - Modified hover effect */}
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
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)',
              borderColor: 'rgba(0, 255, 255, 0.8)'
            }}
            transition={{ duration: 0.3 }}
          >
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
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)',
              borderColor: 'rgba(0, 255, 255, 0.8)'
            }}
            transition={{ duration: 0.3 }}
          >
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
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)',
              borderColor: 'rgba(0, 255, 255, 0.8)'
            }}
            transition={{ duration: 0.3 }}
          >
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

        {/* Placement Highlights Section - New hover effect */}
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
          <div className="relative overflow-hidden h-40">
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
                  className="glass-panel p-4 rounded-xl border-2 border-neon-cyan/30 flex items-center gap-4 min-w-[300px] relative"
                  initial={{
                    borderWidth: '2px',
                    borderColor: 'rgba(0, 255, 255, 0.3)'
                  }}
                  whileHover={{
                    scale: 1.02,
                    borderWidth: '3px',
                    borderColor: 'rgba(0, 255, 255, 1)',
                    boxShadow: '0 0 20px rgba(0, 255, 255, 0.4)',
                    backgroundColor: 'rgba(0, 255, 255, 0.05)',
                  }}
                  transition={{ 
                    duration: 0.3,
                    ease: 'easeOut'
                  }}
                >
                  <div className="text-neon-cyan z-10">{highlight.icon}</div>
                  <div className="z-10">
                    <h3 className="text-xl font-bold text-neon-cyan">{highlight.title}</h3>
                    {/* <p className="text-cyber-gray">
                      {highlight.value} {highlight.company ? at ${highlight.company} : highlight.year ? in ${highlight.year} : ''}
                    </p> */}
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