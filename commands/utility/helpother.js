module.exports = {
    name: "utility",
    description: "Need help with other commands?",
    execute(message, args) {
        
    const { MessageEmbed } = require('discord.js');
    if (!message.guild) return;

    const embed = new MessageEmbed()

    .setTitle('Utility Commands')
    .setColor('#CC562C')
    .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
    .setDescription('Utility Commands here, boi: \n\n • `y!invite` to see and use the invite link; \n\n • `y!github` to see the bot github project; \n\n • `y!testnsfw` to check if a channel is safe or not safe for work; \n\n • `y!ping` to see the bot ping and latency; \n\n • `y!randomnumber` to make the bot send a random number (1-100); \n\n • `y!server` to join the official IMASE discord server; \n\n • `y!serverinfo` to see your server infos; \n\n • `y!version` to see the bot version (not official releasing yet). ');
    message.channel.send(embed);
    }
  };