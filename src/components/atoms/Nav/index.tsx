import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.scss';
import cn from '@helpers/cn';
import { ROUTES } from '../../../routes';
import type { I_MutatedRouteObject, T_MappedRoutes } from '@t/index';

const Nav: React.NamedExoticComponent = memo(() => {
    const mapRoutes = (routes: Array<I_MutatedRouteObject>): T_MappedRoutes => {
        return routes.map((route) => {
            if (route.children) {
                return mapRoutes(route.children);
            }

            if (route.externalSource) {
                return (
                    <a key={route.externalSource} href={route.externalSource} target="_blank">
                        {route.content}
                    </a>
                );
            }

            const isRootPath = (path: string): boolean => new RegExp(/^\/$/).test(path);

            if (route.path && !isRootPath(route.path)) {
                return (
                    <NavLink
                        key={route.path}
                        to={route.path as string}
                        className={({ isActive }) => cn(s.navLink, 'px-6 py-3', { [s.active]: isActive })}
                    >
                        {route.content}
                    </NavLink>
                );
            }

            return null;
        });
    };

    return (
        <nav className="flex ai-center jc-sb gap-10">
            { mapRoutes(ROUTES) }
        </nav>
    );
});

export default Nav;
