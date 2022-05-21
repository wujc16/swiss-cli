import React from 'react';
import Loadable, { LoadableComponent } from 'react-loadable';

function LoadingComp() {
  return (
    <div>
      Loading...
    </div>
  );
}

interface RouterItem {
  path: string;
  component: LoadableComponent & React.ComponentType<unknown>,
}

const routers: RouterItem[] = [
  {
    path: '/',
    component: Loadable({
      loader: () => import(/* webpackChunkName: "home" */'@pages/Home'),
      loading: LoadingComp,
    }),
  },
  {
    path: 'home',
    component: Loadable({
      loader: () => import(/* webpackChunkName: "home" */'@pages/Home'),
      loading: LoadingComp,
    }),
  },
  {
    path: 'about',
    component: Loadable({
      loader: () => import(/* webpackChunkName: "about" */'@pages/About'),
      loading: LoadingComp,
    }),
  },
];

export { routers };
