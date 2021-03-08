import * as echarts from 'echarts'
let orderVolume = {
  grid: {
    left: '0',
    top: '30',
    right: '0',
    bottom: '10',
    containLabel: true
  },
  legend: {

    top: 0,

    textStyle: {

      color: "#fff",

    },

    itemWidth: 10, // 设置宽度

    itemHeight: 10, // 设置高度

  },

  tooltip: {

    trigger: 'axis',

    axisPointer: { // 坐标轴指示器，坐标轴触发有效

      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'

    }

  },

  xAxis: {

    type: 'category',

    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],

    axisTick: { //---坐标轴 刻度

      show: true, //---是否显示

    },

    axisLine: { //---坐标轴 轴线

      show: true, //---是否显示

      lineStyle: {

        color: 'rgba(255,255,255,.1)',

        width: 1,

        type: 'dotted',

      },

    },

    axisLabel: { //X轴文字

      textStyle: {

        fontSize: 12,

        color: '#fff'

      },

    },

  },

  yAxis: {

    type: 'value',

    splitLine: { //分割线

      show: true,

      lineStyle: {
        color: 'rgba(255,255,255,.1)',

        width: 1,
        type: 'dotted'

      }

    },

    axisLabel: { //Y轴刻度值

      formatter: '{value}',

      textStyle: {

        fontSize: 12,

        color: '#fff'

      },

    },

    axisLine: { //---坐标轴 轴线

      show: false, //---是否显示

    },

  },
  series: [{

    name: '原方案',

    type: 'bar',

    data: [3, 7, 4, 9, 3, 5],

    barWidth: 5,

    barGap: 0.5, //柱子之间间距 //柱图宽度      两种情况都要设置，设置series 中对应数据柱形的itemStyle属性下的emphasis和normal的barBorderRadius属性初始化时候圆角  鼠标移上去圆角

    itemStyle: {

      normal: {
        barBorderRadius: 50,
        color: "#446ACF",

      }

    },

  }, {

    name: '建议方案',

    type: 'bar',
    data: [6, 2, 5, 2, 5, 6],
    barWidth: 5, //柱图宽度
    barGap: 0.5,
    itemStyle: {

      normal: { //设置颜色的渐变
        barBorderRadius: 50,
        color: "#4fb69d",

      }

    },

  }]

};
let softwareVolume = {

  tooltip: { //鼠标指上时的标线
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: '#fff'
      }
    }
  },
  legend: {
    icon: 'rect',
    itemWidth: 14,
    itemHeight: 5,
    itemGap: 13,
    data: ['普及版', '至尊版', '至尊套餐', '科技经典版'],
    right: '10px',
    top: '0px',
    textStyle: {
      fontSize: 12,
      color: '#fff'
    }
  },
  grid: {
    // x: 50,
    y: 25,
    x2: 15,
    y2: 25,
  },
  xAxis: [{
    type: 'category',
    boundaryGap: false,
    axisLine: {
      lineStyle: {
        color: '#57617B'
      }
    },
    axisLabel: {
      textStyle: {
        color: '#fff',
      },
    },
    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  }],
  yAxis: [{

    nameTextStyle: {
      padding: [230, 230, 230, 230]
    },
    type: 'value',
    // margin:10,
    // axisTick: {
    //     show: false
    // },
    axisLine: {
      lineStyle: {
        color: '#57617B',

      }
    },
    axisLabel: {
      // padding:-10,
      textStyle: {
        fontSize: 12,
        color: '#fff',
      },
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(255,255,255,.2)',
        type: 'dotted',
      }
    }
  }],
  series: [{
    name: '普及版',
    type: 'line',
    smooth: true,
    lineStyle: {
      normal: {
        width: 2
      }
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(137, 189, 27, 0.3)'
        }, {
          offset: 0.8,
          color: 'rgba(137, 189, 27, 0)'
        }], false),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10
      }
    },
    itemStyle: {
      normal: {
        color: 'rgb(137,189,27)'
      }
    },
    data: [2465, 2766, 4576, 3095, 2113, 2509, 3788, 3280, 2731, 1702, 2141, 2426]
  }, {
    name: '至尊版',
    type: 'line',
    smooth: true,
    lineStyle: {
      normal: {
        width: 2
      }
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(0, 136, 212, 0.3)'
        }, {
          offset: 0.8,
          color: 'rgba(0, 136, 212, 0)'
        }], false),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10
      }
    },
    itemStyle: {
      normal: {
        color: 'rgb(0,136,212)'
      }
    },
    data: [15, 16, 39, 27, 24, 38, 39, 42, 28, 37, 30, 37]
  }, {
    name: '至尊套餐',
    type: 'line',
    smooth: true,
    lineStyle: {
      normal: {
        width: 2
      }
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(219, 50, 51, 0.3)'
        }, {
          offset: 0.8,
          color: 'rgba(219, 50, 51, 0)'
        }], false),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10
      }
    },
    itemStyle: {
      normal: {
        color: 'rgb(219,50,51)'
      }
    },
    data: [412, 499, 938, 845, 612, 606, 1150, 869, 941, 580, 727, 455]
  }, {
    name: '科技经典版',
    type: 'line',
    smooth: true,
    lineStyle: {
      normal: {
        width: 2
      }
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(32, 208, 228, 0.3)'
        }, {
          offset: 0.8,
          color: 'rgba(32, 208, 228, 0)'
        }], false),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowBlur: 10
      }
    },
    itemStyle: {
      normal: {
        color: 'rgb(32, 208, 228)'
      }
    },
    data: [345, 393, 725, 571, 380, 384, 826, 475, 535, 231, 399, 658]
  }]
};
let touguSoftwareVolume = {
  grid: {
    left: '0',
    top: '30',
    right: '0',
    bottom: '10',
    containLabel: true
  },
  legend: {

    top: 0,

    textStyle: {

      color: "#fff",

    },

    itemWidth: 10, // 设置宽度

    itemHeight: 10, // 设置高度

  },

  tooltip: {

    trigger: 'axis',

    axisPointer: { // 坐标轴指示器，坐标轴触发有效

      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'

    }

  },

  xAxis: {

    type: 'category',

    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],

    axisTick: { //---坐标轴 刻度

      show: true, //---是否显示

    },

    axisLine: { //---坐标轴 轴线

      show: true, //---是否显示

      lineStyle: {

        color: 'rgba(255,255,255,.1)',

        width: 1,

        type: 'dotted',

      },

    },

    axisLabel: { //X轴文字

      textStyle: {

        fontSize: 12,

        color: '#fff'

      },

    },

  },

  yAxis: {

    type: 'value',

    splitLine: { //分割线

      show: true,

      lineStyle: {
        color: 'rgba(255,255,255,.1)',

        width: 1,
        type: 'dotted'

      }

    },

    axisLabel: { //Y轴刻度值

      formatter: '{value}',

      textStyle: {

        fontSize: 12,

        color: '#fff'

      },

    },

    axisLine: { //---坐标轴 轴线

      show: false, //---是否显示

    },

  },
  series: [{

    name: '黄金版',

    type: 'bar',

    data: [38, 86, 119, 61, 47, 31, 52, 35, 5, 0, 0, 1],

    barWidth: 5,

    barGap: 0.5, //柱子之间间距 //柱图宽度      两种情况都要设置，设置series 中对应数据柱形的itemStyle属性下的emphasis和normal的barBorderRadius属性初始化时候圆角  鼠标移上去圆角

    itemStyle: {

      normal: {
        barBorderRadius: 50,
        color: "#446ACF",

      }

    },

  }, {

    name: '铂金版',

    type: 'bar',
    data: [46, 108, 126, 62, 50, 46, 69, 52, 8, 1, 0, 0],
    barWidth: 5, //柱图宽度
    barGap: 0.5,
    itemStyle: {

      normal: { //设置颜色的渐变
        barBorderRadius: 50,
        color: "#4fb69d",

      }

    },

  }]

};
export {
  orderVolume,
  softwareVolume,
  touguSoftwareVolume
}