require('dotenv');

const { Client, MessageEmbed } = require('discord.js')
const client = new Client()

const invite = require('../commands/invite.js')
const clear = require('../commands/clear.js')
const github = require('../commands/github.js')
const help = require('../commands/help.js')
const ping = require('../commands/ping.js')
const tnsfw = require('../commands/testnsfw.js')
const meme = require('../commands/meme.js')
const cat = require('../commands/cat.js')
const kick = require('../commands/kick.js')
const ban = require('../commands/ban.js')
const dog = require('../commands/dog.js')
const aww = require('../commands/aww.js')
const eduardo = require('../commands/eduardo.js')
const hentai = require('../commands/hentai.js')


client.on('ready', () => { //log and activity
  client.user.setStatus('idle');
  client.user.setUsername("IMASE"); 
  console.log(`I'm here man.`);

  invite(client)
  clear(client)
  github(client)
  help(client)
  ping(client)
  tnsfw(client)
  meme(client)
  cat(client)
  kick(client)
  ban(client)
  dog(client)
  aww(client)
  eduardo(client)
  hentai(client)

  })

const activities_list = [
  `IMASE | y!help`,
  `Playing Mii Shop Song`,
  `Wii`,
  `SuperMario64`,
  `IMASE | y!help`,
  `Nintendo64`,
  `Pokémon Blue`,
  `Undertale`,
  `Spotify`,
  `Visual Studio Code`,
  `Netflix` , 
  `Twitch` 
  ]; 

client.on('ready', () => {
  setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
      client.user.setActivity(activities_list[index]); 
  }, 8000); 
});


client.login(tokehn);
