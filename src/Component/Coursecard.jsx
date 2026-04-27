// import React from 'react';
// import { Globe, Zap, Atom, Target, MessageCircle, FileText, Award, ArrowRight } from 'lucide-react';

// const Coursecard = () => {
//   const courses = [
//     {
//       category: "Frontend",
//       title: "HTML & CSS Basics",
//       lessons: "8 lessons",
//       duration: "4 weeks",
//       price: "2,500",
//       icon: <Globe size={32} className="text-blue-500" />,
//       bgColor: "bg-orange-50"
//     },
//     {
//       category: "Javascript",
//       title: "JS DOM & Arrays",
//       lessons: "12 lessons",
//       duration: "5 weeks",
//       price: "3,500",
//       icon: <Zap size={32} className="text-orange-500" />,
//       bgColor: "bg-blue-50"
//     },
//     {
//       category: "ReactJS",
//       title: "React + Tailwind",
//       lessons: "15 lessons",
//       duration: "6 weeks",
//       price: "5,000",
//       icon: <Atom size={32} className="text-purple-500" />,
//       bgColor: "bg-green-50"
//     }
//   ];

//   const features = [
//     { title: "Task-Based Learning", desc: "Learn by building real projects from day one", icon: <Target className="text-pink-500" />, bg: "bg-pink-50" },
//     { title: "Live Sessions", desc: "Interactive classes with your instructor", icon: <MessageCircle className="text-blue-400" />, bg: "bg-blue-50" },
//     { title: "Handouts", desc: "PDF notes after every session", icon: <FileText className="text-green-500" />, bg: "bg-green-50" },
//     { title: "Certificate", desc: "Earn a certificate on completion", icon: <Award className="text-orange-500" />, bg: "bg-orange-50" },
//   ];

//   return (
//     <div className="bg-gray-50 py-20 px-6">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header */}
//         <div className="flex justify-between items-center mb-12">
//           <h2 className="text-3xl font-black tracking-tight text-zinc-900">Featured Courses</h2>
//           <a href="#" className="flex items-center gap-1 text-orange-600 font-bold hover:gap-2 transition-all">
//             See all <ArrowRight size={18} />
//           </a>
//         </div>

//         {/* Course Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
//           {courses.map((course, i) => (
//             <div key={i} className="group bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
//               <div className={`${course.bgColor} py-12 flex justify-center transition-colors group-hover:bg-opacity-80`}>
//                 {course.icon}
//               </div>
//               <div className="p-8">
//                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">{course.category}</span>
//                 <h3 className="text-xl font-bold mt-2 mb-1 text-zinc-900">{course.title}</h3>
//                 <p className="text-sm text-gray-400 mb-6">{course.lessons} • {course.duration}</p>
                
//                 <div className="flex justify-between items-center pt-4 border-t border-gray-50">
//                   <span className="text-lg font-black text-zinc-900">Rs. {course.price}</span>
//                   <button className="bg-zinc-950 text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-orange-600 transition-colors">
//                     Enroll
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Features Row */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {features.map((f, i) => (
//             <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 text-center hover:border-orange-200 transition-colors">
//               <div className={`${f.bg} w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
//                 {f.icon}
//               </div>
//               <h4 className="font-bold text-zinc-900 mb-2">{f.title}</h4>
//               <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Coursecard;

// src/components/CourseCard.jsx
// import React from 'react';
// const CourseCard = ({ category, title, lessons, duration, price, icon, bgColor }) => {
//   return (
//     <div className="group bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
//       <div className={`${bgColor} py-12 flex justify-center transition-colors group-hover:bg-opacity-80`}>
//         {icon}
//       </div>
//       <div className="p-8">
//         <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">{category}</span>
//         <h3 className="text-xl font-bold mt-2 mb-1 text-zinc-900">{title}</h3>
//         <p className="text-sm text-gray-400 mb-6">{lessons} • {duration}</p>
        
//         <div className="flex justify-between items-center pt-4 border-t border-gray-50">
//           <span className="text-lg font-black text-zinc-900">Rs. {price}</span>
//           <button className="bg-zinc-950 text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-orange-600 transition-colors">
//             Enroll
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;
import React from 'react';
import { Star, Users, Clock, ShoppingCart } from 'lucide-react';

function Coursecard({ course }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {course.category}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Rating and Students */}
        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(course.rating) 
                    ? 'fill-yellow-400 text-yellow-400' 
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-gray-600 ml-1">({course.rating})</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <Users className="w-4 h-4" />
            <span>{course.students.toLocaleString()}</span>
          </div>
        </div>

        {/* Duration and Price */}
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <span className="text-2xl font-bold text-blue-600">
            ₨{course.price.toLocaleString()}
          </span>
        </div>

        {/* Enroll Button */}
        <button className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn">
          <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
          Enroll Now
        </button>
      </div>
    </div>
  );
}
export default Coursecard;