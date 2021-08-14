module.exports = {
  name: "ping",
  description: "Bot's ping.",
  aliases: ['pong', 'peng'],
  async execute(message) {
    const { MessageEmbed } = require('discord.js');
        if (!message.guild) return;
      
        const embed = new MessageEmbed()
    
        .setTitle('Pong')
        .setColor('#CC562C')
        .setDescription(`🏓Latency is **${Date.now() - message.createdTimestamp}ms**.`)
        .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
        .setTimestamp()
      message.channel.send(embed);
        }
      };