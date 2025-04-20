import { useCallback, useEffect, useState } from 'react';

export const useFullscreen = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const getFullscreenElement = (): Element | null =>
        document.fullscreenElement ||
        // @ts-expect-error - legacy WebKit support
        document.webkitFullscreenElement ||
        // @ts-expect-error - legacy MS support
        document.msFullscreenElement ||
        null;

    const enterFullscreen = useCallback((element: HTMLElement = document.documentElement) => {
        if (element.requestFullscreen) {
            element.requestFullscreen().catch(console.error);
        } else if (
            // @ts-expect-error - legacy WebKit support
            element.webkitRequestFullscreen
        ) {
            // @ts-expect-error - legacy WebKit support
            element.webkitRequestFullscreen();
        } else if (
            // @ts-expect-error - legacy MS support
            element.msRequestFullscreen
        ) {
            // @ts-expect-error - legacy MS support
            element.msRequestFullscreen();
        } else {
            console.warn('Fullscreen API is not supported.');
        }
    }, []);

    const exitFullscreen = useCallback(() => {
        if (document.exitFullscreen) {
            document.exitFullscreen().catch(console.error);
        } else if (
            // @ts-expect-error - legacy WebKit support
            document.webkitExitFullscreen
        ) {
            // @ts-expect-error - legacy WebKit support
            document.webkitExitFullscreen();
        } else if (
            // @ts-expect-error - legacy MS support
            document.msExitFullscreen
        ) {
            // @ts-expect-error - legacy MS support
            document.msExitFullscreen();
        }
    }, []);

    const toggleFullscreen = useCallback(() => {
        if (!getFullscreenElement()) {
            enterFullscreen();
        } else {
            exitFullscreen();
        }
    }, [enterFullscreen, exitFullscreen]);

    useEffect(() => {
        const handleChange = () => {
            setIsFullscreen(!!getFullscreenElement());
        };

        document.addEventListener('fullscreenchange', handleChange);
        document.addEventListener('webkitfullscreenchange', handleChange);
        document.addEventListener('msfullscreenchange', handleChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleChange);
            document.removeEventListener('webkitfullscreenchange', handleChange);
            document.removeEventListener('msfullscreenchange', handleChange);
        };
    }, []);

    return {
        isFullscreen,
        enterFullscreen,
        exitFullscreen,
        toggleFullscreen,
    };
};
