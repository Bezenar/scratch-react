import { useMemo } from 'react';
import useRootColors from '@hooks/useRootColors';
import type { I_DirectionIcon } from '@t/icons';

const Displacement: React.FC<I_DirectionIcon> = ({ size = 'md', color = 'primary', direction }) => {
    const colors = useRootColors();

    const paths = useMemo<JSX.Element>(() => {
        switch (direction) {
            case 'left': {
                return (
                    <>
                        <path
                            data-testid="left"
                            d="M2 3.90021V14.0998"
                            stroke={colors[color]}
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M15.3228 2.13279C15.7242 1.81596 16.314 2.1018 16.314 2.61312V15.3869C16.314 15.8982 15.7242 16.184 15.3228 15.8672L7.23277 9.4803C6.92241 9.23531 6.92241 8.7647 7.23277 8.5197L15.3228 2.13279Z"
                            stroke={colors[color]}
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </>
                );
            }
            case 'down': {
                return (
                    <>
                        <path
                            data-testid="right"
                            d="M2.28977 3.83418C1.97294 3.43282 2.25879 2.84297 2.7701 2.84297L15.5439 2.84297C16.0552 2.84297 16.341 3.43282 16.0242 3.83418L9.63729 11.9242C9.39229 12.2346 8.92168 12.2346 8.67669 11.9242L2.28977 3.83418Z"
                            stroke={colors[color]}
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M14.2568 17.157L4.05719 17.157"
                            stroke={colors[color]}
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </>
                );
            }
            case 'up': {
                return (
                    <>
                        <path
                            data-testid="up"
                            d="M16.0242 16.1658C16.341 16.5671 16.0552 17.157 15.5439 17.157H2.77006C2.25876 17.157 1.97296 16.5671 2.28976 16.1658L8.67668 8.07572C8.92167 7.76537 9.39228 7.76537 9.63728 8.07572L16.0242 16.1658Z"
                            stroke={colors[color]}
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M4.05713 2.84296L14.2568 2.84296"
                            stroke={colors[color]}
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </>
                );
            }
            case 'right':
            default: {
                return (
                    <>
                        <path
                            data-testid="right"
                            d="M2.99116 15.8672C2.5898 16.184 1.99996 15.8982 1.99996 15.3869L1.99996 2.61308C1.99996 2.10177 2.5898 1.81598 2.99116 2.13278L11.0812 8.5197C11.3916 8.76469 11.3916 9.2353 11.0812 9.4803L2.99116 15.8672Z"
                            stroke={colors[color]}
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M16.314 3.90015V14.0998"
                            stroke={colors[color]}
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </>
                );
            }
        }
    }, [direction, color]);

    return (
        <svg
            role="img"
            className={`icon--${size}`}
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {paths}
        </svg>
    );
};

export default Displacement;
