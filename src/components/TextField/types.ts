export interface I_TextField {
    value: string;
    id?: string;
    name?: string;
    disabled?: boolean;
    maxLength?: number;
    placeholder?: string;
    required?: boolean;
    debounce?: number;
    onChange: (value: string) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export type T_RestProps = Omit<I_TextField, 'onChange' | 'value' | 'debounce' | 'onFocus' | 'onBlur'>;
