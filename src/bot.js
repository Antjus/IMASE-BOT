const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('../src/config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('../commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`../commands/${file}`);
	client.commands.set(command.name, command);
}

client.on('ready', () => {
  client.user.setStatus('idle');
  client.user.setUsername("IMASE"); 
  console.log(`I'm here man.`);


client.on('ready', () => {
  setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
      client.user.setActivity(activities_list[index]); 
  }, 8000); 
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.on('ready', () => {

const activities_list = [
  `IMASE | y!help`,
  `Playing Mii Shop Song`,
  `Wii`,
  `SuperMario64`,
  `IMASE | y!help`,
  `Nintendo64`,
  `Pokémon Blue`,
  `Undertale`,
  `Spotify`,
  `Visual Studio Code`,
  `Netflix` , 
  `Twitch` 
  ]; 


  setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
      client.user.setActivity(activities_list[index]); 
  }, 8000); 
})});


client.login(token);