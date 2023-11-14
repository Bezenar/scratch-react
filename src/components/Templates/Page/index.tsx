import { Outlet } from 'react-router-dom';
import s from './Page.module.scss';
import cn from '@helpers/cn';
import logo from '@img/logo.png';
import Pagination from '@molecules/Pagination';
import Card from '@atoms/Card';
import Image from '@atoms/Image';
import Nav from '@molecules/Nav';

const Page: React.FC = () => {
    return (
        <div className={cn('bg--black py-5 flex jc-center', s.appWrapper)}>
            <div className={s.appContainer}>
                <header>
                    <Card className="flex ai-center jc-sb">
                        <Image src={logo} alt="logo" loading="lazy" className={s.logo} />

                        <Nav />
                    </Card>
                </header>
                <main>
                    <Outlet />
                </main>
                <footer>
                    <Card className="flex jc-center ai-center">
                        <Pagination active={1} totalPages={10} onChange={() => {}} />
                    </Card>
                </footer>
            </div>
        </div>
    );
};

export default Page;
