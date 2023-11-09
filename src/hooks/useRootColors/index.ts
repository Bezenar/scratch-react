import { useMemo } from 'react';
import { I_RootColors } from '@t/icons';

export default function useRootColors(): I_RootColors {
    const data = useMemo(() => {
        const computedStyles = getComputedStyle(document.documentElement);

        return {
            primary: computedStyles.getPropertyValue('--primary'),
            secondary: computedStyles.getPropertyValue('--secondary'),
            white: computedStyles.getPropertyValue('--white'),
            black: computedStyles.getPropertyValue('--black'),
            red: computedStyles.getPropertyValue('--red'),
        };
    }, []);

    return data;
}
