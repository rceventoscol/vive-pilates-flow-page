
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/cec9b72e-69cc-480a-8b74-5afb29633453.png" 
            alt="Vive Pilates Studio" 
            className="h-12 w-auto hover:scale-105 transition-transform duration-300"
          />
        </Link>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-lg font-medium transition-colors duration-300 ${
              isActive('/') 
                ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Inicio
          </Link>
          <Link 
            to="/about" 
            className={`text-lg font-medium transition-colors duration-300 ${
              isActive('/about') 
                ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            About Us
          </Link>
          <Link 
            to="/blog" 
            className={`text-lg font-medium transition-colors duration-300 ${
              isActive('/blog') 
                ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Blog
          </Link>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="sm">
            ☰
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
