const math = require('discord-math')

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
 
            message.channel.send(`Number result: ${math.calculate(num1, operation, num2)}`);
    }}