// Кнопка "нагору"
const toTop = document.querySelector('.totop');
if (toTop) {
  window.addEventListener('scroll', () => {
    toTop.classList.toggle('show', window.scrollY > 400);
  });
  toTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Розгорнути / згорнути всі питання
const expandAll = document.getElementById('expandAll');
const collapseAll = document.getElementById('collapseAll');
if (expandAll) expandAll.addEventListener('click', () =>
  document.querySelectorAll('details.acc').forEach(d => d.open = true));
if (collapseAll) collapseAll.addEventListener('click', () =>
  document.querySelectorAll('details.acc').forEach(d => d.open = false));

// Тест самоконтролю (сторінка "Основи PO / PM")
const quizEl = document.getElementById('quiz');
if (quizEl) {
  const QUESTIONS = [
    {
      q: 'Головний фокус Product Manager — це…',
      opts: ['Порядок беклогу', 'Чому і що будуємо (стратегія, ринок, результат)', 'Деталі вимог до рішення', 'Проведення daily'],
      correct: 1,
      expl: 'PM відповідає за «чому/що»: стратегію, ринок і бізнес-результат. PO — за «що/в якому порядку».'
    },
    {
      q: 'Proxy Product Owner — це…',
      opts: [
        'Scrum Master, що заміщає PO на daily',
        'Автоматизований інструмент керування беклогом',
        'Людина, що представляє реального власника продукту в команді',
        'Зовнішній стейкхолдер без права рішень'
      ],
      correct: 2,
      expl: 'Проксі-PO представляє бізнес/реального PO: ухвалює тактичні рішення, ескалює стратегічні.'
    },
    {
      q: 'Що описує третя частина user story «…so that <цінність>»?',
      opts: ['Хто користувач', 'Технічну реалізацію', 'Навіщо це потрібно (цінність)', 'Оцінку в story points'],
      correct: 2,
      expl: '«So that» — цінність/причина. Це найважливіша частина історії.'
    },
    {
      q: 'Літера "S" в INVEST означає…',
      opts: ['Specific', 'Small', 'Scalable', 'Stable'],
      correct: 1,
      expl: 'INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable.'
    },
    {
      q: 'Чим Acceptance Criteria відрізняються від Definition of Done?',
      opts: [
        'Це синоніми',
        'AC — для конкретної історії; DoD — загальний стандарт якості для всіх історій',
        'DoD пише розробник, AC — тестувальник',
        'AC стосуються лише багів'
      ],
      correct: 1,
      expl: 'AC специфічні для історії (Given-When-Then / правила). DoD — універсальний стандарт для всіх історій.'
    },
    {
      q: 'Definition of Ready захищає команду від того, щоб…',
      opts: [
        'Брати в спринт нечіткі, неготові історії',
        'Деплоїти без тестів',
        'Проводити ретроспективу',
        'Спілкуватися зі стейкхолдерами'
      ],
      correct: 0,
      expl: 'DoR — умови готовності історії до взяття в спринт (зрозуміла, з AC, оцінена, залежності відомі).'
    },
    {
      q: 'Який фреймворк пріоритезації використовує (Reach × Impact × Confidence) / Effort?',
      opts: ['MoSCoW', 'Kano', 'RICE', 'WSJF'],
      correct: 2,
      expl: 'Це RICE. WSJF = Cost of Delay / Job Size. MoSCoW = Must/Should/Could/Won’t.'
    },
    {
      q: 'Яка подія Scrum служить для покращення процесу команди?',
      opts: ['Sprint Review', 'Retrospective', 'Daily Scrum', 'Sprint Planning'],
      correct: 1,
      expl: 'Retrospective — про процес. Review — демо інкремента й фідбек по продукту.'
    },
    {
      q: 'North Star Metric — це…',
      opts: [
        'Метрика витрат на розробку',
        'Одна метрика, що відображає отриману користувачем цінність',
        'Кількість закритих story points',
        'Показник завантаженості команди'
      ],
      correct: 1,
      expl: 'NSM відображає цінність для користувача; навколо неї будують input-метрики.'
    },
    {
      q: 'MVP — це насамперед…',
      opts: [
        'Урізана фінальна версія продукту',
        'Найдешевший спосіб перевірити ключову гіпотезу (експеримент)',
        'Перший реліз без багів',
        'Повний продукт для невеликого ринку'
      ],
      correct: 1,
      expl: 'MVP — експеримент для навчання з мінімальними зусиллями, а не просто «менший продукт».'
    },
    {
      q: 'Leading-метрика відрізняється від lagging тим, що вона…',
      opts: [
        'Завжди точніша',
        'Вимірюється лише раз на рік',
        'Випереджає й прогнозує підсумковий результат',
        'Стосується тільки фінансів'
      ],
      correct: 2,
      expl: 'Leading (напр. активація) прогнозують lagging (revenue, churn). PO впливає на leading.'
    },
    {
      q: 'У матриці стейкхолдерів Power/Interest групу «висока влада + висока зацікавленість» треба…',
      opts: ['Monitor', 'Keep informed', 'Manage closely', 'Ignore'],
      correct: 2,
      expl: 'Високі влада й зацікавленість → manage closely (тісно залучати й узгоджувати).'
    }
  ];

  let idx = 0;
  let score = 0;

  function resultMessage() {
    const total = QUESTIONS.length;
    if (score === total) return 'Відмінний результат — повне покриття теми. База готова.';
    if (score >= total * 0.75) return 'Сильний результат. Переглянь питання, де були помилки, і тему закрито.';
    if (score >= total * 0.5) return 'Непогано. Варто повторити теми, де були помилки, і пройти ще раз.';
    return 'База поки слабша — пройдись по теорії вгорі сторінки та спробуй тест знову.';
  }

  function render() {
    if (idx >= QUESTIONS.length) {
      quizEl.innerHTML =
        '<div class="quiz-result">' +
          '<div class="quiz-meta">Результат</div>' +
          '<div class="score">' + score + ' / ' + QUESTIONS.length + '</div>' +
          '<div class="msg">' + resultMessage() + '</div>' +
          '<button class="quiz-next" id="quizRestart" style="margin-top:18px">Пройти ще раз</button>' +
        '</div>';
      document.getElementById('quizRestart').addEventListener('click', () => {
        idx = 0; score = 0; render();
        quizEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
      return;
    }

    const item = QUESTIONS[idx];
    const pct = Math.round((idx / QUESTIONS.length) * 100);
    quizEl.innerHTML =
      '<div class="quiz-progress"><div class="bar" style="width:' + pct + '%"></div></div>' +
      '<div class="quiz-meta">Питання ' + (idx + 1) + ' з ' + QUESTIONS.length + '</div>' +
      '<p class="quiz-q">' + item.q + '</p>' +
      '<div class="quiz-opts">' +
        item.opts.map((o, i) => '<button class="quiz-opt" data-i="' + i + '">' + o + '</button>').join('') +
      '</div>' +
      '<div class="quiz-feedback" id="quizFb"></div>';

    quizEl.querySelectorAll('.quiz-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        const chosen = Number(btn.dataset.i);
        const ok = chosen === item.correct;
        if (ok) score++;

        quizEl.querySelectorAll('.quiz-opt').forEach(b => {
          b.disabled = true;
          const i = Number(b.dataset.i);
          if (i === item.correct) b.classList.add('correct');
          else if (i === chosen) b.classList.add('wrong');
        });

        const fb = document.getElementById('quizFb');
        fb.innerHTML =
          (ok ? 'Правильно.' : 'Неправильно. Правильна відповідь підсвічена.') +
          '<div class="expl">' + item.expl + '</div>' +
          '<button class="quiz-next" id="quizNext">' +
            (idx + 1 < QUESTIONS.length ? 'Далі' : 'Результат') +
          '</button>';
        document.getElementById('quizNext').addEventListener('click', () => {
          idx++; render();
        });
      });
    });
  }

  render();
}
