import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ChatbotSlideIn from "@/components/ChatbotSlideIn";
import { FaPhone, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-60"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
          
          <div className="container mx-auto relative z-10 text-center">
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
                <p>
                  Компания LiveGood постоянно организует онлайн-марафоны и образовательные мероприятия для продвижения команды и членов сообщества. В этих марафонах и семинарах участвуют партнеры со всего мира, чтобы учиться, обмениваться идеями и делиться опытом.
                </p>
                <p>
                  Наша команда верит, что такое сотрудничество и обучение укрепляют сообщество, стимулируют инновации и дают каждому участнику возможность развивать свой бизнес и личные навыки.
                </p>
                <p>
                  Этот процесс объединяет людей из разных стран, создавая единую среду, где можно обсуждать успехи и вызовы, получать ценные знания и практические навыки, которые помогают выполнять ежедневные задачи более эффективно и устойчиво. Сообщество LiveGood всегда стремится быть центром развития, инноваций и знаний, обеспечивая всем участникам полезный и эффективный опыт.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative animate-scale-in order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-30 animate-pulse-glow"></div>
              <img
                src="/livegood-visual-spark/public/assets/Screenshot20250904140721.png"
                alt="LiveGood leadership team"
                className="relative z-10 w-full rounded-3xl shadow-deep border-4 border-primary/20"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
          <div className="container mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-glass backdrop-blur-sm p-10 rounded-3xl border border-border/20 shadow-elegant animate-fade-in">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-8 shadow-glow">
                <div className="w-8 h-8 bg-primary-foreground rounded-lg"></div>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-primary">Ежедневное обучение</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                У нас проводятся ежедневные обучающие сессии для команды из Армении в 12:00 и 21:00 по нашему Telegram-каналу, чтобы все были в курсе и развивались.
              </p>
            </div>
            
            <div
              className="bg-gradient-glass backdrop-blur-sm p-10 rounded-3xl border border-border/20 shadow-elegant animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-2xl flex items-center justify-center mb-8 shadow-glow">
                <div className="w-8 h-8 bg-primary-foreground rounded-lg"></div>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-secondary">
                Развитие команды и региональные тренинги
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Представители в Армении еженедельно проводят тренинги в разных регионах для расширения команды и повышения профессиональных навыков местных сотрудников.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
              Присоединяйтесь к нам
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Что изменится и какие преимущества вы получите, присоединившись к нам
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Видение и рост",
                  description:
                    "Станьте частью мощной команды с большим видением, постоянно развивающейся и совершенствующейся",
                  gradient: "from-primary to-primary-glow",
                },
                {
                  title: "Прозрачность и рост дохода",
                  description:
                    "Вы получите активный или пассивный доход, который будет постоянно расти, открывая двери к вашим мечтам.",
                  gradient: "from-secondary to-accent",
                },
                {
                  title: "Выгода от больших скидок",
                  description:
                    "Присоединившись к нам, вы сможете пользоваться нашим ассортиментом продуктов по беспрецедентно низким ценам.",
                  gradient: "from-accent to-secondary",
                },
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
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="container mx-auto text-center">
            <img
              src="/assets/i.webp"
              alt="Описание изображения"
              className="mx-auto rounded-3xl shadow-xl w-full max-w-7xl"
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-40"></div>
          <div className="container mx-auto text-center relative z-10">
            <h3 className="text-4xl sm:text-5xl font-bold mb-5 bg-gradient-to-r from-green-700 via-green-500 to-green-600 bg-clip-text text-transparent animate-pulse">
              Наша цель: Финансовая свобода и здоровое старение
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto">
              Присоединяйтесь к нам, чтобы жить финансово независимо и сохранять здоровье на каждом этапе жизни.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                onClick={() => setOpen(true)}
                className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-deep transition-all duration-500 text-xl px-12 py-6 rounded-full shadow-elegant hover:scale-105"
              >
                Свяжитесь с нами
              </Button>

              <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-md rounded-3xl shadow-2xl border border-accent/30 bg-gradient-to-b from-white/90 to-accent/10 backdrop-blur-xl p-8">
                  <DialogHeader className="text-center space-y-2">
                    <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                      Свяжитесь с нами, чтобы получить подробную информацию 👇
                    </DialogTitle>
                  </DialogHeader>

                  <div className="mt-6 space-y-4 text-lg">
                    <a
                      href="https://t.me/+3RTG48rh-bZlMzUy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition"
                    >
                      <FaTelegramPlane className="text-blue-500 text-2xl" />
                      <span className="font-medium text-blue-600">LiveGood Telegram</span>
                    </a>

                    <a
                      href="https://wa.me/37493097970"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-green-50 hover:bg-green-100 transition"
                    >
                      <FaWhatsapp className="text-green-500 text-2xl" />
                      <span className="font-medium text-green-600">37493097970</span>
                    </a>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                      <FaPhone className="text-gray-700 text-2xl" />
                      <span className="font-medium text-gray-800">+37493097970</span>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatbotSlideIn />
    </div>
  );
};

export default About;
