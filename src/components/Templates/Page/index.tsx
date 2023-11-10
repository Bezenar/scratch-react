import { Outlet } from 'react-router-dom';
import Header from '@molecules/Header';

const Page: React.FC = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <footer>footer</footer>
        </div>
    );
};

export default Page;
