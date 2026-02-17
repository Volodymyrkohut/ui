import { type ReactNode, type FC, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styles from './AppModal.module.scss';
import cn from "@/helpers/sn.ts"

// add prop positionContent if there are modals appear on left or right side of screen
interface IProps {
  isOpen: boolean;
  onClose: () => void;
  size?: IUiSizes;
  fullWidth?: boolean;
  children?: ReactNode;
}

const AppModal: FC<IProps> = ({ isOpen, onClose, children, size = 'medium', fullWidth }) => {

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
      className={cn(styles.appModal, styles[size], fullWidth && styles.fullWidth)}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.appModalContent}>
        {children}
      </div>
      <div className={styles.appModalOverlayClose}  onClick={handleOverlayClick}></div>
    </div>,
    document.body,
  );
};

export default AppModal;
