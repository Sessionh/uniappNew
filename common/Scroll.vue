<template>
	<view class="me-scroll">
		<scroll-view 
		  class="scroll"
      :scroll-x="scrollX"
			:scroll-y="scrollY"  
			:scroll-top="scrollTop" 
			:show-scrollbar="showScrollbar"
			@scrolltoupper="upper" 
			@scrolltolower="lower"
		  @scroll="scroll"
			>
		  <slot></slot>
		
			<mButton :isLoad="true"></mButton>
			<!-- <Loading :message="message"></Loading> -->
      <view class="bottom-msg border-iphone">
				
			</view>
		</scroll-view>
		
		

	</view>
</template>

<script>
	import Loading from '@/common/mLoader.vue'
	export default {
		components: {
			Loading
		},
		props: {
		  // 列表页数据
			data: {
				default: null
			},
			scrollX: {
				type: Boolean,
				default: false
			},
      scrollY: {
				type: Boolean,
				default: true
			},
			// 显示滚动条
			showScrollbar: {
				type: Boolean,
				default: true
			},
		
		},
		data() {
			return {
				mescroll: '',
				message: '',
				isShowTop: false,
				height: 0,
			

			}
		},
		mounted() {
			uni.getSystemInfo({
				success: (e) => {
					console.log(e)
					this.height = e.screenHeight ? e.screenHeight : 0
					
				}
			})
			
		},
		methods: {
			// 滚动到顶部/左边
			upper(e) {
				console.log('顶部')
				
			},
			// 滚动到底部/右边
			lower() {
				console.log('底部')
				
			},
			scroll(e) {
		
				let top = e.detail.scrollTop;
						console.log(top, this.height)
			
				
				
				
			},
		
				
				
			
			

		}
	}
</script>

<style lang="scss" scoped>
  scroll-view::-webkit-scrollbar {
		width: 0;
		height: 0;
		background-color: transparent;
	
	}
	
	.scroll {
		height: 100%
	}
	.loading-img {
		width: 80rpx;
		height: 80rpx;
	}
	
	.me-scroll {
		width: 100%;
		height: 100%;
		.li {
			width: 100vw;
			height: 200rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			border-bottom: 1px solid red;
		}
		.but {
			width: 160rpx;
			height: 80rpx;
			background-color: #007AFF;
			color: #fff;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.icon-red_packet {
			color: #007AFF
		}
	}
	
	.to_top {
	  height: 60rpx;
	  width: 60rpx;
	
	  position: absolute;
	  bottom: 120rpx;
	  right: 25rpx;
	  z-index: 100;
		@include iphone-x(#f5f5f5)
	  image {
	    height: 60rpx;
	    width: 60rpx;
	  }
	}

</style>
