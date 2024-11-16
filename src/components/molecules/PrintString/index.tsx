import { useRef, useState } from 'react';
import s from './PrintString.module.scss';
import cn from '@utils/cn';
import Text from '@atoms/Text';
import useTimeout from '@hooks/useTimeout';
import type { I_PrintString } from './types';

const PrintString: React.FC<I_PrintString> = ({ value, printSpeed = 300, onPrintComplete, ...rest }) => {
    const { current: initialValue } = useRef<string>(value);

    const [printedValue, setPrintedValue] = useState<string>('');

    const handlePrint = () => {
        const currentLength = printedValue.length;
        const nextValue = initialValue.substring(0, currentLength + 1);
        setPrintedValue(nextValue);

        if (nextValue === initialValue && onPrintComplete) {
            onPrintComplete();
        }
    };

    useTimeout<string>(printedValue, handlePrint, printSpeed);

    return (
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            <Text {...rest}>
                {printedValue}
                {initialValue !== printedValue && (
                    <span className={cn(s.cursor, 'text--white pr-4')} style={{ animationDuration: `${printSpeed * 2}ms` }}>
                        |
                    </span>
                )}
            </Text>
        </span>
    );
};

export default PrintString;
