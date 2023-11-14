import s from './Card.module.scss';
import cn from '@helpers/cn';
import type { I_Card } from './types';

const Card: React.FC<I_Card> = ({children, className = ''}) => {
    return (
        <div className={cn(s.card, 'pa-10', {[className]: !!className})}>
            {children}
        </div>
    );
};

export default Card;
