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

        it('Should display options, when mouse enter select', async () => {
            await userEvent.hover(screen.getByRole('combobox'));

            expect(screen.getByRole('list')).toBeVisible();
            expect(screen.getAllByRole('listitem').length).toBe(PROPS.options.length);
        });

        it('Should close options list, when mouse leave select', async () => {
            await userEvent.hover(screen.getByRole('combobox'));
            await userEvent.unhover(screen.getByRole('combobox'));

            expect(screen.getByRole('list')).toBeVisible();
        });
    });

    describe('Selected area rendering', () => {
        it('Should display nothing, if props "selected" and  "placeholder" not filled', () => {
            render(<Select {...PROPS} />);

            expect(screen.getByRole('combobox').textContent).toBe('');
        });

        it('Should display placeholder, prop "placeholder" are filled', () => {
            render(<Select {...PROPS} placeholder="placeholder" />);

            expect(screen.getByRole('combobox').textContent).toBe('placeholder');
        });

        it('Should display selected, if prop "selected" are filled', () => {
            render(<Select {...PROPS} selected="selected" />);

            expect(screen.getByRole('combobox').textContent).toBe('selected');
        });

        it('Prop "selected" have more priority then prop "placeholder"', () => {
            render(<Select {...PROPS} selected="selected" placeholder="placeholder" />);

            expect(screen.getByRole('combobox').textContent).toBe('selected');
        });
    });

    describe('Select option', () => {
        it('Click on list item should call prop "onSelect"', async () => {
            render(<Select {...PROPS} selected="selected" placeholder="placeholder" />);

            await userEvent.click(screen.getByRole('combobox'));
            await userEvent.click(screen.getAllByRole('listitem')[0]);

            expect(mockOnSelect).toHaveBeenCalled();
            expect(mockOnSelect).toHaveBeenCalledTimes(1);
            expect(mockOnSelect).toHaveBeenCalledWith(PROPS.options[0]);
        });
    });
});