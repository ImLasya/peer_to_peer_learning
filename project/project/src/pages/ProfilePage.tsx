import { Mail, Linkedin, Github as GitHub, Globe, MapPin, Briefcase, Calendar, GraduationCap } from 'lucide-react';

const ProfilePage = () => {
  // Mock profile data
  const profile = {
    name: 'Priya Sharma',
    role: 'Software Engineer',
    company: 'Google',
    location: 'Bangalore, India',
    batch: '2022',
    package: '32 LPA',
    email: 'priya.sharma@example.com',
    linkedin: 'https://linkedin.com/in/priyasharma',
    github: 'https://github.com/priyasharma',
    website: 'https://priyasharma.dev',
    bio: 'Software Engineer at Google with expertise in React, Node.js, and Python. Graduated from XYZ College in 2022 with a B.Tech in Computer Science.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
    skills: ['React', 'Node.js', 'Python', 'JavaScript', 'TypeScript', 'MongoDB', 'Express', 'AWS'],
    experience: [
      {
        id: 1,
        company: 'Google',
        role: 'Software Engineer',
        duration: 'July 2022 - Present',
        description: 'Working on Google Cloud Platform, developing and maintaining cloud-based solutions for enterprise clients.',
      },
      {
        id: 2,
        company: 'Microsoft',
        role: 'Software Engineering Intern',
        duration: 'Jan 2022 - June 2022',
        description: 'Worked on the Azure team, developing features for cloud services and improving system performance.',
      },
    ],
    education: [
      {
        id: 1,
        institution: 'XYZ College of Engineering',
        degree: 'B.Tech in Computer Science',
        duration: '2018 - 2022',
        gpa: '9.2/10',
      },
    ],
    placementJourney: {
      preparation: 'I started my preparation in the 6th semester by focusing on Data Structures and Algorithms. I solved problems on LeetCode and GeeksforGeeks daily, aiming for at least 3-4 problems per day.',
      interviews: 'I had interviews with 5 companies: Google, Microsoft, Amazon, Adobe, and Flipkart. The Google interview process consisted of 2 online assessments and 5 rounds of interviews.',
      tips: 'Focus on fundamentals, practice coding regularly, and work on real-world projects to build your portfolio. Mock interviews with friends helped me a lot in preparing for the actual interviews.',
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-48 relative">
            <div className="absolute -bottom-16 left-8">
              <img 
                src={profile.image} 
                alt={profile.name} 
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
              />
            </div>
          </div>
          
          <div className="pt-20 pb-8 px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold">{profile.name}</h1>
                <p className="text-gray-600 flex items-center mt-1">
                  <Briefcase size={18} className="mr-2" />
                  {profile.role} at {profile.company}
                </p>
                <p className="text-gray-600 flex items-center mt-1">
                  <MapPin size={18} className="mr-2" />
                  {profile.location}
                </p>
                <p className="text-gray-600 flex items-center mt-1">
                  <GraduationCap size={18} className="mr-2" />
                  Batch of {profile.batch} • Package: {profile.package}
                </p>
              </div>
              
              <div className="mt-4 md:mt-0 flex space-x-3">
                <a 
                  href={`mailto:${profile.email}`} 
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  title="Email"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href={profile.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href={profile.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  title="GitHub"
                >
                  <GitHub size={20} />
                </a>
                <a 
                  href={profile.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  title="Personal Website"
                >
                  <Globe size={20} />
                </a>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-semibold mb-3">About</h2>
              <p className="text-gray-700">{profile.bio}</p>
            </div>
            
            <div className="border-t border-gray-200 mt-6 pt-6">
              <h2 className="text-xl font-semibold mb-3">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-200 mt-6 pt-6">
              <h2 className="text-xl font-semibold mb-3">Experience</h2>
              <div className="space-y-4">
                {profile.experience.map(exp => (
                  <div key={exp.id} className="flex">
                    <div className="mr-4 mt-1">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      <div className="w-0.5 h-full bg-gray-200 ml-1.5"></div>
                    </div>
                    <div>
                      <h3 className="font-medium">{exp.role}</h3>
                      <p className="text-gray-600">{exp.company}</p>
                      <p className="text-gray-500 text-sm flex items-center mt-1">
                        <Calendar size={14} className="mr-1" />
                        {exp.duration}
                      </p>
                      <p className="text-gray-700 mt-2">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-200 mt-6 pt-6">
              <h2 className="text-xl font-semibold mb-3">Education</h2>
              <div className="space-y-4">
                {profile.education.map(edu => (
                  <div key={edu.id} className="flex">
                    <div className="mr-4 mt-1">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      <div className="w-0.5 h-full bg-gray-200 ml-1.5"></div>
                    </div>
                    <div>
                      <h3 className="font-medium">{edu.degree}</h3>
                      <p className="text-gray-600">{edu.institution}</p>
                      <p className="text-gray-500 text-sm flex items-center mt-1">
                        <Calendar size={14} className="mr-1" />
                        {edu.duration}
                      </p>
                      <p className="text-gray-700 mt-1">GPA: {edu.gpa}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-200 mt-6 pt-6">
              <h2 className="text-xl font-semibold mb-3">Placement Journey</h2>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-800 mb-2">Preparation Strategy</h3>
                <p className="text-gray-700 mb-4">{profile.placementJourney.preparation}</p>
                
                <h3 className="font-medium text-blue-800 mb-2">Interview Experience</h3>
                <p className="text-gray-700 mb-4">{profile.placementJourney.interviews}</p>
                
                <h3 className="font-medium text-blue-800 mb-2">Tips for Juniors</h3>
                <p className="text-gray-700">{profile.placementJourney.tips}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
     
    </div>
  );
};

export default ProfilePage;