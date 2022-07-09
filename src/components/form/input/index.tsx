import { forwardRef } from 'react';
import { getExtraClasses } from '@utils/common';
import cn from 'classnames';
import styles from './style.scss';

interface IInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
}

export const Input = forwardRef<any, IInputProps>((
  { className, ...restInputProps }, ref) => {
  const classNames = getExtraClasses(styles, className);
  return (
    <input
      ref={ref}
      className={cn(classNames, styles.customInput)}
      {...restInputProps}
    />
  );
});
