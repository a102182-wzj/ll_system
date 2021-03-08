<template>
  <div class="secondBox">
    <img
      class="visual_conBot_l visual_conBot"
      src="@/assets/images/ksh42.png"
    />
    <img
      class="visual_conBot_2 visual_conBot"
      src="@/assets/images/ksh43.png"
    />
    <img
      class="visual_conBot_3 visual_conBot"
      src="@/assets/images/ksh44.png"
    />
    <img
      class="visual_conBot_4 visual_conBot"
      src="@/assets/images/ksh45.png"
    />
    <div class="mapDiv" id="middleMain1"></div>
    <div class="dataDiv">
      <draggable
        v-model="bottomPanleArray"
        animation="500"
        @start="onStart"
        @end="onEnd"
        chosenClass="chosen"
        class="draggableClass"
      >
        <transition-group class="transitionClass">
          <div
            class="panle"
            v-for="element in bottomPanleArray"
            :key="element.index"
            :id="element.id"
          >
            <div class="panelCanvas"></div>
          </div>
        </transition-group>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import "./china.js";
import * as echarts from "echarts";
import { optionMap, dealTop10Option, whiteTop10Option } from "./visual.js";
import { mapMutations } from "vuex";
export default {
  components: { draggable },
  props: {},
  data() {
    return {
      optionMap: optionMap,
      dealTop10Option: dealTop10Option,
      whiteTop10Option: whiteTop10Option,
      bottomPanleArray: [
        { index: 0, id: "middleMain2" },
        { index: 1, id: "middleMain3" },
      ],
      flag1: false,
      flag2: false,
    };
  },
  created() {},
  mounted() {
    this.initMap();
    this.getTop10();
  },
  watch: {},
  computed: {},
  methods: {
    ...mapMutations({
      flagIndexPass: "flagIndexPass",
    }),
    initMap() {
      let that = this;
      this.eventSourceForWebflux = new EventSource(
        "http://172.27.11.101:8080/getWebflux"
      );
      //当通往服务器的连接被打开
      this.eventSourceForWebflux.onopen = function () {};
      //当错误发生
      this.eventSourceForWebflux.onerror = function (e) {
        console.log(e);
      };
      //当接收到消息，此事件为默认事件
      this.eventSourceForWebflux.onmessage = function (event) {
        console.log("onmessage ===>>>", event);
        this.eventSourceForWebflux.close(); //关闭SSE链接
      };
      //服务器推送sentMessage事件
      this.eventSourceForWebflux.addEventListener(
        "push_data",
        function (event) {
          let data = JSON.parse(event.data);
          that.optionMap.series[0].data = data.dealList;
          that.optionMap.series[1].data = data.dealTop3;
          that.optionMap.series[2].data = data.whiteList;
          that.optionMap.series[3].data = data.whiteTop3;
          // that.optionMap.dataList.push(JSON.parse(event.data))
          var myChart8 = echarts.init(document.getElementById("middleMain1"));
          myChart8.setOption(that.optionMap);
          if (that.flag1 == false) {
            that.flagIndexPass();
            that.flag1 = true;
          }
        },
        false
      );
    },
    getTop10() {
      let that = this;
      this.eventSourceForTop10 = new EventSource(
        "http://172.27.11.101:8080/getTop10"
      );
      //当通往服务器的连接被打开
      this.eventSourceForTop10.onopen = function () {};
      //当错误发生
      this.eventSourceForTop10.onerror = function (e) {
        console.log(e);
      };
      //当接收到消息，此事件为默认事件
      this.eventSourceForTop10.onmessage = function (event) {
        console.log("onmessage ===>>>", event);
        this.eventSourceForTop10.close(); //关闭SSE链接
      };
      //服务器推送sentMessage事件
      this.eventSourceForTop10.addEventListener(
        "push_data",
        function (event) {
          //此处根据需求编写业务逻辑
          let data = JSON.parse(event.data);
          let dealTop10City = [];
          let dealTop10Count = [];
          let whiteTop10City = [];
          let whiteTop10Count = [];
          data.dealTop10.map((item, index) => {
            if (index >= 5) return;
            dealTop10City.push(item.name);
            dealTop10Count.push(item.count);
          });
          data.whiteTop10.map((item, index) => {
            if (index >= 5) return;
            whiteTop10City.push(item.name);
            whiteTop10Count.push(item.count);
          });
          that.dealTop10Option.yAxis.data = dealTop10City.reverse();
          that.dealTop10Option.series[0].data = dealTop10Count.reverse();
          that.whiteTop10Option.yAxis.data = whiteTop10City.reverse();
          that.whiteTop10Option.series[0].data = whiteTop10Count.reverse();
          var myChart8left = echarts.init(
            document.getElementById("middleMain2")
          );
          myChart8left.setOption(that.dealTop10Option);
          var myChart8right = echarts.init(
            document.getElementById("middleMain3")
          );
          myChart8right.setOption(that.whiteTop10Option);
          if (that.flag2 == false) {
            that.flagIndexPass();
            that.flag2 = true;
          }
          // that.flagIndex = that.flagIndex + 1;
        },
        false
      );
    },
    onStart() {},
    onEnd() {},
  },
};
</script>
<style lang="scss" scoped>
@font-face {
  font-family: yjsz;
  src: url("~@/fonts/yjsz.TTF"); /* IE9+,可以是具体的实际链接 */
  src: url("~@/fonts/yjsz.eot");
}
.draggableClass {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}

.secondBox {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 85%;
  padding: 6px;
  background-image: url("~@/assets/images/ksh41.png");
  background-size: 100% 100%;
  .mapDiv {
    width: 100%;
    height: 70%;
    // background-color: white;
  }
  .dataDiv {
    width: 100%;
    height: 30%;
    background: rgba(16, 54, 87, 0.5);
    border: 1px solid #345f92;
    // position: absolute;
    z-index: 99;
    display: flex;
    justify-content: space-between;
    .panle {
      flex: 1;
      padding: 10px 20px 0 20px;
      .panelCanvas {
        // background-color: red;
        width: 100%;
        height: 100%;
      }
    }
  }
}
.visual_conBot {
  width: 25px;
  height: 25px;
}
.visual_conBot_l {
  position: absolute;
  left: 0;
  top: 0;
}
.visual_conBot_2 {
  position: absolute;
  right: 0;
  top: 0;
}
.visual_conBot_3 {
  position: absolute;
  right: 0;
  bottom: 0;
}
.visual_conBot_4 {
  position: absolute;
  left: 0;
  bottom: 0;
}
.chosen {
  border: solid 1px #3089dc !important;
}
.transitionClass {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}
</style>