// Day 15 archive supplied by the learner; vocabulary examples are supplementary.
(() => {
  const vocabulary = [
    ['acknowledge','v.','承认；认可','acknowledge that…','Researchers acknowledge that sleep matters.'],
    ['allocate','v.','分配','allocate A to B','Allocate more time to reading.'],
    ['assume','v.','假定；认为','assume that…','Do not assume that every method works.'],
    ['complex','adj.','复杂的','a complex problem','We need time to solve a complex problem.'],
    ['confirm','v.','确认；证实','confirm the result','Further tests can confirm the result.'],
    ['conventional','adj.','传统的；常规的','conventional methods','Conventional methods can still be useful.'],
    ['crucial','adj.','至关重要的','be crucial to sth.','Good study habits are crucial to college students.'],
    ['diminish','v.','减少；减弱','concentration diminishes','Concentration diminishes when we are tired.'],
    ['imply','v.','暗示；意味着','imply that…','The results imply that practice helps.'],
    ['initial','adj.','最初的','initial reaction/impression','My initial reaction was surprise.'],
    ['justify','v.','证明……合理','justify a decision','We need evidence to justify a decision.'],
    ['modify','v.','修改；调整','modify a method','We can modify a method to suit our needs.'],
    ['relevant','adj.','相关的','be relevant to sth.','This information is relevant to our task.'],
    ['retain','v.','保留；记住','retain information','Self-testing may help us retain information.'],
    ['valid','adj.','有效的；合理的','valid reason/evidence','She gave a valid reason for the change.']
  ];
  window.LINGO_DAY15_WORDS = vocabulary.map(v=>v[0]);
  for(const [word,pos,meaning,phrase,example] of vocabulary){
    const existing=words.find(w=>w.word===word);
    if(existing)existing.example=example;
    else words.push({word,pos,meaning,group:pos==='v.'?'动词':'形容词',example,day:15});
    if(!phrases.some(p=>p.phrase===phrase))phrases.push({phrase,meaning,example,day:15});
  }
  const patterns=[
    ['not only… but also…','不仅……而且……','They not only improve learning efficiency, but also help students manage their time better.'],
    ['help sb. (to) do sth.','帮助某人做某事','Good study habits help students learn effectively.'],
    ['make sb. + adj.','使某人……','A reasonable study plan can make students more focused.'],
    ['pay attention to doing sth.','重视／注意做某事；to 是介词','We should pay more attention to developing good study habits.'],
    ['First of all','首先','First of all, good study habits can help students complete their tasks.'],
    ['For example','例如','For example, a study plan can reduce the waste of time.'],
    ['In addition','此外','In addition, regular practice can improve learning ability.'],
    ['Therefore','因此','Therefore, we should develop good study habits.'],
    ['In conclusion','总之','In conclusion, good study habits are crucial to college students.']
  ];
  for(const [phrase,meaning,example] of patterns)if(!phrases.some(p=>p.phrase===phrase))phrases.push({phrase,meaning,example,day:15});
  const lessons=[
    ['Day 15：doing 修饰语与完整谓语','非谓语','先找完整谓语，再识别名词后的 doing 修饰语。',[
      'People working under pressure may make mistakes. → 主语中心词 People；完整谓语 may make；working under pressure 修饰 People。骨架 People may make mistakes.',
      'Researchers have confirmed that people using different learning strategies may retain information in different ways.',
      '主句 Researchers / have confirmed；that 引导宾语从句，从句 people / may retain；using different learning strategies 修饰 people。本题 5/5。',
      '错题：Researchers acknowledge that students using methods… may retain information… 从句不是 students + using，而是 students + may retain。',
      '遇到名词 + doing，继续寻找主句或从句的完整谓语，如 may retain、can improve、have confirmed。are studying 中 doing 参与进行时谓语，仍需结合句子结构判断。']],
    ['Day 15：doing 短语作主语','非谓语','修饰名词与整个短语作主语，要区分。',[
      'Students using digital tools can learn faster. → using digital tools 修饰 Students；谓语 can learn。',
      'Using digital tools can improve efficiency. → 主语 Using digital tools；谓语 can improve。',
      'Making a reasonable study plan can reduce the waste of time. → 主语 Making a reasonable study plan；谓语 can reduce。',
      'Maintaining good study habits can help students gradually improve their learning ability. → 整个 Maintaining good study habits 作主语；谓语 can help。']],
    ['Day 15：写作结构与词性','重点','在自己写的句子中复用结构，先写 → 修改 → 解释错误 → 再复用。',[
      'A is crucial to B. = A 对 B 至关重要。not only… but also… = 不仅……而且……。',
      'help sb. (to) do sth.；make sb. + adj.；pay attention to doing sth.。应写 pay attention to developing，而不是 pay attention to develop。',
      'efficiency 是名词“效率”；efficient 是形容词“高效的”；effectively 是副词“有效地”。complete tasks more effectively 正确，more efficiency 错误。',
      '连接词：First of all, / For example, / In addition, / Therefore, / In conclusion,。',
      '本篇结尾回指前文的 good study habits，用 develop and maintain these habits 更清楚；their habits 并非在所有语境中都错误。']],
    ['Day 15：同义词与记忆词辨析','复习强化','区分正式词汇与阅读中接触的词。',[
      'crucial ≈ fundamental；modify ≈ adjust；diminish ≈ decrease / decline。近义词仍需结合具体搭配使用。',
      'retain information：把信息保留在记忆中；recall information：把信息想起来；retrieve information：从记忆中提取信息。',
      'recall、retrieve、repeatedly（反复地）、not necessarily（不一定）只作为 Day 15 阅读词，不计入本日 15 个正式词。',
      'not necessarily ≠ definitely not。Expensive products are not necessarily better. = 贵的产品不一定更好。']]
  ];
  for(const [title,tag,summary,details] of lessons)grammar.push({title,tag,summary,details});
  document.querySelector('.top .muted').textContent='Day 1–15';
  document.querySelector('#home .k').textContent='CET-4 KNOWLEDGE BASE';
  document.querySelector('#home .hero > p').textContent='Day 15 正式归档 · 从今天起专注 CET-4 · 目标考试日期：12 月 13 日';
  document.querySelector('#daily .session').innerHTML='<div><span class="badge">Day 15 · CET-4</span><h2>开始自己写英语。</h2><p>单词 9/10 · 阅读 13/14（约 93%）· 完成第一篇四级三段式作文。</p></div>';
  const taskbox=document.querySelector('#daily .taskbox');
  if(taskbox)taskbox.innerHTML='<summary>Day 15 完成内容</summary><p>✓ 15 个正式词汇，crucial 拼写待复习</p><p>✓ 长难句拆解：核心题 5/5，doing 仍需强化</p><p>✓ Why We Forget Information：7/7</p><p>✓ Multitasking：6/7</p><p>✓ 第一篇 CET-4 作文：学习习惯</p>';
  document.querySelector('#home .tip').innerHTML='<b>下一步：四级精读 + 写作复用</b><p>复习 crucial 拼写与 doing 结构。做题 → 批改 → 找最难句 → 拆主谓 → 精读 → 再理解。写作继续“你先写 → 修改 → 解释错误 → 再复用”。从 Day 15 起停止 IELTS 专项，旧记录保留。</p>';
  document.querySelector('#mistakes .k').textContent='DAY 12–15 REVIEW';
  document.querySelector('#mistakes .hero p').textContent='优先复习 Day 15 四级易错点；以前的 IELTS 内容仅作历史记录。';
  const mistakes=[
    ['Day 15：crucial 拼写','cruial / cruil ✗ → crucial ✓。今天错写两次；逐字记 c-r-u-c-i-a-l。A is crucial to B.'],
    ['Day 15：不要把 doing 抢认成谓语','students using methods may retain… → 谓语 may retain，using methods 修饰 students。'],
    ['Day 15：写作词性与主语','complete tasks more effectively；Making a reasonable study plan can…；pay attention to developing；本篇回指学习习惯用 these habits。'],
    ['Day 15：阅读第 4 题','Students dividing their attention between several activities may process information less deeply. → make it harder to remember important details。分散注意力会让加工变浅，重要细节更难记住。']
  ];
  document.querySelector('#mistakes .list').insertAdjacentHTML('afterbegin',mistakes.map(([t,p])=>`<article class="item"><h3>${t}</h3><p>${p}</p></article>`).join(''));
  const essay=[
    'Good study habits are crucial to college students. They not only improve learning efficiency, but also help students manage their time better. Therefore, we should pay more attention to developing good study habits.',
    'First of all, good study habits can help students complete their study tasks more effectively. For example, making a reasonable study plan can reduce the waste of time and make students more focused. In addition, maintaining good study habits can help students gradually improve their learning ability.',
    'In conclusion, good study habits are crucial to college students. We should develop and maintain these habits from now on.'
  ];
  const cards=[
    ['Day 15 学习记录',[
      '从 Day 15 起停止 IELTS 专项，只备考 CET-4；目标考试日期 12 月 13 日。',
      '词汇 9/10；语法核心拆句题 5/5，但长句中 doing 仍需强化；阅读 7/7 + 6/7 = 13/14（约 93%）；完成第一篇四级三段式作文。',
      '本日 15 个正式词均计为已学；complex、relevant 在此前词库中已有，作为复习保留，不重复计数。已学不等于自动标熟。',
      ...vocabulary.map(v=>`${v[0]} ${v[1]} ${v[2]} · ${v[3]}`),
      '下一步保持阅读难度，加强逐句理解；作文逐步练到 120–150 词，不为字数硬凑。']],
    ['Day 15 阅读：Why We Forget Information',[
      '成绩 7/7。第二段虽然题目全对，仍进行了精读。',
      '阅读词（不计入正式 15 词）：recall = 回忆；retrieve = 提取、回想；repeatedly = 反复地；not necessarily = 不一定。',
      '第二段逻辑：遗忘不一定说明学习能力差 → 遗忘是自然现象 → 主动回忆可以强化记忆 → 自我测试有时比单纯重复阅读更有效。',
      'not necessarily 不等于 definitely not。retain 是保留，recall 是想起，retrieve 是提取。此处归档学习摘要；未提供的原文不补写。']],
    ['Day 15 阅读：Multitasking',[
      '成绩 6/7；第 4 题错选。两篇阅读合计 13/14。',
      'Students dividing their attention between several activities may process information less deeply.',
      '正确答案：make it harder to remember important details。分散注意力 → 信息加工较浅 → 难以保留重要细节。',
      '第二段：switch tasks → adjust attention → consume time → reduce efficiency。小的切换成本累积后会降低效率。',
      '第四段没有说所有 multitasking 都不好；简单任务有时可以同时进行。',
      'distinguish between activities that require serious concentration and those that can be performed with limited attention：区分需要高度集中注意力的任务和只需少量注意力的任务。']],
    ['Day 15 写作：The Importance of Developing Good Study Habits',[
      '第一篇 CET-4 三段式作文 · 保留本次完成的修改稿。',...essay,
      `当前正文 ${essay.join(' ').split(/\s+/).length} 词。以后逐步训练至稳定写出 120–150 词。方法：你先写 → 修改 → 解释错误 → 再复用。`]]
  ];
  const ex=document.getElementById('exercises');
  for(const p of ex.querySelectorAll('p'))if(p.textContent.includes('待继续：IELTS'))p.textContent+='（Day 15 起已暂停 IELTS，此项不再作为当前学习任务。）';
  ex.insertAdjacentHTML('afterbegin',cards.map(([t,ps])=>`<article class="gcard exercise"><span class="badge">Day 15 · 正式归档</span><h3>${t}</h3>${ps.map(p=>`<p>${p}</p>`).join('')}</article>`).join(''));
  init();
})();
