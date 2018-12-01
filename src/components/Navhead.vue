<template>
	<div>
		<div class="nav" >
			<img src="../assets/img/微信图片_20181130152241.png" alt="logo">
			<ul class="nav_ul">
			<router-link tag='li' :to='item.ref' v-for='(item,index) in items' :key='index' :class="{menu:item.routeName==$route.name}">
				{{item.routname}}
			</router-link>
		</ul>
		</div>
		
		<div class="Carousel" v-on:mouseover="stop()" v-on:mouseout="move()">
			<transition-group class="nav_img" tag='ul' name="bounce">
				<router-link v-show="indexs==mark" tag='li' to='' v-for='(img,indexs) in plays' :key='indexs' :class="{mainimg:img.names==$route.name}">
					<img :src='img.url' alt="主页图片"/>
				</router-link>
			</transition-group>
		</div>
			
		
		<div class="bar">
			<span v-for="(bar,index) in plays" :class="{'active':index==mark}" :key="index" @click="change(index)" ></span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				timer:null,
				mark:0,
				show:true,
				items:[
					{
						ref:'/',
						name:'首页',
						routname:'首页',
					},
					{
						ref:'/about.html',
						name:'关于我们',
						routname:'关于我们',
					},
					{
						ref:'/contact.html',
						name:'联系我们',
						routname:'联系我们',
					},
					{
						ref:'/hr.html',
						name:'加入我们',
						routname:'加入我们',
					},
				],
				plays:[
					{
						names:'第一张',
						url:require('../assets/img/ban1.jpg'),
					},
					{
						names:'第二张',
						url:require('../assets/img/ban2.jpg'),
					},
					{
						names:'第三张',
						url:require('../assets/img/ban3.jpg'),
					}
				]
			}
		},
		methods:{
			autoPlay(){
				this.mark++;
				if(this.mark == 3){
					this.mark = 0;
				}
			},
			play(){
				this.timer = setInterval(this.autoplay,2500)
			},
			change(i){
				this.mark = i;
			},
			stop(){
				clearInterval(this.timer)
			},
			move(){
				this.timer = setInterval(this.autoPlay,2500)
			}
		},
		created(){
			this.play()
		}
	}
</script>

<style>
	.nav{
		width: 1226px;
		margin: 0 auto;
		height: 86px;
	}
	.nav img{
		display: inline-block;
		float: left;
		width: 116px;
		height: 34px;
		margin-top:30px ;
	}
	.nav_ul{
		list-style: none;
		display: flex;
		line-height: 40px;
		margin-top:30px ;
		float: left;
		
	}
	.nav_ul li{
		margin-right:20px ;
		cursor: pointer;
	}
	.Carousel{
		height: 320px;
		margin: 0px;
		padding: 0px;
		overflow: hidden;
		width:100%;
	
	}
	.nav_img{
		display:flex;
		clear: both;
		list-style: none;
		width: 300%;
		padding: 0px;
	}
	.nav_img img{
		height:320px;
		width: 100%;
	}
	.bar{
		position: absolute;
		left: 650px;
		top: 370px;
		cursor: pointer;
	}
	.bar span{
		position: relative;
		display: inline-block;
		top: 0px;
		left: 0px;
		width: 8px;
		height: 8px;
		border: 1px solid #686761;
		border-radius:50% ;
		background: #686761;
		margin:0px 10px ;
	}
	.active{
		background: #00C721 !important;
	}
	.bounce-enter-acitve{
		transform: translateX(0);
   		 transition: all 1s ease;
	}
	.bounce-leave-active{
		transform: translateX(-100%);
   		 transition: all 1s ease;
	}
	.bounce-enter {
   	 	transform: translateX(100%);
  	}
  	.bounce-leave {
   	 transform: translateX(0);
  	}
  	@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>