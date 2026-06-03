import Slider from 'react-slick';
import { SecurityCard } from './SecurityCard';

interface Card {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

interface SwipableCardRowProps {
  title: string;
  cards: Card[];
  category: 'game' | 'resource' | 'policy';
}

export function SwipableCardRow({ title, cards, category }: SwipableCardRowProps) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.3,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    variableWidth: true,
  };

  const categoryIcons = {
    game: '🎮',
    resource: '📚',
    policy: '🛡️',
  };

  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4 px-6">
        <span className="text-2xl">{categoryIcons[category]}</span>
        <h2 className="text-foreground">{title}</h2>
      </div>

      <div className="pl-6">
        <Slider {...settings}>
          {cards.map((card) => (
            <div key={card.id} className="pr-4">
              <SecurityCard
                title={card.title}
                subtitle={card.subtitle}
                image={card.image}
                category={category}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
