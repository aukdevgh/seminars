import { useState } from 'react';

export const useToggle = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);
    const onOpen = () => setIsOpen(true);

    return { isOpen, onOpen, onClose };
};
