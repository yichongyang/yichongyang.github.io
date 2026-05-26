export interface Chapter {
  id: number;
  title: string;
  theme: string;
  keyVerses: { reference: string; text: string }[];
  keyPoints: string[];
  summary: string;
}

export interface Question {
  id: string;
  type: "multiple-choice" | "true-false" | "fill-blank";
  chapter: number;
  question: string;
  options?: string[];
  answer: number | boolean | string;
  hint?: string;
  explanation: string;
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "第一章",
    theme: "神子的超越性",
    summary:
      "神在古时借众先知多次多方地向列祖说话，但在末世借着他的儿子向我们说话。耶稣是神荣耀的光辉和神本体的真像，他比天使更尊贵，因为神称他为儿子，又让天使都拜他。",
    keyVerses: [
      {
        reference: "希伯来书 1:1-2",
        text: "神既在古时借着众先知，多次多方地晓谕列祖，就在这末世，借着他儿子晓谕我们；又早已立他为承受万有的，也曾借着他创造诸世界。",
      },
      {
        reference: "希伯来书 1:3",
        text: "他是神荣耀所发的光辉，是神本体的真像，常用他权能的命令托住万有。他洗净了人的罪，就坐在高天至大者的右边。",
      },
      {
        reference: "希伯来书 1:14",
        text: "天使岂不都是服役的灵、奉差遣为那将要承受救恩的人效力吗？",
      },
    ],
    keyPoints: [
      "神借众先知说话，如今借儿子向我们说话",
      "耶稣是神荣耀的光辉，神本体的真像，创造了诸世界",
      "耶稣比天使更尊贵，因为神称他为儿子",
      "天使是服役的灵，奉差遣为将承受救恩的人效力",
    ],
  },
  {
    id: 2,
    title: "第二章",
    theme: "救恩的确实性",
    summary:
      "我们应当越发郑重所听见的道理，免得随流失去。耶稣为要尝尽死味，暂时比天使小一点，他借着死败坏了掌死权的魔鬼，并且凡事与弟兄相同，能体恤我们的软弱。",
    keyVerses: [
      {
        reference: "希伯来书 2:1",
        text: "所以，我们应当越发郑重所听见的道理，恐怕我们随流失去。",
      },
      {
        reference: "希伯来书 2:14",
        text: "儿女既同有血肉之体，他也照样亲自成了血肉之体，特要借着死，败坏那掌死权的，就是魔鬼。",
      },
      {
        reference: "希伯来书 2:18",
        text: "他自己既然被试探而受苦，就能搭救被试探的人。",
      },
    ],
    keyPoints: [
      "要越发郑重所听见的道理，不可随流失去",
      "耶稣暂时比天使小，亲自成了血肉之体",
      "耶稣借着死，败坏那掌死权的魔鬼",
      "耶稣凡事与弟兄相同，能体恤我们的软弱并搭救被试探的人",
    ],
  },
  {
    id: 3,
    title: "第三章",
    theme: "比摩西更尊贵",
    summary:
      "耶稣被称为使者和大祭司，他比摩西更配得荣耀，就如建造房屋的比房屋更尊荣。摩西在神的家中是忠心的仆人，耶稣却是忠心的儿子。作者警告读者，不要像旷野中的以色列人那样心里刚硬。",
    keyVerses: [
      {
        reference: "希伯来书 3:1",
        text: "所以，同蒙天召的圣洁弟兄，你们应当思想我们所认为使者、为大祭司的耶稣。",
      },
      {
        reference: "希伯来书 3:13",
        text: "总要趁着还有称为今日的时候，天天彼此相劝，免得你们中间有人被罪迷惑，心里就刚硬了。",
      },
      {
        reference: "希伯来书 3:6",
        text: "但基督为儿子，治理神的家；我们若将可夸的盼望和胆量坚持到底，便是他的家了。",
      },
    ],
    keyPoints: [
      "耶稣比摩西更配得荣耀，如建造者比房屋更尊荣",
      "摩西是仆人，耶稣是儿子，治理神的家",
      "以色列人在旷野试探神，心里刚硬，不得进入安息",
      "要天天彼此相劝，免得心里刚硬",
    ],
  },
  {
    id: 4,
    title: "第四章",
    theme: "进入神的安息",
    summary:
      "神的安息仍然存留给他的子民，我们应当竭力进入那安息，免得有人效法那不信从的样子跌倒了。神的道是活泼的，是有功效的。耶稣是我们的大祭司，我们可以坦然无惧地来到施恩宝座前。",
    keyVerses: [
      {
        reference: "希伯来书 4:12",
        text: "神的道是活泼的，是有功效的，比一切两刃的剑更快，甚至魂与灵、骨节与骨髓，都能刺入剖开，连心中的思念和主意都能辨明。",
      },
      {
        reference: "希伯来书 4:15",
        text: "因我们的大祭司并非不能体恤我们的软弱，他也曾凡事受过试探，与我们一样，只是他没有犯罪。",
      },
      {
        reference: "希伯来书 4:16",
        text: "所以我们只管坦然无惧地来到施恩的宝座前，为要得怜恤，蒙恩惠，作随时的帮助。",
      },
    ],
    keyPoints: [
      "神的安息仍然存留，要竭力进入，不可效法不信从者",
      "神的道是活泼的，比两刃的剑更快，能辨明心中的思念",
      "耶稣是大祭司，曾受试探，能体恤我们的软弱",
      "可以坦然无惧来到施恩宝座前，得怜恤和随时的帮助",
    ],
  },
  {
    id: 5,
    title: "第五章",
    theme: "基督是大祭司",
    summary:
      "大祭司是从人间挑选，替人在神面前行事，献上礼物和祭物。基督不是自己取得大祭司的荣耀，乃是神亲自呼召他，按麦基洗德的等次立他为大祭司。他因所受的苦难学了顺从，并且成了永远得救的根源。",
    keyVerses: [
      {
        reference: "希伯来书 5:7",
        text: "基督在肉体的时候，既大声哀哭，流泪祷告，恳求那能救他免死的主，就因他的虔诚蒙了应允。",
      },
      {
        reference: "希伯来书 5:8-9",
        text: "他虽然为儿子，还是因所受的苦难学了顺从；他既得以完全，就为凡顺从他的人成了永远得救的根源。",
      },
      {
        reference: "希伯来书 5:12",
        text: "因为按日期你们早应作师傅，谁知还得有人将神圣言小学的开端另教导你们，并且成了那必须吃奶、不能吃干粮的人。",
      },
    ],
    keyPoints: [
      "大祭司是从人间挑选，替人在神面前行事",
      "基督是被神呼召立为大祭司，照麦基洗德的等次",
      "耶稣因所受的苦难学了顺从，成了永远得救的根源",
      "作者责备读者仍需喝奶，不能分辨是非，应该进到成熟",
    ],
  },
  {
    id: 6,
    title: "第六章",
    theme: "信仰的成熟与坚守",
    summary:
      "要离开基督道理的开端，竭力进到完全的地步。背道的人无法重新悔改。但作者对读者有更好的期望。神的应许是确实的，他亲自起誓，使我们有充分的把握。这盼望如同灵魂的锚，又坚固又牢靠。",
    keyVerses: [
      {
        reference: "希伯来书 6:1",
        text: "所以，我们应当离开基督道理的开端，竭力进到完全的地步；不必再立根基，就如那懊悔死行、信靠神、各样洗礼、按手之礼、死人复活，以及永远审判各等教训。",
      },
      {
        reference: "希伯来书 6:18-19",
        text: "借这两件不更改的事，神决不能说谎，好叫我们这逃往避难所、持定摆在我们前头指望的人可以大得勉励；我们有这指望，如同灵魂的锚，又坚固又牢靠，且伸入帐幔内。",
      },
    ],
    keyPoints: [
      "要离开信仰的初基，竭力进到完全（成熟）的地步",
      "那些背道的人，再次叫他们悔改是不可能的",
      "神的应许是确实的，他指着自己起誓，使我们大得勉励",
      "这盼望如同灵魂的锚，又坚固又牢靠，伸入帐幔内",
    ],
  },
];

export const questions: Question[] = [
  // ===== Chapter 1 =====
  {
    id: "c1-mc-1",
    type: "multiple-choice",
    chapter: 1,
    question: "神在末世借着谁向我们说话？",
    options: ["众先知", "天使", "他的儿子", "摩西"],
    answer: 2,
    explanation: "希伯来书1:2说，神在末世借着他的儿子晓谕我们。",
  },
  {
    id: "c1-mc-2",
    type: "multiple-choice",
    chapter: 1,
    question: "耶稣是神荣耀所发的什么？",
    options: ["声音", "光辉", "话语", "形象"],
    answer: 1,
    explanation: "希伯来书1:3说，他是神荣耀所发的光辉，是神本体的真像。",
  },
  {
    id: "c1-mc-3",
    type: "multiple-choice",
    chapter: 1,
    question: "神创造诸世界是借着谁？",
    options: ["大卫", "摩西", "他的儿子", "亚伯拉罕"],
    answer: 2,
    explanation: "希伯来书1:2说，神也曾借着儿子创造诸世界。",
  },
  {
    id: "c1-mc-4",
    type: "multiple-choice",
    chapter: 1,
    question: "天使的本质是什么？",
    options: ["神的儿子", "服役的灵", "人的老师", "神的代言人"],
    answer: 1,
    explanation: "希伯来书1:14说，天使都是服役的灵，奉差遣为将承受救恩的人效力。",
  },
  {
    id: "c1-mc-5",
    type: "multiple-choice",
    chapter: 1,
    question: "耶稣洁净了人的罪之后，坐在哪里？",
    options: ["地上的圣殿", "高天至大者的右边", "耶路撒冷", "天上的会幕"],
    answer: 1,
    explanation: "希伯来书1:3说，他洗净了人的罪，就坐在高天至大者的右边。",
  },
  {
    id: "c1-tf-1",
    type: "true-false",
    chapter: 1,
    question: "神在末世是借着天使向我们说话的。",
    answer: false,
    explanation: "不正确。希伯来书1:2说，神在末世是借着他的儿子（耶稣）向我们说话，不是天使。",
  },
  {
    id: "c1-tf-2",
    type: "true-false",
    chapter: 1,
    question: "耶稣是神本体的真像，也是神荣耀所发的光辉。",
    answer: true,
    explanation: "正确。希伯来书1:3明确说，他是神荣耀所发的光辉，是神本体的真像。",
  },
  {
    id: "c1-tf-3",
    type: "true-false",
    chapter: 1,
    question: "天使被神称为神的儿子。",
    answer: false,
    explanation: "不正确。希伯来书1:5说，神从来没有对哪个天使说过这话，这话是对耶稣说的。",
  },
  {
    id: "c1-fb-1",
    type: "fill-blank",
    chapter: 1,
    question: "希伯来书1:3说，他是神荣耀所发的___，是神本体的真像。",
    answer: "光辉",
    hint: "希伯来书1:3",
    explanation: "希伯来书1:3：他是神荣耀所发的光辉，是神本体的真像。",
  },
  {
    id: "c1-fb-2",
    type: "fill-blank",
    chapter: 1,
    question: "希伯来书1:14说，天使岂不都是___的灵，奉差遣为那将要承受救恩的人效力吗？",
    answer: "服役",
    hint: "希伯来书1:14",
    explanation: "希伯来书1:14：天使岂不都是服役的灵，奉差遣为那将要承受救恩的人效力吗？",
  },

  // ===== Chapter 2 =====
  {
    id: "c2-mc-1",
    type: "multiple-choice",
    chapter: 2,
    question: "希伯来书2:1警告我们要越发郑重所听见的道理，是为了防止什么？",
    options: ["骄傲自大", "随流失去", "信心减少", "离开教会"],
    answer: 1,
    explanation: "希伯来书2:1说，恐怕我们随流失去，所以要郑重所听见的道理。",
  },
  {
    id: "c2-mc-2",
    type: "multiple-choice",
    chapter: 2,
    question: "耶稣借着死，败坏了谁？",
    options: ["罪恶", "世界", "掌死权的魔鬼", "律法"],
    answer: 2,
    explanation: "希伯来书2:14说，耶稣借着死，败坏那掌死权的，就是魔鬼。",
  },
  {
    id: "c2-mc-3",
    type: "multiple-choice",
    chapter: 2,
    question: "耶稣为什么能搭救被试探的人？",
    options: ["因为他是神的儿子", "因为他被试探而受苦", "因为他无所不知", "因为他在天上"],
    answer: 1,
    explanation: "希伯来书2:18说，他自己既然被试探而受苦，就能搭救被试探的人。",
  },
  {
    id: "c2-mc-4",
    type: "multiple-choice",
    chapter: 2,
    question: "耶稣成为血肉之体的主要目的是什么？",
    options: ["教导人们律法", "医治病人", "借着死败坏魔鬼", "建立教会"],
    answer: 2,
    explanation: "希伯来书2:14说，耶稣成为血肉之体，特要借着死，败坏那掌死权的魔鬼。",
  },
  {
    id: "c2-mc-5",
    type: "multiple-choice",
    chapter: 2,
    question: "耶稣凡事与弟兄相同，目的是什么？",
    options: ["做我们的榜样", "成为慈悲忠信的大祭司", "让我们学习他", "证明他是人"],
    answer: 1,
    explanation: "希伯来书2:17说，耶稣凡事与弟兄相同，是要在神的事上成为慈悲忠信的大祭司。",
  },
  {
    id: "c2-tf-1",
    type: "true-false",
    chapter: 2,
    question: "耶稣通过自己的死，帮助了那些因怕死而终身为奴仆的人得以释放。",
    answer: true,
    explanation: "正确。希伯来书2:15说，并且释放那些一生因怕死而为奴仆的人。",
  },
  {
    id: "c2-tf-2",
    type: "true-false",
    chapter: 2,
    question: "耶稣在世时从未受过任何试探。",
    answer: false,
    explanation: "不正确。希伯来书2:18说，他自己既然被试探而受苦，就能搭救被试探的人。",
  },
  {
    id: "c2-tf-3",
    type: "true-false",
    chapter: 2,
    question: "希伯来书2:1提醒我们要越发郑重所听见的道理，不可随流失去。",
    answer: true,
    explanation: "正确。这正是希伯来书2:1的警告。",
  },
  {
    id: "c2-fb-1",
    type: "fill-blank",
    chapter: 2,
    question: "希伯来书2:1说，我们应当越发郑重所听见的道理，恐怕我们___失去。",
    answer: "随流",
    hint: "希伯来书2:1",
    explanation: "希伯来书2:1：所以，我们应当越发郑重所听见的道理，恐怕我们随流失去。",
  },
  {
    id: "c2-fb-2",
    type: "fill-blank",
    chapter: 2,
    question: "希伯来书2:18说，他自己既然被___而受苦，就能搭救被试探的人。",
    answer: "试探",
    hint: "希伯来书2:18",
    explanation: "希伯来书2:18：他自己既然被试探而受苦，就能搭救被试探的人。",
  },

  // ===== Chapter 3 =====
  {
    id: "c3-mc-1",
    type: "multiple-choice",
    chapter: 3,
    question: "希伯来书3:1称耶稣为哪两种身份？",
    options: ["先知和王", "使者和大祭司", "牧人和门徒", "老师和救主"],
    answer: 1,
    explanation: "希伯来书3:1说，要思想我们所认为使者、为大祭司的耶稣。",
  },
  {
    id: "c3-mc-2",
    type: "multiple-choice",
    chapter: 3,
    question: "耶稣与摩西的关系，犹如什么与什么的关系？",
    options: ["学生与老师", "建造者与房屋", "儿子与父亲", "国王与臣民"],
    answer: 1,
    explanation: "希伯来书3:3-4说，耶稣比摩西更配得荣耀，就如建造房屋的比房屋更尊荣。",
  },
  {
    id: "c3-mc-3",
    type: "multiple-choice",
    chapter: 3,
    question: "摩西在神的家中是什么身份？",
    options: ["儿子", "朋友", "仆人", "大祭司"],
    answer: 2,
    explanation: "希伯来书3:5说，摩西为仆人，在神全家尽忠，为要证明将来必传说的事。",
  },
  {
    id: "c3-mc-4",
    type: "multiple-choice",
    chapter: 3,
    question: "希伯来书3章警告我们不要像谁一样心里刚硬？",
    options: ["埃及人", "法利赛人", "在旷野试探神的以色列人", "外邦人"],
    answer: 2,
    explanation: "希伯来书3:8-9引用诗篇，警告不要效法那些在旷野试探神、心里刚硬的以色列人。",
  },
  {
    id: "c3-mc-5",
    type: "multiple-choice",
    chapter: 3,
    question: "希伯来书3:13说要在什么时候彼此劝勉？",
    options: ["每年一次", "趁还有称为今日的时候，天天", "礼拜天", "遇到困难时"],
    answer: 1,
    explanation: "希伯来书3:13说，总要趁着还有称为今日的时候，天天彼此相劝。",
  },
  {
    id: "c3-tf-1",
    type: "true-false",
    chapter: 3,
    question: "基督在神的家中是以儿子的身份治理神的家。",
    answer: true,
    explanation: "正确。希伯来书3:6说，基督为儿子，治理神的家。",
  },
  {
    id: "c3-tf-2",
    type: "true-false",
    chapter: 3,
    question: "那些在旷野的以色列人因为心里刚硬，得以进入神的安息。",
    answer: false,
    explanation: "不正确。希伯来书3:11引用神的话说，他们断不可进入我的安息。",
  },
  {
    id: "c3-tf-3",
    type: "true-false",
    chapter: 3,
    question: "摩西比耶稣更配得荣耀，因为他带领以色列人出埃及。",
    answer: false,
    explanation: "不正确。希伯来书3:3说，耶稣比摩西更配得荣耀，就如建造房屋的比房屋更尊荣。",
  },
  {
    id: "c3-fb-1",
    type: "fill-blank",
    chapter: 3,
    question: "希伯来书3:13说，总要趁着还有称为今日的时候，天天彼此___，免得你们中间有人被罪迷惑，心里就刚硬了。",
    answer: "相劝",
    hint: "希伯来书3:13",
    explanation: "希伯来书3:13：总要趁着还有称为今日的时候，天天彼此相劝。",
  },
  {
    id: "c3-fb-2",
    type: "fill-blank",
    chapter: 3,
    question: "希伯来书3:6说，基督为___，治理神的家。",
    answer: "儿子",
    hint: "希伯来书3:6",
    explanation: "希伯来书3:6：基督为儿子，治理神的家。",
  },

  // ===== Chapter 4 =====
  {
    id: "c4-mc-1",
    type: "multiple-choice",
    chapter: 4,
    question: "希伯来书4:12描述神的道比一切两刃的剑更快，这说明了什么？",
    options: ["神的话很危险", "神的道具有穿透和辨明人心的能力", "神的话是武器", "神的道很难理解"],
    answer: 1,
    explanation: "希伯来书4:12说，神的道是活泼的，是有功效的，比一切两刃的剑更快，能辨明心中的思念和主意。",
  },
  {
    id: "c4-mc-2",
    type: "multiple-choice",
    chapter: 4,
    question: "我们应当竭力进入什么？",
    options: ["圣殿", "神的国", "神的安息", "永生"],
    answer: 2,
    explanation: "希伯来书4:11说，所以我们务必竭力进入那安息，免得有人效法那不信从的样子跌倒了。",
  },
  {
    id: "c4-mc-3",
    type: "multiple-choice",
    chapter: 4,
    question: "希伯来书4:15说耶稣曾受过试探与我们一样，只是他没有什么？",
    options: ["受苦", "忧愁", "犯罪", "死亡"],
    answer: 2,
    explanation: "希伯来书4:15说，他也曾凡事受过试探，与我们一样，只是他没有犯罪。",
  },
  {
    id: "c4-mc-4",
    type: "multiple-choice",
    chapter: 4,
    question: "我们来到施恩宝座前，是为了得到什么？",
    options: ["荣华富贵", "怜恤和随时的帮助", "智慧和知识", "平安和健康"],
    answer: 1,
    explanation: "希伯来书4:16说，来到施恩的宝座前，为要得怜恤，蒙恩惠，作随时的帮助。",
  },
  {
    id: "c4-mc-5",
    type: "multiple-choice",
    chapter: 4,
    question: "神的道能辨明什么？",
    options: ["善与恶", "真与假", "人心中的思念和主意", "过去与未来"],
    answer: 2,
    explanation: "希伯来书4:12说，连心中的思念和主意都能辨明。",
  },
  {
    id: "c4-tf-1",
    type: "true-false",
    chapter: 4,
    question: "神的道是活泼的，是有功效的，比一切两刃的剑更快。",
    answer: true,
    explanation: "正确。这正是希伯来书4:12的内容。",
  },
  {
    id: "c4-tf-2",
    type: "true-false",
    chapter: 4,
    question: "我们的大祭司无法体恤我们的软弱，因为他是神。",
    answer: false,
    explanation: "不正确。希伯来书4:15说，我们的大祭司并非不能体恤我们的软弱，他也曾凡事受过试探。",
  },
  {
    id: "c4-tf-3",
    type: "true-false",
    chapter: 4,
    question: "希伯来书4:16鼓励我们坦然无惧地来到施恩的宝座前。",
    answer: true,
    explanation: "正确。希伯来书4:16：所以我们只管坦然无惧地来到施恩的宝座前。",
  },
  {
    id: "c4-fb-1",
    type: "fill-blank",
    chapter: 4,
    question: "希伯来书4:12说，神的道是___的，是有功效的，比一切两刃的剑更快。",
    answer: "活泼",
    hint: "希伯来书4:12",
    explanation: "希伯来书4:12：神的道是活泼的，是有功效的，比一切两刃的剑更快。",
  },
  {
    id: "c4-fb-2",
    type: "fill-blank",
    chapter: 4,
    question: "希伯来书4:16说，所以我们只管___地来到施恩的宝座前，为要得怜恤，蒙恩惠，作随时的帮助。",
    answer: "坦然无惧",
    hint: "希伯来书4:16",
    explanation: "希伯来书4:16：所以我们只管坦然无惧地来到施恩的宝座前。",
  },

  // ===== Chapter 5 =====
  {
    id: "c5-mc-1",
    type: "multiple-choice",
    chapter: 5,
    question: "大祭司是从哪里挑选出来的？",
    options: ["从天使中", "从人间", "从利未支派", "从神的儿子中"],
    answer: 1,
    explanation: "希伯来书5:1说，凡大祭司都是从人间挑选的，替人在神面前行事。",
  },
  {
    id: "c5-mc-2",
    type: "multiple-choice",
    chapter: 5,
    question: "基督是照谁的等次被立为大祭司？",
    options: ["亚伦的等次", "利未的等次", "麦基洗德的等次", "摩西的等次"],
    answer: 2,
    explanation: "希伯来书5:10说，基督被神称为大祭司，是照麦基洗德的等次。",
  },
  {
    id: "c5-mc-3",
    type: "multiple-choice",
    chapter: 5,
    question: "希伯来书5:8说耶稣因所受的苦难学了什么？",
    options: ["忍耐", "顺从", "谦卑", "爱心"],
    answer: 1,
    explanation: "希伯来书5:8说，他虽然为儿子，还是因所受的苦难学了顺从。",
  },
  {
    id: "c5-mc-4",
    type: "multiple-choice",
    chapter: 5,
    question: "耶稣成了永远得救的根源，是为了谁？",
    options: ["所有人", "以色列人", "凡顺从他的人", "信教的人"],
    answer: 2,
    explanation: "希伯来书5:9说，他既得以完全，就为凡顺从他的人成了永远得救的根源。",
  },
  {
    id: "c5-mc-5",
    type: "multiple-choice",
    chapter: 5,
    question: "希伯来书5章责备读者还需吃什么，而不能吃干粮？",
    options: ["蔬菜", "奶", "果子", "饼"],
    answer: 1,
    explanation: "希伯来书5:12说，并且成了那必须吃奶、不能吃干粮的人。",
  },
  {
    id: "c5-tf-1",
    type: "true-false",
    chapter: 5,
    question: "基督是自己取得大祭司的荣耀，不是神赐给他的。",
    answer: false,
    explanation: "不正确。希伯来书5:5说，基督也不是自取荣耀作大祭司，乃是在乎那对他说你是我的儿子的神。",
  },
  {
    id: "c5-tf-2",
    type: "true-false",
    chapter: 5,
    question: "耶稣虽然为儿子，仍然因所受的苦难学了顺从。",
    answer: true,
    explanation: "正确。希伯来书5:8：他虽然为儿子，还是因所受的苦难学了顺从。",
  },
  {
    id: "c5-tf-3",
    type: "true-false",
    chapter: 5,
    question: "希伯来书5章赞扬读者在信仰上已经成熟，可以教导别人。",
    answer: false,
    explanation: "不正确。希伯来书5:12批评他们按日期早应作师傅，却仍需要别人把初步的道理再教给他们。",
  },
  {
    id: "c5-fb-1",
    type: "fill-blank",
    chapter: 5,
    question: "希伯来书5:8说，他虽然为儿子，还是因所受的苦难学了___。",
    answer: "顺从",
    hint: "希伯来书5:8",
    explanation: "希伯来书5:8：他虽然为儿子，还是因所受的苦难学了顺从。",
  },
  {
    id: "c5-fb-2",
    type: "fill-blank",
    chapter: 5,
    question: "希伯来书5:10说，基督是照___的等次被立为大祭司。",
    answer: "麦基洗德",
    hint: "希伯来书5:10",
    explanation: "希伯来书5:10：他被神称为大祭司，是照麦基洗德的等次。",
  },

  // ===== Chapter 6 =====
  {
    id: "c6-mc-1",
    type: "multiple-choice",
    chapter: 6,
    question: "希伯来书6:1说我们应当离开基督道理的什么？",
    options: ["核心教导", "开端（初基）", "全部内容", "困难部分"],
    answer: 1,
    explanation: "希伯来书6:1说，应当离开基督道理的开端，竭力进到完全的地步。",
  },
  {
    id: "c6-mc-2",
    type: "multiple-choice",
    chapter: 6,
    question: "希伯来书6章所描述的盼望，像什么一样坚固牢靠？",
    options: ["磐石", "灵魂的锚", "铁链", "城墙"],
    answer: 1,
    explanation: "希伯来书6:19说，我们有这指望，如同灵魂的锚，又坚固又牢靠。",
  },
  {
    id: "c6-mc-3",
    type: "multiple-choice",
    chapter: 6,
    question: "神应许亚伯拉罕时，他指着谁起誓？",
    options: ["天使", "圣灵", "自己", "摩西"],
    answer: 2,
    explanation: "希伯来书6:13说，神应许亚伯拉罕时，因为没有可以指着比自己更大的，就指着自己起誓。",
  },
  {
    id: "c6-mc-4",
    type: "multiple-choice",
    chapter: 6,
    question: "希伯来书6章说那些背道的人，再叫他们悔改是什么状态？",
    options: ["很难", "需要时间", "不可能", "需要帮助"],
    answer: 2,
    explanation: "希伯来书6:4-6说，那些背道的人，若是离弃道理，就不能叫他们重新懊悔了。",
  },
  {
    id: "c6-mc-5",
    type: "multiple-choice",
    chapter: 6,
    question: "希伯来书6:1提到信仰初基的教训包括哪些内容？",
    options: ["讲道和音乐", "懊悔死行、信靠神、复活和永远审判", "祷告和禁食", "圣经知识和教义"],
    answer: 1,
    explanation: "希伯来书6:1-2提到：懊悔死行、信靠神、各样洗礼、按手之礼、死人复活，以及永远审判。",
  },
  {
    id: "c6-tf-1",
    type: "true-false",
    chapter: 6,
    question: "我们有的盼望如同灵魂的锚，又坚固又牢靠，且伸入帐幔内。",
    answer: true,
    explanation: "正确。希伯来书6:19：我们有这指望，如同灵魂的锚，又坚固又牢靠，且伸入帐幔内。",
  },
  {
    id: "c6-tf-2",
    type: "true-false",
    chapter: 6,
    question: "希伯来书6章鼓励读者停留在信仰的初步阶段，不需要继续成长。",
    answer: false,
    explanation: "不正确。希伯来书6:1正好相反，鼓励我们离开初基，竭力进到完全的地步。",
  },
  {
    id: "c6-tf-3",
    type: "true-false",
    chapter: 6,
    question: "神借着应许和起誓这两件不更改的事来确保我们的盼望。",
    answer: true,
    explanation: "正确。希伯来书6:18说，借这两件不更改的事，神决不能说谎，好叫我们可以大得勉励。",
  },
  {
    id: "c6-fb-1",
    type: "fill-blank",
    chapter: 6,
    question: "希伯来书6:19说，我们有这指望，如同灵魂的___，又坚固又牢靠，且伸入帐幔内。",
    answer: "锚",
    hint: "希伯来书6:19",
    explanation: "希伯来书6:19：我们有这指望，如同灵魂的锚，又坚固又牢靠，且伸入帐幔内。",
  },
  {
    id: "c6-fb-2",
    type: "fill-blank",
    chapter: 6,
    question: "希伯来书6:1说，我们应当离开基督道理的开端，竭力进到___的地步。",
    answer: "完全",
    hint: "希伯来书6:1",
    explanation: "希伯来书6:1：我们应当离开基督道理的开端，竭力进到完全的地步。",
  },
];

export function getQuestionsByChapter(chapterId: number): Question[] {
  return questions.filter((q) => q.chapter === chapterId);
}

export function getComprehensiveQuestions(count = 30): Question[] {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function checkFillBlankAnswer(userAnswer: string, correctAnswer: string): boolean {
  return userAnswer.trim() === correctAnswer.trim();
}
