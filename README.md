# Interview Prep — Product Owner / BA / AI PM

Статичний сайт для підготовки до двох BA/product-співбесід. Три сторінки, мобільна верстка, без залежностей і збірки.

## Сторінки

**Теорія:**
- **[index.html](index.html)** — Основи PO / PM: коротка теорія + питання для самоперевірки + тест.
- **[vacancy-legal-po.html](vacancy-legal-po.html)** — Вакансія 1: Product Owner / BA (юридичні рейтинги, London) — домен, навички, питання + тест.
- **[vacancy-ai-pm.html](vacancy-ai-pm.html)** — Вакансія 2: AI Product Manager (BABOK-BA + продукт + AI) — техніки BA, BPMN/UML, вимоги, AI-в-продукті, питання + тест.

**Практика:**
- **[star-trainer.html](star-trainer.html)** — STAR-репетитор: власні behavioral-історії за схемою S-T-A-R. Збереження локально (localStorage), чек-лист якості, лічильники слів, таймер, друк/PDF.
- **[mock.html](mock.html)** — Mock-кейси: сценарні питання з follow-up і розбором сильної відповіді (reveal-on-demand).
- **[deep-dive.html](deep-dive.html)** — Deep-dive: 5 найімовірніших тем на глибину з наскрізними прикладами.

Тести й STAR-репетитор працюють повністю у браузері (JS + localStorage), без бекенду й без AI.

## Запустити локально

Відкрити `index.html` у браузері або підняти сервер:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Опублікувати через GitHub Pages

Settings → Pages → Source: Deploy from a branch → Branch `main`, папка `/ (root)` → Save.
Сайт буде за адресою `https://<нік>.github.io/<репо>/`.
