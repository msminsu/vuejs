<template>
  <div id="app">
    <ul>
      <li>
                <a href="#;">
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
    </ul>
  </div>


</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style scope lang="scss">
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

a{
  display: block;
  text-decoration: none;
  color: #8d8d8d;
  padding: 20px 0;
  }
a:hover{background: #fff;
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
