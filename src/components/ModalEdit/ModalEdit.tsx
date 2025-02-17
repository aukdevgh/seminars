import { FC, useState } from 'react';

import { Seminar } from '../../types/seminar';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import './ModalEdit.css';

interface ModalEditProps {
    isOpen: boolean;
    seminar: Seminar;
    onClose: () => void;
    onSave: (updatedSeminar: Seminar) => void;
}

export const ModalEdit: FC<ModalEditProps> = ({
    isOpen,
    seminar,
    onClose,
    onSave,
}) => {
    const [updatedSeminar, setUpdatedSeminar] = useState<Seminar>(seminar);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;

        if (name === 'date') {
            setUpdatedSeminar(prev => ({
                ...prev,
                [name]: value.split('-').reverse().join('.'),
            }));
        } else {
            setUpdatedSeminar(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(updatedSeminar);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h2>Редактировать семинар</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__field">
                    <label>Название:</label>
                    <input
                        className="form__input"
                        type="text"
                        name="title"
                        value={updatedSeminar.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__field">
                    <label>Описание:</label>
                    <textarea
                        className="form__input"
                        name="description"
                        value={updatedSeminar.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__field">
                    <label>Дата:</label>
                    <input
                        className="form__input"
                        type="date"
                        name="date"
                        value={updatedSeminar.date}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__field">
                    <label>Время:</label>
                    <input
                        className="form__input"
                        type="time"
                        name="time"
                        value={updatedSeminar.time}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__field">
                    <label>Фото URL:</label>
                    <input
                        className="form__input"
                        type="text"
                        name="photo"
                        value={updatedSeminar.photo}
                        onChange={handleChange}
                        pattern="https?://.*"
                        title="Введите ссылку на изображение (например: https://picsum.photos/id/1)"
                    />
                </div>
                <div className="form__actions">
                    <Button styleMode="green" type="submit">
                        Сохранить
                    </Button>
                    <Button styleMode="red" type="button" onClick={onClose}>
                        Закрыть
                    </Button>
                </div>
            </form>
        </Modal>
    );
};
