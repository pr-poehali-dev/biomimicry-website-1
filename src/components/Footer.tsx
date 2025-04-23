import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-biomimicry-dark text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">БиоМимикрия</h3>
            <p className="text-sm text-gray-300">
              Природа - лучший инженер. Изучая ее решения, мы создаем инновационные технологии будущего.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Полезные ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://biomimicry.org/" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Biomimicry Institute
                </a>
              </li>
              <li>
                <a href="https://asknature.org/" className="text-sm text-gray-300 hover:text-white transition-colors">
                  AskNature
                </a>
              </li>
              <li>
                <a href="https://www.nature.com/" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Nature Journal
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <p className="text-sm text-gray-300 mb-2">
              Email: info@biomimicry.ru
            </p>
            <p className="text-sm text-gray-300">
              Телефон: +7 (999) 123-45-67
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-sm text-gray-300 flex items-center justify-center">
            © {new Date().getFullYear()} БиоМимикрия. Сделано с 
            <Heart size={16} className="mx-1 text-biomimicry-accent" /> 
            к природе
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
