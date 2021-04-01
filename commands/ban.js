module.exports = client => {
    const { Client, MessageEmbed } = require('discord.js')
    const prefix = "y!"
    

    client.on('message', message => { //ban
        if (!message.guild) return;
 
    
        if (message.content.startsWith(`${prefix}ban`)) {
            if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) { return message.reply("heyo you can't ban users!") }
          const user = message.mentions.users.first();
          if (user) {
            const member = message.guild.member(user);
            if (member) {
              member
                .ban({
                  reason: 'Ask the mods... Idk.',
                })
                .then(() => {
                  message.reply(`omg ${user.username} was banned.`);
                })
                .catch(err => {
                  message.reply('I cannot ban that user... retry or check my roles and permissions.');
                  console.error(err);
                });
            } else {
              message.reply("that boi isn't here... what the heck.");
            }
          } else {
            message.reply("mention the user please.");
          }
        }
      });
    
}