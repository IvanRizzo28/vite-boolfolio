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
            
        </div>
    </div>
</template>

<style scoped></style>