// // import React, { useState } from 'react';
// // import { Search } from 'lucide-react';

// // const Navbar = ({ categories = ['All', 'JS', 'React', 'Python', 'Design'] }) => {
// //   const [activeTab, setActiveTab] = useState('All');

// //   return (
// //     <nav className="flex flex-wrap items-center justify-between gap-4 bg-slate-900 p-4 shadow-lg md:flex-nowrap">
      
// //       {/* Brand Logo */}
// //       <div className="flex items-center space-x-1">
// //         <span className="text-2xl font-black tracking-tighter text-white">
// //           Edu<span className="text-emerald-400">Flow</span>
// //         </span>
// //       </div>

// //       {/* Search Bar Container */}
// //       <div className="relative flex-grow max-w-2xl">
// //         <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
// //           <Search size={18} className="text-slate-400" />
// //         </div>
// //         <input
// //           type="text"
// //           placeholder="Search courses..."
// //           className="w-full rounded-xl border border-slate-700 bg-slate-800 py-2.5 pl-10 pr-4 text-slate-200 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
// //         />
// //       </div>

// //       {/* Filter Chips */}
// //       <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
// //         {categories.map((cat) => (
// //           <button
// //             key={cat}
// //             onClick={() => setActiveTab(cat)}
// //             className={`whitespace-nowrap rounded-lg px-5 py-2 text-sm font-medium transition-all duration-200 ${
// //               activeTab === cat
// //                 ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30'
// //                 : 'border border-slate-700 bg-transparent text-slate-400 hover:border-slate-500 hover:text-slate-200'
// //             }`}
// //           >
// //             {cat}
// //           </button>
// //         ))}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import React from 'react';
// import { Search } from 'lucide-react';

// // Notice we added props here so the Page can control the filter
// const Filterbar = ({ categories, activeTab, setActiveTab }) => {
//   return (
//     <nav className="flex flex-wrap items-center justify-between gap-4 bg-[#0a0a0f] p-4 rounded-2xl mb-8 md:flex-nowrap">
      
//       {/* Search Bar */}
//       <div className="relative flex max-w-md">
//         <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
//           <Search size={18} className="text-slate-400" />
//         </div>
//         <input
//           type="text"
//           placeholder="Search courses..."
//           className="w-full rounded-xl border border-slate-700 bg-slate-800/50 py-2.5 pl-10 pr-4 text-slate-200 outline-none focus:border-[#e85a2a]"
//         />
//       </div>

//       {/* Filter Chips */}
//       <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setActiveTab(cat)} // This tells the Page to filter the list
//             className={`whitespace-nowrap rounded-lg px-5 py-2 text-sm font-medium transition-all ${
//               activeTab === cat
//                 ? 'bg-[#e85a2a] text-white'
//                 : 'border border-slate-700 text-slate-400 hover:text-slate-200'
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default Filterbar;