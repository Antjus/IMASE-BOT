module.exports = {
  name: "invite",
  description: "Invite link.",
  execute(message) {
    
    const {  MessageEmbed } = require('discord.js');
    
          const embed = new MessageEmbed()
    
            .setTitle('Invite Link')
            .setColor('#CC562C')
            .setURL('https://discord.com/oauth2/authorize?client_id=800329693651009557&scope=bot&permissions=7314341752')
            .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
            .setTimestamp()
          message.channel.send(embed);
        }
      };