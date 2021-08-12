module.exports = {
  name: "clear",
  description: "This command clears the last 10 messages that someone sent in that chat.",
  execute(message, args) {
    const { Client, MessageEmbed } = require('discord.js');
    const prefix = "y!";

  const embed2 = new MessageEmbed()
  .setTimestamp()
  .setColor('#CC562C')
  .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
  .setTitle('Wait a minute.')
  .setDescription('You can\'t execute that command cause a lack of permissions')


      if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) { return message.reply(embed2) }
      const embed = new MessageEmbed()
      .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
      .setColor('#CC562C')
      .setDescription('I just deleted **10 messages**.');

      message.channel.bulkDelete(10)
      .then(messages => console.log(`I just deleted ${messages.size} messages`))
      .catch(console.error);
      message.channel.send(embed)
      .then(message => {
        message.delete({ timeout:6000 });
    
    })}}