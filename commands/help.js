module.exports = client => {
    const { Client, MessageEmbed } = require('discord.js');
    const prefix = "y!";
    
      
    client.on('message', message => { //help 
    if (!message.guild) return;
      
    if (message.content.toLowerCase().startsWith(`${prefix}help`)) {
    const embed = new MessageEmbed()

        .setTitle('Command List')
        .setColor('#CC562C')
        .setDescription('Use: `y!help <command>` \n\n • `🛠 "moderating"` to see all the chat commands; \n\n • `📷 "images"` to see all the images commands; \n\n • `😂 "fun"` to see all the "funny" commands; \n\n • `🖱 "others"` to see...yeah, other commands.')
        .setTimestamp()
        .setFooter('IMASE', 'https://media.discordapp.net/attachments/806227461070520363/826329523103858738/08389d35b7d658e8008734e248496c61.png')
        .setThumbnail('https://images-ext-1.discordapp.net/external/QCcrCbnel2dyEUKsFcttbwUaCqU86blbXDkQaxSjxSg/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/800329693651009557/08389d35b7d658e8008734e248496c61.png?width=425&height=425')
      message.channel.send(embed);
    }
  });

  client.on('message', message => { //help moderating
    if (!message.guild) return;
  
    if (message.content.toLowerCase().startsWith(`${prefix}help moderating`)) {
    const embed = new MessageEmbed()

    .setTitle('Moderating Commands')
    .setColor('#CC562C')
    .setFooter('IMASE', 'https://media.discordapp.net/attachments/806227461070520363/826329523103858738/08389d35b7d658e8008734e248496c61.png')
    .setDescription('Moderating Commands here, boi: \n\n • `y!ban` to ban an user; \n\n • `y!kick` to kick an user \n\n • `y!mute` to mute an user; \n\n • `y!unmute` to unmute an user; \n\n • `y!clear` to delete the last 10 messages.');
  message.channel.send(embed);
    }
  });

  client.on('message', message => { //help images
    if (!message.guild) return;
  
    if (message.content.toLowerCase().startsWith(`${prefix}help images`)) {
    const embed = new MessageEmbed()

    .setTitle('Images Commands')
    .setColor('#CC562C')
    .setFooter('IMASE', 'https://media.discordapp.net/attachments/806227461070520363/826329523103858738/08389d35b7d658e8008734e248496c61.png')
    .setDescription('**_Coming Soon_**');
  message.channel.send(embed);
    }
  });
  
  client.on('message', message => { //help others
    if (!message.guild) return;
  
    if (message.content.toLowerCase().startsWith(`${prefix}help others`)) {
    const embed = new MessageEmbed()

    .setTitle('Other Commands')
    .setColor('#CC562C')
    .setFooter('IMASE', 'https://media.discordapp.net/attachments/806227461070520363/826329523103858738/08389d35b7d658e8008734e248496c61.png')
    .setDescription('Other Commands here,boi: \n\n • `y!invite` to see and use the invite link; \n\n • `y!github` to see the bot github project; \n\n • `y!testnsfw` to check if a channel is safe or not safe for work.');
  message.channel.send(embed);
    }
  });
  
  client.on('message', message => { //help fun
    if (!message.guild) return;
  
    if (message.content.toLowerCase().startsWith(`${prefix}help fun`)) {
    const embed = new MessageEmbed()

    .setTitle('Fun Commands')
    .setColor('#CC562C')
    .setFooter('IMASE', 'https://media.discordapp.net/attachments/806227461070520363/826329523103858738/08389d35b7d658e8008734e248496c61.png')
    .setDescription('**_Coming Soon_**');
  message.channel.send(embed);
    }
  });
  
  

}