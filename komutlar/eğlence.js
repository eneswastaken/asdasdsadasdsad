const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const embed = new Discord.MessageEmbed()
.setColor('#660099')
.setTitle('Mavera Eğlence Menüsü')
.setFooter("MaveraBot", client.user.avatarURL())
.setThumbnail('https://media.discordapp.net/attachments/1022843509016895568/1023170182463627345/143d6bc7-3090-43dd-854c-def1789613a9.png?width=435&height=433')
.setImage("https://media.discordapp.net/attachments/1022843509016895568/1023194392246374411/ezgif.com-gif-maker.gif?width=374&height=48")
.setDescription(`**<:51:1010178990155255808> m!aşkölçer** - Etiketlediğin kişi ile ilişkine bakar.
**<:51:1010178990155255808> m!espri** - Bot random espiri yapar.
**<:51:1010178990155255808> m!id** - Id numaranızı atar.
**<:51:1010178990155255808> m!kapaklaf** - Bot kapak laflar söyler
**<:51:1010178990155255808> m!kedi** - Sevimli kedi gifi atar.
**<:51:1010178990155255808> m!boks** - Etiketlenen kişile boks yaparsınız.
**<:51:1010178990155255808> m!saldır** - Kullanıcıya saldırır.
**<:51:1010178990155255808> m!korona** - Ülke korona istatistik.
**<:51:1010178990155255808> m!kralol** - Sunucuda kral olursunuz.
**<:51:1010178990155255808> m!türk** - TÜRK bayrak gifi atar.
**<:51:1010178990155255808> m!sorusor** - Bota soru sorarsınız cvp verir.
**<:51:1010178990155255808> m!yazankazanır** - Kişiyle yazan kazanır oynarsınız.
**<:51:1010178990155255808> m!yaz** - Bota yazı yazdırabilirsiniz.`)

 message.channel.send(embed) 
}
exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: []

}

exports.help = {

  name: 'eğlence',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}