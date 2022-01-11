const { chats } = require('../json/config.json');
const CircularJSON = require('circular-json')
const sender = (msg) => {
	let channelList = msg.client.channels.cache
	for (let channel of channelList.keys()) {
		if(chats.includes(channel) && msg.channelId != channel) {
			channelList.get(channel).send(`${msg.guild.name}\n${msg.member.displayName}: ${msg.content}`)
		}
	}
};
module.exports = {sender};
