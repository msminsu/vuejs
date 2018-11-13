<template>
    <div class="search">
        <SearchVideo :data="video" />
        <SearchList :data="videoList" @updateVideoData="handleUpdateVideoData" />
        <SearchInput @updateSearchData="handleUpdateSearchData" />
    </div>
</template>

<script>
    import SearchInput from "./search-input";
    import SearchList from "./search-list";
    import SearchVideo from "./search-video";
    
    export default {
        name: "Search",
        components: {
            SearchInput,
            SearchList,
            SearchVideo
        },
        data(){
            return {
                videoList: [],
                video: ""
            };
        },
        methods: {
            handleUpdateSearchData(d){
                this.videoList = d.data.items;
            },
            handleUpdateVideoData(d){
                this.video = d;
            }
        }
    };
</script>

<style lang="scss">
    .search {
        -webkit-overflow-scrolling: touch;
    
        .ytp-expand-pause-overlay .ytp-pause-overlay{
            display: none;
        }
    }
</style>
