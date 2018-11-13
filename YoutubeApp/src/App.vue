<template>
    <Search />
</template>

<script>
    import Search from "./components/search";
    
    export default {
        name: "app",
        components: {
            Search
        }
    };
</script>

<style lang="scss">
    * {margin: 0;padding: 0;}
    body, html {height: 100%;}
</style>
