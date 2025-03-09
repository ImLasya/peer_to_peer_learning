

// import { useState } from 'react';
// import { Edit, Mail, Linkedin, Github as GitHub, Globe, MapPin, Briefcase, GraduationCap, X } from 'lucide-react';

// interface Experience {
//   id: number;
//   company: string;
//   role: string;
//   duration: string;
//   description: string;
// }

// interface Education {
//   id: number;
//   institution: string;
//   degree: string;
//   duration: string;
//   gpa: string;
// }

// interface ProfileState {
//   name: string;
//   role: string;
//   company: string;
//   location: string;
//   batch: string;
//   package: string;
//   email: string;
//   linkedin: string;
//   github: string;
//   website: string;
//   bio: string;
//   image: string;
//   skills: string[];
//   experience: Experience[];
//   education: Education[];
//   placementJourney: {
//     preparation: string;
//     interviews: string;
//     tips: string;
//   };
// }

// const ProfilePage = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [profile, setProfile] = useState<ProfileState>({
//     name: 'Priya Sharma',
//     role: 'Software Engineer',
//     company: 'Google',
//     location: 'Bangalore, India',
//     batch: '2022',
//     package: '32 LPA',
//     email: 'priya.sharma@example.com',
//     linkedin: 'https://linkedin.com/in/priyasharma',
//     github: 'https://github.com/priyasharma',
//     website: 'https://priyasharma.dev',
//     bio: 'Software Engineer at Google with expertise in React, Node.js, and Python. Graduated from XYZ College in 2022 with a B.Tech in Computer Science.',
//     image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
//     skills: ['React', 'Node.js', 'Python', 'JavaScript', 'TypeScript', 'MongoDB', 'Express', 'AWS'],
//     experience: [
//       {
//         id: 1,
//         company: 'Google',
//         role: 'Software Engineer',
//         duration: 'July 2022 - Present',
//         description: 'Working on Google Cloud Platform, developing cloud-based solutions.',
//       },
//       {
//         id: 2,
//         company: 'Microsoft',
//         role: 'Software Engineering Intern',
//         duration: 'Jan 2022 - June 2022',
//         description: 'Worked on Azure team, developing features for cloud services.',
//       },
//     ],
//     education: [
//       {
//         id: 1,
//         institution: 'XYZ College of Engineering',
//         degree: 'B.Tech in Computer Science',
//         duration: '2018 - 2022',
//         gpa: '9.2/10',
//       },
//     ],
//     placementJourney: {
//       preparation: 'Started preparation in 6th semester focusing on DSA...',
//       interviews: 'Interviews with 5 companies...',
//       tips: 'Focus on fundamentals and practice regularly...',
//     },
//   });

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setProfile(prev => ({ ...prev, image: imageUrl }));
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsEditing(false);
//   };

//  const EditModal = ({
//   profile,
//   setProfile,
//   handleSubmit,
//   handleImageChange,
//   setIsEditing
// }: {
//   profile: ProfileState;
//   setProfile: React.Dispatch<React.SetStateAction<ProfileState>>;
//   handleSubmit: (e: React.FormEvent) => void;
//   handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
// }) => (
//   <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//     <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-bold">Edit Profile</h2>
//         <button onClick={() => setIsEditing(false)} className="p-2 hover:bg-gray-100 rounded-full">
//           <X size={24} />
//         </button>
//       </div>
        
//         <form onSubmit={handleSubmit}>
//           {/* Image Upload */}
//           <div className="mb-6">
//             <label className="block text-sm font-medium mb-2">Profile Image</label>
//             <input
//               type="file"
//               onChange={handleImageChange}
//               className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//             />
//             <img
//               src={profile.image}
//               alt="Preview"
//               className="mt-2 w-32 h-32 rounded-full object-cover"
//             />
//           </div>

//           {/* Basic Info */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//             <div>
//               <label className="block text-sm font-medium mb-2">Full Name</label>
//               <input
//                 type="text"
//                 value={profile.name}
//                 onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
//                 className="w-full p-2 border rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-2">Role</label>
//               <input
//                 type="text"
//                 value={profile.role}
//                 onChange={(e) => setProfile(prev => ({ ...prev, role: e.target.value }))}
//                 className="w-full p-2 border rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-2">Company</label>
//               <input
//                 type="text"
//                 value={profile.company}
//                 onChange={(e) => setProfile(prev => ({ ...prev, company: e.target.value }))}
//                 className="w-full p-2 border rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-2">Location</label>
//               <input
//                 type="text"
//                 value={profile.location}
//                 onChange={(e) => setProfile(prev => ({ ...prev, location: e.target.value }))}
//                 className="w-full p-2 border rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-2">Batch</label>
//               <input
//                 type="text"
//                 value={profile.batch}
//                 onChange={(e) => setProfile(prev => ({ ...prev, batch: e.target.value }))}
//                 className="w-full p-2 border rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-2">Package</label>
//               <input
//                 type="text"
//                 value={profile.package}
//                 onChange={(e) => setProfile(prev => ({ ...prev, package: e.target.value }))}
//                 className="w-full p-2 border rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-2">Email</label>
//               <input
//                 type="email"
//                 value={profile.email}
//                 onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
//                 className="w-full p-2 border rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-2">LinkedIn URL</label>
//               <input
//                 type="url"
//                 value={profile.linkedin}
//                 onChange={(e) => setProfile(prev => ({ ...prev, linkedin: e.target.value }))}
//                 className="w-full p-2 border rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-2">GitHub URL</label>
//               <input
//                 type="url"
//                 value={profile.github}
//                 onChange={(e) => setProfile(prev => ({ ...prev, github: e.target.value }))}
//                 className="w-full p-2 border rounded-md"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-2">Website URL</label>
//               <input
//                 type="url"
//                 value={profile.website}
//                 onChange={(e) => setProfile(prev => ({ ...prev, website: e.target.value }))}
//                 className="w-full p-2 border rounded-md"
//               />
//             </div>
//           </div>

//           {/* Bio */}
//           <div className="mb-6">
//             <label className="block text-sm font-medium mb-2">Bio</label>
//             <textarea
//               value={profile.bio}
//               onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
//               className="w-full p-2 border rounded-md h-32"
//             />
//           </div>

//           {/* Skills */}
//           <div className="mb-6">
//             <label className="block text-sm font-medium mb-2">Skills (comma separated)</label>
//             <input
//               type="text"
//               value={profile.skills.join(', ')}
//               onChange={(e) => setProfile(prev => ({
//                 ...prev,
//                 skills: e.target.value.split(', ').filter(skill => skill)
//               }))}
//               className="w-full p-2 border rounded-md"
//             />
//           </div>

//           {/* Experience */}
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold mb-4">Experience</h3>
//             {profile.experience.map((exp, index) => (
//               <div key={exp.id} className="mb-6 border-t pt-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium mb-2">Company</label>
//                     <input
//                       type="text"
//                       value={exp.company}
//                       onChange={(e) => setProfile(prev => {
//                         const newExp = [...prev.experience];
//                         newExp[index].company = e.target.value;
//                         return { ...prev, experience: newExp };
//                       })}
//                       className="w-full p-2 border rounded-md"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2">Role</label>
//                     <input
//                       type="text"
//                       value={exp.role}
//                       onChange={(e) => setProfile(prev => {
//                         const newExp = [...prev.experience];
//                         newExp[index].role = e.target.value;
//                         return { ...prev, experience: newExp };
//                       })}
//                       className="w-full p-2 border rounded-md"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2">Duration</label>
//                     <input
//                       type="text"
//                       value={exp.duration}
//                       onChange={(e) => setProfile(prev => {
//                         const newExp = [...prev.experience];
//                         newExp[index].duration = e.target.value;
//                         return { ...prev, experience: newExp };
//                       })}
//                       className="w-full p-2 border rounded-md"
//                     />
//                   </div>
//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-medium mb-2">Description</label>
//                     <textarea
//                       value={exp.description}
//                       onChange={(e) => setProfile(prev => {
//                         const newExp = [...prev.experience];
//                         newExp[index].description = e.target.value;
//                         return { ...prev, experience: newExp };
//                       })}
//                       className="w-full p-2 border rounded-md h-24"
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Education */}
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold mb-4">Education</h3>
//             {profile.education.map((edu, index) => (
//               <div key={edu.id} className="mb-6 border-t pt-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium mb-2">Institution</label>
//                     <input
//                       type="text"
//                       value={edu.institution}
//                       onChange={(e) => setProfile(prev => {
//                         const newEdu = [...prev.education];
//                         newEdu[index].institution = e.target.value;
//                         return { ...prev, education: newEdu };
//                       })}
//                       className="w-full p-2 border rounded-md"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2">Degree</label>
//                     <input
//                       type="text"
//                       value={edu.degree}
//                       onChange={(e) => setProfile(prev => {
//                         const newEdu = [...prev.education];
//                         newEdu[index].degree = e.target.value;
//                         return { ...prev, education: newEdu };
//                       })}
//                       className="w-full p-2 border rounded-md"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2">Duration</label>
//                     <input
//                       type="text"
//                       value={edu.duration}
//                       onChange={(e) => setProfile(prev => {
//                         const newEdu = [...prev.education];
//                         newEdu[index].duration = e.target.value;
//                         return { ...prev, education: newEdu };
//                       })}
//                       className="w-full p-2 border rounded-md"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2">GPA</label>
//                     <input
//                       type="text"
//                       value={edu.gpa}
//                       onChange={(e) => setProfile(prev => {
//                         const newEdu = [...prev.education];
//                         newEdu[index].gpa = e.target.value;
//                         return { ...prev, education: newEdu };
//                       })}
//                       className="w-full p-2 border rounded-md"
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Placement Journey */}
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold mb-4">Placement Journey</h3>
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium mb-2">Preparation Strategy</label>
//                 <textarea
//                   value={profile.placementJourney.preparation}
//                   onChange={(e) => setProfile(prev => ({
//                     ...prev,
//                     placementJourney: {
//                       ...prev.placementJourney,
//                       preparation: e.target.value
//                     }
//                   }))}
//                   className="w-full p-2 border rounded-md h-32"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-2">Interview Experience</label>
//                 <textarea
//                   value={profile.placementJourney.interviews}
//                   onChange={(e) => setProfile(prev => ({
//                     ...prev,
//                     placementJourney: {
//                       ...prev.placementJourney,
//                       interviews: e.target.value
//                     }
//                   }))}
//                   className="w-full p-2 border rounded-md h-32"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-2">Tips for Juniors</label>
//                 <textarea
//                   value={profile.placementJourney.tips}
//                   onChange={(e) => setProfile(prev => ({
//                     ...prev,
//                     placementJourney: {
//                       ...prev.placementJourney,
//                       tips: e.target.value
//                     }
//                   }))}
//                   className="w-full p-2 border rounded-md h-32"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-end gap-4 mt-8">
//             <button
//               type="button"
//               onClick={() => setIsEditing(false)}
//               className="px-4 py-2 text-gray-600 hover:text-gray-800"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//             >
//               Save Changes
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col">
//       <main className="flex-grow container mx-auto px-4 py-8">
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-48 relative">
//             <div className="absolute -bottom-16 left-8">
//               <img 
//                 src={profile.image} 
//                 alt={profile.name} 
//                 className="w-32 h-32 rounded-full border-4 border-white object-cover"
//               />
//             </div>
//           </div>
          
//           <div className="pt-20 pb-8 px-8">
//             <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
//               <div>
//                 <h1 className="text-3xl font-bold">{profile.name}</h1>
//                 <p className="text-gray-600 flex items-center mt-1">
//                   <Briefcase size={18} className="mr-2" />
//                   {profile.role} at {profile.company}
//                 </p>
//                 <p className="text-gray-600 flex items-center mt-1">
//                   <MapPin size={18} className="mr-2" />
//                   {profile.location}
//                 </p>
//                 <p className="text-gray-600 flex items-center mt-1">
//                   <GraduationCap size={18} className="mr-2" />
//                   Batch of {profile.batch} • Package: {profile.package}
//                 </p>
//               </div>
              
//               <div className="mt-4 md:mt-0 flex space-x-3">
//                 <button
//                   onClick={() => setIsEditing(true)}
//                   className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
//                   title="Edit Profile"
//                 >
//                   <Edit size={20} />
//                 </button>
//                 <a 
//                   href={`mailto:${profile.email}`} 
//                   className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
//                   title="Email"
//                 >
//                   <Mail size={20} />
//                 </a>
//                 <a 
//                   href={profile.linkedin} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
//                   title="LinkedIn"
//                 >
//                   <Linkedin size={20} />
//                 </a>
//                 <a 
//                   href={profile.github} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
//                   title="GitHub"
//                 >
//                   <GitHub size={20} />
//                 </a>
//                 <a 
//                   href={profile.website} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
//                   title="Website"
//                 >
//                   <Globe size={20} />
//                 </a>
//               </div>
//             </div>

//             <p className="text-gray-700">{profile.bio}</p>

//             {/* Skills */}
//             <div className="mt-6">
//               <h3 className="text-lg font-semibold mb-2">Skills</h3>
//               <div className="flex flex-wrap gap-2">
//                 {profile.skills.map(skill => (
//                   <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Experience */}
//             <div className="mt-6">
//               <h3 className="text-lg font-semibold mb-2">Experience</h3>
//               {profile.experience.map(exp => (
//                 <div key={exp.id} className="border-t pt-4 mt-4">
//                   <h4 className="text-md font-semibold">{exp.role} at {exp.company}</h4>
//                   <p className="text-gray-600 text-sm">{exp.duration}</p>
//                   <p className="text-gray-700">{exp.description}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Education */}
//             <div className="mt-6">
//               <h3 className="text-lg font-semibold mb-2">Education</h3>
//               {profile.education.map(edu => (
//                 <div key={edu.id} className="border-t pt-4 mt-4">
//                   <h4 className="text-md font-semibold">{edu.degree} at {edu.institution}</h4>
//                   <p className="text-gray-600 text-sm">{edu.duration}</p>
//                   <p className="text-gray-700">GPA: {edu.gpa}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Placement Journey */}
//             <div className="mt-6">
//               <h3 className="text-lg font-semibold mb-2">Placement Journey</h3>
//               <div className="mt-4 border-t pt-4">
//                 <h4 className="text-md font-semibold">Preparation Strategy</h4>
//                 <p className="text-gray-700">{profile.placementJourney.preparation}</p>
//               </div>
//               <div className="mt-4 border-t pt-4">
//                 <h4 className="text-md font-semibold">Interview Experience</h4>
//                 <p className="text-gray-700">{profile.placementJourney.interviews}</p>
//               </div>
//               <div className="mt-4 border-t pt-4">
//                 <h4 className="text-md font-semibold">Tips for Juniors</h4>
//                 <p className="text-gray-700">{profile.placementJourney.tips}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {isEditing && <EditModal />}
//     </div>
//   );
// };

// export default ProfilePage;
import { useState, useCallback } from 'react';
import { Edit, Mail, Linkedin, Github as GitHub, Globe, MapPin, Briefcase, GraduationCap, X } from 'lucide-react';

interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  description: string;
}

interface Education {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  gpa: string;
}

interface ProfileState {
  name: string;
  role: string;
  company: string;
  location: string;
  batch: string;
  package: string;
  email: string;
  linkedin: string;
  github: string;
  website: string;
  bio: string;
  image: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  placementJourney: {
    preparation: string;
    interviews: string;
    tips: string;
  };
}

const EditModal = ({
  profile,
  setProfile,
  handleSubmit,
  handleImageChange,
  setIsEditing
}: {
  profile: ProfileState;
  setProfile: React.Dispatch<React.SetStateAction<ProfileState>>;
  handleSubmit: (e: React.FormEvent) => void;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Edit Profile</h2>
          <button 
            onClick={() => setIsEditing(false)} 
            className="p-2 hover:bg-gray-100 rounded-full"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          {/* Image Upload */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Profile Image</label>
            <input
              type="file"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              accept="image/*"
            />
            <img
              src={profile.image}
              alt="Preview"
              className="mt-2 w-32 h-32 rounded-full object-cover"
            />
          </div>

          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              { label: 'Full Name', value: profile.name, key: 'name' },
              { label: 'Role', value: profile.role, key: 'role' },
              { label: 'Company', value: profile.company, key: 'company' },
              { label: 'Location', value: profile.location, key: 'location' },
              { label: 'Batch', value: profile.batch, key: 'batch' },
              { label: 'Package', value: profile.package, key: 'package' },
              { label: 'Email', value: profile.email, key: 'email', type: 'email' },
              { label: 'LinkedIn URL', value: profile.linkedin, key: 'linkedin', type: 'url' },
              { label: 'GitHub URL', value: profile.github, key: 'github', type: 'url' },
              { label: 'Website URL', value: profile.website, key: 'website', type: 'url' },
            ].map((field) => (
              <div key={field.key}>
                <label className="block text-sm font-medium mb-2">{field.label}</label>
                <input
                  type={field.type || 'text'}
                  value={field.value}
                  onChange={(e) => setProfile(prev => ({ ...prev, [field.key]: e.target.value }))}
                  className="w-full p-2 border rounded-md"
                />
              </div>
            ))}
          </div>

          {/* Bio */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Bio</label>
            <textarea
              value={profile.bio}
              onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
              className="w-full p-2 border rounded-md h-32"
            />
          </div>

          {/* Skills */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Skills (comma separated)</label>
            <input
              type="text"
              value={profile.skills.join(', ')}
              onChange={(e) => setProfile(prev => ({
                ...prev,
                skills: e.target.value.split(', ').filter(skill => skill)
              }))}
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Experience */}
<div className="mb-6">
  <h3 className="text-lg font-semibold mb-4">Experience</h3>
  {profile.experience.map((exp, index) => (
    <div key={exp.id} className="mb-6 border-t pt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { label: 'Company', value: exp.company, key: 'company' },
          { label: 'Role', value: exp.role, key: 'role' },
          { label: 'Duration', value: exp.duration, key: 'duration' },
        ].map((field) => (
          <div key={field.key}>
            <label className="block text-sm font-medium mb-2">{field.label}</label>
            <input
              type="text"
              value={field.value}
              onChange={(e) => setProfile(prev => {
                const newExp = [...prev.experience];
                (newExp[index] as Record<string, any>)[field.key] = e.target.value;
                return { ...prev, experience: newExp };
              })}
              className="w-full p-2 border rounded-md"
            />
          </div>
        ))}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            value={exp.description}
            onChange={(e) => setProfile(prev => {
              const newExp = [...prev.experience];
              newExp[index].description = e.target.value;
              return { ...prev, experience: newExp };
            })}
            className="w-full p-2 border rounded-md h-24"
          />
        </div>
      </div>
    </div>
  ))}
</div>

{/* Education */}
<div className="mb-6">
  <h3 className="text-lg font-semibold mb-4">Education</h3>
  {profile.education.map((edu, index) => (
    <div key={edu.id} className="mb-6 border-t pt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { label: 'Institution', value: edu.institution, key: 'institution' },
          { label: 'Degree', value: edu.degree, key: 'degree' },
          { label: 'Duration', value: edu.duration, key: 'duration' },
          { label: 'GPA', value: edu.gpa, key: 'gpa' },
        ].map((field) => (
          <div key={field.key}>
            <label className="block text-sm font-medium mb-2">{field.label}</label>
            <input
              type="text"
              value={field.value}
              onChange={(e) => setProfile(prev => {
                const newEdu = [...prev.education];
                (newEdu[index] as Record<string, any>)[field.key] = e.target.value;
                return { ...prev, education: newEdu };
              })}
              className="w-full p-2 border rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

          {/* Placement Journey */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Placement Journey</h3>
            <div className="space-y-4">
              {[
                { label: 'Preparation Strategy', key: 'preparation', value: profile.placementJourney.preparation },
                { label: 'Interview Experience', key: 'interviews', value: profile.placementJourney.interviews },
                { label: 'Tips for Juniors', key: 'tips', value: profile.placementJourney.tips },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-medium mb-2">{field.label}</label>
                  <textarea
                    value={field.value}
                    onChange={(e) => setProfile(prev => ({
                      ...prev,
                      placementJourney: {
                        ...prev.placementJourney,
                        [field.key]: e.target.value
                      }
                    }))}
                    className="w-full p-2 border rounded-md h-32"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<ProfileState>({
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
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    skills: ['React', 'Node.js', 'Python', 'JavaScript', 'TypeScript', 'MongoDB', 'Express', 'AWS'],
    experience: [
      {
        id: 1,
        company: 'Google',
        role: 'Software Engineer',
        duration: 'July 2022 - Present',
        description: 'Working on Google Cloud Platform, developing cloud-based solutions.',
      },
      {
        id: 2,
        company: 'Microsoft',
        role: 'Software Engineering Intern',
        duration: 'Jan 2022 - June 2022',
        description: 'Worked on Azure team, developing features for cloud services.',
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
      preparation: 'Started preparation in 6th semester focusing on DSA...',
      interviews: 'Interviews with 5 companies...',
      tips: 'Focus on fundamentals and practice regularly...',
    },
  });

  const handleImageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile(prev => ({ ...prev, image: imageUrl }));
    }
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
  }, []);

   return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
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
                <button
                  onClick={() => setIsEditing(true)}
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  title="Edit Profile"
                >
                  <Edit size={20} />
                </button>
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
                  title="Website"
                >
                  <Globe size={20} />
                </a>
              </div>
            </div>

            <p className="text-gray-700">{profile.bio}</p>

            {/* Skills */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Experience</h3>
              {profile.experience.map(exp => (
                <div key={exp.id} className="border-t pt-4 mt-4">
                  <h4 className="text-md font-semibold">{exp.role} at {exp.company}</h4>
                  <p className="text-gray-600 text-sm">{exp.duration}</p>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              {profile.education.map(edu => (
                <div key={edu.id} className="border-t pt-4 mt-4">
                  <h4 className="text-md font-semibold">{edu.degree} at {edu.institution}</h4>
                  <p className="text-gray-600 text-sm">{edu.duration}</p>
                  <p className="text-gray-700">GPA: {edu.gpa}</p>
                </div>
              ))}
            </div>

            {/* Placement Journey */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Placement Journey</h3>
              <div className="mt-4 border-t pt-4">
                <h4 className="text-md font-semibold">Preparation Strategy</h4>
                <p className="text-gray-700">{profile.placementJourney.preparation}</p>
              </div>
              <div className="mt-4 border-t pt-4">
                <h4 className="text-md font-semibold">Interview Experience</h4>
                <p className="text-gray-700">{profile.placementJourney.interviews}</p>
              </div>
              <div className="mt-4 border-t pt-4">
                <h4 className="text-md font-semibold">Tips for Juniors</h4>
                <p className="text-gray-700">{profile.placementJourney.tips}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {isEditing && (
        <EditModal
          profile={profile}
          setProfile={setProfile}
          handleSubmit={handleSubmit}
          handleImageChange={handleImageChange}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default ProfilePage;