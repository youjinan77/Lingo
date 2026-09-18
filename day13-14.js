// Verified learning records. Examples below are supplementary teaching examples.
(() => {
  const vocabulary13=[
    ['accomplish','v.','完成；实现','动词','We can accomplish a goal step by step.'],
    ['adjust','v.','调整；适应','动词','It takes time to adjust to a new environment.'],
    ['assess','v.','评估；评价','动词','We assess our progress every week.'],
    ['demonstrate','v.','证明；展示','动词','The results demonstrate that practice is useful.'],
    ['encounter','v.','遇到；遭遇','动词','Students studying abroad may encounter difficulties.'],
    ['enhance','v.','提高；增强','动词','Reading can enhance your language skills.'],
    ['expose','v.','使接触；暴露','动词','Books expose us to different ideas.'],
    ['interpret','v.','理解；解释','动词','We need to interpret the results carefully.'],
    ['occur','v.','发生；出现','动词','Problems can occur when we rush.'],
    ['preserve','v.','保护；保存','动词','We should preserve local culture.'],
    ['reveal','v.','揭示；显示','动词','The study may reveal that habits affect learning.'],
    ['sufficient','adj.','足够的；充分的','形容词','We need sufficient evidence before making a decision.'],
    ['temporary','adj.','暂时的','形容词','This is a temporary change.'],
    ['trend','n.','趋势；倾向','名词','There is a growing trend towards online learning.'],
    ['evidence','n.','证据','名词','The evidence supports this explanation.']
  ];
  window.LINGO_DAY13_WORDS=vocabulary13.map(w=>w[0]);
  for(const [word,pos,meaning,group,example] of vocabulary13){const existing=words.find(w=>w.word===word);if(existing)existing.example=example;else words.push({word,pos,meaning,group,example,day:13});}
  const vocabulary=[
    ['adequate','adj.','足够的；适当的','形容词','We need adequate time to prepare.'],
    ['anticipate','v.','预期；预料','动词','We anticipate that the new method will help.'],
    ['attribute','v.','把……归因于','动词','She attributes her progress to regular practice.'],
    ['compensate','v.','补偿；弥补','动词','Extra practice can help compensate for lost time.'],
    ['considerable','adj.','相当大的；相当多的','形容词','Learning a language requires considerable effort.'],
    ['consistent','adj.','始终一致的；相符的','形容词','His answer is consistent with the information in the text.'],
    ['derive','v.','源自；获得','动词','Many useful ideas derive from experience.'],
    ['distinguish','v.','区分；辨别','动词','We need to distinguish between facts and opinions.'],
    ['emphasize','v.','强调','动词','The teacher emphasized the importance of practice.'],
    ['ensure','v.','确保；保证','动词','Please ensure that every question has an answer.'],
    ['fundamental','adj.','根本的；基础的；十分重要的','形容词','Regular practice is fundamental to progress.'],
    ['inevitable','adj.','不可避免的','形容词','It is inevitable that we will make some mistakes.'],
    ['perceive','v.','察觉；认为；看待','动词','Try to perceive a mistake as an opportunity to learn.'],
    ['potential','adj./n.','潜在的；潜力','形容词','This method has the potential to improve learning.'],
    ['substantial','adj.','大量的；重大的；可观的','形容词','She has made substantial progress this month.']
  ];
  window.LINGO_DAY14_WORDS=vocabulary.map(w=>w[0]);
  for(const [word,pos,meaning,group,example] of vocabulary){
    const existing=words.filter(w=>w.word===word);
    if(existing.length){existing.forEach(w=>{if(word!=='potential'||w.pos==='n.')w.example=example;});}
    else words.push({word,pos,meaning,group,example,day:14});
  }
  const collocations=[
    ['anticipate that','预期……','We anticipate that the weather will improve.'],
    ['attribute A to B','把 A 归因于 B','She attributes her progress to regular practice.'],
    ['compensate for sth.','弥补某事；补偿某事','More practice can compensate for lost time.'],
    ['a considerable amount of','相当多的……','The project requires a considerable amount of time.'],
    ['be consistent with','与……一致','Your answer is consistent with the passage.'],
    ['derive from','源自……','Confidence can derive from experience.'],
    ['distinguish between A and B','区分 A 和 B','Distinguish between facts and opinions.'],
    ['emphasize the importance of','强调……的重要性','Teachers emphasize the importance of regular practice.'],
    ['ensure that','确保……','Ensure that you understand the question.'],
    ['be fundamental to','对……至关重要；是……的基础','Trust is fundamental to a good relationship.'],
    ['It is inevitable that...','……是不可避免的','It is inevitable that plans will sometimes change.'],
    ['perceive A as B','把 A 看作 B','We can perceive a challenge as an opportunity.'],
    ['potential risk/problem','潜在风险／问题','We need to identify a potential problem.'],
    ['have the potential to do','有做某事的潜力','Everyone has the potential to make progress.'],
    ['substantial change/evidence/amount','重大变化／大量证据／可观的数量','The new plan has brought a substantial change.']
  ];
  for(const [phrase,meaning,example] of collocations){if(!phrases.some(p=>p.phrase===phrase))phrases.push({phrase,meaning,example,day:14});}
  const title='Day 13：FALSE 与 NOT GIVEN';
  if(!grammar.some(g=>g.title===title))grammar.push({title,tag:'复习强化',summary:'原文明确冲突 → FALSE；原文信息不足 → NOT GIVEN。',details:['先定位原文，再逐一比较题干中的人物、动作、范围和程度。','FALSE：原文给出的信息与题干矛盾。NOT GIVEN：原文没有足够信息证实或否定题干。','特别留意 proved / always / never / all / only / completely 等表达；出现绝对词不代表答案必然是 FALSE。','补充示例：原文 Some students walk to school. 题干 All students take a bus to school. → FALSE，因为有学生步行，与“全部坐公交”矛盾。','补充示例：原文 Some students walk to school. 题干 Most students walk to school. → NOT GIVEN，因为 some 没说明是否占多数。']});
  const extraPhrases=[
    ['accomplish a goal/task','完成目标／任务','We can accomplish a task together.'],['adjust to sth.','适应……','She is adjusting to university life.'],['assess the situation/progress','评估情况／进度','Assess the situation before you act.'],['demonstrate that…','表明／证明……','The results demonstrate that preparation matters.'],['encounter difficulties','遇到困难','We sometimes encounter difficulties.'],['enhance skills/performance','增强技能／提高表现','Regular practice can enhance skills.'],['expose sb. to sth.','使某人接触……','Reading exposes students to different ideas.'],['interpret information/results','理解、解释信息／结果','We should interpret information carefully.'],['problems occur','问题发生','Problems occur when instructions are unclear.'],['preserve culture/resources','保护文化／保存资源','We should preserve local culture.'],['reveal that…','揭示……','The results reveal that the method is effective.'],['sufficient evidence/time','充分的证据／足够的时间','We need sufficient time to prepare.'],['temporary result/change','暂时的结果／变化','This is a temporary change.'],['a growing trend','日益增长的趋势','There is a growing trend towards online learning.'],['adequate time/resources','足够的时间／资源','Students need adequate resources.'],['considerable pressure','相当大的压力','He is under considerable pressure.'],['substantial evidence','大量、充分的证据','There is substantial evidence to support this view.'],['divide a large goal into smaller tasks','把大目标分成小任务','Divide a large goal into smaller tasks to reduce pressure.'],['failed attempt / unsuccessful attempt','失败的尝试（同义替换）','A failed attempt can teach us something useful.'],['begin with a small action / starting small','从一个小行动开始','Begin with a small action today.'],['environment / surroundings','环境（同义识别）','Our surroundings can affect our concentration.'],['realistic goal / achievable aim','现实可实现的目标','Set a realistic goal for this week.']
  ];
  for(const [phrase,meaning,example] of extraPhrases){if(!phrases.some(p=>p.phrase===phrase))phrases.push({phrase,meaning,example});}
  const lessons=[
    ['Day 13：宾语从句 vs 定语从句','重点','宾语从句补充“想什么、相信什么”等内容；定语从句修饰名词。',['I think that music is important. → 主句 I think；that music is important 作 think 的宾语。','The music that I like is relaxing. → 主句 The music is relaxing；that I like 修饰 music。','“什么？”与“什么样的？”可作入门提示，最终还要看从句位置与成分：宾语从句中的 that 通常只连接，不充当从句成分；定语从句中的 that 在从句中作主语或宾语。']],
    ['Day 13：长难句分层练习','重点','先提取主干，再找宾语从句、非谓语修饰和定语从句。',['Researchers believe that students using digital tools can develop skills that help them learn more independently.','主句 Researchers / believe；宾语从句主干 students / can develop / skills。using digital tools 修饰 students；that help them learn more independently 修饰 skills。','骨架：Researchers believe that students can develop skills.','Teachers suggest that students studying independently should develop habits that improve their learning efficiency.','主句 Teachers / suggest；宾语从句 students / should develop / habits。studying independently 修饰 students；that improve their learning efficiency 修饰 habits。']],
    ['Day 14：doing 修饰名词','非谓语','名词后的 doing 短语可作修饰语，不要自动当成谓语。',['Students using online resources can access information. → 主干 Students / can access / information。using online resources 修饰 Students，可理解为 who use online resources。','Researchers examining the effects of music have found considerable differences. → 主干 Researchers / have found / differences；examining the effects of music 修饰 Researchers。','Students studying abroad may encounter difficulties. → studying abroad 修饰 Students；完整谓语是 may encounter。']],
    ['Day 14：完整识别谓语','重点','情态动词或助动词与后面的实义动词要一起识别。',['Researchers studying human behaviour have discovered considerable differences.','主语中心词 Researchers；studying human behaviour 是修饰语；谓语应写 have discovered，不能只写 have。','may develop / can improve / should study / have discovered 都要完整识别。','doing 也可以参与进行时谓语：Students are studying. 此时完整谓语是 are studying，而不是 studying 单独充当谓语。']],
    ['Day 14：doing 短语整体作主语','非谓语','把“做某事”作为一整件事说时，整个动名词短语都可以作主语。',['Reading English every day is useful. → 主语 Reading English every day；谓语 is；useful 是表语。','Studying abroad can be challenging. → 主语 Studying abroad；完整谓语 can be；challenging 是表语。','Taking time to examine evidence, consider alternative explanations and distinguish between assumptions and facts may help individuals make more careful decisions.','完整主语：Taking time to examine evidence, consider alternative explanations and distinguish between assumptions and facts；完整谓语：may help。','to 后的 examine、consider、distinguish 是并列动作；不能只把 Taking 或 Taking time 写成完整主语。']],
    ['Day 14：attribute 与 perceive','易混词','attribute 强调原因；perceive 强调看法。',['attribute A to B = 把 A 归因于 B。Researchers attribute the result to a lack of sleep.','perceive A as B = 把 A 看作 B。Some people perceive stress as a challenge.','词汇测试 9/10，attribute 搭配复测已答对。']],
    ['Day 13–14：同义替换与转折','复习强化','抓住段落主旨，同时核对转折后的条件和限制。',['adequate / sufficient / enough 可表达“足够”；considerable / substantial 可表达“相当大、大量”，但不代表在所有搭配里都能任意互换。','encounter difficulties 正确；difficult 是形容词，不能写 difficults。','divide a large goal into smaller tasks → reduce pressure，不是 make learning more intensive。','However, simply expecting success will not ensure a good result. Adequate preparation and consistent effort remain fundamental.','积极期待不能代替充分准备与持续努力。遇到 however / but / although / nevertheless，注意前后逻辑。','精读流程：做题 → 批改 → 找最难句 → 拆主谓结构 → 精读 → 再理解。']]
  ];
  for(const [title,tag,summary,details] of lessons){if(!grammar.some(g=>g.title===title))grammar.push({title,tag,summary,details});}
  const tf=grammar.find(g=>g.title==='Day 13：FALSE 与 NOT GIVEN');tf.details.push('同一研究、同一命题的语境下，原文 There is insufficient evidence to conclude X. 与题目 Researchers have proved X. 明确冲突，判 FALSE；如果研究对象或主体不同，还要核对上下文。');
  document.querySelector('.top .muted').textContent='Day 1–14';
  const subtitle=document.querySelector('#home .hero > p');if(subtitle)subtitle.textContent='Day 13–14 已确认内容已同步 · CET-4 + IELTS 双线 · 每日约 1.5–2 小时';
  const session=document.querySelector('#daily .session');
  if(session)session.innerHTML='<div><span class="badge">Day 13–14 正式归档</span><h2>下一步：读懂句子。</h2><p>Matching Headings：Day 13 4/4 → Day 14 5/5。Day 15 保持当前阅读难度，加强长难句拆解。</p></div>';
  const tip=document.querySelector('#home .tip');if(tip)tip.innerHTML='<b>Day 15 接着做</b><p>系统复习 Day 11–14。继续 IELTS T/F/NG《The Effects of Short Breaks》（待完成，不计为已做）。按照“做题 → 批改 → 找最难句 → 拆主谓 → 精读 → 再理解”的顺序练习。</p>';
  // The earlier Day 12 checklist stays labelled as its original day.
  const day12Checklist=document.querySelector('#daily summary');if(day12Checklist)day12Checklist.textContent='Day 12 历史完成内容';
  const label=document.querySelector('#mistakes .hero p');if(label)label.textContent='保留 Day 12 的记录，并补充 Day 13–14 的复习重点。';
  const heading=document.querySelector('#mistakes .k');if(heading)heading.textContent='DAY 12–14 REVIEW';
  const weakList=document.querySelector('#mistakes .list');
  if(weakList){for(const [title,body,kind] of [['FALSE / NOT GIVEN','Day 13 T/F/NG：5/7。明确冲突才判 FALSE；信息不足判 NOT GIVEN。','阅读'],['attribute A to B / perceive A as B','Day 14 词汇 9/10；attribute 搭配复测已正确。attribute 看原因，perceive 看看法。','搭配'],['Day 14：主旨判断与逐句理解','Matching Headings 5/5，但 E 段逐句理解仍需练习。做对题后也要找最难句，拆主谓，再精读。','精读'],['Day 14：谓语要找完整','have discovered 不能只写 have；may develop / can improve / should study 都整体识别。','语法'],['Day 14：doing 的两种角色','Students studying abroad… 中 doing 修饰名词；Studying abroad can be challenging. 中整个 doing 短语作主语。','语法']]){const el=document.createElement('div');el.className='item';const box=document.createElement('div'),h=document.createElement('h3'),p=document.createElement('p'),badge=document.createElement('span');h.textContent=title;p.textContent=body;badge.textContent=kind;badge.className='badge';box.append(h,p);el.append(box,badge);weakList.append(el);}}
  const ex=document.getElementById('exercises');
  if(ex){const section=document.createElement('div');section.innerHTML=`<article class="gcard exercise"><span class="badge">Day 13 · 正式归档</span><h3>Day 13 学习记录</h3><p>词汇、语法、CET-4 阅读 ×2、IELTS 阅读 ×2 已完成。听力跳过，未标记完成。</p><p>CET-4 Reading 1：5/5；Reading 2：5/6。</p><p>IELTS Matching Headings：4/4；T/F/NG：5/7。Matching Headings 从 Day 12 的 1/4 提升到 4/4。</p><p>语法：宾语从句 vs 定语从句；长难句分层；using / studying 作名词修饰语。</p><p>assess 是 Day 12 已学词，本次归为复习。</p><details><summary>查看 Day 13 的 15 词</summary>${vocabulary13.map(v=>`<p><b>${v[0]}</b> ${v[1]} · ${v[2]}<br>${v[4]}</p>`).join('')}</details></article><article class="gcard exercise"><span class="badge">Day 14 · 正式归档</span><h3>Day 14 学习记录</h3><p>15 词及词汇测试已完成，成绩 9/10；attribute 搭配复测已答对。</p><p>语法：doing 修饰名词；完整识别谓语；整个 doing 短语作主语。</p><p>CET-4 Reading 1：5/6；Reading 2：6/7。</p><p>IELTS Matching Headings：5/5。A—vii；B—i；C—iii；D—ii；E—vi。</p><p>待继续：IELTS T/F/NG《The Effects of Short Breaks》，未计入完成。此总结未记录 Day 14 听力完成情况。</p><p>阅读流程：做题 → 批改 → 找最难句 → 拆主谓结构 → 精读 → 再理解。</p><p>potential 按复习词保留，不重复计数。例句为复习补充；词汇、搭配、语法和成绩以本次提供的总结为依据。</p><details><summary>查看 Day 14 的 15 词</summary>${vocabulary.map(v=>`<p><b>${v[0]}</b> ${v[1]} · ${v[2]}<br>${v[4]}</p>`).join('')}</details></article>`;ex.append(...section.children);}
  init();
})();
