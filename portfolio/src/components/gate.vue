<template>
<!-- isACtive && 'active' -->
    <div class="gate">
      <p>
        Welcome...
      </p>
    </div>

</template>

<script>
export default {
  name: 'Gate',
  data () {
    return {
      isActive: false,
    }
  },

  mounted() {
   // this.isActive = true;
    // console.log(this.$refs);


   },

   watch:{

   },

   methods: {
    close: function(){

    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.gate{
  overflow: hidden;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height:100%;
  min-width: 860px;
  box-sizing: border-box;
  padding: 85px;
  text-align: center;
  background: #fff;
  color: #000;

}
</style>
