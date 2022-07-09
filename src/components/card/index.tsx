import { useState } from 'react';
import { Input } from '@components/form/input';
import cn from 'classnames';
import styles from './styles.scss';
import { Button } from '@components/button';

export const Card: React.FC<
{ title: string, description?: string, descriptionMaxLength?: number }
> = ({
  title,
  description = '',
  descriptionMaxLength = 10,
}) => {
  const [
    currentDisplayLength,
    setCurrentDisplayLength,
  ] = useState<number>(descriptionMaxLength);

  const onReadMoreClick = () => {
    setCurrentDisplayLength(description.length);
  };

  const shouldHaveReadMore = description.length > currentDisplayLength;
  // const formattedDescription = shouldHaveReadMore ? description.substring(0, currentDisplayLength) : description;
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      {!!description && (
        <p
          className={
            cn({
              [styles.displayFullLength]: !shouldHaveReadMore,
            })
          }
        >
          {description}
          {shouldHaveReadMore && (
            <Button onClick={onReadMoreClick}>Read More</Button>
          )}
        </p>
      )}
      <Input defaultValue="ABC" className="mt10 colorRed" />
    </div>
  );
};
