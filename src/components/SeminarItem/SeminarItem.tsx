import { Seminar } from '../../types/seminar';
import { getDate } from '../../utils/getDate';
import { Button } from '../Button/Button';
import './SeminarItem.css';

interface SeminarItemProps {
    seminar: Seminar;
    onDelete: (id: number) => void;
    onEdit: (seminar: Seminar) => void;
}

export const SeminarItem: React.FC<SeminarItemProps> = ({
    seminar,
    onDelete,
    onEdit,
}) => {
    const { id, title, description, date, time, photo } = seminar;

    return (
        <li className="card">
            <article className="card__content">
                <img
                    className="card__img"
                    src={photo}
                    alt={title}
                    width={200}
                    height={200}
                />
                <div className="card__info">
                    <h2 className="card__title">{title}</h2>
                    <p className="card__text">{description}</p>
                    <time className="card__date" dateTime={`${date}T${time}`}>
                        {getDate(date, time)}
                    </time>
                </div>
            </article>
            <div className="card__actions">
                <Button styleMode="green" onClick={() => onEdit(seminar)}>
                    edit
                </Button>
                <Button styleMode="red" onClick={() => onDelete(id)}>
                    delete
                </Button>
            </div>
        </li>
    );
};
