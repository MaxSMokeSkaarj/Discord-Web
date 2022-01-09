const { chats } = require('../json/config.json');

const sender = (msg) => {
	chats.forEach( (item, i, arr) => {
		if (msg.channelId != item) {
			msg.guild.channels.cache.get(item).send(`${msg.guild.name}\n${msg.member.displayName}: ${msg.content}`)
		}
	});
};
module.exports = {sender};
