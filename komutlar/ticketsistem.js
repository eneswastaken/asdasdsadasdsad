const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const embed = new Discord.MessageEmbed()
.setColor('#660099')
.setTitle('Mavera Ticket Menüsü')
.setFooter("MaveraBot", client.user.avatarURL())
.setThumbnail('https://media.discordapp.net/attachments/1022843509016895568/1023170182463627345/143d6bc7-3090-43dd-854c-def1789613a9.png?width=435&height=433')
.setImage("https://media.discordapp.net/attachments/1022843509016895568/1023194392246374411/ezgif.com-gif-maker.gif?width=374&height=48")
.setDescription(`**<:51:1010178990155255808> m!ticket-aç** - Sunucuda ticket açar.
**<:51:1010178990155255808> m!ticket-kanal ayarla** - Ticket mesajının gideceği kanalı ayarlar.
**<:51:1010178990155255808> m!ticket-kanal sıfırla** - Ticket mesajının gideceği kanalı sıfırlar.
**<:51:1010178990155255808> m!ticket-kapat** - Ticketi kapatır.
**<:51:1010178990155255808> m!ticket-mesaj gönder** - Ticket açma mesajını kanala gönderir.
**<:51:1010178990155255808> m!ticket-sil** - Ticketi siler.`)

 message.channel.send(embed) 
}
exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: []

}

exports.help = {

  name: 'ticketyardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}