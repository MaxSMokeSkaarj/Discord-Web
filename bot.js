require('dotenv').config();

const { Client, Intents } = require('discord.js');
const robot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.GUILD_PRESENCES] });
const {sender,editor} = require('./lib/utils.js');
const {chats} = require('./json/config.json');

robot.on("ready", function() {
	console.log(robot.user.username + " is running");
	
});

robot.on('messageCreate', (msg) => {
	if (msg.author.username != robot.user.username && msg.author.discriminator != robot.user.discriminator) {
		if (chats.includes(msg.channelId)) {
			sender(msg);
		};
	};
});

/*robot.on("messageUpdate", (msg) => {
	if (msg.author.username != robot.user.username && msg.author.discriminator != robot.user.discriminator) {
		editor(msg);
	}
});*/

robot.login(process.env.DISCORD_TOKEN);
