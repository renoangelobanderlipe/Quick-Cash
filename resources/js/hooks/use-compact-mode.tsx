import { createContext, ReactNode, useCallback, useContext, useState } from 'react';

type CompactModeContextType = {
    isCompact: boolean;
    setCompact: (value: boolean) => void;
    toggleCompact: () => void;
};

const CompactModeContext = createContext<CompactModeContextType | undefined>(undefined);

export const CompactModeProvider = ({ children }: { children: ReactNode }) => {
    const [isCompact, setCompact] = useState(false);

    const toggleCompact = useCallback(() => {
        setCompact((prev) => !prev);
    }, []);

    return <CompactModeContext.Provider value={{ isCompact, setCompact, toggleCompact }}>{children}</CompactModeContext.Provider>;
};

export const useCompactMode = () => {
    const context = useContext(CompactModeContext);
    if (!context) {
        throw new Error('useCompactMode must be used within a CompactModeProvider');
    }
    return context;
};
