import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Episode: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <>
            <h1>Episode - {id}</h1>
            <Link to="/episodes">Back</Link>
        </>
    );
};

export default Episode;