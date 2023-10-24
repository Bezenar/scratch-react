import { memo, useMemo } from 'react';
import s from './button.module.scss';
import cn from '../../helpers/cn';
import TypeCheck from '../../helpers/TypeCheck';
import StringHelpers from '../../helpers/StringHelpers';
import ObjectHelpers from '../../helpers/ObjectHelpers';
import type { I_Button, T_ComputedAttributes } from './types';

const Button: React.NamedExoticComponent<I_Button> = memo(({
    children,
    type,
    disabled,
    id,
    className = '',
    style,
    onClick,
}) => {
    const computedProps = useMemo<T_ComputedAttributes>(() => {
        const props: T_ComputedAttributes = {};

        if(TypeCheck.isBoolean(disabled)) {
            props.disabled = disabled;
        }

        if(
            TypeCheck.isString(id) &&
            !StringHelpers.isEmptyString(id as string) &&
            !StringHelpers.isOnlyWhiteSpaceString(id as string)
        ) {
            props.id = id;
        }

        if(TypeCheck.isObject(style) && !ObjectHelpers.isEmptyObject(style as {})) {
            props.style = style;
        }


        return props;
    }, [id, disabled, style]);

    return (
        <button
            className={cn(s.btn, {[className]: !!className})}
            type={type}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClick(e)}
            {...computedProps}
        >
            {children}
        </button>
    );
});

export default Button;
