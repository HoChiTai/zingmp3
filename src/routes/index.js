import Home from '~/pages/Home';
import NewMusic from '~/pages/NewMusic';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/moi-phat-hanh', component: NewMusic },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
