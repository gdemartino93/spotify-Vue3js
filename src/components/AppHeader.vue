<script >
import { store } from '../store.js'
import axios from 'axios';
export default {
data(){
    return{
        store,
        search : "",
    }
},
methods:{
    searchTrack(){
        let searchTrack = store.searchTrack + this.search;
        axios
        .get(searchTrack)
        .then(res =>{
            store.arraySearched = res.data.tracks
        })
    }
},
}
</script>

<template>
 <div class="bar-header">
    <div class="col-3 search">
        <input class="form-control" type="text" placeholder="Search your song" aria-label="default input example" v-model="search">
    </div>
    <div class="col-3">
        <button class="btn" @click="searchTrack">PROVA</button>
        <!-- <a href="" class="btn" @click="">ASDASDASD</a> -->
    </div>
 </div>
</template>

<style lang="scss">
@use '../styles/partials/variables' as *;
.bar-header{
    height: 10vh;
    background: $deepBlue;
    width: 100vw;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .btn {
    border-radius: 28px;
    color: #ffffff;
    font-size: calc(5px + 1vmax);
    padding: 10px 20px 10px 20px;
    text-decoration: none;
    border: 1px solid white;
    min-width: 120px;
    flex-shrink: 0;
  }
    input{
        background: inherit;
        color:white;
        border: none;
        &::placeholder{
            color: white;
        }
        &:focus{
            background: inherit;
            border: 1px solid green;
        }
        
    }
    }
</style>
