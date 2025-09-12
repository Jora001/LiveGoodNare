import healthFeature from "@/assets/health-feature-1.jpg";
import nutritionFeature from "@/assets/nutrition-feature-2.jpg"; // <-- այստեղ պետք է .png լինի
import technologyFeature from "@/assets/technology-feature-3.jpg";


const features = [
  {
    id: 1,
    title: "BIT System Integration",
    description:
      "Раскройте потенциал цифровой трансформации с BIT System – инновационные решения и умные технологии, созданные для оптимизации вашего бизнеса, упрощения процессов и открытия новых возможностей для роста.",
    image: healthFeature,
    gradient: "from-primary to-primary-glow",
  },
  {
    id: 2,
    title: "Здоровье и уход",
    description:
      "Откройте для себя наши продукты для здоровья и личного ухода, созданные для полноценного питания, защиты организма и улучшения качества вашей жизни на каждый день.",
    image: nutritionFeature,
    gradient: "from-secondary to-accent",
  },
  {
    id: 3,
    title: "Обучение и развитиe",
    description:
      "Получайте постоянное онлайн и оффлайн бесплатное обучение для развития профессиональных навыков, открытия новых возможностей и обеспечения личного и бизнес-роста.",
    image: technologyFeature,
    gradient: "from-secondary to-primary",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse-glow"></div>

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Live Good на сегодняшний день занимает первое место среди сетевых компаний по уровню доверия.
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-light">
            Это подтверждается данными на сайте <strong>Business For Home</strong> и может быть проверено через любые другие авторитетные источники.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative bg-gradient-glass backdrop-blur-sm rounded-3xl overflow-hidden shadow-elegant hover:shadow-deep transition-all duration-700 animate-scale-in border border-border/20 hover:border-primary/30"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-82 overflow-hidden">
                <img
                  src={feature.image}
                  alt={`${feature.title} - Premium health and wellness solutions`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-50 group-hover:opacity-60 transition-opacity duration-500`}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="h-1 w-12 bg-gradient-primary rounded-full"></div>
                </div>
              </div>

              {/* Glowing border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-3xl transition-all duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-primary rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Animated LiveGood logo / CTA */}
       <div className="text-center mt-20 animate-fade-in flex justify-center items-center gap-4">
  <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-green-500 animate-scale-in">
    LiveGood
  </h1>
  <span className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-green-400 animate-pulse">
    ∞
  </span>
</div>

      </div>
    </section>
  );
};

export default FeaturesSection;
