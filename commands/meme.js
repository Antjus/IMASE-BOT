module.exports = client => {
    const {  MessageEmbed } = require('discord.js');
    const got = require('got');

    client.on('message', message => {
        if (message.content.toLowerCase() === "y!meme") {
            const embed = new MessageEmbed()
            got('https://www.reddit.com/r/me_irl/random/.json').then(response => {
                let content = JSON.parse(response.body);
                let permalink = content[0].data.children[0].data.permalink;
                let memeUrl = `https://reddit.com${permalink}`;
                let memeImage = content[0].data.children[0].data.url;
                let memeTitle = content[0].data.children[0].data.title;
                embed.setTitle(`${memeTitle}`)
                embed.setURL(`${memeUrl}`)
                embed.setImage(memeImage)
                embed.setColor('#CC562C')
                embed.setTimestamp()
                embed.setFooter('IMASE', 'https://media.discordapp.net/attachments/806227461070520363/826329523103858738/08389d35b7d658e8008734e248496c61.png')
                message.channel.send(embed);
            })
        }
        }
    );
    
}