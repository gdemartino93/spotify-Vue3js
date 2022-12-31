<script >
import ProgressBar from './ProgressBar.vue';

export default {
components : { ProgressBar }
}
</script>

<template>
<div class="cmd-bar d-flex align-items-center text-center">
        <div class="col-4">asds</div>
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
}
</style>
