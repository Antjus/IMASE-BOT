module.exports = {
  name: "github",
  description: "The creator's github page",
  execute(message, args) {
    const {  MessageEmbed } = require('discord.js');
    
          const embed = new MessageEmbed()
      
            .setTitle('GitHub')
            .setColor('#CC562C')
            .setURL('https://github.com/Antjus/IMASE-BOT')
            .setTimestamp()
            .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
            .setThumbnail('https://media.discordapp.net/attachments/732707047984070741/804723382741893130/mark-github-512.png')
            .setDescription('Check my GitHub boi')
          message.channel.send(embed);
        }
      }