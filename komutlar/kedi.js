const Discord = require ("discord.js");
exports.run = (client, message) => {
const Embed = new Discord.MessageEmbed()
.setColor("#660099")
.setFooter("MaveraBot", client.user.avatarURL())
.setImage("https://i.imgur.com/8bZQvnb.gif?noredirect")
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();
return message.channel.send(Embed)
.then; 
};
exports.conf = {
enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  exports.help = {
    name: 'kedi', 
    description: 'Deathh code team', 
    usage: 'kedi'
};