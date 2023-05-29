import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import ProjectsList from './pages/ProjectsList.vue';
import AppProject from './pages/AppProject.vue';


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
        }
    ]
});
export { router };