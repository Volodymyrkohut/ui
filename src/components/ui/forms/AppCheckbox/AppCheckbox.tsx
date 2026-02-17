import React from "react";
import styles from "./AppCheckbox.module.scss";
import cn from "@/helpers/sn.ts";


interface IProps extends React.HTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  label?: string;
  isChecked: boolean;
  isDisabled?: boolean;
  variant?: IUiVariants;
  size?: IUiSizes;
}

const AppCheckbox: React.FC<IProps> = ({ label, isChecked, isDisabled, variant = 'primary', size = 'md', ...rest }) => {

  const classes = cn(styles.appCheckbox, styles[size], styles[variant], isChecked && 'checked', isDisabled && 'disabled');

  return (
    <label className={classes}>
      <input type="checkbox" {...rest} checked={isChecked} disabled={isDisabled}/>
      <span className={styles.appCheckboxView}></span>
      {label && <div className={styles.appCheckboxLabel}>{label}</div>}
    </label>
  );
};

export default AppCheckbox;