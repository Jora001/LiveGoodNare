// src/pages/About.tsx
import { useState } from "react";
import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
// import ChatbotSlideIn from "@/components/ChatbotSlideIn";

// Նկարները public/assets-ում են
const screenshotImg = "/assets/Screenshot20250904140721.png";
const iImg = "/assets/i.webp";

const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-60"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>

          <div className="container mx-auto relative z-10 text-center mb-16 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl font-bold mb-8 bg-gradient-to-r from-green-700 via-green-500 to-green-900 bg-clip-text text-transparent animate-pulse">
              Зарастаем вместе с LiveGood
            </h1>
            <p className="text-2xl text-white max-w-4xl mx-auto leading-relaxed">
              Постоянная поддержка, образовательные программы и марафоны для роста и успеха сообщества.
            </p>
          </div>
        </section>

        {/* Online Marathon Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
          <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="animate-fade-in order-2 lg:order-1">
              <h2 className="text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
                Онлайн-марафоны LiveGood
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>Компания LiveGood постоянно организует онлайн-марафоны...</p>
                <p>Наша команда верит, что такое сотрудничество и обучение укрепляют сообщество...</p>
                <p>Этот процесс объединяет людей из разных стран...</p>
              </div>
            </div>

            {/* Image */}
            <div className="relative animate-scale-in order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-30 animate-pulse-glow"></div>
              <img
                src={screenshotImg}
                alt="LiveGood leadership team"
                className="relative z-10 w-full rounded-3xl shadow-deep border-4 border-primary/20"
              />
            </div>
          </div>
        </section>

        {/* Tagline Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
          <div className="container mx-auto relative z-10 text-center mb-20 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
              Live Good это не просто клуб. <br /> Это среда для предпринимателей, где
            </h2>
            <p className="text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed font-light">
              🔹 связи превращаются в партнёрства, 🔹 встречи в возможности, 🔹 а знания в конкретный результат. Если ты хочешь быть в окружении людей, которые растут, действуют и мыслят масштабно — <strong>присоединяйся к Live Good.</strong>
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
          <div className="container mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
                Присоединяйтесь к нам
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Что изменится и какие преимущества вы получите
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Видение и рост", description: "Станьте частью мощной команды...", gradient: "from-primary to-primary-glow" },
                { title: "Прозрачность и рост дохода", description: "Вы получите активный или пассивный доход...", gradient: "from-secondary to-accent" },
                { title: "Выгода от больших скидок", description: "Присоединившись к нам, вы сможете пользоваться нашим ассортиментом...", gradient: "from-accent to-secondary" },
              ].map((value, index) => (
                <div
                  key={index}
                  className="group bg-gradient-glass backdrop-blur-sm p-8 rounded-3xl border border-border/20 shadow-elegant hover:shadow-deep transition-all duration-500 animate-scale-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-8 h-8 bg-primary-foreground rounded-lg"></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-40"></div>
          <div className="container mx-auto text-center relative z-10">
            <h3 className="text-4xl sm:text-5xl font-bold mb-5 bg-gradient-to-r from-green-700 via-green-500 to-green-600 bg-clip-text text-transparent animate-pulse">
              Наша цель: Финансовая свобода и здоровое старение
            </h3>

            <Button
              size="lg"
              onClick={() => setOpen(true)}
              className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-deep transition-all duration-500 text-xl px-12 py-6 rounded-full shadow-elegant hover:scale-105"
            >
              Свяжитесь с нами
            </Button>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
      {/* <ChatbotSlideIn /> */}
    </div>
  );
};

export default About;
