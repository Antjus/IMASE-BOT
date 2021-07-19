module.exports = {
  name: "clear",
  description: "This command clears the last 10 messages that someone sent in that chat.",
  execute(message, args) {
    const { Client, MessageEmbed } = require('discord.js');
    const prefix = "y!";
    
      if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) { return message.reply("heyo you can't manage messages!") }
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