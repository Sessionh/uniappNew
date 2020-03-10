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
		
			
			<!-- <Loading :message="message"></Loading> -->
      <view class="bottom-msg" v-if="isBottom">
				 <div
					v-if="!isLoad && data  && data.length >= noMoreNum"
					class="text"
				>{{isMore?  tip : noMoreText}}</div>

				<div
					v-if="!isLoad && (!data  || data.length === 0) && isNoData"
					class="text"
				>{{noDataText}}</div>
				<mButton v-if="isLoad" :isLoad="isLoad"></mButton>
				
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
			 tip: {
				type: String,
				default: "上拉加载更多"
			},
			/**
			 *  没有更多数据显示
			 */
			noMoreText: {
				type: String,
				default: '没有更多数据'
			},
			/**
			*  显示 没有更多数据 最小数组长度
			*/
			noMoreNum: {
				type: String,
				default: '3'
			},
			/**
			 *  显示 加载动画
			 */
			isLoad: {
				type: Boolean,
				default: false,
			},
			/**
			*  控制上拉加载更多 和 无更多数据 状态
			*/
			isMore: {
				type: Boolean,
				default: true,
			},
			/**
			*  控制显示返回顶部 图标
			*/
			isTop: {
				type: Boolean,
				default: true
			},
			/**
			*  控制底部显示
			*/
			isBottom: {
				type: Boolean,
				default: true,
	
			},
			/**
		 *  是否显示 暂无数据
		 */
			isNoData: {
				type: Boolean,
				default: false,
	
			},
			/**
			*   暂无数据
			*/
			noDataText: {
				type: String,
				default: '暂无数据',
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
	.bottom-msg {
	
	}
	
	.bottom-msg {
			min-height: 100rpx;
			position: relative;
			color: #999999;
			font-size: 28rpx;
			@include iphone-x(#f5f5f5);

			.text {
				line-height: 100px;
				display: flex;
				align-items: center;
				justify-content: center;
			}
	 }

</style>
