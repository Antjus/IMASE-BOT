const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "createchannel",
    description: "Creates a channel for you",
    async execute(message, args) {
        
        const newcoolEmbed = new MessageEmbed()
        .setTimestamp()
        .setColor('#CC562C')
        .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
        .setTitle('Wait a minute.')
        .setDescription('You can\'t execute that command cause a lack of permissions.')

        var name = args[0]
        var type = args[1]
        var categoryID = args[2]

        if (!message.guild.member(message.author).hasPermission('MANAGE_CHANNELS')) { return message.reply(newcoolEmbed)};
        message.guild.channels.create( name , {
			type: type,
            parent: categoryID,
			permissionOverwrites: [
				{
					id: message.guild.id,
					allow: ['VIEW_CHANNEL'],
				}]
			})
            if (!name) return message.channel.send('A channel name has to be declared.');
            if (!type) return message.channel.send('A channel type has to be declared [ voice or text ].');

            let channelcreated = new MessageEmbed()
            .setTitle('Channel Created!')
            .addFields(
                { name: 'Name', value: name},
                { name: 'Type', value: type + ' channel.'},
                { name: 'CategoryID', value: categoryID}
            )
            .setColor('#CC562C')
            .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')

	message.channel.send(channelcreated)
	}
    }
