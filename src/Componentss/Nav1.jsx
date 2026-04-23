// import React from 'react';
// import { Link } from 'react-router-dom';
// const Nav1 = () => {
//   return (
//     <nav className="bg-[#0a0a0c] text-white py-6 px-6 border-b border-zinc-800/50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
        

//         <div className="flex items-center gap-1">
//           <div className="text-2xl font-black tracking-tighter">
//             <span className="text-white">Edu</span>
//             <span className="text-orange-500">React</span>
//           </div>
//         </div>

//         <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          
//           {/* <a href="#home" className="text-orange-500 hover:text-orange-400 transition">Home</a>
//             <a href="#courses" className="hover:text-white transition">Courses</a>
//             <a href="#about" className="hover:text-white transition">About</a>
//             < a   href="#contact" className="hover:text-white transition">Contact</a> */}
//             <link to="/" className="text-orange-500 hover:text-orange-400 transition">Home</link>
//             {/* <link to="/courses" className="hover:text-white transition">Courses</link> */}
//             <link to="/about" className="hover:text-white transition">About</link>
//             {/* < link to="/contact" className="hover:text-white transition">Contact</link> */}
//         </div>

//         <div>
//           <button className="bg-white text-black px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-gray-200 transition-all">
//             Get Started
//           </button>
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Nav1;
// import { Link, useLocation } from 'react-router-dom';

// const Nav1 = () => {
//   const location = useLocation();
//   // The About page (/about) uses a dark background in your design
//   const isDark = location.pathname === '/about';

//   return (
//     <nav className={`flex items-center justify-between px-8 py-5 ${isDark ? 'bg-[#0a0a0f] text-white' : 'bg-white border-b border-[#e2e0da]'}`}>
//       <div className="font-display text-xl font-extrabold text-[#0a0a0f]">
//         <Link to="/" className={isDark ? 'text-white' : ''}>Edu<span className="text-[#e85a2a]">React</span></Link>
//       </div>
      
//       <div className="flex gap-8 text-[13px] font-body">
//         <Link to="/" className={`hover:text-[#e85a2a] transition-colors ${location.pathname === '/' ? 'text-[#e85a2a] font-medium' : (isDark ? 'text-[#80809a]' : 'text-[#3a3a4a]')}`}>Home</Link>
//         <Link to="/courses" className={`hover:text-[#e85a2a] transition-colors ${location.pathname === '/courses' ? 'text-[#e85a2a] font-medium' : (isDark ? 'text-[#80809a]' : 'text-[#3a3a4a]')}`}>Courses</Link>
//         <Link to="/about" className={`hover:text-[#e85a2a] transition-colors ${location.pathname === '/about' ? 'text-white font-medium' : (isDark ? 'text-[#80809a]' : 'text-[#3a3a4a]')}`}>About</Link>
//         <Link to="/contact" className={`hover:text-[#e85a2a] transition-colors ${location.pathname === '/contact' ? 'text-[#e85a2a] font-medium' : (isDark ? 'text-[#80809a]' : 'text-[#3a3a4a]')}`}>Contact</Link>
//       </div>

//       <button className={`${isDark ? 'bg-[#60c8a0] text-[#0a0a0f]' : 'bg-[#0a0a0f] text-white'} px-5 py-2 rounded-lg text-xs font-bold font-display`}>
//         Get Started
//       </button>
//     </nav>
//   );
// };

// export default Nav1;


// import React from 'react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X, BookOpen } from 'lucide-react';

//  function Nav1() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className="bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg fixed w-full top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link 
//             to="/" 
//             className="flex items-center gap-2 text-2xl font-bold hover:scale-105 transition-transform"
//             onClick={closeMenu}
//           >
//             <BookOpen className="w-8 h-8" />
//             <span>EduHub</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             <Link 
//               to="/" 
//               className="hover:bg-white/20 px-3 py-2 rounded-md transition-all duration-300"
//             >
//               Home
//             </Link>
//             <Link 
//               to="/courses" 
//               className="hover:bg-white/20 px-3 py-2 rounded-md transition-all duration-300"
//             >
//               Courses
//             </Link>
//             <Link 
//               to="/about" 
//               className="hover:bg-white/20 px-3 py-2 rounded-md transition-all duration-300"
//             >
//               About
//             </Link>
//             <Link 
//               to="/contact" 
//               className="hover:bg-white/20 px-3 py-2 rounded-md transition-all duration-300"
//             >
//               Contact
//             </Link>
//             <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
//               Enroll Now
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <button 
//             className="md:hidden text-white"
//             onClick={toggleMenu}
//           >
//             {isMenuOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
//             <Link 
//               to="/" 
//               className="block hover:bg-white/20 px-3 py-2 rounded-md transition-all"
//               onClick={closeMenu}
//             >
//               Home
//             </Link>
//             <Link 
//               to="/courses" 
//               className="block hover:bg-white/20 px-3 py-2 rounded-md transition-all"
//               onClick={closeMenu}
//             >
//               Courses
//             </Link>
//             <Link 
//               to="/about" 
//               className="block hover:bg-white/20 px-3 py-2 rounded-md transition-all"
//               onClick={closeMenu}
//             >
//               About
//             </Link>
//             <Link 
//               to="/contact" 
//               className="block hover:bg-white/20 px-3 py-2 rounded-md transition-all"
//               onClick={closeMenu}
//             >
//               Contact
//             </Link>
//             <button className="w-full bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
//               Enroll Now
//             </button>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
// export default Nav1;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';

function Nav1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper to close menu when a link is clicked
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* 1. Spacer: This prevents your content from hiding under the fixed navbar */}
      <div className="h-16"></div>

      <nav className="bg-linear-to-r from-blue-600 to-purple-700 text-white shadow-xl fixed w-full top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2 text-2xl font-bold hover:opacity-90 transition-all"
              onClick={closeMenu}
            >
              <div className="bg-white p-1.5 rounded-lg">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <span className="tracking-tighter">EduHub</span>
            </Link>

            {/* Desktop Navigation (Visible on md screens and up) */}
            <div className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-sm font-medium hover:text-blue-200 transition-colors">Home</Link>
              <Link to="/courses" className="text-sm font-medium hover:text-blue-200 transition-colors">Courses</Link>
              <Link to="/about" className="text-sm font-medium hover:text-blue-200 transition-colors">About</Link>
              <Link to="/contact" className="text-sm font-medium hover:text-blue-200 transition-colors">Contact</Link>
              
              <button className="bg-white text-blue-600 px-5 py-2 rounded-full text-sm font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all active:scale-95">
                Enroll Now
              </button>
            </div>

            {/* Mobile menu button (Visible on small screens only) */}
            <div className="md:hidden flex items-center">
              <button 
                className="p-2 rounded-md hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation (Slide Down Menu) */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pt-2 pb-6 space-y-1 bg-blue-700 border-t border-white/10">
            <Link 
              to="/" 
              className="block px-3 py-3 rounded-md text-base font-medium hover:bg-white/10"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/courses" 
              className="block px-3 py-3 rounded-md text-base font-medium hover:bg-white/10"
              onClick={closeMenu}
            >
              Courses
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-3 rounded-md text-base font-medium hover:bg-white/10"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-3 rounded-md text-base font-medium hover:bg-white/10"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <div className="pt-4">
              <button className="w-full bg-white text-blue-600 px-6 py-3 rounded-xl font-bold">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav1;