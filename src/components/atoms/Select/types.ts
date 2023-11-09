export interface I_Option {
    id: number;
    value: string;
}

export interface I_Select {
    selected: string | null;
    options: Array<I_Option>;
    placeholder?: string;
    onSelect: (opt: I_Option) => void;
}
