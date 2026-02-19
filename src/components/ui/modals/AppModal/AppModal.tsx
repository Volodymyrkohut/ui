import { type ReactNode, type FC, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styles from './AppModal.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

// add prop positionContent if there are modals appear on left or right side of screen
interface IProps {
    isOpen: boolean;
    onClose: () => void;
    size?: IUiSizes;
    fullWidth?: boolean;
    children?: ReactNode;
}

const AppModal: FC<IProps> = ({isOpen, onClose, children, size = 'medium', fullWidth}) => {
    const handleEscape = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        },
        [onClose],
    );

    const handleOverlayClick = useCallback(() => {
            onClose();
        },
        [onClose],
    );

    useEffect(() => {
        if (!isOpen) return;

        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isOpen, handleEscape]);

    if (!isOpen) return null;

    return createPortal(
        <div
            className={cx(styles.appModal, styles[size], {fullWidth})}
            role="dialog"
            aria-modal="true"
        >
            <div className={styles.appModalContent}>
                {children}
            </div>
            <div className={styles.appModalOverlayClose} onClick={handleOverlayClick}></div>
        </div>,
        document.body,
    );
};

export default AppModal;
