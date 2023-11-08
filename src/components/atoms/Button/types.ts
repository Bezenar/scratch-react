export interface I_Button {
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export type T_ComputedAttributes = Partial<Omit<I_Button, 'className' | 'type' | 'onClick' | 'children'>>;
