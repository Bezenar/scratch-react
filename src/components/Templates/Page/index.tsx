import { Outlet } from 'react-router-dom';

const Page: React.FC = () => {
    return (
        <div>
            <header>header</header>
            <Outlet />
            <footer>footer</footer>
        </div>
    );
};

export default Page;
