# Школа Танцев — как запустить

1. Установите Node.js 18 или новее: https://nodejs.org
2. Откройте терминал в этой папке и выполните:

   npm install
   npm run dev

3. Откройте http://localhost:3000

## Где что менять

- Названия направлений и списки занятий — lib/data.js (CARDS_DATA)
- Логотипы в бегущей строке — lib/data.js (brands) + public/assets/Brand Logos SVG/
- Соцсети — lib/data.js (SOCIAL_ICONS)
- Заголовок на первом экране — components/VimeoHero.jsx
- Меню и карточки в меню — components/Navbar.jsx
- Подвал, адрес, почта — components/Footer.jsx
- Фраза из букв на скролле — components/HorizontalWords.jsx
- Фотографии — public/assets/photos/ (замените файлы, имена оставьте те же)

## Важно

Стили (app/styles/*.css) не изменялись вообще — вё оформление и анимации
точно такие же, как в оригинальном репозитории. Изменён только текст
и три фотографии в выпадающем меню.

Видео на первом экране в оригинале загружается с Vimeo и работает только
на домене truus.co. Чтобы поставить своё: положите hero.mp4 в папку public/
и в components/VimeoHero.jsx замените iframe на:
<video ref={iframeRef} src="/hero.mp4" autoPlay muted loop playsInline />
