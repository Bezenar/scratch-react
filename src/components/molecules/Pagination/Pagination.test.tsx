import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from '.';
import type { I_Pagination } from './types';

const mockOnPageChange = jest.fn();

const PROPS: I_Pagination = {
    active: 1,
    totalPages: 10,
    onChange: mockOnPageChange,
};

describe('<Pagination />', () => {
    describe('Visible page buttons', () => {
        it('By default display 5 buttons', () => {
            render(<Pagination {...PROPS} />);

            Array(5).forEach((_, i) => {
                expect(screen.getByRole('button', { name: (i + 1).toString() })).toBeInTheDocument();
            });
        });

        it('Prop "visiblePages" control how much page buttons are visible', () => {
            render(<Pagination {...PROPS} visiblePages={3} />);

            Array(3).forEach((_, i) => {
                expect(screen.getByRole('button', { name: (i + 1).toString() })).toBeInTheDocument();
            });

            expect(screen.queryByRole('button', { name: '4' })).not.toBeInTheDocument();
        });
    });

    describe('Page buttons computation', () => {
        it('If "totalPages" are less than "visiblePages", render buttons equal to total pages count', () => {
            render(<Pagination {...PROPS} totalPages={3} />);

            Array(3).forEach((_, i) => {
                expect(screen.getByRole('button', { name: (i + 1).toString() })).toBeInTheDocument();
            });

            expect(screen.queryByRole('button', { name: '4' })).not.toBeInTheDocument();
        });

        it('If "active" is less than "(visiblePages - 1) / 2", render buttons from 1 to "visiblePages"', () => {
            render(<Pagination {...PROPS} />);

            Array(5).forEach((_, i) => {
                expect(screen.getByRole('button', { name: (i + 1).toString() })).toBeInTheDocument();
            });

            expect(screen.queryByRole('button', { name: '6' })).not.toBeInTheDocument();
        });

        it('If "active" are more than "(visiblePages - 1) / 2", render buttons from "active - (VisiblePages - 1) / 2" to "active + (VisiblePages - 1) / 2"', () => {
            render(<Pagination {...PROPS} active={5} />);

            for (let i = 5 - 2; i <= 5 + 2; i++) {
                expect(screen.getByRole('button', { name: i.toString() })).toBeInTheDocument();
            }

            expect(screen.queryByRole('button', { name: '2' })).not.toBeInTheDocument();
            expect(screen.queryByRole('button', { name: '8' })).not.toBeInTheDocument();
        });

        it('If "active" are in more of "totalPages - (visiblePages - 1) / 2" and less than "totalPages", prevent render buttons more than "totalPages"', () => {
            render(<Pagination {...PROPS} active={9} />);

            for (let i = 9 - 2; i <= 10; i++) {
                expect(screen.getByRole('button', { name: i.toString() })).toBeInTheDocument();
            }

            expect(screen.queryByRole('button', { name: '11' })).not.toBeInTheDocument();
        });

        it('If "visiblePages" are even, more visible page buttons are at left side', () => {
            render(<Pagination {...PROPS} active={5} visiblePages={4} />);
            const activePageBtn = screen.getByRole('button', { name: '5' });

            expect(screen.queryByRole('button', { name: '2' })).not.toBeInTheDocument();
            expect(screen.getByRole('button', { name: '3' }).compareDocumentPosition(activePageBtn)).toBe(
                Node.DOCUMENT_POSITION_FOLLOWING
            );

            expect(screen.getByRole('button', { name: '4' }).compareDocumentPosition(activePageBtn)).toBe(
                Node.DOCUMENT_POSITION_FOLLOWING
            );

            expect(screen.getByRole('button', { name: '6' }).compareDocumentPosition(activePageBtn)).toBe(
                Node.DOCUMENT_POSITION_PRECEDING
            );
            expect(screen.queryByRole('button', { name: '7' })).not.toBeInTheDocument();
        });

        it('If "visiblePages" are even, and "active" less than "(visiblePages - 1) / 2", prevent render page button less than 1', () => {
            render(<Pagination {...PROPS} active={2} visiblePages={4} />);
            const activePageBtn = screen.getByRole('button', { name: '2' });

            expect(screen.queryByRole('button', { name: '0' })).not.toBeInTheDocument();
            expect(screen.getByRole('button', { name: '1' }).compareDocumentPosition(activePageBtn)).toBe(
                Node.DOCUMENT_POSITION_FOLLOWING
            );

            expect(screen.getByRole('button', { name: '3' }).compareDocumentPosition(activePageBtn)).toBe(
                Node.DOCUMENT_POSITION_PRECEDING
            );

            expect(screen.getByRole('button', { name: '4' }).compareDocumentPosition(activePageBtn)).toBe(
                Node.DOCUMENT_POSITION_PRECEDING
            );
            expect(screen.queryByRole('button', { name: '5' })).not.toBeInTheDocument();
        });
    });

    describe('Page change event', () => {
        it('Click on page button should call prop "onChange", with clicked page value', async () => {
            render(<Pagination {...PROPS}/>);

            await userEvent.click(screen.getByRole('button', { name: '3' }));

            expect(mockOnPageChange).toHaveBeenCalled();
            expect(mockOnPageChange).toHaveBeenCalledWith(3);
        });

        it('Button with caret left icon should be disabled, if "active" is 1', () => {
            render(<Pagination {...PROPS}/>);

            expect(screen.getByRole('button', { name: 'caret-left'})).toBeDisabled();
        });

        it('Button with displacement left icon should be disabled, if "active" is 1', () => {
            render(<Pagination {...PROPS}/>);

            expect(screen.getByRole('button', { name: 'displacement-left'})).toBeDisabled();
        });

        it('Click on caret left, should call prop "onChange", with "active - 1"', async () => {
            render(<Pagination {...PROPS} active={3}/>);

            await userEvent.click(screen.getByRole('img', {name: 'caret-left'}));

            expect(mockOnPageChange).toHaveBeenCalled();
            expect(mockOnPageChange).toHaveBeenCalledWith(2);
        });

        it('Click on displacement left, should call prop "onChange", with "1"', async () => {
            render(<Pagination {...PROPS} active={3}/>);

            await userEvent.click(screen.getByRole('img', {name: 'displacement-left'}));

            expect(mockOnPageChange).toHaveBeenCalled();
            expect(mockOnPageChange).toHaveBeenCalledWith(1);
        });

        it('Click on caret right, should call prop "onChange", with "active - 1"', async () => {
            render(<Pagination {...PROPS} active={3}/>);

            await userEvent.click(screen.getByRole('img', {name: 'caret-right'}));

            expect(mockOnPageChange).toHaveBeenCalled();
            expect(mockOnPageChange).toHaveBeenCalledWith(4);
        });

        it('Click on displacement right, should call prop "onChange", with "totalPages"', async () => {
            render(<Pagination {...PROPS} active={3}/>);

            await userEvent.click(screen.getByRole('img', {name: 'displacement-right'}));

            expect(mockOnPageChange).toHaveBeenCalled();
            expect(mockOnPageChange).toHaveBeenCalledWith(PROPS.totalPages);
        });

        it('If active are last page, button with caret right should be disabled', () => {
            render(<Pagination {...PROPS} active={10}/>);

            expect(screen.getByRole('button', { name: 'caret-right' })).toBeDisabled();
        });

        it('If active are last page, button with displacement right should be disabled', () => {
            render(<Pagination {...PROPS} active={10}/>);

            expect(screen.getByRole('button', { name: 'displacement-right' })).toBeDisabled();
        });
    });
});
