export interface I_RootColors {
    primary: string;
    secondary: string;
    white: string;
    black: string;
    red: string;
}

export interface I_IconBase {
    size?: 'sm' | 'md' | 'lg',
    color?: keyof I_RootColors;
}

export interface I_DirectionIcon extends I_IconBase {
    direction: 'up' | 'down' | 'left' | 'right'
}
