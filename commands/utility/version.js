module.exports = {
    name: "version",
    description: "The bot version.",
    execute(message, args) {
    const { MessageEmbed } = require('discord.js');

            const embed = new MessageEmbed()
            .setTitle('Bot Version')
            .setDescription('Currently version running: **0.2.0** \n\n ❗ **Waiting for first official release (25/07/2021)** ❗')
            .setColor('#CC562C')
            .setTimestamp()
            .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
        message.channel.send(embed)
        }

    };
