<template>
	<view class="mescroll_content">
        <mescroll-uni  @down="downCallback" @up="upCallback"  :up="upOption"  :down="downOption" @init="mescrollInit" >			
            <slot></slot>
		</mescroll-uni>
    </view>
</template>

<script>
import MescrollUni from "../mescroll/mescroll_uni.vue";
export default {
	name: 'mescroll',
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
				callback: this.upCallback, 
				page: {
					num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
					size: 10 // 每页数据的数量,默认10
				},
				toTop: {
                    src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAclBMVEUAAAAAAAAAAAAAAADp6ekAAAAAAAAAAADOzs4AAAAAAAAAAAAAAAAAAAAAAAAAAADo6OjW1tYeHh7l5eXh4eHY2NjAwMC5ubm3t7cxMTH7+/vv7+/s7Ozc3NzNzc2tra0TExPp6enS0tLQ0NDDw8P///9ezvBLAAAAJXRSTlNNAAod1T46NbASSEc0Kykk07pTzsm9o52ZWfXg2sGvk1HUtbOmfFE0sAAAAT1JREFUSMeV1t1ygjAQhuGvu4ZU+VUUqVrtX+7/FpuCTJEsmH2POMgzMEzYgBdlISAurEmB1NiC6RkgzjYYtcmYFgCVBkGmpDnACcQSFgHlmC2nEKwtFrLrKVgnWCwZBKT1shgDsniapRHIEVH+DxhR8QAoiQMJ3UGJyMoekIkFhjrAiI47kGHU2U06Y1T2B+hhP7evfdfr/aJ92O3kAUMRe1BA6K3e7yBUeGCl9ZVz7x8Isx4Ycf3pJArjQYppu9rd6qpxhxCkHoTr9+6Gzwo/bhsKD4T1LbBaAUdBCI90cEf0wIsv4ZHMFDQYAJrpLYz8Wgcgv9ZCAwoPWAO423zxYEPd9o4HWf8BxQPuAJlYYGh+CFwuCCsXxsz2Wxoz2kGmHZXqYawe9/oDRX9k6Q9F/bGrP9j1vw76nxNlv9R2ECcaFzswAAAAAElFTkSuQmCC', // 回到顶部按钮的图片路径,支持网络图
					offset: 100
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
			
			this.$emit('downCallback', mescroll)
			
		},
		/*上拉加载的回调*/
		upCallback(mescroll) {
			// 此时mescroll会携带page的参数:
			// let pageNum = mescroll.num; // 页码, 默认从1开始
			// let pageSize = mescroll.size; // 页长, 默认每页10条
			 this.$emit('upCallback', mescroll)

	    },
		/*
		  重置到第一页    
		  1.默认null,不传参,则显示上拉加载的进度布局 
		  2.传参true, 则显示下拉刷新的进度布局 
		  3.传参false,则不显示上拉和下拉的进度 (常用于静默更新列表数据)
		*/
		resetUpScroll(isVal, isTo) {  // isTo 是否回到顶部 
		    this.mescroll.resetUpScroll(isVal)
		    if (isTo !== 1) {
		        this.mescroll.scrollTo( 0, 0 );
		    }
		      
		
		}
	},
	onReady() {
		
	},
	onLoad() {
		

	},
	destroyed() { // 防止 退出页面 向上按钮不隐藏问题
        this.mescroll.hideTopBtn()
    }
}
</script>

<style lang="less" scoped>
.mescroll {
	height: auto;
	
}


</style>
