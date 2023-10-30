import { memo } from 'react';
import cn from '../../helpers/cn';
import type { I_Row } from './types';

const Row: React.NamedExoticComponent<I_Row> = memo(({children, jc, ai, dir, nowrap, className = ''}) => {
    return (
        <div
            className={cn(
                'flex',
                {
                    [`jc-${jc}`]: !!jc,
                    [`ai-${ai}`]: !!ai,
                    [`dir-${dir}`]: !!dir,
                    ['nowrap']: !!nowrap,
                    [className]: !!className,
                },
            )}
        >
            { children }
        </div>
    );
});

export default Row;
