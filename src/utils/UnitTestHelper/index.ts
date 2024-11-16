import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import type { RenderResult } from '@testing-library/react';
import type N_Utility from '@t/utility';
import { COLORS } from '@mocks/colors';

class UnitTestHelper implements N_Utility.I_UnitTestHelper {
    public renderWithRouter(element: JSX.Element, route: string = '/'): RenderResult {
        window.history.pushState({}, 'Test page', route);

        return render(element, { wrapper: BrowserRouter });
    }

    public mockRootColors() {
        beforeAll(() => {
            Object.entries(COLORS).forEach(([key, value]) => {
                document.documentElement.style.setProperty(`--${key}`, value);
            });
        });
    
        afterAll(() => {
            Object.keys(COLORS).forEach((key) => {
                document.documentElement.style.removeProperty(`--${key}`);
            });
        });
    }
}

export default new UnitTestHelper();
