import { useNavigate } from 'react-router-dom';
import cn from '@helpers/cn';
import s from './CharacterCard.module.scss';
import Card from '@atoms/Card';
import Text from '@atoms/Text';
import Image from '@atoms/Image';
import type { I_CharacterCard } from './types';

const CharacterCard: React.FC<I_CharacterCard> = ({ id, name, image }) => {
    const navigate = useNavigate();

    return (
        <Card
            className={cn('flex ai-center jc-sb nowrap gap-5 pointer', s.card)}
            onClick={() => navigate(`/character/${id}`)}
        >
            <Image src={image} alt={name} loading="lazy" className={s.image} />

            <Text size="lg" value={name} className={cn('text--center', s.text)} />
        </Card>
    );
};

export default CharacterCard;
