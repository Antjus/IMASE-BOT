const fs = require('fs')
const Canvas = require('canvas')
const Discord = require('discord.js')
const { prefix, token } = require('../src/config.json')
const { MessageEmbed, Intents } = require('discord.js')

const client = new Discord.Client({ intents: [Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGES] });
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();

const commandFolders = fs.readdirSync('../commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`../commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`../commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

client.on('ready', () => {
  client.user.setStatus('dnd');
  client.user.setUsername("IMASE"); 
  console.log(`I'm here man.`);


client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	
	const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();


	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		const errorEmbed = new MessageEmbed()
		.setTitle('**ERROR 404**')
		.setDescription('An **error** occurred while running that command.')
		.setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
        .setThumbnail('https://images-ext-1.discordapp.net/external/QCcrCbnel2dyEUKsFcttbwUaCqU86blbXDkQaxSjxSg/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/800329693651009557/08389d35b7d658e8008734e248496c61.png?width=425&height=425')
		.setTimestamp()
		.setColor('#CC562C');

		message.channel.send(errorEmbed);
	}
	}	
)
}
);

const activities_list = [
	`IMASE | y!help`,
	`Playing Mii Shop Song`,
	`Wii`,
	`SuperMario64`,
	`IMASE | y!help`,
	`Nintendo64`,
	`Pokémon Blue`,
	`Undertale`,
	`IMASE | y!help`,
	`Spotify`,
	`Visual Studio Code`,
	`Netflix` , 
	`IMASE | y!help`,
	`Twitch` 
	]; 
  
  
	setInterval(() => {
		const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
		client.user.setActivity(activities_list[index]); 
	}, 8000); 


  
client.login(token);
