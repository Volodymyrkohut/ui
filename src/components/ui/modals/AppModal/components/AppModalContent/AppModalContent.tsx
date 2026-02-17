import { type ReactNode, type FC } from 'react';
import c from './AppModalContent.module.scss';
import cn from "@/helpers/sn.ts";

interface IProps {
  children?: ReactNode;
  className?: string;
}

const AppModalContent: FC<IProps> = ({ children, className }) => {
  return (
    <div className={cn(c.content, className)}>
      {children}
    </div>
  );
};

export default AppModalContent;
