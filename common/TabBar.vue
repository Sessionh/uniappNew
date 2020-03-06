<template>
	<view class="meMenu" id="meMenu">
		<view class="content border-iphone border-top">

			<view class="item-tab" v-for="(item, index) in menuList" :key="index" @click="itemClick(item)">
				<view class="item-content"  :style="{color: menuIndex == item.id? color: ''}">
					<!-- <img :src="menuIndex == index? item.image[0] : item.image[1]"> -->
					<text class="iconfont" :class="item.icon"></text>
					<view class="title">
						{{item.name}}
					</view>
					<view class="count" v-if="item.count">
						<view class="num">{{item.count}}</view>
						
					</view>
				</view>
			</view>

		</view>


	</view>
</template>
<script>
	export default {
		props: {
			// menuIndex: {
			// 	type: Number,
			// 	default: 0,
			// },
			list: {
				type: Array,
			},
			// color: {
			// 	type: String,
			// 	default: '#ff8815'
			// }
		},
		data() {
			return {
				// menuIndex: 1,
				menuList: [{
						id: 1,
						name: '首页',
						icon: 'icon-home',
						url: '/pages/index/index'


					},
					{
						id: 2,
						name: '任务',
						icon: 'icon-red_packet',
						url: '/pages/message/message'
					},
					{
						id: 3,
						name: '图表',
						icon: 'icon-person',
						url: '/pages/reset/reset',
						count: 8,
					},
					{
						id: 4,
						name: '我的',
						icon: 'icon-red_packet',
							url: '/pages/myPage/myPage'
					}
				]

			}
		},
		computed: {
			menuIndex() {
				return  this.$store.state.menuIndex
			},
			color() {
				return this.$store.state.menuColor
			}
				
		},
		methods: {
			itemClick(val) {
				
				
				
				uni.switchTab({
				    url: val.url,
						success: () => {
							this.$store.commit('saveMenuIndex', val.id)
							console.log(this.$store.state.menuIndex)
							// this.menuIndex = this.$store.state.menuIndex
							
						}
				});
			}


		},
		created() {
			
			// this.menuIndex = this.$store.state.menuIndex
			

		},
		
	}
</script>
<style lang="scss" scoped>
	.meMenu {
		position: fixed;
		width: 100%;
		
		bottom: 0;
		left: 0;
		background: #fff;
		z-index: 100;
	
		
	

		.content {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 20rpx;
				height: 90rpx;
		
			color: #c8c8c8;
			

			.item-tab {
				flex: 1;
				position: relative;
				display: flex;
				
				align-items: center;
				justify-content: center;

				img {
					width: 38rpx;
					height: 38rpx;
				}
				.item-content {
					text-align: center;
					
				}

				.iconfont {
					font-size: 36rpx;
				}

				.count {
					position: absolute;
					top: 4rpx;
					left: 84rpx ;
				
					
					
					box-sizing: border-box;
					min-width: 32rpx;
					padding: 0 6rpx;
					color: #fff;
					font-weight: 500;
					font-size: 24rpx;
					font-family: PingFang SC, Helvetica Neue, Arial, sans-serif;
					line-height: 28rpx;
					text-align: center;
					background-color: #ee0a24;
					border: 2rpx solid #fff;
					border-radius: 32rpx;
          transform: translate(50%, -50%);
					transform-origin: 100%;
					.num {
						
					}
				


				}
			}

		}



	}

	@keyframes isShow {
		from {
			transform: translateY(rem(60))
		}

		to {
			transform: 0
		}
	}

	.select {
		color: #ff8815;
	}
</style>
