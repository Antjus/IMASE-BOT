module.exports = client => {
    const { Client, MessageEmbed, Message } = require('discord.js')
    const prefix = "y!"
    
    
    client.on('message', message => { //kick
        if (!message.guild) return;
      
        if (message.content.startsWith(`${prefix}kick`)) {
        if (!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) { return message.reply("heyo you can't kick users!") }
        const user = message.mentions.users.first();
          if (user) {
            const member = message.guild.member(user);
            const embed = new MessageEmbed()
            .setTitle("Kicked")
            .setDescription(`${user.tag}** was kicked.`)
            .setTimestamp()
            .setColor('#CC562C')
            .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
            
            const embed2 = new MessageEmbed()
            .setTimestamp()
            .setColor('#CC562C')
            .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
            .setTitle('Something wrong I can feel it...')
            .setDescription('I cannot kick that user... retry or check my roles and permissions.');

            const embed3 = new MessageEmbed()
            .setTimestamp()
            .setColor('#CC562C')
            .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
            .setTitle('Something wrong I can feel it...')
            .setDescription("that boi isn't here... what the heck.");

  
            if (member) {
              member
                .kick('Optional reason that will display in the audit logs')
                .then(() => {
                  message.reply(embed);
                })
                .catch(err => {
                  message.reply(embed2);
                  console.error(err);
                });
            } else {
              message.reply(embed3);
            }
          } else {
            message.reply("mention the user please.");
          }
        }
      });
    
}