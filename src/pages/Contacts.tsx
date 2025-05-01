
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-space-dark">
      <Navbar />

      <div className="pt-32 pb-16 px-4 md:px-8 max-w-5xl mx-auto">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl md:text-5xl font-cyber font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple">
            КОНТАКТЫ
          </h1>
          <p className="text-lg text-white/70 mb-12 max-w-2xl">
            Свяжитесь с нами, чтобы обсудить ваш проект и воплотить его в космическую реальность
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className={`transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="neon-border p-8 rounded-lg bg-space-darker">
              <h2 className="text-2xl font-cyber font-bold mb-6 text-neon-blue text-glow">
                Наши данные
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue shrink-0">
                    <Icon name="Mail" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-cyber text-white mb-1">Email</h3>
                    <a href="mailto:VIDEOTFP@MAIL.RU" className="text-white/70 hover:text-neon-blue transition-colors">
                      VIDEOTFP@MAIL.RU
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-neon-pink/20 flex items-center justify-center text-neon-pink shrink-0">
                    <Icon name="MapPin" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-cyber text-white mb-1">Город</h3>
                    <p className="text-white/70">
                      Санкт-Петербург
                    </p>
                  </div>
                </div>
              </div>

              
              <div className="mt-10 pt-6 border-t border-white/10">
                <h3 className="text-lg font-cyber text-white mb-3">Социальные сети</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://instagram.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-space-darker border border-neon-pink/50 flex items-center justify-center text-white hover:text-neon-pink hover:border-neon-pink transition-colors"
                  >
                    <Icon name="Instagram" size={18} />
                  </a>
                  <a 
                    href="https://youtube.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-space-darker border border-neon-pink/50 flex items-center justify-center text-white hover:text-neon-pink hover:border-neon-pink transition-colors"
                  >
                    <Icon name="Youtube" size={18} />
                  </a>
                  <a 
                    href="https://t.me/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-space-darker border border-neon-pink/50 flex items-center justify-center text-white hover:text-neon-pink hover:border-neon-pink transition-colors"
                  >
                    <Icon name="Send" size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative p-1 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-50 animate-neon-pulse"></div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.6036253003165!2d30.314481677506437!3d59.938719074948626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca145cc1%3A0x42371d51a916c43!2z0JDQtNC80LjRgNCw0LvRgtC10LnRgdC60LDRjyDQvdCw0LEuLCAx!5e0!3m2!1sru!2sru!4v1699555646648!5m2!1sru!2sru" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="relative z-10 rounded-lg"
              ></iframe>
            </div>
            
            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <Button className="bg-neon-pink hover:bg-neon-pink/80 text-white font-cyber shadow-neon-pink text-glow flex-1">
                <Icon name="Mail" size={18} className="mr-2" />
                Написать письмо
              </Button>
              <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 font-cyber flex-1">
                <Icon name="Phone" size={18} className="mr-2" />
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-space-black border-t border-neon-purple/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="font-cyber text-neon-purple">SPACE VISION</p>
            <p className="text-sm text-white/50">© 2025 Все права защищены</p>
          </div>
          <div className="flex gap-6">
            <a href="mailto:VIDEOTFP@MAIL.RU" className="text-white/70 hover:text-neon-pink transition-colors">
              <Icon name="Mail" size={20} />
            </a>
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

export default Contacts;
