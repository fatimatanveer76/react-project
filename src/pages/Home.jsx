// function Home(){
//     return(
//         <>
//         <Nav1/>
//         <Her1/>
//         <Coursecard/>
//         <Footer1/>
//         </>
//     )
// }

import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';
import Coursecard from '../componentss/Coursecard';
import { coursesData } from '../data/courses';

function Home() {
  // Get 6 featured courses
  const featuredCourses = coursesData.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 text-white pt-32 pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Learn Skills That <span className="text-yellow-300">Matter</span>
              </h1>
              <p className="text-lg text-white/90">
                Master in-demand tech skills with our comprehensive online courses. Learn from industry experts and transform your career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/courses"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all duration-300 hover:scale-105"
                >
                  Explore Courses
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 rounded-3xl transform -rotate-3"></div>
                <div className="relative bg-linear-to-br from-blue-400 to-purple-500 rounded-3xl p-8 text-center">
                  <BookOpen className="w-32 h-32 mx-auto text-white mb-4 opacity-80" />
                  <p className="text-white font-semibold">Start Learning Today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors duration-300">
              <div className="flex justify-center mb-4">
                <BookOpen className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">500+</h3>
              <p className="text-gray-600">Courses Available</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center p-6 rounded-xl hover:bg-purple-50 transition-colors duration-300">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">50K+</h3>
              <p className="text-gray-600">Active Learners</p>
            </div>

            {/* Stat 3 */}
            <div className="text-center p-6 rounded-xl hover:bg-pink-50 transition-colors duration-300">
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12 text-pink-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">95%</h3>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Courses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our most popular courses and start your learning journey today
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course) => (
              <Coursecard key={course.id} course={course} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link 
              to="/courses"
              className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              View All Courses
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students already learning with EduHub and advance your career today.
          </p>
          <Link 
            to="/courses"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all duration-300 hover:scale-105"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
export default Home;