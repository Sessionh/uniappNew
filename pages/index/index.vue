<template>
	<view class="template">
		<view class="scroll" >
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
			 @scroll="scroll">
			
				<view class="li">
					测试
					<view class="iconfont icon-red_packet"></view>
			
				</view>
				<view class="li">
					测试
				</view>
				<view class="li">
					测试
				</view>
				<view class="li">
					测试
				</view>
				<view class="li">
					测试
				</view>
				<view class="li">
					测试
				</view>
				<view class="li">
					测试
				</view>
				
				<view class="border-iphone">底部</view>
			</scroll-view>
    </view>
		<!-- <view class="demo">客诉</view> -->
		
		
	
		
		
		

		<tabBar ></tabBar>

	</view>
</template>

<script>
	import scroll from "@/common/Scroll.vue";
	import tabBar from '@/common/TabBar.vue';
	export default {
		components: {
			scroll,
			tabBar

		},
		data() {
			return {
				title: 'Hello1',
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				scrollHeight: 0
			}
		},
    mounted() {
			  let _this = this
				uni.getSystemInfo({
						success(res) {
								_this.scrollHeight = res.windowHeight
								console.log(_this.scrollHeight)
                // 计算组件的高度
								// let view = uni.createSelectorQuery().select(".template >>> .meMenu")
								// view.boundingClientRect(data => {
								// 	console.log(data)
								// 		_this.navHeight = data.height ? data.height : 0
								// 		console.log(_this.navHeight)
								// 		_this.scrollHeight = _this.phoneHeight;
								// 		console.log(_this.scrollHeight)
								// }).exec()
						}
				})

		},
		methods: {
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon: "none",
					title: "纵向滚动 scrollTop 值已被修改为 0"
				})
			}

		}
	}
</script>

<style lang="scss" scoped>
	.template {
		height: 100%;
		width: 100%;
	}
	.content {
		
	}
	.demo {
		height: 200rpx;
	}

	.scroll {
		height: calc(100vh - 90rpx);


	}
	.scroll-Y {
		height: 100%;
	}





	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.li {
		width: 100%;
		height: 200rpx;
		border-bottom: 1rpx solid red;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
