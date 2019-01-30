<template>
  <div :mode="mode">
    <ul class="listComponent">
      <li ref="list" v-for="item in lists" :key="item.id">
        <a href="#;" v-on:click="open(item.id)">
            <span class="wrap">
              <em class="entry_date">{{item.date}}</em>
              <strong>{{item.title}}</strong>
              <span class="con">{{item.content}}</span>
            </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'listComponent',
  data () {
    return {

    }
  },
  listData:{},
  props : ['mode','lists'],
   mounted() {

   },
  methods: {
    open: function(id){
       this.$emit('modeChange', 'detail',this.lists[id-1]);
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >

a{
  display: block;
  text-decoration: none;
  color: #8d8d8d;
  padding: 20px 0;
   transition: all 1s;
  }
a:hover{background: #fff;transition: all 1s;
  strong,em{color: #000;font-weight: normal;}
}
strong{
  display: block;
  padding-left: 167px;width: 630px;
  padding-bottom: 26px;
  text-align: left;
  font-weight: normal;
}
li{
  overflow: hidden;
  list-style: none;
  position: relative;
  border-bottom: 1px solid #ddd;
  .wrap{
    display: block;
    position: relative;
    width: 960px;
    margin:0 auto;
  }
  .con{
    padding-left: 170px;
    width: 480px;
    display: block;
    text-align-last: left;
    font-size: 12px;
  }
  em{
    font-style: normal;
    position: absolute;
    top: 11px;
    left: 0;
    font-size: 14px;
  }

}

</style>
