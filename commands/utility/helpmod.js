module.exports = {
    name: "mod",
    description: "Need help with moderating commands?",
    execute(message) {
        
const { MessageEmbed } = require('discord.js');

    const permsembed = new MessageEmbed()
    .setTimestamp()
    .setColor('#CC562C')
    .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
    .setTitle('Wait a minute.')
    .setDescription('You can\'t execute that command cause a lack of permissions.')


    if (!message.guild) return;
 
      if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) { return message.reply(permsembed) }
    const embed = new MessageEmbed()

    .setTitle('Moderating Commands')
    .setTimestamp()
    .setColor('#CC562C')
    .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
    .setDescription('Moderating Commands here, boi: \n\n • `y!ban` to ban an user; \n\n • `y!kick` to kick an user; \n\n • `y!clear` to delete the last 10 messages; \n\n • `y!lock/unlock` to lock/unlock a chat.');
  message.channel.send(embed);
    }
  };