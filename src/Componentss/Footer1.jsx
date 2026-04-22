// import React from 'react';
// import { MapPin, Mail, Phone, Send } from 'lucide-react';

// const Footer1 = () => {
//   return (
//     <div className="font-sans">
//       {/* Contact Header Section */}
//       <section className="bg-[#fff7f5] py-20 px-6 text-center">
//         <span className="text-orange-600 font-bold tracking-widest text-xs uppercase">Get in Touch</span>
//         <h2 className="text-4xl md:text-6xl font-black tracking-tighter mt-4 mb-6 text-zinc-900">
//           We'd Love to Hear From You
//         </h2>
//         <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
//           Have a question about a course? Want to enroll? Reach out and <br className="hidden md:block" /> 
//           we'll respond within 24 hours.
//         </p>
//       </section>

//       {/* Main Contact Form Section */}
//       <section className="bg-white py-20 px-6">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
//           {/* Left: Contact Info */}
//           <div>
//             <h3 className="text-2xl font-bold mb-10 text-zinc-900">Contact Info</h3>
            
//             <div className="space-y-8">
//               <ContactInfoItem 
//                 icon={<MapPin size={20} className="text-pink-500" />} 
//                 bg="bg-pink-50"
//                 label="ADDRESS" 
//                 value="Lahore, Pakistan" 
//               />
//               <ContactInfoItem 
//                 icon={<Mail size={20} className="text-blue-500" />} 
//                 bg="bg-blue-50"
//                 label="EMAIL" 
//                 value="hello@tecstem.com" 
//               />
//               <ContactInfoItem 
//                 icon={<Phone size={20} className="text-green-500" />} 
//                 bg="bg-green-50"
//                 label="PHONE" 
//                 value="+92 300 000 0000" 
//               />
//             </div>

//             <div className="mt-12">
//               <p className="text-xs font-black tracking-widest text-gray-400 uppercase mb-4">Follow Us</p>
//               <div className="flex gap-3">
//                 {/* <SocialIcon icon={<Twitter size={18} />} /> */}
//                 {/* <SocialIcon icon={<Linkedin size={18} />} /> */}
//                 {/* <SocialIcon icon={<Youtube size={18} />} /> */}
//                 {/* <SocialIcon icon={<Instagram size={18} />} /> */}
//               </div>
//             </div>
//           </div>

//           {/* Right: Form */}
//           <form className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <InputField label="First Name" placeholder="Fatima" />
//               <InputField label="Last Name" placeholder="Tanveer" />
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <InputField label="Email" placeholder="fatima@email.com" type="email" />
//               <div className="flex flex-col gap-2">
//                 <label className="text-sm font-bold text-zinc-700">Subject</label>
//                 <select className="bg-zinc-100 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-orange-500 outline-none">
//                   <option>Course Inquiry</option>
//                   <option>Technical Support</option>
//                   <option>Feedback</option>
//                 </select>
//               </div>
//             </div>
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-bold text-zinc-700">Message</label>
//               <textarea 
//                 rows="5" 
//                 placeholder="Tell us how we can help you..." 
//                 className="bg-zinc-100 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-orange-500 outline-none resize-none"
//               ></textarea>
//             </div>
//             <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
//               Send Message <Send size={18} />
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-zinc-950 text-gray-500 py-10 px-6">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
//           <div className="text-xl font-black tracking-tighter text-white">
//             Edu<span className="text-orange-500">React</span>
//           </div>
          
//           <p className="text-sm">© 2025 Tecstem Technologies. All rights reserved.</p>
          
//           <div className="flex gap-6 text-sm">
//             <a href="#" className="hover:text-white transition">Privacy</a>
//             <a href="#" className="hover:text-white transition">Terms</a>
//             <a href="#" className="hover:text-white transition">Contact</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// /* Helper Components */
// const ContactInfoItem = ({ icon, bg, label, value }) => (
//   <div className="flex items-center gap-4">
//     <div className={`${bg} p-4 rounded-2xl`}>{icon}</div>
//     <div>
//       <p className="text-[10px] font-black tracking-widest text-gray-400">{label}</p>
//       <p className="text-zinc-800 font-bold">{value}</p>
//     </div>
//   </div>
// );

// const SocialIcon = ({ icon }) => (
//   <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-100 text-zinc-600 hover:bg-orange-600 hover:text-white transition-all">
//     {icon}
//   </button>
// );

// const InputField = ({ label, placeholder, type = "text" }) => (
//   <div className="flex flex-col gap-2">
//     <label className="text-sm font-bold text-zinc-700">{label}</label>
//     <input 
//       type={type} 
//       placeholder={placeholder} 
//       className="bg-zinc-100 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
//     />
//   </div>
// );

// export default Footer1;

// import React from 'react';

// const Footer1 = () => {
//   return (
//     <footer className="bg-zinc-950 text-gray-500 py-10 px-6">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
//         <div className="text-xl font-black tracking-tighter text-white">
//           Edu<span className="text-orange-500">React</span>
//         </div>
        
//         <p className="text-sm">© 2026 Tecstem Technologies. All rights reserved.</p>
        
//         <div className="flex gap-6 text-sm">
//           <a href="#" className="hover:text-white transition">Privacy</a>
//           <a href="#" className="hover:text-white transition">Terms</a>
//           <a href="#" className="hover:text-white transition">Contact</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer1;
import React from 'react';
// import {Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';


function Footer1() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">EduHub</h3>
            <p className="text-sm mb-4">
              Empowering learners worldwide with quality education and skill development.
            </p>
            {/* <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" /> 
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/courses" className="hover:text-blue-400 transition-colors">Courses</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/courses" className="hover:text-blue-400 transition-colors">Frontend</a></li>
              <li><a href="/courses" className="hover:text-blue-400 transition-colors">Backend</a></li>
              <li><a href="/courses" className="hover:text-blue-400 transition-colors">Data Science</a></li>
              <li><a href="/courses" className="hover:text-blue-400 transition-colors">DevOps</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                {/* <Mail className="w-4 h-4 text-blue-400" /> */}
                <span>info@eduhub.com</span>
              </li>
              <li className="flex items-center gap-2">
                {/* <Phone className="w-4 h-4 text-blue-400" /> */}
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                {/* <MapPin className="w-4 h-4 text-blue-400 mt-1" /> */}
                <span>123 Education St, Learning City, LC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} EduHub. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
 export default Footer1;