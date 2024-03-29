var app = new Vue({
  el: '#page',
  data: {
    网页名称: '简历',
    姓名: '陈棣',
    号码: '18914502827',
    邮箱: '2430968946@qq.com',
    个人网页: 'www.baidu.com',
    地址: '江苏省靖江市',
    职业: '工业设计师/UI设计师',
    头像地址: 'images/1.jpg',
    /** 支持类型有[微博,qq,git,instagram]*/
    联系方式: [
      {
        类型: '微博',
        地址: 'https://weibo.com/u/6083360107'
      },
      {
        类型: 'qq',
        地址: '2430968946'
      },
      {
        类型: 'git',
        地址: '23423'
      },
      {
        类型: 'instagram',
        地址: '234234'
      }
    ],
    关于我标题: '你好',
    关于我内容: '我有良好的心态和责任感，暑期曾在网络上及淘宝网店接设计单主要做logo和海报，多次修改稿件不曾退单或转单，良好的学习能力，在校期间通过自学考过英语四级，吃苦耐劳，勤于学习新的知识和技能来提高自己',
    /** 个人简历*/
    工作经历: [
      {
        职业名称: '实习生',
        公司名称: '大润发',
        时间: '2017.1 - 2017。2',
        介绍: '在大润发美术部门担任助理，负责春节前的促销和宣传活动的海报传单的制作和打印'
      },
      {
        职业名称: '实习生',
        公司名称: '甲骨文华育兴业公司',
        时间: '2019.7.1 - 2019.7.12',
        介绍: '在甲骨文公司进行实习培训，培训期间曾为烤肉店制作过logo及宣传海报'
      },
      {
        职业名称: '实习生',
        公司名称: '北京纳恩博平衡车公司',
        时间: '2017.7.16 - 2019.7.17',
        介绍: '在纳恩博平衡车公司进行参观学习并与设计师进行讨论交流'
      },
    ],
    /** 教育经历*/
    教育经历: [
      {
        学段: '初中',
        学校名称: '靖江市第三中学',
        时间: '2010 - 2013',
      },
      {
        学段: '高中',
        学校名称: '靖江市第一高级中学',
        时间: '2013 - 2016',
      },
      {
        学段: '大学',
        学校名称: '黑龙江科技大学',
        时间: '2016 - 2020',
      },
    ],
    我的能力: [
      {
        名称: '手绘',
        图标: '学校名称',
        介绍: '通过绘画的方式来绘制产品草图'
      },
      {
        名称: '色彩构成',
        图标: '学校名称',
        介绍: '通过对色彩的了解为产品选择适宜的颜色'
      },
      {
        名称: '人机工程学',
        图标: '学校名称',
        介绍: '运用人机工程学使设计出的产品更适合人们使用'
      },
      {
        名称: '英语六级',
        图标: '学校名称',
        介绍: '基础的英语读写能力'
      },
      {
        名称: 'Office办公软件',
        图标: '学校名称',
        介绍: '基础的电脑办公软件操作'
      },
      {
        名称: '设计类软件',
        图标: '学校名称',
        介绍: '设计产品所需的软件'
      }
    ],
    /** 我的技能*/
    我的技能: [
      {
        名称: 'PS',
        进度: 70,
      },
      {
        名称: 'AI',
        进度: 60
      },
      {
        名称: 'Rhino',
        进度: 40
      },
      {
        名称: '3DS',
        进度: 60
      },
      {
        名称: 'Keyshot',
        进度: 50
      },
      {
        名称: 'CDR',
        进度: 50
      },
      {
        名称: 'C4D',
        进度: 20
      },
      {
        名称: 'Office',
        进度: 80
      }
    ],
    /** 我的作品*/
    我的作品: [
      {
        名称: '手绘',
        地址: '',
        图片: 'images/timg.jpg',
        简介: '作品'
      },
      {
        名称: '平面',
        地址: 'https://pan.baidu.com/s/1EOxSC57-iWcDLNH_uzWjRA',
        图片: 'images/12.jpg',
        简介: '作品'
      },
      {
        名称: '犀牛建模',
        地址: 'https://pan.baidu.com/s/1lznZabWLjkJ7IyRMjsVBFQ',
        图片: 'images/13.jpg',
        简介: '作品'
      }, {
        名称: '3D建模',
        地址: 'https://pan.baidu.com/s/1q8IbCGjCdUQbDccaKyPaew',
        图片: 'images/14.jpg',
        简介: '作品'
      }, {
        名称: 'UI',
        地址: 'https://pan.baidu.com/s/1-a_A2pncYu2zatcf2sOpcw',
        图片: 'images/15.jpg',
        简介: '作品'
      }, {
        名称: '网页',
        地址: 'https://pan.baidu.com/s/19Oz8Tvrov2ztzVi_moB_LQ',
        图片: 'images/16.jpg',
        简介: '作品'
      }, {
        名称: 'CIS手册',
        地址: 'www.baidu.com',
        图片: 'images/17.jpg',
        简介: '作品'
      }, {
        名称: '展板',
        地址: 'https://pan.baidu.com/s/1E0znOQEPRBj7Lo9QFu9iGQ',
        图片: 'images/18.jpg',
        简介: '作品'
      }
    ]
  },
  mounted () {
    document.title = this.网页名称
  }
})