import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from '.';

describe('<Card />', () => {
    it('Should render children', () => {
        render(
            <Card>
                <div>Children 1</div>
                <div>Children 2</div>
            </Card>
        );

        expect(screen.getByText(/Children 1/)).toBeInTheDocument();
        expect(screen.getByText(/Children 2/)).toBeInTheDocument();
    });

    it('By default prop "className" are empty string, and not apply any additional classname', () => {
        const { container } = render(
            <Card>
                <div>Children 1</div>
                <div>Children 2</div>
            </Card>
        );

        expect(container.querySelector('div')?.className).toBe('card pa-10');
    });

    it('Prop "className" applied to main div', () => {
        const { container } = render(
            <Card className="extra-class">
                <div>Children 1</div>
                <div>Children 2</div>
            </Card>
        );

        expect(container.querySelector('div')).toHaveClass('extra-class');
    });

    it('If pass prop "onCLick", on card click should be called', async () => {
        const onClickMock = jest.fn();

        const { container } = render(
            <Card onClick={onClickMock}>
                <div>Children 1</div>
                <div>Children 2</div>
            </Card>
        );

        await userEvent.click(container.querySelector('.card') as HTMLDivElement);

        expect(onClickMock).toHaveBeenCalled();
    });
});
