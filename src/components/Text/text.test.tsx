import { screen, render } from '@testing-library/react';
import Text from '.';
import type { I_Text } from './types';

const PROPS: I_Text = {
    value: 'value',
};

describe('<Text />', () => {
    it('By default apply primary color', () => {
        render(<Text {...PROPS} />);

        expect(screen.getByText(PROPS.value as string)).toHaveClass('text--primary');
    });

    it('By default apply md size', () => {
        render(<Text {...PROPS} />);

        expect(screen.getByText(PROPS.value as string)).toHaveClass('text--md');
    });

    it('By default render inline span element', () => {
        render(<Text {...PROPS} />);

        expect(screen.getByText(PROPS.value as string).tagName).toBe('SPAN');
    });

    it('Pass prop children and value should render value', () => {
        render(<Text {...PROPS} children={'children'} />);

        expect(screen.getByText(PROPS.value as string)).toBeInTheDocument();
        expect(screen.queryByText(/children/)).not.toBeInTheDocument();
    });

    it('Pass only children should render children', () => {
        render(<Text children={'children'} />);

        expect(screen.queryByText(PROPS.value as string)).not.toBeInTheDocument();
        expect(screen.getByText(/children/)).toBeInTheDocument();
    });

    it('Pass prop paragraph should render block element p', () => {
        render(<Text {...PROPS} paragraph />);

        expect(screen.getByText(PROPS.value as string).tagName).toBe('P');
    });

    it('Pass prop size should apply specific size classnames', () => {
        render(<Text {...PROPS} size="lg" />);

        expect(screen.getByText(PROPS.value as string)).toHaveClass('text--lg');
    });

    it('Pass prop color should apply specific color classnames', () => {
        render(<Text {...PROPS} color="secondary" />);

        expect(screen.getByText(PROPS.value as string)).toHaveClass('text--secondary');
    });

    it('Pass prop className should apply additional classnames', () => {
        render(<Text {...PROPS} className="additional" />);

        expect(screen.getByText(PROPS.value as string)).toHaveClass('additional');
    });
});
