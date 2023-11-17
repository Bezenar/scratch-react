import { useEffect, useRef } from 'react';
import s from './Scroll.module.scss';
import useToggle from '@hooks/useToggle';
import cn from '@helpers/cn';

export interface I_Scroll {
    height: number | string;
    children: React.ReactNode;
}

const Scroll: React.FC<I_Scroll> = ({ height, children }) => {
    const scrollArea = useRef<HTMLDivElement | null>(null);
    const [isOverFlow, toggleIsOverflow] = useToggle(false);

    useEffect(() => {
        if (
            scrollArea.current &&
            scrollArea.current.clientHeight <= scrollArea.current.parentElement!.clientHeight
        ) {
            toggleIsOverflow(true);
        }
    }, []);

    return (
        <section className={cn(s.outer, { 'pr-5': isOverFlow })} style={{ height }} ref={scrollArea}>
            <div className={s.inner}>{children}</div>
        </section>
    );
};

export default Scroll;
