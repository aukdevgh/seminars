import { FC } from 'react';
import clsx from 'clsx';

import './Skeleton.css';

interface SkeletonProps {
    className?: string;
    width: number;
    height: number;
    radius?: 4 | 8 | 12 | 16;
}

export const Skeleton: FC<SkeletonProps> = ({
    className,
    width,
    height,
    radius,
}) => {
    return (
        <div
            className={clsx('skeleton', className)}
            style={{ width: width, height: height, borderRadius: radius ?? 4 }}
        ></div>
    );
};
