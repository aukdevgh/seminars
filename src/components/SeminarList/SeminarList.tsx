import { Seminar } from '../../types/seminar';
import { SeminarItem } from '../SeminarItem/SeminarItem';
import { SeminarItemSkeleton } from '../SeminarItem/SeminarItem.skeleton';
import './SeminarList.css';

interface SeminarListProps {
    seminars: Seminar[];
    isLoading: boolean;
    onDelete: (id: number) => void;
    onEdit: (seminar: Seminar) => void;
}

export const SeminarList: React.FC<SeminarListProps> = ({
    seminars,
    isLoading,
    onDelete,
    onEdit,
}) => {
    return (
        <ul className="list">
            {isLoading
                ? [1, 2, 3, 4].map(item => <SeminarItemSkeleton key={item} />)
                : seminars.map(seminar => (
                      <SeminarItem
                          key={seminar.id}
                          seminar={seminar}
                          onDelete={onDelete}
                          onEdit={onEdit}
                      />
                  ))}
        </ul>
    );
};
