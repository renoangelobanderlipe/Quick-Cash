import { useState } from 'react';

export const useHooks = () => {
    const [isCompact, setCompact] = useState(false);

    const toggleCompact = () => setCompact((prev) => !prev);
    return {
        toggleCompact,
        isCompact,
        setCompact,
    };
};
