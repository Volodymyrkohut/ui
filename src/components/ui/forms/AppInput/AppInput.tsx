import React from "react";
import styles from "./AppInput.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

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
    <div className={
      cx(styles.appInput,
        styles[size],
        {
          [styles.appInputError]: error,
          [styles.appInputDisabled]: isDisabled
        },
        className,
      )}
         style={style}>
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