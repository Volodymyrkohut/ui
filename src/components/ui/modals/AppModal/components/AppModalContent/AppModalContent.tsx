import { type ReactNode, type FC } from 'react';
import styles from './AppModalContent.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface IProps {
  children?: ReactNode;
  className?: string;
}

const AppModalContent: FC<IProps> = ({ children, className }) => {
  return (
    <div className={cx(styles.content, className)}>
      {children}
    </div>
  );
};

export default AppModalContent;
