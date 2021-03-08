<template>
  <div class="ksh">
    <LoadingPage v-if="flagIndex<5"></LoadingPage>
    <div class="head_top"><span>麟龙获客分析平台</span></div>
    <div class="visual">
      <el-row class="row">
        <el-col :span="6" class="leftPanleRow"> <LeftPanle></LeftPanle></el-col>
        <el-col :span="12" class="middlePanleRow">
          <MiddlePanle></MiddlePanle>
        </el-col>
        <el-col :span="6" class="rightPanleRow"
          ><RightPanle></RightPanle
        ></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import LoadingPage from "../components/loading.vue";
import LeftPanle from "../components/leftPanle/index.vue";
import MiddlePanle from "../components/middlePanle/index.vue";
import RightPanle from "../components/rightPanle/index.vue";
import { mapState,mapActions } from 'vuex'
import "element-ui/lib/theme-chalk/display.css";
import { Row, Col } from "element-ui";
Vue.use(Row);
Vue.use(Col);
export default {
  components: {
    LoadingPage,
    LeftPanle,
    MiddlePanle,
    RightPanle,
  },
  props: {},
  data() {
    return {
      drag: false,
    };
  },
  created() {
    this.onStart()
  },
  mounted() {},
  watch: {},
  computed: {
    ...mapState({
      flagIndex: 'flagIndex'
    })
  },
  methods: {
    ...mapActions({getMiddleRightData:'getMiddleRightData'}),
    onStart() {
      console.log('====================start=========================')
      this.getMiddleRightData()
    },
    onEnd() {},
  },
};
</script>
<style lang="scss" scoped>
.ksh {
  height: 100%;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  background: url("~@/assets/images/data08.png") no-repeat #061537;
  background-size: cover;
  position: relative;
  overflow: hidden;
}
.head_top {
  position: relative;
  background: url("~@/assets/images/jcdsj_logo.png") no-repeat center center;
  background-size: 100% 100%;
  height: 5%;
  line-height: 5%;
}
.head_top span {
  text-align: center;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vw;
  background: linear-gradient(0deg, #0095d6, #46daff);
  background-size: cover;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  font-weight: bolder;
  cursor: text;
}
.head_top img {
  width: 90%;
  margin: auto;
}
.head_top p {
  width: 100%;
  text-align: center;
  color: #55bfff;
  position: absolute;
  bottom: -18px;
  left: -10px;
}
.head_top p span {
  font-family: "yjsz";
  font-size: 20px;
}
.visual {
  box-sizing: border-box;
  height: 95%;
  padding-top: 10px;
  .row {
    height: 100%;
    .leftPanleRow {
      height: 100%;
      overflow-y: scroll;
    }
    .middlePanleRow {
      height: 100%;
      // overflow-y: scroll;
    }
    .rightPanleRow {
      height: 100%;
    }
    .leftPanleRow::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
    .middlePanleRow::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
    .rightPanleRow::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
    .leftPanleRow,
    .middlePanleRow,
    .rightPanleRow {
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */
    }
  }
}
.chosen {
  border: solid 1px #3089dc !important;
}
// .leftListItem {
//   background-color: white;
//   height: 300px;
//   width: 100%;
//   cursor: move;
// }
</style>