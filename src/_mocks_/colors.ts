import type { I_RootColors } from '@t/icons';

export const COLORS: I_RootColors = {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#D3FD53',
    secondary: '#25A043',
    red: '#E70B0B',
} as I_RootColors;

export function mockColors() {
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
}
