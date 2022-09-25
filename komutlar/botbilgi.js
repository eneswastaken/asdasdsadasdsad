const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const payidarzaman = moment

    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("#660099")
    .setTitle('Mavera İstatistik')
    .setThumbnail('https://media.discordapp.net/attachments/1022843509016895568/1023170182463627345/143d6bc7-3090-43dd-854c-def1789613a9.png?width=435&height=433')
    .addField("**<:14:1008347421216100424> Kullanıcı Sayısı** ", `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
    .addField("**<:discord:1018140828738261073> Sunucu Sayısı**", `${client.guilds.cache.size.toLocaleString()}`, true)
    .addField("**<:17:1005930191991869500> Kanal Sayısı**", `${client.channels.cache.size.toLocaleString()}`, true)
    .addField("**<:timeout:1018637770283036752> Aktiflik**", `${payidarzaman}`, true)
    .addField("**<:033f45c7572f82eeef2b2fa5a13d1b73:1008348057039032341> Node.JS Versiyon**", `${process.version}`, true)
    .addField("**<:993209157828219010:1012341464765845575> Ram Kullanımı**", `${(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB"}`, true)
    .addField("**<:BelgePng:1007984566990032896> Discord.JS**", `${Discord.version}`, true)
    .addField("**:globe_with_meridians: Konum**", `Turkey :flag_tr:`, true)
    .addField("**<:earlydev:1011784997893578903> Geliştirici**", ` data#9999`, true)
    .addField("**<:1009095264398753822:1012341965884489831> Ping**",`Mesaj Gecikmesi: ${new Date().getTime() - message.createdTimestamp} ms\n  Bot Gecikmesi: ${client.ws.ping}ms`, true)
    .addField("**<a:amongus:1010096609272545290> İşletim Sistemi**", ` \`Windows 10 | 64 Bit\` `, true)
    .addField("**<a:kalp17:1018637861425266748> CPU**",` \`\`\`Intel Xeon W-3275M\`\`\` `)
   .setFooter("MaveraBot", client.user.avatarURL())

  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['is'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "botbilgi",
  usage: "botbilgi"
};