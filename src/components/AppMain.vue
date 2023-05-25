<script>
import AppCard from './AppCard.vue';
export default {
    name: 'AppMain',
    components:{
        AppCard
    },
    props: {
        data: Object
    }
}
</script>

<template>
    <main>
        <div class="container">
            <h1 class="text-center">I miei Progetti</h1>
            <div class="row mt-5 gy-3">
                <div class="col col-md-4" v-for="project in data">
                    <AppCard :title="project.title" :description="project.description"/>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped></style>