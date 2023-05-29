<script>
export default {
    name: 'AppCard',
    props: {
        title: String,
        description: String,
        id: Number,
        slug: String
    }
}
</script>

<template>
    <div class="card h-100" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
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