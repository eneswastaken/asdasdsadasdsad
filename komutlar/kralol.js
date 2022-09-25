const Discord = require ("discord.js");
exports.run = (client, message) => {
const DEATHHCODEDİSCORDEmbed = new Discord.MessageEmbed()
.setAuthor(message.author.username + ' Artık Kralsın !!!')
.setColor("#660099")
.setFooter("MaveraBot", client.user.avatarURL())
.setTimestamp()
.setDescription('')
    .setImage(`https://media.giphy.com/media/F0uvYzyr2a7Li/giphy.gif`)
return message.channel.send(DEATHHCODEDİSCORDEmbed)
.then;
};
exports.conf = {
enabled: true, 
    guildOnly: false, 
    aliases: ['kral'], 
    permLevel: 0 
};
  exports.help = {
    name: 'kralol', 
    description: 'Deathh code team', 
    usage: 'kral-ol'
};