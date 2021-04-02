module.exports = client => {
    const { Client, MessageEmbed } = require('discord.js');
    const prefix = "y!";
    
  client.on("message", message => { //clear
    if(message.content.toLowerCase() === `${prefix}clear`) {
      if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) { return message.reply("heyo you can't manage messages!") }
      const embed = new MessageEmbed()
      .setFooter('IMASE', 'https://media.discordapp.net/attachments/806227461070520363/826329523103858738/08389d35b7d658e8008734e248496c61.png')
      .setColor('#CC562C')
      .setDescription('I just deleted **10 messages**.');

      message.channel.bulkDelete(10)
      .then(messages => console.log(`I just deleted ${messages.size} messages`))
      .catch(console.error);
      message.channel.send(embed);
    }
  })

}