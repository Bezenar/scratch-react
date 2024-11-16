import { memo, useMemo } from 'react';
import s from './Button.module.scss';
import cn from '@utils/cn';
import TypeCheck from '@utils/TypeCheck';
import StringHelpers from '@utils/StringHelpers';
import ObjectHelpers from '@utils/ObjectHelpers';
import type { I_Button, T_ComputedAttributes } from './types';

const Button: React.NamedExoticComponent<I_Button> = memo(
    ({ children, withoutBorder, type, disabled, id, className = '', style, onClick }) => {
        const computedProps = useMemo<T_ComputedAttributes>(() => {
            const props: T_ComputedAttributes = {};

            if (TypeCheck.isBoolean(disabled)) {
                props.disabled = disabled;
            }

            if (
                TypeCheck.isString(id) &&
                !StringHelpers.isEmptyString(id as string) &&
                !StringHelpers.isOnlyWhiteSpaceString(id as string)
            ) {
                props.id = id;
            }

            if (TypeCheck.isObject(style) && !ObjectHelpers.isEmptyObject(style as {})) {
                props.style = style;
            }

            return props;
        }, [id, disabled, style]);

        return (
            <button
                className={cn(s.btn, { [className]: !!className, [s.bordered]: !withoutBorder })}
                type={type}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClick(e)}
                {...computedProps}
            >
                {children}
            </button>
        );
    }
);

export default Button;
