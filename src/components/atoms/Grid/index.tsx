import { Children } from 'react';
import cn from '@utils/cn';
import type { I_Grid } from './types';

const Grid: React.FC<I_Grid> = ({ colCount, gap, children }) => {
    return (
        <article className="flex jc-center ai-center h-full">
            {Children.map(children, (child, index) => (
                <div key={`grid-element-${index}`} className="as-stretch" style={{ width: `${100 / colCount}%` }}>
                    <div className={cn({ [`pa-${gap}`]: !!gap }, 'h-full')}>{child}</div>
                </div>
            ))}
        </article>
    );
};

export default Grid;
