import React from "react";
import styles from "./AppCheckboxSkinPrimary.module.scss";
import cn from "@/helpers/sn.ts";
import PriceViewer from "@/components/formatters/PriceViewer/PriceViewer.tsx";


interface IProps extends React.HTMLAttributes<HTMLDivElement>{
  children?: React.ReactNode;
  isActive: boolean;
  isDisabled?: boolean;
  title: string;
  description: string;
}

const AppCheckboxSkinPrimary: React.FC<IProps> = (props) => {
  const {isActive, isDisabled, title, description, ...rest} = props;

  return (
    <div className={cn(styles.appCheckboxSkinPrimary, isActive && styles['active'], isDisabled && styles['disabled'])} {...rest}>
      <div className={styles.appCheckboxSkinPrimaryTitle}>{title}</div>
      <div className={styles.appCheckboxSkinPrimaryDescription}>{description}</div>
      <PriceViewer className={styles.appCheckboxSkinPrimaryPrice} price={1000} />
    </div>
  );
};

export default AppCheckboxSkinPrimary;