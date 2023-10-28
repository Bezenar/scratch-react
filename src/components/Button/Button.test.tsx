import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '.';

import type { I_Button } from './types';
import type {RenderResult} from '@testing-library/react';

const mockClick = jest.fn();

const PROPS: I_Button = {
    children: 'Click me',
    type: 'button',
    disabled: undefined,
    id: undefined,
    className: undefined,
    style: undefined,
    onClick: mockClick,
}

describe('<Button />', () => {
    //@ts-ignore
    let wrapper: (RenderResult['container'] & { rerender: RenderResult['rerender'] }) | null = null;

    beforeEach(() => {
        const {container, rerender} = render(<Button {...PROPS} />);
        wrapper = {...container, rerender};
    });

    afterEach(() => {
        wrapper = null;
    });

    it('Should render children', () => {
        expect(screen.getByText(PROPS.children as string)).toBeInTheDocument();
    });


    it('By default button have type attribute as "button"', () => {
        expect(screen.getByRole('button')).toHaveAttribute('type', PROPS.type);
    });

    it('Prop "type", control button attribute "type"', () => {
        wrapper?.rerender(<Button {...PROPS} type="reset" />);

        expect(screen.getByRole('button')).toHaveAttribute('type', 'reset');
    });

    it('By default button are enabled', () => {
        expect(screen.getByRole('button')).toBeEnabled();
    });

    it('Prop "disabled", control button attribute "disabled"', () => {
        wrapper?.rerender(<Button {...PROPS} disabled />);

        expect(screen.getByRole('button')).toBeDisabled();
    });

    it('By default button doesn\'t have id attribute', () => {
        expect(screen.getByRole('button')).not.toHaveAttribute('id');
    });

    it('Prop "id" control button attribute "id"', () => {
        wrapper?.rerender(<Button {...PROPS} id="button" />);

        expect(screen.getByRole('button')).toHaveAttribute('id', 'button');
    });

    it('By default button have only module "btn" classnames', () => {
        expect(screen.getByRole('button').className).toBe('btn');
    });

    it('Prop "className" pass additional classnames to button tag', () => {
        wrapper?.rerender(<Button {...PROPS} className="extraClass" />);

        expect(screen.getByRole('button')).toHaveClass('extraClass');
    });
    
    it('By default button doesn\'t have style attribute ', () => {
        expect(screen.getByRole('button')).not.toHaveAttribute('style');
    });

    it('Prop "style" control button attribute "style"', () => {
        wrapper?.rerender(<Button {...PROPS} style={{color: 'red'}} />);

        expect(screen.getByRole('button')).toHaveStyle({color: 'red'});
    });

    it('Click on button call prop "onClick"', async () => {
        await userEvent.click(screen.getByRole('button'), {});

        expect(mockClick).toHaveBeenCalled();
        expect(mockClick).toHaveBeenCalledWith(expect.objectContaining({target: expect.any(HTMLButtonElement)}));
    });
});