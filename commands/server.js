module.exports = client => {
    const { Client, MessageEmbed } = require('discord.js');
    const prefix = "y!";
    
    client.on('message', message => { 
        if (message.content.toLowerCase().startsWith(`${prefix}server`)) {
          const embed = new MessageEmbed()
      
            .setTitle("IMASE's Official Server")
            .setColor('#CC562C')
            .setURL('https://discord.gg/tmJ7P2cSrr')
            .setTimestamp()
            .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
            .setDescription("Imase's official server there boi")
          message.channel.send(embed);
        }
      });
      
}