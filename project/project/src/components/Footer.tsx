// // // // import React from 'react';
// // // import { Link } from 'react-router-dom';
// // // // import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

// // // const Footer = () => {
// // //   return (
// // //     <footer className="bg-gray-900 text-white">
// // //       <div className="container mx-auto px-4 py-12">
// // //         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
// // //           {/* About */}
// // //           <div>
// // //             <h3 className="text-xl font-bold mb-4">PeerConnect</h3>
// // //             <p className="text-gray-400 mb-4">
// // //               Connecting students with successful graduates for better career guidance and placement opportunities.
// // //             </p>
           
// // //           </div>
          
// // //           {/* Quick Links */}
// // //           <div>
// // //             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
// // //             <ul className="space-y-2">
// // //               <li>
// // //                 <Link to="/" className="text-gray-400 hover:text-white transition-colors">
// // //                   Home
// // //                 </Link>
// // //               </li>
// // //               <li>
// // //                 <Link to="/seniors" className="text-gray-400 hover:text-white transition-colors">
// // //                   Seniors
// // //                 </Link>
// // //               </li>
// // //               <li>
// // //                 <Link to="/companies" className="text-gray-400 hover:text-white transition-colors">
// // //                   Companies
// // //                 </Link>
// // //               </li>
// // //               <li>
// // //                 <Link to="/resources" className="text-gray-400 hover:text-white transition-colors">
// // //                   Resources
// // //                 </Link>
// // //               </li>
// // //             </ul>
// // //           </div>
          
// // //           {/* Resources */}
// // //           {/* <div>
// // //             <h4 className="text-lg font-semibold mb-4">Resources</h4>
// // //             <ul className="space-y-2">
// // //               <li>
// // //                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
// // //                   Blog
// // //                 </a>
// // //               </li>
// // //               <li>
// // //                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
// // //                   Interview Prep
// // //                 </a>
// // //               </li>
// // //               <li>
// // //                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
// // //                   Resume Builder
// // //                 </a>
// // //               </li>
// // //               <li>
// // //                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
// // //                   FAQ
// // //                 </a>
// // //               </li>
// // //             </ul>
// // //           </div> */}
          
// // //           {/* Contact */}
// // //           <div>
// // //             <h4 className="text-lg font-semibold mb-4">Contact</h4>
// // //             <ul className="space-y-2 text-gray-400">
// // //               <li>Email: info@peerconnect.com</li>
// // //               <li>Phone: +1 (123) 456-7890</li>
// // //               <li>Address: 123 College Street, Tech City, 12345</li>
// // //             </ul>
// // //           </div>
// // //         </div>
        
// // //         <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
// // //           <p>&copy; {new Date().getFullYear()} PeerConnect. All rights reserved.</p>
// // //         </div>
// // //       </div>
// // //     </footer>
// // //   );
// // // };

// // // export default Footer;

// // import { Link } from 'react-router-dom'; // Add this import

// // const Footer = () => {
// //   return (
// //     <footer className="bg-[#0a0a1a] border-t border-[#00ffff33] relative overflow-hidden">
// //       <div className="container mx-auto px-4 py-12 relative z-10">
// //         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
// //           {/* About */}
// //           <div>
// //             <h3 className="text-xl font-bold mb-4 text-[#00ffff] neon-text">PeerConnect</h3>
// //             <p className="text-[#d0d0f0] mb-4">
// //               Connecting students with successful graduates for better career guidance and placement opportunities.
// //             </p>
// //           </div>
          
// //           {/* Quick Links */}
// //           <div>
// //             <h4 className="text-lg font-semibold mb-4 text-[#00ffff] neon-text">Quick Links</h4>
// //             <ul className="space-y-2">
// //               <li>
// //                 <Link to="/" className="text-[#d0d0f0] hover:text-[#00ffff] transition-all duration-300">
// //                   Home
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link to="/seniors" className="text-[#d0d0f0] hover:text-[#00ffff] transition-all duration-300">
// //                   Seniors
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link to="/companies" className="text-[#d0d0f0] hover:text-[#00ffff] transition-all duration-300">
// //                   Companies
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link to="/resources" className="text-[#d0d0f0] hover:text-[#00ffff] transition-all duration-300">
// //                   Resources
// //                 </Link>
// //               </li>
// //             </ul>
// //           </div>

// //           {/* Contact */}
// //           <div>
// //             <h4 className="text-lg font-semibold mb-4 text-[#00ffff] neon-text">Contact</h4>
// //             <ul className="space-y-2 text-[#d0d0f0]">
// //               <li>Email: info@peerconnect.com</li>
// //               <li>Phone: +1 (123) 456-7890</li>
// //               <li>Address: 123 College Street, Tech City, 12345</li>
// //             </ul>
// //           </div>
// //         </div>
        
// //         <div className="border-t border-[#00ffff33] mt-8 pt-8 text-center text-[#d0d0f0]">
// //           <p className="neon-text">&copy; {new Date().getFullYear()} PeerConnect. All rights reserved.</p>
// //         </div>
// //       </div>

// //       {/* Grid pattern background */}
// //       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0tMSAxTDkgLTFNMCA5TDkgME0wIDBMMCA5TDkgOSIgc3Ryb2tlPSIjMDA1MTUxIi8+PC9zdmc+')] opacity-10 z-0"></div>
      
// //       <style jsx>{`
// //         .neon-text {
// //           text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
// //         }
// //         .hover\:text-\[\\#00ffff\]:hover {
// //           text-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
// //         }
// //       `}</style>
// //     </footer>
// //   );
// // };

// // export default Footer;
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="bg-[#0a0a1a] border-t-2 border-[#00ffff] shadow-[0_0_30px_rgba(0,255,255,0.2)] mt-16 relative overflow-hidden">
//       <div className="container mx-auto px-4 py-12 relative z-10">
//         {/* Grid pattern overlay */}
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMEgxNlYxNkgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xNiAwSDB2MTZIMHYtMTZIMHYwaDE2VjB6IiBzdHJva2U9IiMwMDVmNWYiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')] opacity-10 z-0"></div>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
//           {/* Brand Section */}
//           <div className="space-y-4">
//             <Link to="/" className="flex items-center space-x-2 group">
//               <div className="bg-gradient-to-r from-[#00ffff] to-[#ff00ff] p-2 rounded-full shadow-[0_0_15px_rgba(0,255,255,0.3)]">
//                 <div className="w-8 h-8 bg-white rounded-full" />
//               </div>
//               <span className="text-2xl font-bold bg-gradient-to-r from-[#00ffff] to-[#ff00ff] bg-clip-text text-transparent">
//                 PeerConnect
//               </span>
//             </Link>
//             <p className="text-[#d0d0f0] text-sm leading-relaxed">
//               Bridging generations of tech talent through digital mentorship and career guidance.
//             </p>
//           </div>

//           {/* Navigation Links */}
//           <div className="space-y-4">
//             <h4 className="text-lg font-bold text-[#00ffff] border-l-4 border-[#ff00ff] pl-3">Quick Access</h4>
//             <nav className="grid grid-cols-2 gap-4">
//               <Link to="/seniors" className="text-[#d0d0f0] hover:text-[#00ffff] transition-all group">
//                 <span className="group-hover:text-[#ff00ff]">▹</span> Seniors
//               </Link>
//               <Link to="/companies" className="text-[#d0d0f0] hover:text-[#00ffff] transition-all group">
//                 <span className="group-hover:text-[#ff00ff]">▹</span> Companies
//               </Link>
//               <Link to="/resources" className="text-[#d0d0f0] hover:text-[#00ffff] transition-all group">
//                 <span className="group-hover:text-[#ff00ff]">▹</span> Resources
//               </Link>
//               <Link to="/profile" className="text-[#d0d0f0] hover:text-[#00ffff] transition-all group">
//                 <span className="group-hover:text-[#ff00ff]">▹</span> Profile
//               </Link>
//             </nav>
//           </div>

//           {/* Contact Information */}
//           <div className="space-y-4">
//             <h4 className="text-lg font-bold text-[#00ffff] border-l-4 border-[#ff00ff] pl-3">Cyber Hub</h4>
//             <ul className="space-y-3 text-[#d0d0f0]">
//               <li className="flex items-center space-x-2">
//                 <span className="text-[#ff00ff]">⟁</span>
//                 <span>123 Tech Valley, Digital City</span>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <span className="text-[#ff00ff]">⟠</span>
//                 <span>connect@peer.io</span>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <span className="text-[#ff00ff]">⧉</span>
//                 <span>+91 98765 43210</span>
//               </li>
//             </ul>
//           </div>

//           {/* Social Links */}
//           <div className="space-y-4">
//             <h4 className="text-lg font-bold text-[#00ffff] border-l-4 border-[#ff00ff] pl-3">Network Nodes</h4>
//             <div className="flex space-x-4">
//               <a href="#" className="p-2 bg-[#00ffff22] rounded-full hover:bg-[#00ffff44] transition-colors">
//                 <span className="text-[#00ffff]">⧊</span>
//               </a>
//               <a href="#" className="p-2 bg-[#00ffff22] rounded-full hover:bg-[#00ffff44] transition-colors">
//                 <span className="text-[#ff00ff]">⧋</span>
//               </a>
//               <a href="#" className="p-2 bg-[#00ffff22] rounded-full hover:bg-[#00ffff44] transition-colors">
//                 <span className="text-[#00ffff]">⧌</span>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Copyright Section */}
//         <div className="border-t border-[#00ffff33] mt-8 pt-8 text-center">
//           <p className="text-[#d0d0f0] text-sm">
//             © {new Date().getFullYear()} PEERCONNECT v4.2.1 | 
//             <span className="mx-2 text-[#ff00ff]">▲▼</span>
//             ALL SYSTEMS OPERATIONAL
//           </p>
//           <div className="mt-2 flex justify-center space-x-4">
//             <span className="text-[#00ffff] text-sm">TERMS OF SERVICE</span>
//             <span className="text-[#ff00ff]">⫶</span>
//             <span className="text-[#00ffff] text-sm">DATA POLICY</span>
//           </div>
//         </div>
//       </div>

//       {/* Glowing border effect */}
//       <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#00ffff] via-[#ff00ff] to-[#00ffff] opacity-30"></div>
//     </footer>
//   );
// };

// export default Footer;
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a1a] border-t-2 border-[#00ffff] shadow-[0_0_30px_rgba(0,255,255,0.2)] mt-16 relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 relative z-10 max-w-4xl"> {/* Reduced max-width */}
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMEgxNlYxNkgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xNiAwSDB2MTZIMHYtMTZIMHYwaDE2VjB6IiBzdHJva2U9IiMwMDVmNWYiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')] opacity-10 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"> {/* Changed to 2-column grid */}
          
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-r from-[#00ffff] to-[#ff00ff] p-2 rounded-full shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                <div className="w-8 h-8 bg-white rounded-full" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#00ffff] to-[#ff00ff] bg-clip-text text-transparent">
                PeerConnect
              </span>
            </Link>
            <p className="text-[#d0d0f0] text-sm leading-relaxed pr-8">
              Bridging generations through digital mentorship.
            </p>
          </div>

          {/* Combined Sections */}
          <div className="grid grid-cols-2 gap-8">
            {/* Navigation Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-[#00ffff] border-l-4 border-[#ff00ff] pl-3">Quick Access</h4>
              <nav className="space-y-3">
                <Link to="/seniors" className="block text-[#d0d0f0] hover:text-[#00ffff] transition-all group">
                  <span className="group-hover:text-[#ff00ff]">▹</span> Seniors
                </Link>
                <Link to="/companies" className="block text-[#d0d0f0] hover:text-[#00ffff] transition-all group">
                  <span className="group-hover:text-[#ff00ff]">▹</span> Companies
                </Link>
                <Link to="/resources" className="block text-[#d0d0f0] hover:text-[#00ffff] transition-all group">
                  <span className="group-hover:text-[#ff00ff]">▹</span> Resources
                </Link>
              </nav>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-[#00ffff] border-l-4 border-[#ff00ff] pl-3">Contact</h4>
              <ul className="space-y-3 text-[#d0d0f0]">
                <li className="flex items-center space-x-2">
                  <span className="text-[#ff00ff]">⟠</span>
                  <span>connect@peer.io</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-[#ff00ff]">⧉</span>
                  <span>+91 98765 43210</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-[#00ffff33] mt-8 pt-8 text-center">
          <p className="text-[#d0d0f0] text-sm">
            © {new Date().getFullYear()} PEERCONNECT v4.2.1  
            {/* <span className="mx-2 text-[#ff00ff]">▲▼</span>
            ALL SYSTEMS NOMINAL */}
          </p>
          <div className="mt-2 flex justify-center space-x-4">
            <span className="text-[#00ffff] text-sm">TERMS</span>
            <span className="text-[#ff00ff]">⫶</span>
            <span className="text-[#00ffff] text-sm">POLICY</span>
          </div>
        </div>
      </div>

      {/* Glowing border effect */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#00ffff] via-[#ff00ff] to-[#00ffff] opacity-30"></div>
      
      {/* Side glow effects */}
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#00ffff] to-[#ff00ff] opacity-20"></div>
      <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-[#ff00ff] to-[#00ffff] opacity-20"></div>
    </footer>
  );
};

export default Footer;