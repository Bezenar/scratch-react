import type { I_Text } from '../Text/types';

export interface I_PrintString extends Pick<I_Text, 'color' | 'size'> {
    value: string;
    printSpeed?: number;
    onPrintComplete?: () => void;
}
