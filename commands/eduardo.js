module.exports = client => {

const {  MessageEmbed } = require('discord.js');
const got = require('got');

client.on('message', message => {
    if (message.content.toLowerCase() === "y!eduardo") {
        const embed = new MessageEmbed()
        .setImage("https://media.discordapp.net/attachments/732093651265519627/827498624749273088/Screenshot_154.png?width=409&height=473")
        .setColor("#CC562C")
        .setTitle("Eduardo")
        .setDescription("_Eduardo_")
        .setTimestamp()
        .setURL("https://youtu.be/yM2V5vwbbfQ")
        message.channel.send(embed);
    }})}