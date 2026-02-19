import React from 'react'
import styles from './AppOptionCard.module.scss'
import classNames from 'classnames/bind'
import PriceViewer from '@/components/formatters/PriceViewer/PriceViewer'

const cx = classNames.bind(styles)

type Props = React.HTMLAttributes<HTMLDivElement> & {
  title: string
  description?: string
  price?: number | string
  isActive: boolean
  isDisabled?: boolean
}

const AppOptionCard: React.FC<Props> = ({
                                             title,
                                             description,
                                             price,
                                             isActive,
                                             isDisabled,
                                             className,
                                             ...rest
                                         }) => (
    <div
        className={cx(styles.appOptionCard, {active: isActive, disabled: isDisabled}, className)}
        {...rest}
    >
        <div className={styles.appOptionCardTitle}>{title}</div>
        {description && (
            <div className={styles.appOptionCardDescription}>{description}</div>
        )}
        {price != null && (
            <PriceViewer className={styles.appOptionCardPrice} price={price}/>
        )}
    </div>
)

export default AppOptionCard
