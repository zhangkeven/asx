<template>
	<div class="right-nav-main">
		<div @click="choosenav" v-bind:class="[{activeBg:activeId==0},' ']" data-id="0">
			<img src="../assets/img/kefu2.png" alt="">
			<p>客服</p>
		</div>
		<div @click="choosenav" v-bind:class="[{activeBg:activeId==1},' ']" data-id="1">
			<img src="../assets/img/shangcheng.png" alt="">
			<p>购物</p>
		</div>
		<p>

		</p>
		<div @click="choosenav" v-bind:class="[{activeBg:activeId==2},' ']" data-id="2">
			<img src="../assets/img/returntop.png" alt="">
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeId:0
			};
		},
		methods: {
			choosenav(e){
				if (e.currentTarget.dataset.id == this.activeId) {

				} else {
					this.activeId = e.currentTarget.dataset.id
				}
				if(e.currentTarget.dataset.id==2){
          document.body.scrollTop = 0;
          // this.activeId=1;
        }
			},

		},
	}
</script>

<style>

div.right-nav-main{
	position: fixed;
	right: 0;
	top:21.875rem;
	width: 4.4%;
	height: auto;
	display: flex;
	flex-direction: column;
	z-index: 10;
	align-items: center;
}
div.right-nav-main>div.activeBg{
	background-color: #852833;
}
div.right-nav-main>div{
	background-color: #bebebe;
}
div.right-nav-main>div{
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}
div.right-nav-main>div:not(:nth-child(3)){
	padding:0.625rem 0;
}
div.right-nav-main>div:not(:nth-child(3))>img{
		width: 50%;
}
div.right-nav-main>p{
	width: 0.125rem;
	height: 5.5rem;
	background-color: #bebebe;
}
div.right-nav-main>div:not(:nth-child(3))>p{
	color: #FFFFFF;
	font-size: 1.125rem;
	margin: 0.3125rem 0;
}
</style>
