<template>
    <h1 style="position: absolute;
            bottom: 163px;">{{ props.title }}</h1>
    <div class="main">
        <div class="creds">
            <div style="width: 400px; height: 130px; margin-top: 20px; font-size: larger">
                <span>Name: {{ user.name }}</span> <br />
                <span>Age: {{ user.age }}</span>
            </div>
            <div class="form" style="top: -68px;">
                <input type="text" v-model="user.search" placeholder="Enter name" @change="getAge" />
                <button type="button" @click="getAge" style="left: 10px;">Guess the age</button>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { reactive } from "vue";
const props = defineProps({
    title: {
        type: String,
        default: "Test Component",
    },
});

const user = reactive({ name: "", age: "", search: null });

const getAge = () => {
    fetch("https://api.agify.io/?name=" + user.search)
        .then((response) => response.json())
        .then((data) => {
            user.age = data.age;
            user.name = data.name;
            user.search = null;
        });
};
</script>