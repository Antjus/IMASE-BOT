const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "setnsfw",
    description: "",
    execute(message) {

        const permsembed = new MessageEmbed()
        .setTimestamp()
        .setColor('#CC562C')
        .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
        .setTitle('Wait a minute.')
        .setDescription('You can\'t execute that command cause a lack of permissions')

        if (!message.guild.member(message.author).hasPermission('MANAGE_CHANNELS')) { return message.reply(permsembed) };
            let channel = message.channel; channel.edit({ nsfw: !channel.nsfw })
            message.channel.send(`**#${message.channel.name}** is now a NSFW chat. \n\n Channel ID: **${message.channel.id}**`);

        
            }
        };
