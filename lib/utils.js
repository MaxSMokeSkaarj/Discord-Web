const { chats } = require('../json/config.json');
const fs = require('fs')
let db = require('../json/db.json')

const 

const getChannelFromList = (msg, channelList) => {
	for (let channel of channelList) {
		if(chats.includes(channel) && msg.channelId != channel) {
			
		};
	};
};  

const sender = (msg) => {
	let channelList = msg.client.channels.cache;
	if (msg.author.username != robot.user.username && msg.author.discriminator != robot.user.discriminator) {
		if (chats.includes(msg.channelId)) {
			getChannelFromList(msg, );
	};
};
	for (let channel of channelList.keys()) {
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
