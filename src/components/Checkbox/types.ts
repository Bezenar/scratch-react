export interface I_Checkbox {
    checked: boolean;
    children?: React.ReactNode;
    id: string;
    name?: string;
    disabled?: boolean;
    required?: boolean;
    prepend?: boolean;
    onChange: (isChecked: boolean) => void;
}

export type T_InputAttributes = Omit<I_Checkbox, 'children' | 'prepend' | 'onChange'> & { type: 'checkbox' };
