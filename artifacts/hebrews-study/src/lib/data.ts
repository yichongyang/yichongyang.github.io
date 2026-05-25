export const chapters = [
  {
    id: 1,
    title: "第一章",
    subtitle: "神子的超越性",
    theme: "Jesus is superior to all angels. God spoke in the past through prophets, but now speaks through His Son.",
    verses: [
      { text: "神既在古时借着众先知，多次多方地晓谕列祖，就在这末世，借着他儿子晓谕我们。", ref: "希伯来书 1:1-2" },
      { text: "他是神荣耀所发的光辉，是神本体的真像。", ref: "希伯来书 1:3" }
    ],
    points: [
      "神借众先知说话，如今借儿子说话",
      "耶稣是神荣耀的光辉，神本体的真像",
      "耶稣比天使更尊贵，因为神称他为“我的儿子”",
      "天使是服役的灵，奉差遣为将承受救恩的人效力"
    ]
  },
  {
    id: 2,
    title: "第二章",
    subtitle: "救恩的确实性",
    theme: "We must pay careful attention to the salvation message. Jesus became fully human to be our high priest.",
    verses: [
      { text: "所以，我们应当越发郑重所听见的道理，恐怕我们随流失去。", ref: "希伯来书 2:1" },
      { text: "他自己既然被试探而受苦，就能搭救被试探的人。", ref: "希伯来书 2:18" }
    ],
    points: [
      "要郑重所听见的道理，不可随流失去",
      "耶稣暂时比天使小，为要尝尽死味",
      "耶稣借着死，败坏那掌死权的魔鬼",
      "耶稣凡事与弟兄相同，能体恤我们的软弱"
    ]
  },
  {
    id: 3,
    title: "第三章",
    subtitle: "比摩西更尊贵",
    theme: "Jesus deserves more honor than Moses. Warning against hardening your heart.",
    verses: [
      { text: "所以，同蒙天召的圣洁弟兄，你们应当思想我们所认为使者、为大祭司的耶稣。", ref: "希伯来书 3:1" },
      { text: "趁今日还有叫做今日的时候，你们要互相劝勉，免得你们中间有人被罪迷惑，心里就刚硬了。", ref: "希伯来书 3:15" }
    ],
    points: [
      "耶稣比摩西更配得荣耀",
      "摩西是仆人，耶稣是儿子",
      "以色列人在旷野试探神，心里刚硬，不得进入安息",
      "要彼此劝勉，免得心里刚硬"
    ]
  },
  {
    id: 4,
    title: "第四章",
    subtitle: "进入神的安息",
    theme: "God's rest is still available. Jesus as our great high priest understands our weakness.",
    verses: [
      { text: "神的道是活泼的，是有功效的，比一切两刃的剑更快。", ref: "希伯来书 4:12" },
      { text: "所以我们只管坦然无惧地来到施恩的宝座前，为要得怜恤，蒙恩惠，作随时的帮助。", ref: "希伯来书 4:16" }
    ],
    points: [
      "神的安息仍然存留，当竭力进入",
      "神的话语是活泼的，能辨别人心",
      "耶稣是大祭司，能体恤我们软弱",
      "可以坦然来到施恩宝座前得帮助"
    ]
  },
  {
    id: 5,
    title: "第五章",
    subtitle: "基督是大祭司",
    theme: "Jesus was appointed as high priest by God in the order of Melchizedek.",
    verses: [
      { text: "他虽然为儿子，还是因所受的苦难学了顺从。", ref: "希伯来书 5:8" },
      { text: "他既得以完全，就为凡顺从他的人成了永远得救的根源。", ref: "希伯来书 5:9" }
    ],
    points: [
      "大祭司是从人间挑选，替人在神面前行事",
      "基督是被神立为大祭司，照麦基洗德的等次",
      "耶稣因所受的苦难学了顺从",
      "作者责备读者仍需喝奶，不会分辨是非"
    ]
  },
  {
    id: 6,
    title: "第六章",
    subtitle: "信仰的成熟与坚守",
    theme: "Leave the elementary teachings and go on to maturity. God's promise is certain.",
    verses: [
      { text: "所以，我们应当离开基督道理的开端，竭力进到完全的地步。", ref: "希伯来书 6:1" },
      { text: "我们有这指望，如同灵魂的锚，又坚固又牢靠。", ref: "希伯来书 6:19" }
    ],
    points: [
      "要离开信仰的初基，进到成熟",
      "背道之人，再次叫他们悔改是不可能的",
      "神的应许是确实的，他指着自己起誓",
      "这盼望如同灵魂的锚，又坚固又牢靠"
    ]
  }
];

export type Question = 
  | { id: string; type: "multiple-choice"; chapter: number; question: string; options: string[]; answer: number; explanation: string }
  | { id: string; type: "true-false"; chapter: number; question: string; answer: boolean; explanation: string }
  | { id: string; type: "fill-blank"; chapter: number; question: string; answer: string; hint: string; explanation: string };

export const questions: Question[] = [
  // Chapter 1
  { id: "1-mc-1", type: "multiple-choice", chapter: 1, question: "神在末世借着谁向我们说话？", options: ["先知", "天使", "儿子", "摩西"], answer: 2, explanation: "根据希伯来书1:2，神在末世借着他的儿子晓谕我们。" },
  { id: "1-mc-2", type: "multiple-choice", chapter: 1, question: "耶稣是神本体的什么？", options: ["影子", "真像", "仆人", "象征"], answer: 1, explanation: "希伯来书1:3说，他是神荣耀所发的光辉，是神本体的真像。" },
  { id: "1-tf-1", type: "true-false", chapter: 1, question: "天使比耶稣更尊贵。", answer: false, explanation: "希伯来书1:4说，耶稣比天使更尊贵。" },
  { id: "1-tf-2", type: "true-false", chapter: 1, question: "天使是服役的灵。", answer: true, explanation: "希伯来书1:14提到，天使岂不都是服役的灵、奉差遣为那将要承受救恩的人效力吗？" },
  { id: "1-fb-1", type: "fill-blank", chapter: 1, question: "神既在古时借着众___，多次多方地晓谕列祖。", answer: "先知", hint: "希伯来书 1:1", explanation: "神既在古时借着众先知，多次多方地晓谕列祖。" },

  // Chapter 2
  { id: "2-mc-1", type: "multiple-choice", chapter: 2, question: "我们应当越发郑重所听见的道理，恐怕我们怎样？", options: ["随流失去", "忘记", "被迷惑", "跌倒"], answer: 0, explanation: "希伯来书2:1说，恐怕我们随流失去。" },
  { id: "2-mc-2", type: "multiple-choice", chapter: 2, question: "耶稣借着死，败坏了谁？", options: ["罗马皇帝", "掌死权的魔鬼", "罪恶", "死亡本身"], answer: 1, explanation: "希伯来书2:14：败坏那掌死权的，就是魔鬼。" },
  { id: "2-tf-1", type: "true-false", chapter: 2, question: "耶稣从未受过试探。", answer: false, explanation: "希伯来书2:18说，他自己既然被试探而受苦，就能搭救被试探的人。" },
  { id: "2-tf-2", type: "true-false", chapter: 2, question: "耶稣凡事与弟兄相同。", answer: true, explanation: "希伯来书2:17：所以，他凡事该与他的弟兄相同。" },
  { id: "2-fb-1", type: "fill-blank", chapter: 2, question: "耶稣暂时比___小，为要尝尽死味。", answer: "天使", hint: "希伯来书 2:9", explanation: "惟独见那成为比天使小一点的耶稣；因为受死的苦，就得了尊贵荣耀为冠冕。" },

  // Chapter 3
  { id: "3-mc-1", type: "multiple-choice", chapter: 3, question: "耶稣比谁更配得荣耀？", options: ["亚伯拉罕", "摩西", "大卫", "所罗门"], answer: 1, explanation: "希伯来书3:3：他比摩西算是更配多得荣耀。" },
  { id: "3-mc-2", type: "multiple-choice", chapter: 3, question: "以色列人在旷野试探神，导致神发怒，结果如何？", options: ["不得进入应许之地", "不得进入安息", "被蛇咬死", "被敌人打败"], answer: 1, explanation: "希伯来书3:11：我就在怒中起誓说：'他们断不可进入我的安息。'" },
  { id: "3-tf-1", type: "true-false", chapter: 3, question: "摩西在神的全家尽忠，是以儿子的身份。", answer: false, explanation: "希伯来书3:5：摩西为仆人，在神的全家诚然尽忠。" },
  { id: "3-tf-2", type: "true-false", chapter: 3, question: "我们要互相劝勉，免得心里刚硬。", answer: true, explanation: "希伯来书3:13：总要趁着还有今日，天天彼此相劝，免得你们中间有人被罪迷惑，心里就刚硬了。" },
  { id: "3-fb-1", type: "fill-blank", chapter: 3, question: "所以，同蒙天召的圣洁弟兄啊，你们应当思想我们所认为使者、为大祭司的___。", answer: "耶稣", hint: "希伯来书 3:1", explanation: "你们应当思想我们所认为使者、为大祭司的耶稣。" },

  // Chapter 4
  { id: "4-mc-1", type: "multiple-choice", chapter: 4, question: "神的道是活泼的，是有功效的，比什么更快？", options: ["闪电", "一切两刃的剑", "箭", "光"], answer: 1, explanation: "希伯来书4:12：神的道是活泼的，是有功效的，比一切两刃的剑更快。" },
  { id: "4-mc-2", type: "multiple-choice", chapter: 4, question: "我们的大祭司不能体恤我们的什么？", options: ["罪恶", "软弱", "无知", "他能体恤一切，没有不能体恤的"], answer: 3, explanation: "希伯来书4:15：因我们的大祭司并非不能体恤我们的软弱。" },
  { id: "4-tf-1", type: "true-false", chapter: 4, question: "安息日的安息已经不再存留给神的子民。", answer: false, explanation: "希伯来书4:9：这样看来，必另有一安息日的安息为神的子民存留。" },
  { id: "4-tf-2", type: "true-false", chapter: 4, question: "我们可以坦然无惧地来到施恩的宝座前。", answer: true, explanation: "希伯来书4:16：所以，我们只管坦然无惧地来到施恩的宝座前。" },
  { id: "4-fb-1", type: "fill-blank", chapter: 4, question: "所以，我们只管坦然无惧地来到___的宝座前，为要得怜恤，蒙恩惠，作随时的帮助。", answer: "施恩", hint: "希伯来书 4:16", explanation: "所以，我们只管坦然无惧地来到施恩的宝座前。" },

  // Chapter 5
  { id: "5-mc-1", type: "multiple-choice", chapter: 5, question: "基督是照着谁的等次永远为祭司？", options: ["亚伦", "利未", "麦基洗德", "摩西"], answer: 2, explanation: "希伯来书5:6：照着麦基洗德的等次永远为祭司。" },
  { id: "5-mc-2", type: "multiple-choice", chapter: 5, question: "耶稣因所受的苦难学了什么？", options: ["忍耐", "顺从", "坚强", "谦卑"], answer: 1, explanation: "希伯来书5:8：他虽然为儿子，还是因所受的苦难学了顺从。" },
  { id: "5-tf-1", type: "true-false", chapter: 5, question: "大祭司可以自己取尊荣。", answer: false, explanation: "希伯来书5:4：这大祭司的尊荣，没有人自取。" },
  { id: "5-tf-2", type: "true-false", chapter: 5, question: "作者认为读者已经成熟，可以吃干粮了。", answer: false, explanation: "希伯来书5:12：看你们学习的工夫，本该作师傅，谁知还得有人将神圣言小学的开端另教导你们，并且成了那必须吃奶、不能吃干粮的人。" },
  { id: "5-fb-1", type: "fill-blank", chapter: 5, question: "他既得以完全，就为凡___他的人成了永远得救的根源。", answer: "顺从", hint: "希伯来书 5:9", explanation: "他既得以完全，就为凡顺从他的人成了永远得救的根源。" },

  // Chapter 6
  { id: "6-mc-1", type: "multiple-choice", chapter: 6, question: "我们有这指望，如同灵魂的什么？", options: ["翅膀", "灯塔", "锚", "盾牌"], answer: 2, explanation: "希伯来书6:19：我们有这指望，如同灵魂的锚，又坚固又牢靠。" },
  { id: "6-mc-2", type: "multiple-choice", chapter: 6, question: "神为了证实他的旨意是不更改的，就起誓为保证；他指着谁起誓？", options: ["天地", "天使", "自己", "摩西"], answer: 2, explanation: "希伯来书6:13：神应许亚伯拉罕的时候，因为没有比自己更大可以指着起誓的，就指着自己起誓。" },
  { id: "6-tf-1", type: "true-false", chapter: 6, question: "若是离弃道理，就不能叫他们从新懊悔了。", answer: true, explanation: "希伯来书6:6：若是离弃道理，就不能叫他们从新懊悔了。" },
  { id: "6-tf-2", type: "true-false", chapter: 6, question: "我们要一直停留在基督道理的开端。", answer: false, explanation: "希伯来书6:1：所以，我们应当离开基督道理的开端，竭力进到完全的地步。" },
  { id: "6-fb-1", type: "fill-blank", chapter: 6, question: "所以，我们应当离开基督道理的开端，竭力进到___的地步。", answer: "完全", hint: "希伯来书 6:1", explanation: "所以，我们应当离开基督道理的开端，竭力进到完全的地步。" }
];

export const getQuestionsForChapter = (chapterId: number) => {
  return questions.filter(q => q.chapter === chapterId);
};

export const getRandomComprehensiveQuestions = (count: number = 30) => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
