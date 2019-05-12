<template>
	<view class="course">
		<view class="header">
			<view class="title">{{title}}</view>
			<text class="iconfont icon-youbian" ></text>
		</view>
		<scroll-view class="course_view" scroll-x="true">
			<view class="fill_context">
			</view>
			<view class="intro_course" v-for="item in courseList" :key="item.id">
				<view class="image_bor">
					<image class="image" :src="item.url"/>
					<view class="teacher">{{item.job}}</view>
					<view class="title text_hidden">{{item.title}}</view>
					<view class="intro_title text_hidden">
						{{item.introTitle}}
					</view>
					<view class="student_add text_hidden">
						{{item.studentAdd}}人加入学习
					</view>
				</view>
				
			</view>
			
		</scroll-view>
	</view>
</template>

<script>
export default {
	props:{
		courseList: {
			type: Array,
		},
		title: {
			type: ''
		}
	},
	data() {
		return {

			
		}
	}
}
</script>

<style lang="less" scoped>
	.text_hidden {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.course {
		height: 580upx;
		width: 100%;
	}
	.header {
		display: flex;
		height: 80upx;
		width: 100%;
		// background: #ccc;
		align-items: center;
		.title {
			font-size: 35upx;
			font-weight: 600;
			flex: 1;
			padding-left: 40upx;
		}
		.iconfont {
			font-size: 50upx;
			font-weight: 600;
			
		}
	}
	.course_view {
		height: 500upx;
		width: 100%;
		white-space: nowrap;
		.fill_context {
			display: inline-block;
			width: 40upx;
			height: 400upx;
			// background: red;
		}
		.intro_course {
			width: 300upx;
			height: 100%;
			display: inline-block;
			// background: #ccc;
			margin-right: 20upx;
			
			.image_bor {
				width: 300upx;
				height: 500upx;
				position: relative;
				.image {
					width: 100%;
					height: 400upx;
					border-radius: 10upx;
				}
				.teacher {
					max-width: 120upx;
					background: #fff;
					position: absolute;
					top: 300upx;
					left: calc(25% + 60upx);
					font-size: 25upx;
					text-align: center;
					padding: 2upx 5upx;
				}
				
				.title {
					position: absolute;
					top: 350upx;
					
					height: 50upx;
					text-align: center;
					width: 300upx;
					font-size: 30upx;
					color: #fff;
					padding: 0 2upx;
					
				}
				.student_add {
					font-size: 20upx;
					color: #808695;
				}
				.intro_title {
					font-size: 26upx;
					
				}
					
			}
			
		}
	}
</style>
