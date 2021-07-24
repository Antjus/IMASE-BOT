const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "unlock",
    description: "",
    execute(message, args) {

        const permsembed = new MessageEmbed()
        .setTimestamp()
        .setColor('#CC562C')
        .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
        .setTitle('Wait a minute.')
        .setDescription('You can\'t execute that command cause a lack of permissions')


        if (!message.guild.member(message.author).hasPermission('MODERATOR')) return message.reply(permsembed);
        message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: true })
        message.channel.send(`Successfully unlocked **#${message.channel.name}** \n\n Channel ID: **${message.channel.id}**`)
    }
}
