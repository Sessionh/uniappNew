<template>
	<view class="me-scroll">
		<mescroll-uni class="mescroll" ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption">
			
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
			<view class="but" @click="but">点击</view>
    </mescroll-uni>

	</view>
</template>

<script>
	
	export default {
		
		data() {
			return {
				mescroll: ''

			}
		},
		methods: {
			but() {
				this.mescroll.triggerUpScroll()
				
			},
			/*mescroll组件初始化的回调,可获取到mescroll对象 (此处可删,mixins已默认)*/
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},
			/*下拉刷新的回调, 有三种处理方式:*/
			downCallback() {
				
				setTimeout(() => {
						this.mescroll.resetUpScroll(); 
					
				}, 2000)
			
				
				
			},
			upCallback(page) {
				let pageNum = page.num; // 页码, 默认从1开始
				let pageSize = page.size; // 页长, 默认每页10条
				uni.request({
					url: 'xxxx?pageNum=' + pageNum + '&pageSize=' + pageSize,
					success: (data) => {
						
						

						//设置列表数据
						if (mescroll.num == 1) this.dataList = []; //如果是第一页需手动置空列表
						this.dataList = this.dataList.concat(curPageData); //追加新数据

					
						this.mescroll.endByPage(curPageLen, totalPage);

						this.$nextTick(() => {
							this.mescroll.endSuccess(curPageLen)
						})

					
					},
					fail: () => {
						//  请求失败,隐藏加载状态
						this.mescroll.endErr()
					}
				})
				
			}

		}
	}
</script>

<style lang="scss" scoped>
  scroll-view::-webkit-scrollbar {
		width: 0;
		height: 0;
		background-color: transparent;
	}
	
	.mescroll {
		height: 300rpx;
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

</style>
