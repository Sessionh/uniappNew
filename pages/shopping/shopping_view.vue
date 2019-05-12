<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
		<view class="header_top"></view>
		<!-- #endif -->
		<view class="header" v-if="isShow">
	      <text class="iconfont icon-sousuo1"></text>
		  <view class="title">商城</view>
		   <text class="iconfont icon-gouwuche"></text>
	    </view>
		<view style="margin-top: 90upx;">
			<image style="width: 100%; height: 300upx" src="https://i1.douguo.com//upload/banner/1545685906.jpg"></image>
		</view>
		<view >
			<menuList :menuList="menuListData"/>
		</view>
		<shoppingTime :dataList="shoppingRobList" :title="robList[0]"/>
		<shoppingTime :dataList="remberShopping" :title="robList[1]"/>
		
		
		
		
	</view>
</template>

<script>
	import menuList from '../index/menu_list.vue';
	import shoppingTime from './shopping_time.vue';
	import {menuListData, shoppingRobList, remberShopping} from './shopping.js';
	export default {
		components: {
			menuList,
			shoppingTime,
			
		},
		onPullDownRefresh() { // 下拉刷新监听
		   // #ifdef MP-WEIXIN
		    this.isShow = false;
			// #endif
			setTimeout( () => {
				uni.stopPullDownRefresh();
				this.isShow = true;
			}, 1000);
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					console.log(res);
					// #ifndef MP-WEIXIN
					this.viewHeight = res.windowHeight -35;
						console.log(this.viewHeight);
					// #endif
					// #ifdef MP-WEIXIN
					this.viewHeight = res.windowHeight;
					// #endif
					
					
					
				}
			})
		
		},
		data() {
			return {
				isShow: true,
				title: '设置',
				viewHeight: 300,
				menuListData: menuListData,
				shoppingRobList: shoppingRobList,
				remberShopping: remberShopping,
				robList: ['限时抢购', '会员专区'],
				
				
			};
		}
	}
</script>

<style lang="less" scoped>
	.content {
// 		text-align: center;
// 		height: 400upx;
	}
	.fill {
		display: inline-block;
		width: 40upx;
		height: 200upx;
		// background: red;
	}
	.header {
		height: 90upx;
		width: 100%;
		border-bottom: 1upx solid #e8eaec;
		position: fixed;
		z-index: 10;
		top: 0;
		display: flex;
		align-items: center;
		background: #fff;
		.title {
			flex: 1;
			text-align: center;
			
		}
		.iconfont {
			margin: 0 20upx;
			font-size: 40upx;
		}
		.icon-gouwuche {
			font-size: 50upx;
		}
		
	}
	
	.header_top {
		height: var(--status-bar-height)
	}

</style>
