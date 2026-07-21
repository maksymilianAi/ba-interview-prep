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

// ---------- Набори питань для тестів (по сторінках) ----------
const QUIZ_SETS = {
  index: [
    { q: 'Головний фокус Product Manager — це…',
      opts: ['Порядок беклогу', 'Чому і що будуємо (стратегія, ринок, результат)', 'Деталі вимог до рішення', 'Проведення daily'],
      correct: 1, expl: 'PM відповідає за «чому/що»: стратегію, ринок і бізнес-результат. PO — за «що/в якому порядку».' },
    { q: 'Proxy Product Owner — це…',
      opts: ['Scrum Master, що заміщає PO на daily', 'Автоматизований інструмент керування беклогом', 'Людина, що представляє реального власника продукту в команді', 'Зовнішній стейкхолдер без права рішень'],
      correct: 2, expl: 'Проксі-PO представляє бізнес/реального PO: ухвалює тактичні рішення, ескалює стратегічні.' },
    { q: 'Що описує третя частина user story «…so that <цінність>»?',
      opts: ['Хто користувач', 'Технічну реалізацію', 'Навіщо це потрібно (цінність)', 'Оцінку в story points'],
      correct: 2, expl: '«So that» — цінність/причина. Це найважливіша частина історії.' },
    { q: 'Літера "S" в INVEST означає…',
      opts: ['Specific', 'Small', 'Scalable', 'Stable'],
      correct: 1, expl: 'INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable.' },
    { q: 'Чим Acceptance Criteria відрізняються від Definition of Done?',
      opts: ['Це синоніми', 'AC — для конкретної історії; DoD — загальний стандарт якості для всіх історій', 'DoD пише розробник, AC — тестувальник', 'AC стосуються лише багів'],
      correct: 1, expl: 'AC специфічні для історії (Given-When-Then / правила). DoD — універсальний стандарт для всіх історій.' },
    { q: 'Definition of Ready захищає команду від того, щоб…',
      opts: ['Брати в спринт нечіткі, неготові історії', 'Деплоїти без тестів', 'Проводити ретроспективу', 'Спілкуватися зі стейкхолдерами'],
      correct: 0, expl: 'DoR — умови готовності історії до взяття в спринт (зрозуміла, з AC, оцінена, залежності відомі).' },
    { q: 'Який фреймворк пріоритезації використовує (Reach × Impact × Confidence) / Effort?',
      opts: ['MoSCoW', 'Kano', 'RICE', 'WSJF'],
      correct: 2, expl: 'Це RICE. WSJF = Cost of Delay / Job Size. MoSCoW = Must/Should/Could/Won’t.' },
    { q: 'Яка подія Scrum служить для покращення процесу команди?',
      opts: ['Sprint Review', 'Retrospective', 'Daily Scrum', 'Sprint Planning'],
      correct: 1, expl: 'Retrospective — про процес. Review — демо інкремента й фідбек по продукту.' },
    { q: 'North Star Metric — це…',
      opts: ['Метрика витрат на розробку', 'Одна метрика, що відображає отриману користувачем цінність', 'Кількість закритих story points', 'Показник завантаженості команди'],
      correct: 1, expl: 'NSM відображає цінність для користувача; навколо неї будують input-метрики.' },
    { q: 'MVP — це насамперед…',
      opts: ['Урізана фінальна версія продукту', 'Найдешевший спосіб перевірити ключову гіпотезу (експеримент)', 'Перший реліз без багів', 'Повний продукт для невеликого ринку'],
      correct: 1, expl: 'MVP — експеримент для навчання з мінімальними зусиллями, а не просто «менший продукт».' },
    { q: 'Leading-метрика відрізняється від lagging тим, що вона…',
      opts: ['Завжди точніша', 'Вимірюється лише раз на рік', 'Випереджає й прогнозує підсумковий результат', 'Стосується тільки фінансів'],
      correct: 2, expl: 'Leading (напр. активація) прогнозують lagging (revenue, churn). PO впливає на leading.' },
    { q: 'У матриці стейкхолдерів Power/Interest групу «висока влада + висока зацікавленість» треба…',
      opts: ['Monitor', 'Keep informed', 'Manage closely', 'Ignore'],
      correct: 2, expl: 'Високі влада й зацікавленість → manage closely (тісно залучати й узгоджувати).' }
  ],

  legal: [
    { q: 'У чому головний акцент цієї ролі?',
      opts: ['Класичний збір вимог і документація', 'Власність над беклогом у ролі Proxy PO', 'Ручне тестування', 'Управління командою розробки як лінійний менеджер'],
      correct: 1, expl: 'Це не «класичний BA», а Proxy PO: refinement, DoR, AC, unblock, GTM — власність над беклогом.' },
    { q: 'Суть трансформації компанії — це перехід…',
      opts: ['Від онлайн-підписки до друку', 'Від print+реклама до онлайн-підписки з data insight', 'Від B2C до B2G', 'Від SaaS до on-premise'],
      correct: 1, expl: 'Від друкованого видавництва з рекламою до онлайн-підписки з даними, рейтингами й контентом.' },
    { q: 'Фраза «raise issues with me that they cannot decide» означає, що…',
      opts: ['Над роллю є справжній PO/менеджер; вона ухвалює тактичні рішення й ескалює стратегічні', 'Команда не має права ставити питання', 'Вона одноосібно ухвалює всі стратегічні рішення', 'Рішення ухвалює лише розробка'],
      correct: 0, expl: 'Класична проксі-модель: тактичні рішення — на ній, стратегічні — ескалація вгору.' },
    { q: 'Який формат AC найкраще пасує для сценарію поведінки?',
      opts: ['Given–When–Then', 'ERD', 'RACI', 'MoSCoW'],
      correct: 0, expl: 'Given-When-Then добре описує поведінкові сценарії; для складної логіки — чек-ліст правил.' },
    { q: 'Який інструмент дає якісний UX-інсайт (heatmaps, записи сесій, rage clicks)?',
      opts: ['Google Analytics (GA4)', 'Power BI', 'Microsoft Clarity', 'JIRA'],
      correct: 2, expl: 'Microsoft Clarity — про якісний UX. GA4/Power BI — кількісні дані «що і скільки».' },
    { q: 'Кількісне vs якісне: GA4 і Power BI відповідають на питання…',
      opts: ['«чому»', '«що» відбувається', '«хто винен»', '«коли звільнятися»'],
      correct: 1, expl: 'GA4/Power BI кажуть «що» (числа), Clarity/інтерв’ю — «чому». Сила — у поєднанні.' },
    { q: 'Яка метрика підписки вимірює втрату клієнтів?',
      opts: ['MRR', 'Churn', 'Activation', 'CAC'],
      correct: 1, expl: 'Churn — відтік/втрата підписників. MRR — регулярний дохід, CAC — вартість залучення.' },
    { q: 'У BPMN розгалуження/рішення позначають елементом…',
      opts: ['Event', 'Task', 'Gateway', 'Pool'],
      correct: 2, expl: 'Gateway (ромб) — розгалуження: exclusive (XOR), parallel (AND). Lanes/Pools — хто виконує.' },
    { q: 'Продукт тут two-sided: він служить…',
      opts: ['Лише юрфірмам', 'Лише кінцевим користувачам', 'І юрфірмам (яких ранжують і хто платить), і користувачам, що шукають юристів', 'Лише редакції'],
      correct: 2, expl: 'Дві сторони ринку: ранжовані фірми та ті, хто шукає юристів. Цінність — для обох.' },
    { q: 'Головний нюанс використання AI як PO у юридичному домені —',
      opts: ['AI повністю замінює рішення PO', 'Відповідальність і валідація лишаються на людині; ризик галюцинацій', 'AI гарантує 100% точність', 'AI не можна застосовувати взагалі'],
      correct: 1, expl: 'AI прискорює чернетки, але валідація — на людині; у юридичних даних критичні точність і джерела.' }
  ],

  aipm: [
    { q: 'Попри назву «AI PM», більшість вимог вакансії — це…',
      opts: ['Класичний BABOK / IIBA бізнес-аналіз', 'Machine learning engineering', 'Графічний дизайн', 'DevOps'],
      correct: 0, expl: 'Тіло вакансії — сильний BABOK-BA (requirements lifecycle, solution acceptance, NFR, декомпозиція) + продукт і AI.' },
    { q: 'Хто ймовірний наймач за текстом вакансії?',
      opts: ['Google', 'Intellias', 'Amazon', 'Клієнт напряму'],
      correct: 1, expl: 'Згадка «Intellias corporate knowledge base» видає наймача — Intellias (аутсорс на клієнта).' },
    { q: 'Скільки областей знань у BABOK?',
      opts: ['4', '6', '8', '10'],
      correct: 1, expl: '6: BA Planning & Monitoring, Elicitation & Collaboration, RLCM, Strategy Analysis, RADD, Solution Evaluation.' },
    { q: 'Transition requirements — це…',
      opts: ['Постійні функціональні вимоги', 'Тимчасові вимоги для переходу as-is → to-be (міграція, навчання)', 'Вимоги до продуктивності', 'Юридичні обмеження'],
      correct: 1, expl: 'Transition — тимчасові вимоги, потрібні лише під час переходу до нового рішення.' },
    { q: 'Що з переліченого є Non-Functional Requirement?',
      opts: ['«Користувач може увійти в систему»', '«Система формує звіт»', '«Час відповіді < 2 секунд під навантаженням»', '«Користувач може створити заявку»'],
      correct: 2, expl: 'NFR — якісні характеристики (performance, security…). Решта — функціональні вимоги.' },
    { q: 'Capability gap analysis належить до області…',
      opts: ['Solution Evaluation', 'Strategy Analysis (current → future state)', 'Elicitation', 'RLCM'],
      correct: 1, expl: 'Порівняння поточних і потрібних спроможностей → розриви → опції рішення. Це Strategy Analysis.' },
    { q: 'Чим BPMN відрізняється від UML?',
      opts: ['Це те саме', 'BPMN — бізнес-процеси; UML — система/ПЗ', 'BPMN — для коду; UML — для процесів', 'BPMN — лише для баз даних'],
      correct: 1, expl: 'BPMN моделює потік роботи між ролями; UML — структуру й поведінку системи (use case, sequence, class…).' },
    { q: 'Що НЕ входить у requirements lifecycle management?',
      opts: ['Trace', 'Prioritize', 'Compile (компіляція коду)', 'Assess changes'],
      correct: 2, expl: 'RLCM: Trace, Maintain, Prioritize, Assess changes, Approve. Компіляція коду сюди не належить.' },
    { q: 'Що робить RAG?',
      opts: ['Дотреновує модель на нових даних', 'Підмішує релевантні документи в контекст перед генерацією', 'Прискорює навчання моделі', 'Стискає модель'],
      correct: 1, expl: 'Retrieval-Augmented Generation грунтує відповідь на знайдених джерелах → менше галюцинацій, свіжі дані.' },
    { q: 'Hallucination у LLM — це…',
      opts: ['Помилка мережі', 'Впевнено сформульована, але хибна/вигадана відповідь', 'Затримка відповіді', 'Перевищення ліміту токенів'],
      correct: 1, expl: 'Модель генерує ймовірний текст, не істину. Знижують через grounding, guardrails, «скажи не знаю».' },
    { q: 'Чим CBAP відрізняється від CCBA?',
      opts: ['CBAP — просунутий рівень, CCBA — середній', 'Це сертифікати з UML', 'CBAP — початковий, CCBA — просунутий', 'Обидва — від PMI'],
      correct: 0, expl: 'Обидва — IIBA за BABOK. CCBA — середній рівень досвіду, CBAP — просунутий.' },
    { q: 'Яка з практик належить до Responsible AI?',
      opts: ['Приховувати від користувача, що працює AI', 'Повідомляти про використання AI й давати спосіб оскаржити результат', 'Ніколи не логувати рішення', 'Уникати будь-якого моніторингу'],
      correct: 1, expl: 'Responsible AI: прозорість, можливість оскаржити, моніторинг наслідків, документування для аудиту.' }
  ]
};

// ---------- Рушій тесту ----------
const quizEl = document.getElementById('quiz');
if (quizEl) {
  const set = document.body.dataset.quiz || 'index';
  const QUESTIONS = QUIZ_SETS[set];

  if (QUESTIONS && QUESTIONS.length) {
    let idx = 0;
    let score = 0;

    const resultMessage = () => {
      const total = QUESTIONS.length;
      if (score === total) return 'Відмінний результат — повне покриття теми.';
      if (score >= total * 0.75) return 'Сильний результат. Переглянь питання, де були помилки, і тему закрито.';
      if (score >= total * 0.5) return 'Непогано. Варто повторити теми, де були помилки, і пройти ще раз.';
      return 'База поки слабша — пройдись по теорії вгорі сторінки та спробуй тест знову.';
    };

    const render = () => {
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

          document.getElementById('quizFb').innerHTML =
            (ok ? 'Правильно.' : 'Неправильно. Правильна відповідь підсвічена.') +
            '<div class="expl">' + item.expl + '</div>' +
            '<button class="quiz-next" id="quizNext">' +
              (idx + 1 < QUESTIONS.length ? 'Далі' : 'Результат') +
            '</button>';
          document.getElementById('quizNext').addEventListener('click', () => { idx++; render(); });
        });
      });
    };

    render();
  }
}
