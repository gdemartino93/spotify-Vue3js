<script >
export default {
props :["item"],
data(){
    return{
        
    }
},
methods:{
    // topSongs(){
    //     let topSongs = store.topSongs;
    // }
}
}
</script>

<template>
<div class="song">
    <div class="cover">
            <!-- <img :src="item.share.image" alt=""> -->
    </div>
    <div class="description">
        <span class="title">titolp</span>
        <span class="author">autore</span>
    </div>

</div>
</template>

<style lang="scss">
.song{
    width: calc(100% / 6 - 20px);
    height: 200px;
    background:green;
    border: 1px solid red;

    img{
        width: 100%;
        height: 100%;
    }
}


</style>
