<script >
export default {
props :["item"],
data(){
    return{
        
    }
},
methods:{
}
}
</script>

<template>
<div class="song">
    <div class="cover">
            <img :src="item.share.image" alt="">
    </div>
    <div class="description">
        <span class="title fw-bold">{{item.title}}</span>
        <span class="author">{{ item.subtitle }}</span>
    </div>

</div>
</template>

<style lang="scss">
.song{
    width: calc(100% / 8 - 10px);
    margin: 5px;
    display: flex;
    flex-direction: column;
    .cover{
    height: 70%;
    img{
        width: 100%;
        height: 100%;
    }
    }
    .description{
        height: 30%;
        display: flex;
        flex-direction: column;
    }

}


</style>
