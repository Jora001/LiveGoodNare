const TaglineSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Live Good это не просто клуб. <br /> Это среда для предпринимателей, где
          </h2>
          <p className="text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed font-light">
            🔹 связи превращаются в партнёрства, 🔹 встречи в возможности,
            🔹 а знания в конкретный результат. Если ты хочешь быть в окружении людей,
            которые растут, действуют и мыслят масштабно — <strong>присоединяйся к Live Good.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TaglineSection;
