module.exports = {
  name: "help",
  description: "Need help?",
  execute(message, args) {
    const {  MessageEmbed } = require('discord.js');
    
      
    if (!message.guild) return;
    const embed = new MessageEmbed()

        .setTitle('Command List')
        .setColor('#CC562C')
        .setDescription('Use `y!<category>` to see all the categories specifically. \n\n')
        .setTimestamp()
        .addFields(
          { name: '`• 🛠 "mod"`', value: 'to see all the chat commands;',inline: true },
          { name:  '• `📷 "images"`', value: 'to see all the images commands;', inline: true },
          { name: '• `😂 "fun"`', value: 'to see all the "funny" commands;', inline: true },
          { name: '• `🖱 "others"`', value: 'to see...yeah, other commands.', inline: true }

        )
        .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
        .setThumbnail('https://images-ext-1.discordapp.net/external/QCcrCbnel2dyEUKsFcttbwUaCqU86blbXDkQaxSjxSg/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/800329693651009557/08389d35b7d658e8008734e248496c61.png?width=425&height=425')
      message.channel.send(embed);
    }};