# UI-Kit


## :fire: Особенности
* именование классов по [БЭМ](https://ru.bem.info/)
* используется БЭМ-структура
* используется препроцессор [SCSS](https://sass-lang.com/)
* используется транспайлер [Babel](https://babeljs.io/) для поддержки современного JavaScript (ES6) в браузерах
* используется [Webpack](https://webpack.js.org/) для сборки JavaScript-модулей
* используется CSS-сетка [smart-grid](https://github.com/dmitry-lavrik/smart-grid) на основе Bootstrap для быстрой адаптивной вёрстки
* используется жёсткий кодгайд
* используется проверка кода на ошибки перед коммитом

## :keyboard: Команды
* ```yarn run lint:styles``` - проверить SCSS-файлы. Для VSCode необходимо установить [плагин](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint). Для WebStorm
или PHPStorm необходимо включить Stylelint в ```Languages & Frameworks - Style Sheets - Stylelint``` (ошибки будут исправлены автоматически при сохранении файла)
* ```yarn run lint:styles --fix``` - исправить ошибки в SCSS-файлах
* ```yarn run lint:scripts``` - проверить JS-файлы
* ```yarn run lint:scripts --fix``` - исправить ошибки в JS-файлах
* ```yarn run dev``` - запуск сервера для разработки проекта
* ```yarn run build``` - собрать проект с оптимизацией без запуска сервера
* ```yarn run build:views``` - собрать HTML-файлы
* ```yarn run build:styles``` - скомпилировать SCSS-файлы
* ```yarn run build:scripts``` - собрать JS-файлы
* ```yarn run build:images``` - собрать изображения
* ```yarn run build:webp``` - сконвертировать изображения в формат ```.webp```
* ```yarn run build:sprites```- собрать спрайты
* ```yarn run build:fonts``` - собрать шрифты
* ```yarn run build:favicons``` - собрать фавиконки
* ```yarn run build:gzip``` - собрать конфигурацию Apache
* ```yarn run bem-m``` - добавить БЭМ-блок
* ```yarn run bem-c``` - добавить компонент

### Страницы проекта
* страницы проекта находятся в папке ```src/views/pages```
    * главная страница: ```src/views/index.html```

