import { renderHook } from '@testing-library/react';
import useRootColors from '.';
import { I_RootColors } from '@t/icons';

const COLORS: I_RootColors = {
    'white': '#FFFFFF',
    'black': '#000000',
    'primary': '#D3FD53',
    'secondary': '#25A043',
    'red': '#E70B0B',
}

describe('useRootColors', () => {
    beforeAll(() => {
        Object.entries(COLORS).forEach(([key, value]) => {
            document.documentElement.style.setProperty(`--${key}`, value);
        });
    });

    afterAll(() => {
        Object.keys(COLORS).forEach((key) => {
            document.documentElement.style.removeProperty(`--${key}`);
        });
    });

    it('Should return all colors', () => {
        const { result } = renderHook(() => useRootColors());
        expect(result.current).toEqual(COLORS)
    });
});
