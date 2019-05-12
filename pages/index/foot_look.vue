<template>
	
	<view class="foot">
		<view class="foot_context" v-for="item in footList" :key="item.id">
			<view class="title text_overflow">
				{{item.title}}
			</view>
			<view class="user_star">
				<view class="name text_overflow">
					{{item.name}}
				</view>
				<view class="member" v-if="item.isMember">
					<view>
						<text class="iconfont icon-huiyuan"></text>
					</view>
					<text class="mTitle">会员</text>
					<view >
					</view>
				
					
				</view>
				<view class="flexOne">
					
				</view>
				<view class="star">
					<view class="watch_me">
						<text class="iconfont icon-yanjing"></text>
						<text class="num">{{item.watch}}</text>
					</view>
					<view class="star_num">
						<text class="iconfont icon-xingxing"></text>
						<text class="num">{{item.star}}</text>
					</view>
				</view>
			</view>
			<view class="image_cont">
				<image class="image" :src="item.url"/>
			</view>
		</view>
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			footList: [
				{
					id: 1,
					title: '鸡蛋炖土豆--简单快手宴客菜',
					name: '木木的眼泪',
					isMember: true,
					star: 4413,
					watch: 130050,
					url: 'https://cp1.douguo.com/upload/caiku/2/c/0/260x220_2c668ad4c1b84d6e0711a425477f4ef0.JPG'
				},
				{
					id: 2,
					title: '杂粮八宝粥',
					name: '霖的吃货铺',
					isMember: false,
					star: 448,
					watch: 130865,
					url: 'https://cp1.douguo.com/upload/caiku/0/c/0/260x220_0cbaaa6036ac960f2146efd3456bd7a0.jpg'
				},
				{
					id: 3,
					title: '柠檬海绵蛋糕',
					name: '僖儿2005',
					isMember: true,
					star: 2375,
					watch: 722180,
					url: 'https://cp1.douguo.com/upload/caiku/0/c/0/260x220_0cbaaa6036ac960f2146efd3456bd7a0.jpg'
				}

			]
			
		}
	}
}
</script>

<style lang="less" scoped>
.text_overflow {
	overflow: hidden;
	text-overflow:ellipsis;
	white-space:nowrap;
}
.foot {
	// margin-top: 20upx;
	padding: 0 40upx;
	
}

.foot_context {
	// background: #009f9d;
	height: 500upx;
	width: 100%;
	margin-top: 40upx;
	.user_star {
		display: flex;
		align-items: center;
		margin: 10upx 0;
		.name {
			max-width: 160upx;
			font-size: 25upx;
			color: #808695;
		}
		.member {
			display: flex;
			background: #105e62;
			font-size: 20upx;
			padding: 3upx 5upx;
			color: #ff8b00;
			border-radius: 5upx;
			margin:0 0 -1upx 5upx;
			// height: 30upx;
			
			.iconfont {
				font-size: 22upx;
			}
			.mTitle {
				// padding-top: 8upx;
				
			}
			
		}
		.star {
			display: flex;
			height: 60upx;
			color: #808695;
			.watch_me {
				padding-right: 10upx;
				.num {
					font-size: 20upx;
				}
				.iconfont {
					font-size: 25upx;
					
				}
			}
			.star_num {
				
				padding-right: 10upx;
				.num {
					font-size: 20upx;
				}
				.iconfont {
					font-size: 25upx;
					
				}
				
			}
			
			
		}
		.flexOne {
			flex: 1;
			height: 20upx;
			// background: #ccc;
			
		}
	}
	.title {
		font-size: 35upx;
	}
		
}
.image_cont {
	height: 372upx;
	width: 100%;
	.image {
		width: 100%;
		height: 100%;
	}
}
</style>
