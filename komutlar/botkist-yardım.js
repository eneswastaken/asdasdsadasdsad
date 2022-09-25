const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const embed = new Discord.MessageEmbed()
.setColor('#660099')
.setTitle('Mavera Botlist Menüsü')
.setFooter("MaveraBot", client.user.avatarURL())
.setThumbnail('https://media.discordapp.net/attachments/1022843509016895568/1023170182463627345/143d6bc7-3090-43dd-854c-def1789613a9.png?width=435&height=433')
.setImage("https://media.discordapp.net/attachments/1022843509016895568/1023194392246374411/ezgif.com-gif-maker.gif?width=374&height=48")
.setDescription(`*Ana Komutlar;*

**<:51:1010178990155255808> m!bot ekle** - Bot eklersiniz.
**<:51:1010178990155255808> m!bot onayla** - Bot onaylarsınız.
**<:51:1010178990155255808> m!bot reddet** - Bot reddedersiniz.
**<:51:1010178990155255808> m!bot bilgi** - Bot hakkında bilgi alırsınız.
**<:51:1010178990155255808> m!botlist sıfırla hepsi** - Sistemi Ful Sıfırlar.

*Ayarlama Komutları;*

**<:51:1010178990155255808> m!botlist ayarlar** - Botlist ayarlarını görürsünüz.
**<:51:1010178990155255808> m!botlist kanal** - Botlist kanal ayarlarsınız.
**<:51:1010178990155255808> m!botlist devepoler-rol** - Botlist devepoler rol ayarlarsınız.
**<:51:1010178990155255808> m!botlist yetkili-rol** - Botlist yetkili rol ayarlarısınız.
**<:51:1010178990155255808> m!botlist log** - Botlist log ayarlarsınız.
**<:51:1010178990155255808> m!botlist başvuru-log** - Botlist başvuru log ayarlarsınız.
**<:51:1010178990155255808> m!botlist dm-takip aç** - Botlist dm takip sistemini ayarlarsınız.
`)

 message.channel.send(embed) 
}
exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: []

}

exports.help = {

  name: 'botlistyardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}