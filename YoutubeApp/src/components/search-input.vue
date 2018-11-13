<template>
    <div class="search-input">
        <input placeholder="검색어를 입력해 주세요." @keyup="handleChange" />
    </div>
</template>

<script>
    import axios from "axios";
    import _ from "lodash";
    
    const API_KEY = "";
    const max = 50;
    const defaultKeyword = "";
    
    export default {
        name: "SearchInput",
        data(){
            return {
                keyword: "javascript"
            };
        },
        methods: {
            videoSearch(val){
                console.log(val);
                axios({
                    url: `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${val || defaultKeyword}&part=snippet&type=video&maxResults=${max}`
                }).then((d) => {
                    this.$emit("updateSearchData", d);
                });
            },
            handleChange: _.debounce(function (e){
                this.videoSearch(e.target.value);
            }, 250)
        },
        mounted(){
            this.videoSearch();
        }
    };
</script>

<style lang="scss">
    .search-input {
        position: fixed;
        bottom: 0;
        height: 60px;
        width: 100%;
        z-index: 3;
        box-sizing: border-box;
        background: #fff;
        border-top: 1px solid #ccc;
        padding: 10px;
        
        input {
            width: 100%;
            border: 1px solid #ccc;
            border-radius: 3px;
            height: 40px;
            padding: 0 10px;
            box-sizing: border-box;
            outline: 0;
        }
        
    }
</style>
