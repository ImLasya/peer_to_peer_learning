// export interface Senior {
//     id: number;
//     name: string;
//     company: string;
//     role: string;
//     batch: string;
//     package: string;
//     image: string;
//     skills: string[];
//     linkedin: string;
    
//     // Profile Page Fields
//     campus?: 'Nuzvid' | 'Sklm' | 'Ong' | 'RK Valley';
//     branch?: 'CSE' | 'ECE' | 'Mechanical' | 'Civil';
//     bio?: string;
//     projects?: string[];
//     internships?: string[];
//     certifications?: string[];
//     collegeAchievements?: string[];
//   }
  
//   export const seniorsData: Senior[] = [
//     {
//       id: 1,
//       name: 'Priya Sharma',
//       company: 'Google',
//       role: 'Software Engineer',
//       batch: '2022',
//       package: '32 LPA',
//       image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
//       skills: ['React', 'Node.js', 'Python'],
//       linkedin: 'https://linkedin.com/in/priyasharma',
//       campus: 'Nuzvid',
//       branch: 'CSE',
//       bio: 'CSE graduate from RGUKT Nuzvid. Google STEP Intern 2021. Active member of coding club.',
//       projects: [
//         'AI-based Attendance System',
//         'Smart Campus Navigation'
//       ],
//       internships: [
//         'Google Summer Intern (2021)',
//         'Microsoft Code.Fun.Do Winner'
//       ],
//       collegeAchievements: [
//         'Best Outgoing Student 2022',
//         'Smart India Hackathon Finalist'
//       ]
//     },
//     {
//       id: 2,
//       name: 'Rahul Verma',
//       company: 'Microsoft',
//       role: 'Product Manager',
//       batch: '2021',
//       package: '28 LPA',
//       image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
//       skills: ['Product Management', 'UX Design'],
//       linkedin: 'https://linkedin.com/in/rahulverma',
//       campus: 'Sklm',
//       branch: 'ECE',
//       bio: 'ECE graduate with specialization in IoT. Microsoft Engage Finalist.',
//       projects: [
//         'Smart Traffic Management System',
//         'IoT-based Health Monitor'
//       ],
//       internships: [
//         'Intel Hardware Intern (2020)',
//         'Qualcomm Research Challenge Winner'
//       ],
//       certifications: [
//         'AWS Certified Solutions Architect',
//         'Google PM Certification'
//       ]
//     },
//     {
//       id: 3,
//       name: 'Ananya Patel',
//       company: 'Amazon',
//       role: 'SDE',
//       batch: '2022',
//       package: '30 LPA',
//       image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
//       skills: ['Java', 'AWS', 'Algorithms'],
//       linkedin: 'https://linkedin.com/in/ananyapatel',
//       campus: 'Ong',
//       branch: 'Mechanical',
//       bio: 'Mechanical graduate turned SDE. Amazon WOW Scholarship recipient.',
//       projects: [
//         'Automated Result Analysis System',
//         'College ERP Portal'
//       ],
//       internships: [
//         'Amazon ML Summer School (2021)',
//         'Goldman Sachs Engineering Virtual Program'
//       ],
//       collegeAchievements: [
//         'GirlScript India Finalist',
//         'Technical Secretary 2021-22'
//       ]
//     },
//     {
//       id: 4,
//       name: 'Vikram Singh',
//       company: 'Adobe',
//       role: 'UI/UX Designer',
//       batch: '2021',
//       package: '24 LPA',
//       image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
//       skills: ['Figma', 'Adobe XD', 'UI Design'],
//       linkedin: 'https://linkedin.com/in/vikramsingh',
//       campus: 'RK Valley',
//       branch: 'Civil',
//       bio: 'Civil engineering graduate with passion for design. Adobe Design Challenge winner.',
//       projects: [
//         'Campus Navigation AR App',
//         'Alumni Portal Design'
//       ],
//       internships: [
//         'Adobe Design Intern (2020)',
//         'Internshala Design Challenge Winner'
//       ],
//       certifications: [
//         'Google UX Design Professional Certificate',
//         'Adobe Certified Expert'
//       ]
//     }
//   ];

export interface Senior {
    id: number;
    name: string;
    company: string;
    role: string;
    batch: string;
    package: string;
    image: string;
    skills: string[];
    linkedin: string;
    email?: string;  // Added email
    github?: string; // Added github
    
    // Profile Page Fields
    campus?: 'Nuzvid' | 'Sklm' | 'Ong' | 'RK Valley';
    branch?: 'CSE' | 'ECE' | 'Mechanical' | 'Civil';
    bio?: string;
    projects?: string[];
    internships?: string[];
    certifications?: string[];
    collegeAchievements?: string[];
  }
  
  export const seniorsData: Senior[] = [
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
      email: 'priya.sharma@google.com', // Added email
      github: 'https://github.com/priyasharma', // Added github
      campus: 'Nuzvid',
      branch: 'CSE',
      bio: 'CSE graduate from RGUKT Nuzvid. Google STEP Intern 2021. Active member of coding club.',
      projects: [
        'AI-based Attendance System',
        'Smart Campus Navigation'
      ],
      internships: [
        'Google Summer Intern (2021)',
        'Microsoft Code.Fun.Do Winner'
      ],
      collegeAchievements: [
        'Best Outgoing Student 2022',
        'Smart India Hackathon Finalist'
      ]
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
      email: 'rahul.verma@microsoft.com', // Added email
      github: 'https://github.com/rahulverma-pm', // Added github
      campus: 'Sklm',
      branch: 'ECE',
      bio: 'ECE graduate with specialization in IoT. Microsoft Engage Finalist.',
      projects: [
        'Smart Traffic Management System',
        'IoT-based Health Monitor'
      ],
      internships: [
        'Intel Hardware Intern (2020)',
        'Qualcomm Research Challenge Winner'
      ],
      certifications: [
        'AWS Certified Solutions Architect',
        'Google PM Certification'
      ]
    },
    {
      id: 3,
      name: 'Ananya Patel',
      company: 'Amazon',
      role: 'SDE',
      batch: '2022',
      package: '30 LPA',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
      skills: ['Java', 'AWS', 'Algorithms'],
      linkedin: 'https://linkedin.com/in/ananyapatel',
      email: 'ananya.patel@amazon.com', // Added email
      github: 'https://github.com/ananya-sde', // Added github
      campus: 'Ong',
      branch: 'Mechanical',
      bio: 'Mechanical graduate turned SDE. Amazon WOW Scholarship recipient.',
      projects: [
        'Automated Result Analysis System',
        'College ERP Portal'
      ],
      internships: [
        'Amazon ML Summer School (2021)',
        'Goldman Sachs Engineering Virtual Program'
      ],
      collegeAchievements: [
        'GirlScript India Finalist',
        'Technical Secretary 2021-22'
      ]
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
      email: 'vikram.singh@adobe.com', // Added email
      github: 'https://github.com/vikramdesigns', // Added github
      campus: 'RK Valley',
      branch: 'Civil',
      bio: 'Civil engineering graduate with passion for design. Adobe Design Challenge winner.',
      projects: [
        'Campus Navigation AR App',
        'Alumni Portal Design'
      ],
      internships: [
        'Adobe Design Intern (2020)',
        'Internshala Design Challenge Winner'
      ],
      certifications: [
        'Google UX Design Professional Certificate',
        'Adobe Certified Expert'
      ]
    }
  ];