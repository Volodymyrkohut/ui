import React from 'react';
import classnames from 'classnames';

import styles from './Typography.module.scss';

type Props = {
    variant:
        | 'caption1'
        | 'body1'
        | 'body2'
        | 'body1Strong'
        | 'subTitle1'
        | 'subTitle2'
        | 'subTitle2Strong'
        | 'largeTitle'
        | 'title1'
        | 'title2'
        | 'title3';
    text?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    color?: string;
    className?: string;
};

const Typography: React.FC<Props> = ({ children, text, variant, className, color, style = {} }) => {
    const classNames = classnames(styles.typography, styles[variant], className);

    const inlineStyle: React.CSSProperties = { ...style };
    if (color) inlineStyle.color = color;

    return (
        <span className={classNames} style={inlineStyle}>
            {text || children}
        </span>
    );
};

export default Typography;
