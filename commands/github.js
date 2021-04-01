module.exports = client => {
    const { Client, MessageEmbed } = require('discord.js');
    const prefix = "y!";
    
    client.on('message', message => { //github
        if (message.content.toLowerCase().startsWith(`${prefix}github`)) {
          const embed = new MessageEmbed()
      
            .setTitle('GitHub')
            .setColor('#CC562C')
            .setURL('https://github.com/Antjus/IMASE-BOT')
            .setTimestamp()
            .setFooter('IMASE', 'by Antus')
            .setThumbnail('https://media.discordapp.net/attachments/732707047984070741/804723382741893130/mark-github-512.png')
            .setDescription('Check my GitHub boi')
          message.channel.send(embed);
        }
      });
      
}
