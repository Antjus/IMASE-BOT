const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "howhorny",
    description: "100% accurate.",
    execute(message) {
       
        const user = message.mentions.users.first()
        const percentage = Math.floor(Math.random() * 100) + 1 + '%';

        const embed3 = new MessageEmbed()
        .setTitle("Wait a minute.")
        .setDescription("You have to tag an user after the command (y!howhorny **@user**). \n\n ")
        .setColor('#CC562C')
        .setTimestamp()
        .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png');


        if(!user) { return message.channel.send(embed3) } {
        const embed = new MessageEmbed()
        .setTitle("\"How horny\" percentage test.")
        .setDescription("**" + user.tag + "**" + " is" + " **" + percentage + "**" + " horny. \n\n")
        .setColor('#CC562C')
        .setTimestamp()
        .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png');
        message.channel.send(embed);
        }

    }
}