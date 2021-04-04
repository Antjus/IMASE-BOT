module.exports = client => {
    const { Client, MessageEmbed, Message } = require('discord.js')
    const facts = ["Donkey Kong got his name because his creator believed “donkey” meant “stupid” in English and wanted to convey the impression that the character was a “Stupid Ape.”", "More than 1/5 of all the calories consumed by humans worldwide is provided by rice alone.", "People can have a psychological disorder called Boanthropy that makes them believe that they are a cow. They try to live their life as a cow.", "The name for the shape of Pringles is called a “Hyperbolic Paraboloid.”", "There is a McDonald’s in every continent except Antarctica.", "A duel between three people is actually called a truel.", "The process by which bread toasts is called the “Maillard Reaction.”", "Sonic the Hedgehog’s full name is actually Ogilvie Maurice Hedgehog.", "Most toilet paper sold for home use in France is pink.", "Marmite was one of the most confiscated items at airports from the U.K. – to overcome this issue, Marmite made smaller ones for traveling.", "Warner Bros canceled “Home Alone” because they didn’t want to spend $14 million on it. 21st Century Fox continued the production, and the film grossed $476 million worldwide.", "In 1862, the King of Siam offered Abraham Lincoln many elephants on the grounds that a “Country as great as the United States should not be without elephants.” Lincoln politely declined.", "Bullfrogs do not sleep.", "The dark region on the north pole of Pluto’s moon, Charon, is called Mordor.", "Eight of the ten largest statues in the world are of Buddhas.", "In 2015, a silver coin with Superman on the head side was made, which is legal tender in Canada. There were only 350,000 produced.", "apanese square watermelons are ornamental plants and are not edible.", "Tigers have striped skin, not just striped fur. The stripes are like fingerprints, and no two tigers have the same pattern.", "In Morse Code **-.-** means **k**."];
    const fact = Math.floor(Math.random() * facts.length);

    const prefix = "y!"

    client.on('message', message => { //invite
        if (message.content.toLowerCase().startsWith(`${prefix}fact`)) {
        const embed = new MessageEmbed()
        .setTitle("Fact")
        .setDescription(facts[fact])
        .setColor('#CC562C')
        .setTimestamp()
        .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
            message.channel.send(embed);
        }
      })
};
