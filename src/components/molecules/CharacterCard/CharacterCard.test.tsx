import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CharacterCard from '.';
import UnitTestHelper from '@helpers/UnitTestHelper';
import type { I_CharacterCard } from './types';
import type { N_Response } from '@t/responses';

const PROPS: I_CharacterCard = {
    id: 1,
    image: 'image-src' as N_Response.T_URL,
    name: 'image-name',
};

describe('<CharacterCard />', () => {
    beforeEach(() => {
        UnitTestHelper.renderWithRouter(<CharacterCard {...PROPS} />);
    });

    it('Image should be lazy loaded', () => {
        expect(screen.getByRole('img')).toHaveAttribute('loading', 'lazy');
    });

    it('Image should have src attribute as prop "img"', () => {
        expect(screen.getByRole('img')).toHaveAttribute('src', PROPS.image);
    });

    it('Image should have alt attribute as prop "name"', () => {
        expect(screen.getByRole('img')).toHaveAttribute('alt', PROPS.name);
    });

    it('Should render name', () => {
        expect(screen.getByText(/image\-name/)).toBeInTheDocument();
    });

    it('On card click should navigate to "character/:id" route', async () => {
        await userEvent.click(screen.getByRole('img'));

        expect(window.location.pathname).toBe(`/character/${PROPS.id}`);
    });
});
