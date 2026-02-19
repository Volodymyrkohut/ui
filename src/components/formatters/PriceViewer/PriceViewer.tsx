import styles from './PriceViewer.module.scss';
import React from "react";
import classNames from 'classnames';

type Props = {
  price: number | string
  className?: string
}

const PriceViewer: React.FC<Props> = (props) => {
  const { className, ...rest } = props;
  const selectCurrency = window.localStorage.getItem('currency') || 'UAH'; //
  const priceClassName = classNames(styles.priceViewer, className);

  const price = Number(props.price).toLocaleString('uk', {
    style: 'currency',
    currency: selectCurrency,
    currencyDisplay: 'symbol',
    minimumFractionDigits: 0,
  });

  const isUAH = price.includes('UAH');
  let priceText = isUAH ? price.replace('UAH', '') + '₴' : price;
  priceText = priceText.replace('грн', '₴').trim();

  return (
    <span className={priceClassName} {...rest}>
      <span className={styles.priceViewerPrice}>{priceText}</span>
    </span>
  );
};

export default PriceViewer;
