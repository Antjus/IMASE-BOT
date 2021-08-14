const math = require('discord-math')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "calculator",
    description: "math for you buddy",
    async execute(message, args){
            const num1 = Number(args[0]);
            const operation = args[1];
            const num2 = Number(args[2]);
            
            if (!num1) return message.channel.send('A first number has to be declared.');
            if (!operation) return message.channel.send('An operation has to be declared.');
            if (!num2) return message.channel.send('A second number has to be declared.');

            let result = new MessageEmbed()
            .setTitle('The bot solved the problem for you.')
            .addFields(
                    { name: 'Math problem', value: num1 + operation + num2 },
                    { name: 'Problem solved', value: math.calculate(num1, operation, num2) }
            )
            .setTimestamp()
            .setColor('#CC562C')
            .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
            .setThumbnail('https://media.discordapp.net/attachments/827644117806612491/876101481240088586/mathlogo.png?width=468&height=468')
            message.channel.send(result);
    }}