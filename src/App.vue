<script>
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      apiUrlBase: 'http://127.0.0.1:8000/api/',
      apiUrlProjects: 'projects',
      projects: []
    }
  },
  components: {
    AppMain,
    AppFooter,
    AppHeader
  },
  methods: {
    getProjects() {
      axios.get(this.apiUrlBase+this.apiUrlProjects).then((response) => {
        this.projects = response.data.results;
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
  <AppMain :data="projects" />
  <AppFooter />
</template>


<style lang="scss">
//versione 1 - inclusione via app.vue
// @use './assets/scss/main.scss' as *;
</style>
