import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import ProjectsList from './pages/ProjectsList.vue';
import AppProject from './pages/AppProject.vue';
import AppTechnology from './pages/AppTechnology.vue';
import NotFoundPage from './pages/NotFoundPage.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/Projects',
            name: 'projects',
            component: ProjectsList
        },
        {
            path: '/Project/:id/:slug',
            name: 'project',
            component: AppProject
        },
        {
            path: '/Technology/:id/:slug',
            name: 'technology',
            component: AppTechnology
        },
        { 
            path: '/:pathMatch(.*)*', 
            name: 'not-found',
            component: NotFoundPage 
        }
    ]
});
export { router };