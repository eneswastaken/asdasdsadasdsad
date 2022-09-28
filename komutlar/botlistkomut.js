const Discord = require('discord.js');
const { Database } = require('nukleon');
const db = new Database("plasmic.json")
exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle(`Mavera Botlist`)
    .setColor("#660099")
    .setFooter("MaveraBot", client.user.avatarURL())
    .setDescription("Lütfen bir seçenek belirtiniz!  \n \n `bot ekle` `bot onayla` `bot reddet` `bot bilgi`")
if(!args[0]) return message.channel.send(embed).then (message => setTimeout(() => message.delete(), 10000))
if(args[0] == "ekle") {
  let dmtakip = db.fetch(`botlistdmtakip_${message.guild.id}`)
  if(dmtakip == "aktif") {
message.delete()
let kanal = db.fetch(`botlistkanal_${message.guild.id}`)
if(!kanal) return message.channel.send('Botlist kanal ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
let yetkilirol = db.fetch(`botlistyetkili_${message.guild.id}`)
if(!yetkilirol) return message.channel.send('Botlist yetkili rolü ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
let devrol = db.fetch(`botlistdevrol_${message.guild.id}`)
if(!devrol) return message.channel.send('Botlist devepoler rolü ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
let başvurulog = db.fetch(`botlistbaşvurulog_${message.guild.id}`)
if(!başvurulog) return message.channel.send('Botlist başvuru log kanalı ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
let log = db.fetch(`botlistlog_${message.guild.id}`)
if(!log) return message.channel.send('Botlist log ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
const kanalhata = new Discord.MessageEmbed()
.setTitle('Hata')
.setColor("#660099")
.setFooter("MaveraBot", client.user.avatarURL())
.setDescription('Burası Bot Ekleme Kanalı Değil!')
if(message.channel.id !== kanal) return message.channel.send(kanalhata).then (message => setTimeout(() => message.delete(), 3500))
let id = args[1]
if(!id) return message.channel.send('Lütfen Bot ID Giriniz!').then (message => setTimeout(() => message.delete(), 3500))
let prefix = args[2]
if(!prefix) return message.channel.send('lütfen Prefixi Giriniz!').then (message => setTimeout(() => message.delete(), 3500))
let dbldurum = args[3]
if(!dbldurum) return message.channel.send('Lütfen Dbl Durumunu Giriniz!').then (message => setTimeout(() => message.delete(), 3500))
db.add(`botlistsıra_${message.guild.id}`, 1)
db.set(`botbaşvuruid_${message.guild.id}.${id}`, message.author.id)
db.set(`botbaşvuruprefix_${message.guild.id}.${id}`, prefix)
db.set(`botbaşvurudbldurum_${message.guild.id}.${id}`, dbldurum)
let sıravar = db.fetch(`botlistsıra_${message.guild.id}`)
if(sıravar == sıravar) {var sıra = sıravar}
if(sıravar == undefined) {var sıra = "sıra yok"}
client.channels.cache.get(log).send(`<@${message.author.id}>, <@&${yetkilirol}>`)
const logembed = new Discord.MessageEmbed()
.setTitle('Bot Başvurusu')
.setColor('#660099')
.setFooter("MaveraBot", client.user.avatarURL())
.setDescription(` <@${message.author.id}> Adlı Kişi Botu <@${id}> Adlı Botu İle Bot Başvurusunda Bulundu!`)
client.channels.cache.get(log).send(logembed)
const başvurulogembed = new Discord.MessageEmbed()
.setTitle(`Bot Başvurusu`)
.setColor('#660099')
.setFooter("MaveraBot", client.user.avatarURL())
.setDescription(`__**Kullanıcı Bilgileri**__ \n *<:TAC:1015371086281592903> Başvuru Yapan:* <@${message.author.id}> \n *<:033f45c7572f82eeef2b2fa5a13d1b73:1008348057039032341> ID:* ${message.author.id} \n \n __**Bot Bilgileri**__ \n *<:AyarPng:1007984475239632977> Bot:* <@${id}> \n *<:yonetici:1011784160836329542> Prefix:* ${prefix} \n *<:630853853172203553:1023240444815081493> Dbl:* ${dbldurum} \n [0 Perm](https://discord.com/oauth2/authorize?scope=bot&permissions=0&client_id=${id}&guild_id=${message.guild.id})`)
client.channels.cache.get(başvurulog).send(başvurulogembed)
const embed = new Discord.MessageEmbed()
.setTitle('Başvurunuz Alındı')
.setColor('#660099')
.setFooter("MaveraBot", client.user.avatarURL())
.setDescription(message.guild.name + ` *Adlı Sunucudaki Bot Başvurunuz Alınmıştır. Başvurunuzla İlgili Bir Gelişme Olduğu Zaman Size Buradan Bildiride Bulunacağım* \n \n *Eğer Anlık Bilgi Almak İstersen* \`m!bot bilgi ${id}\``)
message.author.send(embed)
return message.channel.send('Başvurunuz alınmıştır!').then (message => setTimeout(() => message.delete(), 3500))
  }
message.delete()
let kanal = db.fetch(`botlistkanal_${message.guild.id}`)
if(!kanal) return message.channel.send('Botlist kanal ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
let yetkilirol = db.fetch(`botlistyetkili_${message.guild.id}`)
if(!yetkilirol) return message.channel.send('Botlist yetkili rolü ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
let devrol = db.fetch(`botlistdevrol_${message.guild.id}`)
if(!devrol) return message.channel.send('Botlist devepoler rolü ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
let başvurulog = db.fetch(`botlistbaşvurulog_${message.guild.id}`)
if(!başvurulog) return message.channel.send('Botlist başvuru log kanalı ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
let log = db.fetch(`botlistlog_${message.guild.id}`)
if(!log) return message.channel.send('Botlist log ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
const kanalhata = new Discord.MessageEmbed()
.setTitle(' Hata')
.setColor("#660099")
.setFooter("MaveraBot", client.user.avatarURL())
.setDescription('Burası Bot Ekleme Kanalı Değil!')
if(message.channel.id !== kanal) return message.channel.send(kanalhata).then (message => setTimeout(() => message.delete(), 3500))
let id = args[1]
if(!id) return message.channel.send('Lütfen idi giriniz!').then (message => setTimeout(() => message.delete(), 3500))
let prefix = args[2]
if(!prefix) return message.channel.send('lütfen prefixi giriniz!').then (message => setTimeout(() => message.delete(), 3500))
let dbldurum = args[3]
if(!dbldurum) return message.channel.send('Lütfen dbl durumunu giriniz!').then (message => setTimeout(() => message.delete(), 3500))
db.add(`botlistsıra_${message.guild.id}`, 1)
db.set(`botbaşvuruid_${message.guild.id}.${id}`, message.author.id)
db.set(`botbaşvuruprefix_${message.guild.id}.${id}`, prefix)
db.set(`botbaşvurudbldurum_${message.guild.id}.${id}`, dbldurum)
let sıravar = db.fetch(`botlistsıra_${message.guild.id}`)
if(sıravar == sıravar) {var sıra = sıravar}
if(sıravar == undefined) {var sıra = "sıra yok"}
client.channels.cache.get(log).send(`<@${message.author.id}>, <@&${yetkilirol}>`)
const logembed = new Discord.MessageEmbed()
.setTitle('Bot başvurusu')
.setColor('#660099')
.setFooter("MaveraBot", client.user.avatarURL())
.setDescription(` <@${message.author.id}> Adlı Kişi Botu <@${id}> Adlı Botu İle Bot Başvurusunda Bulundu!`)
client.channels.cache.get(log).send(logembed)
const başvurulogembed = new Discord.MessageEmbed()
.setTitle(`Bot başvurusu`)
.setColor('#660099')
.setFooter("MaveraBot", client.user.avatarURL())
.setDescription(`__**Kullanıcı Bilgileri**__ \n *<:TAC:1015371086281592903> Başvuru Yapan:* <@${message.author.id}> \n *<:033f45c7572f82eeef2b2fa5a13d1b73:1008348057039032341> ID:* ${message.author.id} \n \n __**Bot Bilgileri**__ \n *<:AyarPng:1007984475239632977> Bot:* <@${id}> \n *<:yonetici:1011784160836329542> Prefix:* ${prefix} \n *<:630853853172203553:1023240444815081493> Dbl:* ${dbldurum} \n [0 Perm](https://discord.com/oauth2/authorize?scope=bot&permissions=0&client_id=${id}&guild_id=${message.guild.id})`)
client.channels.cache.get(başvurulog).send(başvurulogembed)
return message.channel.send('Başvurunuz alınmıştır!').then (message => setTimeout(() => message.delete(), 3500))
}
if(args[0] == "onayla") {
  let dmtakip = db.fetch(`botlistdmtakip_${message.guild.id}`)
  if(dmtakip == "aktif") {
    let kanal = db.fetch(`botlistkanal_${message.guild.id}`)
    if(!kanal) return message.channel.send('Botlist kanal ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
    let yetkilirol = db.fetch(`botlistyetkili_${message.guild.id}`)
    if(!yetkilirol) return message.channel.send('Botlist yetkili rolü ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
    let devrol = db.fetch(`botlistdevrol_${message.guild.id}`)
    if(!devrol) return message.channel.send('Botlist devepoler rolü ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
    let başvurulog = db.fetch(`botlistbaşvurulog_${message.guild.id}`)
    if(!başvurulog) return message.channel.send('Botlist başvuru log kanalı ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
    let log = db.fetch(`botlistlog_${message.guild.id}`)
    if(!log) return message.channel.send('Botlist log ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
      if(!message.member.roles.cache.has(db.fetch(`botlistyetkili_${message.guild.id}`))) {
        return message.channel.send("Bu Komutu sadece botlist yetkilisi kullanabilir!");
      }
      let pythonic = args[1]
      if(!pythonic) return message.channel.send('Lütfen onaylanacak botun idini belirtin!')
      let sahip = db.fetch(`botbaşvuruid_${message.guild.id}.${pythonic}`)
      if(!sahip) return message.channel.send('Böyle bir bot başvurusu yapılmamış!')
      let sıra = db.fetch(`botlistsıra_${message.guild.id}`)
      if(sıra == undefined) {
      return message.channel.send('Şu anda hiç onaylanacak bot yok!')
      }
    db.set(`botlistonay_${message.guild.id}.${pythonic}`, "onaylandı")
      db.add(`botlistsıra_${message.guild.id}`, -1)
    message.guild.members.cache.get(sahip).roles.add(devrol)
      const logembed = new Discord.MessageEmbed()
      .setTitle(`Onaylandı`)
      .setColor("#660099")
      .setFooter("MaveraBot", client.user.avatarURL())
      .setDescription(`<@${message.author.id}> Adlı Yetkili <@${sahip}> Adlı Kişinin <@${pythonic}> Adlı Botunu Onayladı!`)
      client.channels.cache.get(log).send(logembed)
      client.channels.cache.get(log).send(`<@${sahip}>, <@${pythonic}>`)
      const onaylandı = new Discord.MessageEmbed()
      .setTitle('Onaylandı')
      .setColor("#660099")
      .setFooter("MaveraBot", client.user.avatarURL())
      .setDescription(`<@${message.author.id}> Adlı Kişi, <@${sahip}> Adlı Kişinin <@${pythonic}> Adlı Botunu Onayladı!`)
    const embedd = new Discord.MessageEmbed()
      .setTitle('Botunuz Onaylandı')
      .setColor("#660099")
    .setFooter("MaveraBot", client.user.avatarURL())
      .setDescription(`<@${message.author.id}> Adlı Yetkili <@${pythonic}> Adlı Botunuzu Onayladı!`)
      client.users.cache.get(sahip).send(embedd)
      return message.channel.send(onaylandı)
  }
  let kanal = db.fetch(`botlistkanal_${message.guild.id}`)
if(!kanal) return message.channel.send('Botlist kanal ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
let yetkilirol = db.fetch(`botlistyetkili_${message.guild.id}`)
if(!yetkilirol) return message.channel.send('Botlist yetkili rolü ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
let devrol = db.fetch(`botlistdevrol_${message.guild.id}`)
if(!devrol) return message.channel.send('Botlist devepoler rolü ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
let başvurulog = db.fetch(`botlistbaşvurulog_${message.guild.id}`)
if(!başvurulog) return message.channel.send('Botlist başvuru log kanalı ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
let log = db.fetch(`botlistlog_${message.guild.id}`)
if(!log) return message.channel.send('Botlist log ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
  if(!message.member.roles.cache.has(db.fetch(`botlistyetkili_${message.guild.id}`))) {
    return message.channel.send("Bu Komutu sadece botlist yetkilisi kullanabilir!");
  }
  let pythonic = args[1]
  if(!pythonic) return message.channel.send('Lütfen onaylanacak botun idini belirtin!')
  let sahip = db.fetch(`botbaşvuruid_${message.guild.id}.${pythonic}`)
  if(!sahip) return message.channel.send('Böyle bir bot başvurusu yapılmamış!')
  let sıra = db.fetch(`botlistsıra_${message.guild.id}`)
  if(sıra == undefined) {
  return message.channel.send('Şu anda hiç onaylanacak bot yok!')
  }
db.set(`botlistonay_${message.guild.id}.${pythonic}`, "onaylandı")
  db.add(`botlistsıra_${message.guild.id}`, -1)
message.guild.members.cache.get(sahip).roles.add(devrol)
  const logembed = new Discord.MessageEmbed()
  .setTitle(`Bot Onaylandı`)
  .setColor("#660099")
  .setFooter("MaveraBot", client.user.avatarURL())
  .setDescription(`<@${message.author.id}> Adlı Yetkili <@${sahip}> Adlı Kişinin <@${pythonic}> Adlı Botunu Onayladı!`)
  client.channels.cache.get(log).send(logembed)
  client.channels.cache.get(log).send(`<@${sahip}>, <@${pythonic}>`)
  const onaylandı = new Discord.MessageEmbed()
  .setTitle('Onaylandı')
  .setColor("#660099")
  .setFooter("MaveraBot", client.user.avatarURL())
  .setDescription(`<@${message.author.id}> Adlı Kişi, <@${sahip}> Adlı Kişinin <@${pythonic}> Adlı Botunu Onayladı!`)
  return message.channel.send(onaylandı)

}
if(args[0] == "reddet") {
  let dmtakip = db.fetch(`botlistdmtakip_${message.guild.id}`)
  if(dmtakip == "aktif") {
    let kanal = db.fetch(`botlistkanal_${message.guild.id}`)
    if(!kanal) return message.channel.send('Botlist kanal ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
    let yetkilirol = db.fetch(`botlistyetkili_${message.guild.id}`)
    if(!yetkilirol) return message.channel.send('Botlist yetkili rolü ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
    let devrol = db.fetch(`botlistdevrol_${message.guild.id}`)
    if(!devrol) return message.channel.send('Botlist devepoler rolü ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
    let başvurulog = db.fetch(`botlistbaşvurulog_${message.guild.id}`)
    if(!başvurulog) return message.channel.send('Botlist başvuru log kanalı ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
    let log = db.fetch(`botlistlog_${message.guild.id}`)
    if(!log) return message.channel.send('Botlist log ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
      if(!message.member.roles.cache.has(db.fetch(`botlistyetkili_${message.guild.id}`))) {
        return message.channel.send("Bu Komutu sadece botlist yetkilisi kullanabilir!");
      }
      let pythonic = args[1]
      if(!pythonic) return message.channel.send('Lütfen redddedilecek botun idini belirtin!')
      let sahip = db.fetch(`botbaşvuruid_${message.guild.id}.${pythonic}`)
      if(!sahip) return message.channel.send('Böyle bir bot başvurusu yapılmamış!')
      let sıra = db.fetch(`botlistsıra_${message.guild.id}`)
      if(sıra == undefined) {
      return message.channel.send('Şu anda hiç reddedilcek bot yok!')
      }
    db.set(`botlistonay_${message.guild.id}.${pythonic}`, "reddedildi")
      db.add(`botlistsıra_${message.guild.id}`, -1)
       const logembed = new Discord.MessageEmbed()
      .setTitle(`Reddedildi`)
      .setColor("#660099")
      .setFooter("MaveraBot", client.user.avatarURL())
      .setDescription(`<@${message.author.id}> Adlı Yetkili <@${sahip}> Adlı Kişinin <@${pythonic}> Adlı Botunu Reddetti!`)
      client.channels.cache.get(log).send(logembed)
      client.channels.cache.get(log).send(`<@${sahip}>, <@${pythonic}>`)
      const onaylandı = new Discord.MessageEmbed()
      .setTitle('Bot Reddedildi!')
      .setColor("#660099")
      .setFooter("MaveraBot", client.user.avatarURL())
      .setDescription(`<@${message.author.id}> Adlı Kişi, <@${sahip}> Adlı Kişinin <@${pythonic}> Adlı Votunu Reddetti!`)
    const embedd = new Discord.MessageEmbed()
    .setTitle('Botunuz Reddedildi!')
    .setColor("#660099")
    .setFooter("MaveraBot", client.user.avatarURL())
    .setDescription(`<@${message.author.id}> Adlı Yetkili <@${pythonic}> Adlı Botunuzu Reddetti!`)
      client.users.cache.get(sahip).send(embedd)
      return message.channel.send(onaylandı)
  };
  let kanal = db.fetch(`botlistkanal_${message.guild.id}`)
  if(!kanal) return message.channel.send('Botlist kanal ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
  let yetkilirol = db.fetch(`botlistyetkili_${message.guild.id}`)
  if(!yetkilirol) return message.channel.send('Botlist yetkili rolü ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
  let devrol = db.fetch(`botlistdevrol_${message.guild.id}`)
  if(!devrol) return message.channel.send('Botlist devepoler rolü ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
  let başvurulog = db.fetch(`botlistbaşvurulog_${message.guild.id}`)
  if(!başvurulog) return message.channel.send('Botlist başvuru log kanalı ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
  let log = db.fetch(`botlistlog_${message.guild.id}`)
  if(!log) return message.channel.send('Botlist log ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
    if(!message.member.roles.cache.has(db.fetch(`botlistyetkili_${message.guild.id}`))) {
      return message.channel.send("Bu Komutu sadece botlist yetkilisi kullanabilir!");
    }
    let pythonic = args[1]
    if(!pythonic) return message.channel.send('Lütfen redddedilecek botun idini belirtin!')
    let sahip = db.fetch(`botbaşvuruid_${message.guild.id}.${pythonic}`)
    if(!sahip) return message.channel.send('Böyle bir bot başvurusu yapılmamış!')
    let sıra = db.fetch(`botlistsıra_${message.guild.id}`)
    if(sıra == undefined) {
    return message.channel.send('Şu anda hiç reddedilcek bot yok!')
    }
  db.set(`botlistonay_${message.guild.id}.${pythonic}`, "reddedildi")
    db.add(`botlistsıra_${message.guild.id}`, -1)
     const logembed = new Discord.MessageEmbed()
    .setTitle(`Reddedildi`)
    .setColor("#660099")
    .setFooter("MaveraBot", client.user.avatarURL())
    .setDescription(`<@${message.author.id}> Adlı Yetkili <@${sahip}> Adlı Kişinin <@${pythonic}> Adlı Botunu Reddetti!`)
    client.channels.cache.get(log).send(logembed)
    client.channels.cache.get(log).send(`<@${sahip}>, <@${pythonic}>`)
    const onaylandı = new Discord.MessageEmbed()
    .setTitle('Bot Reddedildi!')
    .setColor("#660099")
    .setFooter("MaveraBot", client.user.avatarURL())
    .setDescription(`<@${message.author.id}> Adlı Kişi, <@${sahip}> Adlı Kişinin <@${pythonic}> Adlı Botunu Reddetti!`)
    return message.channel.send(onaylandı)
}
if(args[0] == "bilgi") {
  let kanal = db.fetch(`botlistkanal_${message.guild.id}`)
  if(!kanal) return message.channel.send('Botlist kanal ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
  let yetkilirol = db.fetch(`botlistyetkili_${message.guild.id}`)
  if(!yetkilirol) return message.channel.send('Botlist yetkili rolü ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
  let devrol = db.fetch(`botlistdevrol_${message.guild.id}`)
  if(!devrol) return message.channel.send('Botlist devepoler rolü ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
  let başvurulog = db.fetch(`botlistbaşvurulog_${message.guild.id}`)
  if(!başvurulog) return message.channel.send('Botlist başvuru log kanalı ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
  let log = db.fetch(`botlistlog_${message.guild.id}`)
  if(!log) return message.channel.send('Botlist log ayarlanmamış!').then (message => setTimeout(() => message.delete(), 5000))
  let engin = args[1]
  if(!engin) return message.channel.send('Lütfen bir bot id girin!')
  let prefix = db.fetch(`botbaşvuruprefix_${message.guild.id}.${engin}`)
 if(!prefix) return message.channel.send('Böyle bir bot eklenmemiş!')
 let dbldurum =db.fetch(`botbaşvurudbldurum_${message.guild.id}.${engin}`)
 if(!dbldurum) return message.channel.send('Böyle bir bot yok!')
 let sahip = db.fetch(`botbaşvuruid_${message.guild.id}.${engin}`)
 let onaydurumvar = db.fetch(`botlistonay_${message.guild.id}.${engin}`)
 if(onaydurumvar == onaydurumvar) {var durum = onaydurumvar}
 if(onaydurumvar == undefined) {var durum = "onay bekliyor"}
const embed = new Discord.MessageEmbed()
.setTitle(`Bot Bilgi Sistemi`)
.setColor('#660099')
.setFooter("MaveraBot", client.user.avatarURL())
client.channels.cache.get(log).send(`${engin}`)
.setDescription(`<:14:1008347421216100424> **SAHİP BİLGİLERİ** <:14:1008347421216100424> \n \n *<:TAC:1015371086281592903> Bot Sahibi:* <@${sahip}> \n *<:033f45c7572f82eeef2b2fa5a13d1b73:1008348057039032341> Sahip ID:* \`${sahip}\` \n \n <a:583014055443169301:1012334678126112850> **BOT BİLGİLERİ** <a:583014055443169301:1012334678126112850> \n \n *<:AyarPng:1007984475239632977> Bot ID:* \`${engin}\` \n *<:yonetici:1011784160836329542> Prefix:* \`${prefix}\` \n *<:630853853172203553:1023240444815081493> Dbl Durumu:* \`${dbldurum}\` \n  *<:onays:1015371223531802695> Onay Durumu:* \`${durum}\` \n\n [0 Perm](https://discord.com/oauth2/authorize?scope=bot&permissions=0&client_id=${engin}&guild_id=${message.guild.id})` ) 
return message.channel.send(embed)
}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bot'
};