const Discord = require("discord.js");

exports.run = (client, message) => {
  let sunucu = new Discord.MessageEmbed()
    .setAuthor("Sunucu Bilgi", message.guild.iconURL())
    .setThumbnail(message.guild.iconURL())
  .setColor("#660099")
    .addField("<:discord:1018140828738261073> Sunucu İsmi", message.guild.name)
    .addField("<a:2259gearsloading:1007771124215599114> Sunucu İdsi", message.guild.id)
    .addField(":globe_with_meridians: Sunucu Bölgesi", message.guild.region)
    .addField("<:14:1008732364198920263> Üye Sayısı", message.guild.memberCount)
    .addField(
      "<a:586273537677983774:1012334694907531356> Roller:",
      message.guild.roles.cache.map(role => role.name).join(", "),
      true
    )
    .addField("<:timeout:1018637770283036752> AFK kanalı:", `${message.guild.afkChannel}`, true)
    .addField("<:1009095264398753822:1012341965884489831> AFK zaman aşımı:", message.guild.afkTimeout, true)
    .addField("<:1013240160709791854:1016839108255043584> Oluşturma tarihi:", message.guild.createdAt, true)
    .setTimestamp()
    .setFooter("Sunucu Bilgi", message.guild.iconURL());
  return message.channel.send(sunucu);
};

module.exports.conf = {
  aliases: ["sunucubilgi"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "sunucubilgi",
  description: "",
  usage: "sunucu-bilgi"
};
