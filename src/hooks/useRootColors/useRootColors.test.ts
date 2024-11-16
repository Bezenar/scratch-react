import { renderHook } from '@testing-library/react';
import useRootColors from '.';
import UnitTestHelper from '@utils/UnitTestHelper';
import { COLORS } from '@mocks/colors'

describe('useRootColors', () => {
    UnitTestHelper.mockRootColors();

    it('Should return all colors', () => {
        const { result } = renderHook(() => useRootColors());
        expect(result.current).toEqual(COLORS)
    });
});
