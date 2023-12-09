import { useNavigate } from 'react-router-dom';
import cn from '@helpers/cn';
import s from './CharacterCard.module.scss';
import Card from '@atoms/Card';
import Image from '@atoms/Image';
import PrintString from '@molecules/PrintString';
import type { I_CharacterCard } from './types';

const CharacterCard: React.FC<I_CharacterCard> = ({ id, name, image }) => {
    const navigate = useNavigate();

    return (
        <Card
            className={cn('flex ai-center nowrap gap-10 pointer', s.card)}
            onClick={() => navigate(`/character/${id}`)}
        >
            <Image src={image} alt={name} loading="lazy" className={s.image} />

            <PrintString size="lg" printSpeed={150} value={name} className={cn('text--center', s.text)} />
        </Card>
    );
};

export default CharacterCard;
