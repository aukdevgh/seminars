import { useEffect, useState } from 'react';
import { Seminar } from './types/seminar';
import { useToggle } from './hooks/useToggle';
import { SeminarList } from './components/SeminarList/SeminarList';
import { Error } from './components/Error/Error';
import { ModalEdit } from './components/ModalEdit/ModalEdit';
import { ModalConfirm } from './components/ModalConfirm/ModalConfirm';
import { seminarService } from './services/seminarService';
import './App.css';

function App() {
    const [seminars, setSeminars] = useState<Seminar[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const {
        isOpen: isEditOpen,
        onOpen: onEditOpen,
        onClose: onEditClose,
    } = useToggle();
    const {
        isOpen: isConfirmOpen,
        onOpen: onConfirmOpen,
        onClose: onConfirmClose,
    } = useToggle();

    const [selectedSeminar, setSelectedSeminar] = useState<Seminar | null>(
        null,
    );
    const [idToDelete, setIdToDelete] = useState<number | null>(null);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const data = await seminarService.fetchSeminars();
                setSeminars(data);
            } catch (err) {
                setError(err as Error);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    const handleDeleteClick = (id: number) => {
        setIdToDelete(id);
        onConfirmOpen();
    };

    const confirmDelete = async () => {
        if (!idToDelete) return;
        try {
            await seminarService.deleteSeminar(idToDelete);
            setSeminars(prev => prev.filter(s => s.id !== idToDelete));
        } catch (err) {
            setError(err as Error);
        } finally {
            setIdToDelete(null);
            onConfirmClose();
        }
    };

    const handleEditClick = (seminar: Seminar) => {
        setSelectedSeminar(seminar);
        onEditOpen();
    };

    const handleSave = async (updatedSeminar: Seminar) => {
        try {
            await seminarService.updateSeminar(updatedSeminar);
            setSeminars(prev =>
                prev.map(seminar =>
                    seminar.id === updatedSeminar.id ? updatedSeminar : seminar,
                ),
            );
        } catch (err) {
            setError(err as Error);
        }
    };

    if (error) {
        return <Error error={error.message} />;
    }

    return (
        <div>
            <h1 className="app__title">Семинары</h1>

            <SeminarList
                seminars={seminars}
                isLoading={isLoading}
                onDelete={handleDeleteClick}
                onEdit={handleEditClick}
            />

            {selectedSeminar && (
                <ModalEdit
                    isOpen={isEditOpen}
                    seminar={selectedSeminar}
                    onClose={onEditClose}
                    onSave={handleSave}
                />
            )}
            <ModalConfirm
                isOpen={isConfirmOpen}
                onClose={onConfirmClose}
                onConfirm={confirmDelete}
            />
        </div>
    );
}

export default App;
