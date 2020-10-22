import { useState } from "react";

export function FormattedDate({ date }) {
    const [formattedDate] = useState(() => {
        const [year,month,day] = date.split('-');
        return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(Date.UTC(year, month - 1, day));
    });

    return <>{formattedDate}</>;
}