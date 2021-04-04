module.exports = client => {
    const {  MessageEmbed } = require('discord.js');
    const got = require('got');

    client.on('message', message => {
        if (message.content.toLowerCase() === "y!hentai") {
        const embed1 = new MessageEmbed()
        .setTitle('Something wrong I can feel it...')
        .setColor('#CC562C')
        .setDescription("This command can only be used in channels marked **NSFW**.")
        .setTimestamp()
        .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png');

        if(!message.channel.nsfw){ message.channel.send(embed1); return; }
            const embed = new MessageEmbed()
                embed.setTitle(`Take some fresh... what's wrong with you dude?`)
                embed.setImage("https://media.discordapp.net/attachments/822583675715321967/827522677996388362/lmao.png?width=488&height=473")
                embed.setColor('#CC562C')
                embed.setTimestamp()
                embed.setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
                message.channel.send(embed);
            }
        }
        
    );
      
}