const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const embed = new Discord.MessageEmbed()
.setColor('#660099')
.setTitle('BotlistBOT Botlist Menüsü')
.setFooter("BotlistBOT", client.user.avatarURL())
.setThumbnail('https://media.discordapp.net/attachments/1022843509016895568/1028422365765435515/02754fcf38260bc71757cb05faa60370.png?width=403&height=403')
.setImage("https://media.discordapp.net/attachments/1022843509016895568/1024035336847896616/Mercy_Afis.png?width=576&height=324")
.setDescription(`*Ana Komutlar;*

**<:51:1010178990155255808> !bot ekle** - Bot eklersiniz.
**<:51:1010178990155255808> !bot onayla** - Bot onaylarsınız.
**<:51:1010178990155255808> !bot reddet** - Bot reddedersiniz.
**<:51:1010178990155255808> !bot bilgi** - Bot hakkında bilgi alırsınız.
**<:51:1010178990155255808> !botlist sıfırla hepsi** - Sistemi Ful Sıfırlar.

*Ayarlama Komutları;*

**<:51:1010178990155255808> !botlist ayarlar** - Botlist ayarlarını görürsünüz.
**<:51:1010178990155255808> !botlist kanal** - Botlist kanal ayarlarsınız.
**<:51:1010178990155255808> !botlist devepoler-rol** - Botlist devepoler rol ayarlarsınız.
**<:51:1010178990155255808> !botlist yetkili-rol** - Botlist yetkili rol ayarlarısınız.
**<:51:1010178990155255808> !botlist log** - Botlist log ayarlarsınız.
**<:51:1010178990155255808> !botlist başvuru-log** - Botlist başvuru log ayarlarsınız.
**<:51:1010178990155255808> !botlist dm-takip aç** - Botlist dm takip sistemini ayarlarsınız.
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

  name: 'yardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}