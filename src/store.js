import { reactive } from "vue"; 

export const store= reactive({
    apiUrlBase: 'http://127.0.0.1:8000/api/',
    apiUrlProjects: 'projects',
    apiUrlTechnology: 'technology'
});