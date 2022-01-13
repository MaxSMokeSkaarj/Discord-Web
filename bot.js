// Обьявление зависимостей

require('dotenv').config();

const { Client, Intents } = require('discord.js');
const robot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.GUILD_PRESENCES] });
const {sender,editor} = require('./lib/utils.js');
const {chats} = require('./json/config.json');

// Ивент готовности бота
robot.on("ready", function() {
	console.log(robot.user.username + " is running");
	
});

// Ивент на новое сообщение
robot.on('messageCreate', (msg) => {
	//Если есть новое сообщение в гильдии(канале), где есть бот, то запускаем обработчик
	sender(msg);
});

// Ивент редактирования сообщения(невозможно реализовать)
/*robot.on("messageUpdate", (msg) => {
	if (msg.author.username != robot.user.username && msg.author.discriminator != robot.user.discriminator) {
		editor(msg);
	}
});*/

robot.login(process.env.DISCORD_TOKEN); // Авторизация бота по токену
