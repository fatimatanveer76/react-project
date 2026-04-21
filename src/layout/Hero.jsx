
import {Star } from 'lucide-react'
function Hero({emoji,title ,text, desc ,price , style}) {
    return (
       
       
          <div className=" flex flex-col gap-2 bg-mist-800 p-4 rounded-xl border-2" style={{ borderColor: bordercolor } }> 
           <Star color="yellow" fill='yellow' />
         <div className="flex justify-center items-center py-6 text-5xl bg-gray-700  ">
           {emoji}
          </div>
            <button className="bg-blue-300 text-black  rounded-full tracking-tighter hover:bg-blue-500">{title}</button>
            <h2 className="text-xl font-bold text-white inline-block">{text}</h2>
            <div className="text-orange-400 text-xs">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-300">{desc}</p>
            <div className="flex justify-between items-center mt-4">
            <div classNme="flex flex-col">
            <p className="text-white text-xl font-bold">{price}</p>
            <span className="text-white text-xs">/item</span>
            </div>
            <button className="border border-white p-3 rounded-xl hover:text-red-500 transition-colors text-white w-auto px-3 py-1 ">
            ♡
          </button>
          <button className="border border-white px-4 py-1 rounded-xl flex flex-col items-center hover:bg-yellow-400 transition-colors">
            <span className="text-white text-lg font-light leading-none">+</span>
            <span className="text-white text-[10px] font-bold uppercase ">Add</span>
          </button>
          </div>
          </div>

    
    )
}
export default Hero;