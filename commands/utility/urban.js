const fetch = require('node-fetch')
const querystring = require('querystring')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "urban",
    description: "What does this mean?",
    async execute(message, args){
        
        if (!args.length) {
			return message.channel.send('You need to supply a search term!');
		}

		const query = querystring.stringify({ term: args.join(' ') });
        const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);

		const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`)
			.then(response => response.json());

            if (!list.length) {
                return message.channel.send(`No results found for **${args.join(' ')}**.`);
            }
    

            const [answer] = list;

            const embed = new MessageEmbed()
			.setColor('#CC562C')
            .setTimestamp()
            .setThumbnail('https://media.discordapp.net/attachments/827644117806612491/875727469204889680/download.png')
            .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
			.setTitle('What does ' + '"' + answer.word + '"' + ' mean?')
			.setURL(answer.permalink)
			.addFields(
				{ name: 'Definition', value: trim(answer.definition, 1024)},
				{ name: 'Example', value: trim(answer.example, 1024)},
				{ name: 'Rating', value: `${answer.thumbs_up} :thumbsup:  ${answer.thumbs_down} :thumbsdown:` },
			);
		message.channel.send(embed);
	}
    }