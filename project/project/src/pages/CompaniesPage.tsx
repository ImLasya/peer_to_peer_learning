import React from 'react';
import { Building, Users, MapPin, Briefcase } from 'lucide-react';
import { Company } from '../types';

const companies: Company[] = [
  {
    id: 1,
    name: 'Google',
    logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    description: 'A multinational technology company specializing in Internet-related services and products.',
    location: 'Bangalore, Hyderabad',
    roles: ['Software Engineer', 'Product Manager', 'Data Scientist'],
    avgPackage: '32 LPA',
    totalHires: 45
  },
  {
    id: 2,
    name: 'Microsoft',
    logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31',
    description: 'A leading technology company known for software development and cloud computing.',
    location: 'Bangalore, Hyderabad, Noida',
    roles: ['Software Engineer', 'Program Manager', 'Cloud Solutions Architect'],
    avgPackage: '30 LPA',
    totalHires: 38
  },
  {
    id: 3,
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png',
    description: 'Global e-commerce and technology company with diverse business units.',
    location: 'Bangalore, Chennai, Hyderabad',
    roles: ['SDE', 'Business Analyst', 'Operations Manager'],
    avgPackage: '28 LPA',
    totalHires: 42
  }
];

interface CompanyCardProps {
  company: Company;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <div className="flex items-center justify-between mb-4">
      <img src={company.logo} alt={company.name} className="h-12 object-contain" />
      <span className="text-blue-600 font-semibold">{company.avgPackage}</span>
    </div>
    
    <h3 className="text-xl font-bold mb-2">{company.name}</h3>
    <p className="text-gray-600 mb-4">{company.description}</p>
    
    <div className="space-y-3">
      <div className="flex items-center text-gray-600">
        <MapPin size={18} className="mr-2" />
        <span>{company.location}</span>
      </div>
      
      <div className="flex items-center text-gray-600">
        <Briefcase size={18} className="mr-2" />
        <span>{company.roles.join(', ')}</span>
      </div>
      
      <div className="flex items-center text-gray-600">
        <Users size={18} className="mr-2" />
        <span>{company.totalHires} students hired</span>
      </div>
    </div>
  </div>
);

const CompaniesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 mb-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold mb-4">Top Recruiting Companies</h1>
            <p className="text-xl mb-6">
              Explore companies that regularly recruit from our campus and learn about their opportunities.
            </p>
            <div className="flex items-center space-x-2">
              <Building size={20} />
              <span>20+ companies visited last season</span>
            </div>
          </div>
        </section>

        {/* Companies Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map(company => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CompaniesPage;