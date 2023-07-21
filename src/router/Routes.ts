import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
    path : string;
    Component : LazyExoticComponent<JSXComponent> | JSXComponent;
}

const HeaderLazy = lazy(() => import('../shared/components/header/Header'));

export const routes : Route[] = [
    {
        path : '/*',
        Component : HeaderLazy
    }
];
