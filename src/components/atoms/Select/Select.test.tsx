import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from '.';
import type { I_Select } from './types';

const mockOnSelect = jest.fn();

const PROPS: I_Select = {
    selected: null,
    options: [
        { id: 1, value: 'value-1' },
        { id: 2, value: 'value-2' },
    ],
    onSelect: mockOnSelect,
}

describe('<Select />', () => {
    describe('Toggle options list', () => {
        beforeEach(() => {
            render(<Select {...PROPS} />);
        });

        it('Should display options, when click on select', async () => {
            await userEvent.click(screen.getByRole('button'));

            expect(screen.getByRole('list')).toBeInTheDocument();
            expect(screen.getAllByRole('listitem').length).toBe(PROPS.options.length);
        });

        it('Apply "opened" classnames to select, when list is opened', async () => {
            expect(screen.getByRole('article')).not.toHaveClass('opened');

            await userEvent.click(screen.getByRole('button'));

            expect(screen.getByRole('article')).toHaveClass('opened');
        });

        it('Should hide options list, when click second time on select', async () => {
            await userEvent.click(screen.getByRole('button'));

            expect(screen.getByRole('list')).toBeInTheDocument();

            await userEvent.click(screen.getByRole('button'));

            expect(screen.queryByRole('list')).not.toBeInTheDocument();
        });

        it('Should close options list, when click outside select or list', async () => {
            await userEvent.click(screen.getByRole('button'));

            expect(screen.getByRole('list')).toBeInTheDocument();

            await userEvent.click(document.body);

            expect(screen.queryByRole('list')).not.toBeInTheDocument();
        });
    });

    describe('Selected area rendering', () => {
        it('Should display nothing, if props "selected" and  "placeholder" not filled', () => {
            render(<Select {...PROPS} />);

            expect(screen.getByRole('button').textContent).toBe('');
        });

        it('Should display placeholder, prop "placeholder" are filled', () => {
            render(<Select {...PROPS} placeholder="placeholder" />);

            expect(screen.getByRole('button').textContent).toBe('placeholder');
        });

        it('Should display selected, if prop "selected" are filled', () => {
            render(<Select {...PROPS} selected="selected" />);

            expect(screen.getByRole('button').textContent).toBe('selected');
        });

        it('Prop "selected" have more priority then prop "placeholder"', () => {
            render(<Select {...PROPS} selected="selected" placeholder="placeholder" />);

            expect(screen.getByRole('button').textContent).toBe('selected');
        });
    });

    describe('Select option', () => {
        it('Click on list item should call prop "onSelect"', async () => {
            render(<Select {...PROPS} selected="selected" placeholder="placeholder" />);

            await userEvent.click(screen.getByRole('button'));
            await userEvent.click(screen.getAllByRole('listitem')[0]);

            expect(mockOnSelect).toHaveBeenCalled();
            expect(mockOnSelect).toHaveBeenCalledTimes(1);
            expect(mockOnSelect).toHaveBeenCalledWith(PROPS.options[0]);
        });
    });
});