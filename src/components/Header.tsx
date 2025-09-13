import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
       <div className="flex items-center">
  <a href="/">
    <img
      src="/public/assets/logo.png"
      alt="LiveGood Logo"
      className="h-12 md:h-16 w-auto"
    />
  </a>
</div>

          
          <nav className="hidden md:flex items-center space-x-10">
            <a href="/about" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium hover:scale-105">
              Обучение
            </a>
            <a href="/services" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium hover:scale-105">
              Продукты
            </a>
            <a href="/features" className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium hover:scale-105">
              Про бизнес
            </a>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://t.me/livegood" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300 hover:scale-110"
                aria-label="Contact us on Telegram"
              >
                <Send size={18} className="text-primary-foreground" />
              </a>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300 hover:scale-110"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle size={18} className="text-primary-foreground" />
              </a>
            </div>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 animate-fade-in bg-background/95 backdrop-blur-xl rounded-2xl mt-4 border border-border/50 shadow-elegant">
            <nav className="flex flex-col space-y-6 px-6">
              <a href="/about" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                About
              </a>
              <a href="/services" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                Services
              </a>
              <a href="/features" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                Features
              </a>
              
              {/* Mobile Social Icons */}
              <div className="flex items-center space-x-4 pt-4 border-t border-border/20">
                <a 
                  href="https://t.me/livegood" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-primary text-primary-foreground py-3 px-6 rounded-full flex items-center justify-center gap-3 hover:shadow-glow transition-all duration-300 font-semibold"
                >
                  <Send size={18} />
                  Telegram
                </a>
                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-secondary to-accent text-primary-foreground py-3 px-6 rounded-full flex items-center justify-center gap-3 hover:shadow-glow transition-all duration-300 font-semibold"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;