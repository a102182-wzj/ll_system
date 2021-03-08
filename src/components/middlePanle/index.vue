<template>
  <div class="draggableClass">
    <FirstBox></FirstBox>
    <SecondBox></SecondBox>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import FirstBox from "./firstBox/index.vue";
import SecondBox from "./secondBox/index.vue";
export default {
  components: { draggable, FirstBox, SecondBox },
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {
    onStart() {},
    onEnd() {},
  },
};
</script>
<style lang="scss" scoped>
@font-face {
  font-family: yjsz;
  src: url("~@/fonts/yjsz.TTF"); 
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
  .mapDiv {
    width: 100%;
    height: 70%;
    background-color: white;
  }
  .dataDiv {
    width: 100%;
    height: 30%;
    background: rgba(16, 54, 87, 0.5);
    border: 1px solid #345f92;
    // position: absolute;
    z-index: 99;
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