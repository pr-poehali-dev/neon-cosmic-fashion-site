
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMobile } from '@/hooks/use-mobile';
import Icon from '@/components/ui/icon';

const Navbar = () => {
  const isMobile = useMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-3 bg-black/80 backdrop-blur-md' : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-cyber font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple">
          SPACE VISION
        </Link>
        
        {!isMobile ? (
          <nav className="flex items-center gap-8">
            <Link to="/" className="text-white hover:text-neon-pink transition-colors font-medium">
              Главная
            </Link>
            <Link to="/contacts" className="text-white hover:text-neon-pink transition-colors font-medium">
              Контакты
            </Link>
          </nav>
        ) : (
          <>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-neon-pink transition-colors"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>
            
            {isMenuOpen && (
              <div className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-5 right-5 text-white hover:text-neon-pink transition-colors"
                >
                  <Icon name="X" size={24} />
                </button>
                
                <nav className="flex flex-col items-center gap-8">
                  <Link 
                    to="/" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl text-white hover:text-neon-pink transition-colors font-cyber"
                  >
                    Главная
                  </Link>
                  <Link 
                    to="/contacts" 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl text-white hover:text-neon-pink transition-colors font-cyber"
                  >
                    Контакты
                  </Link>
                </nav>
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
