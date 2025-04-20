import { useState } from 'react';

export const useHooks = () => {
    const [isContrast, setIsContrast] = useState(false);

    const toggleContrast = () => setIsContrast((prev) => !prev);
    return {
        toggleContrast,
        isContrast,
        setIsContrast,
    };
};
