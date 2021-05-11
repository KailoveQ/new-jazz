<template>

  <div class="chart">
    <div class="caption">
      <span v-if="interval ==='week'">本周</span>
      <span v-else-if="interval ==='month'">本月</span>
      <span v-else>今年</span>
    </div>
    <div class="total">总支出: ¥{{total}}</div>
    <div class="average">平均值: ¥{{average}}</div>
    <div id="figure"></div>
  </div>

</template>

<script>

export default {
  data() {
    return {
      interval: 'week' | 'month' | 'year' ,
      total: 3000,
      average: 200
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";

.chart {
  padding: 6px 0;
  border-bottom: 1px solid #dddddd;
  .caption {
    border-bottom: 1px solid #dddddd;
    display: flex;
    span {
      padding: 8px 16px;
      font-size: 14px;
    }
  }
  .total {
    font-size: 14px;
    color: #999999;
    text-align: left;
    padding: 6px 6px;
  }
  .average {
    font-size: 12px;
    color: #999999;
    text-align: left;
    padding: 0 6px;
    margin-bottom: 16px;
  }
  #figure {
    width: 100%;
    height: 150px;
  }
}
</style>
