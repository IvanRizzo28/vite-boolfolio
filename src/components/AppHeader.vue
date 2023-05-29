<script>
export default{
    name:'AppHeader'
}
</script>

<template>
    <header class="p-3 mb-4">
        <div class="container d-flex justify-content-between align-items-center">
            <div class="logo">
                LOGO
            </div>
            <nav>
                <ul class="list-unstyled">
                    <li>
                        <RouterLink :to="{ name: 'home' }" class="pe-3">Home</RouterLink>
                        <RouterLink :to="{ name: 'projects' }">Projects</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped>
header{
    background-color: lightgray;
}
</style>