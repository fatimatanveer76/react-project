function Nav() {
    return (
        <nav className="flex flex-row p-3 justify-between bg-amber-200">
            <h1 className="font-extrabold text-3xl  text-[#43a4be] font-serif">REACT</h1>
            <div className="flex gap-8 text-2xl text-[#43a4be] ">
                <a href="#" className="hover:bg-[#c6c18b] rounded-2xl p-2 font-serif">Home</a>
                <a href="#" className="hover:bg-[#c6c18b] rounded-2xl p-2 font-serif">About</a>
                <a href="#" className="hover:bg-[#c6c18b] rounded-2xl p-2 font-serif">Contact</a>
            </div>
        </nav>
    )
}
export default Nav;