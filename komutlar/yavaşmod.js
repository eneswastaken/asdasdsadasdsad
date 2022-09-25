const Discord = require('discord.js');

exports.run = async(client, message, args) => {
if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.MessageEmbed()
                .setFooter("MaveraBot", client.user.avatarURL())
                .setDescription(`**Doğru kullanım:** \` m!yavaşmod [0/120]\``)
                .setColor("#660099")
                .setTimestamp()
            message.channel.send({embed})
            return
          }
if (limit > 120) {
    return message.channel.send(new Discord.MessageEmbed().setFooter("MaveraBot", client.user.avatarURL()).setDescription("**Süre limiti maksimum \`120\` saniye olabilir. <a:yanlss:1008733112592769024>**").setColor("#660099"));
}
    message.channel.send(new Discord.MessageEmbed().setFooter("MaveraBot", client.user.avatarURL()).setDescription(`**Yazma süre limiti \`${limit}\` saniye olarak ayarlanmıştır. <a:basarl:1008732951288234084>**`).setColor("#660099"));
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaş-mod'],
  permLevel: 3,
};

exports.help = {
  name: 'yavaşmod',
  description: 'Sohbete yazma sınır (süre) ekler.',
  usage: 'yavaş-mod [1/120]',
};
