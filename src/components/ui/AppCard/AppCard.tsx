import React from 'react'
import styles from './AppCard.module.scss'
import classNames from 'classnames/bind'
import AppButton from '@/components/ui/buttons/AppButton/AppButton'

const cx = classNames.bind(styles)

type CardProps = {
  children?: React.ReactNode
  className?: string
  variant?: 'outlined' | 'elevated'
}

type SlotProps = {
  children?: React.ReactNode
  className?: string
}

export type CardAction = {
  label: string
  variant?: IUiVariants
  isDisabled?: boolean
  isLoading?: boolean
  onClick?: () => void
  href?: string
}

type FooterProps = SlotProps & {
  actions?: CardAction[]
}

const AppCard = ({ children, className, variant = 'outlined' }: CardProps) => (
  <div className={cx(styles.appCard, styles[variant], className)}>
    {children}
  </div>
)

const Header = ({ children, className }: SlotProps) => (
  <div className={cx(styles.appCardHeader, className)}>
    {children}
  </div>
)

const Body = ({ children, className }: SlotProps) => (
  <div className={cx(styles.appCardBody, className)}>
    {children}
  </div>
)

const Footer = ({ children, className, actions }: FooterProps) => (
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
