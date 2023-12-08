import { RenderResult, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Radio from '.';
import type { I_Radio } from './types';

const mockOnChange = jest.fn();

const PROPS: I_Radio = {
    checked: false,
    children: undefined,
    id: 'radio',
    name: undefined,
    disabled: undefined,
    required: undefined,
    prepend: undefined,
    onChange: mockOnChange,
};

describe('<Radio />', () => {
    let wrapper: RenderResult['container'] | null = null;
    let rerender: RenderResult['rerender'] | null = null;

    beforeEach(() => {
        const { container, rerender: rerenderResult } = render(<Radio {...PROPS} />);
        wrapper = container;
        rerender = rerenderResult;
    });

    afterEach(() => {
        wrapper = null;
        rerender = null;
    });

    describe('Required props', () => {
        it('Falsy prop "checked" set radio unchecked', () => {
            expect(screen.getByRole('radio')).not.toBeChecked();
        });

        it('Falsy prop "checked" set radio unchecked', () => {
            expect(screen.getByRole('radio')).not.toBeChecked();
        });

        it('Falsy prop "checked" do not set class "checked" to label', () => {
            expect(wrapper!.querySelector('label')).not.toHaveClass('checked');
        });

        it('Truthy prop "checked" set radio checked', () => {
            rerender!(<Radio {...PROPS} checked={true} />);

            expect(screen.getByRole('radio')).toBeChecked();
        });

        it('Truthy prop "checked" set class "checked" to label', () => {
            rerender!(<Radio {...PROPS} checked={true} />);

            expect(wrapper!.querySelector('label')).toHaveClass('checked');
        });

        it('Prop "id" set value to input id attribute and to label for attribute', () => {
            expect(screen.getByRole('radio')).toHaveAttribute('id', PROPS.id);
            expect(wrapper!.querySelector('label')).toHaveAttribute('for', PROPS.id);
        });

        it('Click on label call prop "onChange" with boolean', async () => {
            await userEvent.click(screen.getByRole('radio'));

            expect(mockOnChange).toHaveBeenCalled();
            expect(mockOnChange).toHaveBeenCalledWith(true);
        });
    });

    describe('Optional props', () => {
        describe('By default', () => {
            it("Doesn't add name attribute to input", () => {
                expect(screen.getByRole('radio')).not.toHaveAttribute('name');
            });

            it("Doesn't render label", () => {
                expect(screen.queryByTestId('radio-label')).not.toBeInTheDocument();
            });

            it("Doesn't set disabled attribute to input", () => {
                expect(screen.getByRole('radio')).not.toHaveAttribute('disabled');
            });

            it("Doesn't apply disabled classnames", () => {
                expect(wrapper?.querySelector('label')).not.toHaveClass('disabled');
            });

            it("Doesn't set required attribute to input", () => {
                expect(screen.getByRole('radio')).not.toHaveAttribute('required');
            });

            it("Doesn't apply required classnames", () => {
                expect(wrapper?.querySelector('label')).not.toHaveClass('required');
            });
        });

        it('Provided prop "name" set it value to input name attribute', () => {
            rerender!(<Radio {...PROPS} name="lorem" />);

            expect(screen.getByRole('radio')).toHaveAttribute('name', 'lorem');
        });

        it('Provided prop "required" set to input required attribute', () => {
            rerender!(<Radio {...PROPS} required />);

            expect(screen.getByRole('radio')).toHaveAttribute('required');
        });

        it('Provided prop "disabled" set to input disabled attribute', () => {
            rerender!(<Radio {...PROPS} disabled />);

            expect(screen.getByRole('radio')).toHaveAttribute('disabled');
        });

        it('Provided prop "disabled", apply disabled classnames to label element', () => {
            rerender!(<Radio {...PROPS} disabled />);

            expect(wrapper?.querySelector('label')).toHaveClass('disabled');
        });

        it('Provide prop children render label, without required classnames', () => {
            rerender!(<Radio {...PROPS}>children</Radio>);

            expect(screen.getByTestId('radio-label')).toBeInTheDocument();
            expect(screen.getByTestId('radio-label')).not.toHaveClass('required');
        });

        it('Click on rendered label, should call "prop" onCall', async () => {
            rerender!(<Radio {...PROPS}>children</Radio>);

            await userEvent.click(screen.getByText(/children/));

            expect(mockOnChange).toHaveBeenCalled();
            expect(mockOnChange).toHaveBeenCalledWith(!PROPS.checked);
        });

        it('Provide prop children and required render label with required classnames', () => {
            rerender!(
                <Radio {...PROPS} required>
                    children
                </Radio>
            );

            expect(screen.getByTestId('radio-label')).toHaveClass('required');
        });

        it('Without prepend render label after radio, and apply ml-2 classnames', () => {
            rerender!(<Radio {...PROPS}>children</Radio>);

            expect(
                screen.getByTestId('radio-label').compareDocumentPosition(screen.getByRole('radio').parentNode!)
            ).toBe(Node.DOCUMENT_POSITION_PRECEDING);
        });

        it('With prepend render label before radio, and apply mr-2 classnames', () => {
            rerender!(
                <Radio {...PROPS} prepend>
                    children
                </Radio>
            );

            expect(
                screen.getByTestId('radio-label').compareDocumentPosition(screen.getByRole('radio').parentNode!)
            ).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
        });
    });
});
