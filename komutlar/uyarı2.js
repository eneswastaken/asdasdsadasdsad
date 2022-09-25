const Discord = require('discord.js');
const db = require('croxydb')
const ayarlar = require("../ayarlar.json")
exports.run = async (client, message) => {
    let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new Discord.MessageEmbed()
 .setColor("#f6ff00")
 .setDescription(` **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/kqaBAxkkuX) gelebilirsin!`)
  if(karaliste) 
    return message.channel.send(westraben)
  
	if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Yetkiniz Bulunmamaktadır!');
    let toplamuye = message.guild.channels.cache.find(x =>(x.name).startsWith("Toplam Üye •"))
   let aktifüye = message.guild.channels.cache.find(x =>(x.name).startsWith("Aktif Üye •"))
   let botlar = message.guild.channels.cache.find(x =>(x.name).startsWith("Botlar •"))
   let ses = message.guild.channels.cache.find(x =>(x.name).startsWith("Seslideki Üye •"))
   let sunucu = message.guild.channels.cache.find(x =>(x.name).startsWith(`${message.guild.name}`));
   sunucu.delete()
 toplamuye.delete()
  aktifüye.delete()
  botlar.delete()
  ses.delete()
   
  db.delete(`sunucupanel.${message.guild.id}`)
    message.channel.send(`Panel Başarılı İle Sıfırlandı`)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'panel-sil', 
  description: 'Botu yeniden başlatır',
  usage: 'reboot'
};