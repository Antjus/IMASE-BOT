module.exports = {
    name: "fun",
    description: 'Need help with "funny" commands?',
    execute(message, args) {
    
    const { MessageEmbed } = require('discord.js');
    if (!message.guild) return;
  

    const embed = new MessageEmbed()
    .setTitle('Fun Commands')
    .setColor('#CC562C')
    .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
    .setTimestamp()
    .setDescription('Funny Commands here, boi: \n\n • `y!meme` to get some memes; \n\n • `y!aww` PUPPIES GO BRRRRR; \n\n • `y!cat` to get some cats; \n\n • `y!dog` to get some dogs; \n\n • `y!hentai` to get some hentai *; \n\n • `y!fact` to make the bot send a random fact; \n\n \n\n *only for **NSFW** channels.');
  message.channel.send(embed);
    }
  };
  
  