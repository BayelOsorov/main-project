const { Telegraf } = require('telegraf')
const BOT_TOKEN = '2107214478: AAGnVnCujJBK3zj2Per6GIyPtm5wM8D-I2k';
const bot = new Telegraf(AAGnVnCujJBK3zj2Per6GIyPtm5wM8D - I2k) //сюда помещается токен, который дал botFather
bot.start((ctx) => ctx.reply('Welcome')) //ответ бота на команду /start
bot.help((ctx) => ctx.reply('Send me a sticker')) //ответ бота на команду /help
bot.on('sticker', (ctx) => ctx.reply('')) //bot.on это обработчик введенного юзером сообщения, в данном случае он отслеживает стикер, можно использовать обработчик текста или голосового сообщения
bot.hears('hi', (ctx) => ctx.reply('Hey there')) // bot.hears это обработчик конкретного текста, данном случае это - "hi"
bot.launch() // запуск бота
const { Telegraf } = require('telegraf')

// const bot = new Telegraf(process.env.BOT_TOKEN)
// bot.start((ctx) => ctx.reply('Welcome'))
// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on('sticker', (ctx) => ctx.reply('👍'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))
// bot.launch()

// // Enable graceful stop
// process.once('SIGINT', () => bot.stop('SIGINT'))
// process.once('SIGTERM', () => bot.stop('SIGTERM'))
// const { Telegraf } = require('telegraf')

// const bot = new Telegraf(process.env.BOT_TOKEN)
// bot.command('oldschool', (ctx) => ctx.reply('Hello'))
// bot.command('hipster', Telegraf.reply('λ'))
// bot.launch()

// // Enable graceful stop
// process.once('SIGINT', () => bot.stop('SIGINT'))
// process.once('SIGTERM', () => bot.stop('SIGTERM'))