module.exports = {
    name: "fact",
    description: "A lil bit of random facts.",
    execute(message, args) {
    
    const { MessageEmbed } = require('discord.js')
    
    const facts = [
    
    "Donkey Kong got his name because his creator believed “donkey” meant “stupid” in English and wanted to convey the impression that the character was a “Stupid Ape.”",
    "More than 1/5 of all the calories consumed by humans worldwide is provided by rice alone.", 
    "People can have a psychological disorder called Boanthropy that makes them believe that they are a cow. They try to live their life as a cow.", 
    "The name for the shape of Pringles is called a “Hyperbolic Paraboloid.”", 
    "There is a McDonald’s in every continent except Antarctica.", 
    "A duel between three people is actually called a truel.", 
    "The process by which bread toasts is called the “Maillard Reaction.”", 
    "Sonic the Hedgehog’s full name is actually Ogilvie Maurice Hedgehog.", 
    "Most toilet paper sold for home use in France is pink.", 
    "Marmite was one of the most confiscated items at airports from the U.K. – to overcome this issue, Marmite made smaller ones for traveling.", 
    "Warner Bros canceled “Home Alone” because they didn’t want to spend $14 million on it. 21st Century Fox continued the production, and the film grossed $476 million worldwide.", 
    "In 1862, the King of Siam offered Abraham Lincoln many elephants on the grounds that a “Country as great as the United States should not be without elephants.” Lincoln politely declined.", 
    "Bullfrogs do not sleep.", "The dark region on the north pole of Pluto’s moon, Charon, is called Mordor.", 
    "Eight of the ten largest statues in the world are of Buddhas.", 
    "In 2015, a silver coin with Superman on the head side was made, which is legal tender in Canada. There were only 350,000 produced.", 
    "Japanese square watermelons are ornamental plants and are not edible.", "Tigers have striped skin, not just striped fur. The stripes are like fingerprints, and no two tigers have the same pattern.", 
    "In Morse Code **-.-** means **k**.", 
    "In 2005, a fortune cookie company called Wonton Food Inc. correctly foretold lottery numbers, resulting in 110 winners and an investigation. No fraud was involved.", 
    "In 2014, Sony made a cassette tape that can store 185TB of data!", 
    "Your tonsils could grow back if there were tissue left behind during the removal process. Sometimes it’s accidental; other times, it’s left on purpose.", 
    "Although the TV show “Friends” is based around life in New York City, the entire show was filmed in California.", 
    "Expedia.com, Hotels.com, Hotwire.com, Trivago, Travelocity, and Orbitz are all owned by the same company, Expedia Inc.", 
    "The world record for the longest human chain (holding hands) is 652.4 miles, and it consisted of 5 million people in Bangladesh as part of a campaign.", 
    "Baked beans are actually not baked but stewed.",
    "Rowan Atkinson – also known as Mr. Bean – is the voice of Zazu in The Lion King.",
    "The most popular item at Walmart is bananas. They sell more bananas than any other single item they have in stock.",
    "Sunsets on Mars are blue.",
    "The small indents in the bottom of frozen pizzas are there to prevent air bubbles from forming inside the dough.",
    "The term “footage” comes from films being measured in feet when being edited in the early days of filmmaking.",
    "In 2005, Mark Zuckerberg unsuccessfully tried to sell Facebook for $75 million. Back then, it was called TheFacebook.",
    "In 2016, a student left a pineapple in an art museum in Scotland. Two days later, it had been placed in a glass case as part of an exhibition.",
    "“Digging a hole to China” is theoretically possible if you start in Argentina.",
    "Researchers found fossils of a “Mega Penguin” that stood over 6 feet tall and weighed in at over 250 pounds.",
    "Strawberries can also be white or yellow, and some can even taste like pineapples!",
    "As of 1998, over 50% of Iceland’s population believed in the existence of elves.",
    "The term “brah” is Hawaiian pidgin, short for brahdah (brother), and was popularized by surf culture.",
    "When watermelons are grilled or baked, they lose their granular texture and can even be used as a meat substitute, a “watermelon steak.”",
    "In October 2015, United Airlines made a man with Cerebral Palsy crawl off one of its flights. The flight attendants just watched as he struggled.",
    "“Bluetooth” technology was named after a 10th Century king, King Harald Bluetooth. He united Denmark and Norway – just like wireless technology united computers and cell phones.",
    "All dogs are banned from Antarctica since April 1994. This ban was made because of the concern that dogs might spread diseases to seals (I checked... this is real)."


];


    const fact = Math.floor(Math.random() * facts.length);

        const embed = new MessageEmbed()
        .setTitle("Fact")
        .setDescription(facts[fact])
        .setColor('#CC562C')
        .setTimestamp()
        .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
            message.channel.send(embed);
        }};
