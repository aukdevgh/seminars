import { Seminar } from '../types/seminar';

export const seminarService = {
    async fetchSeminars() {
        const response = await fetch('api/seminars');
        if (!response.ok) throw new Error('Не удалось получить семинары.');
        return response.json();
    },

    async deleteSeminar(id: number) {
        const response = await fetch(`api/seminars/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Не удалось удалить семинар.');
    },

    async updateSeminar(updatedSeminar: Seminar) {
        const response = await fetch(`api/seminars/${updatedSeminar.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedSeminar),
        });

        if (!response.ok) throw new Error('Не удалось обновить семинар.');
        return response.json();
    },
};
