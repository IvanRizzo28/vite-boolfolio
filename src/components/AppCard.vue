<script>
export default {
    name: 'AppMain',
    props: {
        title: String,
        description: String
    }
}
</script>

<template>
    <div class="card h-100" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ description }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>

<style scoped></style>