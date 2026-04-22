// import React from 'react';

// const Her1 = () => {
//   return (
//     <section className="bg-[#0a0a0c] text-white py-16 lg:py-24 px-6">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
     
//         <div className="space-y-8">
//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-semibold tracking-wide">
//             <span>🚀</span>
//             <span>Now with React + Tailwind</span>
//           </div>

          
//           <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
//             Learn to Build <br />
//             <span className="text-orange-500 italic">Real</span> Web Apps
//           </h1>

//           {/* Subtext */}
//           <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
//             Master HTML, CSS, Tailwind, JavaScript and ReactJS with hands-on projects and real code you actually understand.
//           </p>

//           {/* CTAs */}
//           <div className="flex flex-wrap gap-4">
//             <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105">
//               Explore Courses
//             </button>
//             <button className="bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-800 text-white px-8 py-4 rounded-xl font-bold transition-all">
//               Watch Demo
//             </button>
//           </div>
//         </div>

//         {/* Right Content: Stats Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <StatCard 
//             value="120+" 
//             label="Students enrolled" 
//             highlight 
//           />
//           <StatCard 
//             value="6" 
//             label="Courses available" 
//           />
//           <StatCard 
//             value="98%" 
//             label="Completion rate" 
//           />
//           <StatCard 
//             value="4.9★" 
//             label="Average rating" 
//             highlight 
//           />
//         </div>

//       </div>
//     </section>
//   );
// };

// /* Reusable Stat Card Component */
// const StatCard = ({ value, label, highlight = false }) => {
//   return (
//     <div className={`p-8 rounded-2xl border transition-all duration-300 hover:bg-zinc-800/30 ${
//       highlight 
//         ? 'bg-orange-500/5 border-orange-500/20' 
//         : 'bg-zinc-900/40 border-zinc-800'
//     }`}>
//       <h3 className={`text-4xl md:text-5xl font-black mb-3 tracking-tighter ${
//         highlight ? 'text-orange-500' : 'text-white'
//       }`}>
//         {value}
//       </h3>
//       <p className="text-gray-500 font-medium text-sm uppercase tracking-wider">
//         {label}
//       </p>
//     </div>
//   );
// };
// // Cards



// export default Her1;