<template>
	<view class="foot_context">
		<view class="foot_flex">
			<view class="context" v-for="item in choicenessList" :key="item.id">
				<image class="img" :src="item.img"/>
				<view class="title">{{item.title}}</view>
				<view class="user_content">
					<image class="image" :src="item.headUrl"/>
					<view class="name text_hidden">{{item.name}}</view>
					<text class="iconfont icon-icon-test1"></text>
					<view class="star_count text_hidden">{{item.count}}</view>
				</view>
			</view>
			
			
		</view>
	</view>
</template>

<script>
export default {
	props: {
		choicenessList: {
			type: Array
		}
	},
	data() {
		return {
			
			
		}
	},
	methods: {
		
	}
}
</script>

<style  lang="less" scoped>
.text_hidden {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
	
.foot_context {
	padding: 20upx;
	
}

.foot_flex {
	display: flex;
	flex-wrap: wrap;
	.context {
		height: 495upx;
		width: calc(50% - 20upx);
		margin: 10upx;
		border-radius: 10upx;
		box-shadow: #ccc 0 0 10upx;
		.img {
			width: 100%;
			height: 300upx;
			border-radius:10upx 10upx 0 0;
		}
		.title {
			height: 82upx;
			font-size: 30upx;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			padding: 0 5upx;
			font-weight: 600;
			margin-bottom: 15upx;
		}
		
		.user_content {
			height: 70upx;
			display: flex;
			// justify-content: center;
			align-items: center;
			color: #808695;
			.image {
				width: 40upx;
				height: 40upx;
				border-radius: 20upx;
				margin-left: 10upx;
			}
			.name {
				font-size: 25upx;
				padding: 0 5upx 0 5upx;
				width: 170upx;
				
			}
			.iconfont {
				font-size: 35upx;
				padding-top: 10upx;
				font-weight: 600;
			}
			.star_count {
				width: 80upx;
				font-size: 25upx;
				padding-left: 5upx;
			}
			
			
		}
			

	}
	
}

</style>
