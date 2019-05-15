<template name="page-head">
	<view class="uni-page-head" :style="{color: color, background: background, paddingTop: top}">
		<view class="back">
			<text class="iconfont icon-fanhui" v-if="isBack"></text>
		</view>
		<view class="uni-page-head-title">{{title}}</view>
		<view class="right_content"></view>
		
	</view>
</template>
<script>
	export default {
		name: "page-head",
		props: {
			title: {
				type: String,
				default: ""
			},
			color: {
				type: String,
				default: '#BEBEBE'
			},
			background: {
				type: String,
				default: 'black'
			},
			isBack: {
				type: Boolean,
				default: false,
			}
		},
		data() {
			return {
				
			}
		},
		computed: {
			top() {
				const res = uni.getSystemInfoSync();
                return res.statusBarHeight + 'px';
			}
		}
	}
</script>
<style lang="less" scoped>
	/* page */
	.uni-page-head{	
		text-align: center;
		position: fixed;
		top: 0;
		width: 100%;
		background: black;
		z-index: 99;
		display: flex;
		align-items: center;
		height: 44px;
	}
	.uni-page-head-title {
		// display: inline-block;
		// padding: 0 20px;
		// height: 44px;
		// line-height: 44px;
		// box-sizing: border-box;
		font-size: 30upx;
		font-weight: 600;
		text-align: center;
		flex: 1;
		
	}
	.back {
		width: 60upx;
		.iconfont {
			font-size: 40upx;
		}
	}
	.right_content {
		width: 60upx;
	}
	
</style>