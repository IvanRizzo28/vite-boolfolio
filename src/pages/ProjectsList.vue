<script>
import AppFooter from '../components/AppFooter.vue';
import AppHeader from '../components/AppHeader.vue';
import AppCard from '../components/AppCard.vue';
import axios from 'axios';

export default {
  name: 'ProjectsList',
  data() {
    return {
      apiUrlBase: 'http://127.0.0.1:8000/api/',
      apiUrlProjects: 'projects',
      data: []
    }
  },
  components: {
    AppFooter,
    AppHeader,
    AppCard
  },
  methods: {
    getProjects() {
      axios.get(this.apiUrlBase + this.apiUrlProjects).then((response) => {
        this.data = response.data.results;
      }
      );
    }
  },
  created() {
    this.getProjects();
  }
}
</script>

<template>
  <AppHeader />
  <main>
    <div class="container">
      <h1 class="text-center">I miei Progetti</h1>
      <div class="row mt-5 gy-3">
        <div class="col col-md-4" v-for="project in data">
          <AppCard :title="project.title" :description="project.description" :id="project.id" :slug="project.slug" />
        </div>
      </div>
    </div>
  </main>
  <AppFooter />
</template>


<style lang="scss">
//versione 1 - inclusione via app.vue
// @use './assets/scss/main.scss' as *;
</style>
