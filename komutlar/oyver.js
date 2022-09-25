const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const rexus = new Discord.MessageEmbed()
    .setColor("#660099")
    .setFooter("MaveraBot", client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .setDescription("<:onays:1015371223531802695> **Oy ver;** [Tıkla](https://top.gg/bot/893238888179580958/vote)\n<:630853853172203553:1023240444815081493> **DBL Sayfam;** [Tıkla](https://top.gg/bot/893238888179580958)\n<:888414495423225866:1005818896596611154> **Destek Sunucusu;** [Tıkla](https://discord.gg/ZyQWrgKg66)\n\n**Bota Oy Ver, Kazan**\nBota oy vererek oy verme zorunluluğu olan komutları kullanabilir ve destek sunucumuzda \`m!oyverdim\` komutu ile Destekçi rolü alabilirsiniz!")
  message.channel.send(rexus);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "oyver",
  description: "",
  usage: ""
};