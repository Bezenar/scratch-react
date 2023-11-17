import { render, screen } from '@testing-library/react';
import Grid from '.';

describe('<Grid />', () => {
    const Childrens = [
        <div key={1} data-testid="children">1</div>,
        <div key={2} data-testid="children">2</div>,
        <div key={3} data-testid="children">3</div>,
    ];

    it('Should render all childrens', () => {
        render(<Grid colCount={2}>{Childrens}</Grid>);

        expect(screen.getAllByTestId('children').length).toBe(Childrens.length);
    });

    it('All childrens should be wrapped in gap div and col width div', () => {
        render(
            <Grid colCount={2} gap={1}>
                {Childrens}
            </Grid>
        );

        screen.getAllByTestId('children').forEach((el) => {
            expect(el.parentElement).toHaveClass('pa-1');
            expect(el.parentElement?.parentElement).toHaveStyle('width: 50%');
        });
    });

    it('Col width calculation goes as 100 / colCount', () => {
        const colCount = 5;
        render(<Grid colCount={colCount}>{Childrens}</Grid>);

        expect(screen.getAllByTestId('children')[0].parentElement?.parentElement).toHaveStyle(
            `width: ${100 / colCount}%`
        );
    });

    it('Without prop "gap", do not apply gap style', () => {
        render(<Grid colCount={2}>{Childrens}</Grid>);

        expect(screen.getAllByTestId('children')[0].parentElement).not.toHaveClass('pa-1');
    });
});
