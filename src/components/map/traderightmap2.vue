<template>
  <div id="traderightmap2"></div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: 'traderightmap2',
    data(){
      return {

      }
    },
    mounted(){
      this.initMap()
    },
    methods:{
      initMap(){
        let chart = echarts.init(document.getElementById("traderightmap2"));
        let option = {
          legend: {
            data:['骡子','马','驴','骆驼','牛'],
            top:'10%',
            textStyle: {
              color: '#fff'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1997','1998','1999','2010','2011','2012','2013'],
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            }
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            }
          },
          series: [
            {
              name:'邮件营销',
              type:'line',
              stack: '总量',
              data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
              name:'联盟广告',
              type:'line',
              stack: '总量',
              data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
              name:'视频广告',
              type:'line',
              stack: '总量',
              data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
              name:'直接访问',
              type:'line',
              stack: '总量',
              data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
              name:'搜索引擎',
              type:'line',
              stack: '总量',
              data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        };


        chart.setOption(option);
      }
    }
  }
</script>

<style scoped>
  #traderightmap2{
    width:100%;
    height: 100%;
  }
</style>
