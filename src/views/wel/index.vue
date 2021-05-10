<template>
  <div class="index-p">
    <el-button type="primary" @click="option.switchTheme=!option.switchTheme" size="small">{{option.switchTheme?'关闭主题':'打开主题'}}</el-button>
    <el-button @click="theme='macarons'" size="small">换紫色主题</el-button>
    <el-button @click="theme='wonderland'" size="small">换绿色主题</el-button>


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
        width: 800,
        height: 400,
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
.index-p {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 100px;
}
</style>
