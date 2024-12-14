<template>
 	<view :style="skin+`;color:${textcolor}`">
		{{skin}}
 		<view class="nav-bar">换肤示例</view>
 		<view style="padding: 100rpx;">
 			<button type="default" hover-class="none" class="btn">按钮 - 页面中的元素</button>
 		</view>
 		<view class="card">
 			<view style="padding-bottom: 20rpx;">请选择皮肤风格</view>
 			<radio-group @change="radioChange">
 				<label class="h-flex-x list-item" v-for="(item, index) in items" :key="index">
 					<view>
 						<radio :value="index.toString()" :checked="index === current" />
 					</view>
 					<view style="padding-left: 30rpx;" class="name">{{item.name}}</view>
 				</label>
 			</radio-group>
 		</view>
 	</view>
 </template>
  
 <script>
 	export default {
 		data() {
 			return {
				textcolor:'#f40',
 				items: [
 					{
 						value: [
 							{name:'--nav-bg',value:'#42b983'},
 							{name:'--nav-color',value:'#ffffff'},
							{name:'--bg-color',value:'#000000'}
 						],
 						name: '默认'
 					},
 					{
 						value: [
 							{name:'--nav-bg',value:'#12b7f5'},
 							{name:'--nav-color',value:'#333'},
							{name:'--bg-color',value:'#ff4400'}
 						],
 						name: '手机QQ'
 					},
 					{
 						value: [
 							{name:'--nav-bg',value:'#ff5500'},
 							{name:'--nav-color',value:'#F0E0DC'},
							{name:'--bg-color',value:'#ffffff'}
 						],
 						name: '淘宝'
 					},
 				],
 				current: 0
 			}
 		},
 		methods: {
 			radioChange: function(e) {
 				let item = this.items[Number(e.detail.value)].value;
 				this.$store.commit("skinPeeler",item);
 
 				// 动态设置导航条颜色
 				uni.setNavigationBarColor({
 					frontColor:'#ffffff',
 					backgroundColor:item[0].value
 				});
 			}
 		}
 	}
 </script>
  
 <style lang="scss">
	 @import "@/static/theme.scss";
 	page {
 		background-color: #fff;
 		font-size: 28rpx;
 	}
 	
 	.h-flex-x{
 		display: flex;
 		flex-direction: row;
 		flex-wrap: nowrap;
 		justify-content: flex-start;
 		align-items: center;
 		align-content: center;
 	}
 	.card{
 		background-color: var(--nav-bg);
 		color:var(--nav-color);
 		padding: 30rpx;
 	}
 	.list-item{
 		height: 90rpx;
 		border-top: var(--nav-color) solid 1px;
 	}
  
 	.nav-bar {
 		box-sizing: content-box;
 		height: 44px;
 		background-color: var(--nav-bg);
 		padding-top: var(--status-bar-height);
 		color: var(--nav-color);
 		line-height: 44px;
 		text-align: center;
 		font-size: 16px;
 	}
  
 	.btn {
 		background-color: var(--nav-bg) !important;
 		color: var(--nav-color) !important;
 	}
	// 重点
	.name{
		color: $nav-color;
	}
 </style>