<template>
  <div class="container">
    <span>访问统计</span>
    <div class="butGroup">
      <el-button size="small">近7天</el-button>
      <el-button size="small">近30天</el-button>
      <el-button size="small">近90天</el-button>
    </div>
    <avue-echart-line  :option="option" :data="data" width="800"></avue-echart-line>

  </div>


</template>

<script>

export default {
  data() {
    return {
      theme:'',
      data:{
        categories: [
          "3.1",
          "3.2",
          "3.3",
          "3.4",
          "3.5",
          "3.6"
        ],
        series: [
          {
            name: "手机品牌",
            data: [
              100,
              678,
              897,
              439,
              478,
              390
            ]
          }, {
            name: "其他手机品牌",
            data: [
              200,
              678,
              897,
              439,
              478,
              390
            ]
          }
        ]
      },
      option: {
        switchTheme:true,
        width: 1200,
        height: 800,
        title: '手机大比拼',
        smooth: true,//是否顺滑
        areaStyle: false,//是否面积
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
.container{
  padding: 0 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  & .butGroup{

  }
}
</style>
