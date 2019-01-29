<template>
<!-- isACtive && 'active' -->
    <div :class="['detail']" :mode="mode" :style="{ 'background': randomColor}">
      <button ref="kkk" @click="close">x</button>
      <h3 ref="aaa">{{listData.title}}</h3>
      <!-- <img :src="require(`listData.src`)" alt=""> -->
      <img :src="require('@/assets/' + listData.src + '.jpg')" alt="">


      <div class="wrap">
        <dl>
        <dt>RELEASE DATE</dt>
        <dd>2017.06</dd>
        </dl>
        <dl>
        <dt>TYPE</dt>
        <dd>반응형웹</dd>
        </dl>
        <dl>
        <dt>CLIENT</dt>
        <dd>TOURCONCERT</dd>
        </dl>
      </div>
      <a  href="">사이트 바로가기</a>
    </div>

</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      isActive: false,
      randomColor: '#fff',
      src:this.listData.src
    }
  },

  props : ['mode','listData'],

  mounted() {
    this.isActive = true;
    // console.log(this.$refs);
    this.randomColor = this.listData.color//this.getRandomColor();//'#3a3c68'//
   },

   watch:{

   },

   methods: {
    close: function(){
      this.isActive = false;
     this.$emit('modeChange', 'list')
    },
    getRandomColor: function () {
        var letters = '0123456789ABCDEF';
        var color = '#00';
        for (var i = 0; i < 4; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
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
@mixin closeAni($width:false, $height:false,$bg:false,$round:false){
	transition: 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	&:before,&:after{display: block; position: absolute; content:'';
		margin:auto;left: 0;top: 0;right: 0;bottom: 0;
		width: $width;height: $height; background: $bg;border-radius: $round;
	}
	&:before{transform: rotate(45deg)}
	&:after{transform: rotate(-45deg)}
	&:hover{transform: rotate(-90deg);}
}
.detail{
  overflow: hidden;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height:100%;

  box-sizing: border-box;
  padding: 85px;
  text-align: center;
  background: gray;
  transition: all 1000ms cubic-bezier(0.165, 0.840, 0.440, 1.000);
  color: #fff;
  h3{display: block;font-size: 30px;margin: 50px;}
}

.detail.active{
  height: 100%;
  top:0;
  transition: all .7s cubic-bezier(0.165, 0.840, 0.440, 1.000);
}

img{width: 600px;box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.5); }
button{
  border:none;
  outline:none;
  font-size: 24px;
  color:#fff;
  background: none;
  cursor: pointer;
  display: block;
  position: absolute;
  text-indent: -9999em;
  width: 50px;
  height: 50px;
  right: 30px;
  top: 30px;
  @include closeAni($width:50px,$height:2px,$bg:#fff);
}

dl{
  font-size: 14px;
  float: left;
  margin-right: 30px;
  text-align-last: left;
  dt{font-weight: bold;}
  dd{}
}

a{text-decoration: none; color: #fff; font-size: 11px;}
</style>
