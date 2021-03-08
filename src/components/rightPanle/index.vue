<template>
  <draggable
    v-model="rightPanleArray"
    animation="500"
    @start="onStart"
    @end="onEnd"
    chosenClass="chosen"
    class="draggableClass"
  >
    <transition-group>
      <div
        class="visual_box"
        v-for="element in rightPanleArray"
        :key="element.index"
      >
        <div class="visual_title">
          <div class="visual_title_text">
            {{ element.title }}
            <div class="visual_title_text_img"></div>
          </div>
        </div>
        <div class="visual_chart" :id="element.id">
          <div v-if="element.index==1" class="swiper-container visual_swiper2">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide swiper_item"
                style="
                  color: rgb(32, 219, 253) !important;
                  text-shadow: rgb(0, 216, 255) 0px 0px 25px !important;
                  font-size: 0.6vw;
                  font-family: yjsz;
                "
                v-for="(item, index) in swiperData"
                :key="index"
              >
                恭喜{{ item.province_name }}{{ item.city_name }}
                {{ item.name }} {{ item.deal_time }} 购买 {{ getType(item) }} 1
                套
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition-group>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
import * as echarts from "echarts";
import { pieOption,swiperData } from "./visual.js";
import { getPie } from "@/api/rightPanle/index.js";
import Swiper from "./swiper.min.js";
import "swiper/swiper.scss";
import { mapMutations } from "vuex";
export default {
  components: { draggable },
  props: {},
  data() {
    return {
      pieOption: pieOption,
      rightPanleArray: [
        { index: 0, title: "渠道白单", id: "rightMain1" },
        { index: 1, title: "近20名成交展示", id: "rightMain2" },
      ],
      swiperData: swiperData,
    };
  },
  created() {},
  mounted() {
    this.getPie();
    this.getSwiper();
  },
  watch: {},
  computed: {},
  methods: {
            ...mapMutations({
      flagIndexPass: "flagIndexPass",
    }),
    getPie() {
      let that = this;
      getPie().then((data) => {
        that.pieOption.series[0].data = data;
        let dtoList = data;
        let colors = [];
        dtoList.forEach((dto) => {
          colors.push(dto.color);
        });
        that.pieOption.series[0].color = colors;
        var myChart3 = echarts.init(document.getElementById("rightMain1"));
        myChart3.setOption(that.pieOption);
        that.flagIndexPass()
      });
    },
    getSwiper() {
      var mySwiper2 = new Swiper(".visual_swiper2", {
        spaceBetween: 5,
        autoplay: {
          delay: 800, //1秒切换一次
          disableOnInteraction: false,
        }, //可选选项，自动滑动
        direction: "vertical", //可选选项，滑动方向
        speed: 800, //可选选项，滑动速度

        // loopedSlides: 1,
        // touchRatio: 0,
        slidesPerView: 15,
        autoHeight: true,
        // preventClicksPropagation: true,
        loop: true,
      });
    },
    getType(item) {
      if (item.techNormal) {
        return "485普及版";
      } else if (item.techPrime) {
        return "至尊版";
      } else if (item.techPrimePackage) {
        return "至尊套餐版";
      } else if (item.techMobile) {
        return "科技经典版";
      }
    },
    onStart() {},
    onEnd() {},
  },
};
</script>
<style lang="scss" scoped>
.draggableClass {
  height: 100%;
  .visual_box {
    height: 50%;
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
.visual_swiper2{
  height:100%;
}
.chosen {
  border: solid 1px #3089dc !important;
}
</style>