import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '.';
import UnitTestHelper from '@helpers/UnitTestHelper';

describe('<Header />', () => {
    beforeEach(() => {
        UnitTestHelper.renderWithRouter(<Header />);
    });

    it('Should render logo', () => {
        expect(screen.getByRole('img', { name: 'logo' })).toBeInTheDocument();
    });

    it('Should render navigation', () => {
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('Should render Characters link', () => {
        expect(screen.getByRole('link', { name: 'Characters' })).toBeInTheDocument();
    });

    it('Click on Characters link should update history', async () => {
        await userEvent.click(screen.getByRole('link', { name: 'Characters' }));
        
        expect(location.pathname).toBe('/characters');
    });

    it('Should render Locations link', () => {
        expect(screen.getByRole('link', { name: 'Locations' })).toBeInTheDocument();
    });

    it('Click on Locations link should update history', async () => {
        await userEvent.click(screen.getByRole('link', { name: 'Locations' }));
        
        expect(location.pathname).toBe('/locations');
    });

    it('Should render Episodes link', () => {
        expect(screen.getByRole('link', { name: 'Episodes' })).toBeInTheDocument();
    });

    it('Click on Episodes link should update history', async () => {
        await userEvent.click(screen.getByRole('link', { name: 'Episodes' }));
        
        expect(location.pathname).toBe('/episodes');
    });

    it('Should render storybook link', () => {
        expect(screen.getByRole('link', { name: 'storybook' })).toBeInTheDocument();
    });

    it('Click on storybook have external should not change pathname', async () => {
        await userEvent.click(screen.getByRole('link', { name: 'storybook' }));
        
        expect(location.pathname).toBe('/');
    });
});
