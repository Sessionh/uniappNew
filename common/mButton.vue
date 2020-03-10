<template>
	<div class="my-button" :style="{background: bgColor}" @click="click">


		<view class="sk-wave" v-if="isLoad && loadType === 'wave'">
			<view class="sk-wave-rect" :class="iconColor"></view>
			<view class="sk-wave-rect" :class="iconColor"></view>
			<view class="sk-wave-rect" :class="iconColor"></view>
			<view class="sk-wave-rect" :class="iconColor"></view>
			<view class="sk-wave-rect" :class="iconColor"></view>
		</view>
		
		<view class="spinner"  v-if="isLoad && loadType === 'spinner'">
			<view class="spinner-item"></view>
			<view class="spinner-item"></view>
			<view class="spinner-item"></view>
			<view class="spinner-item"></view>
			<view class="spinner-item"></view>
			<view class="spinner-item"></view>
			<view class="spinner-item"></view>
			<view class="spinner-item"></view>
			<view class="spinner-item"></view>
			<view class="spinner-item"></view>
			<view class="spinner-item"></view>
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
			},
			loadType: {
				type: String,
				default: 'spinner'
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
	
	/* spinner */
	.spinner {
		position: relative;
		display: inline-block;
		width: 50rpx;
		max-width: 100%;
		height: 50rpx;
		max-height: 100%;
		vertical-align: middle;
		animation: van-rotate 0.8s linear infinite;
		animation-timing-function: steps(12);
	}
	
	.spinner-item {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
  }
	.spinner-item::before {
		display: block;
		width: 4rpx;
		height: 25%;
		margin: 0 auto;
		background-color: #999;
		border-radius: 40%;
		content: ' ';
		
	}
	.spinner-item:nth-of-type(1) {
		transform: rotate(30deg);
		opacity: 1;
		
	}
	.spinner-item:nth-of-type(2) {
		transform: rotate(60deg);
		opacity: 0.9375;
	}
	.spinner-item:nth-of-type(3) {
		transform: rotate(90deg);
		opacity: 0.875;
	}
	.spinner-item:nth-of-type(4) {
		transform: rotate(120deg);
		opacity: 0.8125;
	}
	.spinner-item:nth-of-type(5) {
		transform: rotate(150deg);
		opacity: 0.75;
	}
	.spinner-item:nth-of-type(6) {
		transform: rotate(180deg);
		opacity: 0.6875;
	}
	
	.spinner-item:nth-of-type(7) {
		transform: rotate(210deg);
		opacity: 0.625;
	}
	.spinner-item:nth-of-type(8) {
		transform: rotate(240deg);
		opacity: 0.5625;
	}
	.spinner-item:nth-of-type(9) {
		transform: rotate(270deg);
		opacity: 0.5;
		
	}
	.spinner-item:nth-of-type(10) {
		transform: rotate(300deg);
		opacity: 0.4375;		
	}
	
	.spinner-item:nth-of-type(11) {
		transform: rotate(330deg);
		opacity: 0.375;
	}
	.spinner-item:nth-of-type(12) {
		transform: rotate(360deg);
		opacity: 0.3125;
	}
	
	
	@keyframes van-rotate {
		0% {
			transform: rotate(0deg)
		}
		100% {
			transform: rotate(360deg)
		}
	}
	
	
	
	
/*
 sk-wave
*/
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
