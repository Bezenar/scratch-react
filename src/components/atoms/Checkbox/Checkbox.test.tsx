import { RenderResult, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkbox from '.';
import type { I_Checkbox } from './types';

const mockOnChange = jest.fn();

const PROPS: I_Checkbox = {
    checked: false,
    children: undefined,
    id: 'checkbox',
    name: undefined,
    disabled: undefined,
    required: undefined,
    prepend: undefined,
    onChange: mockOnChange,
};

describe('<Checkbox />', () => {
    let wrapper: RenderResult['container'] | null = null;
    let rerender: RenderResult['rerender'] | null = null;

    beforeEach(() => {
        const { container, rerender: rerenderResult } = render(<Checkbox {...PROPS} />);
        wrapper = container;
        rerender = rerenderResult;
    });

    afterEach(() => {
        wrapper = null;
        rerender = null;
    });

    describe('Required props', () => {
        it('Falsy prop "checked" set checkbox unchecked', () => {
            expect(screen.getByRole('checkbox')).not.toBeChecked();
        });

        it('Falsy prop "checked" set checkbox unchecked', () => {
            expect(screen.getByRole('checkbox')).not.toBeChecked();
        });

        it('Falsy prop "checked" do not set class "checked" to label', () => {
            expect(wrapper!.querySelector('label')).not.toHaveClass('checked');
        });

        it('Truthy prop "checked" set checkbox checked', () => {
            rerender!(<Checkbox {...PROPS} checked={true} />);

            expect(screen.getByRole('checkbox')).toBeChecked();
        });

        it('Truthy prop "checked" set class "checked" to label', () => {
            rerender!(<Checkbox {...PROPS} checked={true} />);

            expect(wrapper!.querySelector('label')).toHaveClass('checked');
        });

        it('Prop "id" set value to input id attribute and to label for attribute', () => {
            expect(screen.getByRole('checkbox')).toHaveAttribute('id', PROPS.id);
            expect(wrapper!.querySelector('label')).toHaveAttribute('for', PROPS.id);
        });

        it('Click on label call prop "onChange" with boolean', async () => {
            await userEvent.click(screen.getByRole('checkbox'));

            expect(mockOnChange).toHaveBeenCalled();
            expect(mockOnChange).toHaveBeenCalledWith(true);
        });
    });

    describe('Optional props', () => {
        describe('By default', () => {
            it("Doesn't add name attribute to input", () => {
                expect(screen.getByRole('checkbox')).not.toHaveAttribute('name');
            });

            it("Doesn't render label", () => {
                expect(screen.queryByTestId('checkbox-label')).not.toBeInTheDocument();
            });

            it("Doesn't set disabled attribute to input", () => {
                expect(screen.getByRole('checkbox')).not.toHaveAttribute('disabled');
            });

            it("Doesn't apply disabled classnames", () => {
                expect(wrapper?.querySelector('label')).not.toHaveClass('disabled');
            });

            it("Doesn't set required attribute to input", () => {
                expect(screen.getByRole('checkbox')).not.toHaveAttribute('required');
            });

            it("Doesn't apply required classnames", () => {
                expect(wrapper?.querySelector('label')).not.toHaveClass('required');
            });
        });

        it('Provided prop "name" set it value to input name attribute', () => {
            rerender!(<Checkbox {...PROPS} name="lorem" />);

            expect(screen.getByRole('checkbox')).toHaveAttribute('name', 'lorem');
        });

        it('Provided prop "required" set to input required attribute', () => {
            rerender!(<Checkbox {...PROPS} required />);

            expect(screen.getByRole('checkbox')).toHaveAttribute('required');
        });

        it('Provided prop "disabled" set to input disabled attribute', () => {
            rerender!(<Checkbox {...PROPS} disabled />);

            expect(screen.getByRole('checkbox')).toHaveAttribute('disabled');
        });

        it('Provided prop "disabled", apply disabled classnames to label element', () => {
            rerender!(<Checkbox {...PROPS} disabled />);

            expect(wrapper?.querySelector('label')).toHaveClass('disabled');
        });

        it('Provide prop children render label, without required classnames', () => {
            rerender!(<Checkbox {...PROPS}>children</Checkbox>);

            expect(screen.getByTestId('checkbox-label')).toBeInTheDocument();
            expect(screen.getByTestId('checkbox-label')).not.toHaveClass('required');
        });

        it('Provide prop children and required render label with required classnames', () => {
            rerender!(
                <Checkbox {...PROPS} required>
                    children
                </Checkbox>
            );

            expect(screen.getByTestId('checkbox-label')).toHaveClass('required');
        });

        it('Without prepend render label after checkbox, and apply ml-2 classnames', () => {
            rerender!(<Checkbox {...PROPS}>children</Checkbox>);

            expect(
                screen.getByTestId('checkbox-label').compareDocumentPosition(screen.getByRole('checkbox').parentNode!)
            ).toBe(Node.DOCUMENT_POSITION_PRECEDING);
        });

        it('With prepend render label before checkbox, and apply mr-2 classnames', () => {
            rerender!(
                <Checkbox {...PROPS} prepend>
                    children
                </Checkbox>
            );

            expect(
                screen.getByTestId('checkbox-label').compareDocumentPosition(screen.getByRole('checkbox').parentNode!)
            ).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
        });
    });
});
