import React from 'react'
import styles from './AppCard.module.scss'
import classNames from 'classnames/bind'
import AppButton from '@/components/ui/buttons/AppButton/AppButton'

const cx = classNames.bind(styles)

interface ICardProps {
  children?: React.ReactNode
  className?: string
  variant?: 'outlined' | 'elevated'
}

interface ISlotProps {
  children?: React.ReactNode
  className?: string
}

export interface ICardAction {
  label: string
  variant?: IUiVariants
  isDisabled?: boolean
  isLoading?: boolean
  onClick?: () => void
  href?: string
}

interface IFooterProps extends ISlotProps {
  actions?: ICardAction[]
}

const AppCard = ({ children, className, variant = 'outlined' }: ICardProps) => (
  <div className={cx(styles.appCard, styles[variant], className)}>
    {children}
  </div>
)

const Header = ({ children, className }: ISlotProps) => (
  <div className={cx(styles.appCardHeader, className)}>
    {children}
  </div>
)

const Body = ({ children, className }: ISlotProps) => (
  <div className={cx(styles.appCardBody, className)}>
    {children}
  </div>
)

const Footer = ({ children, className, actions }: IFooterProps) => (
  <div className={cx(styles.appCardFooter, className)}>
    {actions?.map(({ label, onClick, href, ...rest }) =>
      href ? (
        <AppButton key={label} size="small" href={href} {...rest}>
          {label}
        </AppButton>
      ) : (
        <AppButton key={label} size="small" onClick={onClick} {...rest}>
          {label}
        </AppButton>
      )
    )}
    {children}
  </div>
)

AppCard.Header = Header
AppCard.Body = Body
AppCard.Footer = Footer

export default AppCard
