module.exports = {
  name: "serverinfo",
  description: "get some server stats!",
  guildOnly: true,

  execute(message, args) {
    const Discord = require("discord.js");
    const guild = message.guild;
    
    
    const embed = new Discord.MessageEmbed()
      .setColor('#CC562C')
      .setTitle("Here's the stats for " + guild.name)
      .addField("Member count: ", "**" + guild.memberCount + "**" + " member(s).")
      .addField("Creator: ", guild.owner + ".")
      .addField("Server ID: ", guild.id)
      .addField("Creation date:", guild.createdAt + ".")
      .setTimestamp()
      .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png');
            
    message.channel.send(embed);
  }
};