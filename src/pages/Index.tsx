import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BioCard from "@/components/BioCard";
import InfoSection from "@/components/InfoSection";
import BioGallery from "@/components/BioGallery";
import ImageWithFallback from "@/components/ImageWithFallback";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

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

  const moreExamples = [
    {
      title: "Крылья стрекозы",
      imageSrc: "https://images.unsplash.com/photo-1621736583408-4df3cdc273a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Крылья стрекозы послужили вдохновением для создания более эффективных ветряных турбин. Их уникальная структура позволяет им быть одновременно прочными и легкими."
    },
    {
      title: "Морфо-бабочка",
      imageSrc: "https://images.unsplash.com/photo-1551522266-1967cb35d2bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Яркий синий цвет крыльев бабочки морфо происходит не от пигмента, а от микроструктуры чешуек, которые отражают свет определенным образом. Эта технология используется для создания тканей и экранов."
    },
    {
      title: "Термитники",
      imageSrc: "https://images.unsplash.com/photo-1602871271747-188cc5e21a93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Сложная система вентиляции в термитниках вдохновила архитекторов на создание энергоэффективных зданий с пассивным охлаждением, таких как Eastgate Centre в Зимбабве."
    },
    {
      title: "Паутина",
      imageSrc: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Паутина в пять раз прочнее стали того же веса. Ученые изучают структуру этого материала для создания прочных, легких и биоразлагаемых материалов."
    },
    {
      title: "Клюв зимородка",
      imageSrc: "https://images.unsplash.com/photo-1635962047786-9a3da1805a7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Форма клюва зимородка вдохновила инженеров Shinkansen на создание более аэродинамичного и тихого высокоскоростного поезда в Японии."
    },
    {
      title: "Структура дерева",
      imageSrc: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Разветвленная структура деревьев и их способность выдерживать сильные ветры вдохновила архитекторов на создание более прочных и эффективных опорных конструкций."
    }
  ];

  const applications = [
    {
      title: "Архитектура",
      imageSrc: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "В архитектуре биомимикрия используется для создания энергоэффективных зданий, вдохновленных природными формами и процессами. Примером является здание Eastgate Center в Зимбабве, вентиляционная система которого основана на термитниках."
    },
    {
      title: "Транспорт",
      imageSrc: "https://images.unsplash.com/photo-1553293491-c3f89a5d097e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "В транспортной отрасли дизайн высокоскоростных поездов был улучшен благодаря изучению формы клюва зимородка, а конструкция крыльев самолетов – благодаря наблюдениям за крыльями птиц и насекомых."
    },
    {
      title: "Медицина",
      imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "В медицине биомимикрия помогает создавать новые материалы для искусственных органов, медицинских имплантатов и лекарственных препаратов, вдохновляясь природными процессами и структурами."
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
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" 
                  alt="Природная структура" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-8">
          <div className="bio-container">
            <h2 className="bio-heading text-center mb-12">Галерея биомимикрии</h2>
            <BioGallery items={moreExamples} />
          </div>
        </section>

        <section className="bio-section py-16">
          <div className="bio-container">
            <h2 className="bio-heading text-center mb-6">История биомимикрии</h2>
            <p className="text-lg mb-12 max-w-4xl mx-auto text-center">
              Хотя термин "биомимикрия" появился недавно, люди наблюдали за природой и адаптировали её решения на протяжении тысячелетий.
            </p>
            
            <InfoSection 
              title="От Леонардо да Винчи до наших дней"
              content="Великие умы истории, такие как Леонардо да Винчи, черпали вдохновение из природы. Он изучал птиц, чтобы разработать концепции летательных аппаратов. Современная биомимикрия как научная дисциплина сформировалась в последние десятилетия благодаря работам Жанин Бенюс, которая популяризировала этот подход в своей книге 'Биомимикрия: Инновации, вдохновленные природой' (1997)."
              imageSrc="https://images.unsplash.com/photo-1553986782-9f6de60b51ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
              imagePosition="left"
              buttonText="Узнать больше об истории"
            />
          </div>
        </section>

        <section className="py-16 px-4 md:px-8">
          <div className="bio-container">
            <h2 className="bio-heading text-center mb-6">Области применения</h2>
            <p className="text-lg mb-12 max-w-4xl mx-auto text-center">
              Биомимикрия находит применение во множестве областей — от архитектуры и дизайна до медицины и робототехники.
            </p>
            
            <BioGallery items={applications} />
            
            <div className="text-center mt-12">
              <Button className="bg-biomimicry hover:bg-biomimicry-dark text-lg py-6 px-8">
                Исследовать все области применения
              </Button>
            </div>
          </div>
        </section>
        
        <section className="bio-section py-16">
          <div className="bio-container">
            <h2 className="bio-heading text-center">Будущее биомимикрии</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-biomimicry-text mb-4">Устойчивое развитие</h3>
                <p className="text-gray-700 mb-4">
                  Биомимикрия играет ключевую роль в создании устойчивых технологий и материалов. Подражая природным процессам, мы можем разрабатывать системы, которые не истощают ресурсы планеты и минимизируют отходы.
                </p>
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" 
                  alt="Устойчивое развитие" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-biomimicry-text mb-4">Решение глобальных проблем</h3>
                <p className="text-gray-700 mb-4">
                  От очистки океанов от пластика до борьбы с изменением климата — биомимикрия предлагает инновационные подходы к решению многих глобальных проблем. Изучая экосистемы и организмы, мы можем найти ответы на самые сложные вызовы современности.
                </p>
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1569163139599-0f3532132114?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" 
                  alt="Решение глобальных проблем" 
                  className="rounded-lg w-full h-auto"
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
