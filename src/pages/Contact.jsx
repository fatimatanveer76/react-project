// import React from 'react';
// import { MapPin, Mail, Phone, Send } from 'lucide-react';

// const Contact = () => {
//   return (
//     <div className="font-sans">
//       {/* Contact Header Section */}
//       <section className="bg-[#fff7f5] py-20 px-6 text-center">
//         <span className="text-orange-600 font-bold tracking-widest text-xs uppercase">Get in Touch</span>
//         <h2 className="text-4xl md:text-6xl font-black tracking-tighter mt-4 mb-6 text-zinc-900">
//           We'd Love to Hear From You
//         </h2>
//         <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
//           Have a question about a course? Want to enroll? Reach out and we'll respond within 24 hours.
//         </p>
//       </section>

//       {/* Main Contact Form Section */}
//       <section className="bg-white py-20 px-6">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
//           {/* Left Side: Info */}
//           <div>
//             <h3 className="text-2xl font-bold mb-10 text-zinc-900">Contact Info</h3>
//             <div className="space-y-8">
//               <ContactInfoItem icon={<MapPin size={20} className="text-pink-500" />} bg="bg-pink-50" label="ADDRESS" value="Lahore, Pakistan" />
//               <ContactInfoItem icon={<Mail size={20} className="text-blue-500" />} bg="bg-blue-50" label="EMAIL" value="hello@tecstem.com" />
//               <ContactInfoItem icon={<Phone size={20} className="text-green-500" />} bg="bg-green-50" label="PHONE" value="+92 300 000 0000" />
//             </div>
//           </div>

//           {/* Right Side: Form */}
//           <form className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <InputField label="First Name" placeholder="Fatima" />
//               <InputField label="Last Name" placeholder="Tanveer" />
//             </div>
//             <InputField label="Email" placeholder="fatima@email.com" type="email" />
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-bold text-zinc-700">Message</label>
//               <textarea rows="5" placeholder="How can we help?" className="bg-zinc-100 border-none rounded-xl p-4 text-sm outline-none resize-none focus:ring-2 focus:ring-orange-500"></textarea>
//             </div>
//             <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
//               Send Message <Send size={18} />
//             </button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// };

// /* Helper Components (Keep these inside the same file for now) */
// const ContactInfoItem = ({ icon, bg, label, value }) => (
//   <div className="flex items-center gap-4">
//     <div className={`${bg} p-4 rounded-2xl`}>{icon}</div>
//     <div>
//       <p className="text-[10px] font-black tracking-widest text-gray-400">{label}</p>
//       <p className="text-zinc-800 font-bold">{value}</p>
//     </div>
//   </div>
// );

// const InputField = ({ label, placeholder, type = "text" }) => (
//   <div className="flex flex-col gap-2">
//     <label className="text-sm font-bold text-zinc-700">{label}</label>
//     <input type={type} placeholder={placeholder} className="bg-zinc-100 border-none rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-orange-500" />
//   </div>
// );

// export default Contact;

import React from 'react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

 function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form
    if (formData.name && formData.email && formData.subject && formData.message) {
      setSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-linear-to-r from-blue-600 to-purple-600 text-white pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-white/90">
            Get in touch with our team. We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Email */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Email</h3>
                </div>
                <p className="text-gray-600 mb-2">Send us an email</p>
                <a href="mailto:info@eduhub.com" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  info@eduhub.com
                </a>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Phone</h3>
                </div>
                <p className="text-gray-600 mb-2">Call us anytime</p>
                <a href="tel:+15551234567" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>

              {/* Address */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-pink-600 w-12 h-12 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Address</h3>
                </div>
                <p className="text-gray-600">
                  123 Education Street<br />
                  Learning City, LC 12345<br />
                  United States
                </p>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Working Hours</h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Saturday:</span> 10:00 AM - 4:00 PM
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Sunday:</span> Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                    <p className="text-green-700 font-semibold">
                      ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Fatima Tanveer"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="fatima@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your thoughts..."
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300 resize-none"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Contact;