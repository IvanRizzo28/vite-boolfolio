<script>
import TechnologyCard from '../components/TechnologyCard.vue';
import AppFooter from '../components/AppFooter.vue';
import AppHeader from '../components/AppHeader.vue';
import axios from 'axios';

export default {
    name: 'AppTechnology',
    data() {
        return {
            data: []
        }
    },
    components: {
        TechnologyCard,
        AppFooter,
        AppHeader
    },
    methods: {
        getTechnology() {
            axios.get("http://127.0.0.1:8000/api/technology/"+this.$route.params.id).then((response) => {
                this.data = response.data.results;
            }
            );
        }
    },
    created() {
        this.getTechnology();
    }
}
</script>

<template>
    <AppHeader></AppHeader>
    <div class="container d-flex align-items-center justify-content-center">
        <TechnologyCard :data="data"/>
    </div>
    <AppFooter />
</template>

<style scoped></style>