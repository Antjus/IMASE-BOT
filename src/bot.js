require('dotenv');

const { Client } = require('discord.js')
const client = new Client()

const invite = require('../commands/invite.js')
const clear = require('../commands/clear.js')
const github = require('../commands/github.js')
const help = require('../commands/help.js')
const ping = require('../commands/ping.js')
const tnsfw = require('../commands/testnsfw.js')

client.on('ready', () => { //log and activity
  client.user.setStatus('idle');
  console.log(`I'm here man.`);

  invite(client)
  clear(client)
  github(client)
  help(client)
  ping(client)
  tnsfw(client)

  })

const activities_list = [
  `IMASE | y!help`,
  `Playing Mii Shop song`,
  `Wii`,
  `SuperMario64`,
  `IMASE | y!help`,
  `Nintendo64`,
  `Pokémon Blue`,
  `Undertale`,
  `Your Life`
  ]; 

client.on('ready', () => {
  setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
      client.user.setActivity(activities_list[index]); 
  }, 8000); 
});



client.login(tokahn)
