<template>
	<div>
		<div class="nav" >
			<img src="../assets/img/微信图片_20181130152241.png" alt="logo">
			<ul class="nav_ul">
			<router-link tag='li' :to='item.ref' v-for='(item,index1) in items' :key='index1' :class="{'is-active':item.routename==$route.name}" >
				{{item.routename}}
			</router-link>
		</ul>
		</div>
        <div class="roll hidden-xs" v-on:mouseover="stop()" v-on:mouseout="move()">
			<div class="Carousel hidden-xs" >
				<transition-group name="bounce" class="nav_img" tag='ul' >
               		 <li  class="hidden-xs" v-for='(img,indexs) in plays' :key='indexs'  v-show="indexs==mark" >
						<img :src='img.url' alt="主页图片" class="hidden-xs" />
					</li>
				</transition-group>
			</div>
			<div class="bar">
				<span v-for="(bar,index) in plays" :class="{'active':index==mark}" :key="index" @click="change(index)" ></span>
			</div>
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
						
						routename:'首页',
					},
					{
						ref:'/about.html',
						
						routename:'关于我们',
					},
					{
						ref:'/contact.html',
					
						routename:'联系我们',
					},
					{
						ref:'/hr.html',
						
						routename:'加入我们',
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
		margin:30px 0px 0px 20px;
		float: left;
		
	}
	.nav_ul li{
		margin-right:20px ;
		cursor: pointer;
		position: relative;
		top: 0px;
		left: 0px;
	}
	.roll{
		overflow: hidden;
		 width: 1280px;
	}
	
	.nav_img{
		
		display:flex;
		clear: both;
		list-style: none;
		width: 300%;
		margin: 0px;
	}
	.nav_img img{
		height:320px;
		width: 100%;
		}
	.bar{
		position: absolute;
		left: 45%;
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
	.nav_ul li{
		margin: 0px 20px;
		cursor: pointer;
	}
	.is-active{
		border-bottom: 2px solid #00C721;
	}
	.active{
		background: #00C721 !important;
	}
	
</style>