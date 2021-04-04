module.exports = client => {
    const { Client, MessageEmbed } = require('discord.js');
    const prefix = "y!";
    
    client.on("message", message => { //testnsfw
        if (message.author.bot) return false;
        const embed = new MessageEmbed()
        .setColor('#CC562C')
        .setDescription('This channel is **NSFW**')
        .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
        .setTimestamp()
    
        const embed2 = new MessageEmbed()
        .setColor('#CC562C')
        .setDescription('This channel is **SFW**')
        .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
        .setTimestamp()
    
        if (message.content.toLowerCase() == `${prefix}testnsfw`) {
            if (message.channel.nsfw) {
                message.channel.send(embed);
            } else {
                message.channel.send(embed2);
            }
        }
    });
    
    
}