import { render, screen } from '@testing-library/react';
import Caret from '.';
import UnitTestHelper from '@helpers/UnitTestHelper';
import { COLORS } from '@mocks/colors';

describe('Caret icon', () => {
    UnitTestHelper.mockRootColors();

    describe('Default props', () => {
        beforeEach(() => {
            render(<Caret direction="right" />);
        });

        it('By default apply "md" size', () => {
            expect(screen.getByRole('img')).toHaveClass('icon--md');
        });

        it('By default apply "primary" color', () => {
            expect(screen.getByTestId('right')).toHaveAttribute('stroke', COLORS.primary);
        });
    });

    describe('Prop "size"', () => {
        it('Change icon size to lg', () => {
            render(<Caret direction="right" size="lg" />);

            expect(screen.getByRole('img')).toHaveClass('icon--lg');
        });

        it('Change icon size to sm', () => {
            render(<Caret direction="right" size="sm" />);

            expect(screen.getByRole('img')).toHaveClass('icon--sm');
        });
    });

    describe('Prop "color"', () => {
        it('Change icon color to white', () => {
            render(<Caret direction="right" color="white" />);

            expect(screen.getByTestId('right')).toHaveAttribute('stroke', COLORS.white);
        });

        it('Change icon color to black', () => {
            render(<Caret direction="right" color="black" />);

            expect(screen.getByTestId('right')).toHaveAttribute('stroke', COLORS.black);
        });

        it('Change icon color to secondary', () => {
            render(<Caret direction="right" color="red" />);

            expect(screen.getByTestId('right')).toHaveAttribute('stroke', COLORS.red);
        });

        it('Change icon color to red', () => {
            render(<Caret direction="right" color="secondary" />);

            expect(screen.getByTestId('right')).toHaveAttribute('stroke', COLORS.secondary);
        });
    });

    describe('Prop direction change icon direction', () => {
        it(' Change direction to "left"', () => {
            render(<Caret direction="left" />);

            expect(screen.getByTestId('left')).toBeInTheDocument();
        });

        it(' Change direction to "right"', () => {
            render(<Caret direction="right" />);

            expect(screen.getByTestId('right')).toBeInTheDocument();
        });

        it(' Change direction to "up"', () => {
            render(<Caret direction="up" />);

            expect(screen.getByTestId('up')).toBeInTheDocument();
        });
        
        it(' Change direction to "down"', () => {
            render(<Caret direction="down" />);

            expect(screen.getByTestId('down')).toBeInTheDocument();
        });
    });
});
