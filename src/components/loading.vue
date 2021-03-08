<template>
  <div id="load">
    <div class="load_img">
      <!-- 加载动画 -->
      <img class="jzxz1" src="@/assets/images/jzxz1.png" />
      <img class="jzxz2" src="@/assets/images/jzxz2.png" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
/* 加载旋转动画 */
#load {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("~@/assets/images/data08.png") no-repeat #061537;
  background-size: cover;
  top: 0;
  left: 0;
  z-index: 999;
  overflow: hidden;
}
#load .load_img {
  position: absolute;
  left: calc(50% - 182px);
  top: calc(50% - 182px);
}
.load_img img {
  position: absolute;
  left: 0;
  top: 0;
}
.load_img .jzxz1 {
  animation: xz1 8s infinite linear;
  // width: 30vh;
  // height: 30vh;
}
@keyframes xz1 {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.load_img .jzxz2 {
  animation: xz2 7s infinite linear;
  // width: 30vh;
  // height: 30vh;
}
@keyframes xz2 {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-180deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
</style>