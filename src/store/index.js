import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flagIndex: 0,
    middleRightData: {},
    leftData: {}
  },
  mutations: {
    flagIndexPass(state) {
      state.flagIndex++;
    },
    setMiddleRightData(state, param) {
      console.log('param', param)
    },
    setLeftData(state, param) {
      console.log('param', param)
    }
  },
  actions: {
    getMiddleRightData(context) {
            console.log('====================getMiddleRightData=========================')

      let eventSourceForPeriod = new EventSource(
        "http://172.27.12.60:8080/get10SecondsData"
      );
      //当通往服务器的连接被打开
      eventSourceForPeriod.onopen = function () {};
      //当错误发生
      eventSourceForPeriod.onerror = function (e) {
        console.log(e);
      };
      //当接收到消息，此事件为默认事件
      eventSourceForPeriod.onmessage = function (event) {
        console.log("onmessage ===>>>", event);
        eventSourceForPeriod.close(); //关闭SSE链接
      };
      //服务器推送sentMessage事件
      eventSourceForPeriod.addEventListener(
        "10SecondData",
        function (event) {
          //此处根据需求编写业务逻辑
             console.log('====================event=========================')
          console.log('event', event)
          context.commit('increment', event)
        },
        false
      );
    },
    getLeftData(context) {
      let eventSourceForPeriod = new EventSource(
        "https://dashboard.1shitou.cn:8443/get10MinutesData?year=2021"
      );
      //当通往服务器的连接被打开
      eventSourceForPeriod.onopen = function () {};
      //当错误发生
      eventSourceForPeriod.onerror = function (e) {
        console.log(e);
      };
      //当接收到消息，此事件为默认事件
      eventSourceForPeriod.onmessage = function (event) {
        console.log("onmessage ===>>>", event);
        eventSourceForPeriod.close(); //关闭SSE链接
      };
      //服务器推送sentMessage事件
      eventSourceForPeriod.addEventListener(
        "push_data",
        function (event) {
          //此处根据需求编写业务逻辑
          console.log('event', event)
          context.commit('increment', event)
        },
        false
      );
    }
  },
  modules: {}
})