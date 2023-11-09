import { renderHook, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import useClickOutside from '.';

const spyOnAddEvent = jest.spyOn(window, 'addEventListener');
const spyOnRemoveEvent = jest.spyOn(window, 'removeEventListener');
const spyOnLog = jest.spyOn(console, 'log');

describe('useClickOutside', () => {
    it('Should add event listener', () => {
        renderHook(() => useClickOutside(() => console.log('click outside')));

        expect(spyOnAddEvent).toHaveBeenCalled();
        expect(spyOnAddEvent).toHaveBeenCalledWith('click', expect.any(Function));
    });

    it('Should remove event listener, on unmount', () => {
        const { unmount } = renderHook(() => useClickOutside(() => console.log('click outside')));

        unmount();

        expect(spyOnRemoveEvent).toHaveBeenCalled();
        expect(spyOnRemoveEvent).toHaveBeenCalledWith('click', expect.any(Function));
    });

    it('Should not call callback function when click inside ref', async () => {
        const Comp = () => {
            const ref = useClickOutside<HTMLDivElement>(() => console.log('click outside'));

            return <div ref={ref}>Content</div>;
        };

        const { container } = render(<Comp />);

        await userEvent.click(container.querySelector('div') as HTMLDivElement);

        expect(spyOnLog).not.toHaveBeenCalled();
    });

    it('Should call callback function when click outside ref', async () => {
        const Comp = () => {
            const ref = useClickOutside<HTMLDivElement>(() => console.log('click outside'));

            return <div ref={ref}>Content</div>;
        };

        const { container } = render(<Comp />);

        await userEvent.click(container.querySelector('body') as HTMLBodyElement);

        expect(spyOnLog).toHaveBeenCalled();
        expect(spyOnLog).toHaveBeenCalledWith('click outside');
    });
});
