module.exports = client => {
    const { Client, MessageEmbed } = require('discord.js');
    const prefix = "y!";
    
    client.on('message', message => { //invite
        if (message.content.toLowerCase().startsWith(`${prefix}invite`)) {
          const embed = new MessageEmbed()
    
            .setTitle('Invite Link')
            .setColor('#CC562C')
            .setURL('https://discord.com/api/oauth2/authorize?client_id=800329693651009557&scope=bot')
            .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
            .setTimestamp()
          message.channel.send(embed);
        }
      })
};