<script>
import AppFooter from '../components/AppFooter.vue';
import AppHeader from '../components/AppHeader.vue';
import AppCard from '../components/AppCard.vue';
import axios from 'axios';

import { store } from '../store.js';

export default {
  name: 'ProjectsList',
  data() {
    return {
      data: [],
      nextPage: null,
      store
    }
  },
  components: {
    AppFooter,
    AppHeader,
    AppCard
  },
  methods: {
    getProjects(url) {
      axios.get(url).then((response) => {
        let result = response.data.results.data;
        this.nextPage=response.data.results.next_page_url;
        this.data=[...this.data,...result];
      }
      );
    }
  },
  created() {
    this.getProjects(this.store.apiUrlBase + this.store.apiUrlProjects);
  }
}
</script>

<template>
  <AppHeader />
  <main>
    <div class="container">
      <h1 class="text-center">I miei Progetti</h1>
      <div class="row mt-5 gy-3 mb-4">
        <div class="col col-md-4" v-for="project in data">
          <AppCard :title="project.title" :description="project.description" :id="project.id" :slug="project.slug" :image="project.image"/>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <button type="button" class="btn btn-primary" @click="getProjects(nextPage)" v-if="nextPage">Mostra altri</button>
      </div>
    </div>
  </main>
  <AppFooter />
</template>


<style lang="scss">
//versione 1 - inclusione via app.vue
// @use './assets/scss/main.scss' as *;
</style>
