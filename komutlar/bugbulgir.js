const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let bug = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let channel = bot.channels.cache.get("1023227840952549499")//bug repot kanal id'i
let embed = new Discord.MessageEmbed()
.setTitle("Bug Report <:50:1010178944571547658>")
.setThumbnail("https://cdn.discordapp.com/attachments/545569894268272650/645252657572872192/tosun.png?width=80&height=80")
.addField("<a:804988466038833182:1016700639620911225> Bug", bug)
.addField("<:BlobKittenKnife:1007984743985451059> Report Eden", user, true)
.addField("<:discord:1018140828738261073> Sunucu", guild, true)
.addField("<a:935417631408803850:1005817755724951572> Sunucu ID", guildid, true)
.addField("<:17:1005930191991869500> Kanal", kanal, true)
.setColor("#660099")
.setFooter("MaveraBot")

message.channel.send("**Bug Report Başarı İle İletildi. <a:basarl:1008732951288234084>**")
message.react('<:onays:1015371223531802695>')
channel.send(embed).then(i => i.react("⏳"))

  


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'bugbildir',
  description: 'Bug Bildirme Komudu.',
  usage: 'bug-bildir'
}