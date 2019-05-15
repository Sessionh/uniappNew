<template>
	<view class="content" >
		
		<page-head  :title="title" color="black" background="#fff" ></page-head>
		
		<view class="header"  v-if="isShow">
			<view class="search">
				<view class="add">
					<text class="iconfont icon-tianjiajiahaowubiankuang" ></text>
				</view>
				<view class="input">
					<text class="iconfont icon-sousuo1"></text>
					<view class="search_title">菜单、用户等</view>
				</view>
				<view class="menu">
					<text class="iconfont icon-fenlei"></text>
				</view>
				<view class="alarm">
					<text class="iconfont icon-weiwangguanicon-defuben-"></text>
				</view>
			</view>
			<view class="half_bar"/>
		</view>
		
		
		
		<view class="part">
			<swiper class="banner_box" 
				indicator-dots 
				autoplay
				indicator-active-color="#169bd5"  
				circular
				:interval="5000" 
				:duration="300" 
				indicator-color="#ffffff"
				>
				<swiper-item v-for="item in bannerList" :key="item.id">
					<image class="banner_image" :src="item.img"
						mode="aspectFill" lazy-load></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="menus">
			<menuList :menuList="menuListData" @onIcon="onMenuClick"/>
		</view>
		<activityImage/>
		<footLook/>
		
		
		
		
	</view>
</template>

<script>
	import menuList from './menu_list.vue';
	import activityImage from './activity_image';
	import footLook from './foot_look';
	import {menuListData} from './main.js';
	import pageHead from '../../components/page_head.vue';
	export default {
		components: {
			menuList,
			activityImage,
			footLook,
			pageHead
		},
		data() {
			return {
				title: '首页',
				viewHeight: 300,
				isShow: true,
				menuListData: menuListData,
				bannerList: [
					{
						id: 1,
						img: 'http://source.qunarzz.com/site/images/wns/20181227_qunar_homepage_dujia_6.jpg'
					},
					{
						id: 2,
						img: 'http://source.qunarzz.com/site/images/wns/20181229_dujia_homepage_2.jpg'
					},
					{
						id: 3,
						img: 'https://imgs.qunarzz.com/p/tts2/1804/e5/3f79a9a0ce3ffd02.jpg_r_240x160x90_fa3e9858.jpg'
					}
				]
			}
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
		onReady() {
			
		},
// 		onPageScroll(ev) {
// 			console.log(ev);
// 		},
		onPullDownRefresh() { // 下拉刷新监听
		 //    this.isShow = false;			
			// setTimeout( () => {
			// 	uni.stopPullDownRefresh();
			// 	this.isShow = true;
			// }, 1000);
		},
		computed: {
            halfWidth() {
				
                return uni.upx2px(750 / 2) + 'px';
            }			
        },
		methods: {
			onBut() {
				console.log(22)
				uni.getSystemInfo({
					success: (res) => {
						console.log(res);
						
						
					}
				})
				
				uni.navigateTo({
					url: '/pages/home/mast'
				})
			},
			onMenuClick(ev) {
				console.log(ev);
				uni.navigateTo({
					url: '/pages/index/subpage/menu_type'
				})
				
			}
			

		}
	}
</script>

<style lang="less" scoped>
.search {
	display: flex;
	height: 90upx;
	width: 100%;
	background: #FFFFFF;
	
	justify-content: center;
	align-items: center;
	.add {
		padding: 0 10upx;
		.add_page{
			width: 40upx;
			height: 40upx;
		}
		.iconfont {
			font-size: 40upx;
		}
	
	}
	.input {
		border-radius: 10upx;
		flex:1;
		background: #e8eaec;
		// height: 55upx;
		display: flex;
		.iconfont {
			font-size: 35upx;
			margin: 15upx 10upx 10upx 10upx;
			
		}
		.search_title {
			color: #757575;
			font-size: 30upx;
			margin-top: 11upx;
			
		}
		
	}
	.menu {
		.iconfont {
			font-size: 40upx;
			margin: 0 20upx 0 30upx;
		}
	}
	.alarm {
		.iconfont {
			font-size: 40upx;
			margin: 0 20upx;
		}
	}
	
}

.menus {
	padding: 0 20upx;
}

.half_bar {
	height: 1upx;
	width: 100%;
	background: #e8eaec;
	
}

.header_top {
	height: var(--status-bar-height);
	
}
.header {
	position: fixed;
	top: var(--status-bar-height);
	height: 90upx;
	width: 100%;
	z-index: 2;
	
}
.part{
    width: 100%;
    height: 300upx;
	// margin-top: 90upx;
	.banner_box{
	    width: 100%;
	    height: 100%;
		.banner_image{
		    width: 100%;
		    height:  100%;
		}
	}
}



</style>
