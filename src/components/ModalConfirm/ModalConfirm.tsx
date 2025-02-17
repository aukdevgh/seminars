import { FC } from 'react';

import { Modal } from '../Modal/Modal';
import { Button } from '../Button/Button';
import './ModalConfirm.css';

interface ModalConfirmProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export const ModalConfirm: FC<ModalConfirmProps> = ({
    isOpen,
    onClose,
    onConfirm,
}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2>Вы действительно хотите удалить семинар?</h2>

            <div className="confirm__actions">
                <Button styleMode="green" type="submit" onClick={onConfirm}>
                    Удалить
                </Button>
                <Button styleMode="red" type="button" onClick={onClose}>
                    Отмена
                </Button>
            </div>
        </Modal>
    );
};
