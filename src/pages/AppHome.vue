<script>
import AppFooter from '../components/AppFooter.vue';
import AppHeader from '../components/AppHeader.vue';

export default {
  name: 'AppHome',
  components: {
    AppFooter,
    AppHeader
  }
}
</script>

<template>
<AppHeader />
  <main>
    <div class="container">
      <h1>Home</h1>
    </div>
  </main>
  <AppFooter />
</template>

<style scoped></style>