<style>
	ul.ivu-cascader-menu {
		background-color: #fff;
	}
	.ivu-select-dropdown{
		height: 240px;
		background-color: #fff;
	}
	.ivu-select-dropdown span{
		color: #666;
		font-size: 14px;
	}
	.choise-cont ul.ivu-cascader-menu{
		background-color: #141738;
	}
</style>
<style scoped>

/* 页面主体结构start */
	html, body{
		margin: 0;
		padding: 0;
		height: 100%;
	}
	.main-containner{
		width: 100%;
		height: 100vh;
		background:#05121A url('../../assets/main-background.jpg') no-repeat;
		background-size: cover;
		display: flex;
		flex-direction: column;
		flex-shrink: 1;
	}
	.header{
		width: 100%;
		height: 60px;
		background-color: rgba(24, 24, 64, 0.8);
		text-align: center;
	}
	.header span{
		line-height: 60px;
		color: #fff;
		font-size: 1.6em;
	}
	.body-containner{
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.body-top-containner, .body-bottom-containner{
		width: 100%;
		height: 16%;
		background-color: #fff;
	}
	.body-center-containner{
		width: 100%;
		height: 66%;
		display: inline-flex;
		justify-content: space-between;
	}
	.center-left-cont, .center-right-cont{
		width: 49.6%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.center-center-cont{
		width: 62vh;
		height: 62vh;
		position: absolute;
		background-color: #13242C;
		left:0; right:0; top:0; bottom:0;
		margin:auto;
		border-radius: 50%;
		z-index: 10;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.center-left-item, .center-right-item{
		width: 100%;
		height: 49.2%;
		background-color: #ff0;
	}


/* 页面主体结构end */

	/* 分页start */
	.page-cont{
		height: 27px;
		width: 90%;
		margin: 0 auto;
		margin-bottom: 1%;
		background-color: #fff;
  		border-radius: 5px;
  		display: flex;
	}
	.totalcont{
		line-height: 27px;
		margin-left: 4%;
	}
	.pagebar{
		width: 60%;
		margin-left: 4%;
	}
	.erro-show-cont{
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: lightskyblue;
		font-size: 1.6em;
	}
	.erro-show{
		text-align: center;
	}
	/* 分页end */

/* 左半边部分start */
/* 左半边部分end */

/* 右半边部分start */
/* 右半边部分end */

/* 中间部分start */
	.center-center-item{
		width: 60vh;
		height: 60vh;
		margin: 0 auto;
		border-radius: 50%;
		background-color: #fff;
	}
/* 中间部分end */
	
	
	
	
</style>

<template>
	<div class="main-containner">
		<header class="header">
			<span>生产详情</span>
		</header>
		<div class="body-containner">
			<div class="body-top-containner">
				
			</div>

			<div class="body-center-containner">
				<div class="center-center-cont">
					<div class="center-center-item"></div>
				</div>	
				<div class="center-left-cont">
					<div class="center-left-item">
						
					</div>
					<div class="center-left-item">
						
					</div>
				</div>
				<div class="center-right-cont">
					<div class="center-right-item">
						
					</div>
					<div class="center-right-item">
						
					</div>
				</div>
			</div>

			<div class="body-bottom-containner">
				
			</div>
		</div>
	</div>
</template>

<script>
	// import request from '../request/prospecial.js'
	
	export default {
		components: {
			
		},
		data(){
			return {
				
			}
		},
		mounted(){		//async 异步请求
		
		},
		methods: {
			
			// 报道类型格式标准化
			getReportTypeStr(row) {
			    switch (row.reportype) {
			        case 0:
			        	return "首次报告";
			        	break;
			        case 1:
			        	return `后续报告 ` + row.orderno;
			        	break;
			        case 2:
			        	return `后续报告 ${row.orderno} (终报)`;
			         	break;
			        default:
			       		break;
		     	}
			 	return "未知";
		    },
			// 页码改变函数
		    async productpageChanged(page) {
		    	this.propageNo = page;
		     	await this.queryProData();
		    },
		    async diseasepageChanged(page){
		    	this.diseasepageNo = page;
		     	await this.queryReportByAnimalfamily();
		    }

		},
	}
</script>