import { Children, useEffect, useRef } from 'react';
import cn from '@helpers/cn';
import useToggle from '@hooks/useToggle';
import type { I_Grid } from './types';

const Grid: React.FC<I_Grid> = ({ colCount, gap, children }) => {
    const gridRef = useRef<HTMLElement | null>(null);
    const [isOverFlow, toggleIsOverflow] = useToggle(false);

    useEffect(() => {
        if(gridRef.current && gridRef.current.clientHeight > (gridRef.current.parentElement?.clientHeight || 0)) {
            toggleIsOverflow(true);
        }
    }, []);

    return (
        <article className={cn('flex jc-center ai-center', {'pr-5': isOverFlow})} ref={gridRef}>
            {Children.map(children, (child) => (
                <div style={{ width: `${100 / colCount}%` }}>
                    <div className={`pa-${gap}`}>{child}</div>
                </div>
            ))}
        </article>
    );
};

export default Grid;
