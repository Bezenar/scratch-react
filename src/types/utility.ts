import type { RenderResult } from '@testing-library/react';

namespace N_Utility {
    export interface I_ObjectUtilFn {
        isEmptyObject: (value: Record<string | number | symbol, unknown>) => boolean;
    }

    export interface I_ArrayUtilFn {
        isEmptyArray: (value: Array<unknown>) => boolean;
    }

    export interface I_StringUtilFn {
        isEmptyString: (value: string) => boolean;
        isOnlyWhiteSpaceString: (value: string) => boolean;
    }

    export interface I_TypeCheck {
        isBoolean: (value: unknown) => boolean;
        isString: (value: unknown) => boolean;
        isNumber: (value: unknown) => boolean;
        isArray: (value: unknown) => boolean;
        isObject: (value: unknown) => boolean;
        isUndefined: (value: unknown) => boolean;
        isNull: (value: unknown) => boolean;
    }

    export interface I_UnitTestHelper {
        renderWithRouter: (element: JSX.Element, route: string) => RenderResult;
        mockRootColors: () => void;
    }
}

export default N_Utility;
