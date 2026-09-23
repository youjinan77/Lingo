(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const safe = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function read(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } }
  function save(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { $('review-notice').textContent = '当前浏览器无法保存进度，请允许网站存储。'; } }
  const notice = document.createElement('p'); notice.id = 'review-notice'; notice.setAttribute('role','status'); document.querySelector('main').append(notice);
  const exampleMap = new Map();
  words.slice(0,158).forEach((w,i) => exampleMap.set(w.word+'|'+w.pos, (window.LINGO_EXAMPLES || [])[i] || ''));
  const additions = {assess:'We assess our progress every week.',alternative:'Reading is an alternative to watching videos.',capacity:'Everyone has the capacity to learn.',circumstance:'We learn under different circumstances.',decline:'There was a decline in the number of mistakes.',emerge:'New ideas emerge when we work together.',evident:'It is evident that regular practice helps.',generate:'Group activities can generate new ideas.',restrict:'I restrict my study session to one task.'};
  const dictionary = new Map();
  words.forEach(w => {
    const meaning = {pos:w.pos,meaning:w.meaning,example:w.example||exampleMap.get(w.word+'|'+w.pos)||additions[w.word]||''};
    if(dictionary.has(w.word)) dictionary.get(w.word).senses.push(meaning);
    else dictionary.set(w.word,{word:w.word,senses:[meaning]});
  });
  const all = [...dictionary.keys()];
  const day12 = ['assess','adapt','alternative','aware','capacity','circumstance','decline','determine','emerge','establish','evaluate','evident','generate','indicate','restrict'].filter(w=>dictionary.has(w));
  let known = read('lingo_mastered_v2',[]); if(!Array.isArray(known))known=[];
  known = [...new Set(known.filter(w=>dictionary.has(w)))];
  let weak = read('lingo_review_weak_v1',[]); if(!Array.isArray(weak))weak=[]; weak=weak.filter(w=>dictionary.has(w));
  let session = read('lingo_review_session_v1',null);
  if(!session || !Array.isArray(session.queue) || !Array.isArray(session.completed) || !Array.isArray(session.initial) || !session.queue.every(w=>dictionary.has(w)) || !session.initial.every(w=>dictionary.has(w)))session=null;
  let revealed=false, undo=null, spellChecked=false, spellPeeked=false;
  let mode=read('lingo_review_mode_v1','spell');if(!['spell','recall'].includes(mode))mode='spell';
  let prefs=read('lingo_voice_v1',{}); if(!prefs||typeof prefs!=='object')prefs={};
  const nav=document.createElement('button'); nav.dataset.page='review'; nav.textContent='背单词'; document.querySelector('nav').children[1].before(nav);
  const section=document.createElement('section'); section.className='page'; section.id='review';
  section.innerHTML=`<div class="review-heading"><div><div class="k">A LITTLE EVERY DAY</div><h1>把单词，一个个记住。</h1><p>看中文拼写，也可以听音辨词 · 拼错可以重试</p></div><span class="notebook-tag">My vocabulary</span></div><div class="review-settings"><label>词库 <select id="deck"><option value="all">全部已学词</option><option value="day12">Day 12 词汇</option><option value="day13">Day 13 词汇</option><option value="day14">Day 14 词汇</option><option value="day15">Day 15 词汇</option><option value="day16">Day 16 词汇（14词）</option><option value="day17">Day 17 词汇</option><option value="weak">不认识的词</option><option value="unlearned">尚未标记掌握</option></select></label><label>练习 <select id="review-mode"><option value="spell">看中文拼单词</option><option value="recall">看单词回忆</option></select></label><label>发音 <select id="accent"><option value="en-US">美音</option><option value="en-GB">英音</option></select></label><label>语速 <select id="voice-rate"><option value="0.75">慢速</option><option value="0.9">适中</option><option value="1">正常</option></select></label><label>声音 <select id="voice-choice"><option value="">自动选择英语声音</option></select></label><button id="voice-preview">试听声音</button><label><input id="auto-voice" type="checkbox"> 自动读词</label><button id="new-round">开始新一组</button></div><p id="voice-status" role="status"></p><div id="flashcard" aria-live="polite"></div><p class="review-footnote">学习记录仅保存在当前浏览器。拼写模式按回车检查，再按回车继续；回忆模式空格翻面，1 不认识、2 认识。声音由设备提供，可选择试听；不同设备的音质可能不同。</p>`;
  document.querySelector('main').append(section);
  $('accent').value=['en-US','en-GB'].includes(prefs.accent)?prefs.accent:'en-US'; $('voice-rate').value=['0.75','0.9','1'].includes(String(prefs.rate))?String(prefs.rate):'0.9'; $('auto-voice').checked=prefs.auto===true;
  $('review-mode').value=mode;
  $('review-mode').onchange=()=>{mode=$('review-mode').value;save('lingo_review_mode_v1',mode);revealed=false;spellChecked=false;spellPeeked=false;render();};
  function storePrefs(){prefs={accent:$('accent').value,rate:Number($('voice-rate').value),auto:$('auto-voice').checked,voice:$('voice-choice').value};save('lingo_voice_v1',prefs);}
  let utterance=null;
  const normalize=lang=>lang.replace(/_/g,'-').toLowerCase();
  function voiceList(){return ('speechSynthesis' in window?window.speechSynthesis.getVoices():[]).filter(v=>normalize(v.lang)===normalize($('accent').value)).sort((a,b)=>score(b)-score(a));}
  function score(v){return (/premium|enhanced|natural|neural/i.test(v.name)?100:0)+(/google|samantha|daniel|serena|ava|allison/i.test(v.name)?20:0)+(v.default?1:0);}
  function refreshVoices(){
    const voices=voiceList(),select=$('voice-choice'),choice=select.value||prefs.voice||'';
    select.innerHTML='<option value="">自动选择英语声音</option>'+voices.map(v=>`<option value="${safe(v.voiceURI)}">${safe(v.name)}</option>`).join('');
    select.value=voices.some(v=>v.voiceURI===choice)?choice:'';
    const selected=voices.find(v=>v.voiceURI===select.value)||voices[0];
    $('voice-status').textContent=!('speechSynthesis' in window)?'当前浏览器不支持语音朗读。':selected?'当前声音：'+selected.name+' · 可试听后选择喜欢的声音。':'英语声音尚未列出，播放时使用设备英语语音；可稍后重新选择。';
  }
  if('speechSynthesis' in window)window.speechSynthesis.addEventListener('voiceschanged',refreshVoices);
  refreshVoices();
  $('accent').onchange=()=>{$('voice-choice').value='';prefs.voice='';refreshVoices();storePrefs();};
  $('voice-choice').onchange=()=>{storePrefs();refreshVoices();};
  ['voice-rate','auto-voice'].forEach(id=>$(id).addEventListener('change',storePrefs));
  $('voice-preview').onclick=()=>say('Hello. Let us practise English together.');
  function say(text){
    if(!('speechSynthesis' in window)){notice.textContent='当前浏览器不支持朗读，请使用支持设备语音的浏览器。';return;}
    notice.textContent='';window.speechSynthesis.cancel();utterance=new SpeechSynthesisUtterance(text);
    utterance.lang=$('accent').value;utterance.rate=Number($('voice-rate').value);utterance.pitch=1;utterance.volume=1;
    const voices=voiceList(),match=voices.find(v=>v.voiceURI===$('voice-choice').value)||voices[0];if(match)utterance.voice=match;
    utterance.onerror=e=>{if(!['canceled','interrupted'].includes(e.error))notice.textContent='朗读未能播放，请检查音量，或换一个英语声音再试。';};
    window.speechSynthesis.speak(utterance);
  }
  function persist(){save('lingo_review_session_v1',session);save('lingo_mastered_v2',known);save('lingo_review_weak_v1',weak);updateStats();}
  function pool(){return $('deck').value==='day16'?(window.LINGO_DAY16_WORDS||[]):$('deck').value==='day17'?(window.LINGO_DAY17_WORDS||[]):$('deck').value==='day15'?(window.LINGO_DAY15_WORDS||[]):$('deck').value==='day13'?(window.LINGO_DAY13_WORDS||[]):$('deck').value==='day14'?(window.LINGO_DAY14_WORDS||[]):$('deck').value==='day12'?day12:$('deck').value==='weak'?weak:$('deck').value==='unlearned'?all.filter(w=>!known.includes(w)):all;}
  function start(){
    if(session?.queue.length&&!window.confirm('当前一组还没结束，要换一组吗？已记录的认识／不认识状态会保留。'))return;
    const candidates=[...new Set(pool())];
    for(let i=candidates.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[candidates[i],candidates[j]]=[candidates[j],candidates[i]];}
    candidates.sort((a,b)=>Number(known.includes(a))-Number(known.includes(b)));
    const initial=candidates.slice(0,15); session={queue:[...initial],initial,completed:[],attempts:0,deck:$('deck').value};revealed=false;spellChecked=false;spellPeeked=false;undo=null;persist();render();autoSay();
  }
  function autoSay(){if($('auto-voice').checked&&session?.queue.length)say(session.queue[0]);}
  function render(){
    const host=$('flashcard');
    if(!session){host.innerHTML='<div class="word-paper empty-round"><span class="k">READY WHEN YOU ARE</span><h2>从 15 个词开始</h2><p>先选词库，然后开始。关闭页面也会保留这一组的进度。</p><button class="action" data-start>开始过单词</button></div>';return;}
    if(!session.initial.length){host.innerHTML='<div class="word-paper empty-round"><h2>这个词库暂时没有单词</h2><p>可以切换到全部已学词，或先完成一组背词。</p><button data-start>重新选取</button></div>';return;}
    if(!session.queue.length){host.innerHTML=`<div class="word-paper empty-round"><span class="k">ONE SMALL STEP</span><h2>这一组，过完啦。</h2><p>完成 ${session.initial.length} 个词 · 回忆 ${session.attempts} 次</p><p>认识不等于永久记住，下次也要回来复习。</p><button class="action" data-start>再来一组</button>${undo?'<button data-undo>撤销最后一次</button>':''}</div>`;return;}
    const entry=dictionary.get(session.queue[0]);
    if(mode==='spell'){renderSpelling(entry);return;}
    host.innerHTML=`<div class="round-progress"><span>本组完成 ${session.completed.length} / ${session.initial.length}</span><span>待过 ${session.queue.length} 个</span></div><progress max="${session.initial.length}" value="${session.completed.length}"></progress><article class="word-paper"><div class="card-caption"><span>先想想它的意思</span><button data-word="${safe(entry.word)}" aria-label="朗读 ${safe(entry.word)}">♫ 朗读</button></div><h2 class="headword">${safe(entry.word)}</h2><p class="word-pos">${entry.senses.map(s=>safe(s.pos)).join(' / ')}</p>${revealed?`<div class="word-answer">${entry.senses.map(s=>`<p class="meaning">${safe(s.pos)} · ${safe(s.meaning)}</p>${s.example?`<p class="example">${safe(s.example)}</p><button data-sentence="${safe(s.example)}">听例句</button>`:''}`).join('')}</div><div class="recall-actions"><button data-rate="no">1 · 不认识，再练</button><button class="action" data-rate="yes">2 · 认识，下一个</button></div>`:'<div class="recall-prompt"><p>不着急，给自己几秒回忆。</p><button class="action" data-reveal>翻面 · 看释义与例句</button></div>'}</article><div class="round-tools"><button data-undo ${undo?'':'disabled'}>撤销上一次</button><button data-home>暂时休息 · 保留进度</button></div>`;
  }
  function renderSpelling(entry){
    $('flashcard').innerHTML=`<div class="round-progress"><span>本组完成 ${session.completed.length} / ${session.initial.length}</span><span>待练 ${session.queue.length} 个</span></div><progress max="${session.initial.length}" value="${session.completed.length}"></progress><article class="word-paper"><div class="card-caption"><span>看中文，写出英文</span><button data-listen>♫ 听单词 / 重听</button></div>${entry.senses.map(s=>`<p class="meaning">${safe(s.pos)} · ${safe(s.meaning)}</p>`).join('')}<form id="spelling-form" autocomplete="off"><label for="spelling-input">单词拼写</label><input id="spelling-input" class="spelling-input" type="text" lang="en" inputmode="text" autocapitalize="none" autocorrect="off" spellcheck="false" autocomplete="off" placeholder="输入英文单词" aria-describedby="spelling-feedback"><p id="spelling-feedback" role="status"></p><div class="recall-actions"><button class="action" type="submit" id="spelling-submit">检查拼写</button><button type="button" data-spell-answer>想不起来，看看答案</button></div></form><div id="spelling-answer"></div></article><div class="round-tools"><button data-undo ${undo?'':'disabled'}>撤销上一次</button><button data-home>暂时休息 · 保留进度</button></div>`;
    $('spelling-form').onsubmit=e=>{
      e.preventDefault();if(e.isComposing)return;
      if(spellChecked){rate(!spellPeeked);return;}
      const typed=$('spelling-input').value.trim().toLowerCase();
      if(!typed){$('spelling-feedback').textContent='先输入单词，或点“看看答案”。';return;}
      if(typed!==entry.word.toLowerCase()){
        $('spelling-feedback').textContent='还差一点，检查字母顺序，再试一次；也可以重听或查看答案。';
        $('spelling-input').setAttribute('aria-invalid','true');
        if(!weak.includes(entry.word))weak.push(entry.word);known=known.filter(w=>w!==entry.word);persist();document.dispatchEvent(new Event('lingo-mastery-change'));return;
      }
      spellChecked=true;revealed=true;$('spelling-input').setAttribute('aria-invalid','false');$('spelling-input').readOnly=true;
      $('spelling-feedback').textContent=spellPeeked?'拼对了！这个词稍后再练一次。':'拼写正确！';
      $('spelling-submit').textContent=spellPeeked?'继续 · 稍后再练':'记住了，下一词';
      $('spelling-answer').innerHTML=`<h2>${safe(entry.word)}</h2>${entry.senses.map(s=>s.example?`<p>${safe(s.example)}</p><button data-sentence="${safe(s.example)}">听例句</button>`:'').join('')}`;
      $('flashcard').querySelector('[data-spell-answer]').disabled=true;
    };
    if($('review').classList.contains('active'))$('spelling-input').focus({preventScroll:true});
  }
  function rate(isKnown){
    if(!session?.queue.length||!revealed||(mode==='spell'&&!spellChecked))return;
    undo={session:JSON.parse(JSON.stringify(session)),known:[...known],weak:[...weak]};
    const word=session.queue.shift();session.attempts++;
    if(isKnown){if(!known.includes(word))known.push(word);weak=weak.filter(w=>w!==word);session.completed.push(word);}
    else{known=known.filter(w=>w!==word);if(!weak.includes(word))weak.push(word);session.queue.push(word);}
    revealed=false;spellChecked=false;spellPeeked=false;persist();document.dispatchEvent(new Event('lingo-mastery-change'));render();autoSay();
  }
  $('new-round').onclick=start;
  $('flashcard').onclick=e=>{
    const b=e.target.closest('button');if(!b)return;
    if(b.hasAttribute('data-listen')&&session?.queue.length)say(session.queue[0]);
    if(b.hasAttribute('data-spell-answer')&&session?.queue.length){spellPeeked=true;$('spelling-answer').innerHTML='<h2>'+safe(session.queue[0])+'</h2><p>看一遍，再拼写；这个词会在本组稍后重练。</p>';$('spelling-input').focus();}
    if(b.hasAttribute('data-start'))start();
    if(b.hasAttribute('data-reveal')){revealed=true;render();}
    if(b.dataset.rate)rate(b.dataset.rate==='yes');
    if(b.dataset.word)say(b.dataset.word);
    if(b.dataset.sentence)say(b.dataset.sentence);
    if(b.hasAttribute('data-undo')&&undo){session=undo.session;known=undo.known;weak=undo.weak;undo=null;revealed=false;spellChecked=false;spellPeeked=false;persist();render();}
    if(b.hasAttribute('data-home'))go('home');
  };
  function go(page){document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active',p.id===page));document.querySelectorAll('nav button').forEach(b=>{b.classList.toggle('active',b.dataset.page===page);if(b.dataset.page===page)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});if('speechSynthesis'in window)window.speechSynthesis.cancel();window.scrollTo(0,0);}
  document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>go(b.dataset.page));
  document.addEventListener('keydown',e=>{if(mode==='spell'||!$('review').classList.contains('active')||/INPUT|SELECT|TEXTAREA|BUTTON/.test(e.target.tagName)||e.ctrlKey||e.metaKey||e.altKey||e.repeat)return;if(e.code==='Space'&&session?.queue.length){e.preventDefault();revealed=true;render();}if(e.key==='1')rate(false);if(e.key==='2')rate(true);});
  // Keep the searchable word list, and give every word the same pronunciation control.
  const oldRender=rw;
  rw=function(){oldRender();document.querySelectorAll('#wl .item').forEach(item=>{const word=item.querySelector('h3')?.textContent.trim();if(dictionary.has(word)){const b=document.createElement('button');b.textContent='♫ 朗读';b.setAttribute('aria-label','朗读 '+word);b.onclick=()=>say(word);item.append(b);}});if(!$('wl').children.length)$('wl').innerHTML='<p>没有找到相关单词。</p>';};
  $('ws').oninput=rw;rw();
  const daily=$('daily');
  if(daily){if(!window.LINGO_DAY14_WORDS)daily.querySelector('h2').textContent='Day 12 学习已完成';const summary=daily.querySelector('summary');if(summary)summary.textContent=window.LINGO_DAY17_WORDS?'Day 16–17 完成内容':window.LINGO_DAY15_WORDS?'Day 15 完成内容':'Day 12 完成内容';
    const dashboard=document.createElement('div');dashboard.className='journal-dashboard';
    dashboard.innerHTML='<div class="journal-stats"><article class="journal-stat"><span>今日网站专注</span><strong id="study-time">0 分钟</strong><p>目标 90–120 分钟</p><button id="study-toggle">开始计时</button></article><article class="journal-stat"><span>单词自评掌握</span><strong id="mastery-count">0%</strong><p id="mastery-detail"></p></article><article class="journal-stat"><span>背词进度</span><strong id="round-count">尚未开始</strong><button id="continue-words" class="action">开始背词</button></article><article class="journal-stat"><span>下一步复习</span><strong class="small-title">小词与指代</strong><p>留意否定和转折，追踪 this 的具体指向。</p><button id="open-weak">查看薄弱点 →</button></article></div>';
    const checklist=daily.querySelector('.taskbox');daily.append(dashboard);if(checklist)dashboard.prepend(checklist);
    $('continue-words').onclick=()=>go('review');$('open-weak').onclick=()=>go('mistakes');
  }
  let times=read('lingo_focus_seconds_v1',{});if(!times||typeof times!=='object'||Array.isArray(times))times={};
  const date=()=>new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Shanghai',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
  let currentDate=date(),running=false,last=Date.now();
  function timerTick(){const now=Date.now();if(date()!==currentDate){currentDate=date();running=false;}if(running){times[currentDate]=(Number(times[currentDate])||0)+Math.min(5,Math.max(0,(now-last)/1000));save('lingo_focus_seconds_v1',times);}last=now;updateStats();}
  function updateStats(){
    if(!$('mastery-count'))return;
    $('mastery-count').textContent=Math.round(known.length/all.length*100)+'%';$('mastery-detail').textContent=known.length+' / '+all.length+' 个 · 来自你的背词标记';
    $('round-count').textContent=session?session.completed.length+' / '+session.initial.length+' 个':'尚未开始';$('continue-words').textContent=session?.queue.length?'继续背词':'开始背词';
    if(typeof times!=='undefined')$('study-time').textContent=Math.floor((Number(times[currentDate])||0)/60)+' 分钟';
    $('study-toggle').textContent=running?'暂停计时':'开始计时';
  }
  if($('study-toggle'))$('study-toggle').onclick=()=>{timerTick();running=!running;last=Date.now();updateStats();};
  document.addEventListener('visibilitychange',()=>{if(document.hidden){timerTick();running=false;updateStats();if('speechSynthesis'in window)window.speechSynthesis.cancel();}});
  setInterval(timerTick,1000);
  const footer=document.createElement('p');footer.className='journal-note';footer.textContent='专注时长只统计本页主动开启的计时，切到后台自动暂停。掌握率来自单词自评，不代表语法或考试成绩。';$('home').append(footer);
  if(session?.deck&&[...$('deck').options].some(o=>o.value===session.deck))$('deck').value=session.deck;
  window.LingoReview={getWord:word=>dictionary.get(word),isKnown:word=>known.includes(word),setKnown(word,value){if(!dictionary.has(word))return;known=value?[...new Set([...known,word])]:known.filter(w=>w!==word);if(value)weak=weak.filter(w=>w!==word);persist();document.dispatchEvent(new Event('lingo-mastery-change'));}};
  render();updateStats();
})();
