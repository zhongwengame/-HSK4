/**
 * HSK 4B Lesson 11 Standard Course Interactive Data
 * Target Language: Russian (俄语)
 */

const lessonData = {
  lesson: "第十一课：读书好，读好书，好读书",
  students: ["安娜(Анна)", "马丁(Мартин)", "大卫(Дэвид)", "索菲亚(София)", "尤里(Юрий)", "卡佳(Катя)", "伊万(Иван)", "玛丽亚(Мария)"], 
  
  pinyin_map: { 
    "著名": "zhùmíng", "页": "yè", "杂志": "zázhì", "文章": "wénzhāng", "朗读": "lǎngdú", "复杂": "fùzá", 
    "满": "mǎn", "知识": "zhīshi", "各种各样": "gèzhǒng gèyàng", "拿到": "nádào", "甚至": "shènzhì", "无论": "wúlùn", 
    "客厅": "kètīng", "连": "lián", "抱": "bào", "各种": "gèzhǒng", "精彩": "jīngcǎi", "养成": "yǎngchéng", 
    "习惯": "xíguàn", "优点": "yōudiǎn", "实际上": "shíjìshang", "否则": "fǒuzé", "积极": "jījí", "相反": "xiāngfǎn", 
    "正确": "zhèngquè", "态度": "tàidu", "然而": "rán'ér", "坚持": "jiānchí", "要求": "yāoqiú", "同时": "tóngshí" 
  },
  
  translation_dict: { 
    "著名": "известный", "页": "страница", "杂志": "журнал", "文章": "статья", "朗读": "читать вслух", "复杂": "сложный", 
    "满": "полный", "知识": "знания", "各种各样": "разнообразный", "拿到": "получить", "甚至": "даже", "无论": "независимо от", 
    "客厅": "гостиная", "连": "даже", "抱": "обнимать", "各种": "всевозможные", "精彩": "замечательный", "养成": "выработать", 
    "习惯": "привычка", "优点": "достоинство", "实际上": "на самом деле", "否则": "иначе", "积极": "активный", "相反": "наоборот", 
    "正确": "правильный", "态度": "отношение", "然而": "однако", "坚持": "придерживаться", "要求": "требование", "同时": "одновременно" 
  },
  
  collocations: [
    {left: "著名", right: "的作家"}, {left: "第一", right: "页"}, {left: "时尚", right: "杂志"}, {left: "发表", right: "文章"},
    {left: "大声", right: "朗读"}, {left: "关系", right: "复杂"}, {left: "挤", right: "满人"}, {left: "丰富", right: "知识"},
    {left: "各种", right: "各样"}, {left: "顺利", right: "拿到"}, {left: "甚至", right: "连他都不知道"}, {left: "无论", right: "如何"},
    {left: "打扫", right: "客厅"}, {left: "连", right: "字都不认识"}, {left: "紧紧", right: "抱着"}, {left: "各种", right: "问题"},
    {left: "精彩的", right: "表演"}, {left: "养成", right: "好习惯"}, {left: "生活", right: "习惯"}, {left: "发扬", right: "优点"},
    {left: "实际上", right: "并非如此"}, {left: "快点", right: "否则迟到"}, {left: "积极的", right: "态度"}, {left: "恰恰", right: "相反"},
    {left: "答案", right: "正确"}, {left: "工作", right: "态度"}, {left: "然而", right: "他并不后悔"}, {left: "坚持", right: "到底"},
    {left: "严格", right: "要求"}, {left: "与此", right: "同时"}
  ],

  module_1_vocab: {
    pinyin_match: [
      ["著名", "页", "杂志", "文章", "朗读", "复杂"],
      ["满", "知识", "各种各样", "拿到", "甚至", "无论"],
      ["客厅", "连", "抱", "各种", "精彩", "养成"],
      ["习惯", "优点", "实际上", "否则", "积极", "相反"],
      ["正确", "态度", "然而", "坚持", "要求", "同时"]
    ],
    char_match: [
      ["著名", "杂志", "文章", "朗读", "复杂"],
      ["知识", "拿到", "甚至", "无论", "客厅"],
      ["精彩", "养成", "习惯", "优点", "否则"],
      ["积极", "相反", "正确", "态度", "坚持"]
    ],
    guess_words: [
      "著名", "杂志", "文章", "朗读", "复杂", "知识", "拿到", "甚至", "无论", "客厅", 
      "精彩", "养成", "习惯", "实际上", "否则", "积极", "相反", "正确", "态度", "然而", "坚持"
    ]
  },

  module_2_vocab_drill: {
    word_bomb: [
      {word: "客厅", img_url: "images/keting.jpg", en_hint: "комната для приема гостей"},
      {word: "抱", img_url: "images/bao.jpg", en_hint: "держать в руках / обнимать"},
      {word: "杂志", img_url: "images/zazhi.jpg", en_hint: "печатное периодическое издание"},
      {word: "朗读", img_url: "images/langdu.jpg", en_hint: "громко читать вслух"},
      {word: "页", img_url: "images/ye.jpg", en_hint: "одна сторона листа в книге"},
      {word: "文章", img_url: "images/wenzhang.jpg", en_hint: "написанный текст, статья"},
      {word: "精彩", img_url: "images/jingcai.jpg", en_hint: "замечательное выступление"},
      {word: "积极", img_url: "images/jiji.jpg", en_hint: "позитивный настрой"},
      {word: "知识", img_url: "images/zhishi.jpg", en_hint: "символ ума, книг"},
      {word: "坚持", img_url: "images/jianchi.jpg", en_hint: "продолжать бег"},
      {word: "著名", img_url: "images/zhuming.jpg", en_hint: "известный человек"},
      {word: "习惯", img_url: "images/xiguan.jpg", en_hint: "ежедневная привычка"}
    ],
    guess_words: [
      {target_word: "著名"}, {target_word: "文章"}, {target_word: "朗读"}, 
      {target_word: "各种各样"}, {target_word: "精彩"}, {target_word: "实际上"}, 
      {target_word: "积极"}, {target_word: "然而"}, {target_word: "坚持"}
    ],
    blind_box_spinner: [
      {words: [{text: "著名"}, {text: "文章"}]},
      {words: [{text: "养成"}, {text: "习惯"}]},
      {words: [{text: "积极"}, {text: "态度"}]},
      {words: [{text: "丰富"}, {text: "知识"}]}
    ]
  },

  module_3_grammar: {
    grammar_points: [
      {
        grammar_point_name: "连...也/都...",
        levels: {
          level_1_drag_drop: [
            { chunks: ["连", "生词", "这个", "字典里", "查不到", "都"], correct_answer: "这个生词连字典里都查不到。", en_hint: "Даже в словаре не найти" },
            { chunks: ["忙得", "连", "他", "电话", "没时间", "也", "接"], correct_answer: "他忙得连电话也没时间接。", en_hint: "Даже нет времени ответить на звонок" },
            { chunks: ["这道", "数学题", "连", "老师", "也", "解答不出来"], correct_answer: "这道数学题连老师也解答不出来。", en_hint: "Даже учитель не может решить" }
          ],
          level_2_picture_make_sentence: [
            { img_url: "images/quiz_lián_1.jpg", hint: "用‘连...也/都...’造句", en_hint: "提示：累 / 说话", reference_answer: "他累得连说话的力气都没有了。", keywords: ["累", "说话"] },
            { img_url: "images/quiz_lian_2.jpg", hint: "用‘连...也/都...’造句", en_hint: "提示：小孩子 / 懂得", reference_answer: "这个道理连小孩子都知道。", keywords: ["小孩子", "懂得"] }
          ],
          level_3_scenario: [
            { scenario: "朋友问你今天为什么没看新闻？", en_scenario: "Почему ты не читал новости сегодня?", reference: "今天太忙了，我连手机都没时间看。" },
            { scenario: "表弟问你这道题怎么做？", en_scenario: "Как решить эту задачу?", reference: "这道题太难了，连我都不会做。" }
          ]
        }
      },
      {
        grammar_point_name: "否则",
        levels: {
          level_1_drag_drop: [
            { chunks: ["请", "按时", "交作业", "否则", "会", "扣分"], correct_answer: "请按时交作业，否则会扣分。", en_hint: "Сдай вовремя, иначе снимут баллы" },
            { chunks: ["出门", "带伞", "记得", "否则", "会", "淋湿"], correct_answer: "出门记得带伞，否则会淋湿。", en_hint: "Возьми зонт, иначе промокнешь" }
          ],
          level_2_picture_make_sentence: [
            { img_url: "images/quiz_fouze_1.jpg", hint: "用‘否则’造句", en_hint: "提示：抓紧时间 / 迟到", reference_answer: "快点走，否则我们要迟到了。", keywords: ["快点走", "迟到"] },
            { img_url: "images/quiz_fouze_2.jpg", hint: "用‘否则’造句", en_hint: "提示：少吃甜食 / 发胖", reference_answer: "别吃太多糖，否则会发胖。", keywords: ["吃糖", "发胖"] }
          ],
          level_3_scenario: [
            { scenario: "劝朋友生病了要赶紧去医院。", en_scenario: "Посоветуй другу пойти в больницу.", reference: "快去医院看看吧，否则病情会加重的。" },
            { scenario: "提醒同事做完PPT要保存。", en_scenario: "Напомни сохранить файл.", reference: "记得保存文件，否则电脑关机内容就丢了。" }
          ]
        }
      },
      {
        grammar_point_name: "无论...都...",
        levels: {
          level_1_drag_drop: [
            { chunks: ["无论", "多忙", "他", "每天", "阅读", "都", "坚持"], correct_answer: "无论多忙，他每天都坚持阅读。", en_hint: "Независимо от занятости, он читает" },
            { chunks: ["无论", "去不去", "你", "都", "要", "打个电话"], correct_answer: "无论你去不去，你都要打个电话。", en_hint: "Позвони в любом случае" }
          ],
          level_2_picture_make_sentence: [
            { img_url: "images/quiz_wulun_1.jpg", hint: "用‘无论...都...’造句", en_hint: "提示：刮风下雨 / 跑步", reference_answer: "无论刮风下雨，他都坚持跑步。", keywords: ["刮风下雨", "跑步"] },
            { img_url: "images/quiz_wulun_3.jpg", hint: "用‘无论...都...’造句", en_hint: "提示：去哪里 / 陪你", reference_answer: "无论你想去哪儿，我都陪你去。", keywords: ["去哪儿", "陪你"] }
          ],
          level_3_scenario: [
            { scenario: "向顾客保证产品的质量。", en_scenario: "Гарантируй качество.", reference: "无论出现什么问题，我们都会免费维修。" },
            { scenario: "安慰朋友不管结果如何你都支持他。", en_scenario: "Поддержи друга.", reference: "无论结果怎样，我们都永远支持你。" }
          ]
        }
      },
      {
        grammar_point_name: "然而",
        levels: {
          level_1_drag_drop: [
            { chunks: ["他", "付出了", "很多努力", "然而", "失败了", "最终"], correct_answer: "他付出了很多努力，然而最终失败了。", en_hint: "Много старался, однако провалился" },
            { chunks: ["理想", "很美好", "然而", "现实", "很残酷"], correct_answer: "理想很美好，然而现实很残酷。", en_hint: "Идеалы прекрасны, однако реальность жестока" }
          ],
          level_2_picture_make_sentence: [
            { img_url: "images/quiz_raner_1.jpg", hint: "用‘然而’造句", en_hint: "提示：虽然生病 / 坚持工作", reference_answer: "他生病了，然而他依然坚持工作。", keywords: ["生病", "坚持"] },
            { img_url: "images/quiz_raner_3.jpg", hint: "用‘然而’造句", en_hint: "提示：尝试多次 / 没有成功", reference_answer: "他尝试了很多次，然而都没有成功。", keywords: ["尝试", "没成功"] }
          ],
          level_3_scenario: [
            { scenario: "描述一部电影虽然成本低，但票房极高。", en_scenario: "Низкий бюджет, однако высокие сборы.", reference: "这部电影制作成本不高，然而却获得了极高的票房。" },
            { scenario: "描述做计划容易，实施起来却很困难。", en_scenario: "Легко планировать, однако трудно делать.", reference: "做计划总是很容易，然而真正坚持下去却很艰难。" }
          ]
        }
      },
      {
        grammar_point_name: "同时",
        levels: {
          level_1_drag_drop: [
            { chunks: ["我们要", "学习", "新知识", "同时", "复习", "旧知识"], correct_answer: "我们要学习新知识，同时复习旧知识。", en_hint: "Учить новое и одновременно повторять старое" },
            { chunks: ["跑步", "可以", "锻炼身体", "同时", "减轻压力"], correct_answer: "跑步可以锻炼身体，同时减轻压力。", en_hint: "Бег тренирует тело и одновременно снижает стресс" }
          ],
          level_2_picture_make_sentence: [
            { img_url: "images/quiz_tongshi_1.jpg", hint: "用‘同时’造句", en_hint: "提示：看电视 / 做家务", reference_answer: "她在看电视的同时做家务。", keywords: ["看电视", "做家务"] },
            { img_url: "images/quiz_tongshi_2.jpg", hint: "用‘同时’造句", en_hint: "提示：做听力 / 做笔记", reference_answer: "请大家听录音，同时做笔记。", keywords: ["听录音", "做笔记"] }
          ],
          level_3_scenario: [
            { scenario: "解释为什么读书能带来多重好处。", en_scenario: "Почему читать полезно?", reference: "读书不仅能获取知识，同时还能开阔视野。" },
            { scenario: "向新员工说明工作要求（效率与质量）。", en_scenario: "Требования к работе.", reference: "我们要提高工作效率，同时也要保证产品质量。" }
          ]
        }
      }
    ]
  },

  module_4_text: {
    level_1_sorting: [
      {
        shuffled_items: [ 
          {tag: "A", content: "读书可以丰富知识"}, 
          {tag: "B", content: "很多人都知道‘读书好、读好书、好读书’这句话。"}, 
          {tag: "C", content: "同时也能提高我们的理解能力。"} 
        ],
        correct_order: ["B", "A", "C"],
        explanation: "先引出大家熟知的观点，再具体说明读书的两个好处。"
      },
      {
        shuffled_items: [ 
          {tag: "A", content: "如果不加思考地死读书，"}, 
          {tag: "B", content: "书上的知识就不能真正变成自己的东西。"}, 
          {tag: "C", content: "否则，"} 
        ],
        correct_order: ["A", "C", "B"],
        explanation: "表示假设前提，然后用'否则'引出消极的结果。"
      }
    ]
  },

  module_4_repetition: {
    sentences: [
      "无论多忙，我每天都会抽时间读读书。",
      "养成读书的习惯，对我们的成长大有好处。",
      "读书确实有很多优点，然而要坚持下来并不容易。",
      "尽信书，不如无书。",
      "我们要学会思考，保持积极的态度，否则知识就不能变成自己的。"
    ]
  },

  module_5_wordcloud: {
    title: "动态词云：关于【阅读】",
    hint: "请在手机端输入你想到的、和‘看书/阅读’有关的词语发送到屏幕上！"
  },

  module_6_challenge: {
    challenge_sets: [
      {
        keywords: ["著名", "杂志", "文章"],
        framework: "他是一位__的作家，经常在__上发表__。",
        translation: "Он известный писатель, часто публикует статьи в журналах."
      },
      {
        keywords: ["无论", "坚持", "习惯"],
        framework: "__多累，他都__每天读书的__。",
        translation: "Независимо от усталости, он придерживается привычки читать каждый день."
      }
    ]
  },

  module_7_find_error: {
    questions: [
      { 
        sentence: "无论天气好不好，但是他每天都去操场跑步。", 
        error: "但是", 
        correct: "",
        explanation: "‘无论’搭配‘都/也’，不能与‘但是’连用。" 
      },
      { 
        sentence: "他忙得连饭也顾不上吃，然而所以依然坚持完成工作。", 
        error: "然而所以", 
        correct: "然而", 
        explanation: "‘然而’表示转折，‘所以’表示因果，不能连用在一起。" 
      },
      { 
        sentence: "请大家抓紧时间，否则我们会赶不上最后一班地铁吗。", 
        error: "吗", 
        correct: "。", 
        explanation: "‘否则’连接的是陈述后果的句子，不是疑问句，不能加‘吗’。" 
      }
    ]
  },

  module_8_jeopardy: {
    teamNames: {wei: '魏', shu: '蜀', wu: '吴'},
    categories: ["词汇与翻译", "语法辨析", "课文理解"],
    questions: {
      "q_0_10": { question: "请翻译成俄语：各种各样", question_en: "Translate", answer: "разнообразный" },
      "q_0_20": { question: "听拼音说词语：wénzhāng", question_en: "Pinyin to Word", answer: "文章" },
      "q_0_30": { question: "说出‘积极’的反义词", question_en: "Antonym", answer: "消极" },
      
      "q_1_10": { question: "‘无论’和‘不管’的主要区别是什么？", question_en: "Grammar diff", answer: "‘无论’更书面化，‘不管’更口语化" },
      "q_1_20": { question: "填空：快点出门，____你要迟到了。", question_en: "Fill the blank", answer: "否则 (要不然)" },
      "q_1_30": { question: "填空：___多累，他__坚持学习。", question_en: "Fill the blanks", answer: "无论 ... 都" },
      
      "q_2_10": { question: "高老师是怎么坚持阅读的？", question_en: "Text Comprehension", answer: "无论多忙每天都抽时间读" },
      "q_2_20": { question: "阅读除了丰富知识，还有什么好处？", question_en: "Text Comprehension", answer: "能提高我们的理解能力" },
      "q_2_30": { question: "‘尽信书不如无书’的意思是？", question_en: "Meaning of proverb", answer: "不能死读书，要学会独立思考。" }
    },
    extra_pk_questions: [
      { type: "翻译 PK", q: "实际上", q_en: "Translate", a: "на самом деле" },
      { type: "填空 PK", q: "他气得__话也说不出来。", q_en: "Fill in", a: "连 (一句话也/都...)" },
      { type: "你说我猜", q: "очень известный человек (禁止说：有名、大家)", q_en: "Alias", a: "著名" }
    ]
  },

  module_9_vocab_practice: [
    { question: "他是一位____的作家，大家都认识他。", options: ["著名", "复杂", "积极"], answer: "著名" },
    { question: "请大家翻到课本的第十____。", options: ["篇", "页", "本"], answer: "页" },
    { question: "我经常在机场买一些时尚____看。", options: ["文章", "杂志", "小说"], answer: "杂志" },
    { question: "他最近在报纸上发表了一篇很棒的____。", options: ["文章", "知识", "要求"], answer: "文章" },
    { question: "每天早上大声____英语，对口语很有帮助。", options: ["朗读", "养成", "拿到"], answer: "朗读" },
    { question: "这台机器的内部结构非常____，很难修。", options: ["精彩", "复杂", "正确"], answer: "复杂" },
    { question: "晚高峰时，地铁里挤____了人。", options: ["满", "连", "甚至"], answer: "满" },
    { question: "阅读不仅能放松心情，还能丰富我们的____。", options: ["要求", "知识", "态度"], answer: "知识" },
    { question: "超市里有____的水果和蔬菜。", options: ["各种各样", "无论如何", "实际上"], answer: "各种各样" },
    { question: "你____那张昨天的报纸了吗？", options: ["坚持", "拿到", "养成"], answer: "拿到" },
    { question: "他太累了，____连饭都没吃就睡着了。", options: ["甚至", "否则", "无论"], answer: "甚至" },
    { question: "____天气多冷，他都坚持去游泳。", options: ["无论", "然而", "连"], answer: "无论" },
    { question: "客人们正坐在____里喝茶聊天。", options: ["杂志", "客厅", "各种"], answer: "客厅" },
    { question: "这道题太难了，____老师都不会做。", options: ["连", "无论", "同时"], answer: "连" },
    { question: "母亲紧紧地____着她生病的孩子。", options: ["拿", "抱", "连"], answer: "抱" },
    { question: "这里出售____不同口味的咖啡。", options: ["各种", "连", "然而"], answer: "各种" },
    { question: "昨晚的足球比赛非常____，进了很多球！", options: ["丰富", "习惯", "精彩"], answer: "精彩" },
    { question: "我们应该从小____节约用水的好习惯。", options: ["拿到", "养成", "坚持"], answer: "养成" },
    { question: "早睡早起是一个非常好的生活____。", options: ["知识", "习惯", "态度"], answer: "习惯" },
    { question: "每个人都有自己的____和缺点。", options: ["要求", "优点", "知识"], answer: "优点" },
    { question: "大家都以为他很有钱，____他过得很节俭。", options: ["甚至", "实际上", "无论"], answer: "实际上" },
    { question: "快点出门，____我们会赶不上火车的。", options: ["否则", "然而", "同时"], answer: "否则" },
    { question: "面对困难，我们需要保持____乐观的心态。", options: ["著名", "复杂", "积极"], answer: "积极" },
    { question: "我想的和你恰恰____，我觉得这个主意不好。", options: ["相反", "正确", "精彩"], answer: "相反" },
    { question: "你的这道数学题答案完全____。", options: ["著名", "复杂", "正确"], answer: "正确" },
    { question: "学习的____决定了你最后的成绩。", options: ["态度", "要求", "知识"], answer: "态度" },
    { question: "他付出了很多努力，____最终还是失败了。", options: ["然而", "否则", "连"], answer: "然而" },
    { question: "只要____练习，你一定能学好汉语。", options: ["坚持", "甚至", "拿到"], answer: "坚持" },
    { question: "新老师对我们的学习____非常严格。", options: ["知识", "态度", "要求"], answer: "要求" },
    { question: "他在上班的____，还在准备大学的考试。", options: ["同时", "无论", "甚至"], answer: "同时" }
  ],

  module_10_comprehension: [
    {
      sectionTitle: "课文一：马克和高老师谈阅读",
      textContext: "马克：高老师，您看，我刚买的杂志，里面有篇关于您的文章。\n高老师：是吗？我看看。这篇文章写得真不错，把我的经历写得很详细。\n马克：高老师，您平时那么忙，怎么还有时间写书和阅读呢？\n高老师：无论多忙，我每天都会抽时间读读书。养成读书的习惯，对我们的成长大有好处。",
      questions: [
        { question: "高老师对那篇关于他的文章态度如何？", options: ["写得不好", "把经历写得很详细，评价很好", "不感兴趣"], answer: "把经历写得很详细，评价很好" },
        { question: "高老师是如何坚持阅读的？", options: ["周末集中看", "无论多忙每天都抽时间读", "有空时随便看看"], answer: "无论多忙每天都抽时间读" }
      ]
    },
    {
      sectionTitle: "课文二：读书的益处与态度",
      textContext: "很多人都知道‘读书好、读好书、好读书’这句话。读书可以丰富知识，同时也能提高我们的理解能力。然而，如果只是死读书，不加思考，那也没有用。正如古人所说：‘尽信书，不如无书。’",
      questions: [
        { question: "文中提到的‘尽信书，不如无书’主要想表达什么？", options: ["不要买太多书", "读书时要学会独立思考，不能死读书", "书里的内容都是错的"], answer: "读书时要学会独立思考，不能死读书" },
        { question: "课文中说，如果不加思考地读书，结果会怎样？", options: ["知识会变得丰富", "书上的知识不能真正变成自己的", "会养成好习惯"], answer: "书上的知识不能真正变成自己的" }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = lessonData;
}