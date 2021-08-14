const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "guildavatar",
    async execute(message){

        const icon = message.guild.icon

        const iconembed = new MessageEmbed()
        .setTitle('oei')
        .setImage(icon);

        message.channel.send(iconembed)
    }
}