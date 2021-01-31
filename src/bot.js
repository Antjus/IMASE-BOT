require('dotenv');

const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const got = require('got');
const prefix = "y!";
const antispam = require('better-discord-antispam');


client.on('ready', () => { //log and activity
  client.user.setStatus('idle');
  console.log(`I'm here man.`);
  })

  
  client.on('message', message => { //invite
    if (message.content === `${prefix}invite`) {
      const embed = new MessageEmbed()

        .setTitle('Invite Link')
        .setColor(0xff0000)
        .setURL('https://discord.com/api/oauth2/authorize?client_id=800329693651009557&scope=bot');
      message.channel.send(embed);
    }
  });

  client.on('message', message => { //help general
    if (message.content === `${prefix}help`) {
      const embed = new MessageEmbed()

        .setTitle('Command List')
        .setColor(0xff0000)
        .setDescription('Use: `y!help <command>` \n\n • `🛠 moderating` to see all the chat commands; \n\n • `📷 images` to see all the images commands; \n\n • `😂 fun` to see all the "funny" commands; \n\n • `🖱 others` to see...yeah, other commands.')
        .setTimestamp()
        .setFooter('by Antus')
        .setThumbnail('https://images-ext-1.discordapp.net/external/QCcrCbnel2dyEUKsFcttbwUaCqU86blbXDkQaxSjxSg/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/800329693651009557/08389d35b7d658e8008734e248496c61.png?width=425&height=425')
      message.channel.send(embed);
    }
  });

  client.on('message', message => { //help moderating
    if (!message.guild) return;
  
    if (message.content.startsWith(`${prefix}help moderating`)) {
    const embed = new MessageEmbed()

    .setTitle('Moderating Commands')
    .setColor(0xff0000)
    .setDescription('Moderating Commands here, boi: \n\n • `y!ban` to ban an user; \n\n • `y!kick` to kick an user \n\n • `y!mute` to mute an user; \n\n • `y!unmute` to unmute an user; \n\n • `y!clear` to delete the last 10 messages.');
  message.channel.send(embed);
    }
  });

  client.on('message', message => { //help images
    if (!message.guild) return;
  
    if (message.content.startsWith(`${prefix}help images`)) {
    const embed = new MessageEmbed()

    .setTitle('Images Commands')
    .setColor(0xff0000)
    .setDescription('**_Coming Soon_**');
  message.channel.send(embed);
    }
  });
  
  client.on('message', message => { //help others
    if (!message.guild) return;
  
    if (message.content.startsWith(`${prefix}help others`)) {
    const embed = new MessageEmbed()

    .setTitle('Other Commands')
    .setColor(0xff0000)
    .setDescription('Other Commands here,boi: \n\n • `y!invite` to see and use the invite link; \n\n • `y!github` to see the bot github project.');
  message.channel.send(embed);
    }
  });
  
  client.on('message', message => { //help fun
    if (!message.guild) return;
  
    if (message.content.startsWith(`${prefix}help fun`)) {
    const embed = new MessageEmbed()

    .setTitle('Fun Commands')
    .setColor(0xff0000)
    .setDescription('**_Coming Soon_**');
  message.channel.send(embed);
    }
  });
  
  
  client.on('message', message => { //kick
    if (!message.guild) return;
  
    if (message.content.startsWith(`${prefix}kick`)) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .kick('Optional reason that will display in the audit logs')
            .then(() => {
              message.reply(`${user.tag} was kicked.`);
            })
            .catch(err => {
              message.reply('I cannot kick that user... retry or check my roles and permissions.');
              console.error(err);
            });
        } else {
          message.reply("that boi isn't here... what the heck.");
        }
      } else {
        message.reply("mention the user please.");
      }
    }
  });

  client.on('message', message => { //ban
    if (!message.guild) return;
  
    if (message.content.startsWith(`${prefix}ban`)) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .ban({
              reason: 'Ask the mods... Idk.',
            })
            .then(() => {
              message.reply(`omg ${user.username} was banned.`);
            })
            .catch(err => {
              message.reply('I cannot ban that user... retry or check my roles and permissions.');
              console.error(err);
            });
        } else {
          message.reply("that boi isn't here... what the heck.");
        }
      } else {
        message.reply("mention the user please.");
      }
    }
  });

  client.on('message', message => { //ping
    if (!message.guild) return;
  
    if (message.content.startsWith(`${prefix}ping`)) {
    const embed = new MessageEmbed()

    .setTitle('Pong')
    .setColor(0xff0000)
    .setDescription(`🏓Latency is **${Date.now() - message.createdTimestamp}ms**. \n\n API Latency is **${Math.round(client.ws.ping)}ms**`);
  message.channel.send(embed);
    }
  });
  
  client.on('ready', () => { //antispam
     antispam(client, {
          limitUntilWarn: 3, 
          limitUntilMuted: 5,
          interval: 2000,
          warningMessage: "please, stop spamming.",
          muteMessage: "now you're muted, stfu.", 
          maxDuplicatesWarning: 7,
          maxDuplicatesMute: 10, 
          ignoredRoles: [""], 
          ignoredMembers: [""], 
          mutedRole: "Muted", 
          timeMuted: 1000 * 600, 
          logChannel: "anti-spam-Logs" 
        })
      });

  client.on('message', message => { //mute
    if (!message.guild) return;
    const mutedRole = message.guild.roles.cache.get('804333743208267807');
    const mutedRole2 = message.guild.roles.cache.find(role => role.name === "Muted");


    if (message.content.startsWith(`${prefix}mute`)) {
      const user = message.mentions.users.first();
      const target = message.mentions.members.first();
      const embed = new MessageEmbed()
      .setColor(0xff0000)
      .setDescription(`${user.tag} was muted.`)
      
      target.roles.add(mutedRole2);
      message.channel.send(embed);
    }
  });

  client.on('message', message => { //unmute
    if (!message.guild) return;
    const mutedRole = message.guild.roles.cache.get('804333743208267807');
    const mutedRole2 = message.guild.roles.cache.find(role => role.name === "Muted");


    if (message.content.startsWith(`${prefix}unmute`)) {
      const user = message.mentions.users.first();
      const target = message.mentions.members.first();
      const embed = new MessageEmbed()
      .setColor(0xff0000)
      .setDescription(`${user.tag} is no longer muted.`)
      
      target.roles.remove(mutedRole2);
      message.channel.send(embed);
    }
  });

  client.on("message", message => { //clear
    if(message.content === `${prefix}clear`) {
      const embed = new MessageEmbed()
      .setColor(0xff0000)
      .setDescription('I just deleted 10 messages.');

      message.channel.bulkDelete(10)
      .then(messages => console.log(`I just deleted ${messages.size} messages`))
      .catch(console.error);
      message.channel.send(embed);
    }
  })

  client.on("message", message => { //testnsfw
    if (message.author.bot) return false;
    const embed = new MessageEmbed()
    .setColor(0xff0000)
    .setDescription('This channel is NSFW');

    const embed2 = new MessageEmbed()
    .setColor(0xff0000)
    .setDescription('This channel is SFW');

    if (message.content.toLowerCase() == `${prefix}testnsfw`) {
        if (message.channel.nsfw) {
            message.channel.send(embed);
        } else {
            message.channel.send(embed2);
        }
    }
});

client.on('message', message => { //github
  if (message.content.startsWith(`${prefix}github`)) {
    const embed = new MessageEmbed()

      .setTitle('GitHub')
      .setColor(0xff0000)
      .setURL('https://github.com/Antjus/IMASE-BOT')
      .setTimestamp()
      .setThumbnail('https://media.discordapp.net/attachments/732707047984070741/804723382741893130/mark-github-512.png')
      .setDescription('Check my GitHub boi')
    message.channel.send(embed);
  }
});

const activities_list = [
  `IMASE | y!help`,
  `Playing Mii Shop song`,
  `Wii`,
  `SuperMario64`,
  `IMASE | y!help`
  ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
  setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
      client.user.setActivity(activities_list[index]); // sets client's activities to one of the phrases in the arraylist.
  }, 8000); // Runs this every 10 seconds.
});

client.on('message', message => { //prefix
  if (!message.guild) return;

  if (message.content == `${client.user.username}`) {
  const embed = new MessageEmbed()

  .setTitle('Heyo boi')
  .setColor(0xff0000)
  .setDescription(`My prefix here is **${prefix}**`);
message.channel.send(embed);
  }
});

  client.login(your token... no mine, kiddo);
  
