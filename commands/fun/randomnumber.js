module.exports = {
    name: "randomnumber",
    description: "Just sends a random number.",
    execute(message, args) {
    const { MessageEmbed } = require('discord.js')

    const number = Math.floor(Math.random() * 100) + 1;
    const embed = new MessageEmbed()
    .setTitle("Random Number")
    .setDescription(`The random number is **${number}**`)
    .setColor('#CC562C')
    .setTimestamp()
    .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png');
  
    message.channel.send(embed);
    }
    };