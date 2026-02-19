import {
  type ReactNode,
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
  type MouseEvent as ReactMouseEvent, type FC,
} from 'react';

import styles from './AppButton.module.scss';
import pickNativeProps from "@/components/ui/buttons/AppButton/helpers/pickNativeProps.ts";
import ButtonSpinner from "@/components/ui/buttons/AppButton/components/ButtonSpinner/ButtonSpinner.tsx";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface BaseProps {
  isLoading?: boolean;
  isDisabled?: boolean;
  isUppercase?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  size?: IUiSizes;
  variant?: IUiVariants;
  fullWidth?: boolean;
  children?: ReactNode;
}

type NativeButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> & {
  href?: undefined;
  to?: undefined;
};

type AnchorButtonProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
  to?: undefined;
};

type RouterLinkButtonProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  to: string;
  href?: undefined;
};

type AppButtonProps =
  | NativeButtonProps
  | AnchorButtonProps
  | RouterLinkButtonProps;

const AppButton: FC<AppButtonProps> = (props) => {
  const {
    isLoading = false,
    isDisabled = false,
    isUppercase = false,
    startIcon,
    endIcon,
    size = 'medium',
    variant = 'primary',
    fullWidth = false,
    children,
    className,
    href,
    to,
  } = props;

  const disabled = isDisabled || isLoading;

  const rootClassName = cx(
    styles.appButton,
    styles[size],
    styles[variant],
    {
      fullWidth,
      disabled,
      loading: isLoading,
      uppercase: isUppercase,
    },
    className,
  );

  const content = (
    <>
      {isLoading && <ButtonSpinner/>}
      <span className={cx(styles.appButtonContent, { [styles.appButtonContentHidden]: isLoading })}>
        {startIcon && <span className={styles.icon}>{startIcon}</span>}
        {children != null && <span className={styles.appButtonText}>{children}</span>}
        {endIcon && <span className={styles.icon}>{endIcon}</span>}
      </span>
    </>
  );

  const nativeProps = pickNativeProps(
    props as unknown as Record<string, unknown>,
  );

  const handleDisabledClick = (e: ReactMouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  if (href) {
    return (
      <a
        {...(nativeProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
        href={disabled ? undefined : href}
        className={rootClassName}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        {...(disabled ? { onClick: handleDisabledClick } : undefined)}
      >
        {content}
      </a>
    );
  }

  if (to) {
    return (
      <a
        {...(nativeProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
        href={disabled ? undefined : to}
        className={rootClassName}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        {...(disabled ? { onClick: handleDisabledClick } : undefined)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      {...(nativeProps as ButtonHTMLAttributes<HTMLButtonElement>)}
      type={(props as NativeButtonProps).type ?? 'button'}
      className={rootClassName}
      disabled={disabled}
      aria-busy={isLoading || undefined}
    >
      {content}
    </button>
  );
}


export default AppButton;