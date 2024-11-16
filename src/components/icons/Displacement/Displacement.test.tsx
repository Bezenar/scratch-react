import { render, screen } from '@testing-library/react';
import Displacement from '.';
import UnitTestHelper from '@utils/UnitTestHelper';
import { COLORS } from '@mocks/colors';

describe('Displacement icon', () => {
    UnitTestHelper.mockRootColors();

    describe('Default props', () => {
        beforeEach(() => {
            render(<Displacement direction="right" />);
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
            render(<Displacement direction="right" size="lg" />);

            expect(screen.getByRole('img')).toHaveClass('icon--lg');
        });

        it('Change icon size to sm', () => {
            render(<Displacement direction="right" size="sm" />);

            expect(screen.getByRole('img')).toHaveClass('icon--sm');
        });
    });

    describe('Prop "color"', () => {
        it('Change icon color to white', () => {
            render(<Displacement direction="right" color="white" />);

            expect(screen.getByTestId('right')).toHaveAttribute('stroke', COLORS.white);
        });

        it('Change icon color to black', () => {
            render(<Displacement direction="right" color="black" />);

            expect(screen.getByTestId('right')).toHaveAttribute('stroke', COLORS.black);
        });

        it('Change icon color to secondary', () => {
            render(<Displacement direction="right" color="red" />);

            expect(screen.getByTestId('right')).toHaveAttribute('stroke', COLORS.red);
        });

        it('Change icon color to red', () => {
            render(<Displacement direction="right" color="secondary" />);

            expect(screen.getByTestId('right')).toHaveAttribute('stroke', COLORS.secondary);
        });
    });

    describe('Prop direction change icon direction, and change title', () => {
        it(' Change direction to "left"', () => {
            render(<Displacement direction="left" />);

            expect(screen.getByTestId('left')).toBeInTheDocument();
            expect(screen.getByRole('img', { name: 'displacement-left'})).toBeInTheDocument();
        });

        it(' Change direction to "right"', () => {
            render(<Displacement direction="right" />);

            expect(screen.getByTestId('right')).toBeInTheDocument();
            expect(screen.getByRole('img', { name: 'displacement-right'})).toBeInTheDocument();
        });

        it(' Change direction to "up"', () => {
            render(<Displacement direction="up" />);

            expect(screen.getByTestId('up')).toBeInTheDocument();
            expect(screen.getByRole('img', { name: 'displacement-up'})).toBeInTheDocument();
        });
        
        it(' Change direction to "down"', () => {
            render(<Displacement direction="down" />);

            expect(screen.getByTestId('down')).toBeInTheDocument();
            expect(screen.getByRole('img', { name: 'displacement-down'})).toBeInTheDocument();
        });
    });
});
