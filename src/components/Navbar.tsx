import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-biomimicry-dark text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold">БиоМимикрия</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-biomimicry-accent hover:text-biomimicry-text transition-colors">
                Главная
              </Link>
              <Link to="/examples" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-biomimicry-accent hover:text-biomimicry-text transition-colors">
                Примеры
              </Link>
              <Link to="/applications" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-biomimicry-accent hover:text-biomimicry-text transition-colors">
                Применения
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-biomimicry-accent hover:text-biomimicry-text"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Мобильное меню */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-biomimicry">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-biomimicry-accent hover:text-biomimicry-text"
              onClick={() => setIsOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/examples" 
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-biomimicry-accent hover:text-biomimicry-text"
              onClick={() => setIsOpen(false)}
            >
              Примеры
            </Link>
            <Link 
              to="/applications" 
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-biomimicry-accent hover:text-biomimicry-text"
              onClick={() => setIsOpen(false)}
            >
              Применения
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
