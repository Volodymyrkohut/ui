import React from "react";
import styles from "./AppInput.module.scss";
import cn from "@/helpers/sn.ts"

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  error?: string;
  help?: string;
  label?: string;
  icon?: React.ReactNode;
  isDisabled?: boolean;
  size?: IUiSizes;
}

const AppInput: React.FC<IProps> = (props) => {
  const {
    label,
    icon,
    error,
    help,
    className,
    style,
    isDisabled,
    size = 'medium',
    ...rest
  } = props;

  return (
    <div className={cn(styles.appInput, styles[size], error && styles.appInputError, className, isDisabled && styles.appInputDisabled)} style={style}>
      {label && <label className={styles.appInputLabel}>{label}</label>}
      <div className={styles.appInputWrapper}>
        <input className={styles.appInputField} disabled={isDisabled} {...rest}/>
        {icon && <div className={styles.appInputIcon}>{icon}</div>}
      </div>
      {error && <span className={styles.appInputError}>{error}</span>}
      {help && <span className={styles.appInputHelp}>{help}</span>}
    </div>
  );
};

export default AppInput;