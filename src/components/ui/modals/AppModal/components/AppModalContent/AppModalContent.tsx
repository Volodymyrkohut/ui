import { type ReactNode, type FC } from 'react'
import styles from './AppModalContent.module.scss'
import classNames from 'classnames/bind'
import AppButton from '@/components/ui/buttons/AppButton/AppButton'

const cx = classNames.bind(styles)

export interface IModalAction {
  label: string
  variant?: IUiVariants
  isDisabled?: boolean
  isLoading?: boolean
  onClick?: () => void
  href?: string
}

interface IProps {
  children?: ReactNode
  className?: string
}

interface IFooterProps {
  children?: ReactNode
  className?: string
  actions?: IModalAction[]
}

const AppModalContent: FC<IProps> & { Footer: FC<IFooterProps> } = ({ children, className }) => (
  <div className={cx(styles.content, className)}>
    {children}
  </div>
)

const Footer: FC<IFooterProps> = ({ children, className, actions }) => (
  <div className={cx(styles.contentFooter, className)}>
    {actions?.map(({ label, onClick, href, ...rest }) =>
      href ? (
        <AppButton key={label} size="small" href={href} {...rest}>{label}</AppButton>
      ) : (
        <AppButton key={label} size="small" onClick={onClick} {...rest}>{label}</AppButton>
      )
    )}
    {children}
  </div>
)

AppModalContent.Footer = Footer

export default AppModalContent
