const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
 
exports.run = (client, message, params) => {
  
  const embed = new Discord.MessageEmbed()
  .setColor("#660099")
  .setFooter("MaveraBot", client.user.avatarURL())
  .setTitle(`${message.guild.name} Adlı Sunucunun Resmi`)
  .setImage(message.guild.iconURL())
  message.channel.send(embed)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
    aliases: ["sunucuresmi"],
}


exports.help = {
  name: 'sunucuresmi',
  description: 'Sunucuresmi.',
  usage: '!sunucuresmi',
};