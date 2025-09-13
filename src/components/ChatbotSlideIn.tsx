import { useEffect, useState } from "react";
import { FaTelegramPlane, FaPhone } from "react-icons/fa";

const ChatbotSlideIn = () => {
  const [open, setOpen] = useState(false);

  // Ավտոմատ բացում 5 վայրկյանից հետո
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Slide-in panel */}
      <div
        className={`fixed top-1/4 right-0 h-auto w-64 bg-white shadow-2xl z-50 transform transition-transform duration-500 rounded-l-3xl overflow-hidden flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-3 bg-green-500 text-white flex items-center justify-between">
          <h2 className="text-md font-bold">Свяжитесь со мной</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-white text-xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col items-center gap-3 text-center">
          <img
            src="/assets/ceo-photo.jpg" // public ֆոլդերից
            alt="LiveGood CEO"
            className="w-20 h-20 rounded-full object-cover border-2 border-green-500 shadow-md"
          />
          <h3 className="font-bold text-lg">Нарэ Аветисян</h3>
          <p className="text-green-600 font-medium text-sm">
            партнёр компании LiveGood
          </p>

          <div className="flex flex-col gap-2 mt-3 w-full">
            <a
              href="tel:+37493225991"
              className="flex items-center gap-2 justify-center bg-green-100 text-green-700 py-1.5 rounded-lg text-sm hover:bg-green-200 transition"
            >
              <FaPhone /> +374 93 225 991
            </a>
            <a
              href="https://t.me/YourTelegramUsername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 justify-center bg-blue-100 text-blue-700 py-1.5 rounded-lg text-sm hover:bg-blue-200 transition"
            >
              <FaTelegramPlane /> Telegram
            </a>
          </div>

          <p className="text-gray-500 mt-2 text-xs">
            Свяжитесь со мной для получения подробной информации.
          </p>
        </div>
      </div>
    </>
  );
};

export default ChatbotSlideIn;
