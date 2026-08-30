/*
 * 干饭罗盘 —— 内容数据文件（这就是应用的"后端"）
 * ============================================================
 * 改这里、git push、GitHub Pages 一分钟内自动更新，无需碰 index.html
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
 *   img    店铺图片 URL【坑位已留好】——高德系图床链接（aos-comment.amap.com / store.is.autonavi.com /
 *          img.alicdn.com 均可），填进来应用就会显示；留空或不写 = 不显示图片。食堂窗口条目同样支持。
 *   recs   招牌推荐（显示在结果卡上）
 *   note   备注
 */
window.GANFAN_DATA = {
  version: 5,
  updatedAt: "2026-08-30",
  school: "北京一零一中学(圆明园校区)",

  // 餐段定义。breakfast.tiers = 早餐段默认允许抽的档位（7:15 前送达硬约束）
  // drinks 段只从 cat=="茶饮咖啡" 的条目里抽；latenight 段只出打烊前还开着的店
  meals: {
    breakfast: { label: "早餐", pool: ["takeout"], tiers: ["gold", "ontime", "always"] },
    lunch:     { label: "午餐", pool: ["takeout", "canteen", "custom"] },
    dinner:    { label: "晚餐", pool: ["takeout", "canteen", "custom"] },
    drinks:    { label: "饮料", pool: ["takeout"] },
    latenight: { label: "宵夜", pool: ["takeout"] },
  },

  // ---------------- 外卖池（来自 2026-08 高德实测报告，55 家）----------------
  takeout: [
    // == 包子粥品 ==
    { id: "jingyouju", img: "https://aos-comment.amap.com/B0JRUH30PV/comment/content_media_external_file_1000006837_ss__1765416482372_54069188.jpg",  name: "京友居酱香包子铺(西苑店)", cat: "包子粥品", price: 26, distKm: 1.28, hours: [["06:00","21:00"]], tier: "gold",   tags: ["实惠","快"], recs: "热鲜肉包/豆腐脑/豆浆" },
    { id: "qf-yiheyuan",name: "庆丰包子铺(颐和园店)",     cat: "包子粥品", price: 32, distKm: 1.91, hours: [["06:30","19:00"]], tier: "ontime", tags: ["快"], recs: "热鲜肉包/豆腐脑/豆浆" },
    { id: "hangzhoubz", name: "杭州包子铺(中成大厦店)",   cat: "包子粥品", price: 16, distKm: 1.93, hours: [["07:00","23:00"]], tier: "risky",  tags: ["实惠"], recs: "热鲜肉包/豆腐脑/豆浆" },
    { id: "jiaheypin",  name: "嘉和一品(清华店)",         cat: "包子粥品", price: 27, distKm: 2.04, hours: [["06:30","22:00"]], tier: "ontime", tags: ["清淡"], recs: "皮蛋瘦肉粥/水煎包/小笼包" },
    { id: "yisuitang",  name: "一穗堂包子铺",             cat: "包子粥品", price: 13, distKm: 2.12, hours: [["07:00","19:00"]], tier: "risky",  tags: ["实惠"], recs: "热鲜肉包/豆腐脑/豆浆" },
    { id: "hanchuan", img: "https://store.is.autonavi.com/showpic/ec79e4fdc7d06a560000003039596096?type=pic",   name: "憨川包子",                 cat: "包子粥品", price: 24, distKm: 2.41, hours: [["07:00","19:00"]], tier: "risky",  tags: [], recs: "热鲜肉包/豆腐脑/豆浆" },
    { id: "zhenggongfu",name: "蒸功夫包子",               cat: "包子粥品", price: 12, distKm: 2.42, hours: [["06:00","21:30"]], tier: "gold",   tags: ["实惠"], recs: "热鲜肉包/豆腐脑/豆浆" },
    { id: "qf-nongda",  name: "庆丰包子铺(农大南路店)",   cat: "包子粥品", price: 22, distKm: 2.43, hours: [["06:00","21:00"]], tier: "gold",   tags: ["实惠"], recs: "热鲜肉包/豆腐脑/豆浆" },
    { id: "zaoyang", img: "https://store.is.autonavi.com/showpic/cd8014b312d430598c051632f16f7ad5",    name: "早阳鲜包(AI原点社区店)",   cat: "包子粥品", price: 8,  distKm: 2.80, hours: [["06:00","20:00"]], tier: "gold",   tags: ["实惠","快"], recs: "鲜包/豆浆" },
    { id: "manling", img: "https://store.is.autonavi.com/query_pic?id=stc3277489-d22a-4254-abee-ea1945a1b0e5&user=search&operate=original",    name: "曼玲粥店(五道口店)",       cat: "包子粥品", price: 20, distKm: 3.00, hours: [["00:00","24:00"]], tier: "always", tags: ["清淡","实惠"], recs: "皮蛋瘦肉粥/南瓜粥" },
    { id: "qf-haidian", name: "庆丰包子铺(海淀黄庄店)",   cat: "包子粥品", price: 30, distKm: 3.10, hours: [["06:00","21:00"]], tier: "gold",   tags: [], recs: "热鲜肉包/炒肝" },
    { id: "qf-qinglong",name: "庆丰包子铺(青龙桥店)",     cat: "包子粥品", price: 34, distKm: 3.45, hours: [["06:00","21:00"]], tier: "gold",   tags: [], recs: "热鲜肉包/豆腐脑/豆浆" },
    { id: "qf-zgc",     name: "庆丰包子铺(中关村大街店)", cat: "包子粥品", price: 23, distKm: 3.61, hours: [["06:00","21:00"]], tier: "gold",   tags: ["实惠"], recs: "热鲜肉包/豆腐脑/豆浆" },
    { id: "qf-wanliu",  name: "庆丰包子铺(万柳中路店)",   cat: "包子粥品", price: 21, distKm: 4.08, hours: [["06:00","21:00"]], tier: "gold",   tags: ["实惠"], recs: "热鲜肉包/豆腐脑/豆浆" },
    { id: "wangjilian", img: "https://aos-comment.amap.com/B0K24RE7ZZ/comment/content_media_external_file_1000014052_ss__1769171179362_44769955.jpg", name: "王继莲·非遗手工小笼包(知春路店)", cat: "包子粥品", price: 17, distKm: 4.16, hours: [["06:30","20:00"]], tier: "ontime", tags: ["实惠"], recs: "手工小笼包" },

    // == 西式快餐 ==
    { id: "kfc-xiyuan", img: "https://store.is.autonavi.com/showpic/62e8c0ce15bcc103e31e666dae763967", name: "肯德基(西苑店)",           cat: "西式快餐", price: 38, distKm: 1.30, hours: [["06:00","22:00"]], tier: "gold",   tags: ["快"], recs: "吮指原味鸡/香辣鸡腿堡/帕尼尼" },
    { id: "kfc-wdk", img: "https://store.is.autonavi.com/showpic/62e8c0ce15bcc103e31e666dae763967", name: "肯德基(五道口店)", cat: "西式快餐", price: 29, distKm: 2.93, hours: [["00:00","24:00"]], tier: "gold", tags: ["快"], recs: "吮指原味鸡/香辣鸡腿堡", note: "24小时全天候接单" },
    { id: "mcd-qinghua",name: "麦当劳(清华大学店)",       cat: "西式快餐", price: 28, distKm: 1.78, hours: [["06:30","23:00"]], tier: "ontime", tags: ["快"], recs: "吉士蛋麦满分/麦辣鸡翅" },
    { id: "mcd-haidian", img: "https://aos-comment.amap.com/B000A8405T/comment/content_media_external_file_54421_ss__1767759736855_32372304.jpg",name: "麦当劳(海淀镇餐厅)",       cat: "西式快餐", price: 32, distKm: 2.34, hours: [["00:00","22:00"]], tier: "always", tags: ["快"], recs: "麦满分/薯条/麦乐鸡" },
    { id: "hls-nongda", img: "https://store.is.autonavi.com/showpic/c406ecbf863a7c93518b1bad6a34294e?operate=original", name: "华莱士·全鸡汉堡(农大南路店)", cat: "西式快餐", price: 18, distKm: 2.96, hours: [["00:00","24:00"]], tier: "always", tags: ["实惠"], recs: "全鸡汉堡/鸡腿堡" },
    { id: "pizza-xiyuan", img: "https://aos-comment.amap.com/B000A8VSWK/comment/file_media_Photo_148_IMG_1767256045_130_IMG_20260101_162545_jpg_ss__1767256167409_97363472.jpg",name: "必胜客(西苑店)",          cat: "西式快餐", price: 68, distKm: 1.38, hours: [["07:30","22:00"]], tier: "none",   tags: ["贵"], recs: "超级至尊披萨/意式肉酱面" },
    { id: "subway-qhfz",name: "赛百味(清华附中店)",       cat: "西式快餐", price: 25, distKm: 1.51, hours: [["08:00","21:00"]], tier: "none",   tags: ["健康","清淡"], recs: "金枪鱼/照烧鸡肉百味卷" },
    { id: "hls-beda",   name: "华莱士·全鸡汉堡(北京大学店)", cat: "西式快餐", price: 18, distKm: 1.99, hours: [["09:00","21:00"]], tier: "none",   tags: ["实惠","快"], recs: "全鸡汉堡" },
    { id: "domino",     name: "达美乐比萨(左岸店)",       cat: "西式快餐", price: 75, distKm: 2.08, hours: [["09:30","24:00"]], tier: "none",   tags: ["贵"], recs: "经典意式肉酱比萨", note: "承诺30分钟必达" },
    { id: "tastien", img: "https://store.is.autonavi.com/query_pic?id=st188d3e8c-ef58-4506-9325-47904f7f9763&user=search&operate=original",    name: "塔斯汀中国汉堡(海淀中关村店)", cat: "西式快餐", price: 20, distKm: 2.50, hours: [["10:00","22:00"]], tier: "none", tags: ["实惠","辣"], recs: "香辣鸡腿中国汉堡" },
    { id: "burgerking", img: "https://img.alicdn.com/imgextra/i4/O1CN01i3E7991WR7lDchIS9_!!6000000002784-49-tps-931-931.webp", name: "汉堡王(五道口店)",         cat: "西式快餐", price: 27, distKm: 2.77, hours: [["07:00","24:00"]], tier: "none",   tags: ["快"], recs: "火烤牛肉皇堡/洋葱圈" },

    // == 中式快餐 ==
    { id: "micun",      name: "米村拌饭(颐和星悦荟店)",   cat: "中式快餐", price: 39, distKm: 1.29, hours: [["10:00","21:00"]], tier: "none",   tags: ["快","管饱"], recs: "石锅牛肉拌饭/金枪鱼拌饭" },
    { id: "songlin", img: "https://aos-comment.amap.com/B000A91KB5/comment/df1ffef8f5747aacacfa53cbf34a8541_2048_2048_80.jpg",    name: "松林快餐(北大内)",         cat: "中式快餐", price: 10, distKm: 1.72, hours: [["06:30","14:00"],["16:00","21:30"]], tier: "ontime", tags: ["实惠","清淡"], recs: "家常套餐", note: "北大一食堂旁" },
    { id: "yonghe", img: "https://aos-comment.amap.com/B0L1ZCO8RG/comment/3CBC6CD7_25B2_406E_A259_A2E4E2DDAFA3_L0_001_1179_137_1772108579955_00274414.jpg",     name: "永和大王(中关村)",         cat: "中式快餐", price: 20, distKm: 2.51, hours: [["06:00","21:00"]], tier: "gold",   tags: ["实惠","管饱"], recs: "宫保鸡丁饭/大油条/豆浆" },
    { id: "nancheng", img: "https://store.is.autonavi.com/query_pic?id=st1f4d36d8-a299-4197-a0e1-9c6f3c864e58&user=search&operate=original",   name: "南城香(中关村南路店)",     cat: "中式快餐", price: 32, distKm: 2.76, hours: [["06:00","21:30"]], tier: "gold",   tags: ["管饱","快"], recs: "安格斯肥牛饭/鲜肉小馄饨/电烤串" },
    { id: "chaoyixing", img: "https://aos-comment.amap.com/B0LAONJ2UW/comment/content_media_external_file_100000538_1769556840244_84914182.jpg", name: "超意兴把子肉(中关村店)",   cat: "中式快餐", price: 25, distKm: 2.95, hours: [["06:00","21:30"]], tier: "gold",   tags: ["实惠","管饱"], recs: "把子肉/四喜丸子/玉米粥" },
    { id: "laoxiangji", img: "https://store.is.autonavi.com/query_pic?id=stdf876988-05b0-4853-b6aa-9275d4cd3bb1&user=search&operate=original", name: "老乡鸡(鼎好大厦店)",       cat: "中式快餐", price: 34, distKm: 2.23, hours: [["10:00","21:00"]], tier: "none",   tags: ["健康","清淡"], recs: "肥西老母鸡汤/葱油菜心便当" },
    { id: "yoshinoya", img: "https://store.is.autonavi.com/showpic/6e5a9c7aac879c1a0000002095922383?type=pic",  name: "吉野家(鼎好大厦店)",       cat: "中式快餐", price: 30, distKm: 2.29, hours: [["08:00","20:30"]], tier: "none",   tags: ["管饱"], recs: "招牌牛肉饭/照烧煎鸡饭" },
    { id: "meizhou", img: "https://store.is.autonavi.com/query_pic?id=st9c54501e-38ad-4c75-b97e-eee4c456f310&user=search&operate=original",    name: "眉州东坡(清华园店)",       cat: "中式快餐", price: 56, distKm: 2.67, hours: [["06:00","09:30"],["10:00","22:00"]], tier: "gold", tags: ["贵"], recs: "东坡肘子/川味小炒" },
    { id: "zhengongfu", img: "https://store.is.autonavi.com/showpic/72cba035c84896e8307d3574408760c9?operate=original", name: "真功夫(上地三街店)",       cat: "中式快餐", price: 40, distKm: 3.79, hours: [["08:00","21:00"]], tier: "none",   tags: ["健康","清淡"], recs: "营养套餐/蒸排骨饭" },

    // == 面馆水饺 ==
    { id: "xijiade", img: "https://store.is.autonavi.com/showpic/0223cf2ada1d77cda3e8cf000bf57389",    name: "喜家德虾仁水饺(星悦荟店)", cat: "面馆水饺", price: 41, distKm: 1.31, hours: [["09:30","21:30"]], tier: "none",   tags: ["清淡","快"], recs: "喜三鲜水饺/虾仁水饺" },
    { id: "touyihao", img: "https://store.is.autonavi.com/showpic/e1df1bd24ac490690000001063700972?type=pic",   name: "头壹号饸饹面·大油条(农大店)", cat: "面馆水饺", price: 32, distKm: 2.44, hours: [["06:00","21:00"]], tier: "gold", tags: ["管饱"], recs: "饸饹面/大油条" },
    { id: "lixiansheng", img: "https://img.alicdn.com/imgextra/i4/O1CN01SSftMD1GNt7827d6J_!!6000000000611-0-tps-600-600.jpg",name: "李先生牛肉面大王(上地店)", cat: "面馆水饺", price: 36, distKm: 2.69, hours: [["06:00","02:00"]], tier: "gold",   tags: ["管饱"], recs: "牛肉面" },
    { id: "yujian", img: "https://store.is.autonavi.com/query_pic?id=st76ac7abf-ce14-451a-91eb-7b65c7c54343&user=search&operate=original",     name: "遇见小面(中关村5°LAB店)",  cat: "面馆水饺", price: 34, distKm: 2.38, hours: [["07:30","21:00"]], tier: "none",   tags: ["辣"], recs: "重庆小面/红碗豌杂面" },
    { id: "yuanji", img: "https://store.is.autonavi.com/showpic/24d8c4f250f7147f3ac600fc4842f0ff?operate=original",     name: "袁记云饺(农大南路店)",     cat: "面馆水饺", price: 23, distKm: 2.62, hours: [["07:30","21:30"]], tier: "none",   tags: ["清淡"], recs: "鲜虾蟹籽云吞/玉米鲜肉水饺" },
    { id: "majiyong", img: "https://store.is.autonavi.com/query_pic?id=stc0444e99-56e7-42fb-bccc-89bf671bff76&user=search&operate=original",   name: "马记永·兰州牛肉面(上地BHGMall店)", cat: "面馆水饺", price: 32, distKm: 2.86, hours: [["10:30","21:00"]], tier: "none", tags: ["管饱"], recs: "兰州牛肉面" },
    { id: "liangpi", img: "https://store.is.autonavi.com/query_pic?id=st66bd71ad-dd09-4287-ad52-a2db1fe7a3d9&user=search&operate=original",    name: "凉皮先生·米线·肉夹馍·酸辣粉(鼎好店)", cat: "面馆水饺", price: 29, distKm: 2.22, hours: [["08:00","21:00"]], tier: "none", tags: ["辣","实惠"], recs: "秘制麻酱凉皮/肉夹馍" },

    // == 特色小吃 ==
    { id: "yipinshengjian", img: "https://aos-comment.amap.com/B0FFFT167Y/comment/content_media_external_images_media_1000119775_ss__1753361423310_18487575.jpg", name: "一品生煎(中关村店)",   cat: "特色小吃", price: 29, distKm: 2.10, hours: [["06:30","20:30"]], tier: "ontime", tags: ["快"], recs: "生煎" },
    { id: "xishaoye", img: "https://store.is.autonavi.com/query_pic?id=stcceb41a6-3c74-4718-9b62-475708b39021&user=search&operate=original",   name: "西少爷肉夹馍(中关村5号店)", cat: "特色小吃", price: 39, distKm: 2.37, hours: [["07:00","21:30"]], tier: "none",   tags: ["管饱"], recs: "经典腊汁肉夹馍/酸辣粉" },
    { id: "bailuyuan", img: "https://aos-comment.amap.com/B0LDDRIVM2/comment/176897052806_1768970529420_78784113.jpg",  name: "白鹿原西安肉夹馍·油泼面(大融城店)", cat: "特色小吃", price: 25, distKm: 2.42, hours: [["10:30","21:30"]], tier: "none", tags: ["辣","实惠"], recs: "油泼面/腊汁肉夹馍" },

    // == 茶饮咖啡（只在"奶茶转盘"里抽，不进三餐池）==
    { id: "luckin",     name: "瑞幸咖啡(北大科技园B座店)", cat: "茶饮咖啡", price: 13, distKm: 1.00, hours: [["07:00","20:00"]], tier: "none", tags: ["咖啡","实惠","快"], recs: "生椰拿铁/橙C美式", note: "周末9点起" },
    { id: "xingbk", img: "https://store.is.autonavi.com/showpic/e45e3a0043413101283377e6985510c9",     name: "星巴克(龙湖颐和星悦荟店)", cat: "茶饮咖啡", price: 30, distKm: 1.41, hours: [["06:30","21:30"]], tier: "ontime", tags: ["咖啡"], recs: "馥芮白/焦糖玛奇朵/热可颂" },
    { id: "heytea", img: "https://store.is.autonavi.com/showpic/a017c8433499cac735939990d4a701e6",     name: "喜茶(北京龙湖星悦荟店)",   cat: "茶饮咖啡", price: 24, distKm: 1.29, hours: [["09:00","21:00"]], tier: "none",   tags: ["甜","快"], recs: "多肉葡萄/烤黑糖波波" },
    { id: "chagee-xyh", img: "https://store.is.autonavi.com/showpic/9649ccaf040ba720c3b27fd02d7ced80?operate=original", name: "霸王茶姬(北京龙湖颐和星悦荟店)", cat: "茶饮咖啡", price: 20, distKm: 1.43, hours: [["08:00","21:00"]], tier: "none", tags: ["甜"], recs: "伯牙绝弦/万里木兰" },
    { id: "mixue-beda", img: "https://store.is.autonavi.com/query_pic?id=st2c745913-adf3-4bec-a8ae-2ecccab199fe&user=search&operate=original", name: "蜜雪冰城(北京大学店)",     cat: "茶饮咖啡", price: 7,  distKm: 1.48, hours: [["09:00","22:00"]], tier: "none",   tags: ["甜","实惠"], recs: "新鲜冰柠檬水/珍珠奶茶" },
    { id: "chaibai",    name: "茶百道(中关村领展店)",     cat: "茶饮咖啡", price: 18, distKm: 2.75, hours: [["10:00","22:00"]], tier: "none",   tags: ["甜"], recs: "豆乳玉麒麟" },
    { id: "nayue", img: "https://store.is.autonavi.com/showpic/c685f4c4e63a767f0000002945022266?type=pic",      name: "奈雪的茶(中关村大融城店)", cat: "茶饮咖啡", price: 18, distKm: 2.76, hours: [["08:00","22:00"]], tier: "none",   tags: ["甜"], recs: "霸气鲜果茶" },
    { id: "mixue-cf",   name: "蜜雪冰城(成府路店)",       cat: "茶饮咖啡", price: 9,  distKm: 2.91, hours: [["00:00","24:00"]], tier: "none",   tags: ["甜","实惠"], recs: "冰鲜柠檬水" },
    { id: "chagee-wdk", img: "https://store.is.autonavi.com/showpic/9649ccaf040ba720c3b27fd02d7ced80?operate=original", name: "霸王茶姬(五道口购物中心店)", cat: "茶饮咖啡", price: 20, distKm: 3.22, hours: [["00:00","24:00"]], tier: "none", tags: ["甜"], recs: "伯牙绝弦" },
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
