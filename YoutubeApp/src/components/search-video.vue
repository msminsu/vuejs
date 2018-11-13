<template>
    <div class="search-video">
        <div class="search-video__container">
            <iframe class="search-video__screen"
                    width="560" height="315"
                    :src="`https://www.youtube.com/embed/${data.id}?modestbranding=1&autoplay=1&rel=0&showinfo=0`"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchVideo",
        props: ["data"]
    };
</script>

<style lang="scss">
    .search-video {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: #fff;
        z-index: 1;
        
        &__container {
            width: 100%;
            padding-bottom: (315/560)*100%;
            position: relative;
        }
        
        &__screen {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
</style>
