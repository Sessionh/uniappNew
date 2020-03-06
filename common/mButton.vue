<template>
	<div class="my-button" :style="{background: bgColor}" @click="click">


		<!-- <view class="sk-wave" v-if="isLoad">
			<view class="sk-wave-rect" :class="iconColor"></view>
			<view class="sk-wave-rect" :class="iconColor"></view>
			<view class="sk-wave-rect" :class="iconColor"></view>
			<view class="sk-wave-rect" :class="iconColor"></view>
			<view class="sk-wave-rect" :class="iconColor"></view>
		</view> -->
		
		<view class="spinner">
			<view class="spinner-item"></view>
		</view>
		
		
		<div class="text" v-if="!isLoad">
			{{text}}
		</div>


	</div>
</template>
<script>
	export default {
		props: {
			bgColor: {
				type: String,
				default: ''

			},
			iconColor: {
				type: String,
				default: 'bg-color-gray'
			},
			iconHeight: {
				type: Number,
				default: 46
			},
			isLoad: {
				type: Boolean,
				default: false
			},
			text: {
				type: String,
				default: ''
			}
		},
		data() {
			return {

			}
		},
		methods: {
			click() {
				this.$emit('click')
			}
		},
		mounted() {
			console.log(this.iconColor)
			const query = uni.createSelectorQuery().in('.sk-wave');
			console.log(query)




		}
	}
</script>

<style scoped>
	.my-button {
		/* background: #fff; */
		width: 100%;
		height: 88rpx;
		text-align: center;
		color: #fff;
		font-size: 32rpx;
		border-radius: 10rpx;
		display: flex;
		align-items: center;
		justify-content: center;

	}
	
	.spinner {
		position: relative;
		display: inline-block;
		width: 30px;
		max-width: 100%;
		height: 30px;
		max-height: 100%;
		vertical-align: middle;
		animation: van-rotate 0.8s linear infinite;
	
		
	}
	.spinner-item {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.spinner-item:nth-of-type(1) {
		transform: rotate(30deg);
		opacity: 1;
		
	}
	@keyframes van-rotate {
		0% {
			transform: rotate(0deg)
		}
		100% {
			transform: rotate(360deg)
		}
	}
	
	
	
	

	.sk-wave {
		/* width: 60rpx; */
		height: 62rpx;
		display: flex;
		
	}

	.sk-wave-rect {
		background-color: #333;
		height: 100%;
		width: 3px;
		margin: 0 1.5px;
		border-radius: 4px;
		animation: sk-wave 1.2s infinite ease-in-out;
	}

	.sk-wave-rect:nth-child(1) {
		animation-delay: -1.2s;
	}

	.sk-wave-rect:nth-child(2) {
		animation-delay: -1.1s;
	}

	.sk-wave-rect:nth-child(3) {
		animation-delay: -1.0s;
	}

	.sk-wave-rect:nth-child(4) {
		animation-delay: -0.9s;
	}

	.sk-wave-rect:nth-child(5) {
		animation-delay: -0.8s;
	}

	@keyframes sk-wave {

		0%,
		40%,
		100% {
			transform: scaleY(0.5);
		}

		20% {
			transform: scaleY(1);
		}
	}
	
	.bg-color-gray {
		background-color: #999999;
	}
	
	
</style>
