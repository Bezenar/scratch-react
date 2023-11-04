import { renderHook, waitFor } from '@testing-library/react';
import useTimeout from '.';

let VALUE = 'value';
const DELAY_TIME = 300;
const mockDelayFunction = jest.fn();

const spyOnClearTimeout = jest.spyOn(window, 'clearTimeout');

describe('useTimeout', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Should call delayFunction after delayTime', async () => {
        renderHook<void, Parameters<typeof useTimeout>>(() =>
            useTimeout<string, (val: string) => string>(VALUE, mockDelayFunction, DELAY_TIME)
        );

        await waitFor(
            () => {
                expect(mockDelayFunction).toHaveBeenCalled();
                expect(mockDelayFunction).toHaveBeenCalledWith(VALUE);
            },
            { timeout: DELAY_TIME + 100 }
        );
    });

    it('Should call delay function only once', async () => {
        const { rerender } = renderHook<void, Parameters<typeof useTimeout>>(() =>
            useTimeout<string, (val: string) => string>(VALUE, mockDelayFunction, DELAY_TIME)
        );
        rerender(['12', mockDelayFunction, DELAY_TIME]);
        rerender(['1234', mockDelayFunction, DELAY_TIME]);
        rerender(['123456', mockDelayFunction, DELAY_TIME]);

        await waitFor(
            () => {
                expect(mockDelayFunction).toHaveBeenCalledTimes(1);
            },
            { timeout: DELAY_TIME + 10 }
        );
    });

    it('On unmount should call clear timeout', async () => {
        const { unmount } = renderHook<void, Parameters<typeof useTimeout>>(() =>
            useTimeout<string, (val: string) => string>(VALUE, mockDelayFunction, DELAY_TIME)
        );

        await unmount();

        expect(spyOnClearTimeout).toHaveBeenCalled();
    });
});
