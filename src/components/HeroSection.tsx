import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { FaTelegramPlane, FaWhatsapp, FaPhone } from "react-icons/fa"

const HeroSection = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-60"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-scale-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground mb-8 leading-tight">
              Измени свою жизнь вместе с{" "}
              <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
                LiveGood
              </span>
            </h1>
            <p className="text-2xl text-primary-foreground/90 mb-10 leading-relaxed max-w-2xl">
              LiveGood объединяет здоровье и возможности для бизнеса: ты можешь наслаждаться качественными продуктами, чувствовать себя более энергичным и строить жизнь, о которой всегда мечтал.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              {/* Popup Button */}
              <Button
                size="lg"
                onClick={() => setOpen(true)}
                className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-deep transition-all duration-500 text-xl px-12 py-6 rounded-full shadow-elegant hover:scale-105"
              >
                Свяжитесь с нами
              </Button>

              {/* Dialog */}
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-md rounded-3xl shadow-2xl border border-accent/30 bg-gradient-to-b from-white/90 to-accent/10 backdrop-blur-xl p-8">
                  <DialogHeader className="text-center space-y-2">
                    <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                      Свяжитесь с нами, чтобы получить подробную информацию 👇
                    </DialogTitle>
                  </DialogHeader>

                  <div className="mt-6 space-y-4 text-lg">
                    {/* Telegram */}
                    <a
                      href="https://t.me/+3RTG48rh-bZlMzUy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition"
                    >
                      <FaTelegramPlane className="text-blue-500 text-2xl" />
                      <span className="font-medium text-blue-600">LiveGood Telegram</span>
                    </a>

                    {/* Whatsapp */}
                    <a
                      href="https://wa.me/37493097970"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-green-50 hover:bg-green-100 transition"
                    >
                      <FaWhatsapp className="text-green-500 text-2xl" />
                      <span className="font-medium text-green-600">37493097970</span>
                    </a>

                    {/* Phone */}
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                      <FaPhone className="text-gray-700 text-2xl" />
                      <span className="font-medium text-gray-800">+37493097970</span>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Image */}
          <div className="flex flex-col items-center lg:justify-end animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-40 scale-125 animate-pulse-glow"></div>
              <div
                className="absolute inset-0 bg-gradient-to-r from-secondary to-accent rounded-full blur-2xl opacity-30 scale-110 animate-pulse-glow"
                style={{ animationDelay: "1s" }}
              ></div>
              <img
                src="/assets/ceo-photo.jpg" // Լուսանկարն արդեն public/assets-ում է
                alt="LiveGood CEO - Transforming lives through innovative health solutions"
                className="relative z-10 w-96 h-96 sm:w-[25rem] sm:h-[28rem] rounded-full object-cover border-4 border-primary-foreground/30 shadow-deep hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-8 lg:hidden text-center">
              <p className="text-xl text-primary-foreground/90 font-light">
                Здравствуйте, я Наре, партнёр компании LiveGood.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
