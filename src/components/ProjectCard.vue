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
            comments: [],
            name: null,
            message: null,
            store
        }
    },
    methods: {
        get() {
            let tmp={
                name: this.name,
                message: this.message,
                project_id: this.data.id
            };
            axios.post(this.store.apiUrlBase+'comment', tmp).then(response => {
                tmp['created_at']=new Date();
                this.comments=this.comments.concat(tmp);
                this.name="";
                this.message="";
            }).catch(function (error) {
                    console.log(error);
            });
        },
        getDate(date){
            let tmp=new Date(date);
            return tmp.toLocaleDateString()+" "+tmp.toLocaleTimeString();
        }
    },
    computed:{
       
    },
    created(){
        this.comments=this.data.comments;
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
                <ul>
                    <li v-for="item in data.technologies">
                        <router-link :to="{ name: 'technology', params: { slug: item.slug, id: item.id } }"
                            class="btn btn-success mb-1">
                            {{ item.name }}
                        </router-link>
                    </li>
                </ul>
            </div>
            <hr>
            <div class="mt-2">
                <h6>Comments:</h6>
                <ul class="list-unstyled comments-list pb-1">
                    <li class="ps-1" v-for="item in comments">
                        <strong v-if="item.name">{{ item.name }}:</strong>
                        <strong v-else class="text-decoration-underline">Anonimo:</strong>
                        <small class="d-flex">{{ getDate(item.created_at) }}</small>
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

<style scoped>
    .comments-list{
        max-height: 350px;
        overflow-y: auto;
    }
</style>