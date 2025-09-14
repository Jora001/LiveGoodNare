import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-primary-foreground py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Գլխավոր բլոկ 1 */}
          <div className="col-span-1 md:col-span-2">
            <p className="text-primary-foreground/90 mb-8 max-w-lg text-lg leading-relaxed">
              LiveGood — это международная платформа, объединяющая здоровье, бизнес-возможности и обучение. Компания предлагает качественные продукты, прозрачные условия и реальные перспективы для развития. Доверие тысяч людей по всему миру подтверждает устойчивость и надежность LiveGood.
            </p>
         
          </div>

          {/* Գլխավոր բլոկ 2 */}
          <div className="col-span-1 md:col-span-2">
            <p className="text-primary-foreground/90 mb-8 max-w-lg text-lg leading-relaxed">
              LiveGood продолжает укреплять свои позиции на мировом рынке, предлагая прозрачные условия, надежные продукты и реальные возможности для развития. Доверие тысяч людей по всему миру подтверждает стабильность и надежность компании.
            </p>
         
  <div className="flex space-x-6">
  {/* Telegram */}
  <a
    href="https://t.me/+3RTG48rh-bZlMzUy"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer group"
  >
    <img
      src="/assets/5968804.png"
      alt="Telegram"
      className="w-6 h-6 group-hover:scale-110 transition-transform"
    />
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/37493097970"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer group"
  >
    <img
      src="/assets/15707820.png"
      alt="WhatsApp"
      className="w-6 h-6 group-hover:scale-110 transition-transform"
    />
  </a>

  {/* Phone */}
  <a
    href="tel:+37493097970"
    className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer group"
  >
    <img
      src="/assets/5968534.png"
      alt="Phone"
      className="w-6 h-6 group-hover:scale-110 transition-transform"
    />
  </a>


  <a 
  href="nareh.lawact@gmail.com" 
  className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer group"
>
  <img 
    src="/assets/174883.png" 
    alt="Email" 
    className="w-6 h-6 group-hover:scale-110 transition-transform" 
  />
</a>

</div>
          </div>
          
        </div>
        

        {/* Footer copyright */}
        <div className="border-t border-primary-foreground/20 mt-16 pt-12 text-center">
          <div className="bg-gradient-glass backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
            <p className="text-primary-foreground/80 text-lg">
              &copy; 2025 LiveGood. Сайт создан и обслуживается агентством Mireal Soft Agency. | Тел.: +374 93 225 991

            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;