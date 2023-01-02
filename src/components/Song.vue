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
            <div class="overlay">
                <font-awesome-icon icon="fa-regular fa-circle-play" class="playOverlay fs-1" />
            </div>
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
    width: calc(100% / 8 - 20px);
    margin: 5px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    .cover{
    height: 70%;
    position: relative;
    .playOverlay{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    &:hover .overlay{
        display: block;
    }
    .overlay{
        position: absolute;
        background:rgba(0, 0, 0, 0.58);
        width: 100%;
        height: 100%;
        display: none;
    }
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
