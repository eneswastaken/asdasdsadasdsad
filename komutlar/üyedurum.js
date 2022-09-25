const Discord = require("discord.js");

exports.run = (client, message) => {
  let üye = new Discord.MessageEmbed()
    .setAuthor("Sunucu Üye Sayıcı")
    .setFooter("MaveraBot", client.user.avatarURL())
    .setColor("#660099")
    .addField("**<:14:1008732364198920263> Toplam Kullanıcı**",message.guild.memberCount )
  
    .setTimestamp()
  return message.channel.send(üye);
};

module.exports.conf = {
  aliases: ["üyedurum"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "üyedurum",
  description: "",
  usage: ""
};
