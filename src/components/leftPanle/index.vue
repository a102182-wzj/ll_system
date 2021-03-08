<template>
  <draggable
    v-model="leftPanleArray"
    animation="500"
    @start="onStart"
    @end="onEnd"
    chosenClass="chosen"
    class="draggableClass"
  >
    <transition-group>
      <div
        class="visual_box"
        v-for="element in leftPanleArray"
        :key="element.index"
      >
        <div class="visual_title">
          <div class="visual_title_text">
            {{ element.title }}
            <div class="visual_title_text_img"></div>
          </div>
        </div>
        <div class="visual_chart" :id="element.id"></div>
      </div>
    </transition-group>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
import { getBar } from "@/api/leftPanle/index.js";
import { orderVolume, softwareVolume, touguSoftwareVolume } from "./visual.js";
import * as echarts from "echarts";
import { mapMutations } from "vuex";

export default {
  components: { draggable },
  props: {},
  data() {
    return {
      leftPanleArray: [
        { index: 0, title: "白单成交量", id: "leftMain1" },
        { index: 1, title: "软件成交量", id: "leftMain2" },
        { index: 2, title: "投顾软件成交量", id: "leftMain3" }, //main10
        { index: 3, title: "测试快", id: "leftMain4" },
      ],
      orderList: [],
      orderVolume: orderVolume,
    };
  },
  created() {},
  mounted() {
    this.getBar();
  },
  watch: {},
  computed: {
  },
  methods: {
    ...mapMutations({
      flagIndexPass: "flagIndexPass",
    }),
    onStart() {},
    onEnd() {},
    getBar() {
      let that = this;
      getBar().then((res) => {
        that.orderList = res;
        that.orderVolume = orderVolume;
        that.orderVolume.xAxis.data = [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ];
        let dataArrayFor1 = [];
        let dataArrayFor2 = [];
        console.log("orderList", that.orderList);
        that.orderList.forEach((obj, index) => {
          // console.log(1111, obj, index);
          if (index > 0) {
            dataArrayFor1.push(obj[1]);
            dataArrayFor2.push(obj[2]);
          }
        });
        that.orderVolume.series = [
          {
            name: that.orderList[0][1],
            type: "bar",
            data: dataArrayFor1,
            barWidth: 10,
            barGap: 0.5,
            itemStyle: {
              normal: {
                barBorderRadius: 50,
                color: "#ffffff",
              },
            },
          },
          {
            name: that.orderList[0][2],
            type: "bar",
            data: dataArrayFor2,
            barWidth: 10,
            barGap: 0.5,
            itemStyle: {
              normal: {
                barBorderRadius: 50,
                color: "#446ACF",
              },
            },
          },
        ];
        var myChart1 = echarts.init(document.getElementById("leftMain1"));
        myChart1.setOption(that.orderVolume);
        var myChart2 = echarts.init(document.getElementById("leftMain2"));
        myChart2.setOption(softwareVolume);
        var myChart3 = echarts.init(document.getElementById("leftMain3"));
        myChart3.setOption(touguSoftwareVolume);
        that.flagIndexPass()
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.draggableClass {
  height: 100%;
  .visual_box {
    height: 33.3%;
  }
  .visual_box .visual_title {
    position: relative;
    height: 10%;
    .visual_title_text {
      color: #fff;
      font-size: 1vw;
      // line-height: 35px;
      position: relative;
      .visual_title_text_img {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        bottom: -10px;
        background-image: url("~@/assets/images/ksh33.png");
        background-size: 100% 100%;
      }
    }
  }
  .visual_box .visual_chart {
    box-sizing: border-box;
    padding: 5px 0;
    height: 90%;
  }
}
.chosen {
  border: solid 1px #3089dc !important;
}
</style>