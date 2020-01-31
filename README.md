# VkBot
# Готовое ядро для модульного бота VK основанного на Node.js


# Установка

1.Клонируйте или скачайте этот репозиторий

2.Откройте файл `config.json`

3.Введите в поле `token` ваш токен, а в поле `groupId` id вашей группы
# Запуск

Обычный запуск: `npm start`

Запуск при помощи [Nodemon](https://www.npmjs.com/package/nodemon): `npm start-nodemon`

# Создание команд

1.Перейдите в папку `commands/`

2.Создайте файл с названием `имя.js`

3.Напишите туда следующий код:
```javascript
//При необходимости можно импортировать свои модули
module.exports.run = async (context) => {
  //Код команды 
}

module.exports.help = {
   name: "" //На сообщещие с каким текстом будет срабатывать команда, можно в кавычках, в массиве или RegExp
}
```
4.Profit

# Разработчики
* [Николай Ким(NickProgramm)](https://vk.com/3peekawowd)

* [VK-IO](https://github.com/negezor/vk-io)
