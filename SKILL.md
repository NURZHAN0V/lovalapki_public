---
name: public-community-landing
description: >-
  Maintains the mobile community landing in public/ (Владельцы собак — Telegram/Max/VK).
  Use when editing public/index.html, public/css, public/js, public/assets, community
  poster links, or regenerating hero/icons for this page.
disable-model-invocation: false
---

# Public community landing

Одностраничный мобильный постер сообщества «Владельцы собак» (чат и знакомства). Не путать с продуктовым лендингом ЛоваЛапки из `docs/референсы/публичный-сайт/`.

## Структура

```
public/
├── SKILL.md
├── index.html
├── css/styles.css
├── js/main.js
└── assets/
    ├── hero.avif / hero.jpg
    └── icon-{people,paw,calendar,chat,heart}.avif|.png
```

## Ссылки (не выдумывать)

| Кнопка | URL |
| --- | --- |
| Телеграм | https://t.me/LovaLapki |
| Max | https://max.ru/join/fKesdTzfM4_gxegGijWSWZJ0mG4UKZ-FB-uZbDg6V8c |
| ВК | https://vk.ru/lovalapki |

Менять URL только по явной просьбе пользователя.

## Визуальный контракт

- **Формат:** только мобильная версия (`max-width: 430px`). Фон на весь экран: без скруглений и без внешних отступов сверху/снизу у постера.
- **Референс:** тёплый lifestyle-кадр (два бульдога в фокусе, пара в боке), бежевые CTA `#E2D5C3`, тёмный градиент-veil для читаемости.
- **Шрифты (Google Fonts):**
  - заголовок — `Cormorant Garamond`
  - подписи / uppercase — `Montserrat`
  - рукопись — `Great Vibes`
- **Три CTA** pill-кнопки с подписями: `Telegram` / `MAX` / `VK`. Не возвращать одну кнопку из старого макета.
- Без блока «Присоединяйтесь к нам» и без направляющей стрелки.
- **Бренд в тексте страницы:** как на постере сообщества («Владельцы собак»). В UI пользователю не писать латиницу LovaLapki; в URL/коде — ок.
- **Иконки фич:** AVIF + PNG fallback в отдельных кружках (сабкейки). Фон круга — единый `var(--beige)`, без «двойного» кольца. Подписи — только на фоне фото рядом; читаемость через левый veil + `text-shadow`. Фон героя — `hero.avif` + `hero.jpg`.
- **Отдельный git:** лендинг пушится в `lovalapki_public` (remote `public`), не в `gulayka` (`origin`). См. раздел ниже.

## Git: не путать с gulayka

Сейчас в этом клоне:
- `origin` → `git@github.com:NURZHAN0V/gulayka.git` (основной продукт)
- лендинг лежит в `public/` и **не должен** уезжать в gulayka случайно

Рекомендуемый вариант — **второй remote только для лендинга**:

```bash
# один раз
git remote add public git@github.com:NURZHAN0V/lovalapki_public.git

# вынести историю только public/ и запушить (из корня gulayka)
git subtree split --prefix=public -b public-landing
git push public public-landing:main
```

Альтернатива ещё чище: отдельный клон/папка только с содержимым `public/`, свой `git init`, `origin` = `lovalapki_public`. Тогда два репо физически разные — перепутать remotes нельзя.

**Не делать:** `git remote set-url origin …lovalapki_public` — сломает push основного gulayka.

## Правки

1. Текст/разметка → `index.html`.
2. Отступы, veil, кнопки → `css/styles.css`.
3. Анимации появления / press → `js/main.js` (без аналитики и без сторонних SDK).
4. Новый фон/иконки → сгенерировать, положить в `assets/`, конвертировать в AVIF (`ffmpeg -frames:v 1 -c:v libsvtav1`), обновить `picture`/`source` в HTML.
5. Не раздувать в дашборд: один экран-композиция, без карточек-сетки и без десктоп-адаптива «широкой» версии, пока пользователь не попросит.

## Чеклист после правок

- [ ] Все три ссылки открываются в новой вкладке (`target="_blank"` + `rel="noopener noreferrer"`)
- [ ] На узком экране (~390×844) текст читаем, кнопки не обрезаны safe-area
- [ ] AVIF грузится, JPG/PNG — fallback
- [ ] Нет секретов и нет логов координат/токенов
