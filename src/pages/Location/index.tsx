import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Location: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    return (
        <>
            <h1>Location - {id}</h1>
            <Link to="/locations">Back</Link>
        </>
    );
};

export default Location;