import { useEffect } from 'react';

export default function useDisableScroll(disable: boolean) {
    useEffect(() => {
        const disableScroll = () => {
            const top = window.scrollY || document.documentElement.scrollTop;
            const left = window.scrollX || document.documentElement.scrollLeft;

            window.onscroll = () => {
                window.scrollTo(top, left);
            };
        };

        function enableScroll() {
            window.onscroll = function () {};
        }

        if (disable) {
            disableScroll();
        } else {
            enableScroll();
        }

        return () => {
            enableScroll();
        };
    }, [disable]);
}
