import { memo, useMemo } from 'react';
import useRootColors from '@hooks/useRootColors';
import type { I_DirectionIcon } from '@t/icons';

const Caret: React.NamedExoticComponent<I_DirectionIcon> = memo(({ direction, size = 'md', color = 'primary' }) => {
    const colors = useRootColors();

    const path = useMemo(() => {
        switch (direction) {
            case 'down': {
                return (
                    <path
                        data-testid="down"
                        d="M2.22764 3.70273C1.6845 3.01326 2.17452 2 3.05106 2L24.949 2C25.8255 2 26.3155 3.01326 25.7724 3.70273L14.8234 17.6001C14.4034 18.1333 13.5966 18.1333 13.1766 17.6001L2.22764 3.70273Z"
                        stroke={colors[color]}
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                );
            }
            case 'up': {
                return (
                    <path
                        data-testid="up"
                        d="M25.7724 16.2973C26.3155 16.9867 25.8255 18 24.9489 18L3.051 18C2.17447 18 1.68454 16.9867 2.22762 16.2973L13.1766 2.39986C13.5966 1.86671 14.4034 1.86671 14.8234 2.39986L25.7724 16.2973Z"
                        stroke={colors[color]}
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                );
            }
            case 'left': {
                return (
                    <path
                        data-testid="left"
                        d="M16.2973 2.22764C16.9867 1.6845 18 2.17452 18 3.05106L18 24.949C18 25.8255 16.9867 26.3155 16.2973 25.7724L2.39986 14.8234C1.86671 14.4034 1.86671 13.5966 2.39986 13.1766L16.2973 2.22764Z"
                        stroke={colors[color]}
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                );
            }
            case 'right':
            default: {
                return (
                    <path
                        data-testid="right"
                        d="M3.70273 25.7724C3.01326 26.3155 2 25.8255 2 24.9489L2 3.051C2 2.17447 3.01326 1.68454 3.70273 2.22762L17.6001 13.1766C18.1333 13.5966 18.1333 14.4034 17.6001 14.8234L3.70273 25.7724Z"
                        stroke={colors[color]}
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                );
            }
        }
    }, [direction, color]);

    return (
        <svg
            width={direction === 'up' || direction === 'down' ? 28 : 20}
            height="20"
            viewBox={`0 0 ${direction === 'up' || direction === 'down' ? '28 20' : '20 28'}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            className={`icon--${size}`}
        >
            <title>{`caret-${direction}`}</title>
            {path}
        </svg>
    );
});

Caret.displayName = 'Icon_Caret';

export default Caret;
