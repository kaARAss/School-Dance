# Сайт школы танцев

Одностраничный сайт с анимациями на Next.js и GSAP.

## Запуск на компьютере

```bash
npm install
npm run dev
```

Открой http://localhost:3000

## Публикация в интернете

Инструкция по шагам — в файле [GITHUB-PAGES.md](GITHUB-PAGES.md).

Главное: в настройках репозитория Settings → Pages → Source нужно выбрать
**GitHub Actions**. Если оставить «Deploy from a branch», вместо сайта откроется эта страница с текстом.

## Где что лежит

- `app/` — стили и главная страница
- `components/` — блоки сайта: шапка, первый экран, карточки, подвал
- `lib/data.js` — тексты, ссылки на соцсети, содержимое меню
- `public/assets/photos/` — фотографии
- `public/fonts/` — шрифты

## Что заменить на своё

- ссылки на соцсети и номер телефона — `lib/data.js` и `components/Navbar.jsx`
- адрес и точка на карте — `components/Footer.jsx`
- видео на первом экране — `components/VimeoHero.jsx`
