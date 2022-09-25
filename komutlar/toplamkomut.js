const Discord = require('discord.js')
exports.run = function(client, message, args) {
const embed = new Discord.MessageEmbed()
.setTimestamp()
.setColor("#660099")
.setFooter("MaveraBot", client.user.avatarURL())
.addField(`Botta Bulunan Toplam Komut Sayısı`,`${client.commands.size}`)
return message.channel.send(embed)

};
exports.conf = {
enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  exports.help = {
    name: 'toplamkomut', 
    description: '', 
    usage: 'toplam-komut'
};