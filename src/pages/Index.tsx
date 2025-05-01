
import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import RandomGallery from '@/components/RandomGallery';
import VideoShowcase from '@/components/VideoShowcase';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-space-dark">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl md:text-6xl font-cyber font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink leading-tight">
            КОСМИЧЕСКОЕ<br />ВИДЕО-ИСКУССТВО
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed">
            Создаем фантастический визуальный контент, который выделяется из толпы и захватывает внимание зрителей
          </p>
          
          <div className="flex flex-wrap gap-4 mb-16">
            <Button className="bg-neon-purple hover:bg-neon-purple/80 text-white font-cyber shadow-neon-purple text-glow" asChild>
              <Link to="/services">
                <Icon name="Film" size={20} className="mr-2" />
                Наши услуги
              </Link>
            </Button>
            <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 font-cyber" asChild>
              <Link to="/portfolio">
                <Icon name="Image" size={20} className="mr-2" />
                Портфолио
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className={`lg:col-span-2 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <RandomGallery />
          </div>
          <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="sticky top-24">
              <h2 className="text-2xl font-cyber font-bold mb-6 text-neon-green text-glow">
                Вдохновляйтесь
              </h2>
              <VideoShowcase />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16 px-4 md:px-8 bg-space-darker">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">
            НАШИ УСЛУГИ
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "Video", title: "Музыкальные клипы", desc: "Яркие визуальные истории, идеально подчеркивающие вашу музыку" },
              { icon: "Film", title: "Короткометражные фильмы", desc: "Профессиональная съемка и монтаж авторских короткометражек" },
              { icon: "Camera", title: "Модельные тесты", desc: "Видеопробы для начинающих и профессиональных моделей" },
              { icon: "ClapperBoard", title: "Актерские визитки", desc: "Презентационные видео для портфолио актеров" },
              { icon: "Sparkles", title: "Контент для блогеров", desc: "Креативный видеоконтент для социальных платформ" },
              { icon: "PanelTop", title: "Видеосъемка мероприятий", desc: "Профессиональная съемка и монтаж событий любой сложности" }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="neon-border p-6 rounded-lg bg-space-dark/80 h-full transition-all duration-300 group-hover:translate-y-[-5px]">
                  <div className="w-12 h-12 mb-4 rounded-full bg-neon-purple/20 flex items-center justify-center text-neon-pink">
                    <Icon name={service.icon as any} size={24} />
                  </div>
                  <h3 className="text-xl font-cyber font-bold mb-3 text-white group-hover:text-neon-pink transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/70">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-neon-blue hover:bg-neon-blue/80 text-white font-cyber shadow-neon-blue" asChild>
              <Link to="/services">
                Все услуги и цены
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-space-black border-t border-neon-purple/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="font-cyber text-neon-purple">SPACE VISION</p>
            <p className="text-sm text-white/50">© 2025 Все права защищены</p>
          </div>
          <div className="flex gap-6">
            <Link to="/contacts" className="text-white/70 hover:text-neon-pink transition-colors">
              <Icon name="Send" size={20} />
            </Link>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-neon-pink transition-colors">
              <Icon name="Instagram" size={20} />
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-neon-pink transition-colors">
              <Icon name="Youtube" size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
