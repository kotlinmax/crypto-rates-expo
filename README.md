# Crypto Rates Expo

Приложение "Crypto Rates Expo" предоставляет актуальную информацию о курсах криптовалют.

## Демонстрация

Проект доступен онлайн в приложении Expo Go: 
  [Expo Go iOS](https://itunes.apple.com/app/apple-store/id982107779)
  [Expo Go Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)

Установите Expo Go и введите ссылку для просмотра приложения:
  [iOS](https://itunes.apple.com/app/apple-store/id982107779)
  [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)


## Особенности

- Просмотр актуальных курсов криптовалют
- Поиск по базовым валютам
- Сортировка по базовым валютам
- Просмотр детальной информации по криптовалютной паре

## Технологии

Проект создан с использованием следующих технологий:

- Expo для упрощения разработки и тестирования мобильных приложений.
- React Native для создания нативных мобильных приложений на JavaScript.
- MobX для управления состоянием приложения.
- Axios для выполнения HTTP-запросов.
- React Navigation для навигации между экранами приложения.
- Jest и Testing Library для тестирования компонентов и функционала.

## Установка

Чтобы запустить проект локально, выполните следующие шаги:

1. Клонируйте репозиторий:

```bash
git clone git@github.com:kotlinmax/crypto-rates-expo.git
cd crypto-rates-expo
```

2. Установите зависимости:

```bash
npm install
```

## Сборка для Production:
Вы можете запустить приложение на выбранной платформе с помощью одной из следующих команд:

```bash
npm run android     # Запускает приложение на подключенном Android устройстве или эмуляторе.
npm run ios         # Запускает приложение на подключенном iOS устройстве или симуляторе (только Mac).
npm run web         # Запускает приложение в веб-браузере.
```

## Тестирование
Запустите тесты с помощью следующей команды:
```bash
npm test
```