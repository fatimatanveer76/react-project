function Hero(){
    return(
        <div className="flex flex-col items-center bg-gray-700 text-amber-50 gap-5 p-10 transition-transform duration-300 hover:scale-110 ">
          <h1 className="text-4xl font-bold  text-cyan-100 font-serif">Welcome</h1>
          <p className="p-2 text-amber-100 font-serif">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis necessitatibus sed ex, ut earum est nesciunt accusantium</p>
          <button className="bg-amber-200 text-black px-4 py-2 border-amber-200 font-bold rounded-2xl font-serif hover:bg-[#5bb3cb]">Learn more</button>
        </div>
    )
}
 export  default Hero 