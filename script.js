const navBtns = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');

navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    navBtns.forEach(b => b.classList.remove('active'));
    pages.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.page).classList.add('active');
    window.scrollTo({top:0, behavior:'smooth'});
  });
});

const tasks = [...document.querySelectorAll('.task')];
const taskProgress = document.getElementById('taskProgress');

function updateTaskProgress(){
  const done = tasks.filter(t => t.checked).length;
  taskProgress.textContent = `${done} / ${tasks.length}`;
  localStorage.setItem('lingo_tasks', JSON.stringify(tasks.map(t => t.checked)));
}
tasks.forEach(t => t.addEventListener('change', updateTaskProgress));
const savedTasks = JSON.parse(localStorage.getItem('lingo_tasks') || '[]');
tasks.forEach((t,i) => t.checked = !!savedTasks[i]);
updateTaskProgress();

let words = JSON.parse(localStorage.getItem('lingo_words') || 'null') || [
  {word:'achieve', pos:'v.', meaning:'达到；实现', example:'I want to achieve my goal.', mastered:false},
  {word:'concentrate', pos:'v.', meaning:'集中；专心', example:'Please concentrate on your study.', mastered:true},
  {word:'improve', pos:'v.', meaning:'提高；改善', example:'Reading can improve your English.', mastered:false}
];

const wordList = document.getElementById('wordList');
const wordSearch = document.getElementById('wordSearch');
const wordCount = document.getElementById('wordCount');

function saveWords(){ localStorage.setItem('lingo_words', JSON.stringify(words)); }

function renderWords(){
  const q = (wordSearch.value || '').toLowerCase().trim();
  const filtered = words.filter(w => `${w.word} ${w.meaning} ${w.pos}`.toLowerCase().includes(q));
  wordList.innerHTML = filtered.map((w,idx) => {
    const realIndex = words.indexOf(w);
    return `<div class="list-item">
      <div><h3>${w.word} <span>${w.pos}</span></h3><p>${w.meaning}${w.example ? ' · '+w.example : ''}</p></div>
      <div class="word-actions">
        <button class="small-btn ${w.mastered ? 'mastered':''}" onclick="toggleMastered(${realIndex})">${w.mastered ? '已掌握' : '未掌握'}</button>
        <button class="small-btn" onclick="removeWord(${realIndex})">删除</button>
      </div>
    </div>`;
  }).join('') || '<div class="empty">没有找到相关单词。</div>';
  wordCount.textContent = words.length;
}

window.toggleMastered = i => { words[i].mastered = !words[i].mastered; saveWords(); renderWords(); };
window.removeWord = i => { words.splice(i,1); saveWords(); renderWords(); };

wordSearch.addEventListener('input', renderWords);
renderWords();

const modal = document.getElementById('wordModal');
document.getElementById('addWordBtn').onclick = () => modal.classList.add('show');
document.getElementById('closeModal').onclick = () => modal.classList.remove('show');
modal.addEventListener('click', e => { if(e.target === modal) modal.classList.remove('show'); });

document.getElementById('saveWord').onclick = () => {
  const word = document.getElementById('newWord').value.trim();
  const meaning = document.getElementById('newMeaning').value.trim();
  const pos = document.getElementById('newPos').value.trim();
  const example = document.getElementById('newExample').value.trim();
  if(!word || !meaning) return alert('至少填写单词和中文意思');
  words.unshift({word,pos,meaning,example,mastered:false});
  saveWords(); renderWords();
  ['newWord','newMeaning','newPos','newExample'].forEach(id => document.getElementById(id).value='');
  modal.classList.remove('show');
};
