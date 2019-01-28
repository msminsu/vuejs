<template>

 <div class="detail" :mode="mode"  :listData="listData" :class="{'active':isActive}"
 v-bind:style="{ 'background': randomColor}" >
        <button v-on:click="close">x</button>
        <strong>{{listData.id}}</strong>
        <img v-bind:src="listData.src" alt="">
    </div>

</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      isActive: false,
      randomColor: '#ffffff',
    }
  },
  props : ['mode','listData'],
  beforeCreate(){


  },
  mounted() {
    this.isActive = true;
    this.randomColor = this.getRandomColor();
   },

   watch:{

   },

   methods: {
    close: function(){
      this.isActive = false;
      this.$emit('modeChange', 'list')
    },
    getRandomColor: function () {
        /* var letters = '0123456789ABCDEF';
        var color = '#00';
        for (var i = 0; i < 4; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color; */
/*               let r = Math.floor(Math.random() * 255)
              let g = Math.floor(Math.random() * 255)
              let b = Math.floor(Math.random() * 255)
              let a = .3
              return `rgba(${r},${g},${b},${a})` */
      }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.detail{
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  bottom: 0;
  height:0;
  background: gray;
  transition: all 1000ms cubic-bezier(0.165, 0.840, 0.440, 1.000);
  color: #fff;
}


.detail.active{
  height: 100%;
  top:0;
  transition: all .7s cubic-bezier(0.165, 0.840, 0.440, 1.000);
}
img{width: 600px; }
</style>
