<script>
export default {
    name: 'AppCard',
    props: {
        title: String,
        image: String,
        description: String,
        id: Number,
        slug: String
    }
}
</script>

<template>
    <div class="card h-100" style="width: 18rem;">
        <img :src="image" class="card-img-top" :alt="title">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ description }}</p>
            <router-link :to="{ name: 'project', params: { slug: slug, id:id } }" class="btn btn-primary">
                Descrizione
            </router-link>
        </div>
    </div>
</template>

<style scoped></style>