module.exports = {
    name: "kill",
    description: "Kill someone",
    execute(message) {

        const killmsgs = [
            ' got brutally killed by ',
            ' got fired by ',
            ' got killed by a racist police man called ',
            ' lost the Hunger Games cause ',
            ' got AvadaKedavra\'d by ',
            ' was deported in Greenland by '
        ]

        const killedmsgs = killmsgs[Math.floor(Math.random() * killmsgs.length)];
        const user = message.mentions.users.first();

        message.channel.send('**' + user.username + '**' + killedmsgs + '**' + message.author.username + '**' + '.')

    }
}