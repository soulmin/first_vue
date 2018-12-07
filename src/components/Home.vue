<template>
	<div class="home">
		<div class="home_head">
			<div class="home_title">
				<h3>新闻动态</h3>
				<span>更多>></span>
			</div>
			
			<ul class="head_img">
				<router-link to=' ' tag='li' v-for='(item,index) in items' :key='index' class="new_img">
					<img :src='item.img' alt="图片">
					<p>{{item.title}}</p>
					<p>{{item.time}}</p>
				</router-link>
			</ul>
		</div>
		
        <div class="home_center">
			<div class="center_title">
				<h3>招贤纳士</h3>
				<span>更多>></span>
			</div>
			
			<ul class="center_write_01">
				<router-link to=' ' tag='li' v-for='(citem1,indexs1) in citems1' :key='indexs1' class='center_li_01'>
					<a href="#"><h4>{{citem1.title}}</h4></a>
					<p>{{citem1.message1}}</p>
					<p>{{citem1.message2}}</p>
					<p>{{citem1.message3}}</p>
				</router-link>
			</ul>
		</div>

		<div class="home_footer" v-on:mouseover="stop()" v-on:mouseout="move()" >
			<div class="footer_first">
				<transition-group class="footer_img" tag='ul' name="footer">
					<router-link to='' tag='li' v-for='(fitem,findex) in fitems' :key='findex' class="footer_li" v-show='findex==mark'>
						<img :src='fitem.img'> 
               	       <div class="footer_left">
							<h1>{{fitem.title}}</h1>
							<p>{{fitem.content1}}</p>
							<p>{{fitem.content2}}</p>
							<p>{{fitem.content3}}</p>
							<a href="#">{{fitem.more}}</a>
						</div>
					</router-link>
				</transition-group>
			</div>
			
			<div class="bar_01">
				<span v-for='(bar,bindex) in fitems' :key='bindex' :class="{'active':bindex==mark}" @click="change(bindex)" ></span>
			</div>
		</div>	
	</div>
</template>

<script>
	export default{
		data(){
			return{
				mark:0,
				timer:null,
				show:true,
				items:[
				{
					img:require('../assets/img/news-2017-11-04.jpg'),
					title:'海淀信息学竞赛战报：计蒜客学员凯旋 25% 学生获一等奖',
					time:'2017-11-04'
				},
				{
					img:require('../assets/img/news-2017-08-16-2.jpg'),
					title:'计蒜之道2017程序设计大赛收官 总决赛上演精彩对决',
					time:'2017-08-16'
				},
				{
					img:require('../assets/img/news-2017-08-16.jpg'),
					title:'教育部公布2017年首批产学合作立项名单，计蒜客16个项目入选',
					time:'2017-08-16'
				}
			],
				citems1:[
				{
					title:'课程教研专员',
					message1:'-参与计蒜客题库的维护',
					message2:'-参与计蒜客课程的日常问题回答',
					message3:'-参与部分计蒜客课程调研'
				},
				{
					title:'前端实习工程师',
					message1:'-参与维护计蒜客 20 个教学模块',
					message2:'-参与产品需求讨论',
					message3:'-参与前端类课程调研'
				},
				{
					title:'后端实习工程师',
					message1:'-参与计蒜客工程服务后端开发与维护',
					message2:'-参与产品需求讨论',
					message3:'-参与部分计蒜客课程调研'
				},
			],
			
				fitems:[
					{
						title:'计蒜客在线教育',
						content1:'新型在线计算教育的倡导者',
						content2:'用我们独有的伴随式的技术带着同学们亲身参与到计算机学科知识的学习中。',
						content3:'让每一个参与学习的同学能感受到更有味的学习过程！',
						more:'了解更多',
						img:require('../assets/img/foo1.jpg')
					},
					{
						title:'泡面吧教育导航',
						content1:'泡面吧教育导航汇聚了当今在线教育关注者、',
						content2:'IT技能学习者所需要的相关网站、服务的链接，帮助大家更好的关注。',
						content3:'在线教育的发展，给大家提供一个关注在线教育的第一入口。！',
						more:'了解更多',
						img:require('../assets/img/foo2.jpg')
					},
					{
						title:'兔妮妮历险记',
						content1:'以培养儿童逻辑思维和对计算机科学学科兴趣为目的，由计蒜客团队设计的，',
						content2:'适合7-14岁儿童上手的益智教育游戏。',
						content3:'孩子需要通过写逻辑严密的程序帮助“兔妮妮”吃到她的萝卜。',
						more:'了解更多',
						img:require('../assets/img/foo3.jpg')
					}
				]
			}
		},
		methods:{
			autoplay(){
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
				this.timer = setInterval(this.autoplay,2500)
			},
		}
	}
</script>

<style>
	.home{
		margin: 30px auto;
		width:1226px;
	}
	.head_img{
		display: flex;
		list-style: none;
		margin-top: 15px;
	}
	.new_img{
		width: 420px;
		height: 241px;
		padding-right:50px;
	}

	.head_img li:last-child{
		padding-right:0px ;
	}
	.head_img p:first-child{
		font-size: 14px;
		font-weight: 600;
	}
	.head_img p:last-child{
		font-size: 12px;
	}
	.head_img p{
		margin:10px 5px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow:ellipsis;
	}
	.head_img img{
		width: 400px;
		height: 180px;
	}
	.home_title h3{
		
		float: left;
	}
	.home_title{
		font-size: 18px;
		overflow: hidden;
		margin: 10px 0px;
	}
	.home_title span{
		float: right;
		margin: 20px 0px;
	}
	.home_center{
		overflow: hidden;
		margin: 20px 0px;
		background: #F5F5F5;
		height: 240px;
	}
	.center_title h3{
		float: left;
	}
	.center_li_01 a{
		color: black;
		text-decoration: none;
		cursor: pointer;
	}
	.center_title span{
		float: right;
		color: #999999;
	}
	.center_title{
		overflow: hidden;
		margin: 20px 0px 0px 10px;
		padding-top: 15px;
	}
	.center_write_01{
		display: flex;
		list-style: none;
		margin: 20px 0px 0px 10px;
	}
	.center_write_01 li{
		text-align: left;
		 width: 410px;
    	height: 241px;
    	padding-right: 50px;
    	margin-left: 45px;
	}
	.center_write_01 li:first-child{
		margin-left: 0px;
	}
	.center_write_01  h4{
		padding-bottom: 20px;
	}
	.center_write_01 p{
		margin-bottom:10px ;
	}
	.footer_img{
		display: flex;
		
		width: 300%;
	}
	.home_footer{
		width: 1226px;
		position: relative;
		overflow: hidden;
	}
	.footer_img li{
		width: 1226px;
		position: relative;
	}
	.footer_left{
		position: absolute;
		top: 40px;
		left: 0px;
		float: right;
		width: 550px;
		height: 200px;
		text-align: left;
		margin-left: 20px;
	}
	.footer_left h1{
		font-size: 40px;
		font-weight: 200;
		margin-bottom: 20px;
	}
	.footer_left a{
		text-decoration: none;
		color: white;
		background: #27AE60;
		margin-top: 30px;
		padding: 5px;
		display: inline-block;
	}
	.footer_li img{
		height: 300px;
		z-index: -1;
	}
	.bar_01{
		position: absolute;
		top: 270px;
		left: 40%;
		cursor: pointer;
	}
	.bar_01 span{
		display: inline-block;
		margin: 10px;
		width: 8px;
		height: 8px;
		border: 1px solid #7F7F7F;
		background:#7F7F7F ;
		border-radius: 50%;
	}
	.active{
		background: #00C721 !important;
	}
</style>