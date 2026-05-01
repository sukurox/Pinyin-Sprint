const CORE_PHRASES = [
  { hanzi: "你好", pinyin: "ni hao", english: "hello", deck: "daily" },
  { hanzi: "谢谢你", pinyin: "xie xie ni", english: "thank you", deck: "daily" },
  { hanzi: "再见", pinyin: "zai jian", english: "goodbye", deck: "daily" },
  { hanzi: "没关系", pinyin: "mei guan xi", english: "it is okay", deck: "daily" },
  { hanzi: "请进", pinyin: "qing jin", english: "please come in", deck: "daily" },
  { hanzi: "今天很忙", pinyin: "jin tian hen mang", english: "today is busy", deck: "life" },
  { hanzi: "现在开始", pinyin: "xian zai kai shi", english: "start now", deck: "life" },
  { hanzi: "我在这里", pinyin: "wo zai zhe li", english: "I am here", deck: "daily" },
  { hanzi: "明天见", pinyin: "ming tian jian", english: "see you tomorrow", deck: "daily" },
  { hanzi: "请等一下", pinyin: "qing deng yi xia", english: "please wait a moment", deck: "daily" },
  { hanzi: "我想练习", pinyin: "wo xiang lian xi", english: "I want to practice", deck: "study" },
  { hanzi: "学习中文", pinyin: "xue xi zhong wen", english: "study Chinese", deck: "study" },
  { hanzi: "这个词很常用", pinyin: "zhe ge ci hen chang yong", english: "this word is used often", deck: "study" },
  { hanzi: "发音要清楚", pinyin: "fa yin yao qing chu", english: "pronunciation should be clear", deck: "study" },
  { hanzi: "我记住了", pinyin: "wo ji zhu le", english: "I remembered it", deck: "study" },
  { hanzi: "先看汉字", pinyin: "xian kan han zi", english: "look at the characters first", deck: "study" },
  { hanzi: "继续打字", pinyin: "ji xu da zi", english: "keep typing", deck: "study" },
  { hanzi: "速度慢一点", pinyin: "su du man yi dian", english: "go a little slower", deck: "study" },
  { hanzi: "准确更重要", pinyin: "zhun que geng zhong yao", english: "accuracy matters more", deck: "study" },
  { hanzi: "我会坚持", pinyin: "wo hui jian chi", english: "I will stay consistent", deck: "study" },
  { hanzi: "外面下雨了", pinyin: "wai mian xia yu le", english: "it is raining outside", deck: "life" },
  { hanzi: "一起吃饭吧", pinyin: "yi qi chi fan ba", english: "let us eat together", deck: "life" },
  { hanzi: "周末去散步", pinyin: "zhou mo qu san bu", english: "take a walk on the weekend", deck: "life" },
  { hanzi: "咖啡有点热", pinyin: "ka fei you dian re", english: "the coffee is a little hot", deck: "life" },
  { hanzi: "天气很舒服", pinyin: "tian qi hen shu fu", english: "the weather feels nice", deck: "life" },
  { hanzi: "打开窗户", pinyin: "da kai chuang hu", english: "open the window", deck: "life" },
  { hanzi: "我准备好了", pinyin: "wo zhun bei hao le", english: "I am ready", deck: "life" },
  { hanzi: "这个音乐很好听", pinyin: "zhe ge yin yue hen hao ting", english: "this music sounds great", deck: "life" },
  { hanzi: "大家一起加油", pinyin: "da jia yi qi jia you", english: "let us all keep pushing", deck: "life" },
  { hanzi: "先喝点水", pinyin: "xian he dian shui", english: "drink some water first", deck: "life" },
  { hanzi: "老师来了", pinyin: "lao shi lai le", english: "the teacher arrived", deck: "study" },
  { hanzi: "作业写完了", pinyin: "zuo ye xie wan le", english: "the homework is finished", deck: "study" },
  { hanzi: "这个问题不难", pinyin: "zhe ge wen ti bu nan", english: "this question is not hard", deck: "study" },
  { hanzi: "认真听讲", pinyin: "ren zhen ting jiang", english: "listen carefully", deck: "study" },
  { hanzi: "我们再练一次", pinyin: "wo men zai lian yi ci", english: "let us practice once more", deck: "study" },
  { hanzi: "答案在后面", pinyin: "da an zai hou mian", english: "the answer is in the back", deck: "study" },
  { hanzi: "每天进步一点", pinyin: "mei tian jin bu yi dian", english: "improve a little every day", deck: "study" },
  { hanzi: "慢慢就会熟练", pinyin: "man man jiu hui shu lian", english: "you will get fluent over time", deck: "study" },
  { hanzi: "今天状态很好", pinyin: "jin tian zhuang tai hen hao", english: "today feels strong", deck: "life" },
  { hanzi: "回家休息吧", pinyin: "hui jia xiu xi ba", english: "go home and rest", deck: "daily" },
  { hanzi: "晚饭吃什么", pinyin: "wan fan chi shen me", english: "what are we eating for dinner", deck: "daily" },
  { hanzi: "你会说中文吗", pinyin: "ni hui shuo zhong wen ma", english: "do you speak Chinese", deck: "daily" },
  { hanzi: "请帮我一下", pinyin: "qing bang wo yi xia", english: "please help me for a moment", deck: "daily" },
  { hanzi: "我们出发吧", pinyin: "wo men chu fa ba", english: "let us head out", deck: "daily" }
].map((phrase) => ({ ...phrase, source: "core" }));

const IMPORTED_COUNTS = window.IMPORTED_DATA?.counts ?? { characters: 0, commonWords: 0 };
const IMPORTED_CHARACTERS = (window.IMPORTED_DATA?.characters ?? []).map((phrase) => ({
  ...phrase,
  source: "chars"
}));
const IMPORTED_COMMON_WORDS = (window.IMPORTED_DATA?.commonWords ?? []).map((phrase) => ({
  ...phrase,
  source: "common"
}));
const LIBRARIES = {
  mixed: [...CORE_PHRASES, ...IMPORTED_COMMON_WORDS, ...IMPORTED_CHARACTERS],
  core: CORE_PHRASES,
  common: IMPORTED_COMMON_WORDS,
  chars: IMPORTED_CHARACTERS
};

const GOALS = {
  words: [15, 30, 50],
  time: [30, 60, 120]
};

const BEST_KEY = "pinyin-sprint-best";

const state = {
  mode: "words",
  goal: 15,
  deck: "mixed",
  showGuide: true,
  pool: [],
  currentIndex: 0,
  inputBuffer: "",
  startedAt: 0,
  finishedAt: 0,
  ticker: null,
  totalKeystrokes: 0,
  correctKeystrokes: 0,
  errors: 0,
  completedPhrases: 0,
  completedHanzi: 0,
  streak: 0,
  bestStreak: 0,
  errorFlashUntil: 0,
  isFinished: false,
  bestSummary: null
};

const elements = {
  stage: document.getElementById("stage"),
  hanziLine: document.getElementById("hanziLine"),
  pinyinLine: document.getElementById("pinyinLine"),
  translationLine: document.getElementById("translationLine"),
  queueLine: document.getElementById("queueLine"),
  statusLine: document.getElementById("statusLine"),
  deckLabel: document.getElementById("deckLabel"),
  accuracyMetric: document.getElementById("accuracyMetric"),
  wpmMetric: document.getElementById("wpmMetric"),
  hanziMetric: document.getElementById("hanziMetric"),
  streakMetric: document.getElementById("streakMetric"),
  paceLabel: document.getElementById("paceLabel"),
  paceMetric: document.getElementById("paceMetric"),
  bestMetric: document.getElementById("bestMetric"),
  capture: document.getElementById("typingCapture"),
  restartButton: document.getElementById("restartButton"),
  runAgainButton: document.getElementById("runAgainButton"),
  resultPanel: document.getElementById("resultPanel"),
  resultHeadline: document.getElementById("resultHeadline"),
  resultAccuracy: document.getElementById("resultAccuracy"),
  resultWpm: document.getElementById("resultWpm"),
  resultHanzi: document.getElementById("resultHanzi"),
  resultStreak: document.getElementById("resultStreak"),
  modeButtons: document.getElementById("modeButtons"),
  goalButtons: document.getElementById("goalButtons"),
  deckButtons: document.getElementById("deckButtons"),
  guideButtons: document.getElementById("guideButtons")
};

function normalizeTarget(phrase) {
  return phrase.pinyin
    .normalize("NFD")
    .replace(/u\u0308/g, "v")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ü/g, "v")
    .replace(/u:/g, "v")
    .replace(/[^a-z]/g, "")
    .toLowerCase();
}

function shuffle(list) {
  const clone = [...list];
  for (let index = clone.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [clone[index], clone[swapIndex]] = [clone[swapIndex], clone[index]];
  }
  return clone;
}

function getDeckSource() {
  const source = LIBRARIES[state.deck] ?? LIBRARIES.core;
  return source.length > 0 ? source : LIBRARIES.core;
}

function getDeckCount() {
  return getDeckSource().length;
}

function getPhraseDescription(phrase) {
  if (phrase.english) {
    return phrase.english;
  }

  return "No English gloss available yet.";
}

function ensurePool(sizeNeeded) {
  const source = getDeckSource();
  if (source.length === 0) {
    return;
  }

  while (state.pool.length < sizeNeeded) {
    state.pool.push(...shuffle(source));
  }
}

function getCurrentPhrase() {
  ensurePool(state.currentIndex + 8);
  return state.pool[state.currentIndex];
}

function getElapsedSeconds() {
  if (!state.startedAt) {
    return 0;
  }

  const end = state.finishedAt || performance.now();
  return Math.max(0, (end - state.startedAt) / 1000);
}

function getAccuracy() {
  if (state.totalKeystrokes === 0) {
    return 100;
  }

  return (state.correctKeystrokes / state.totalKeystrokes) * 100;
}

function getWpm() {
  const elapsed = getElapsedSeconds();
  if (elapsed === 0) {
    return 0;
  }

  return (state.correctKeystrokes / 5) / (elapsed / 60);
}

function getHanziPerMinute() {
  const elapsed = getElapsedSeconds();
  if (elapsed === 0) {
    return 0;
  }

  return state.completedHanzi / (elapsed / 60);
}

function getSummary() {
  return {
    accuracy: getAccuracy(),
    wpm: getWpm(),
    hanziPerMinute: getHanziPerMinute(),
    streak: state.bestStreak,
    completedPhrases: state.completedPhrases
  };
}

function formatBest(summary) {
  return `${Math.round(summary.wpm)} wpm / ${Math.round(summary.accuracy)}% / ${Math.round(summary.hanziPerMinute)} hm`;
}

function loadBestSummary() {
  try {
    const raw = localStorage.getItem(BEST_KEY);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw);
    if (typeof parsed.wpm !== "number") {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

function saveBestSummary(summary) {
  try {
    const existing = loadBestSummary();
    if (existing && existing.wpm >= summary.wpm) {
      state.bestSummary = existing;
      return;
    }

    state.bestSummary = summary;
    localStorage.setItem(BEST_KEY, JSON.stringify(summary));
  } catch {
    state.bestSummary = summary;
  }
}

function updateBestMetric() {
  const best = state.bestSummary || loadBestSummary();
  if (!best) {
    elements.bestMetric.textContent = "No run yet";
    return;
  }

  state.bestSummary = best;
  elements.bestMetric.textContent = formatBest(best);
}

function setGoalButtons() {
  const fragment = document.createDocumentFragment();
  GOALS[state.mode].forEach((goal) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip${goal === state.goal ? " active" : ""}`;
    button.dataset.goal = String(goal);
    button.textContent = state.mode === "words" ? `${goal}` : `${goal}s`;
    fragment.appendChild(button);
  });

  elements.goalButtons.replaceChildren(fragment);
}

function setActiveButton(container, selector, value) {
  container.querySelectorAll(selector).forEach((button) => {
    const shouldBeActive = Object.values(button.dataset).includes(value);
    button.classList.toggle("active", shouldBeActive);
  });
}

function updateScoreboard() {
  elements.accuracyMetric.textContent = `${Math.round(getAccuracy())}%`;
  elements.wpmMetric.textContent = `${Math.round(getWpm())}`;
  elements.hanziMetric.textContent = `${Math.round(getHanziPerMinute())}`;
  elements.streakMetric.textContent = `${state.streak}`;

  if (state.mode === "time") {
    elements.paceLabel.textContent = "Time Left";
    const remaining = Math.max(0, state.goal - getElapsedSeconds());
    elements.paceMetric.textContent = `${remaining.toFixed(1)}s`;
  } else {
    elements.paceLabel.textContent = "Words Left";
    elements.paceMetric.textContent = `${Math.max(0, state.goal - state.completedPhrases)}`;
  }
}

function renderPinyin(phrase) {
  const typedCount = state.inputBuffer.length;
  const target = normalizeTarget(phrase);
  const fragment = document.createDocumentFragment();
  let romanIndex = 0;

  phrase.pinyin.split("").forEach((character) => {
    const span = document.createElement("span");
    span.textContent = character;
    span.className = "pinyin-char";

    if (character === " ") {
      span.classList.add("separator");
    } else {
      if (romanIndex < typedCount) {
        span.classList.add("correct");
      } else if (romanIndex === typedCount && romanIndex < target.length) {
        span.classList.add("current");
      }
      romanIndex += 1;
    }

    fragment.appendChild(span);
  });

  elements.pinyinLine.replaceChildren(fragment);
  elements.pinyinLine.classList.toggle("error", performance.now() < state.errorFlashUntil);
}

function renderQueue() {
  ensurePool(state.currentIndex + 7);
  const fragment = document.createDocumentFragment();
  const queue = state.pool.slice(state.currentIndex, state.currentIndex + 6);

  queue.forEach((phrase, index) => {
    const span = document.createElement("span");
    span.className = `queue-item${index === 0 ? " current" : ""}`;
    span.textContent = phrase.hanzi;
    fragment.appendChild(span);
  });

  elements.queueLine.replaceChildren(fragment);
}

function updateStatusLine(phrase) {
  if (state.isFinished) {
    elements.statusLine.textContent = "Run finished. Restart to jump back in.";
    return;
  }

  if (!state.startedAt) {
    elements.statusLine.textContent = "Click anywhere or start typing. Input is strict, so every miss matters.";
    return;
  }

  const target = normalizeTarget(phrase);
  const left = target.length - state.inputBuffer.length;
  elements.statusLine.textContent = left > 0
    ? `${left} letters left for "${phrase.hanzi}".`
    : `Phrase complete.`;
}

function renderStage() {
  const phrase = getCurrentPhrase();
  if (!phrase) {
    return;
  }

  elements.stage.classList.toggle("error-flash", performance.now() < state.errorFlashUntil);
  elements.deckLabel.textContent = `${state.deck} deck - ${getDeckCount()} entries`;
  elements.hanziLine.textContent = phrase.hanzi;
  elements.translationLine.textContent = getPhraseDescription(phrase);
  elements.pinyinLine.style.opacity = state.showGuide ? "1" : "0.0";      // Keep the pinyin in the DOM for layout stability, but hide it when the guide is turned off. 
  renderPinyin(phrase);
  renderQueue();
  updateStatusLine(phrase);
  updateScoreboard();
}

function focusCapture() {
  elements.capture.focus({ preventScroll: true });
}

function startRun() {
  if (state.startedAt) {
    return;
  }

  state.startedAt = performance.now();
  state.ticker = window.setInterval(() => {
    if (state.mode === "time" && getElapsedSeconds() >= state.goal) {
      finishRun();
      return;
    }

    renderStage();
  }, 100);
}

function completePhrase() {
  const phrase = getCurrentPhrase();
  state.completedPhrases += 1;
  state.completedHanzi += phrase.hanzi.length;
  state.streak += 1;
  state.bestStreak = Math.max(state.bestStreak, state.streak);
  state.currentIndex += 1;
  state.inputBuffer = "";

  if (state.mode === "words" && state.completedPhrases >= state.goal) {
    finishRun();
    return;
  }

  renderStage();
}

function finishRun() {
  if (state.isFinished) {
    return;
  }

  state.isFinished = true;
  state.finishedAt = performance.now();

  if (state.ticker) {
    window.clearInterval(state.ticker);
    state.ticker = null;
  }

  const summary = getSummary();
  saveBestSummary(summary);
  updateBestMetric();

  elements.resultHeadline.textContent = state.mode === "time"
    ? `You completed ${state.completedPhrases} phrases in ${state.goal} seconds.`
    : `You cleared ${state.goal} phrases.`;
  elements.resultAccuracy.textContent = `${Math.round(summary.accuracy)}%`;
  elements.resultWpm.textContent = `${Math.round(summary.wpm)}`;
  elements.resultHanzi.textContent = `${Math.round(summary.hanziPerMinute)}`;
  elements.resultStreak.textContent = `${summary.streak}`;
  elements.resultPanel.classList.remove("hidden");
  updateStatusLine(getCurrentPhrase());
  updateScoreboard();
}

function resetRun() {
  if (state.ticker) {
    window.clearInterval(state.ticker);
  }

  state.pool = [];
  state.currentIndex = 0;
  state.inputBuffer = "";
  state.startedAt = 0;
  state.finishedAt = 0;
  state.ticker = null;
  state.totalKeystrokes = 0;
  state.correctKeystrokes = 0;
  state.errors = 0;
  state.completedPhrases = 0;
  state.completedHanzi = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.errorFlashUntil = 0;
  state.isFinished = false;

  ensurePool(state.mode === "words" ? state.goal + 8 : 16);
  elements.resultPanel.classList.add("hidden");
  elements.capture.value = "";
  renderStage();
  focusCapture();
}

function registerMiss() {
  state.errors += 1;
  state.streak = 0;
  state.errorFlashUntil = performance.now() + 180;
  renderStage();
}

function handleKeydown(event) {
  if (event.key === "Tab") {
    event.preventDefault();
    event.stopPropagation();
    state.showGuide = !state.showGuide;
    setActiveButton(elements.guideButtons, "button", state.showGuide ? "show" : "hide");
    renderStage();
    focusCapture();
    return;
  }

  if (event.key === "Escape") {
    event.preventDefault();
    event.stopPropagation();
    resetRun();
    return;
  }

  const phrase = getCurrentPhrase();
  if (!phrase) {
    return;
  }

  if (state.isFinished) {
    if (event.key === "Enter" || /^[a-zA-Z]$/.test(event.key)) {
      event.preventDefault();
      resetRun();
    }
    return;
  }

  if (event.key === "Backspace") {
    event.preventDefault();
    if (state.inputBuffer.length > 0) {
      state.inputBuffer = state.inputBuffer.slice(0, -1);
      renderStage();
    }
    return;
  }

  if (!/^[a-zA-Z]$/.test(event.key)) {
    return;
  }

  event.preventDefault();
  startRun();

  const target = normalizeTarget(phrase);
  const nextLetter = event.key.toLowerCase();
  state.totalKeystrokes += 1;

  if (nextLetter === target[state.inputBuffer.length]) {
    state.correctKeystrokes += 1;
    state.inputBuffer += nextLetter;
    if (state.inputBuffer.length === target.length) {
      completePhrase();
      return;
    }
  } else {
    registerMiss();
    return;
  }

  renderStage();
}

function bindControls() {
  elements.modeButtons.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-mode]");
    if (!button) {
      return;
    }

    state.mode = button.dataset.mode;
    state.goal = GOALS[state.mode][0];
    setActiveButton(elements.modeButtons, "button", state.mode);
    setGoalButtons();
    resetRun();
  });

  elements.goalButtons.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-goal]");
    if (!button) {
      return;
    }

    state.goal = Number(button.dataset.goal);
    setGoalButtons();
    resetRun();
  });

  elements.deckButtons.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-deck]");
    if (!button) {
      return;
    }

    state.deck = button.dataset.deck;
    setActiveButton(elements.deckButtons, "button", state.deck);
    resetRun();
  });

  elements.guideButtons.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-guide]");
    if (!button) {
      return;
    }

    state.showGuide = button.dataset.guide === "show";
    setActiveButton(elements.guideButtons, "button", button.dataset.guide);
    renderStage();
    focusCapture();
  });

  elements.restartButton.addEventListener("click", resetRun);
  elements.runAgainButton.addEventListener("click", resetRun);
  document.addEventListener("pointerdown", focusCapture);
  window.addEventListener("keydown", handleKeydown, true);
}

function init() {
  state.bestSummary = loadBestSummary();
  setGoalButtons();
  updateBestMetric();
  elements.statusLine.textContent = `Imported ${IMPORTED_COUNTS.commonWords} common words and ${IMPORTED_COUNTS.characters} common characters.`;
  bindControls();
  resetRun();
}

init();
