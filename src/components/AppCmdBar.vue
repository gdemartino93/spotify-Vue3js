<script >
import { store } from '../store';
import ProgressBar from './ProgressBar.vue';

export default {
components : { ProgressBar },
data(){
    return{
        store
    }
}
}
</script>

<template>
<div class="cmd-bar d-flex align-items-center">
        <div class="col-4 left d-flex ">
            <div class="songMini" v-for="(songMini,index) in store.arrayTopTracks" :class="store.active == index ? 'd-block' : 'd-none'">
                <img :src="songMini.share.image" alt="">
                <div class="info">
                    <span class="songName"> {{ songMini.title }}</span>
                    <span class="songAuthor">{{ songMini.subtitle }}</span>
                </div>
            </div>
        </div>
        <div class="col-4 center">
            <div class="icon">
                <font-awesome-icon icon="fa-solid fa-shuffle" class="fs-4" />
                <font-awesome-icon icon="fa-solid fa-backward-step" class="fs-4" />
                <font-awesome-icon icon="fa-solid fa-play" class="fs-1" />
                <font-awesome-icon icon="fa-solid fa-forward-step" class="fs-4" />
                <font-awesome-icon icon="fa-solid fa-rotate-right" class="fs-4" />
            </div>
            <div>
                <ProgressBar />
            </div>

        </div>
        <div class="col-4"></div>
</div>
</template>

<style lang="scss">
.cmd-bar{
    height: 100px;
    width: 100%;
    background: #282828;
    position: fixed;
    bottom: 0;
    left: 0;
    color: white;
    z-index: 2;
    .icon{
        gap: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .songMini{
        display: flex;
        gap: 10px;
        justify-content: start;
        align-items: center;
        margin-left: 20px;
        .info{
            display: flex;
            flex-direction: column;
            .songName{
                font-size: 13px;
                font-weight: bold;
            }
            .songAuthor{
                font-size: 10px;
                color: grey;
                font-weight: bold;
            }
        }
        img{
            width: 80px;
            height: 80px;
        }
    }
}
</style>
