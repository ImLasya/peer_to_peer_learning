import React from 'react';
import { Book, Code, FileText, Video, Link as LinkIcon } from 'lucide-react';
import { Resource } from '../../../../project 1/src/types';

const resources: Resource[] = [
  {
    id: 1,
    title: 'DSA Interview Preparation',
    type: 'Course',
    description: 'Comprehensive guide to Data Structures and Algorithms for technical interviews.',
    link: '#',
    icon: Code
  },
  {
    id: 2,
    title: 'Resume Writing Guide',
    type: 'Document',
    description: 'Learn how to create an impressive resume that stands out to recruiters.',
    link: '#',
    icon: FileText
  },
  {
    id: 3,
    title: 'Mock Interview Videos',
    type: 'Video',
    description: 'Watch recorded mock interviews with detailed feedback and analysis.',
    link: '#',
    icon: Video
  },
  {
    id: 4,
    title: 'System Design Basics',
    type: 'Course',
    description: 'Introduction to system design concepts for software engineering interviews.',
    link: '#',
    icon: Book
  }
];

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const Icon = resource.icon;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Icon size={24} className="text-blue-600" />
        </div>
        <span className="ml-3 text-sm font-medium text-blue-600">{resource.type}</span>
      </div>
      
      <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
      <p className="text-gray-600 mb-4">{resource.description}</p>
      
      <a 
        href={resource.link}
        className="inline-flex items-center text-blue-600 hover:text-blue-800"
      >
        <LinkIcon size={16} className="mr-1" />
        Access Resource
      </a>
    </div>
  );
};

const ResourcesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 mb-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold mb-4">Placement Resources</h1>
            <p className="text-xl mb-6">
              Access curated resources to help you prepare for placements and ace your interviews.
            </p>
            <div className="flex items-center space-x-2">
              <Book size={20} />
              <span>Comprehensive preparation materials</span>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ResourcesPage;