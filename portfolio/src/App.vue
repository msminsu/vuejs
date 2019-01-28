<template>
  <div id="app">
    <!-- <ul v-if="mode === 'list'">
      <li>
                <a href="#;" v-on:click="open()">
                    <span class="wrap">
                      <em class="entry_date"> July 1988</em>
                      <strong>Graduation 1988</strong>
                      <span class="con">An exhibition including four hundred photographs of examples of modern architecture from all over the world is organised by the Architectural Graduates Association of the National University of Ireland.  Key figures in this include John O'Gorman and T.P. Kennedy.  The exhibit had previously been shown in every major city in Great Britain.  </span>
                    </span>
                </a>
            </li>
            <li>
                <a href="#;">
                    <span class="wrap">
                      <em class="entry_date"> July 1988</em>
                      <strong>Graduation 1988</strong>
                    </span>
                </a>
            </li>
            <li>
                <a href="#;">
                    <span class="wrap">
                      <em class="entry_date"> July 1988</em>
                      <strong>Graduation 1988</strong>
                    </span>
                </a>
            </li>
            <li>
                <a href="#;">
                    <span class="wrap">
                      <em class="entry_date"> July 1988</em>
                      <strong>Graduation 1988</strong>
                    </span>
                </a>
            </li>
            <li>
                <a href="#;">
                    <span class="wrap">
                      <em class="entry_date"> July 1988</em>
                      <strong>Graduation 1988</strong>
                    </span>
                </a>
            </li>
            <li>
                <a href="#;">
                    <span class="wrap">
                      <em class="entry_date"> July 1988</em>
                      <strong>Graduation 1988</strong>
                    </span>
                </a>
            </li>
            <li>
                <a href="#;">
                    <span class="wrap">
                      <em class="entry_date"> July 1988</em>
                      <strong>Graduation 1988</strong>
                    </span>
                </a>
            </li>
            <li>
                <a href="#;">
                    <span class="wrap">
                      <em class="entry_date"> July 1988</em>
                      <strong>Graduation 1988</strong>
                    </span>
                </a>
            </li>
    </ul> -->
    <ListComponent v-on:modeChange='onModeChange' v-if="mode ==='list'" :mode="mode" :lists = 'lists'></ListComponent>
    <Detail v-on:modeChange='onModeChange' v-else :mode="mode" :listData = 'listData'></Detail>
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
      lists:[
         {
          id: 1,
          content: '메모 #1',
          href: 'https://naver.com',
          src: 'https://source.unsplash.com/collection/190720/900x400'
        },
         {
          id: 2,
          content: '메모 #1',
          href: 'https://naver.com',
          src: 'https://source.unsplash.com/collection/190721/900x400'
        },
         {
          id: 3,
          content: '메모 #1',
          href: 'https://naver.com',
          src: 'https://source.unsplash.com/collection/190722/900x400'
        },
         {
          id: 4,
          content: '메모 #1',
          href: 'https://naver.com',
          src: 'https://source.unsplash.com/collection/190723/900x400'
        },
         {
          id: 5,
          content: '메모 #1',
          href: 'https://naver.com',
          src: 'https://source.unsplash.com/collection/190724/900x400'
        },
         {
          id: 6,
          content: '메모 #1',
          href: 'https://naver.com',
          src: 'https://source.unsplash.com/collection/190725/900x400'
        },
         {
          id: 7,
          content: '메모 #1',
          href: 'https://naver.com',
          src: 'https://source.unsplash.com/collection/190726/900x400'
        },
         {
          id: 8,
          content: '메모 #1',
          href: 'https://naver.com',
          src: 'https://source.unsplash.com/collection/190727/900x400'
        },
         {
          id: 9,
          content: '메모 #1',
          href: 'https://naver.com',
          src: 'https://source.unsplash.com/collection/190728/900x400'
        },
         {
          id: 10,
          content: '메모 #1',
          href: 'https://naver.com',
          src: 'https://source.unsplash.com/collection/190729/900x400'
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
    ListComponent
  },
  methods: {

    onModeChange: function(data,list){
      this.mode = data
      this.listData = list
    }
  }

}
</script>

<style lang="scss" >
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
