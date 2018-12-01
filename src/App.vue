<template>
  <div id="app">
  	<Navhead></Navhead>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navhead from './components/Navhead'
import Center from './components/Center'
import Footer from './components/Footer'
export default {
  name: 'App',
  components:{
  	Navhead,
  	Center,
  	Footer,
  },
  data(){
  	return{
  		
  	}
  }
}
</script>

<style>
*{
	padding: 0px;
	margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
