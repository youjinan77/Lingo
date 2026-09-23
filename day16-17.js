// Learner-confirmed archive. English vocabulary examples are supplementary.
(() => {
  const days={16:[
    ['abandon','v.','放弃；抛弃','abandon a plan / idea','放弃计划／想法','We should not abandon a useful plan too quickly.'],
    ['absorb','v.','吸收；理解；掌握','absorb information / knowledge','吸收信息／知识','It takes time to absorb new information.'],
    ['alter','v.','改变；修改','alter the way…','改变……的方式','Practice can alter the way we learn.'],
    ['annual','adj.','每年的；年度的','annual report / meeting','年度报告／会议','The annual report describes our progress.'],
    ['apparent','adj.','明显的；表面上的','It is apparent that…','显然……','It is apparent that the method helps.'],
    ['approximately','adv.','大约；大概','approximately / about / around','大约（近义表达）','The task takes approximately twenty minutes.'],
    ['barrier','n.','障碍；阻碍','a barrier to sth.','……的障碍','Fear can be a barrier to communication.'],
    ['collapse','v./n.','倒塌；崩溃','collapse','倒塌；崩溃','The old building may collapse.'],
    ['commit','v.','投入；承诺','commit to doing sth.','致力于／承诺做某事','I commit to reading every day.'],
    ['compete','v.','竞争','compete with sb.','与某人竞争','We compete with other teams.'],
    ['domestic','adj.','国内的；家庭的','domestic market / travel','国内市场／旅行','Domestic travel can help us understand our country.'],
    ['expand','v.','扩大；扩展','expand knowledge / opportunities','拓展知识／机会','Reading can expand our knowledge.'],
    ['guarantee','v./n.','保证；担保','guarantee success / quality','保证成功／质量','Working longer does not guarantee success.'],
    ['priority','n.','优先事项；优先权','give priority to sth.','优先考虑某事','Give priority to important tasks.']
  ],17:[
    ['accumulate','v.','积累；积聚','accumulate knowledge / experience / wealth','积累知识／经验／财富','We accumulate experience through practice.'],
    ['accurate','adj.','准确的；精确的','accurate information / data / an accurate description','准确的信息／数据／描述','We need accurate information.'],
    ['advocate','v.','提倡；主张','advocate doing sth.','提倡做某事','Teachers advocate taking regular breaks.'],
    ['cease','v.','停止；终止','cease to do sth. / cease doing sth.','停止做某事','The factory ceased producing these devices.'],
    ['compel','v.','迫使；强迫','compel sb. to do sth. / be compelled to do sth.','迫使某人／被迫做某事','The heavy rain compelled us to stay inside.'],
    ['constitute','v.','构成；组成','constitute a major part of… / a threat / a problem','构成……的主要部分／威胁／问题','Small tasks constitute a major part of our work.'],
    ['eliminate','v.','消除；排除','eliminate a problem / unnecessary tasks','消除问题／排除不必要的任务','A clear plan can eliminate unnecessary tasks.'],
    ['facilitate','v.','促进；使便利','facilitate learning / communication / the development of…','促进学习／沟通／……的发展','Clear examples facilitate learning.'],
    ['impose','v.','强加；施加','impose A on B / impose restrictions on…','把 A 强加于 B／对……施加限制','The school imposed restrictions on phone use.'],
    ['resist','v.','抵抗；抵制；忍住','resist doing sth. / resist pressure / change','忍住做某事／抵抗压力／抵制变化','Try to resist checking your phone while studying.'],
    ['exceed','v.','超过；超出','exceed expectations / the limit','超出预期／限制','The results exceeded our expectations.'],
    ['incentive','n.','激励；动力','provide an incentive / an incentive to do sth.','提供激励／做某事的动力','Progress provides an incentive to continue.'],
    ['reluctant','adj.','不情愿的','be reluctant to do sth.','不情愿做某事','She was reluctant to abandon her plan.'],
    ['transform','v.','改变；转变','transform A into B / transform the way…','把 A 变成 B／改变……的方式','Technology can transform the way people communicate.'],
    ['undergo','v.','经历；经受','undergo changes / treatment / training','经历变化／接受治疗／培训','New employees undergo training.']
  ]};
  for(const [day,rows] of Object.entries(days)){
    window['LINGO_DAY'+day+'_WORDS']=rows.map(v=>v[0]);
    for(const [word,pos,meaning,phrase,translation,example] of rows){
      const old=words.find(w=>w.word===word);
      if(old)old.example=example;
      else words.push({word,pos,meaning,group:pos.startsWith('v')?'动词':pos==='adj.'?'形容词':pos==='adv.'?'副词':'名词',example,day:Number(day)});
      if(!phrases.some(p=>p.phrase===phrase))phrases.push({phrase,meaning:translation,example,day:Number(day)});
    }
  }
  const extra=[
    ['participate in sth.','参加某事（已学词复习，不计 Day 16 新词）','Students participate in school activities.'],
    ['without sufficient rest','没有足够的休息','Without sufficient rest, we may find it difficult to concentrate.'],
    ['prevent sb. from doing sth.','阻止／妨碍某人做某事','Noise can prevent students from concentrating.'],
    ['concentrate on sth.','专注于……','Concentrate on one task at a time.'],
    ['contribute to sth.','有助于……','Regular practice contributes to progress.'],
    ['be absorbed in sth.','沉浸于；全神贯注于……','She was absorbed in her book.'],
    ['However, this does not mean that…','然而，这并不意味着……','Small goals are useful. However, this does not mean that people should abandon long-term goals.'],
    ['the way people communicate','人们交流的方式；communicate 是动词','Technology has transformed the way people communicate.']
  ];
  for(const [phrase,meaning,example] of extra)if(!phrases.some(p=>p.phrase===phrase))phrases.push({phrase,meaning,example});
  const lessons=[
    ['Day 16：find it + adj. + to do','句型','it 是形式宾语，不定式短语表达真正的内容。',[
      'Many college students find it difficult to maintain good study habits. = 很多大学生觉得保持良好的学习习惯很难。',
      'find + it（形式宾语）+ difficult（宾语补足语）+ to maintain good study habits（真正宾语）。',
      'People trying to absorb too much information at once may find it difficult to concentrate.',
      '主语中心词 People；trying to absorb too much information at once 后置修饰 People；完整谓语 may find。Day 16 这一结构掌握较稳定。']],
    ['Day 16：时间管理写作结构','句型','It is + adj. + for sb. + to do sth.；doing 短语作主语。',[
      'It is crucial for college students to use time effectively. = 对大学生而言，有效利用时间至关重要。it 是形式主语，不定式短语是真正主语。',
      'Using time effectively can not only improve learning efficiency, but also help students manage their lives better.',
      'Using time effectively 整体作主语；can 后连接 improve 与 help 两个并列动词。',
      'For college students to say ✗ → For college students,…；learn to using ✗ → learn to use；self time ✗ → their time / manage their time。']],
    ['Day 17：so…that… 与 such…that…','句型','如此……以至于……；注意形容词、副词和名词短语的区别。',[
      'so + adj./adv. + that：The problem was so complex that I could not solve it.',
      'such + (a/an) + adj. + noun + that：It was such a complex problem that I could not solve it.',
      '不可数名词前不加 a/an：such useful information ✓；such a useful information ✗。复数名词也不用 a/an。',
      '表达数量时：so many students that…；so much information that…；so few / so little。',
      '这里 little 表示数量少；表示“小的”修饰名词时可用 such，如 such a little child。']],
    ['Day 17：搭配、词性与词形','复习强化','固定搭配要连同介词、动词形式一起记。',[
      'advocate doing ✓，advocate to do ✗；resist doing；commit to doing；compete with；participate in。',
      'accurate adj. 准确的；accuracy n. 准确性；accurately adv. 准确地。accurate information 是本次复测重点。',
      'communicate 是动词；communication 是名词。the way people communicate 中 people 作主语，communicate 作谓语。',
      'undergo → underwent → undergone。facilitate 可理解为 make sth. easier。']],
    ['Day 16–17：小词逻辑与代词指代','重点','圈出否定和转折，再追踪代词具体指向。',[
      'without sufficient rest = 没有足够的休息。漏掉 without 会把意思翻反。注意 without / not / but / however / yet。',
      'Day 16 的 this state 指前文“注意力已经下降的状态”。urgent ≠ important：紧急不一定重要。',
      'However, this does not mean that people should abandon long-term goals.',
      '这里 this 回指前文“小目标有用、容易完成、可以降低压力”等内容，不是“大目标不可能实现”。',
      '遇到 this / that / these / they，主动问“它具体指前面的哪件事或哪些人／物？”']]
  ];
  for(const [title,tag,summary,details] of lessons)grammar.push({title,tag,summary,details});
  const records=[
    ['Day 16 学习记录',[
      '正式词汇清单 14 词；participate 前面已正式学过，本日仅复习，不再算新词。已有词条保留，不重复计数。',
      ...days[16].map(v=>`${v[0]} ${v[1]} ${v[2]} · ${v[3]}`),
      '拼写 approximately、guarantee 首测不稳，复测已正确。本次总结未提供完整词汇测试分数，不补记。']],
    ['Day 16 阅读：Why Taking Notes by Hand May Help Learning',[
      '成绩 7/7。',
      '阅读词：handwriting = 手写；note-taking = 记笔记；reorganize = 重新组织；material = 学习材料、内容；device = 设备；depending on = 取决于……。',
      '以上仅作为阅读词汇归档，不计当天正式新词。']],
    ['Day 16 阅读：Why Being Busy Does Not Always Mean Being Productive',[
      '成绩 4/7；两篇阅读合计 11/14。主要问题是小词、逻辑与局部句意。',
      'without sufficient rest = 没有足够的休息；漏读 without 会把整句翻反。',
      'this state = 前文注意力已经下降的状态；prevent sb. from doing sth. = 妨碍某人做某事。',
      'urgent ≠ important。阅读特别留意 without / not / but / however / yet。']],
    ['Day 16 听力：An Introduction to a Lecture',[
      '真实材料：British Council B1。第一轮基础信息题 4/4；第二遍理解自评约 50%。',
      '能听见不少单词，但还不能立刻组合成完整句意。基础题全对不代表全文已听懂。',
      'be absorbed in sth. = 全神贯注于／沉浸于……。',
      '下一阶段：抓关键词 → 找句子主干 → 判断整句在说什么，不强求听清每个词。']],
    ['Day 16 写作：The Importance of Using Time Effectively',[
      '完成状态：实际写了第一段三句话，尚未完成整篇。本次总结未给出完整三句话原稿，以下保留提供的句子与纠错。',
      'It is crucial for college students to use time effectively.',
      'Using time effectively can not only improve learning efficiency, but also help students manage their lives better.',
      'For college students to say → For college students,…；learn to using → learn to use；self time → their time / manage their time。',
      '巩固 It is + adj. + for sb. + to do sth. 和 doing 短语作主语。']],
    ['Day 17 学习记录',[
      '15 个正式词汇；词汇首轮 13/15，错题复测 2/2。',
      ...days[17].map(v=>`${v[0]} ${v[1]} ${v[2]} · ${v[3]}`),
      '错题 accurate information、the way people communicate 已复测纠正。',
      '语法：so…that… / such…that…；阅读 6/7。本次没有提供 Day 17 其他阅读、听力或写作完成记录。']],
    ['Day 17 阅读：Why Small Goals Can Be Effective',[
      '成绩 6/7；唯一错题是 this 的指代。',
      'However, this does not mean that people should abandon long-term goals.',
      'this 指小目标有用、容易完成、降低压力等前文内容，不是“大目标不可能实现”。',
      'However, this does not mean that… = 然而，这并不意味着……。看到代词先定位它的具体指向。']],
    ['Day 18–20 学习安排',[
      'Day 18、Day 19 继续正常学习（计划，尚未计为已完成）。',
      'Day 20 系统复习，不加新词。重点：否定与转折小词、代词指代、固定搭配的介词和动词形式、词性判断。',
      '句子主干、doing 修饰语、doing 作主语比前几天稳定，继续在阅读和写作中复用。']]
  ];
  document.getElementById('exercises').insertAdjacentHTML('afterbegin',records.map(([title,ps])=>`<article class="gcard exercise"><span class="badge">${title.startsWith('Day 18')?'后续计划':'Day 16–17 · 正式归档'}</span><h3>${title}</h3>${ps.map(p=>`<p>${p}</p>`).join('')}</article>`).join(''));
  const weak=[
    ['Day 16–17：否定与转折小词','without / not / but / however / yet 不要漏读。without sufficient rest = 没有足够的休息。'],
    ['Day 16–17：代词指代','this state 指注意力下降的状态；Day 17 的 this 指小目标的益处。每次主动追问具体指向。'],
    ['Day 16–17：固定搭配与词性','compete with；participate in；commit to doing；resist doing；advocate doing。communicate 是动词，communication 是名词。'],
    ['Day 16–17：已纠正仍需复习','approximately、guarantee 拼写复测正确；accurate information 与 the way people communicate 复测 2/2。']
  ];
  document.querySelector('#mistakes .list').insertAdjacentHTML('afterbegin',weak.map(([t,p])=>`<article class="item"><h3>${t}</h3><p>${p}</p></article>`).join(''));
  document.querySelector('#mistakes .k').textContent='DAY 12–17 REVIEW';
  document.querySelector('#mistakes .hero p').textContent='当前重点：小词逻辑、代词指代、固定搭配与词性。历史记录继续保留。';
  document.querySelector('.top .muted').textContent='Day 1–17';
  document.querySelector('#home .hero > p').textContent='Day 16–17 正式归档 · 专注 CET-4 · 目标考试日期：12 月 13 日';
  document.querySelector('#daily .session').innerHTML='<div><span class="badge">Day 16–17 · 正式归档</span><h2>小词，也决定句意。</h2><p>Day 16 阅读 11/14 · 听力基础题 4/4；Day 17 词汇 13/15，复测 2/2 · 阅读 6/7。</p></div>';
  const taskbox=document.querySelector('#daily .taskbox');
  if(taskbox)taskbox.innerHTML='<summary>Day 16–17 完成内容</summary><p>✓ Day 16 正式词汇清单 14 词，participate 仅复习</p><p>✓ Day 17 正式词汇 15 词，错题复测 2/2</p><p>✓ find it + adj. + to do；so / such…that…</p><p>✓ 三篇阅读：7/7、4/7、6/7</p><p>✓ Day 16 真实听力；写作完成第一段三句话</p>';
  document.querySelector('#home .tip').innerHTML='<b>Day 18–19 正常学 · Day 20 系统复习</b><p>Day 20 不加新词。优先复习 without / not 等小词、this 的指代、介词与 doing 搭配、词性。听力练习：抓关键词 → 找主干 → 理解整句。以上是后续计划，不计为已完成。</p>';
  init();
})();
