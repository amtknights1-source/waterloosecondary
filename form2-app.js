const STORAGE_KEY = "form2-ict-study-guide-state-v1";

const state = loadState();
const refs = {
  moduleNav: document.querySelector("#moduleNav"),
  moduleTitle: document.querySelector("#moduleTitle"),
  lessonPanel: document.querySelector("#lessonPanel"),
  sideQuiz: document.querySelector("#sideQuiz"),
  confidenceOptions: document.querySelector("#confidenceOptions"),
  targetList: document.querySelector("#targetList"),
  markReview: document.querySelector("#markReview"),
  overallPercent: document.querySelector("#overallPercent"),
  overallMeter: document.querySelector("#overallMeter"),
  correctCount: document.querySelector("#correctCount"),
  reviewCount: document.querySelector("#reviewCount"),
  confidenceLabel: document.querySelector("#confidenceLabel"),
  resetProgress: document.querySelector("#resetProgress")
};

function loadState() {
  const fallback = {
    moduleIndex: 0,
    tab: "learn",
    quizIndex: {},
    answers: {},
    confidence: {},
    review: {},
    careerIndex: 0,
    essayPartIndex: 0,
    essayChecks: {},
    drafts: {}
  };
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...fallback, ...saved } : fallback;
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function activeModule() {
  return modules[state.moduleIndex] || modules[0];
}

function answerId(moduleSlug, questionIndex) {
  return `${moduleSlug}:${questionIndex}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function render() {
  const module = activeModule();
  refs.moduleTitle.textContent = module.title;
  renderNav();
  renderTabs();
  renderMainPanel(module);
  renderSideQuiz(module);
  renderConfidence(module);
  renderTargets(module);
  renderProgress();
  refs.markReview.classList.toggle("is-active", Boolean(state.review[module.slug]));
  refs.markReview.setAttribute("aria-pressed", String(Boolean(state.review[module.slug])));
  saveState();
}

function renderNav() {
  refs.moduleNav.innerHTML = modules.map((module, index) => {
    const score = moduleScore(module);
    return `
      <button class="module-button${index === state.moduleIndex ? " is-active" : ""}${state.review[module.slug] ? " is-review" : ""}" type="button" data-module="${index}">
        <span class="nav-icon" aria-hidden="true">${module.icon}</span>
        <span class="nav-copy">
          <span class="nav-title">${escapeHtml(module.title)}</span>
          <span class="nav-subtitle">${escapeHtml(module.subtitle)}</span>
        </span>
        <span class="nav-score" aria-label="${score.correct} of ${score.total} correct">${score.correct}/${score.total}</span>
      </button>
    `;
  }).join("");

  refs.moduleNav.querySelectorAll(".module-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.moduleIndex = Number(button.dataset.module);
      render();
      refs.lessonPanel.focus();
    });
  });
}

function renderTabs() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    const isActive = button.dataset.tab === state.tab;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
}

function renderMainPanel(module) {
  if (state.tab === "walkthrough") {
    refs.lessonPanel.innerHTML = renderWalkthrough(module);
    return;
  }
  if (state.tab === "quiz") {
    refs.lessonPanel.innerHTML = renderQuizPage(module);
    attachQuizEvents(refs.lessonPanel, module);
    return;
  }
  if (state.tab === "essay") {
    refs.lessonPanel.innerHTML = renderEssayBuilder();
    attachEssayEvents();
    return;
  }
  refs.lessonPanel.innerHTML = renderLearn(module);
}

function renderLearn(module) {
  const keyCards = module.keyPoints.map((group) => `
    <section class="mini-card">
      <h4>${escapeHtml(group.title)}</h4>
      <ul>${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </section>
  `).join("");

  return `
    <div class="lesson-intro">
      <div class="intro-copy">
        <p class="panel-label">Study module</p>
        <h3>${escapeHtml(module.title)}</h3>
        <p>${escapeHtml(module.overview)}</p>
      </div>
      <section class="focus-strip">
        <h4>Exam focus</h4>
        <ul>${module.examFocus.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>
    </div>
    <div class="key-grid">${keyCards}</div>
    <section class="callout">
      <h4>Common traps</h4>
      <ul class="mistake-list">${module.commonMistakes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </section>
  `;
}

function renderWalkthrough(module) {
  return `
    <div class="walkthrough">
      <div>
        <p class="panel-label">Guided walkthrough</p>
        <h3>${escapeHtml(module.walkthrough.title)}</h3>
        <p>${escapeHtml(module.walkthrough.summary)}</p>
      </div>
      <div class="diagram-frame">
        <p class="diagram-title">${escapeHtml(module.walkthrough.title)}</p>
        ${renderDiagram(module.walkthrough.diagram)}
      </div>
      <section class="mini-card">
        <h4>Steps to remember</h4>
        <ol class="step-list">${module.walkthrough.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
      </section>
    </div>
  `;
}

function renderQuizPage(module) {
  return `
    <div class="quiz-page">
      <div>
        <p class="panel-label">Practice bank</p>
        <h3>${escapeHtml(module.title)} quiz</h3>
        <p>Answer each item, study the explanation, and retry anything that is not yet automatic.</p>
      </div>
      <div class="quiz-grid">${module.quiz.map((question, index) => renderQuizCard(module, question, index, "full")).join("")}</div>
    </div>
  `;
}

function renderQuizCard(module, question, index, variant) {
  const saved = state.answers[answerId(module.slug, index)];
  const answered = typeof saved?.selected === "number";
  const correct = saved?.selected === question.answer;
  const options = question.options.map((option, optionIndex) => {
    let className = "";
    if (answered && optionIndex === question.answer) className = " is-correct";
    if (answered && optionIndex === saved.selected && optionIndex !== question.answer) className = " is-wrong";
    if (answered && optionIndex !== saved.selected && optionIndex !== question.answer) className = " is-muted";
    return `<button class="answer-button${className}" type="button" data-question="${index}" data-option="${optionIndex}" ${answered ? 'aria-disabled="true"' : ""}>${escapeHtml(option)}</button>`;
  }).join("");
  const label = variant === "side" ? `Question ${index + 1} of ${module.quiz.length}` : `${module.title} question ${index + 1}`;
  return `
    <section class="quiz-card" data-card-question="${index}">
      <div class="quiz-topline"><span>${escapeHtml(label)}</span><span>${answered ? (correct ? "Correct" : "Review") : "Try it"}</span></div>
      <p class="quiz-question">${escapeHtml(question.prompt)}</p>
      <div class="answer-list">${options}</div>
      <div class="feedback ${answered ? "is-visible" : ""}">
        <strong>${answered ? (correct ? "Correct reasoning." : "Study this point.") : "Explanation"}</strong>
        ${answered ? escapeHtml(question.explanation) : ""}
      </div>
      <div class="quiz-actions">
        ${variant === "side" ? `<button class="small-button" type="button" data-next="${module.slug}">Next</button>` : ""}
        ${answered ? `<button class="small-button" type="button" data-retry="${index}">Retry</button>` : ""}
      </div>
    </section>
  `;
}

function renderSideQuiz(module) {
  const index = (state.quizIndex[module.slug] || 0) % module.quiz.length;
  refs.sideQuiz.innerHTML = renderQuizCard(module, module.quiz[index], index, "side");
  attachQuizEvents(refs.sideQuiz, module);
}

function attachQuizEvents(root, module) {
  root.querySelectorAll(".answer-button").forEach((button) => {
    button.addEventListener("click", () => {
      const questionIndex = Number(button.dataset.question);
      const id = answerId(module.slug, questionIndex);
      if (state.answers[id]?.locked) return;
      state.answers[id] = { selected: Number(button.dataset.option), locked: true };
      render();
    });
  });
  root.querySelectorAll("[data-next]").forEach((button) => {
    button.addEventListener("click", () => {
      state.quizIndex[module.slug] = ((state.quizIndex[module.slug] || 0) + 1) % module.quiz.length;
      render();
    });
  });
  root.querySelectorAll("[data-retry]").forEach((button) => {
    button.addEventListener("click", () => {
      delete state.answers[answerId(module.slug, Number(button.dataset.retry))];
      render();
    });
  });
}

function renderEssayBuilder() {
  const career = essayGuide.careers[state.careerIndex] || essayGuide.careers[0];
  const part = essayGuide.parts[state.essayPartIndex] || essayGuide.parts[0];
  const checks = state.essayChecks[state.essayPartIndex] || [];
  const draftKey = `part-${state.essayPartIndex}`;
  const careerButtons = essayGuide.careers.map((item, index) => `
    <button class="career-button${index === state.careerIndex ? " is-active" : ""}" type="button" data-career="${index}">${escapeHtml(item.name)}</button>
  `).join("");
  const partButtons = essayGuide.parts.map((item, index) => `
    <button class="essay-part-button${index === state.essayPartIndex ? " is-active" : ""}" type="button" data-essay-part="${index}">
      <span>${escapeHtml(item.label)}</span><strong>${escapeHtml(item.marks)}</strong>
    </button>
  `).join("");

  return `
    <div class="essay-builder">
      <div>
        <p class="panel-label">Structured question</p>
        <h3>Careers in IT essay builder</h3>
        <p>Plan each printed part separately, then connect your points into complete paragraphs.</p>
      </div>

      <div class="essay-part-nav">${partButtons}</div>

      <section class="essay-task">
        <div class="essay-task-head"><h4>${escapeHtml(part.label)}</h4><strong>${escapeHtml(part.marks)}</strong></div>
        <p>${escapeHtml(part.task)}</p>
      </section>

      <div class="essay-layout">
        <section class="answer-builder">
          <h4>Draft this part</h4>
          <textarea id="essayDraft" spellcheck="true" placeholder="Write clear points or a full paragraph here.">${escapeHtml(state.drafts[draftKey] || "")}</textarea>
          <div class="quiz-actions">
            <button class="primary-button" id="showEssaySample" type="button">Show sample response</button>
            <button class="small-button" id="clearEssayDraft" type="button">Clear</button>
          </div>
          <div class="feedback" id="essaySample"><strong>Sample response</strong>${escapeHtml(essayGuide.sample)}</div>
        </section>

        <section class="answer-builder">
          <h4>Self-mark checklist</h4>
          <ul class="short-checklist">
            ${part.checklist.map((item, index) => `
              <li><label><input type="checkbox" data-essay-check="${index}" ${checks.includes(index) ? "checked" : ""} /><span>${escapeHtml(item)}</span></label></li>
            `).join("")}
          </ul>
        </section>
      </div>

      <section class="career-lab">
        <h4>Career evidence bank</h4>
        <div class="career-switcher">${careerButtons}</div>
        <div class="career-detail">
          <div><span>Responsibilities</span><p>${escapeHtml(career.responsibility)}</p></div>
          <div><span>Two suitable qualifications</span><ul>${career.qualifications.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>
          <div><span>AI and cloud connection</span><p>${escapeHtml(career.technology)}</p></div>
        </div>
      </section>

      <section class="callout essay-note">
        <h4>Paper note</h4>
        <p>The printed subpart labels add to 39 although the section heading says 40. Answer every part fully and follow any direction from your teacher or invigilator.</p>
      </section>
    </div>
  `;
}

function attachEssayEvents() {
  document.querySelectorAll("[data-career]").forEach((button) => {
    button.addEventListener("click", () => {
      state.careerIndex = Number(button.dataset.career);
      render();
    });
  });
  document.querySelectorAll("[data-essay-part]").forEach((button) => {
    button.addEventListener("click", () => {
      state.essayPartIndex = Number(button.dataset.essayPart);
      render();
    });
  });
  document.querySelector("#essayDraft")?.addEventListener("input", (event) => {
    state.drafts[`part-${state.essayPartIndex}`] = event.target.value;
    saveState();
  });
  document.querySelector("#clearEssayDraft")?.addEventListener("click", () => {
    state.drafts[`part-${state.essayPartIndex}`] = "";
    render();
  });
  document.querySelector("#showEssaySample")?.addEventListener("click", (event) => {
    const sample = document.querySelector("#essaySample");
    sample.classList.toggle("is-visible");
    event.currentTarget.textContent = sample.classList.contains("is-visible") ? "Hide sample response" : "Show sample response";
  });
  document.querySelectorAll("[data-essay-check]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      state.essayChecks[state.essayPartIndex] = Array.from(document.querySelectorAll("[data-essay-check]:checked")).map((item) => Number(item.dataset.essayCheck));
      saveState();
      renderProgress();
    });
  });
}

function renderDiagram(type) {
  if (type === "exam") {
    return `
      <div class="exam-map form2-exam-map" aria-label="Exam structure diagram">
        <div class="exam-section"><h4>Section 1</h4><p>60 multiple-choice questions</p><strong>60 marks</strong></div>
        <div class="exam-arrow" aria-hidden="true">+</div>
        <div class="exam-section"><h4>Section 2</h4><p>Careers in IT structured essay</p><strong>40 marks stated</strong></div>
        <div class="exam-arrow" aria-hidden="true">=</div>
        <div class="exam-section"><h4>Total</h4><p>Answer every question</p><strong>100 marks</strong></div>
      </div>
    `;
  }
  if (type === "system") {
    return `
      <div class="system-flow" aria-label="Hardware and software system flow">
        <div class="system-node"><span>Hardware input</span><strong>Keyboard</strong><small>Typed data enters</small></div>
        <div class="system-arrow" aria-hidden="true">-&gt;</div>
        <div class="system-node software-node"><span>Software</span><strong>Word processor</strong><small>Interprets the task</small></div>
        <div class="system-arrow" aria-hidden="true">-&gt;</div>
        <div class="system-node cpu-node"><span>Processing</span><strong>CPU</strong><small>Executes instructions</small></div>
        <div class="system-arrow" aria-hidden="true">-&gt;</div>
        <div class="system-node"><span>Hardware output</span><strong>Monitor</strong><small>Displays the result</small></div>
      </div>
      <div class="system-storage"><strong>Save</strong><span>The file moves from active memory to secondary storage for later use.</span></div>
    `;
  }
  if (type === "keyboard") {
    const keys = ["Esc", "1 !", "2 @", "Tab", "Q", "W", "E", "Shift", "A", "S", "D", "Home", "Backspace", "Delete", "Enter", "Spacebar", "Left", "Up", "Down", "Right"];
    return `
      <div class="keyboard-board" aria-label="Keyboard key function diagram">
        ${keys.map((key) => `<div class="key-cap key-${key.toLowerCase().replaceAll(" ", "-").replaceAll("!", "").replaceAll("@", "")}">${key}</div>`).join("")}
      </div>
      <div class="key-legend">
        <div><strong>Edit</strong><span>Backspace left; Delete right</span></div>
        <div><strong>Move</strong><span>Home and arrow keys</span></div>
        <div><strong>Format</strong><span>Shift, Tab, and Spacebar</span></div>
        <div><strong>Execute</strong><span>Enter confirms or starts a line</span></div>
      </div>
    `;
  }
  if (type === "cpu") {
    return `
      <div class="memory-route" aria-label="CPU and storage relationship diagram">
        <div class="memory-block secondary-block"><span>Secondary storage</span><strong>HDD / SSD</strong><small>Persistent and non-volatile</small></div>
        <div class="memory-arrow">Load / Save</div>
        <div class="memory-block ram-block"><span>Primary storage</span><strong>RAM</strong><small>Active and volatile</small></div>
        <div class="memory-arrow">Fetch / Store</div>
        <div class="cpu-chip">
          <span>Central Processing Unit</span>
          <div><strong>Control Unit</strong><small>Directs operations</small></div>
          <div><strong>ALU</strong><small>Calculates and compares</small></div>
        </div>
      </div>
    `;
  }
  if (type === "problem") {
    const steps = [["1", "Identify", "What is the problem?"], ["2", "Analyse", "What causes it?"], ["3", "Generate", "What could work?"], ["4", "Implement", "Carry out the best plan"], ["5", "Evaluate", "Did it solve the problem?"]];
    return `<div class="problem-flow" aria-label="Problem solving sequence">${steps.map((item, index) => `<div class="problem-step"><span>${item[0]}</span><strong>${item[1]}</strong><small>${item[2]}</small></div>${index < steps.length - 1 ? '<div class="problem-arrow" aria-hidden="true">-&gt;</div>' : ""}`).join("")}</div>`;
  }
  if (type === "flowchart") {
    return `
      <div class="flowchart-study" aria-label="Flowchart symbols and example">
        <div class="symbol-table">
          <div><span class="flow-symbol terminator">Start</span><strong>Start / End</strong></div>
          <div><span class="flow-symbol io-shape">Input</span><strong>Input / Output</strong></div>
          <div><span class="flow-symbol process-shape">Process</span><strong>Process</strong></div>
          <div><span class="flow-symbol decision-shape"><i>?</i></span><strong>Decision</strong></div>
        </div>
        <div class="mini-flowchart">
          <div class="flow-symbol terminator">Start</div><span class="vertical-arrow">down</span>
          <div class="flow-symbol io-shape">Input A, B</div><span class="vertical-arrow">down</span>
          <div class="flow-symbol decision-shape"><i>A &gt; B?</i></div>
          <div class="flow-branches"><span>Yes: output A</span><span>No: output B</span></div>
          <span class="vertical-arrow">down</span><div class="flow-symbol terminator">End</div>
        </div>
      </div>
    `;
  }
  if (type === "computational") {
    const items = [["1", "Decompose", "Break it into smaller parts"], ["2", "Recognise patterns", "Find repeats and similarities"], ["3", "Abstract", "Keep the important details"], ["4", "Design an algorithm", "Write and test the steps"]];
    return `<div class="ct-grid" aria-label="Computational thinking concepts">${items.map((item) => `<div class="ct-node"><span>${item[0]}</span><strong>${item[1]}</strong><small>${item[2]}</small></div>`).join("")}</div>`;
  }
  return `
    <div class="career-map" aria-label="IT careers essay map">
      ${essayGuide.parts.map((part) => `<div><span>${escapeHtml(part.label)}</span><strong>${escapeHtml(part.marks)}</strong><p>${escapeHtml(part.task)}</p></div>`).join("")}
    </div>
  `;
}

function renderConfidence(module) {
  const choices = [["low", "Need help"], ["medium", "Getting there"], ["high", "Ready"]];
  refs.confidenceOptions.innerHTML = choices.map(([value, label]) => `<button class="confidence-button${state.confidence[module.slug] === value ? " is-active" : ""}" type="button" data-confidence="${value}">${label}</button>`).join("");
  refs.confidenceOptions.querySelectorAll(".confidence-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.confidence[module.slug] = button.dataset.confidence;
      render();
    });
  });
}

function renderTargets(module) {
  const score = moduleScore(module);
  const targets = [];
  if (score.correct < score.total) targets.push("Retry missed quiz items.");
  if (!state.confidence[module.slug]) targets.push("Set a confidence rating.");
  if (state.review[module.slug]) targets.push("Review this module before the exam.");
  if (module.slug === "careers") targets.push("Complete all four essay planning parts.");
  if (!targets.length) targets.push("Explain one answer aloud without notes.");
  refs.targetList.innerHTML = targets.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderProgress() {
  const totals = modules.reduce((acc, module) => {
    const score = moduleScore(module);
    acc.correct += score.correct;
    acc.total += score.total;
    return acc;
  }, { correct: 0, total: 0 });
  const confidenceValues = Object.values(state.confidence);
  const essayChecks = Object.values(state.essayChecks).reduce((sum, checks) => sum + checks.length, 0);
  const quizPercent = totals.total ? totals.correct / totals.total : 0;
  const confidencePercent = confidenceValues.length / modules.length;
  const essayPercent = essayChecks / essayGuide.parts.reduce((sum, part) => sum + part.checklist.length, 0);
  const overall = Math.min(100, Math.round((quizPercent * 0.68 + confidencePercent * 0.17 + essayPercent * 0.15) * 100));
  refs.overallPercent.textContent = `${overall}%`;
  refs.overallMeter.style.width = `${overall}%`;
  refs.correctCount.textContent = `${totals.correct}/${totals.total}`;
  refs.reviewCount.textContent = String(Object.values(state.review).filter(Boolean).length);
  refs.confidenceLabel.textContent = `${confidenceValues.length}/${modules.length}`;
}

function moduleScore(module) {
  return module.quiz.reduce((acc, question, index) => {
    if (state.answers[answerId(module.slug, index)]?.selected === question.answer) acc.correct += 1;
    acc.total += 1;
    return acc;
  }, { correct: 0, total: module.quiz.length });
}

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.tab = button.dataset.tab;
    render();
    refs.lessonPanel.focus();
  });
});

refs.markReview.addEventListener("click", () => {
  const module = activeModule();
  state.review[module.slug] = !state.review[module.slug];
  render();
});

refs.resetProgress.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  Object.assign(state, loadState());
  render();
});

render();
