export interface I_Radio {
    checked: boolean;
    children?: React.ReactNode;
    id: string;
    name?: string;
    disabled?: boolean;
    required?: boolean;
    prepend?: boolean;
    onChange: (isChecked: boolean) => void;
}

export type T_InputAttributes = Omit<I_Radio, 'children' | 'prepend' | 'onChange'> & { type: 'radio' };
