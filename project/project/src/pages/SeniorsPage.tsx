import { useState } from 'react';
import SeniorCard from '../components/SeniorCard';
import { Search, Filter, Briefcase, Building, GraduationCap } from 'lucide-react';
import { Senior } from '../../../../project 1/src/types';

// Using the same seniors data from HomePage
const seniorsData: Senior[] = [
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
  // ... (rest of the seniors data)
];

const companies = ['All', 'Google', 'Microsoft', 'Amazon', 'Adobe', 'Flipkart', 'Goldman Sachs'] as const;
const batches = ['All', '2021', '2022', '2023'] as const;
const roles = ['All', 'Software Engineer', 'Product Manager', 'Data Scientist', 'UI/UX Designer', 'Financial Analyst'] as const;

type Company = typeof companies[number];
type Batch = typeof batches[number];
type Role = typeof roles[number];

const SeniorsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState<Company>('All');
  const [selectedBatch, setSelectedBatch] = useState<Batch>('All');
  const [selectedRole, setSelectedRole] = useState<Role>('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredSeniors = seniorsData.filter(senior => {
    const matchesSearch = senior.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         senior.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         senior.role.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCompany = selectedCompany === 'All' || senior.company === selectedCompany;
    const matchesBatch = selectedBatch === 'All' || senior.batch === selectedBatch;
    const matchesRole = selectedRole === 'All' || senior.role === selectedRole;
    
    return matchesSearch && matchesCompany && matchesBatch && matchesRole;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 mb-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold mb-4">Connect with Seniors</h1>
            <p className="text-xl mb-6">
              Find and connect with seniors who share your career interests and aspirations.
            </p>
            <div className="flex items-center space-x-2">
              <GraduationCap size={20} />
              <span>Over 500+ seniors to connect with</span>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by name, company, or role..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <button 
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={18} />
              <span>Filters</span>
            </button>
          </div>
          
          {/* Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-200">
              {/* Company Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building size={18} className="text-gray-400" />
                  </div>
                  <select
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedCompany}
                    onChange={(e) => setSelectedCompany(e.target.value as Company)}
                  >
                    {companies.map(company => (
                      <option key={company} value={company}>{company}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Batch Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Batch</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <GraduationCap size={18} className="text-gray-400" />
                  </div>
                  <select
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedBatch}
                    onChange={(e) => setSelectedBatch(e.target.value as Batch)}
                  >
                    {batches.map(batch => (
                      <option key={batch} value={batch}>{batch}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Role Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Briefcase size={18} className="text-gray-400" />
                  </div>
                  <select
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value as Role)}
                  >
                    {roles.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Results Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            {filteredSeniors.length > 0 
              ? `Found ${filteredSeniors.length} ${filteredSeniors.length === 1 ? 'senior' : 'seniors'}`
              : 'No seniors found'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSeniors.map(senior => (
              <SeniorCard key={senior.id} senior={senior} />
            ))}
          </div>
          
          {filteredSeniors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">No seniors match your search criteria.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCompany('All');
                  setSelectedBatch('All');
                  setSelectedRole('All');
                }}
                className="text-blue-600 hover:text-blue-800"
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default SeniorsPage;