<script>
import ProjectCard from '../components/ProjectCard.vue';
import AppFooter from '../components/AppFooter.vue';
import AppHeader from '../components/AppHeader.vue';
import axios from 'axios';

export default {
    name: 'AppProject',
    data() {
        return {
            data: []
        }
    },
    components: {
        ProjectCard,
        AppFooter,
        AppHeader
    },
    methods: {
        getProjects() {
            axios.get("http://127.0.0.1:8000/api/projects/"+this.$route.params.id).then((response) => {
                this.data = response.data.results;
            }
            );
        }
    },
    created() {
        this.getProjects();
    }
}
</script>

<template>
    <AppHeader></AppHeader>
    <div class="container d-flex align-items-center justify-content-center">
        <ProjectCard :data="data"/>
    </div>
    <AppFooter />
</template>

<style scoped></style>