<template>
	<view class="user_view" > 	   
		<page-head isBack="back"  :title="title" color="#fff" background="#7e7979" ></page-head>
		
		<mescroll-uni class="mescroll"  bottom="0"  @down="downCallback" @up="upCallback" :up="upConfig" @init="mescrollInit">
			<view @click="backUser">返回首页</view>
            <view class="scroll_li" v-for="(item, index) in dataList" :key="index">{{item.nickName}}</view>			 
		</mescroll-uni>
	</view>
</template>

<script>
    import MescrollUni from "../../../components/mescroll-diy/mescroll-meituan.vue";
	import pageHead from '../../../components/page_head.vue';	
    export default {	
		components: {
			MescrollUni,
			pageHead
		},
		data() {
			return {
				title: '设置',
				mescroll: null, //mescroll实例对象
				dataList: [],
				upConfig: {
					page: {
						size: 5
					}
				},
				
				
			}
		},			
		onReachBottom() { //注册滚动到底部的事件,用于上拉加载
			this.mescroll && this.mescroll.onReachBottom();
		},		
		onPageScroll(e) { //注册列表滚动事件,用于下拉刷新
			this.mescroll && this.mescroll.onPageScroll(e);
		},
        onShow() {
			uni.setTabBarBadge({
			  index: 0,
			  text: '1'
			})
			
		},
		onReady() {
			setTimeout(() => {
				uni.setTabBarBadge({
				  index: 0,
				  text: '1'
				})
				console.log('改变')
				
			}, 2000)
			
		},
		methods: {
			backUser() {
				// uni.navigateTo({
				// 	url: '../../tabs/user_view'
				// })
				// uni.switchTab({
				// 	url: '../../tabs/index'
				// })
				
				uni.reLaunch({
					url: '../../index/subpage/menu_type'
				});
				
			},
			mescrollInit(mescroll) { // mescroll组件初始化的回调,可获取到mescroll对象
				this.mescroll = mescroll;
			},							
			downCallback(mescroll){ // 下拉刷新的回调
				setTimeout(() => {
					mescroll.resetUpScroll()					
				}, 1000)								
			},			
			upCallback(mescroll) {
				uni.request({
					url: 'http://192.168.1.166:8086/json',
					data: {
						pageSize: mescroll.size,
						pageNumber: mescroll.num						
					},
					success: (res) => {
						console.log(res)
						// 成功隐藏下拉加载状态
						if (res.data.result) {
			                this.dataList.push(...res.data.result)
						    setTimeout(() => {
								mescroll.endBySize(res.data.result.length, res.data.total[0].count); 
								
							}, 300)
							
						}
					},
					fail: () => {
						// 失败隐藏下拉加载状态
						mescroll.endErr()
					}
				})
				
			
			},
			
		},
	
	}
</script>

<style lang="less" scoped>
	.user_view {
		// padding-top: 64.5px
		
	}
	.scroll_li {
		height: 200upx;
		border: 1upx solid red;
		margin: 20upx 0;
		
	}
	
	
</style>
