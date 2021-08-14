module.exports = {
  name: "clear",
  description: "This command clears the last 10 messages that someone sent in that chat.",
  execute(message, args) {
    const { MessageEmbed } = require('discord.js');

  const embed2 = new MessageEmbed()
  .setTimestamp()
  .setColor('#CC562C')
  .setTimestamp()
  .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
  .setTitle('Wait a minute.')
  .setDescription('You can\'t execute that command cause a lack of permissions.')


      if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) { return message.reply(embed2) }

      var messagedelete = args[0]

      message.channel.bulkDelete(messagedelete)
      .then(messages => console.log(`I just deleted ${messages.size} messages`))
      .catch(console.error);
      const embed = new MessageEmbed()
      .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
      .setColor('#CC562C')
      .setDescription('I just deleted the messages :broom:');
      message.channel.send(embed)
      .then(message => {
        message.delete({ timeout:8000 });
    
    })}}