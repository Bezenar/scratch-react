export interface I_Text {
    value?: string;
    children?: React.ReactNode;
    size?: 'lg' | 'md' | 'sm' | 'xs';
    color?: 'white' | 'black' | 'primary' | 'secondary' | 'red';
    paragraph?: boolean;
    className?: string;
}
