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
                        d="M2.78977 3.33417C2.47294 2.93282 2.75879 2.34297 3.2701 2.34297H16.0439C16.5552 2.34297 16.841 2.93282 16.5242 3.33417L10.1373 11.4242C9.89229 11.7346 9.42168 11.7346 9.17669 11.4242L2.78977 3.33417Z"
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
                        d="M16.5242 10.6658C16.841 11.0672 16.5552 11.657 16.0439 11.657L3.27006 11.657C2.75876 11.657 2.47296 11.0672 2.78976 10.6658L9.17668 2.57578C9.42167 2.26543 9.89228 2.26543 10.1373 2.57578L16.5242 10.6658Z"
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
                        d="M10.3228 2.13279C10.7242 1.81596 11.314 2.1018 11.314 2.61312V15.3869C11.314 15.8982 10.7242 16.184 10.3228 15.8672L2.23277 9.4803C1.92241 9.23531 1.92241 8.7647 2.23277 8.5197L10.3228 2.13279Z"
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
                        d="M2.99115 15.8672C2.5898 16.184 1.99995 15.8982 1.99995 15.3869L1.99995 2.61308C1.99995 2.10177 2.5898 1.81598 2.99115 2.13278L11.0812 8.51969C11.3916 8.76469 11.3916 9.2353 11.0812 9.4803L2.99115 15.8672Z"
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
            role="img"
            width="19"
            height="14"
            viewBox="0 0 19 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`icon--${size}`}
        >
            {path}
        </svg>
    );
});

Caret.displayName = 'Icon_Caret';

export default Caret;
