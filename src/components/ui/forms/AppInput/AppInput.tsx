import React from "react";
import styles from "./AppInput.module.scss";
import classNames from "classnames/bind";
import InputSpinner from "./components/InputSpinner/InputSpinner";

const cx = classNames.bind(styles);

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  help?: string
  label?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  isDisabled?: boolean
  isLoading?: boolean
  size?: IUiSizes
}

const AppInput: React.FC<Props> = (props) => {
  const {
    label,
    startIcon,
    endIcon,
    error,
    help,
    className,
    style,
    isDisabled,
    isLoading = false,
    size = 'medium',
    ...rest
  } = props;

  const disabled = isDisabled || isLoading;
  const endSlot = isLoading ? <InputSpinner /> : endIcon;

  return (
    <div
      className={cx(
        styles.appInput,
        styles[size],
        {
          [styles.appInputError]: error,
          [styles.hasStartIcon]: startIcon,
          [styles.hasEndIcon]: endSlot,
        },
        className,
      )}
      style={style}
    >
      {label && <label className={styles.appInputLabel}>{label}</label>}
      <div className={styles.appInputWrapper}>
        {startIcon && (
          <div className={cx(styles.appInputIcon, styles.appInputIconStart)}>
            {startIcon}
          </div>
        )}
        <input className={styles.appInputField} disabled={disabled} {...rest} />
        {endSlot && (
          <div className={cx(styles.appInputIcon, styles.appInputIconEnd)}>
            {endSlot}
          </div>
        )}
      </div>
      {error && <span className={styles.appInputErrorText}>{error}</span>}
      {help && <span className={styles.appInputHelp}>{help}</span>}
    </div>
  );
};

export default AppInput;
