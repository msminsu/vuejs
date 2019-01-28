<template>
<div :mode="mode">
   <ul class="listComponent">

      <li v-for="item in lists" :key="item.id">
        <a href="#;" v-on:click="open(item.id)">
                    <span class="wrap">
                      <em class="entry_date"> July 1988</em>
                      <strong>Graduation 1988</strong>
                      <span class="con">{{item.content}}</span>
                    </span>
                </a>
      </li>

           <!--
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
            </li> -->
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
  methods: {
    open: function(id){
      //  console.log(this.listData);
       this.$emit('modeChange', 'detail',this.lists[id-1]);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
body{background: #f4f4f4;
font: 42px/1.4 "ff-dagny-web-pro", "Times New Roman", Times, serif;
}
a{
  display: block;
  text-decoration: none;
  color: #8d8d8d;
  padding: 20px 0;
   transition: all 2s;
  }
a:hover{background: #fff;transition: all 2s;
  strong{color: #000;font-weight: normal;}
}
strong{
  display: block;
  padding-left: 167px;width: 630px;
      padding-bottom: 26px;
  text-align: left;
  font-weight: normal;
}
li{
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
    font-size: 14px;
    color: #282828;

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
