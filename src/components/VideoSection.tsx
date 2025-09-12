import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const VideoSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow"></div>

      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Здоровье и успех в твоих руках
          </h2>
          <p className="text-2xl text-muted-foreground mb-16 max-w-3xl mx-auto font-light">
            Посмотрите короткий информационный ролик, чтобы составить представление о компании
          </p>

          {/* Video container */}
          <div className="relative max-w-5xl mx-auto group">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-deep animate-scale-in bg-gradient-glass backdrop-blur-sm border border-border/20">
              {/* Video overlay with play button */}
              <div
                className="absolute inset-0 bg-gradient-primary/20 flex items-center justify-center group-hover:bg-gradient-primary/10 transition-all duration-500 cursor-pointer"
                onClick={() => {
                  const iframe = document.querySelector<HTMLIFrameElement>("iframe");
                  if (iframe) {
                    iframe.src = "https://www.youtube.com/embed/W5g9-JIObX4?autoplay=1";
                  }
                }}
              >
                <div className="w-24 h-24 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* YouTube iframe */}
              <iframe
                className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                src="https://www.youtube.com/embed/W5g9-JIObX4"
                title="LiveGood Introduction Video - Transform Your Health Journey"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Glowing border effects */}
            <div className="absolute -inset-1 bg-gradient-primary rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
            <div className="absolute -inset-8 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-2xl opacity-50 -z-20 animate-pulse-glow"></div>
          </div>

          {/* Video stats / countup cards */}
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 max-w-5xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-gradient-glass backdrop-blur-sm border border-border/20 shadow-soft">
              <div className="text-3xl font-bold text-primary mb-2">
                {inView ? <CountUp end={200} duration={2} /> : 0}+
              </div>
              <div className="text-muted-foreground">
                Страны присутствия <br /> по всему миру ✅
              </div>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-glass backdrop-blur-sm border border-border/20 shadow-soft">
              <div className="text-3xl font-bold text-secondary mb-2">
                {inView ? <CountUp end={2000000} duration={2} separator="," /> : 0}+
              </div>
              <div className="text-muted-foreground">
                Зарегистрированных участников всего за 2 года ✅
              </div>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-glass backdrop-blur-sm border border-border/20 shadow-soft">
              <div className="text-3xl font-bold text-accent mb-2">
                {inView ? <CountUp end={99} duration={2} /> : 0}%
              </div>
              <div className="text-muted-foreground">
                Уровень удовлетворенности клиентов ✅
              </div>
            </div>

            <div className="text-center p-6 rounded-2xl bg-gradient-glass backdrop-blur-sm border border-border/20 shadow-soft">
              <div className="text-3xl font-bold text-primary mb-2">
                {inView ? <CountUp end={350} duration={2} /> : 0}+
              </div>
              <div className="text-muted-foreground">
                Активных участников в Армении ✅
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
