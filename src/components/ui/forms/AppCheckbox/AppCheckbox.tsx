import React from "react";
import styles from "./AppCheckbox.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  label?: string;
  isChecked: boolean;
  isDisabled?: boolean;
  variant?: IUiVariants;
  size?: IUiSizes;
}

const AppCheckbox: React.FC<IProps> = ({ label, isChecked, isDisabled, variant = 'primary', size = 'md', ...rest }) => {

  const classes = cx(styles.appCheckbox, styles[size], styles[variant], { checked: isChecked, disabled: isDisabled });

  return (
    <label className={classes}>
      <input type="checkbox" {...rest} checked={isChecked} disabled={isDisabled}/>
      <span className={styles.appCheckboxView}></span>
      {label && <div className={styles.appCheckboxLabel}>{label}</div>}
    </label>
  );
};

export default AppCheckbox;