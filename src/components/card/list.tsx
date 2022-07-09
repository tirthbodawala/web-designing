import { cardData } from './data';
import { Card } from './index';

export const CardList: React.FC = () => {
  return (
    <div>
      {cardData.map(cardInfo => (
        <Card
          key={cardInfo.id}
          title={cardInfo.title}
          description={cardInfo.description}
          descriptionMaxLength={20}
        />
      ))}
    </div>
  );
};
