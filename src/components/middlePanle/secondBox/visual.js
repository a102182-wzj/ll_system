import * as echarts from 'echarts'
 let nowClientWidth = document.documentElement.clientWidth;
 // 换算方法
 let nowSize = function (val, initWidth = 1920) {
   return val * (nowClientWidth / initWidth);
 };
let optionMap = {
  eventSource: undefined,
  queryParams: {
    queryString: "",
    queryBegintime: "",
    queryEndtime: ""
  },
  // 明细
  dataList: [],
  // backgroundColor: "#040f3c",
  // title: {
  //     text: "推广分析",
  //     subtext: "白单成交数量",
  //     // sublink: 'http://www.pm25.in',
  //     left: "center",
  //     textStyle: {
  //         color: "#fff"
  //     }
  // },
  tooltip: {
    trigger: "item"
  },
  legend: {
    orient: "vertical",
    y: "top",
    x: "left",
    data: ["成交", "白单"],
    textStyle: {
      color: "#fff"
    }
  },
  /* visualMap: {
    min: 0,
    max: 200,
    calculable: true,
    color: ['#d94e5d', '#eac736', '#50a3ba'],
    textStyle: {
      color: '#fff'
    }
  }, */
  geo: {
    map: "china",
    roam: true,
    label: {
      emphasis: {
        show: false
      }
    },
    itemStyle: {
      normal: {
        areaColor: "rgba(255,255,255,0)",
        borderColor: '#0177ff'
      },
      emphasis: {
        areaColor: '#071537'
      }
    }
  },
  series: [{
      name: "成交",
      type: "scatter",
      coordinateSystem: "geo",
      data: [],
      symbolSize: val => val[2] / 5,
      tooltip: {
        formatter: function (val) {
          return val.name + ": " + val.value[2];
        }
      },
      itemStyle: {
        normal: {
          color: "#f45001"
        }
      },
      zlevel: 2
    },
    // 显示成交Top 3
    {
      name: "成交",
      type: "effectScatter",
      coordinateSystem: "geo",
      data: [],
      symbolSize: val => val[2] / 5,
      showEffectOn: "render",
      rippleEffect: {
        brushType: "stroke"
      },
      hoverAnimation: true,
      tooltip: {
        formatter: function (val) {
          return val.name + ": " + val.value[2];
        }
      },
      label: {
        normal: {
          formatter: function (val) {
            return val.name + ": " + val.value[2];
          },
          position: "right",
          show: false
        }
      },
      itemStyle: {
        normal: {
          fontSize: 8,
          color: "#f45001",
          shadowBlur: 10,
          shadowColor: "#333"
        }
      },
      zlevel: 2
    },
    {
      name: "白单",
      type: "scatter",
      coordinateSystem: "geo",
      data: [],
      symbolSize: val => val[2] / 100,
      tooltip: {
        formatter: function (val) {
          return val.name + ": " + val.value[2];
        }
      },
      itemStyle: {
        normal: {
          color: "#FFFFFF"
        }
      },
      zlevel: 2
    },
    // 显示白单Top 3
    {
      name: "白单",
      type: "effectScatter",
      coordinateSystem: "geo",
      data: [],
      symbolSize: val => val[2] / 100,
      showEffectOn: "render",
      rippleEffect: {
        brushType: "stroke"
      },
      hoverAnimation: true,
      tooltip: {
        formatter: function (val) {
          return val.name + ": " + val.value[2];
        }
      },
      label: {
        normal: {
          formatter: function (val) {
            return val.name + ": " + val.value[2];
          },
          position: "right",
          show: false
        }
      },
      itemStyle: {
        normal: {
          fontSize: 8,
          color: "#FFFFFF",
          shadowBlur: 10,
          shadowColor: "#333"
        }
      },
      zlevel: 1
    }
  ]
}
let dealTop10Option = {
  color: ["#CD2626"],
  title: {
    text: 'top5 成交城市',
    textStyle: {
      color: 'white'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['成交'],
    textStyle: {

      color: "#fff",

    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01],
    axisLabel: {
      color: 'white'
    }
  },
  yAxis: {
    type: 'category',
    data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
    axisLabel: {
      color: 'white'
    }
  },
  series: [{
    stack: '总量',
    label: {
      show: true,
      position: 'inside',
      fontSize: nowSize(12),
      rich: {
        name: {
          textBorderColor: '#fff'
        }
      }
    },
    name: '2011年',
    type: 'bar',
    data: [18203, 23489, 29034, 104970, 131744, 630230]
  }, ]
};
let whiteTop10Option = {
  color: ["rgba(176, 178, 180, 1)"],
  title: {
    text: 'top5 白单城市',
    textStyle: {
      color: 'white'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['成交'],
    textStyle: {

      color: "#fff",

    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01],
    axisLabel: {
      color: 'white'
    }
  },
  yAxis: {
    type: 'category',
    data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
    axisLabel: {
      color: 'white'
    }
  },
  series: [{
    stack: '总量',
    label: {
      show: true,
      position: 'inside',
      fontSize: nowSize(12),
      rich: {
        name: {
          textBorderColor: '#fff'
        }
      }
    },
    name: '2011年',
    type: 'bar',
    data: [18203, 23489, 29034, 104970, 131744, 630230]
  }, ]
};

export {
  optionMap,
  dealTop10Option,
  whiteTop10Option
}