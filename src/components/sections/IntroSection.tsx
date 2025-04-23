import React from "react";

const IntroSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-8">Что такое биомимикрия?</h2>
        <p className="text-lg mb-8 max-w-4xl mx-auto text-center text-gray-700">
          Биомимикрия — это подход к инновациям, который стремится к устойчивым решениям человеческих проблем путем подражания природным моделям, системам и элементам. Термин происходит от греческих слов βίος (bios), что означает жизнь, и μίμησις (mimesis), что означает имитация.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="rounded-full bg-green-100 p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-3">Устойчивость</h3>
            <p className="text-gray-700">
              Природа создает решения, которые эффективны, долговечны и не производят отходов.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="rounded-full bg-green-100 p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-3">Инновации</h3>
            <p className="text-gray-700">
              За 3.8 миллиарда лет эволюции природа нашла решения для большинства проблем, с которыми мы сталкиваемся сегодня.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="rounded-full bg-green-100 p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-3">Циркулярность</h3>
            <p className="text-gray-700">
              В природе все перерабатывается, нет понятия отходов – всё является ресурсом для другого процесса.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
