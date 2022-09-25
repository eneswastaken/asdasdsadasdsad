const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const embed = new Discord.MessageEmbed()
.setColor('#660099')
.setTitle('Mavera Bot Menüsü')
.setFooter("MaveraBot", client.user.avatarURL())
.setThumbnail('https://media.discordapp.net/attachments/1022843509016895568/1023170182463627345/143d6bc7-3090-43dd-854c-def1789613a9.png?width=435&height=433')
.setImage("https://media.discordapp.net/attachments/1022843509016895568/1023194392246374411/ezgif.com-gif-maker.gif?width=374&height=48")
.setDescription(`**<:51:1010178990155255808> m!istatistik** - Botun istatistiklerini gösterir.
**<:51:1010178990155255808> m!oyver** - Botun oy verme linkini ve birkaç bilgi alırsınız.
**<:51:1010178990155255808> m!ping** - Botun pingini gösterir.
**<:51:1010178990155255808> m!oyverdim** - Destek sunucusunda Destekçi rolü kazanırsınız.
**<:51:1010178990155255808> m!bugbildir** - Bot hakkında bug bildirir.
**<:51:1010178990155255808> m!sahipçağır** - Botun sahibine mesaj gönderir.`)

 message.channel.send(embed) 
}
exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: []

}

exports.help = {

  name: 'mavera',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}