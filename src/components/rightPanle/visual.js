import * as echarts from 'echarts'

let pieOption = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  series: [{
    name: '来源渠道',
    type: 'pie',
    radius: '55%',
    center: ['50%', '50%'],
    data: [],
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  }]
};
let swiperData = [{
    "name": "郑存强",
    "province_name": "福建省",
    "city_name": "",
    "deal_time": "2021年1月13日 11:29:14",
    "techNormal": "1",
    "techPrime": "",
    "techPrimePackage": "",
    "techMobile": ""
  },
  {
    "name": "罗世明",
    "province_name": "重庆市",
    "city_name": "",
    "deal_time": "2021年1月11日 19:51:20",
    "techNormal": "1",
    "techPrime": "",
    "techPrimePackage": "",
    "techMobile": ""
  },
  {
    "name": "郑存强",
    "province_name": "福建省",
    "city_name": "",
    "deal_time": "2021年1月11日 19:19:50",
    "techNormal": "1",
    "techPrime": "",
    "techPrimePackage": "",
    "techMobile": ""
  },
  {
    "name": "未填",
    "province_name": "广东省",
    "city_name": "深圳市",
    "deal_time": "2020年12月30日 17:56:36",
    "techNormal": "1",
    "techPrime": "",
    "techPrimePackage": "",
    "techMobile": ""
  },
  {
    "name": "韩永峰",
    "province_name": "河北省",
    "city_name": "",
    "deal_time": "2020年12月30日 16:26:55",
    "techNormal": "1",
    "techPrime": "",
    "techPrimePackage": "",
    "techMobile": ""
  },
  {
    "name": "未填写",
    "province_name": "江苏省",
    "city_name": "苏州市",
    "deal_time": "2020年12月30日 16:07:58",
    "techNormal": "1",
    "techPrime": "",
    "techPrimePackage": "",
    "techMobile": ""
  },
  {
    "name": "耿立建",
    "province_name": "江苏省",
    "city_name": "徐州市",
    "deal_time": "2020年12月30日 12:00:00",
    "techNormal": "1",
    "techPrime": "",
    "techPrimePackage": "",
    "techMobile": ""
  },
  {
    "name": "尹光荣",
    "province_name": "",
    "city_name": "",
    "deal_time": "2020年12月30日 12:00:00",
    "techNormal": "1",
    "techPrime": "",
    "techPrimePackage": "",
    "techMobile": ""
  },
  {
    "name": "宋宏",
    "province_name": "",
    "city_name": "",
    "deal_time": "2020年12月30日 12:00:00",
    "techNormal": "1",
    "techPrime": "",
    "techPrimePackage": "",
    "techMobile": ""
  },
  {
    "name": "周金会",
    "province_name": "河北省",
    "city_name": "",
    "deal_time": "2020年12月30日 12:00:00",
    "techNormal": "1",
    "techPrime": "",
    "techPrimePackage": "",
    "techMobile": ""
  },
  {
    "name": "魏小璇",
    "province_name": "广东省",
    "city_name": "深圳市",
    "deal_time": "2020年12月30日 12:00:00",
    "techNormal": "1",
    "techPrime": "",
    "techPrimePackage": "",
    "techMobile": ""
  },
  {
    "name": "陈鹏",
    "province_name": "山东省",
    "city_name": "潍坊市",
    "deal_time": "2020年12月30日 12:00:00",
    "techNormal": "1",
    "techPrime": "",
    "techPrimePackage": "",
    "techMobile": ""
  },
  {
    "name": "丁毅",
    "province_name": "新疆维吾尔自治区",
    "city_name": "",
    "deal_time": "2020年12月30日 12:00:00",
    "techNormal": "1",
    "techPrime": "",
    "techPrimePackage": "",
    "techMobile": ""
  },
  {
    "name": "李宝玉",
    "province_name": "天津市",
    "city_name": "",
    "deal_time": "2020年12月30日 12:00:00",
    "techNormal": "1",
    "techPrime": "",
    "techPrimePackage": "",
    "techMobile": ""
  },
  {
    "name": "朱宝胜",
    "province_name": "山东省",
    "city_name": "青岛市",
    "deal_time": "2020年12月30日 12:00:00",
    "techNormal": "1",
    "techPrime": "",
    "techPrimePackage": "",
    "techMobile": ""
  },
  {
    "name": "姚金钢",
    "province_name": "",
    "city_name": "",
    "deal_time": "2020年12月30日 12:00:00",
    "techNormal": "1",
    "techPrime": "",
    "techPrimePackage": "",
    "techMobile": ""
  },
  {
    "name": "苏志刚",
    "province_name": "山东省",
    "city_name": "德州市",
    "deal_time": "2020年12月30日 12:00:00",
    "techNormal": "1",
    "techPrime": "",
    "techPrimePackage": "",
    "techMobile": ""
  },
  {
    "name": "浮绍文",
    "province_name": "河南省",
    "city_name": "信阳市",
    "deal_time": "2020年12月29日 21:02:20",
    "techNormal": "1",
    "techPrime": "",
    "techPrimePackage": "",
    "techMobile": ""
  },
  {
    "name": "未填",
    "province_name": "广东省",
    "city_name": "佛山市",
    "deal_time": "2020年12月29日 16:38:16",
    "techNormal": "1",
    "techPrime": "",
    "techPrimePackage": "",
    "techMobile": ""
  },
  {
    "name": "曹培成",
    "province_name": "河南省",
    "city_name": "周口市",
    "deal_time": "2020年12月29日 16:34:34",
    "techNormal": "1",
    "techPrime": "",
    "techPrimePackage": "",
    "techMobile": ""
  }
]
export {
  pieOption,
  swiperData
}