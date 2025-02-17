import { Skeleton } from '../Skeleton/Skeleton';
import './SeminarItem.css';

export const SeminarItemSkeleton = () => {
    return (
        <li className="card">
            <div className="card__content">
                <Skeleton
                    className="card__img"
                    width={200}
                    height={200}
                    radius={16}
                />
                <div className="card__info">
                    <Skeleton width={200} height={36} />
                    <Skeleton width={220} height={24} />
                    <Skeleton width={160} height={24} />
                    <Skeleton className="card__date" width={220} height={24} />
                </div>
            </div>
            <div className="card__actions">
                <Skeleton width={68} height={42} radius={8} />
                <Skeleton width={88} height={42} radius={8} />
            </div>
        </li>
    );
};
