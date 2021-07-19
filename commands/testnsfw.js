module.exports = {
    name: "testnsfw",
    description: "Is that channel SFW or NSFW? Discover it without using settings.",
    execute(message, args) {
    const { MessageEmbed } = require('discord.js');

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
    
            if (message.channel.nsfw) {
                message.channel.send(embed);
            } else {
                message.channel.send(embed2);
            }
        }
    };