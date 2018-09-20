<template>
    <div id="traderightmap1"></div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    props:['traderigntmap1import','traderigntmap1animalName'],
    name: 'traderightmap1',
    data(){
      return {
        animalName:[],
        animalSum:[]
      }
    },

    mounted(){
      this.initMap()
    },
    watch:{
      traderigntmap1import:{
        handler:function (oldval,newval) {
          this.animalSum = newval
          this.initMap()
        },
        deep:true
      },
      traderigntmap1animalName:{
        handler:function (oldval,newval) {
          this.animalName = newval
          this.animalName.slice(0,5)
          this.initMap()
        },
        deep:true
      }
    },
    methods:{
      initMap(){
        let chart = echarts.init(document.getElementById("traderightmap1"));

        let option = {
          tooltip : {
            trigger: 'axis'
          },
          legend: {
            data:['贸易量'],
            left:'left',
            textStyle: {
              color: '#fff'
            }
          },
          grid:[{
            left:"10%",                      //组件离容器左侧的距离,百分比字符串或整型数字
            top:"20%",                          //组件离容器上侧的距离，百分比字符串或整型数字
            right:"10%",                    //组件离容器右侧的距离,百分比字符串或整型数字
            bottom:"20%",
          }],
          calculable : true,
          xAxis : [

            {
              type : 'category',
              // data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
              data : this.animalName,
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#fff'
                }
              },
              axisLabel: {
                rotate: 30,
                interval: 0,
                color: '#fff'
              },
            }
          ],
          yAxis : [
            {
              type : 'value',
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#fff'
                }
              }
            }
          ],
          series : [
            {
              name:'贸易量',
              type:'bar',
              // data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
              data:this.animalSum

            }
          ]
        };

        chart.setOption(option);
      }
    }
  }
</script>

<style scoped>
#traderightmap1{
  width:100%;
  height: 100%;
}
</style>
