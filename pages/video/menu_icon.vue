<template>
	<view class="menu">
		<view class="menu_icon" v-for="item in menuList" :key="item.id">
			<view class="icon">
				<text class="iconfont" :style="{color: item.color}" :class="item.icon"></text>
			</view>
			<view class="title">
				{{item.name}}
			</view>
		</view>
		
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				menuList: [
					{
						id: 1,
						name: '面包',
						icon: 'icon-mianbao',
						color: '#f16821',
					},
					{
						id: 2,
						name: '甜点',
						icon: 'icon-cake',
						color: '#f185b3',
					},
					{
						id: 3,
						name: '中式面条',
						icon: 'icon-mian',
						color: '#6b7b8e',
					},
					{
						id: 4,
						name: '特色小吃',
						icon: 'icon-xinniantubiao-shangchuantubiaoku-',
						color: '#ffcd60',
					},
					{
						id: 5,
						name: '家常菜',
						icon: 'icon-chuju01',
						color: '#f16821',
					},
					{
						id: 6,
						name: '蛋糕',
						icon: 'icon-dangao',
						color: '#f59aa3',
					},
					{
						id: 7,
						name: '饮品',
						icon: 'icon-yinliao',
						color: '#c9f658',
					},
					{
						id: 8,
						name: '宝宝辅食',
						icon: 'icon-fushi-muying',
						color: '#fe9191',
					},
					{
						id: 9,
						name: '一元秒杀',
						icon: 'icon-yiyuanmiaosha',
						color: '#e29c68',
					},
					{
						id: 10,
						name: '免费课程',
						icon: 'icon-kechengchaxun',
						color: '#665c84',
					}
				]
				
			};
		}
	}
</script>

<style lang="less" scoped>
	
.menu {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	margin: 20upx 0;
	.menu_icon {
		width: 20%;
		height: 130upx;
		// background: firebrick;
		margin-top: 10upx;
		// border: 1px solid  red;  
        box-sizing: border-box; 
		text-align: center;
		padding-top: 10upx;
		
		.title {
			overflow: hidden;
			text-overflow:ellipsis;
			white-space:nowrap;
			font-size: 28upx;
			padding-top: 5upx;
			color: #808695;
			
		}
		.icon {
			.iconfont {
				font-size: 55upx;
			}
			
		}
		
		
	}
	
}


</style>
