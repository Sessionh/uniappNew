<template>
	<view class="activity">
		<view class="header_title">{{title}}</view>
		<scroll-view class="view" scroll-x="true" @scroll="scroll" scroll-left="0">
			<view class="fill_context"></view>
			<view class="context" v-for="item in dataList" :key="item.id">
				<view class="div">
					<image class="image" :src="item.url"></image>
				</view>
				<view class="image_title text_hider_two">{{item.title}}</view>
				<view class="discount">
					<view class="price text_hide_one">￥{{item.price}}</view>
					<view class="price_former text_hide_one" v-show="item.priceFormer !== null && item.priceFormer !==undefined">
						<view class="num">￥{{item.priceFormer}}</view>
						<view class="line"></view>
					</view>
				</view>
			</view>
			
			
			
		</scroll-view>
	</view>
</template>

<script>
export default {
	props: {
		dataList: {
			type: Array
		},
		title: {
			type: String,
			default: '',
		}
	},
	data () {
		return {
			activityList: [
				
				{
					id: 1,
					url: 'https://cp1.douguo.com/upload/caiku/3/7/f/260x220_37276d4bd634ad7bac7a2cef0794816f.jpg',
					title: '[进行中]2018年我学会的一道菜',
					price: '￥119.00',
					priceFormer: '￥139.00'
				},
				{
					id: 2,
					url: 'https://cp1.douguo.com/upload/caiku/8/8/3/220x220_889c1ab80b76d851f42018f6da80c253.jpg',
					title: '[进行中]2019,你能把我怎么样？',
					price: '￥324.00',
					
				},
				{
					id: 3,
					url: 'https://i1.douguo.com/upload/note/c/a/0/320_ca47a5a86abe8cdddf025feddaf2f0a0.jpg',
					title: '[进行中]冬天要吃火锅',
					price: '￥474.00',
					priceFormer: '￥548.00'
				},
				{
					id: 4,
					url: 'https://i1.douguo.com/upload/note/c/a/0/320_ca47a5a86abe8cdddf025feddaf2f0a0.jpg',
					title: '[进行中]冬天要吃火锅实打实打算可是看到',
					price: '￥424.00',
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
	.text_hider_two {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		white-space: normal;
	}
	.text_hide_one {
		overflow: hidden;
// 		text-overflow: ellipsis;
// 		white-space: nowrap;
	}
	.activity {
		// padding-left: 40upx; 
		.view {
			height: 360upx;
			width: 100%;
			white-space: nowrap;
			.context {
				display: inline-block;
				width: 200upx;
				height: 400upx;
				margin-right: 20upx;
				.div {
					height: 220upx;
					width: 200upx;
					.image {
						width: 200upx;
						height: 200upx;
						border-radius: 15upx;
					}
					
				}
				
				.image_title {
					height: 70upx;
					width: 200upx;
					font-size: 25upx;
				}
				
				.discount {
					height: 60upx;
					width: 100%;
					display: flex;
					align-items: center;
					.price {
						flex: 1;
						font-size: 25upx;
						font-weight: 600;
						color: red;
						
						
					}
					.price_former {
						font-size: 20upx;
						height: 30upx;
						max-width: 80upx;
						padding-top: 5upx;
						color: #c5c8ce;
						
						.line {
							height: 4upx;
							width: 100%;
							background: #c5c8ce;
							z-index: 2;
							margin-top: -12upx;
						
							
							
						}
						.num {
						   z-index: 1;
						}
					}
						
				}
				
			}
			.fill_context {
				display: inline-block;
				width: 50upx;
				height: 300upx;
				color: #fff;
			}
			
		}
		.header_title {
			font-size: 32upx;
			padding: 0 0 20upx 40upx;
			font-weight: 600;
		}
	}
	
	
</style>