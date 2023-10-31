export interface I_Image {
    src: string;
    alt: string;
    children?: React.ReactNode;
    loading?: 'eager' | 'lazy';
    srcset?: Array<I_SrcSet>;
    className?: string;
}

export interface I_SrcSet {
    media: string;
    srcset: string;
}
