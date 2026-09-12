'use strict';
// Day 12 sync layer — CET-4 × IELTS
const day12Words=[
['assess','v.','评估；评价','动词'],['alternative','n./adj.','替代方案；可替代的','名词'],['capacity','n.','能力；容量','名词'],['circumstance','n.','情况；条件；环境','名词'],['decline','v./n.','下降；减少；拒绝；衰退','动词'],['emerge','v.','出现；显现','动词'],['evident','adj.','明显的；显而易见的','形容词'],['generate','v.','产生；创造','动词'],['restrict','v.','限制；约束','动词']];
for(const [word,pos,meaning,group] of day12Words){if(!words.some(w=>w.word===word))words.push({word,pos,meaning,group});}
const day12Phrases=[
['an alternative to sth.','……的替代方案'],['capacity to do sth.','做某事的能力'],['under different circumstances','在不同情况下'],['a decline in','……的下降'],['It is evident that...','很明显……'],['indicate that...','表明……'],['restrict A to B','将A限制在B'],['Something has come up.','临时有事了'],['prefer doing sth.','更喜欢做某事'],['listen to music','听音乐'],['make sb. + adj.','使某人……'],['fill A with B','用B填满A']];
for(const [phrase,meaning] of day12Phrases){if(!phrases.some(p=>p.phrase===phrase))phrases.push({phrase,meaning});}
const day12Grammar=[
{title:'Day 12：宾语从句',tag:'重点',summary:'主句 + that + 完整句子；that 是连接词，不是谓语。',details:['Many people believe that technology has improved our lives.','先找主句主语和谓语，再判断 that 后面的完整句子。']},
{title:'Day 12：长难句分层',tag:'重点',summary:'先找主干，再括出宾语从句和定语从句。',details:['Studies indicate [that people [who exercise regularly] tend to have better mental health].','一个长句中可以同时出现多个定语从句，并修饰不同的先行词。']},
{title:'Day 12：情态动词谓语',tag:'重点',summary:'情态动词 + 动词原形共同构成谓语。',details:['Students may have fewer opportunities. → 谓语是 may have。']},
{title:'IELTS Reading：Matching Headings',tag:'复习强化',summary:'先概括整段中心思想，不要看到相同关键词就直接选标题。',details:['technology 出现在段落里，不代表中心思想就是 technology。','标题必须覆盖整段，而不是只对应其中一句。']},
{title:'IELTS Reading：T/F/NG',tag:'复习强化',summary:'TRUE=同义；FALSE=明确相反；NOT GIVEN=文章信息不足。',details:['不能用常识补充文章没有说的信息。','警惕 always / all / exactly 等绝对表达。']}];
for(const g of day12Grammar){if(!grammar.some(x=>x.title===g.title))grammar.push(g);}
// Refresh counters and searchable knowledge base after adding Day 12.
if(typeof init==='function')init();
// Update visible course identity and progress.
document.querySelector('.top .muted').textContent='Day 1–12';
const home=document.querySelector('#home .hero');
if(home){const k=home.querySelector('.k');if(k)k.textContent='CET-4 × IELTS KNOWLEDGE BASE';const p=home.querySelector(':scope > p');if(p)p.textContent='已整理 Day 1–12 · CET-4 + IELTS 双线 · 每日约 1.5–2 小时';}
const tip=document.querySelector('#home .tip');
if(tip)tip.innerHTML='<b>Day 12 已完成</b><p>15词学习 · 宾语从句/定语从句与长难句 · 4篇阅读 · British Council 真实材料精听 · IELTS Speaking Part 1。</p>';
// Replace review panel with today's real weaknesses and wins.
const mistakes=document.getElementById('mistakes');
if(mistakes)mistakes.innerHTML=`<div class="hero"><div class="k">DAY 12 REVIEW</div><h1>今天的薄弱点</h1><p>下一次学习优先复习这些。</p></div><div class="list"><div class="item"><div><h3>Matching Headings</h3><p>1/4：先概括整段中心思想，不要被关键词带走。</p></div><span class="badge">IELTS 阅读</span></div><div class="item"><div><h3>restrict / decline</h3><p>restrict = 主动限制；decline = 下降/减少。</p></div><span class="badge">词汇</span></div><div class="item"><div><h3>定语从句范围</h3><p>完整划出 who/which/that 引导的从句，并确认修饰哪个先行词。</p></div><span class="badge">语法</span></div><div class="item"><div><h3>听力具体信息</h3><p>能抓大意，但要继续练活动、人名、原因和固定表达。</p></div><span class="badge">Listening</span></div></div>`;
// Add a concise Day 12 learning record to Practice.
const ex=document.getElementById('exercises');
if(ex)ex.innerHTML=`<article class="gcard"><span class="badge">Day 12 · IELTS Day 1</span><h3>今日学习记录</h3><p><b>阅读：</b>CET-4 4/5、6/6；IELTS T/F/NG 5/5；Matching Headings 1/4。</p><p><b>听力：</b>British Council · Changing plans。流程：第一遍考试式听 → 第二遍抓大意 → 第三遍精听 → Transcript 查漏。</p><p><b>听力重点：</b>play · Nancy’s birthday party · concert · dinner · Something’s come up.</p><p><b>口语：</b>Music。重点结构：listen to music / prefer doing / make sb. + adj. / fill A with B / in my own world。</p></article>`;
// Daily checklist for the new 1.5–2h structure.
const daily=document.getElementById('daily');
if(daily)daily.innerHTML=`<div class="session"><div><span class="badge">CET-4 Day 12 × IELTS Day 1</span><h2>今日已完成</h2><p>双线学习正式开始；下一次继续强化 IELTS Matching Headings 与真实材料听力。</p></div></div><details class="taskbox" open><summary>今日完成内容</summary><label>✓ 词汇：15词 + 搭配 + 例句 + 测试</label><label>✓ 语法：宾语从句、定语从句、长难句拆解</label><label>✓ 阅读：4篇（2 CET-4 + 2 IELTS）</label><label>✓ 听力：British Council 真实材料精听</label><label>✓ IELTS Speaking Part 1：Music</label></details>`;
// Ensure final counts reflect Day 12 additions.
if(document.getElementById('wc'))wc.textContent=new Set(words.map(w=>w.word)).size;
if(document.getElementById('pc'))pc.textContent=phrases.length;
if(document.getElementById('gc'))gc.textContent=grammar.length;
