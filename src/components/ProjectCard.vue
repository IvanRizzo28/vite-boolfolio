<script>
export default {
    name: 'ProjectCard',
    props: {
        data: Object
    }
}
</script>

<template>
    <div class="card h-100" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ data.title }}</h5>
            <p class="card-text">{{ data.description }}</p>
            <div v-if="data.name">
                <h6>Type:</h6>
                <p class="card-text">{{ data.name }}</p>
            </div>
            <div class="mt-2">
                <h6>Technologies:</h6>
                <ul v-for="item in data.technologies">
                    <li>
                        <router-link :to="{ name: 'technology', params: { slug: item.slug, id: item.id } }" class="btn btn-success">
                            {{ item.name }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped></style>