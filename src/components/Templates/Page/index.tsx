import { Outlet } from 'react-router-dom';
import logo from '@img/logo.png';
import s from './Page.module.scss';
import Pagination from '@molecules/Pagination';
import Card from '@atoms/Card';
import Image from '@atoms/Image';
import Nav from '@molecules/Nav';
import usePagination from '@hooks/usePagination';
import cn from '@helpers/cn';

const Page: React.FC = () => {
    const {handleChangePage, active, totalPages} = usePagination();

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
                        <Pagination active={active} totalPages={totalPages} onChange={handleChangePage} />
                    </Card>
                </footer>
            </div>
        </div>
    );
};

export default Page;
