import { type ReactNode, type FC } from 'react'
import styles from './AppButton.module.scss'
import ButtonSpinner from './components/ButtonSpinner/ButtonSpinner'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

type Props = {
    isLoading?: boolean
    isDisabled?: boolean
    isUppercase?: boolean
    startIcon?: ReactNode
    endIcon?: ReactNode
    size?: IUiSizes
    variant?: IUiVariants
    fullWidth?: boolean
    children?: ReactNode
    className?: string
    href?: string
    target?: string
    type?: 'button' | 'submit' | 'reset'
    onClick?: React.MouseEventHandler<HTMLElement>
}

const AppButton: FC<Props> = ({
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
                                  target,
                                  type = 'button',
                                  onClick,
                              }) => {
    const disabled = isDisabled || isLoading

    const rootClassName = cx(
        styles.appButton,
        styles[size],
        styles[variant],
        {fullWidth, disabled, loading: isLoading, uppercase: isUppercase},
        className,
    )

    const content = (
        <>
            {isLoading && <ButtonSpinner/>}
            <span className={cx(styles.appButtonContent, {[styles.appButtonContentHidden]: isLoading})}>
        {startIcon && <span className={styles.icon}>{startIcon}</span>}
                {children != null && <span className={styles.appButtonText}>{children}</span>}
                {endIcon && <span className={styles.icon}>{endIcon}</span>}
      </span>
        </>
    )

    if (href) {
        return (
            <a
                href={disabled ? undefined : href}
                target={target}
                className={rootClassName}
                aria-disabled={disabled || undefined}
                tabIndex={disabled ? -1 : undefined}
                onClick={disabled ? (e) => {
                    e.preventDefault();
                    e.stopPropagation()
                } : onClick}
            >
                {content}
            </a>
        )
    }

    return (
        <button
            type={type}
            className={rootClassName}
            disabled={disabled}
            aria-busy={isLoading || undefined}
            onClick={onClick}
        >
            {content}
        </button>
    )
}

export default AppButton
