// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
// import Card from './components/card'
// import Nav from './components/Nav'
// import Hero from './components/Hero'
// import { useState } from 'react'
import Navbar from './layout/Navbar'
import Hero from './layout/Hero'

// function App(){
//   return( 
//   <>
//   <Nav>

//   </Nav>
//   <Hero>

//   </Hero>
//   <div className='container'>
//     <Card title="SEO" desc="Learn SEO tips and tricks" img="./download.jpg"/>
//     <Card title="Web development" desc="Learn webdevelopment frontend"  image="./download(2).jpg" />
//     <Card title="Cyber Security" desc="Learn cyber security to enhance security"  image="./download(1).jpg"/>
//   </div> 
//   </>
//   )
// }
// const courses = [
// { title: 'HTML', desc: 'Web structure', link:'https/:www.google.com', text:'More INFO' },
// { title: 'CSS', desc: 'Web styling', link:'https://www.youtube.com', text:'Learn more' },
// ]


// function App(){
//   //useState initialize the value of variable to 0 its like a setter
//   const[count , setCount]= useState(0)
//   //toggle visibility
//   const[isvisibility, setVisibility]=useState
//   (false)
//   return(
//   <>
//     <Nav>
//     </Nav>
//     <Hero>
//     </Hero>
//       <button className="bg-amber-300 p-2 rounded m-4" onClick={()=> setCount (count+1)}>Click me</button>
//       <p className="bg-black text-amber-50 text-center">Count:{count}</p>



//       <button className="bg-amber-300 p-2 rounded m-4 " onClick={()=> setCount (count+1)}>Count:{count}</button>
//             <button className="bg-amber-300 p-2 rounded m-4 " onClick={()=> setVisibility (!isvisibility)}>
//               {isvisibility ? 'Hide Details': 'Show visibility'}
//             </button>

//        {isvisibility && (
//         <>
//          <h1 className="font-bold m-2">some text</h1>
//          <div className='container'>
//            {courses.map((course) => (
//               <Card key={course.title} title={course.title} desc={course.desc} img="/download.jpg" link={course.link} text={course.text} />
//                ))}
//           </div>
//        </>
//        )}  
//   </>
//   );
// }
// function Hero({emoji,title ,text, desc ,price}) {
//     return (
       
//         <div className="card">
//           <div className="card-body"> 
//             <span>{emoji}</span>
//             <button>{title}</button>
//             <h2>{text}</h2>
//             <p>{desc}</p>
//             <p>{price}</p>
//           </div>
//         </div>





// const courses = [
// { span: '🎧', title: 'Electronics',text:'Wireless Headphones' ,desc: 'Noise Cancelling', price: 'RS.4500', style: "yellow"},
// { span: '👟', title: 'sports',text:'Running shoes' ,desc: 'Lightweight and comfortable', price: 'RS.3200' ,style: "blue"},
// { span: '☕', title: 'Kitchen',text:'Coffee Maker' ,desc: 'Brew 10 cups, programmable', price: 'RS.6800' ,style: "green"},
 
//  ]
// components
// function App() {
//   return (
//     <>
//       <Navbar />
//       <div className=' flex gap-4  bg-gray-900 p-4 rounded justify-center'>
//           <Hero emoji={courses[0].span} title={courses[0].title} text={courses[0].text} desc={courses[0].desc} price={courses[0].price} bordercolor={courses[0].bordercolor} />
//           <Hero emoji={courses[1].span} title={courses[1].title} text={courses[1].text} desc={courses[1].desc} price={courses[1].price} bordercolor={courses[1].bordercolor} />
//           <Hero emoji={courses[2].span} title={courses[2].title} text={courses[2].text} desc={courses[2].desc} price={courses[2].price} bordercolor={courses[2].bordercolor} />
          
//     </div> 

//   </>
//   )
// }
// export default App                             


// component , sections

import Nv from "./component/Nv";
import Footer from "./component/Footer";
import Hero1 from "./sections/Hero1";
import Review from "./sections/Review";

function App() {
  return (
    <>
      <Nv />
      <Hero1 />
      <Review />
      <Footer />
    </>
  );
}

export default App;