<script>
export default {
    name: 'TechnologyCard',
    props: {
        data: Object
    }
}
</script>

<template>
    <div class="card h-100" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title mb-3">{{ data.name }}</h5>
            <h6>Progetti correlati:</h6>
            <ul v-for="item in data.projects">
                <li>
                    <router-link :to="{ name: 'project', params: { slug: item.slug, id: item.id } }"
                        class="btn btn-success">
                        {{ item.title }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>