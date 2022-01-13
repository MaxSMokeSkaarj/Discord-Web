const { chats } = require('../json/config.json');
const fs = require('fs')
let db = require('../json/db.json')

const getMessage = 

const sender = (msg) => {
	let channelList = msg.client.channels.cache;
	for (let channel of channelList.keys()) {
		if(chats.includes(channel) && msg.channelId != channel) {
			channelList.get(channel).send(`${msg.guild.name}\n${msg.member.displayName}: ${msg.content}`);
			.then(res => {
				db[msg.id] = res.id
				fs.writeFile('./json/db.json', JSON.stringify(db, null, 4), (err) => {
					if (err) console.log(err)
				});
			});
		};
	};
};

const editor = (msg) => {
//Невозможно реализовать
/*	Promise.all([msg.channel.messages.fetch()]) 
	.then (([res]) => {
		for (let message of res.keys()) {
			console.log(message)
		}
	});*/
}
module.exports = {sender, editor};
