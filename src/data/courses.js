// // src/data/courses.js
// import { Globe, Zap, Atom } from 'lucide-react';

// export const courseData = [
//   {
//     category: "Frontend",
//     title: "HTML & CSS Basics",
//     lessons: "8 lessons",
//     duration: "4 weeks",
//     price: "2,500",
//     icon: <Globe size={32} className="text-blue-500" />,
//     bgColor: "bg-orange-50"
//   },
//   {
//     category: "Backend",
//     title: "Node.js Fundamentals",
//     lessons: "12 lessons",
//     duration: "6 weeks",
//     price: "3,500",
//     icon: <Zap size={32} className="text-orange-500" />,
//     bgColor: "bg-green-50"
//   },
//   {
//     category: "Fullstack",
//     title: "React & Node.js",
//     lessons: "20 lessons",
//     duration: "8 weeks",
//     price: "5,000",
//     icon: <Atom size={32} className="text-purple-500" />,
//     bgColor: "bg-blue-50"
//   }
// ];

// Data Layer - Never hardcode in components
import react from '../assets/react.png';
import aws from '../assets/aws.png';
import cssmastery from '../assets/cssmastery.jpg';
import js from '../assets/js.jpg';
import machinelearning from '../assets/machinelearning.jpg';
import vue from '../assets/vue.jpg';

export const coursesData = [
  {
    id: 1,
    title: "React Fundamentals",
    category: "Frontend",
    price: 4999,
    image: react + "?fit=crop&w=400&h=300",
    duration: "8 weeks",
    students: 2543,
    rating: 4.8,
    description: "Master the basics of React and build dynamic user interfaces"
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    category: "Frontend",
    price: 5999,
    image: js + "?fit=crop&w=400&h=300",
    duration: "10 weeks",
    students: 1876,
    rating: 4.9,
    description: "Deep dive into JavaScript ES6+ and advanced concepts"
  },
  {
    id: 3,
    title: "Node.js Backend",
    category: "Backend",
    price: 6499,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    duration: "12 weeks",
    students: 1542,
    rating: 4.7,
    description: "Build scalable backend applications with Node.js"
  },
  {
    id: 4,
    title: "Python for Data Science",
    category: "Data Science",
    price: 7999,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    duration: "14 weeks",
    students: 3214,
    rating: 4.9,
    description: "Learn data analysis, visualization, and machine learning basics"
  },
  {
    id: 5,
    title: "CSS Mastery",
    category: "Frontend",
    price: 3999,
    image: cssmastery + "?fit=crop&w=400&h=300",
    duration: "6 weeks",
    students: 2901,
    rating: 4.8,
    description: "Modern CSS, Flexbox, Grid, and responsive design techniques"
  },
  {
    id: 6,
    title: "Database Design",
    category: "Backend",
    price: 5499,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop",
    duration: "9 weeks",
    students: 1203,
    rating: 4.6,
    description: "SQL, NoSQL, and optimal database architecture patterns"
  },
  {
    id: 7,
    title: "React Native",
    category: "Mobile",
    price: 7499,
    image: react + "?fit=crop&w=400&h=300",
    duration: "10 weeks",
    students: 892,
    rating: 4.7,
    description: "Build native mobile apps for iOS and Android"
  },
  {
    id: 8,
    title: "Machine Learning Basics",
    category: "Data Science",
    price: 8999,
    image: machinelearning + "?fit=crop&w=400&h=300",
    duration: "15 weeks",
    students: 1342,
    rating: 4.9,
    description: "Algorithms, models, and practical ML implementations"
  },
  {
    id: 9,
    title: "Vue.js Essentials",
    category: "Frontend",
    price: 4599,
    image: vue + "?fit=crop&w=400&h=300",
    duration: "7 weeks",
    students: 645,
    rating: 4.8,
    description: "Progressive JavaScript framework for modern web apps"
  },
  {
    id: 10,
    title: "AWS Cloud Services",
    category: "DevOps",
    price: 6999,
    image:aws + "?fit=cover&w=400&h=300",
    duration: "11 weeks",
    students: 1124,
    rating: 4.7,
    description: "Deploy, scale, and manage applications on AWS"
  },
  {
    id: 11,
    title: "Docker & Kubernetes",
    category: "DevOps",
    price: 7499,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
    duration: "10 weeks",
    students: 876,
    rating: 4.8,
    description: "Containerization and orchestration for modern deployment"
  },
  {
    id: 12,
    title: "UI/UX Design Principles",
    category: "Design",
    price: 5299,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
    duration: "8 weeks",
    students: 2134,
    rating: 4.9,
    description: "User-centered design, prototyping, and design systems"
  }
];

// Get all unique categories
export const getCategories = () => {
  const categories = ["All", ...new Set(coursesData.map(course => course.category))];
  return categories;
};
