<template>
	<view class="menu_type">
		<page-head isBack="back" :isUrl="true" @backPage="backHome"  title="菜谱分类" color="#fff" background="#7e7979" ></page-head>
		<view class="header">
			<text class="iconfont icon-icon-" @click="onBack"></text>
			<view class="title">菜谱分类</view>
			<text class="iconfont icon-sousuo1"></text>
		</view>
		<view class="menu_content">
			
			<scroll-view class="menu_left" :style="{height: viewHeight + 'px'}" scroll-y="true">
				<view 
				    class="text_hide_one" 
					:class="thatS === items.id ? 'menu_sub_s': 'menu_sub'" 
					@click="menuClick(items)" 
					v-for="items in menuList" :key="items.id">{{items.name}}</view>
				
			</scroll-view>
			<scroll-view class="content" :style="{height: viewHeight + 'px'}" scroll-y="true">
				<view class="content_foot" v-for="(item, index) in hotFootList" :key="index">
					<view class="title" :style="{background: item.color}">
						<view class="name">{{item.title}}</view>
						<image class="image" :src="item.img"></image>
					</view>
					<view class="flex_menu">
						<view class="flex_context" 
						    v-for="(itemSub, itemIndex) in item.subs" 
							:key="itemIndex"
							@click="contentClick(itemSub)"
						>{{itemSub.name}}</view>
						
					</view>
				</view>
				
			</scroll-view>
		  
		</view>
	</view>
</template>

<script>
import {menuList, hotFootList, greenstuffList} from './menu_type_data.js'
import pageHead from '../../../components/page_head.vue'
export default {
	components: {
		pageHead		
	},
	data() {
		return {
			thatS: 1,
			menuList: menuList,
			hotFootList: hotFootList,
			viewHeight: 300,
			
		}
	},
	onLoad() {
		uni.getSystemInfo({
			success: (res) => {
				// #ifndef MP-WEIXIN
				this.viewHeight = res.windowHeight -39;
					console.log(this.viewHeight);
				// #endif
				// #ifdef MP-WEIXIN
				this.viewHeight = res.windowHeight - 39;
				// #endif
				
				
				
			}
		})
	
	},
	methods: {
		onBack() {
			uni.navigateBack({
				delta: 1,
			})
		},
		menuClick(val) {
			console.log(val);
			switch(val.id) {
				case 1:
				    this.hotFootList = hotFootList;
				    break;
				case 2:
				    this.hotFootList = greenstuffList;
				    break;
			}
			
			this.thatS = val.id;
		},
		contentClick(val) {
			console.log(val);
			
		},
		backHome() { // 返回首页
		    uni.switchTab({
		    	url: '../index'
		    })
			
		}
	}
}
</script>

<style lang="less" scoped>
.text_hide_one {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.but_height {
	height: 65px;
	width: 100%;
	background: rgba(0,0,0,.2);
	
}
.header {
	height: 90upx;
	width: 100%;
	// background: #ccc;
	display: flex;
	align-items: center;
	position: fixed;
	border-bottom: 1upx solid #e8eaec;
	z-index: 2;
	background: white;
	.title {
		flex: 1;
		text-align: center;
	}
	.icon-icon- {
		font-size: 40upx;
		margin-left: 20upx;
		font-weight: 600;
	}
	.icon-sousuo1 {
		font-size: 40upx;
		margin-right: 20upx;
		font-weight: 600;
	}
}
.menu_content {
	padding-top: 90upx;
	display: flex;
	.menu_left {
		width: 200upx;
		height: 700upx;
		
		font-size: 30upx;
		.menu_sub {
			padding: 30upx 5upx;
			background: #283148;
			color: white;
			text-align: center;
			
		}
		.menu_sub_s {
			padding: 30upx 5upx;
			background: white;
			color: green;
			text-align: center;
			
		}
		
	}
	.content {
		padding: 0 20upx;
		.content_foot {
			margin-top: 30upx;
			.title {
				display: flex;
				width: 100%;
				// background: #f5f5f5;
				align-items: center;
				padding: 25upx 0;
				margin: 10upx 0;
				.image {
					width: 46upx;
					height: 46upx;
					margin-right: 40upx;
					border-radius: 23upx;
				}
				.name {
					font-size: 25upx;
					flex: 1;
					padding-left: 50upx;
					
					
				}
				
			}
			
			.flex_menu {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
				width: 100%;
				.flex_context {
					padding: 15upx 5upx;
					border: 1upx solid #ccc;
					min-width: 30%;
					text-align: center;
					margin: 10upx 0;
					border-radius: 8upx;
					font-size: 30upx;
					
				}
				
			}
			
		}
	}
	
}
</style>
