<template name="page-head">
	<view class="uni-page-head" :style="{color: color, background: background, paddingTop: top}">
		<view class="back" >
			<view class="back_content" @click="backPage">
				<text class="iconfont icon-fanhui" v-if="isBack" ></text>
			</view>
			
		</view>
		<view class="uni-page-head-title">{{title}}</view>
		<view class="right_content"></view>
		
	</view>
</template>
<script>
	export default {
		name: "page-head",
		props: {
			title: { // 标题
				type: String,
				default: ""
			},
			color: { // 字体颜色
				type: String,
				default: '#BEBEBE'
			},
			background: { // 背景色
				type: String,
				default: 'black'
			},
			isBack: { // 是否显示返回按钮
				type: Boolean,
				default: false,
			},
			isUrl: { // 是否自定义跳转
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			backPage() {
				if (this.isUrl) {
					this.$emit('backPage')

				} else {
					uni.navigateBack({
						delta: 1
					})
					
				}
							
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
		.back_content {
			width: 60upx;
		}
		.iconfont {
			font-size: 40upx;
		}
	}
	.right_content {
		width: 60upx;
	}
	
</style>