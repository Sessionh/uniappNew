<template>
	<view class="content">
		<!-- #ifdef APP-PLUS -->
		<view class="header_top"></view>
		<!-- #endif -->
		<view class="header" v-if="isShow">
	       <view class="search">
			   <text class="iconfont icon-sousuo1"></text>
			   <view class="search_title">搜索感兴趣的课程</view>
		   </view>
		   <view class="yet_buy">已购买</view>
	    </view>
		<view class="foot_image">
			<scroll-view class="foot_view" scroll-x="true">
				<view class="fill"></view>
				<view class="image_div" v-for="item in footImgList" :key="item.id">
					<image class="images" :src="item.url"/>
				</view>
			</scroll-view>
		</view>
		<menuIcon/>
		<menuCourse :title="courseName[0]" :courseList="courseList"/>
		<menuCourse :title="courseName[1]" :courseList="courseGetList"/>
		<menuCourse :title="courseName[2]" :courseList="videoBook"/>
		
	</view>
</template>

<script>
	import menuIcon from './menu_icon.vue';
	import menuCourse from './menu_course';
	import {courseGetList, courseList, footImgList, videoBook} from './video.js';
	export default {
		components: {
			menuIcon,
			menuCourse,
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
				courseName: ['推荐课程', '新课上线', '电子书'],
				courseGetList: courseGetList,
				courseList: courseList,
				footImgList: footImgList,
				videoBook: videoBook
				
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
		z-index: 2;
		top: 0;
		display: flex;
		align-items: center;
		background: #fff;
		.search {
			flex: 1;
			display: flex;
			align-items: center;
			height: 60upx;
			background: #e8eaec;
			border-radius: 10upx;
			margin-left: 40upx;
			.iconfont {
				color: #757575;
				font-size: 35upx;
				margin: 0 10upx 0 20upx;
				
			}
			.search_title {
				color: #757575;
				font-size: 30upx;
				// margin-top: 11upx;
				
			}
			
		}
		.yet_buy {
			font-size: 30upx;
			padding: 0 30upx 0 40upx;
		}
	}
	.foot_image {
		margin-top: 120upx;
		.foot_view {
			width: 100%;
			height: 200upx;
			white-space: nowrap;
			.image_div {
				display: inline-block;
				width: 400upx;
				height: 200upx;
				margin-right: 20upx;
				.images {
					width: 100%;
					height: 100%;
					
					border-radius: 20upx;
				}
				
			}
		}
		
	}
	.header_top {
		height: var(--status-bar-height)
	}

</style>
