<template>
  <div id="app">
  	<Navhead></Navhead>
   <router-view></router-view>
 		 <Footer></Footer>
  </div>
</template>

<script>
import Navhead from './components/Navhead'
import About from './components/About'
import Footer from './components/Footer'
export default {
  //name: 'App',
  components:{
  	Navhead,
  	About,
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
  width: 1226px;
  margin: 0 auto;
}
</style>
