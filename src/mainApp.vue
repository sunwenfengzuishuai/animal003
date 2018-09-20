<style>
	/* 四角边框加粗 and 边框标题 start */
	.border-top-left, .border-top-right, .border-bottom-left, .border-bottom-right{
		width: 50px;
		height: 50px;
		position: absolute;
		box-sizing: border-box;
	}
	.border-top-left{
		top: 0;
		left: 0;
		border-top: 4px solid #58e7e7;
		border-left: 4px solid #58e7e7;
	}
	.border-top-right{
		top: 0;
		right: 0;
		border-top: 4px solid #58e7e7;
		border-right: 4px solid #58e7e7;
	}
	.border-bottom-left{
		bottom: 0;
		left: 0;
		border-bottom: 4px solid #58e7e7;
		border-left: 4px solid #58e7e7;
	}
	.border-bottom-right{
		bottom: 0;
		right: 0;
		border-bottom: 4px solid #58e7e7;
		border-right: 4px solid #58e7e7;
	}
	.big-border{
		width: 80px;
		height: 80px;
		border-width:7px;
	}
	.border-name-top{
		width: 120px;
		height: 18px;
		line-height: 18px!important;
		text-align: center;
		color: #fff;
		position: absolute;
		top: 0px;
		left: 50%;
		transform: translate(-50%);
		background-color: #0f122a;
		box-sizing: border-box;
		border-left: 3px solid #58e7e7;
		border-right: 3px solid #58e7e7;
	}
	/* 四角边框加粗end */
</style>

<template>
	<router-view></router-view>
</template>