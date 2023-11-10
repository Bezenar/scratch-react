import { memo } from 'react';
import s from './Header.module.scss';
import logo from '@img/logo.png';
import Image from '@atoms/Image';
import Nav from '@atoms/Nav';
import cn from '@helpers/cn';

const Header: React.NamedExoticComponent = memo(() => {

    return (
        <header className={cn('flex ai-center jc-sb', s.header)}>
            <Image src={logo} alt="logo" loading="lazy" className={s.logo} />

            <Nav />
        </header>
    );
});

export default Header;
