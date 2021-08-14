module.exports = {
    name: "8ball",
    description: "luck if everything here",
    async execute(message, args){
        
        const answers = [
            "As far as I can see, yes.",
            "It's certain.",
            "It's definitely like that.",
            "Most likely.",
            "Prospects are good.",
            "Signs indicate yes.",
            "Without a doubt.",
            "Yes.",
            "Yes, without a doubt.",
            "My answer is no.",
            "From the direction: no",
            "prospects are not good.",
            "I see it as difficult...",
            "Don't hope too much for it.",
            "Nope", 
            "DUDE WTF ABSOLUTELY NO"
          ];

          const prediction = answers[Math.floor(Math.random() * answers.length)];
          let question = args[0]

          if (!question) return message.channel.send('Insert a question bud.');

          message.channel.send('The bot predicted: ' + '**' + prediction + '**' + '.')

    }}