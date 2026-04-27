
function Nv() {
  return (
         <nav className="bg-indigo-300 p-4 flex justify-between items-center">
         <h1 className="text-amber-50 font-bold text-2xl">Shop<span className=" text-indigo-900 font-bold text-2xl">React</span></h1>
             <div className="flex gap-15 text-2xl">
        <a href="#" className=" text-indigo-900 text-xl font-light">Home</a>
        <a href="#" className="text-amber-50 text-xl font-light">Products</a>
        <a href="#" className="text-amber-50 text-xl font-light">About</a>
        <a href="#" className="text-amber-50 text-xl font-light">Contact</a>
        </div>
        <button className="bg-mist-800 text-white font-bold border border-white rounded px-3 py-1 ">Cart</button>
      </nav>

  );
}

export default Nv;