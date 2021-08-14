const { MessageEmbed }= require('discord.js')

module.exports = {
    name: "sussy",
    execute(message, client){
        const sussybaka = new MessageEmbed()
        .setDescription(`
    :black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square:
    :black_large_square::red_square::red_square::red_square::black_large_square::black_large_square::yellow_square::yellow_square::yellow_square::black_large_square::interrobang::black_large_square::black_large_square:
    :black_large_square::red_square::blue_square::blue_square::black_large_square::black_large_square::yellow_square::blue_square::blue_square::black_large_square::black_large_square::black_large_square::black_large_square:
    :black_large_square::red_square::red_square::red_square::knife::black_large_square::yellow_square::yellow_square::yellow_square::black_large_square::black_large_square::black_large_square::black_large_square:
    :black_large_square::red_square::black_large_square::red_square::black_large_square::black_large_square::yellow_square::black_large_square::yellow_square::black_large_square::black_large_square::green_square::blue_square:
    :black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::black_large_square::bone::green_square::green_square:`)
    .setColor('#CC562C')
    .setTimestamp()
    .setFooter('IMASE', 'https://media.discordapp.net/attachments/732707047984070741/828207604038631464/logo.png')
    .setTitle('Stop this.')
  
message.channel.send(sussybaka)
    }
        
    
}