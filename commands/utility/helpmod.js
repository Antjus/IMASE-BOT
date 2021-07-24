module.exports = {
    name: "mod",
    description: "Need help with moderating commands?",
    execute(message, args) {
        
    const { MessageEmbed } = require('discord.js');
    if (!message.guild) return;
 
      if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) { return message.reply("heyo you don’t have access to this command!") }
    const embed = new MessageEmbed()

    .setTitle('Moderating Commands')
    .setColor('#CC562C')
    .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
    .setDescription('Moderating Commands here, boi: \n\n • `y!ban` to ban an user; \n\n • `y!kick` to kick an user \n\n • `y!mute` to mute an user; \n\n • `y!unmute` to unmute an user; \n\n • `y!clear` to delete the last 10 messages; \n\n • `y!lock/unlock` to lock/unlock a chat.');
  message.channel.send(embed);
    }
  };