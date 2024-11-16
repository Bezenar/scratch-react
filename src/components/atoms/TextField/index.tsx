import { useCallback, useMemo, useState } from 'react';
import s from './TextField.module.scss';
import useTimeout from '@hooks/useTimeout';
import type { I_TextField, T_RestProps } from './types';
import cn from '@utils/cn';

const TextField: React.FC<I_TextField> = ({ value, debounce = 300, onChange, ...restProps }) => {
    const [innerValue, setInnerValue] = useState<string>(value);

    useTimeout<string>(innerValue, onChange, debounce);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const eventValue = e.target.value;
            setInnerValue(eventValue);
        },
        [value]
    );

    const memoizedProps = useMemo<T_RestProps>(() => {
        const props = Object.entries(restProps).reduce<Record<string, unknown>>((acc, entry) => {
            const [key, value] = entry;

            if (value) {
                acc[key] = value;
            }
            return acc;
        }, {} as T_RestProps);

        return props;
    }, [restProps]);

    return (
        <span className={restProps.required ? s.required : ''}>
            <input
                className={cn('wid-100', s.input)}
                type="text"
                value={innerValue}
                onChange={(e) => handleChange(e)}
                {...memoizedProps}
            />
        </span>
    );
};

export default TextField;
