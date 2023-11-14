import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Character: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <>
            <h1>Character - {id}</h1>
            <Link to="/characters">Back</Link>
        </>
    );
};

export default Character;