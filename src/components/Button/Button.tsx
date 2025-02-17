import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import clsx from 'clsx';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    styleMode?: 'red' | 'green';
    children: ReactNode;
}

export const Button: FC<ButtonProps> = ({
    className,
    styleMode,
    children,
    ...props
}) => {
    return (
        <button className={clsx('button', styleMode, className)} {...props}>
            {children}
        </button>
    );
};
