import type { RenderResult } from '@testing-library/react';

namespace N_Helpers {
    export interface I_ObjectHelpers {
        isEmptyObject: (value: Record<string | number | symbol, unknown>) => boolean;
    }

    export interface I_ArrayHelpers {
        isEmptyArray: (value: Array<unknown>) => boolean;
    }

    export interface I_StringHelpers {
        isEmptyString: (value: string) => boolean;
        isOnlyWhiteSpaceString: (value: string) => boolean;
    }

    export interface I_TypeCheck {
        isBoolean: (value: unknown) => boolean;
        isString: (value: unknown) => boolean;
        isNumber: (value: unknown) => boolean;
        isArray: (value: unknown) => boolean;
        isObject: (value: unknown) => boolean;
    }

    export interface I_UnitTestHelper {
        renderWithRouter: (element: JSX.Element, route: string) => RenderResult;
        mockRootColors: () => void;
    }
}

export default N_Helpers;
