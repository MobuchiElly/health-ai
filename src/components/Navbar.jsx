import { Link } from "react-router-dom";
import { MenuIcon, X } from "lucide-react";
import {useState} from "react";
/** 
 * bg-red-100
 * text-blue-400
 * font-semibold, font-bold
 * text-lg, text-xl, text-2xl
 * p-4, px-4, py-6
 * m-auto, mx-auto, my-auto, m-4, mx-4, my-6
 * flex, flex-row, flex-col, justify-between, items-center
*/

function Navbar() {
  const [isMenuOpen, setIsMenuIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuIsOpen(!isMenuOpen);
    console.log(isMenuOpen);
  }

  return (
    <nav className="w-full flex justify-between items-center py-6 px-4 md:px-8 bg-white">
      <h2 className="text-3xl lg:text-2xl font-bold text-blue-500">HealthAI
      </h2>

      <button onClick={() => setIsMenuIsOpen(true)} className="lg:hidden">
        <MenuIcon size={28}/>
      </button>
      
      {/* Hidden on small screens but visible on desktop */}
      <div className="hidden lg:flex gap-6 items-center font-semibold">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/departments">Departments</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/chat" className="bg-blue-600 text-white rounded-lg px-4 py-2">
          Chat with AI
        </Link>
      </div>

    {
      isMenuOpen && (
        <aside className={`lg:hidden fixed right-0 top-0 bg-white h-full w-[85%] md:w-[70%] pt-16 shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          {/* Close button */}
          <button onClick={() => setIsMenuIsOpen(false)} className="absolute top-5 right-4">
            <X size={28}/>
          </button>
          {/* Menu items */}
          <div className="flex flex-col justify-center gap-6 px-6">
            <Link to="/" onClick={() => setIsMenuIsOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsMenuIsOpen(false)}>About</Link>
            <Link to="/services" onClick={() => setIsMenuIsOpen(false)}>Services</Link>
            <Link to="/departments" onClick={() => setIsMenuIsOpen(false)}>Departments</Link>
            <Link to="/contact" onClick={() => setIsMenuIsOpen(false)}>Contact</Link>
            <Link to="/chat" onClick={() => setIsMenuIsOpen(false)} className="chat-link text-blue-600 bg-blue-500 text-center text-white font-bold rounded-md px-3 py-3">
              Chat with AI
            </Link>
          </div>
        </aside>
      )
    }
    </nav>
  );
}

export default Navbar;