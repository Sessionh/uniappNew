<template>
	<view class="content">
     <page-head :title="title" color="#fff" background="#7e7979"></page-head>

       <!-- <view class="header" >
		  <text class="iconfont icon-icon"></text>
		  <view class="title">我的</view>
		   <text class="iconfont icon-weiwangguanicon-defuben-"></text>
		</view> -->
		<mescroll-uni class="mescroll" :down="downOption" @down="downCallback" :up="upOption" @up="upCallback" @init="mescrollInit">
			<view class="img">
				<image class="images" src="../../static/page/userLogo.png" />
			</view>
			
			<view class="but_content">
				<view class="weixinLogin">微信登陆</view>
				<view class="userLogin">登陆/注册</view>
			</view>
			
			
			
		 </mescroll-uni>
		
		
	</view>
</template>

<script>
import MescrollUni from "mescroll-uni/mescroll-uni.vue";
export default {
	components: {
		MescrollUni,
    },
    data() {
		return {
			
			hasSetText:false,
			hasSetBg:false,
			title: '设置',
			robList: ['限时抢购', '会员专区'],
			viewHeight: 0,
			mescroll: null, //mescroll实例对象
			// 下拉刷新的配置
			downOption: { 
				use: true, // 是否启用下拉刷新; 默认true
				auto: true, // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
			},
			// 上拉加载的配置
			upOption: {
				use: true, // 是否启用上拉加载; 默认true
				auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
				isLock: false, // 是否锁定上拉加载 (可用于不触发upCallback,只保留回到顶部按钮的场景)
				page: {
					num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
					size: 10 // 每页数据的数量,默认10
				},
				noMoreSize: 3, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
				empty: {
					tip: '暂无相关数据'
				}
			},
			// 列表数据
			dataList: []
		}
	},
	 // 必须注册滚动到底部的事件,使上拉加载生效
	onReachBottom() {
		this.mescroll && this.mescroll.onReachBottom();
	},
	// 必须注册列表滚动事件,使下拉刷新生效
	onPageScroll(e) {
		this.mescroll && this.mescroll.onPageScroll(e);
	},
	methods: {
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
		// mescroll组件初始化的回调,可获取到mescroll对象
		mescrollInit(mescroll) {
			this.mescroll = mescroll;
		},
		/*下拉刷新的回调, 有三种处理方式: */
		downCallback(mescroll){
			// 第1种: 请求具体接口
			uni.request({
				url: 'xxxx',
				success: () => {
					// 成功隐藏下拉加载状态
					mescroll.endSuccess()
				},
				fail: () => {
					// 失败隐藏下拉加载状态
					mescroll.endErr()
				}
			})
			// 第2种: 下拉刷新和上拉加载调同样的接口, 那以上请求可删, 直接用mescroll.resetUpScroll()代替
			mescroll.resetUpScroll(); // 重置列表为第一页 (自动执行 page.num=1, 再触发upCallback方法 )
			// 第3种: 下拉刷新什么也不处理, 可直接调用或者延时一会调用 mescroll.endSuccess() 结束即可
			mescroll.endSuccess()
		},
		/*上拉加载的回调*/
		upCallback(mescroll) {
			// 此时mescroll会携带page的参数:
			let pageNum = mescroll.num; // 页码, 默认从1开始
			let pageSize = mescroll.size; // 页长, 默认每页10条
// 			uni.request({
// 				url: 'xxxx?pageNum='+pageNum+'&pageSize='+pageSize,
// 				success: (data) => {
// 					// 接口返回的当前页数据列表 (数组)
// 					let curPageData = data.xxx; 
// 					// 接口返回的总页数 (比如列表有26个数据,每页10条,共3页; 则totalPage值为3)
// 					let totalPage = data.xxx; 
// 					// 接口返回的总数据量(比如列表有26个数据,每页10条,共3页; 则totalSize值为26)
// 					let totalSize = data.xxx; 
// 					// 接口返回的是否有下一页 (true/false)
// 					let hasNext = data.xxx; 
// 
// 					// 成功隐藏下拉加载状态
// 					//方法一(推荐): 后台接口有返回列表的总页数 totalPage
// 					mescroll.endByPage(curPageData.length, totalPage); 
// 
// 					//方法二(推荐): 后台接口有返回列表的总数据量 totalSize
// 					//mescroll.endBySize(curPageData.length, totalSize); 
// 
// 					//方法三(推荐): 您有其他方式知道是否有下一页 hasNext
// 					//mescroll.endSuccess(curPageData.length, hasNext); 
// 
// 					//设置列表数据
// 					if(mescroll.num == 1) this.dataList = []; //如果是第一页需手动制空列表
// 					this.dataList = this.dataList.concat(curPageData); //追加新数据
// 				},
// 				fail: () => {
// 					// 失败隐藏下拉加载状态
// 					mescroll.endErr()
// 				}
// 			})
	    },
	},
	onReady() {
		// uni.setNavigationBarColor({
		// 	frontColor:  "yellow",
		// 	backgroundColor:  "#007AFF"
		// })
		// 
	},
	onLoad() {
		// uni.getSystemInfo({
		// 	success: (res) => {
		// 		console.log(res);
		// 		// #ifndef MP-WEIXIN
		// 		this.viewHeight = res.windowHeight -35;
		// 			console.log(this.viewHeight);
		// 		// #endif
		// 		// #ifdef MP-WEIXIN
		// 		this.viewHeight = res.windowHeight;
		// 		// #endif
		// 		
		// 		console.log(this.viewHeight)
		// 		
		// 		
		// 	}
		// })
		console.log(33)
		
	
	},
}
</script>

<style lang="less" scoped>

.content {
	background: #757575;
	height: 100vh;
	// padding-top: 7upx;
	padding-top: 44px;
}
.mescroll {
	padding: 10upx;
	
	
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
