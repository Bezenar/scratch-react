import type { I_Text } from '../../atoms/Text/types';

export interface I_PrintString extends I_Text {
    value: string;
    printSpeed?: number;
    onPrintComplete?: () => void;
}
