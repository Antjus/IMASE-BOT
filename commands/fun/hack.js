const { Client } = require("discord.js");
const client = new Client;

module.exports = {
    name: "hack",
    description: "Hack someone",
    async execute(message) {
        const user = message.mentions.users.first();

        const msg = await message.channel.send('Hacking ' + '**' + user.username + '**' + '...' + '<a:loading3:875773927476051978>');
        setTimeout(()=>{msg.edit('Finding ' + '**' + user.username + '**' + "'s IP..." + '<a:loading3:875773927476051978>')}, 5000);
        setTimeout(()=>{msg.edit('Locating ' + '**' + user.username + '**' + "'s position..." + '<a:loading3:875773927476051978>')}, 8000);
        setTimeout(()=>{msg.edit('Finding ' + '**' + user.username + '**' + "'s passwords..." + '<a:loading3:875773927476051978>')}, 11000);
        setTimeout(()=>{msg.edit('Stealing ' + '**' + user.username + '**' + "'s bobuxs..." + '<a:loading3:875773927476051978>')}, 14000);
        setTimeout(()=>{msg.edit('Successfully hacked ' + '**' + user.username + '**' + "'s computer." + '<a:check:875769770006417429>')}, 17000);
    }}
