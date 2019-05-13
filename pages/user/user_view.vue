<template>
	<view class="content">
		<view >33</view>
        <page-head :title="title" color="#fff" background="#7e7979" ></page-head>
		
      <mescroll class="mescroll" @downCallback="downCallback" @upCallback="upCallback">
		    <view class="scroll_li" v-for="item in dataList" :key="item.id">{{item.name}}</view>
		    <view class="scroll_li">客诉</view>
		    <view class="scroll_li">客诉</view>
		    <view class="scroll_li">客诉</view>
			<view class="scroll_li">客诉</view>
			<image class="image" src="../../static/HM-PersonalCenter/l3.png" ></image>

 
		    <view class="scroll_li">客诉</view>
		   
			<view class="scroll_li">客诉</view>
			 <view class="scroll_li">客诉</view>
			<view class="scroll_li">客诉</view>
			 <view class="scroll_li">客诉</view>
			 
			  <view class="scroll_li">客诉</view>
			   <view class="scroll_li">客诉</view>
			   
				<view class="scroll_li">客诉</view>
			 
		 </mescroll>
	
		
	
		
	</view>
</template>

<script>
import mescroll from '../../components/mescroll.vue';
import  pageHead from '../../components/page_head.vue';


export default {
	components: {
		mescroll,
		pageHead,
    },
    data() {
		return {
            hasSetText:false,
			hasSetBg:false,
			title: '设置',
			dataList: [],
			mescroll: null, //mescroll实例对象
			pdList: [] // 数据列表
			
		}
	},
	
    methods: {
		// mescroll组件初始化的回调,可获取到mescroll对象
		mescrollInit(mescroll) {
			this.mescroll = mescroll;
		},
		setText() {
			this.hasSetText = !this.hasSetText;
			uni.setNavigationBarTitle({
				title: this.hasSetText ? "Hello uni-app" : "默认导航栏"
			})
		},
		setBg() {
			this.hasSetBg = !this.hasSetBg;
			uni.setNavigationBarColor({
				frontColor: this.hasSetBg ? "#ffffff" : "#000000",
				backgroundColor: this.hasSetBg ? "#007AFF" : "#F8F8F8"
			})
		},
		downCallback(mescroll) { // 下拉刷新
			setTimeout(() => {
				mescroll.endSuccess()
				
			}, 1000)
			
		},
		upCallback(mescroll) {

			uni.request({
				url: 'http://192.168.1.166:8086/json',
				success: (res) => {
					console.log(res)
					// 成功隐藏下拉加载状态
					if (res.data) {
						this.dataList = res.data;
					}
					
						mescroll.endSuccess(this.dataList.length)
						
				
					
				},
				fail: () => {
					// 失败隐藏下拉加载状态
					mescroll.endErr()
				}
			})
		},
		
		
			
	
	},
	onReady() {
		
	},
	onLoad() {

	},
}
</script>

<style lang="less" scoped>

.content {
	// background: #757575;
	// height: 100vh;
	// // padding-top: 7upx;
	padding-top: 44px;
}
.mescroll {
	// padding: 10upx;
	// height: calc(100vh - 44px);
	// background: #757575;
	.scroll_li {
		height: 200upx;
		border: 1upx solid red;
		margin: 20upx 0;
		
	}
	.image {
		height: 40upx;
		width: 40upx;
		
	}
	
	
}

	
.fill {
	display: inline-block;
	width: 40upx;
	height: 200upx;
	// background: red;
}
// .header_top {
// 	height: var(--status-bar-height);
// }
.header {
	height: 35upx;
	width: 100%;
	border-bottom: 1upx solid #e8eaec;
	position: fixed;
	z-index: 10;
	top: var(--status-bar-height);
	display: flex;
	align-items: center;
	// background: #fff;
	color: #fff;
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
.img {
	text-align: center;
	.images {
		width: 650upx;
		height: 650upx;
		
		
	}
	
}

.but_content {
	padding: 40upx;
	text-align: center;
}
.weixinLogin {
	font-size: 30upx;
	border-radius: 30upx;
	background: #ff9900;
	padding: 20upx 0;
	color: #fff;
	
	
}
.userLogin {
	margin-top: 40upx;
	font-size: 30upx;
	border-radius: 30upx;
	background: orange;
	padding: 20upx 0;
	color: #fff;
}
	
	

.header_top {
	height: var(--status-bar-height);
	// background: #008000;
}

</style>
