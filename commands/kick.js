module.exports = client => {
    const { Client, MessageEmbed } = require('discord.js')
    const prefix = "y!"
    
    
    client.on('message', message => { //kick
        if (!message.guild) return;
      
        if (message.content.startsWith(`${prefix}kick`)) {
        if (!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) { return message.reply("heyo you can't kick users!") }
          const user = message.mentions.users.first();
          if (user) {
            const member = message.guild.member(user);
            if (member) {
              member
                .kick('Optional reason that will display in the audit logs')
                .then(() => {
                  message.reply(`${user.tag} was kicked.`);
                })
                .catch(err => {
                  message.reply('I cannot kick that user... retry or check my roles and permissions.');
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