<template>
    <div class="search-list">
        <ul>
            <li class="search-list__item" v-for="(listItem, index) in data" @click="updateVideo(index)">
                <span class="search-list__item-thumbnail"><img :src="listItem.snippet.thumbnails.default.url" alt=""></span>
                <span class="search-list__item-title">{{listItem.snippet.title}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "SearchList",
        props: ["data"],
        methods: {
            updateVideo(index){
                this.$emit("updateVideoData", {
                    id: this.data[index].id.videoId
                });
            }
        }
    };
</script>

<style lang="scss" scoped>
    .search-list {
        margin-top: (315/560)*100%;
        padding: 5px 0 65px 0;
        position: relative;
        z-index: 0;
        
        &__item {
            position: relative;
            list-style: none;
            padding: 5px 10px 5px 140px;
            min-height: 90px;
            cursor: pointer;
        }
        
        &__item-thumbnail {
            position: absolute;
            top: 5px;
            left: 10px;
            width: 120px;
            height: 90px;
        }
        
    }
</style>
