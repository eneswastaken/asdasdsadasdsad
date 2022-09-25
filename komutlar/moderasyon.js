const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const embed = new Discord.MessageEmbed()
.setColor('#660099')
.setTitle('Mavera Moderasyon Menüsü')
.setFooter("MaveraBot", client.user.avatarURL())
.setThumbnail('https://media.discordapp.net/attachments/1022843509016895568/1023170182463627345/143d6bc7-3090-43dd-854c-def1789613a9.png?width=435&height=433')
.setImage("https://media.discordapp.net/attachments/1022843509016895568/1023194392246374411/ezgif.com-gif-maker.gif?width=374&height=48")
.setDescription(`**<:51:1010178990155255808> m!ban** - Kişiyi sunucudan banlar.
**<:51:1010178990155255808> m!kick** - Kullanıcıyı Sunucudan atar.
**<:51:1010178990155255808> m!unban** - Kullanıcının banını kaldırır.
**<:51:1010178990155255808> m!bansay** - Sunucuda banlı kullanıcı sayısını gösterir.
**<:51:1010178990155255808> m!sil** - Belirtilen miktarda mesaj siler.
**<:51:1010178990155255808> m!herkeserolver** - Sunucudaki herkese toplu rol verir.
**<:51:1010178990155255808> m!rolal** - Kullanıcıdan rol alır.
**<:51:1010178990155255808> m!rolver** - Kullanıcıya rol verir.
**<:51:1010178990155255808> m!panel-kur** - Sunucuda panel kurar.
**<:51:1010178990155255808> m!panel-sil** - Sunucuda panel silerler.
**<:51:1010178990155255808> m!nuke** - Kanaldaki mesajları yok eder.
**<:51:1010178990155255808> m!yavaşmod** - Kanalda bekleme süresini ayarlar.
**<:51:1010178990155255808> m!isimdeğiştir** - Etiketlenin kişinin ismini değiştirir.`)

 message.channel.send(embed) 
}
exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: []

}

exports.help = {

  name: 'moderasyon',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}