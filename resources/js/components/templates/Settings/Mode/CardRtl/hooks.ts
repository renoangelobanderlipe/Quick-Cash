import { useState } from 'react';

export const useHooks = () => {
    const [isRtl, setIsRtl] = useState(false);

    const toggleRtl = () => setIsRtl((prev) => !prev);
    return {
        toggleRtl,
        isRtl,
        setIsRtl,
    };
};
