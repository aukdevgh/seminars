import { Seminar } from '../types/seminar';

const API_URL =
    import.meta.env.VITE_API_URL || 'http://localhost:5000/seminars';

export const seminarService = {
    async fetchSeminars() {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Не удалось получить семинары.');
        return response.json();
    },

    async deleteSeminar(id: number) {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Не удалось удалить семинар.');
    },

    async updateSeminar(updatedSeminar: Seminar) {
        const response = await fetch(`${API_URL}/${updatedSeminar.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedSeminar),
        });

        if (!response.ok) throw new Error('Не удалось обновить семинар.');
        return response.json();
    },
};
