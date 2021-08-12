module.exports = {
  name: "ban",
  description: "Ban hammer is coming for you buddy.",
  execute(message, args) {

    const { MessageEmbed } = require('discord.js');

    const newcoolEmbed = new MessageEmbed()
    .setTimestamp()
    .setColor('#CC562C')
    .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
    .setTitle('Wait a minute.')
    .setDescription('You can\'t execute that command cause a lack of permissions')

        if (!message.guild) return;
 
            if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) { return message.reply(newcoolEmbed) }
          const user = message.mentions.users.first();
          if (user) {
            const member = message.guild.member(user);
            const embed = new MessageEmbed()
            .setTitle("Kicked")
            .setDescription(`**${user.tag}** was banned.`)
            .setTimestamp()
            .setColor('#CC562C')
            .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
            



            if (member) {
              member
                .ban({
                  reason: 'Ask the mods... Idk.',
                })
                .then(() => {
                  const embed = new MessageEmbed()
                  .setTitle("Kicked")
                  .setDescription(`**${user.tag}** was banned.`)
                  .setTimestamp()
                  .setColor('#CC562C')
                  .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
                  
                  message.reply(embed);
                })
                .catch(err => {
                  const embed2 = new MessageEmbed()
                  .setTimestamp()
                  .setColor('#CC562C')
                  .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
                  .setTitle('Something wrong I can feel it...')
                  .setDescription('I cannot kick that user... retry or check my roles and permissions.');
      
                  message.reply(embed2);
                  console.error(err);
                });
            } else {
              const embed3 = new MessageEmbed()
              .setTimestamp()
              .setColor('#CC562C')
              .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
              .setTitle('Something wrong I can feel it...')
              .setDescription("that boi isn't here... what the heck.");
  
              message.reply(embed3);
            }
          } else {
            const embed4 = new MessageEmbed()
            .setTimestamp()
            .setColor('#CC562C')
            .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
            .setTitle('Something wrong I can feel it...')
            .setDescription("mention the user please.")

            message.reply(embed4);
          }
        }
      };