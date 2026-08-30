/*
 * 干饭罗盘 🧭 —— 内容数据文件（这就是应用的"后端"）
 * ============================================================
 * 改这里 → git push → GitHub Pages 一分钟内自动更新，无需碰 index.html
 *
 * 字段说明：
 *   id     唯一英文标识（随便起，别重复就行）
 *   name   店名
 *   cat    品类，六选一：包子粥品 / 西式快餐 / 中式快餐 / 面馆水饺 / 特色小吃 / 茶饮咖啡
 *   price  人均（元）
 *   distKm 距校门直线距离（km）
 *   hours  营业时间 [[开始,结束],...]，24小时制，"24:00"=到午夜；跨天如 06:00-02:00 直接写 ["06:00","02:00"]
 *   tier   早餐档位：gold=06:00起送(稳) / ontime=06:30起送(可以) / risky=07:00起(压线) / always=全天可送 / none=不做早餐
 *   tags   标签，可选项：辣 / 清淡 / 实惠 / 贵 / 快 / 管饱 / 健康 / 甜 / 咖啡
 *   img    店铺图片 URL【坑位已留好】——高德地图 API 返回的 alicdn 图片链接，填进来应用就会显示；
 *          留空或不写 = 不显示图片。食堂窗口条目同样支持。
 *   recs   招牌推荐（显示在结果卡上）
 *   note   备注
 */
window.GANFAN_DATA = {
  version: 2,
  updatedAt: "2026-08-30",
  school: "北京一零一中学(圆明园校区)",

  // 餐段定义。breakfast.tiers = 早餐段默认允许抽的档位（7:15 前送达硬约束）
  meals: {
    breakfast: { label: "早餐", emoji: "🌅", pool: ["takeout"], tiers: ["gold", "ontime", "always"] },
    lunch:     { label: "午餐", emoji: "☀️", pool: ["takeout", "canteen", "custom"] },
    dinner:    { label: "晚餐", emoji: "🌙", pool: ["takeout", "canteen", "custom"] },
  },

  // ---------------- 外卖池（来自 2026-08 高德实测报告，53 家）----------------
  takeout: [
    // == 包子粥品 ==
    { id: "jingyouju",  name: "京友居酱香包子铺(西苑店)", cat: "包子粥品", price: 26, distKm: 1.28, hours: [["06:00","21:00"]], tier: "gold",   tags: ["实惠","快"], recs: "热鲜肉包/豆腐脑/豆浆" },
    { id: "qf-yiheyuan",name: "庆丰包子铺(颐和园店)",     cat: "包子粥品", price: 32, distKm: 1.91, hours: [["06:30","19:00"]], tier: "ontime", tags: ["快"], recs: "热鲜肉包/豆腐脑/豆浆" },
    { id: "hangzhoubz", name: "杭州包子铺(中成大厦店)",   cat: "包子粥品", price: 16, distKm: 1.93, hours: [["07:00","23:00"]], tier: "risky",  tags: ["实惠"], recs: "热鲜肉包/豆腐脑/豆浆" },
    { id: "jiaheypin",  name: "嘉和一品(清华店)",         cat: "包子粥品", price: 27, distKm: 2.04, hours: [["06:30","22:00"]], tier: "ontime", tags: ["清淡"], recs: "皮蛋瘦肉粥/水煎包/小笼包" },
    { id: "yisuitang",  name: "一穗堂包子铺",             cat: "包子粥品", price: 13, distKm: 2.12, hours: [["07:00","19:00"]], tier: "risky",  tags: ["实惠"], recs: "热鲜肉包/豆腐脑/豆浆" },
    { id: "hanchuan",   name: "憨川包子",                 cat: "包子粥品", price: 24, distKm: 2.41, hours: [["07:00","19:00"]], tier: "risky",  tags: [], recs: "热鲜肉包/豆腐脑/豆浆" },
    { id: "zhenggongfu",name: "蒸功夫包子",               cat: "包子粥品", price: 12, distKm: 2.42, hours: [["06:00","21:30"]], tier: "gold",   tags: ["实惠"], recs: "热鲜肉包/豆腐脑/豆浆" },
    { id: "qf-nongda",  name: "庆丰包子铺(农大南路店)",   cat: "包子粥品", price: 22, distKm: 2.43, hours: [["06:00","21:00"]], tier: "gold",   tags: ["实惠"], recs: "热鲜肉包/豆腐脑/豆浆" },
    { id: "zaoyang",    name: "早阳鲜包(AI原点社区店)",   cat: "包子粥品", price: 8,  distKm: 2.80, hours: [["06:00","20:00"]], tier: "gold",   tags: ["实惠","快"], recs: "鲜包/豆浆" },
    { id: "manling",    name: "曼玲粥店(五道口店)",       cat: "包子粥品", price: 20, distKm: 3.00, hours: [["00:00","24:00"]], tier: "always", tags: ["清淡","实惠"], recs: "皮蛋瘦肉粥/南瓜粥" },
    { id: "qf-haidian", name: "庆丰包子铺(海淀黄庄店)",   cat: "包子粥品", price: 30, distKm: 3.10, hours: [["06:00","21:00"]], tier: "gold",   tags: [], recs: "热鲜肉包/炒肝" },
    { id: "qf-qinglong",name: "庆丰包子铺(青龙桥店)",     cat: "包子粥品", price: 34, distKm: 3.45, hours: [["06:00","21:00"]], tier: "gold",   tags: [], recs: "热鲜肉包/豆腐脑/豆浆" },
    { id: "qf-zgc",     name: "庆丰包子铺(中关村大街店)", cat: "包子粥品", price: 23, distKm: 3.61, hours: [["06:00","21:00"]], tier: "gold",   tags: ["实惠"], recs: "热鲜肉包/豆腐脑/豆浆" },
    { id: "qf-wanliu",  name: "庆丰包子铺(万柳中路店)",   cat: "包子粥品", price: 21, distKm: 4.08, hours: [["06:00","21:00"]], tier: "gold",   tags: ["实惠"], recs: "热鲜肉包/豆腐脑/豆浆" },
    { id: "wangjilian", name: "王继莲·非遗手工小笼包(知春路店)", cat: "包子粥品", price: 17, distKm: 4.16, hours: [["06:30","20:00"]], tier: "ontime", tags: ["实惠"], recs: "手工小笼包" },

    // == 西式快餐 ==
    { id: "kfc-xiyuan", name: "肯德基(西苑店)",           cat: "西式快餐", price: 38, distKm: 1.30, hours: [["06:00","22:00"]], tier: "gold",   tags: ["快"], recs: "吮指原味鸡/香辣鸡腿堡/帕尼尼" },
    { id: "mcd-qinghua",name: "麦当劳(清华大学店)",       cat: "西式快餐", price: 28, distKm: 1.78, hours: [["06:30","23:00"]], tier: "ontime", tags: ["快"], recs: "吉士蛋麦满分/麦辣鸡翅" },
    { id: "mcd-haidian",name: "麦当劳(海淀镇餐厅)",       cat: "西式快餐", price: 32, distKm: 2.34, hours: [["00:00","22:00"]], tier: "always", tags: ["快"], recs: "麦满分/薯条/麦乐鸡" },
    { id: "hls-nongda", name: "华莱士·全鸡汉堡(农大南路店)", cat: "西式快餐", price: 18, distKm: 2.96, hours: [["00:00","24:00"]], tier: "always", tags: ["实惠"], recs: "全鸡汉堡/鸡腿堡" },
    { id: "pizza-xiyuan",name: "必胜客(西苑店)",          cat: "西式快餐", price: 68, distKm: 1.38, hours: [["07:30","22:00"]], tier: "none",   tags: ["贵"], recs: "超级至尊披萨/意式肉酱面" },
    { id: "subway-qhfz",name: "赛百味(清华附中店)",       cat: "西式快餐", price: 25, distKm: 1.51, hours: [["08:00","21:00"]], tier: "none",   tags: ["健康","清淡"], recs: "金枪鱼/照烧鸡肉百味卷" },
    { id: "hls-beda",   name: "华莱士·全鸡汉堡(北京大学店)", cat: "西式快餐", price: 18, distKm: 1.99, hours: [["09:00","21:00"]], tier: "none",   tags: ["实惠","快"], recs: "全鸡汉堡" },
    { id: "domino",     name: "达美乐比萨(左岸店)",       cat: "西式快餐", price: 75, distKm: 2.08, hours: [["09:30","24:00"]], tier: "none",   tags: ["贵"], recs: "经典意式肉酱比萨", note: "承诺30分钟必达" },
    { id: "tastien",    name: "塔斯汀中国汉堡(海淀中关村店)", cat: "西式快餐", price: 20, distKm: 2.50, hours: [["10:00","22:00"]], tier: "none", tags: ["实惠","辣"], recs: "香辣鸡腿中国汉堡" },
    { id: "burgerking", name: "汉堡王(五道口店)",         cat: "西式快餐", price: 27, distKm: 2.77, hours: [["07:00","24:00"]], tier: "none",   tags: ["快"], recs: "火烤牛肉皇堡/洋葱圈" },

    // == 中式快餐 ==
    { id: "micun",      name: "米村拌饭(颐和星悦荟店)",   cat: "中式快餐", price: 39, distKm: 1.29, hours: [["10:00","21:00"]], tier: "none",   tags: ["快","管饱"], recs: "石锅牛肉拌饭/金枪鱼拌饭" },
    { id: "songlin",    name: "松林快餐(北大内)",         cat: "中式快餐", price: 10, distKm: 1.72, hours: [["06:30","14:00"],["16:00","21:30"]], tier: "ontime", tags: ["实惠","清淡"], recs: "家常套餐", note: "北大一食堂旁" },
    { id: "yonghe",     name: "永和大王(中关村)",         cat: "中式快餐", price: 20, distKm: 2.51, hours: [["06:00","21:00"]], tier: "gold",   tags: ["实惠","管饱"], recs: "宫保鸡丁饭/大油条/豆浆" },
    { id: "nancheng",   name: "南城香(中关村南路店)",     cat: "中式快餐", price: 32, distKm: 2.76, hours: [["06:00","21:30"]], tier: "gold",   tags: ["管饱","快"], recs: "安格斯肥牛饭/鲜肉小馄饨/电烤串" },
    { id: "chaoyixing", name: "超意兴把子肉(中关村店)",   cat: "中式快餐", price: 25, distKm: 2.95, hours: [["06:00","21:30"]], tier: "gold",   tags: ["实惠","管饱"], recs: "把子肉/四喜丸子/玉米粥" },
    { id: "laoxiangji", name: "老乡鸡(鼎好大厦店)",       cat: "中式快餐", price: 34, distKm: 2.23, hours: [["10:00","21:00"]], tier: "none",   tags: ["健康","清淡"], recs: "肥西老母鸡汤/葱油菜心便当" },
    { id: "yoshinoya",  name: "吉野家(鼎好大厦店)",       cat: "中式快餐", price: 30, distKm: 2.29, hours: [["08:00","20:30"]], tier: "none",   tags: ["管饱"], recs: "招牌牛肉饭/照烧煎鸡饭" },
    { id: "meizhou",    name: "眉州东坡(清华园店)",       cat: "中式快餐", price: 56, distKm: 2.67, hours: [["06:00","09:30"],["10:00","22:00"]], tier: "gold", tags: ["贵"], recs: "东坡肘子/川味小炒" },
    { id: "zhengongfu", name: "真功夫(上地三街店)",       cat: "中式快餐", price: 40, distKm: 3.79, hours: [["08:00","21:00"]], tier: "none",   tags: ["健康","清淡"], recs: "营养套餐/蒸排骨饭" },

    // == 面馆水饺 ==
    { id: "xijiade",    name: "喜家德虾仁水饺(星悦荟店)", cat: "面馆水饺", price: 41, distKm: 1.31, hours: [["09:30","21:30"]], tier: "none",   tags: ["清淡","快"], recs: "喜三鲜水饺/虾仁水饺" },
    { id: "touyihao",   name: "头壹号饸饹面·大油条(农大店)", cat: "面馆水饺", price: 32, distKm: 2.44, hours: [["06:00","21:00"]], tier: "gold", tags: ["管饱"], recs: "饸饹面/大油条" },
    { id: "lixiansheng",name: "李先生牛肉面大王(上地店)", cat: "面馆水饺", price: 36, distKm: 2.69, hours: [["06:00","02:00"]], tier: "gold",   tags: ["管饱"], recs: "牛肉面" },
    { id: "yujian",     name: "遇见小面(中关村5°LAB店)",  cat: "面馆水饺", price: 34, distKm: 2.38, hours: [["07:30","21:00"]], tier: "none",   tags: ["辣"], recs: "重庆小面/红碗豌杂面" },
    { id: "yuanji",     name: "袁记云饺(农大南路店)",     cat: "面馆水饺", price: 23, distKm: 2.62, hours: [["07:30","21:30"]], tier: "none",   tags: ["清淡"], recs: "鲜虾蟹籽云吞/玉米鲜肉水饺" },
    { id: "majiyong",   name: "马记永·兰州牛肉面(上地BHGMall店)", cat: "面馆水饺", price: 32, distKm: 2.86, hours: [["10:30","21:00"]], tier: "none", tags: ["管饱"], recs: "兰州牛肉面" },
    { id: "liangpi",    name: "凉皮先生·米线·肉夹馍·酸辣粉(鼎好店)", cat: "面馆水饺", price: 29, distKm: 2.22, hours: [["08:00","21:00"]], tier: "none", tags: ["辣","实惠"], recs: "秘制麻酱凉皮/肉夹馍" },

    // == 特色小吃 ==
    { id: "yipinshengjian", name: "一品生煎(中关村店)",   cat: "特色小吃", price: 29, distKm: 2.10, hours: [["06:30","20:30"]], tier: "ontime", tags: ["快"], recs: "生煎" },
    { id: "xishaoye",   name: "西少爷肉夹馍(中关村5号店)", cat: "特色小吃", price: 39, distKm: 2.37, hours: [["07:00","21:30"]], tier: "none",   tags: ["管饱"], recs: "经典腊汁肉夹馍/酸辣粉" },
    { id: "bailuyuan",  name: "白鹿原西安肉夹馍·油泼面(大融城店)", cat: "特色小吃", price: 25, distKm: 2.42, hours: [["10:30","21:30"]], tier: "none", tags: ["辣","实惠"], recs: "油泼面/腊汁肉夹馍" },

    // == 茶饮咖啡（只在"奶茶转盘"里抽，不进三餐池）==
    { id: "luckin",     name: "瑞幸咖啡(北大科技园B座店)", cat: "茶饮咖啡", price: 13, distKm: 1.00, hours: [["07:00","20:00"]], tier: "none", tags: ["咖啡","实惠","快"], recs: "生椰拿铁/橙C美式", note: "周末9点起" },
    { id: "xingbk",     name: "星巴克(龙湖颐和星悦荟店)", cat: "茶饮咖啡", price: 30, distKm: 1.41, hours: [["06:30","21:30"]], tier: "ontime", tags: ["咖啡"], recs: "馥芮白/焦糖玛奇朵/热可颂" },
    { id: "heytea",     name: "喜茶(北京龙湖星悦荟店)",   cat: "茶饮咖啡", price: 24, distKm: 1.29, hours: [["09:00","21:00"]], tier: "none",   tags: ["甜","快"], recs: "多肉葡萄/烤黑糖波波" },
    { id: "chagee-xyh", name: "霸王茶姬(北京龙湖颐和星悦荟店)", cat: "茶饮咖啡", price: 20, distKm: 1.43, hours: [["08:00","21:00"]], tier: "none", tags: ["甜"], recs: "伯牙绝弦/万里木兰" },
    { id: "mixue-beda", name: "蜜雪冰城(北京大学店)",     cat: "茶饮咖啡", price: 7,  distKm: 1.48, hours: [["09:00","22:00"]], tier: "none",   tags: ["甜","实惠"], recs: "新鲜冰柠檬水/珍珠奶茶" },
    { id: "chaibai",    name: "茶百道(中关村领展店)",     cat: "茶饮咖啡", price: 18, distKm: 2.75, hours: [["10:00","22:00"]], tier: "none",   tags: ["甜"], recs: "豆乳玉麒麟" },
    { id: "nayue",      name: "奈雪的茶(中关村大融城店)", cat: "茶饮咖啡", price: 18, distKm: 2.76, hours: [["08:00","22:00"]], tier: "none",   tags: ["甜"], recs: "霸气鲜果茶" },
    { id: "mixue-cf",   name: "蜜雪冰城(成府路店)",       cat: "茶饮咖啡", price: 9,  distKm: 2.91, hours: [["00:00","24:00"]], tier: "none",   tags: ["甜","实惠"], recs: "冰鲜柠檬水" },
    { id: "chagee-wdk", name: "霸王茶姬(五道口购物中心店)", cat: "茶饮咖啡", price: 20, distKm: 3.22, hours: [["00:00","24:00"]], tier: "none", tags: ["甜"], recs: "伯牙绝弦" },
    { id: "mixue-rmdx", name: "蜜雪冰城(人民大学西门店)", cat: "茶饮咖啡", price: 7,  distKm: 3.85, hours: [["00:00","24:00"]], tier: "none",   tags: ["甜","实惠"], recs: "珍珠奶茶" },
  ],

  // ---------------- 食堂（开学后补充）----------------
  canteen: {
    stalls: [
      // 开学后照这个格式加窗口。days=周几开（1=周一…7=周日），不写=每天都开；img 同样可以贴 alicdn 图片链接
      // { id: "c1-malatang", name: "一食堂·麻辣香锅窗口", price: 15, tags: ["辣","管饱"], menu: ["自选香锅","米饭"], days: [1,2,3,4,5], img: "" }
    ]
  },

  // ---------------- 自定义池（自带饭/泡面/小卖部……）----------------
  custom: [
    // 也可以之后在网页"设置"页里随手加（存在浏览器里，不用动这个文件）
    // { id: "my-1", name: "小卖部关东煮", cat: "特色小吃", price: 10, distKm: 0, tags: ["实惠","快"], meals: ["lunch","dinner"] },
  ]
};
