const fs = require('fs');
const discord = require('discord.js');
const database = require('croxydb');
const db = require('croxydb');
exports.run = async(client, message, args) => {
  
let saldirmasana = args.slice(1).join(' ');
let uye = message.mentions.users.first();

if (message.mentions.users.size < 1) return message.channel.send(`**<:dur:1023225539319840868> Üye etiketlemedin, nasıl saldıracağım?!**`)
if(!args[0])  return message.channel.send("**Kullanım: \`m!saldır\` @kullanıcı Saldırma Sebebi**")
if(!args[1])  return message.channel.send("**Kullanım: \`m!saldır\` @kullanıcı Saldırma Sebebi**")

const rootuser = new discord.MessageEmbed()
//.setDescription("**Buneee, imdaaat**\n- <@!" + uye + `>\n**Şimdi Mahvettim Seni!**\n- <@!${message.author.id}>\n**Ne yaptım kiiiii, imdaat!!**\n- <@` + uye + ">\n**" + saldirmasana + `**\n-<@!${message.author.id}>`)
.addField("**Buneee, imdaaat**", `${uye}`)
.addField("**Şimdi Mahvettim Seni!**", `<@!${message.author.id}>`)
.addField("**Ne yaptım kiiiii, imdaat!!**", `${uye}`)
.setColor(`#660099`)
.setFooter( "MaveraBot", client.user.avatarURL())
.addField(`${saldirmasana}`, `<@!${message.author.id}>`)
.setImage("https://i.gifer.com/embedded/download/UQ0w.gif")
message.channel.send(rootuser)  

  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'saldır',
  description: 'Birine Saldırırsınız.',
  usage: ''
};