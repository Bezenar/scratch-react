import { render } from '@testing-library/react';
import Row from '.';

describe('Row', () => {
    it('By default have only "flex" class name', () => {
        const { container } = render(<Row><span>Children</span></Row>);

        expect(container.querySelector('div')?.className).toBe('flex');
    });

    it('Prop "className" add additional classnames to flex element', () => {
        const { container } = render(<Row className="class"><span>Children</span></Row>);

        expect(container.querySelector('div')).toHaveClass('class');
    });

    it('If pass prop "nowrap" apply class name nowrap', () => {
        const { container } = render(<Row nowrap><span>Children</span></Row>);

        expect(container.querySelector('div')).toHaveClass('nowrap');
    });

    it('If pass prop "dir", apply class name as dir-<passedProp>', () => {
        const { container } = render(<Row dir="col"><span>Children</span></Row>);

        expect(container.querySelector('div')).toHaveClass('dir-col');
    });

    it('If pass prop "jc", apply class name as jc-<passedProp>', () => {
        const { container } = render(<Row jc="end"><span>Children</span></Row>);

        expect(container.querySelector('div')).toHaveClass('jc-end');
    });

    it('If pass prop "ai", apply class name as ai-<passedProp>', () => {
        const { container } = render(<Row ai="stretch"><span>Children</span></Row>);

        expect(container.querySelector('div')).toHaveClass('ai-stretch');
    });
});
