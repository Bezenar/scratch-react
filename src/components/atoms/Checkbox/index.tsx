import { memo, useMemo } from 'react';
import s from './Checkbox.module.scss';
import cn from '@helpers/cn';
import Row from '@atoms/Row';
import type { I_Checkbox, T_InputAttributes } from './types';

const Checkbox: React.NamedExoticComponent<I_Checkbox> = memo(({ checked, id, prepend, required, disabled, name, children, onChange }) => {
    const inputProps = useMemo<Partial<T_InputAttributes>>(() => {
        const props: Partial<T_InputAttributes> = {
            id,
            checked,
            type: 'checkbox',
        };

        if (name) props.name = name;
        if (required) props.required = required;
        if (disabled) props.disabled = disabled;

        return props;
    }, [disabled, required, name, checked, id]);

    const label = useMemo<React.ReactElement<any, 'span'> | null>(() => {
        return children ? (
            <span
                data-testid="checkbox-label"
                className={cn(prepend ? 'mr-2' : 'ml-2', 'flex ai-center nowrap', {
                    [s.required]: !!required,
                    [s.left]: !!required && !!prepend,
                    [s.right]: !!required && !prepend,
                })}
                onClick={() => onChange(!checked)}
            >
                {children}
            </span>
        ) : null;
    }, [prepend, required, children]);

    return (
        <Row ai="center">
            {prepend && label}
            <label className={cn(s.checkbox, { [s.checked]: checked, [s.disabled]: !!disabled })} htmlFor={id}>
                <input
                    {...inputProps}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.checked)}
                />
            </label>
            {!prepend && label}
        </Row>
    );
});

export default Checkbox;
