const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const embed = new Discord.MessageEmbed()
.setColor('#660099')
.setTitle('Mavera Yardım Menüsü')
.setFooter("MaveraBot", client.user.avatarURL())
.setThumbnail('https://media.discordapp.net/attachments/1022843509016895568/1023170182463627345/143d6bc7-3090-43dd-854c-def1789613a9.png?width=435&height=433')
.setImage("https://media.discordapp.net/attachments/1022843509016895568/1023194392246374411/ezgif.com-gif-maker.gif?width=374&height=48")
.setDescription(`
> **<a:586273537677983774:1012334694907531356> prefix:** *m!*
> <:45:1007979694131515482> Sahib: <@847596022020309013>
> <:1009095264398753822:1012341965884489831> Ping: \`15\`
> <a:572809336930304008:1012380850102476941> Toplam Komut: \`${client.commands.size}\`

*Ana Komutlar;*

<a:583012909177634850:1012334746635862078> \`m!moderasyon\` **Komutları**
<a:586273537677983774:1012334694907531356> \`m!eğlence\` **Komutları**
<:14:1008732364198920263> \`m!kullanıcı\` **Komutları**
<a:583014055443169301:1012334678126112850> \`m!mavera\` **Komutları**
<:disPus:1016689631116394597> \`m!botlistyardım\` **Komutları**
:tickets: \`m!ticketyardım\` **Komutları**

*Bağlantılar;*
<:888414495423225866:1005818896596611154> [Destek Sunucusu](https://discord.gg/ZyQWrgKg66) | <a:583014055443169301:1012334678126112850> [Botu Ekle](https://discord.com/api/oauth2/authorize?client_id=893238888179580958&permissions=8&scope=bot) | <:onays:1015371223531802695> [Oyver](https://top.gg/bot/893238888179580958/vote)`)

 message.channel.send(embed) 
}
exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ["help"]

}

exports.help = {

  name: 'yardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}