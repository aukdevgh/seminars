import { parse, format } from 'date-fns';
import { ru } from 'date-fns/locale';

export const getDate = (dateStr: string, timeStr: string) => {
    const date = parse(dateStr, 'dd.MM.yyyy', new Date());
    const [hours, minutes] = timeStr.split(':').map(Number);
    date.setHours(hours, minutes);

    return format(date, 'EEEE, d MMMM yyyy, HH:mm B', { locale: ru });
};
