<template>
  <div id="app">
    <ListComponent v-on:modeChange='onModeChange' v-if="mode ==='list'" :mode="mode" :lists = 'lists'></ListComponent>
    <transition name="slide-up"  >
      <Detail v-if="isSlide" v-on:modeChange='onModeChange' :mode="mode" :listData = 'listData'></Detail>
    </transition>
  </div>
</template>

<script>
import ListComponent from './components/listComponent'
import Detail from './components/detail'

export default {
  name: 'App',
  data: function(){
    return {
      mode: 'list',
      listData:null,
      isSlide : false,
      lists:[
         {
          id: 1,
          title: 'Happy New Year!',
          content: '메모 #1',
          href: 'https://naver.com',
          src: 'p-1',
          color: '#ea4a36'

        },
         {
          id: 2,
          title: 'Happy New Year!',
          content: '메모 #2',
          href: 'https://naver.com',
          src: 'p-2',
          color: '#124173'

        },
         {
          id: 3,
          title: 'Happy New Year!',
          content: '메모 #3',
          href: 'https://naver.com',
          src: 'p-3',
          color: '#0e61af'

        },
         {
          id: 4,
          title: 'Happy New Year!',
          content: '메모 #4',
          href: 'https://naver.com',
          src: 'p-4',
          color: '#393c67'

        },
         {
          id: 5,
          title: 'Happy New Year!',
          content: '메모 #5',
          href: 'https://naver.com',
          src: 'p-5',
          color: '#242424'

        },
         {
          id: 6,
          title: 'Happy New Year!',
          content: '메모 #6',
          href: 'https://naver.com',
          src: 'p-6',
          color: '#535353'

        },
         {
          id: 7,
          title: 'Happy New Year!',
          content: '메모 #7',
          href: 'https://naver.com',
          src: 'p-7',
          color: '#b5808e'

        },
         {
          id: 8,
          title: 'Happy New Year!',
          content: '메모 #8',
          href: 'https://naver.com',
          src: 'p-8',
          color: '#04a77c'

        },
         {
          id: 9,
          title: 'Happy New Year!',
          content: '메모 #9',
          href: 'https://naver.com',
          src: 'p-9',
          color: '#d38d2c'

        },
         {
          id: 10,
          title: 'Happy New Year!',
          content: '메모 #10',
          href: 'https://naver.com',
          src: 'p-10',
          color: '#dbd5bb'

        },

      ]
    }
  },

  watch:{
    mode: function(){
      // console.log(this.$el);
    }

  },
  components: {
    Detail,
    ListComponent,
  },
  methods: {
    loadedAll(e){

    },

    onModeChange: function(data,list){
      this.mode = data
      this.listData = list
      this.isSlide= !this.isSlide;
    }
  }

}
</script>

<style lang="scss"  >
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{background: #f4f4f4;
font: 42px/1.4 "ff-dagny-web-pro", "Times New Roman", Times, serif;
}


.slide-up-enter,.slide-up-leave-to{
  transition: all 8s ease;
transform: translateY(100%);
}

.slide-up-enter-to,.slide-up-leave{
  transform: translateY(0%);
}

</style>
