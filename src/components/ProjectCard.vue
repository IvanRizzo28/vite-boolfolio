<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    name: 'ProjectCard',
    props: {
        data: Object
    },
    data() {
        return {
            name: null,
            message: null,
            store
        }
    },
    methods: {
        get() {
            axios.post(this.store.apiUrlBase+'comment', {
                name: this.name,
                message: this.message,
                project_id: this.data.id
            }).then(function (response) {
                    console.log(response);
            }).catch(function (error) {
                    console.log(error);
            });
        }
    }
}
</script>

<template>
    <div class="card h-100" style="width: 18rem;">
        <img :src="data.image" class="card-img-top" :alt="data.title">
        <div class="card-body">
            <h5 class="card-title">{{ data.title }}</h5>
            <p class="card-text">{{ data.description }}</p>
            <div v-if="data.name">
                <h6>Type:</h6>
                <p class="card-text">{{ data.name }}</p>
            </div>
            <div class="mt-2">
                <h6 v-show="data.technologies.length">Technologies:</h6>
                <ul v-for="item in data.technologies">
                    <li>
                        <router-link :to="{ name: 'technology', params: { slug: item.slug, id: item.id } }"
                            class="btn btn-success">
                            {{ item.name }}
                        </router-link>
                    </li>
                </ul>
            </div>
            <hr>
            <div class="mt-2">
                <h6 v-show="data.comments.length">Comments:</h6>
                <ul v-for="item in data.comments" class="list-unstyled">
                    <li class="ps-1">
                        <strong>{{ item.name }}:</strong>
                        <p class="ps-2">{{ item.message }}</p>
                    </li>
                </ul>
                <form class="pt-4" @submit.prevent="get">
                    <input v-model="name" type="text" class="form-control" placeholder="Name" aria-label="Name"
                        aria-describedby="basic-addon1" name="name">

                    <div class="input-group pt-1">
                        <textarea v-model="message" class="form-control" aria-label="With textarea" maxlength="255" rows="2"
                            name="message"></textarea>
                        <button class="btn btn-success" type="submit" id="button-addon2">Invia</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped></style>