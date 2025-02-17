import { FC } from 'react';
import './Error.css';

interface ErrorProps {
    error: string;
}
export const Error: FC<ErrorProps> = ({ error }) => (
    <p className="error">{error}</p>
);
