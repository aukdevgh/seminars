import { FC, ReactNode, type MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

import './Modal.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const handleClose = (event: MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget && onClose) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return createPortal(
        <div
            className={clsx('modal__overlay', { open: isOpen, close: !isOpen })}
            onClick={handleClose}
        >
            <div className="modal__content">{children}</div>
        </div>,
        document.body,
    );
};
