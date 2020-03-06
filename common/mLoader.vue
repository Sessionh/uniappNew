<template>
	
	<view class="container">
		<view class="loader-content">
				<view class="loading" v-if="!message">
						<view class="loading-item"></view>
						<view class="loading-item"></view>
						<view class="loading-item"></view>
						<view class="loading-item"></view>
						<view class="loading-item"></view>
				</view>
				<view class="msg" v-if="message">{{message}}</view>
		</view>

		
	</view>
	
</template>

<script>
	export default {
		props:{
			message: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				

			};
		},

	}
</script>

<style lang="scss" scoped>
	.msg {
		display: flex;
		align-items: center;
		background-color: rgba(0, 0, 0, .5);
		padding: 20rpx 30rpx;
		border-radius: 12rpx;
		color: #fff;
		font-size: 26rpx;
		max-width: 80%;
		margin: 0 auto;
		
	}
	.loading {
		display: flex;
		align-items: center;
		background-color: rgba(0, 0, 0, .5);
		padding: 50rpx 40rpx;
		border-radius: 12rpx;
	}

	.loading-item {
		width: 5rpx;
		height: 16rpx;
		border-radius: 6rpx;
		background: #fff;
		margin: 0 3rpx;
		animation: loading-item linear 1s infinite;
	}

	.loading-item:nth-child(1) {
		animation-delay: -1.2s;
	}

	.loading-item:nth-child(2) {
		animation-delay: -1.1s;
	}

	.loading-item:nth-child(3) {
		animation-delay: -1.0s;
	}

	.loading-item:nth-child(4) {
		animation-delay: -0.9s;
	}

	.loading-item:nth-child(5) {
		animation-delay: -0.8s;
	}

	@keyframes loading-item {

		0%,
		60%,
		100% {
			transform: scale(1);
		}

		30% {
			transform: scaleY(3);
		}
	}

	@-webkit-keyframes demo2 {

		0%,
		60%,
		100% {
			transform: scale(1);
		}

		30% {
			transform: scaleY(3);
		}
	}

	.container {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		top: 0;
		left: 0;
		// background-color: rgba(0, 0, 0, .2);
		z-index: 90;
	}

	

</style>
