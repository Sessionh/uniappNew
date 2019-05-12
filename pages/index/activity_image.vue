<template>
	<view class="activity">
		<scroll-view class="view" scroll-x="true" @scroll="scroll" scroll-left="0">
			<view class="fill_context">33</view>
			<view class="context" v-for="item in activityList" :key="item.id">
				<view class="div">
					<image class="image" :src="item.url"></image>
				</view>
				<view class="image_title">{{item.title}}</view>
				
			</view>
			
			
			
		</scroll-view>
	</view>
</template>

<script>
export default {
	data () {
		return {
			activityList: [
				{
					id: 1,
					url: 'https://cp1.douguo.com/upload/caiku/3/7/f/260x220_37276d4bd634ad7bac7a2cef0794816f.jpg',
					title: '[进行中]2018年我学会的一道菜',
				},
				{
					id: 2,
					url: 'https://cp1.douguo.com/upload/caiku/8/8/3/220x220_889c1ab80b76d851f42018f6da80c253.jpg',
					title: '[进行中]2019,你能把我怎么样？',
				},
				{
					id: 3,
					url: 'https://i1.douguo.com/upload/note/c/a/0/320_ca47a5a86abe8cdddf025feddaf2f0a0.jpg',
					title: '[进行中]冬天要吃火锅',
				}
			]
			
		}
	},
	methods: {
		scroll(e) {
			
		}
	}
}
</script>

<style lang="less" scoped>
	.activity {
		// padding-left: 40upx; 
		.view {
			height: 300upx;
			width: 100%;
			white-space: nowrap;
			.context {
				display: inline-block;
				width: 300upx;
				height: 300upx;
				margin-right: 20upx;
				.div {
					height: 220upx;
					width: 300upx;
					.image {
						width: 300upx;
						height: 200upx;
						border-radius: 15upx;
					}
					
				}
				
				
				.image_title {
					height: 85upx;
					width: 300upx;
					text-align: center;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-size: 20upx;
					
				}
				
			}
			.fill_context {
				display: inline-block;
				width: 50upx;
				height: 300upx;
				color: #fff;
			}
			
		}
	}
	
	
</style>