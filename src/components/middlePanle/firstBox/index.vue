<template>
  <div class="firstBox">
    <div class="innerPanle">
      <draggable
        v-model="topPanleArray"
        animation="500"
        @start="onStart"
        @end="onEnd"
        chosenClass="chosen"
        class="draggableClass"
      >
        <transition-group class="transitionClass">
          <div
            class="outBox"
            v-for="element in topPanleArray"
            :key="element.index"
          >
            <div class="visual_conTop_box">
              <div class="item">
                <div
                  class="title"
                  v-for="(sitem, index) in element.item"
                  :key="index"
                >
                  <div>{{ sitem.title }}：</div>
                  <div class="highLite" v-if="index == 0">
                    {{
                      whitePeriod.length>0
                        ? whitePeriod[element.index].count
                        : 0
                    }}
                  </div>
                  <div class="highLite" v-if="index == 1">
                    {{
                      dealPeriod.length>0
                        ? dealPeriod[element.index].count
                        : 0
                    }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition-group>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { mapMutations } from "vuex";
export default {
  components: { draggable },
  props: {},
  data() {
    return {
      topPanleArray: [
        {
          index: 0,
          item: [
            { title: "年白单", value: 111 },
            { title: "年成交", value: 222 },
          ],
        },
        {
          index: 1,
          item: [
            { title: "月白单", value: 111 },
            { title: "月成交", value: 222 },
          ],
        },
        {
          index: 2,
          item: [
            { title: "周白单", value: 111 },
            { title: "周成交", value: 222 },
          ],
        },
        {
          index: 3,
          item: [
            { title: "日白单", value: 111 },
            { title: "日成交", value: 222 },
          ],
        },
      ],
      eventSourceForPeriod: undefined,
      dealPeriod: [],
      whitePeriod: [],
      flag:false
    };
  },
  created() {
    this.getPeriod();
  },
  mounted() {},
  watch: {},
  computed: {},
  methods: {
        ...mapMutations({
      flagIndexPass: "flagIndexPass",
    }),
    getPeriod() {
      let that = this;
      this.eventSourceForPeriod = new EventSource(
        "http://172.27.11.101:8080/getPeriod "
      );
      //当通往服务器的连接被打开
      this.eventSourceForPeriod.onopen = function () {};
      //当错误发生
      this.eventSourceForPeriod.onerror = function (e) {
        console.log(e);
      };
      //当接收到消息，此事件为默认事件
      this.eventSourceForPeriod.onmessage = function (event) {
        console.log("onmessage ===>>>", event);
        this.eventSourceForPeriod.close(); //关闭SSE链接
      };
      //服务器推送sentMessage事件
      this.eventSourceForPeriod.addEventListener(
        "push_data",
        function (event) {
          //此处根据需求编写业务逻辑
          that.dealPeriod = JSON.parse(event.data).dealPeriod;
          that.whitePeriod = JSON.parse(event.data).whitePeriod;
          if(that.flag==false){
            that.flagIndexPass()
            that.flag=true
          }
        },
        false
      );
    },
    onStart() {},
    onEnd() {
      console.log('topPanleArray',this.topPanleArray)
    },
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
}
.firstBox {
  width: 100%;
  height: 15%;
  box-sizing: border-box;
  padding: 5px;
  .innerPanle {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
.outBox {
  padding: 3px;
  width: 25%;
  .visual_conTop_box {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background: url("~@/assets/images/ksh40.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .item {
      .title {
        color: white;
        font-size: 1vw;
        margin: 10px 20px;
        display: flex;
        align-items: center;
        .highLite {
          color: rgb(32, 219, 253) !important;
          text-shadow: rgb(0, 216, 255) 0px 0px 25px !important;
          font-size: 1.5vw;
          font-weight: 700;
          font-family: yjsz;
          text-align: center;
        }
      }
    }
  }
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