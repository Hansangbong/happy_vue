import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Notice from '../views/system/Notice';
import SamplePage5 from '@/views/sampletest/SamplePage5.vue';
import LectureHandle from '@/views/sampletest/sampletest5/LectureHandle.vue';

import PostViewPage from '@/components/page/PostViewPage.vue';
import PostWritePage from '@/components/page/PostWritePage.vue';
import Board from '@/components/page/Board.vue';
import App1 from '@/components/page/App1.vue';
import App2 from '@/components/page/App2.vue';

const routes = [
    {
        path: '/board',
        name: 'Board',
        component: Board,
    },
    {
        path: '/post-write',
        name: 'PostWritePage',
        component: PostWritePage,
    },
    {
        path: '/post-view/:id',
        name: 'PostViewPage',
        component: PostViewPage,
    },
    {
        path: '/post-edit/:id',
        name: 'PostEditPage',
        component: PostWritePage,
        //props: { title: 'default1', content: 'default2' }
        props: true
    },
    {
        path: '/app1',
        name: 'App1',
        component: App1,
    },
    {
        path: '/app2',
        name: 'App2',
        component: App2,
    },
    {
        path: '/',
        name: 'home',
        component: Login,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        children: [
            {
                path: ':type/:menu',
                component: () => import('../views/Content.vue'),
            },
            {
                path: 'home',
                component: () => import('../views/Home.vue'),
            },
            {
                path: 'notice',
                children: [
                    {
                        path: 'notice',
                        component: <Notice />,
                    },
                ],
            },
            {
                path: 'sampletest',
                children: [
                    {
                        path: 'samplepage5',
                        component: <SamplePage5 />
                    },
                    {
                        path: 'detail/:id',
                        component: <LectureHandle />
                    },
                    {
                        path: 'write',
                        component: <LectureHandle />
                    }
                ]
            }
        ],
        component: Dashboard,
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory('/'),
    routes,
});

export default router;
