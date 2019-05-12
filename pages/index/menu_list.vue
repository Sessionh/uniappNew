<template>
	<view class="menu">
		<view class="menu_icon" v-for="item in menuList" :key="item.id" @click="onIcon(item)">
			<view class="icon">
				<text class="iconfont" :class="item.icon" :style="{color: item.color}"></text>
			</view>
			<view class="title">
				{{item.name}}
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props: {
			menuList: {
				type: Array
			}
			
		},
		data() {
			return {
				
			};
		},
		methods: {
			onIcon(val) {
				this.$emit('onIcon', val);
			}
		}
	}
</script>

<style lang="less" scoped>
	
.menu {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	margin: 20upx 0;
	.menu_icon {
		width: 25%;
		height: 130upx;
		// background: firebrick;
		margin-top: 10upx;
		// border: 1px solid  red;  
        box-sizing: border-box; 
		text-align: center;
		padding-top: 10upx;
		
		.title {
			overflow: hidden;
			text-overflow:ellipsis;
			white-space:nowrap;
			font-size: 28upx;
			padding-top: 5upx;
			color: #808695;
			
		}
		.icon {
			.iconfont {
				font-size: 55upx;
			}
			
		}
		
		
	}
	
}


</style>
