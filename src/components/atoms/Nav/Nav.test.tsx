import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Nav from '.';
import { ROUTES } from '../../../routes';
import type { I_MutatedRouteObject } from '@t/index';
import UnitTestHelper from '@helpers/UnitTestHelper';

describe('<Nav />', () => {
    const sourceTypesCount = {
        internal: 0,
        external: 0,
    };

    const calculateSourceTypes = (routes: Array<I_MutatedRouteObject>) => {
        routes.forEach((route) => {
            if (route.children) {
                return calculateSourceTypes(route.children);
            }

            if (route.externalSource) {
                return sourceTypesCount.external++;
            }

            const isRootPath = (path: string): boolean => new RegExp(/^\/$/).test(path);

            if (route.path && !isRootPath(route.path)) {
                return sourceTypesCount.internal++;
            }
        });
    };

    calculateSourceTypes(ROUTES);

    beforeEach(() => {
        UnitTestHelper.renderWithRouter(<Nav />, '/episodes');
    });

    it('Active route should have, active class name', () => {
        expect(screen.getByRole('link', { name: 'Episodes'})).toHaveClass('active');
    });


    it(`Should render NavLink ${sourceTypesCount.internal} times`, () => {
        expect(screen.getAllByRole('link').filter((l) => l.classList.contains('navLink')).length).toBe(
            sourceTypesCount.internal
        );
    });

    it(`Should render ${sourceTypesCount.external} external link`, () => {
        expect(screen.getAllByRole('link').filter((l) => !l.classList.contains('navLink')).length).toBe(
            sourceTypesCount.external
        );
    });
});
