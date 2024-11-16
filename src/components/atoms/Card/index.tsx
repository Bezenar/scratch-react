import s from './Card.module.scss';
import cn from '@utils/cn';
import type { I_Card } from './types';

const Card: React.FC<I_Card> = ({ children, className = '', onClick }) => {
    return (
        <div className={cn(s.card, 'pa-10', { [className]: !!className })} onClick={() => onClick && onClick()}>
            {children}
        </div>
    );
};

export default Card;
