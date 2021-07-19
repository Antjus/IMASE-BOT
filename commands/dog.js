module.exports = {
    name: "dog",
    description: "Doges here.",
    execute(message, args) {
    
        const {  MessageEmbed } = require('discord.js');
    const got = require('got');

            const embed = new MessageEmbed()
            got('https://www.reddit.com/r/dogs/random/.json').then(response => {
                let content = JSON.parse(response.body);
                let permalink = content[0].data.children[0].data.permalink;
                let memeUrl = `https://reddit.com${permalink}`;
                let memeImage = content[0].data.children[0].data.url;
                let memeTitle = content[0].data.children[0].data.title;
                embed.setTitle(`Take some fresh _dogs_ kid.`)
                embed.setURL(`${memeUrl}`)
                embed.setImage(memeImage)
                embed.setColor('#CC562C')
                embed.setTimestamp()
                embed.setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
                message.channel.send(embed);
            })
        }
        }