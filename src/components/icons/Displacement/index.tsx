import { memo, useMemo } from 'react';
import useRootColors from '@hooks/useRootColors';
import type { I_DirectionIcon } from '@t/icons';

const Displacement: React.NamedExoticComponent<I_DirectionIcon> = memo(({ size = 'md', color = 'primary', direction }) => {
    const colors = useRootColors();

    const paths = useMemo<JSX.Element>(() => {
        switch (direction) {
            case 'left': {
                return (
                    <>
                        <path
                            data-testid="left"
                            d="M2 5.25745V22.7425"
                            stroke={colors[color]}
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M25.2677 2.22764C25.9557 1.6845 26.9669 2.17452 26.9669 3.05106V24.949C26.9669 25.8255 25.9557 26.3155 25.2677 25.7724L11.399 14.8234C10.867 14.4034 10.867 13.5966 11.399 13.1766L25.2677 2.22764Z"
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
                            data-testid="down"
                            d="M2.4968 4.43008C1.95366 3.74205 2.44368 2.73088 3.32023 2.73088L25.2182 2.73088C26.0947 2.73088 26.5846 3.74205 26.0415 4.43008L15.0925 18.2987C14.6726 18.8308 13.8658 18.8308 13.4458 18.2987L2.4968 4.43008Z"
                            stroke={colors[color]}
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M5.52661 27.2692H23.0117"
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
                            d="M26.2558 25.7842C26.7989 26.4722 26.3089 27.4834 25.4323 27.4834L3.53439 27.4834C2.65787 27.4834 2.16793 26.4722 2.71102 25.7842L13.66 11.9156C14.08 11.3835 14.8868 11.3835 15.3068 11.9156L26.2558 25.7842Z"
                            stroke={colors[color]}
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M23.226 2.51654L5.74085 2.51654"
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
                            d="M3.69925 25.7724C3.01121 26.3155 2.00005 25.8255 2.00005 24.9489L2.00005 3.051C2.00005 2.17447 3.01121 1.68454 3.69925 2.22762L17.5679 13.1766C18.0999 13.5966 18.0999 14.4034 17.5679 14.8234L3.69925 25.7724Z"
                            stroke={colors[color]}
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M26.9669 22.7426L26.9669 5.25745"
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
            width="29"
            height={direction === 'up' || direction === 'down' ? 30 : 29}
            viewBox={`0 0 29 ${direction === 'up' || direction === 'down' ? 30 : 29}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>{`displacement-${direction}`}</title>
            {paths}
        </svg>
    );
});

Displacement.displayName = 'Icon_Displacement';

export default Displacement;
