import { useAppearance } from '@/hooks/use-appearance';

export const useHooks = () => {
    const { appearance, updateAppearance } = useAppearance();
    return {
        appearance,
        updateAppearance,
    };
};
