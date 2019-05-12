<template>
	<view>
		<!-- #ifndef MP-WEIXIN -->
		<view class="header_top"></view>
		<!-- #endif -->
		<view class="header">
			<view class="note_header">
				<view class="tabs">
					<view class="title_name" :style="{fontWeight: tabWeight}" @click="newClick(1)">
						精选
					</view>
					<view class="title_name" :style="{fontWeight: tabWeight1}" @click="newClick(2)">
						最新
					</view>
				</view>
				<view class="alarm_count">
					<text class="iconfont icon-weiwangguanicon-defuben-"></text>
				</view>
				<view :class="tabAnClass"></view>
			</view>
		</view>
		
		<view v-show="isChoiceness">
			<view style="padding: 20upx 10upx;margin-top: 100upx;">
				<view class="breakfast">
					<view class="foot_show" :style="{background: item.color}" v-for="item in footShowList" :key="item.id">
						<view class="foot_icon">
							<text class="iconfont" :class="item.icon"></text>
						</view>
						<view class="show_name">{{item.name}}</view>
					</view>
					
				</view>
			
			</view>
			
			<view class="topic">
				<view class="topic_content">
					<view class="topic_matter " v-for="item in topicList" :key="item.id">
						<text class="iconfont" :class="item.icon"></text>
						<view class="name text_hidden">{{item.name}}</view>
					</view>
					
				</view>
			</view>
			<footList :choicenessList="choicenessList"/>
		</view>
		
		<view v-show="!isChoiceness" class="new_foot">
			<view>
				<footList :choicenessList="newFootList"/>
			</view>
		</view>
		
		
	</view>
	
</template>

<script>
	import footList from './foot_list.vue';
	import {choicenessList, topicList, footShowList, newFootList} from './node.js';
	export default {
		components: {
			footList,
		},
		data() {
			return {
				isChoiceness: true, // true:精选  false:最新
				tabAnClass: 'tab_but',
				choicenessList: choicenessList,
				topicList: topicList,
				footShowList: footShowList,
				newFootList: newFootList,
				
			};
		},
		methods:{
			newClick(val) {
				if(val === 1){
					this.isChoiceness = true;
					this.tabAnClass = 'tab_but'
				} else {
					this.isChoiceness = false;
					this.tabAnClass = 'tab_but1'
				}
				
			}
		},
		computed:{
			tabWeight() {
				return this.tabAnClass === 'tab_but' ? 600: 400
			},
			tabWeight1() {
				return this.tabAnClass === 'tab_but1' ? 600: 400
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
	.hr_line {
		height: 1upx;
		width: 100%;
		background: red;
	}
	
	.header {
		height: 90upx;
		width: 100%;
		position: fixed;
		z-index: 2;
		margin-bottom: 20upx;
		top: 0;
		background: #fff;
		.note_header {
			height: 90upx;
			width: 100%;
			position: relative;
			border-bottom: 1upx solid #e8eaec;
			.tabs {
				width: 260upx;
				height: 90upx;
				// background: #ccc;
				position: absolute;
				left: calc(50% - 130upx);
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 36upx;
				text-align: center;
				.title_name {
					flex: 1;
					// background: #ccc;
					padding: 20upx 0;
				}
			}
			.alarm_count {
				position: absolute;
				right: 20upx;
				top: 25%;
			}
			.tab_but {
				width: 130upx;
				height: 6upx;
				background: red;
				position: absolute;
				bottom: 0;
				left: calc(50% - 130upx);
				border-radius: 2upx;
				
			}
			.tab_but1 {
				width: 130upx;
				height: 6upx;
				background: red;
				position: absolute;
				bottom: 0;
				left: calc(50%);
				border-radius: 2upx;
			}
			
		}
		
	}
	
	
	.breakfast {
		width: 100%;
		height: 60upx;
		display: flex;
		.foot_show {
			flex: 1;
			margin: 0 10upx;
			display: flex;
			align-items: center;
			justify-content: center;
			background: green;
			border-radius: 10upx;
			.foot_icon {
				
				.iconfont {
					color: dimgray;
					font-size: 45upx;
				}
			}
			
			.show_name {
				font-size: 26upx;
				color: #808695;
				margin-left: 5upx;
			}
		}
		
	}
	.topic {
		min-height: 60upx;
		margin: 0 40upx;
		padding: 20upx 0;
		border-bottom: 1px solid #e8eaec;
		.topic_content {
			display: flex;
		    flex-wrap: wrap;
			width: 100%;
			.topic_matter {
				width: 50%;
				height: 80upx;
				// background: #808695;
				display: flex;
				align-items: center;
				
				
				.iconfont {
					font-size: 35upx;
					font-weight: 600;
					margin-right: 20upx;
					color: #ff9234;
					margin-left: 10upx;
				}
				.name {
					font-size: 30upx;
					// color: #808695
				}
			}
			
		}
	}
	.header_top {
		height: var(--status-bar-height);
	}
	
	.new_foot {
		padding: 100upx 0 0 0;
	}
	

</style>
