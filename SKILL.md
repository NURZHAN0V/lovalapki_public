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
- **Иконки фич:** AVIF + PNG fallback в отдельных кружках. Фон круга — `#f3e3d1` (как в ассетах), без белого кольца. Подписи — на фоне фото рядом. Фон героя — `hero.avif` + `hero.jpg`.

## Git: не путать с gulayka

В корне gulayka в `.gitignore` стоит `public/`.

- gulayka: `origin` → `git@github.com:NURZHAN0V/gulayka.git`
- лендинг: отдельный git **внутри** `public/`, `origin` → `git@github.com:NURZHAN0V/lovalapki_public.git`

```bash
cd public
git add -A && git commit -m "..."
git push origin main
```

**Не делать:** `git remote set-url origin …lovalapki_public` в корне gulayka.

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
