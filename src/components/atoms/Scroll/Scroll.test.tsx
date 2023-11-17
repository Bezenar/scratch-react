import { render } from '@testing-library/react';
import Scroll from '.';

describe('<Scroll />', () => {
    afterAll(() => {
        Object.defineProperty(HTMLElement.prototype, 'clientHeight', {configurable: true, value: 0});
        Object.defineProperty(HTMLDivElement.prototype, 'clientHeight', {configurable: true, value: 0});
    });

    it('Apply passed height to section element', () => {
        const { container } = render(
            <Scroll height={200}>
                <p>Children</p>
            </Scroll>
        );

        expect(container.querySelector('.outer')).toHaveStyle('height: 200px');
    });

    it('Apply padding right class if passed heigh is smaller or equal to parent element height', () => {
        const { container } = render(
            <Scroll height={200}>
                <p>Children</p>
            </Scroll>
        );

        expect(container.querySelector('.outer')).toHaveClass('pr-5');
    });

    it('Do not apply padding right class if passed heigh is bigger than to parent element height', () => {
        Object.defineProperty(HTMLElement.prototype, 'clientHeight', {configurable: true, value: 200});
        Object.defineProperty(HTMLDivElement.prototype, 'clientHeight', {configurable: true, value: 100});

        const { container } = render(
            <Scroll height={200}>
                <p>Children</p>
            </Scroll>
        );
        
        expect(container.querySelector('.outer')).not.toHaveClass('pr-5')
    });
});
