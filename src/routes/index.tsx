import { createBrowserRouter } from 'react-router-dom';
import s from '../components/molecules/Header/Header.module.scss';
import Page from '../components/Templates/Page';
import Episodes from '../pages/Episodes';
import Characters from '../pages/Characters';
import Locations from '../pages/Locations';
import InteractiveMap from '../pages/InteractiveMap';
import Text from '@atoms/Text';
import Image from '@atoms/Image';
import type { I_MutatedRouteObject } from '@t/index';
//TODO IMPLEMENT LAZY
export const ROUTES: Array<I_MutatedRouteObject> = [
    {
        path: '/',
        element: <Page />,
        children: [
            {
                path: '/',
                element: <Characters />,
                content: <Text value={'Characters'} />,
            },
            {
                path: 'characters',
                element: <Characters />,
                content: <Text value={'Characters'} />,
            },
            {
                path: 'episodes',
                element: <Episodes />,
                content: <Text value={'Episodes'} />,
            },
            {
                path: 'locations',
                element: <Locations />,
                content: <Text value={'Locations'} />,
            },
        ],
    },
    {
        path: '/map',
        element: <InteractiveMap />,
        content: <Text value={'Map'} />,
    },
    {
        content: (
            <Image
                src={'https://static-00.iconduck.com/assets.00/storybook-icon-icon-412x512-341bo8r1.png'}
                alt="storybook"
                className={s.logo}
                loading="lazy"
            />
        ),
        externalSource: 'https://storybook.js.org/docs/react/get-started/install/',
    },
];

const router = createBrowserRouter(ROUTES.filter((r) => !r.externalSource));

export default router;