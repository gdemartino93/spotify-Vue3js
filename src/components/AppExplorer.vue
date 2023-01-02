<script >
import { store } from '../store.js';
import Song from './Song.vue';
import axios from 'axios' ;
export default {
components: { Song },
data(){
    return{
        store,
        active : 0
    }
},
methods:{
    topTracks(){
        let topTracks = store.topTracks;
        axios
        .get(topTracks)
        .then(res =>{
            store.arrayTopTracks = res.data.tracks
        })
    },
    selected(index){
        this.store.active = index
        console.log(this.store.active);
    }

},
mounted(){
    this.topTracks();
}
}
</script>

<template>
<div class="wrapper">
<h2>Top tracks:</h2>
<div class="list">
    <Song v-for="(track,index) in store.arrayTopTracks" :key="index" :item="track" @click="selected(index)"/>
</div>
</div>
</template>

<style lang="scss">
@use '../styles/partials/variables' as *;
.wrapper{
    color: white;
    width: 100vw;
    background: $bg-main;
    display: flex;
    flex-direction: column;
    padding-top: 10vh;
    padding-left: 180px;
    padding-bottom: 180px;
    .list{
        display: flex;
        flex-wrap: wrap;
    }
}


</style>
