import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ChatbotSlideIn from "@/components/ChatbotSlideIn";

const Features = () => {
  const mainFeatures = [
    {
      id: 1,
      title: "Еженедельные бонусы быстрого старта",
      subtitle: "Everything You Need in One Place",
      description:
        "Каждый раз, когда новый человек присоединяется к компании по твоей уникальной ссылке и оплачивает членский взнос, ты сразу получаешь бонус на свой счет.",
      image: "/assets/good.png",
      gradient: "from-primary to-primary-glow",
      benefits: [
        "С $40 можно получить до 50% ($20) мгновенно.",
        "Лидеры высокого уровня получают проценты до 10 уровней вниз.",
        "Это отличный способ мотивировать команду и сразу видеть результат ",
      ],
      matrixInfo: {
        title: "Матрицные комиссионные (Пассивный доход)",
        details: [
          "Матрица 2x15 формирует долгосрочный доход.",
          "Доход приходит ежемесячно в зависимости от активности команды.",
          "Доход может достигать $16,000+ в месяц.",
          "Spillover (командная помощь) помогает быстрее заполнять структуру.",
          "Даже при минимальном участии ты получаешь регулярный пассивный доход.",
        ],
      },
    },
    {
      id: 2,
      title: "Поддержка команды и долгосрочный рост",
      subtitle: "Сильная команда — стабильный доход",
      description:
        "Бонусы соответствия (Matching Bonuses) позволяют тебе получать процент от доходов всей команды, мотивируя строить сильную структуру и поддерживать участников.",
      image: "/assets/comand.png",
      gradient: "from-green-500 to-emerald-400",
      benefits: [
        "Получаешь процент от доходов своей команды.",
        "Если твой приглашённый заработал $500 — ты получаешь $250.",
        "Дополнительно зарабатываешь и с его приглашённых партнёров.",
        "Это стимулирует строить сильную и мотивированную команду.",
      ],
      extra: {
        title: "Розничные комиссионные",
        points: [
          "Разница между ценой для членов и розничной ценой идёт тебе в прибыль.",
          "Например: $28 (без членства) – $18 (для члена) = $10 твоя прибыль.",
          "Доход идёт не только от команды, но и от прямых продаж.",
          "Чем больше объём продаж — тем выше ежемесячный заработок.",
        ],
      },
    },
    {
      id: 3,
      title: "Лидерство и элитные привилегии",
      subtitle: "Признание, бонусы и новые вершины",
      description:
        "Эта категория бонусов создана для лидеров и активных партнёров. Чем выше твой уровень и вклад в команду, тем больше привилегий и дополнительных доходов ты получаешь.",
      image: "/assets/leaders.png",
      gradient: "from-purple-500 to-pink-400",
      benefits: [
        "Бонусы для инфлюенсеров: за крупный объём продаж ($2,500 и выше) начисляются дополнительные бонусы.",
        "Доход может увеличиваться от +10% до +100%, стимулируя лидеров активно продвигать продукцию.",
        "Это мотивирует делиться опытом и строить сильное сообщество.",
      ],
      extra: {
        title: "Бонусный пул и ранговые привилегии",
        points: [
          "Бонусный пул для Diamond: лидеры получают 2% от общего дохода компании.",
          "Бонус распределяется между всеми Diamond ежемесячно, обеспечивая стабильный доход.",
          "Бонусы за достижение ранга: Platinum, Diamond и выше приносят единоразовые выплаты $1,000–$5,000+.",
          "Это видимый результат твоей работы и источник вдохновения для новых целей.",
        ],
      },
    },
  ];

  const additionalFeatures = [
    {
      title: "Контроль качества",
      description:
        "Каждый продукт проходит строгие тестирования для обеспечения чистоты, силы действия и вашей безопасности при каждом использовании.",
      icon: "🛡️",
    },
    {
      title: "Глобальная доставка",
      description: "Быстрая и надежная доставка осуществляется более чем в 50 странах, чтобы ваш заказ всегда приходил вовремя и в полной сохранности.",
      icon: "🌍",
    },
    {
      title: "Экспертная поддержка",
      description: "Доступ 24/7 к сертифицированным диетологам и wellness-коучам, которые всегда готовы дать советы и рекомендации.",
      icon: "👨‍⚕️",
    },
    {
      title: "Гарантия возврата денег",
      description: "Обеспечена 100% гарантия удовлетворения с 60-дневной политикой возврата, чтобы вы могли безопасно попробовать все наши продукты.",
      icon: "💯",
    },
    {
      title: "Устойчивые практики",
      description: "Экологичная упаковка и этически полученные ингредиенты для обеспечения здоровья и защиты окружающей среды.",
      icon: "🌱",
    },
    {
      title: "Поддержка сообщества",
      description: "Присоединяйтесь к активному сообществу сторонников здорового образа жизни, где делятся советами и опытом, что помогает поддерживать мотивацию.",
      icon: "🤝",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-60"></div>
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow"></div>

          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl sm:text-6xl font-bold mb-8 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Бонусы и Преимущества для Тебя
              </h1>
              <p className="text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
                Заметный доход, командная поддержка и уникальные возможности — на каждом шаге твоего развития
              </p>
            </div>
          </div>
        </section>

        {/* Main Features */}
        {mainFeatures.map((feature, index) => (
          <section
            key={feature.id}
            className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${index % 2 === 0 ? "bg-background" : "bg-muted/5"}`}
          >
            <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>

            <div className="container mx-auto relative z-10">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col" : ""}`}>
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""} animate-fade-in`}>
                  <div className="mb-6">
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                      {feature.subtitle}
                    </span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
                    {feature.title}
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-4 mb-10">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-4">
                        <div className={`w-6 h-6 flex-shrink-0 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center mt-0.5 shadow-glow`}>
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-lg text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {feature.matrixInfo && (
                    <div className="mt-8">
                      <h3 className="text-2xl font-semibold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                        {feature.matrixInfo.title}
                      </h3>
                      <ul className="space-y-3">
                        {feature.matrixInfo.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="flex-shrink-0 text-primary text-lg">✔</span>
                            <span className="text-lg text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {feature.extra && (
                    <div className="mt-8">
                      <h3 className="text-2xl font-semibold mb-4 bg-gradient-primary bg-clip-text text-transparent">{feature.extra.title}</h3>
                      <ul className="space-y-3">
                        {feature.extra.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className={`w-6 h-6 flex-shrink-0 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center mt-0.5 shadow-glow`}>
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                            <span className="text-lg text-muted-foreground">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Button
                    size="lg"
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-500 text-lg px-10 py-4 rounded-full shadow-elegant hover:scale-105 mt-10"
                  >
                    Learn More
                  </Button>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""} relative animate-scale-in`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-2xl opacity-30 animate-pulse-glow`}></div>
                  <img
                    src={feature.image}
                    alt={`${feature.title} - Premium wellness technology`}
                    className="relative z-10 w-full rounded-3xl shadow-deep border-4 border-primary/20 hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Additional Features Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
          <div className="absolute top-1/4 right-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float"></div>

          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
                Принятие решения — значит двигаться вперёд.
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Не жди идеального момента. Начни сейчас — и идеальный момент придёт вместе с тобой.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gradient-glass backdrop-blur-sm p-8 rounded-3xl border border-border/20 shadow-elegant hover:shadow-deep transition-all duration-500 animate-scale-in hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="h-1 w-12 bg-gradient-primary rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatbotSlideIn />
    </div>
  );
};

export default Features;
