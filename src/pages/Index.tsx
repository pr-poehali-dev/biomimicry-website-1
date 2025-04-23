import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BioCard from "@/components/BioCard";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const biomimicryExamples = [
    {
      title: "Липучка Velcro",
      description: "Вдохновением для создания застежек-липучек Velcro послужили колючки репейника, которые цепляются за шерсть животных и одежду. Инженер Жорж де Местраль изучил под микроскопом структуру этих колючек и обнаружил маленькие крючки, которые могут зацепляться за петли ткани. Это открытие привело к созданию универсальной застежки, используемой сегодня во множестве продуктов.",
      imageSrc: "https://images.unsplash.com/photo-1617178090037-52723a3b8142?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Структура Лотоса",
      description: "Листья лотоса обладают удивительной способностью к самоочищению благодаря своей микроструктуре. Поверхность листа покрыта крошечными бугорками с воскоподобным веществом, что делает его супергидрофобным. Капли воды скатываются с листа, захватывая частицы грязи. Этот 'эффект лотоса' вдохновил создание самоочищающихся красок, тканей и стекол.",
      imageSrc: "https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Акулья кожа",
      description: "Кожа акулы покрыта крошечными зубчатыми чешуйками (дермальными дентиклями), которые уменьшают сопротивление воды и препятствуют росту бактерий. Эта структура была адаптирована для создания антибактериальных поверхностей в больницах и быстрых купальных костюмов для профессиональных пловцов.",
      imageSrc: "https://images.unsplash.com/photo-1560275619-4cc5fa59d3ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title="Биомимикрия: Инновации, вдохновленные природой"
          subtitle="Наука, изучающая лучшие идеи природы и адаптирующая их для решения человеческих проблем"
          imageSrc="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        />
        
        <section className="bio-section">
          <div className="bio-container">
            <h2 className="bio-heading text-center">Что такое биомимикрия?</h2>
            <p className="text-lg mb-8 max-w-4xl mx-auto text-center">
              Биомимикрия — это подход к инновациям, который стремится к устойчивым решениям человеческих проблем путем подражания природным моделям, системам и элементам. Термин происходит от греческих слов βίος (bios), что означает жизнь, и μίμησις (mimesis), что означает имитация.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="rounded-full bg-biomimicry-light p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold text-biomimicry-text mb-3">Устойчивость</h3>
                <p className="text-gray-600">
                  Природа создает решения, которые эффективны, долговечны и не производят отходов.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="rounded-full bg-biomimicry-light p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold text-biomimicry-text mb-3">Инновации</h3>
                <p className="text-gray-600">
                  За 3.8 миллиарда лет эволюции природа нашла решения для большинства проблем, с которыми мы сталкиваемся сегодня.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="rounded-full bg-biomimicry-light p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🔄</span>
                </div>
                <h3 className="text-xl font-semibold text-biomimicry-text mb-3">Циркулярность</h3>
                <p className="text-gray-600">
                  В природе все перерабатывается, нет понятия отходов – всё является ресурсом для другого процесса.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <Separator className="my-0" />
        
        <section className="py-12 px-4 md:px-8">
          <div className="bio-container">
            <h2 className="bio-heading text-center">Примеры биомимикрии</h2>
            <p className="text-lg mb-8 max-w-4xl mx-auto text-center">
              Вот несколько примеров того, как изучение природных механизмов привело к инновационным технологическим решениям:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {biomimicryExamples.map((example, index) => (
                <BioCard
                  key={index}
                  title={example.title}
                  description={example.description}
                  imageSrc={example.imageSrc}
                  learnMoreLink="#"
                />
              ))}
            </div>
          </div>
        </section>
        
        <section className="bio-section">
          <div className="bio-container">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="bio-subheading">Принципы биомимикрии</h2>
                <p className="mb-4 text-gray-700">
                  Жанин Бенюс, одна из основоположниц биомимикрии, выделила несколько принципов, которыми природа руководствуется в своем "дизайне":
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-biomimicry mr-2">✓</span>
                    <span>Природа использует только энергию, которую ей необходимо, и полагается на энергию солнца</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-biomimicry mr-2">✓</span>
                    <span>Природа приспосабливает форму к функции</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-biomimicry mr-2">✓</span>
                    <span>Природа перерабатывает все</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-biomimicry mr-2">✓</span>
                    <span>Природа поощряет кооперацию</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-biomimicry mr-2">✓</span>
                    <span>Природа полагается на разнообразие</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-biomimicry mr-2">✓</span>
                    <span>Природа требует локальной экспертизы</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" 
                  alt="Природная структура" 
                  className="rounded-lg shadow-lg w-full h-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
