// import React, { useState } from 'react';
// import FilterBar from '../components/FilterBar';
// import CourseCard from '../components/CourseCard';
// import { courseData } from '../data/courses';

// const Courses = () => {
//   const [activeTab, setActiveTab] = useState('All');
//   const categories = ['All', 'Frontend', 'Javascript', 'ReactJS'];

//   // This line does the filtering
//   const filteredCourses = activeTab === 'All' 
//     ? courseData 
//     : courseData.filter(course => course.category === activeTab);

//   return (
//     <div className="p-8 bg-[#f5f4f0] min-h-screen">
//       <FilterBar 
//         categories={categories} 
//         activeTab={activeTab} 
//         setActiveTab={setActiveTab} 
//       />

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {filteredCourses.map((course) => (
//           <CourseCard key={course.id} {...course} />
//         ))}
//       </div>
//     </div>
//   );
// };


import { useState, useMemo } from "react"; // Added useMemo here
import { Search, Filter } from 'lucide-react';
import Coursecard from '../componentss/Coursecard'; 
import { coursesData, getCategories } from '../data/courses';

 function Courses() {
  // State for search and filter
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(10000);

  // Get all categories
  const categories = getCategories();

  // Filter Logic - CORE FEATURE
  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      // Search filter - checks title and description
      const matchesSearch = 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase());

      // Category filter
      const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;

      // Price filter
      const matchesPrice = course.price <= priceRange;

      // Return true only if ALL filters match
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, selectedCategory, priceRange]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-linear-to-r from-blue-600 to-purple-600 text-white pt-32 pb-12 max-w-full">
        <div className="max-w-full mx-auto sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Courses</h1>
          <p className="text-lg text-white/90">
            Browse our complete collection of {coursesData.length} premium courses
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="w-5 h-5 text-blue-600" />
                  <h2 className="text-xl font-bold text-gray-800">Filters</h2>
                </div>

                {/* Search Filter */}
                <div className="mb-8">
                  <label className="block text-gray-700 font-semibold mb-3">
                    Search Courses
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by name..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="mb-8">
                  <label className="block text-gray-700 font-semibold mb-3">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300 cursor-pointer"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div className="mb-8">
                  <label className="block text-gray-700 font-semibold mb-3">
                    Price Range: ₨{priceRange.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="500"
                    value={priceRange}
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-2">
                    <span>₨0</span>
                    <span>₨10,000</span>
                  </div>
                </div>

                {/* Reset Button */}
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                    setPriceRange(10000);
                  }}
                  className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-300"
                >
                  Reset Filters
                </button>
              </div>
            </div>

            {/* Courses Grid */}
            <div className="lg:col-span-3">
              {/* Results Counter */}
              <div className="mb-6">
                <p className="text-gray-600 font-semibold">
                  Showing <span className="text-blue-600">{filteredCourses.length}</span> of{" "}
                  <span className="text-blue-600">{coursesData.length}</span> courses
                </p>
              </div>

              {/* Courses Grid */}
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredCourses.map((course) => (
                    <Coursecard key={course.id} course={course} />
                  ))}
                </div>
              ) : (
                /* No Results Message */
                <div className="bg-white rounded-xl shadow-md p-12 text-center">
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    No Courses Found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search or filter criteria
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All");
                      setPriceRange(10000);
                    }}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Courses;