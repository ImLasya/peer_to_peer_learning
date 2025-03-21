// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X, User, LogOut, Settings } from 'lucide-react';
// import { useAuth } from '../context/AuthContext'; // Import useAuth

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
//   const {  user, logout } = useAuth(); // Use useAuth

//   return (
//     <nav className="bg-white shadow-md">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link to="/home" className="flex items-center space-x-2">
//             <div className="bg-blue-600 text-white p-2 rounded-full">
//               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//                 <circle cx="9" cy="7" r="4"></circle>
//                 <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
//                 <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//               </svg>
//             </div>
//             <span className="text-xl font-bold text-gray-800">PeerConnect</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link to="/home" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
//             <Link to="/seniors" className="text-gray-700 hover:text-blue-600 font-medium">Seniors</Link>
//             <Link to="/companies" className="text-gray-700 hover:text-blue-600 font-medium">Companies</Link>
//             <Link to="/resources" className="text-gray-700 hover:text-blue-600 font-medium">Resources</Link>
//           </div>

//           {/* Desktop Profile */}
//           <div className="hidden md:flex items-center space-x-4">
//             <div className="relative">
//               <button 
//                 onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
//                 className="flex items-center space-x-2 focus:outline-none"
//               >
//                 <img 
//                   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
//                   alt="Profile" 
//                   className="w-8 h-8 rounded-full object-cover"
//                 />
//                 <span className="text-gray-700">{user?.name || 'John Doe'}</span>
//               </button>

//               {/* Profile Dropdown */}
//               {isProfileMenuOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
//                   <Link 
//                     to="/profile" 
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
//                     onClick={() => setIsProfileMenuOpen(false)}
//                   >
//                     <User size={16} className="mr-2" />
//                     Your Profile
//                   </Link>
//                   <Link 
//                     to="/settings" 
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
//                     onClick={() => setIsProfileMenuOpen(false)}
//                   >
//                     <Settings size={16} className="mr-2" />
//                     Settings
//                   </Link>
//                   <Link 
//                     to="/" 
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
//                     onClick={() => {
//                       setIsProfileMenuOpen(false);
//                       logout();
//                     }}
//                   >
//                     <LogOut size={16} className="mr-2" />
//                     Sign out
//                   </Link>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-500 hover:text-gray-600 focus:outline-none"
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200 py-2">
//           <div className="container mx-auto px-4 space-y-1">
//             <Link 
//               to="/home" 
//               className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Home
//             </Link>
//             <Link 
//               to="/seniors" 
//               className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Seniors
//             </Link>
//             <Link 
//               to="/companies" 
//               className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Companies
//             </Link>
//             <Link 
//               to="/resources" 
//               className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Resources
//             </Link>
//             <div className="border-t border-gray-200 my-2"></div>
//             <Link 
//               to="/profile" 
//               className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md flex items-center"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               <img 
//                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
//                 alt="Profile" 
//                 className="w-6 h-6 rounded-full object-cover mr-2"
//               />
//               Your Profile
//             </Link>
//             <Link 
//               to="/settings" 
//               className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Settings
//             </Link>
//             <Link 
//               to="/" 
//               className="block py-2 px-3 text-gray-700 hover:bg-gray-100 rounded-md"
//               onClick={() => {
//                 setIsMenuOpen(false);
//                 logout();
//               }}
//             >
//               Sign out
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User, LogOut, Settings } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="bg-[#0a0a1a] border-b border-[#00ffff33] shadow-[0_0_20px_rgba(0,255,255,0.1)]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-[#00ffff] to-[#ff00ff] p-2 rounded-full shadow-[0_0_15px_rgba(0,255,255,0.3)]">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <span className="text-xl font-bold text-[#00ffff] font-mono">PeerConnect</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/home" className="text-[#d0d0f0] hover:text-[#00ffff] font-medium relative group transition-all duration-300">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00ffff] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/seniors" className="text-[#d0d0f0] hover:text-[#00ffff] font-medium relative group transition-all duration-300">
              Seniors
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00ffff] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/companies" className="text-[#d0d0f0] hover:text-[#00ffff] font-medium relative group transition-all duration-300">
              Companies
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00ffff] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/resources" className="text-[#d0d0f0] hover:text-[#00ffff] font-medium relative group transition-all duration-300">
              Resources
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00ffff] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Desktop Profile */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button 
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="flex items-center space-x-2 focus:outline-none group"
              >
                <div className="relative border-2 border-[#00ffff] rounded-full p-0.5">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                    alt="Profile" 
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="absolute inset-0 border-[#ff00ff] rounded-full opacity-0 group-hover:opacity-100 border-2 transition-opacity"></div>
                </div>
                <span className="text-[#00ffff] font-mono">{user?.name || 'Priya Sharma'}</span>
              </button>

              {/* Profile Dropdown */}
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#0f0f1f] rounded-md border border-[#00ffff33] shadow-[0_0_30px_rgba(0,255,255,0.2)] py-1 z-10">
                  <Link 
                    to="/profile" 
                    className="block px-4 py-2 text-sm text-[#d0d0f0] hover:bg-[#00ffff11] flex items-center"
                    onClick={() => setIsProfileMenuOpen(false)}
                  >
                    <User size={16} className="mr-2 text-[#00ffff]" />
                    Your Profile
                  </Link>
                  <Link 
                    to="/settings" 
                    className="block px-4 py-2 text-sm text-[#d0d0f0] hover:bg-[#00ffff11] flex items-center"
                    onClick={() => setIsProfileMenuOpen(false)}
                  >
                    <Settings size={16} className="mr-2 text-[#00ffff]" />
                    Settings
                  </Link>
                  <Link 
                    to="/" 
                    className="block px-4 py-2 text-sm text-[#d0d0f0] hover:bg-[#00ffff11] flex items-center"
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      logout();
                    }}
                  >
                    <LogOut size={16} className="mr-2 text-[#00ffff]" />
                    Sign out
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#00ffff] hover:text-[#ff00ff] focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0a0a1a] border-t border-[#00ffff33] py-2">
          <div className="container mx-auto px-4 space-y-1">
            <Link 
              to="/home" 
              className="block py-2 px-3 text-[#d0d0f0] hover:bg-[#00ffff11] rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/seniors" 
              className="block py-2 px-3 text-[#d0d0f0] hover:bg-[#00ffff11] rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Seniors
            </Link>
            <Link 
              to="/companies" 
              className="block py-2 px-3 text-[#d0d0f0] hover:bg-[#00ffff11] rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Companies
            </Link>
            <Link 
              to="/resources" 
              className="block py-2 px-3 text-[#d0d0f0] hover:bg-[#00ffff11] rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <div className="border-t border-[#00ffff33] my-2"></div>
            <Link 
              to="/profile" 
              className="block py-2 px-3 text-[#d0d0f0] hover:bg-[#00ffff11] rounded-md flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="Profile" 
                className="w-6 h-6 rounded-full object-cover mr-2 border border-[#00ffff]"
              />
              Your Profile
            </Link>
            <Link 
              to="/settings" 
              className="block py-2 px-3 text-[#d0d0f0] hover:bg-[#00ffff11] rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Settings
            </Link>
            <Link 
              to="/" 
              className="block py-2 px-3 text-[#d0d0f0] hover:bg-[#00ffff11] rounded-md"
              onClick={() => {
                setIsMenuOpen(false);
                logout();
              }}
            >
              Sign out
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;