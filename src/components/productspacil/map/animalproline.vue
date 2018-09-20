
<template>
	<div id="aniamlproline"></div>
</template>

<style scoped>
	#aniamlproline{
		width: 100%;
		height: 100%;
	}
</style>

<script>
	import echarts from 'echarts';
	import world from '../../../assets/js/world.js'

	export default {
		// props: {
		// 	allcoordinates: {
		// 		type: Object,
		// 		default: null
		// 	},
		// },
		// watch: {
		// 	allcoordinates: function(newValue, oldValue){
		// 		// console.log(newValue);
		// 		// alert(newValue);
		// 		this.drawLine(newValue);		
		// 	},
		// },
		data() {
			return {
				
			}
		},
		mounted() { 
			this.drawLine()
	
		},
		methods: {
			async drawLine() {

				var chart = echarts.init(document.getElementById("aniamlproline"));
				
				var option = {
                        // backgroundColor: '#eee',
                        tooltip : {
                            trigger: 'axis'
                        },
                        legend: {
                            x: 'left',
                            y: 'top',
                            padding: [8,0,0,20],
                            data:['罗非鱼','鲫鱼'],
                            textStyle: {
                                color: '#eee',
                            }
                        },

                        calculable : true,

                        xAxis: [{
                            axisLabel: {
                                rotate: 30,
                                interval: 0
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#eee'
                                }
                            },
                            type: 'category',
                            boundaryGap: false,
                            data: [2011,2012,2013,2014,2015,2016]
                        }],
                        yAxis: [{
                            type: 'value',
                            axisLine: {
                                lineStyle: {
                                    color: '#CECECE'
                                }
                            }
                        }],
                        series : [
                            {
                                name:'罗非鱼',
                                type:'line',
                                symbol:'none',
                                smooth: 0.2,
                                color:['#66AEDE'],
                                data:[800, 300, 500, 800, 300, 600,500,600]
                            },
                            {
                                name:'鲫鱼',
                                type:'line',
                                symbol:'none',
                                smooth: 0.2,
                                color:['#90EC7D'],
                                data:[600, 300, 400, 200, 300, 300,200,400]
                            }
                        ]
                    };

				// 使用刚指定的配置项和数据显示图表。
				chart.setOption(option);
				// 屏幕自适应
				setTimeout(function (){
	        	    window.onresize = function () {
	        	    	chart.resize();
	        	    }
	        	},200)

			},

		}
	}
</script>


