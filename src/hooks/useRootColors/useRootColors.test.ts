import { renderHook } from '@testing-library/react';
import useRootColors from '.';
import { COLORS, mockColors } from '@mocks/colors'

describe('useRootColors', () => {
    mockColors();

    it('Should return all colors', () => {
        const { result } = renderHook(() => useRootColors());
        expect(result.current).toEqual(COLORS)
    });
});
