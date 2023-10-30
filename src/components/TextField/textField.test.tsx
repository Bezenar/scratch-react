import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextField from '.';
import type { I_TextField } from './types';

const mockOnChange = jest.fn();
const mockOnFocus = jest.fn();
const mockOnBlur = jest.fn();
const PROPS: I_TextField = {
    value: 'input value',
    onChange: mockOnChange,
    id: undefined,
    name: undefined,
    disabled: undefined,
    maxLength: undefined,
    placeholder: undefined,
    required: undefined,
    debounce: undefined,
    onFocus: undefined,
    onBlur: undefined,
}

describe('<TextField />', () => {
    describe('Required props', () => {
        beforeEach(() => {
            render(<TextField {...PROPS} />);
        });

        it('Value, control input value', () => {
            expect(screen.getByRole('textbox')).toHaveValue(PROPS.value);
        });

        it('On change event, should change input value', async () => {
            await userEvent.type(screen.getByRole('textbox'), 'new value');

            expect(screen.getByRole('textbox')).toHaveValue(`${PROPS.value}new value`);
        });

        it('After debounce time should call parent method to change state', async () => {
            await userEvent.type(screen.getByRole('textbox'), 'new value');

            await waitFor(() => {
                expect(mockOnChange).toHaveBeenCalled();
                expect(mockOnChange).toHaveBeenCalledWith(`${PROPS.value}new value`);
            }, {timeout: 310})
        });
    });

    describe('Optional props', () => {
        describe('By default doesn\'t have', () => {
            beforeEach(() => {
                render(<TextField {...PROPS} />);
            });

            it('id attribute', () => {
                expect(screen.getByRole('textbox')).not.toHaveAttribute('id');
            });

            it('name attribute', () => {
                expect(screen.getByRole('textbox')).not.toHaveAttribute('name');
            });

            it('disabled attribute', () => {
                expect(screen.getByRole('textbox')).not.toHaveAttribute('disabled');
            });

            it('placeholder attribute', () => {
                expect(screen.getByRole('textbox')).not.toHaveAttribute('placeholder');
            });

            it('required attribute', () => {
                expect(screen.getByRole('textbox')).not.toHaveAttribute('required');
            });
        });

        it('Prop "id" set input id attribute', () => {
            render(<TextField {...PROPS} id={'ID'} />);

            expect(screen.getByRole('textbox')).toHaveAttribute('id', 'ID');
        });

        it('Prop "name" set input name attribute', () => {
            render(<TextField {...PROPS} name={'inputName'} />);

            expect(screen.getByRole('textbox')).toHaveAttribute('name', 'inputName');
        });

        it('Prop "disabled" set input disabled attribute', () => {
            render(<TextField {...PROPS} disabled />);

            expect(screen.getByRole('textbox')).toHaveAttribute('disabled');
        });

        it('Prop "placeholder" set input placeholder attribute', () => {
            render(<TextField {...PROPS} placeholder={'placeholder'} />);

            expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'placeholder');
        });

        it('Prop "required" set input placeholder attribute', () => {
            render(<TextField {...PROPS} required />);

            expect(screen.getByRole('textbox')).toHaveAttribute('required');
        });

        it('Prop "onFocus" add to input focus event', async () => {
            render(<TextField {...PROPS} onFocus={mockOnFocus} />);

            await userEvent.click(screen.getByRole('textbox'));

            expect(mockOnFocus).toHaveBeenCalled();
            expect(mockOnFocus).toHaveBeenCalledWith(expect.objectContaining({target: expect.any(HTMLInputElement)}));
        });

        it('Prop "onBlur" add to input blur event', async () => {
            render(<TextField {...PROPS} onBlur={mockOnBlur} />);

            await userEvent.click(screen.getByRole('textbox'));
            await screen.getByRole('textbox').blur();

            expect(mockOnBlur).toHaveBeenCalled();
            expect(mockOnBlur).toHaveBeenCalledWith(expect.objectContaining({target: expect.any(HTMLInputElement)}));
        });

        it('By default "debounce" are 300ms, after which call prop method onChange', async () => {
            render(<TextField {...PROPS} />);

            await userEvent.type(screen.getByRole('textbox'), 'new value');

            await waitFor(() => {
                expect(mockOnChange).toHaveBeenCalled();
                expect(mockOnChange).toHaveBeenCalledWith(`${PROPS.value}new value`);
            }, {timeout: 310})
        });

        it('Prop "debounce" set time in ms, after which call prop method onChange', async () => {
            render(<TextField {...PROPS} debounce={500} />);

            await userEvent.type(screen.getByRole('textbox'), 'new value');

            await waitFor(() => {
                expect(mockOnChange).toHaveBeenCalled();
                expect(mockOnChange).toHaveBeenCalledWith(`${PROPS.value}new value`);
            }, {timeout: 510})
        });
    });
});
