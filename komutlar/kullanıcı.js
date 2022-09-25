const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const embed = new Discord.MessageEmbed()
.setColor('#660099')
.setTitle('Mavera kullanıcı Menüsü')
.setFooter("MaveraBot", client.user.avatarURL())
.setThumbnail('https://media.discordapp.net/attachments/1022843509016895568/1023170182463627345/143d6bc7-3090-43dd-854c-def1789613a9.png?width=435&height=433')
.setImage("https://media.discordapp.net/attachments/1022843509016895568/1023194392246374411/ezgif.com-gif-maker.gif?width=374&height=48")
.setDescription(`**<:51:1010178990155255808> m!sunucubilgi** - Sunucu hakkında bilgi.
**<:51:1010178990155255808> m!sunucuresmi** - Botun bulunduğu sunucunun resmini atar.
**<:51:1010178990155255808> m!toplamkomut** - Botta kaç komut olduğu.
**<:51:1010178990155255808> m!oylama** - Sunucuda basit oylama sistemi.
**<:51:1010178990155255808> m!üyedurum** - Sunucu üye durumu.
**<:51:1010178990155255808> m!yapımcım** - Botun geliştiricisi.
**<:51:1010178990155255808> m!emojiler** - Sunucudaki emojileri listeler.
**<:51:1010178990155255808> m!emojiekle** - Sunucuya emoji ekler.
**<:51:1010178990155255808> m!avatar** - Avatarınızı atar.
**<:51:1010178990155255808> m!kullanıcıbilgi** - Kullanıcı istatistiklerini gösterir.`)

 message.channel.send(embed) 
}
exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: []

}

exports.help = {

  name: 'kullanıcı',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}