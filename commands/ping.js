module.exports = client => {
    const { Client, MessageEmbed } = require('discord.js');
    const prefix = "y!";
    
    client.on('message', message => { //ping
        if (!message.guild) return;
      
        if (message.content.toLowerCase().startsWith(`${prefix}ping`)) {
        const embed = new MessageEmbed()
    
        .setTitle('Pong')
        .setColor('#CC562C')
        .setDescription(`🏓Latency is **${Date.now() - message.createdTimestamp}ms**. \n\n API Latency is **${Math.round(client.ws.ping)}ms**`)
        .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
        .setTimestamp()
      message.channel.send(embed);
        }
      });
      
}