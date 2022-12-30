<script >
import { store } from '../store.js';
import Song from './Song.vue';
import axios from 'axios' ;
export default {
components: { Song },
data(){
    return{
        store
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
    <Song v-for="(track,index) in store.arrayTopTracks" :key="index" :item="track"/>
</div>
<h2>OTHER TRACK</h2>
</div>
</template>

<style lang="scss">
.wrapper{
    width: 90vw;
    height: calc(100% + 100px);
    background: yellow;
    display: flex;
    flex-direction: column;
    margin-top: 10vh;
    .list{
        display: flex;
        flex-wrap: wrap;
    }
}


</style>
