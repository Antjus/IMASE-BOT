module.exports = {
  name: "ping",
  description: "Bot's ping.",
  execute(message, args) {
    const {  Client, MessageEmbed } = require('discord.js');
    const client = new Client();
        if (!message.guild) return;
      
        const embed = new MessageEmbed()
    
        .setTitle('Pong')
        .setColor('#CC562C')
        .setDescription(`🏓Latency is **${Date.now() - message.createdTimestamp}ms**. \n\n API Latency is **${Math.round(client.ws.ping)}ms**`)
        .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
        .setTimestamp()
      message.channel.send(embed);
        }
      };