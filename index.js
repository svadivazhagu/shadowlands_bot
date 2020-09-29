const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Bot ready');
});


client.on('message', msg => {
	if (msg.content === '*sl') {
		const author = msg.author['username'];
		const date = new Date();
		if (String((date.getMonth() + 1)) + date.getDate() === '1026') {
			msg.channel.send(author + ', WoW Shadowlands is out! Get on!');
		}
		else {
			msg.channel.send(author + ", WoW Shadowlands is not out yet. It's coming on 10/26/2020.")
		}
	}
	if (msg.content === '*prepatch') {
		const author = msg.author['username'];
		msg.channel.send(author + ', WoW Shadowlands Pre-Patch date has not been announced yet.');
	}
});

client.login(process.env.BOT_TOKEN);

