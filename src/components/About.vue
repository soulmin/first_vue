<template>
	<div class="about">
		<h2>关于我们</h2>
		<p class="small">About Us</p>
		<ul class="about_ul">
			<router-link to='' tag='li'v-for='(item,index) in items' :key='index' class="about_li">
				<h3>{{item.title}}</h3>
				<p>{{item.content1}}</p>
				<p>{{item.content2}}</p>
			</router-link>
		</ul>
		<h3 class="price">价值观延伸</h3>
		<ul class="about_price">
			<router-link to=' ' tag='li' v-for='(avnue,indexs) in avnues' :key='indexs' class="avnue">
				<p>{{avnue.avnue}}</p>
				<p>{{avnue.avnue1}}</p>
				<p>{{avnue.avnue2}}</p>
				<p>{{avnue.avnue3}}</p>
			</router-link>
		</ul>
		
		<h3 class="join">期待你的加入</h3>
		<p class="finally">我们的许多岗位正在开放中，待遇、福利丰厚，请不要犹豫，选择加入我们吧！</p>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				items:[
					{
						title:'关于矩道优达',
						content1:'北京矩道优达网络科技有限公司（以下简称“矩道优达”）是一家提供在线教育与教育信息服务的公司。但是与很多教育公司都不一样，矩道优达致力于提供一个由内而外的全新教育方式，提供最优的教育体验。让矩道优达的产品可以成为每个人学习、互助的第一选择。',
						content2:'“教育”这个词有着悠长的历史，自古以来的很多教育理念指导着教育工作者努力为之工作。无论是教学相长的期望还是因材施教的理想，在新兴科技快速发展的当下，这些都将有希望更为切实的被实现，并造福每一个需要学习和提高的人。新中国成立后的公立教育体系很大程度上是在有限资源和维持公平性作为导向的前提下进行的设计，而今快速发展的互联网已经使得教育普世化成为一个明显的趋势，公立教育有限的资源已经不足以满足信息快速传播情况下大众求知欲的膨胀。'
					},
					{
						title:'我们的使命',
						content1:'为了弥合资源与诉求之间的鸿沟，很多教育界的同仁在试图将传统的课堂搬上互联网，而在矩道优达看来，这或许还并不是最应该被倡导的在线教育模式。',
						content2:'矩道优达董事长兼CEO俞昊然表示：“我们并不是一家纯粹简单将线下课堂搬到线上的公司，因为我们知道在这个全新的时代，教育和学习的关系可以用一个全新的方式进行诠释。在过去的十五年，互联网改变了几乎所有的东西——电子商务、社交、医疗等等。而我们也将教育以它和互联网最自然的结合方式进行呈现，试着重塑‘教育’，让它在这个网络的时代可以更美的呈现。教育结合了互联网后，需要更多新的尝试和探索，加入我们，和矩道优达一起为大家提供真正被人所需要的教育体验！”'
					},
					{
						title:'企业文化',
						content1:'矩道优达的使命：先进的方式提供在线教育与教育信息服务，让更多人因教育而受益。',
						content2:'矩道优达的核心价值观：为人师表，规矩有道；学生为先，先优后达。'
					}
				],
				avnues:[
					{
						avnue:'从己所长，专注喜好',
						avnue1:'自驱学习，保持先进',
						avnue2:'归纳分享，复用成果',
						avnue3:'对事讨论，问题驱动'
					},
					{
						avnue:'为人简单，直白拍案',
						avnue1:'鼓励挑战，不筑樊篱',
						avnue2:'量力许诺，极致兑现',
						avnue3:''
					},
					{
						avnue:'勇于信赖，拒绝依赖',
						avnue1:'服务贤能，自由成长',
						avnue2:'理性试错，接受结果',
						avnue3:''
					},
					{
						avnue:'多听多看，静思总结',
						avnue1:'需求定性，数据定量',
						avnue2:'减法先行，厚积薄发',
						avnue3:''
					}
				]
			}
		}
	}
</script>

<style>
	.about{
		margin-top: 25px;
		text-align: left;
		padding: 10px;
	}
	.about h2{
		font-size: 25px;
		font-weight: 400;
		
	}
	.small{
		font-size: 12px;
		margin: 20px 0px;	
	}
	.about_ul li {
		line-height: 30px;
		list-style: none;
	}
	.about_ul h3{
		margin: 20px 0px;
	}
	.about_ul p{
		margin-bottom: 20px;
	}
	.about_price{
		display: flex;
		list-style: none;
	}
	.price{
		margin: 20px 0px;
	}
	.about_price li{
		width: 300px;
	}
	.about_price p{
		margin: 8px 0px;
	}
	.join{
		margin: 20px 0px;
	}
	.finally{
		color: #00C721;
	}
</style>