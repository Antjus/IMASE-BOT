const { MessageEmbed} = require('discord.js')

module.exports = {
    name: "howsimp",
    description: "100% accurate.",
    execute(message) {
       
        const user = message.mentions.users.first()
        const percentage = Math.floor(Math.random() * 100) + 1 + '%';

        const embed3 = new MessageEmbed()
        .setTitle("Wait a minute.")
        .setDescription("You have to tag an user after the command (y!howsimp **@user**). \n\n ")
        .setColor('#CC562C')
        .setTimestamp()
        .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png');


        if(!user) { return message.channel.send(embed3) } {
        const embed = new MessageEmbed()
        .setTitle("\"How simp\" percentage test.")
        .setDescription("**" + user.tag + "**" + " is" + " **" + percentage + "**" + " a simp. \n\n")
        .setColor('#CC562C')
        .setTimestamp()
        .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png');
        message.channel.send(embed);
        }

    }
}