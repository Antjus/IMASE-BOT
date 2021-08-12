module.exports = {
    name: "images",
    description: "Need help with image commands?",
    execute(message, args) {
    if (!message.guild) return;
  

    const { MessageEmbed } = require('discord.js');

    const embed = new MessageEmbed()

    .setTitle('Images Commands')
    .setColor('#CC562C')
    .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
    .setDescription('**_Coming Soon_**');
    message.channel.send(embed);
    }
  };