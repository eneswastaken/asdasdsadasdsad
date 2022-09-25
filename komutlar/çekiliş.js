const GweepDiscord = require('discord.js');
const GweepClient = new GweepDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const GweepEmbed = new GweepDiscord.MessageEmbed()
  .setColor('#e7000e')
 .setAuthor(`${client.user.username} | Çekiliş Menüsü`)
 .setDescription(` <a:erixsbotum:871284700545699860> **${prefix}çekiliş** \n  <a:ErixsbOR:871284432575791114> Çekiliş Yaparsınız
 <a:erixsbotum:871284700545699860>  **${prefix}çekilişbitir** \n  <a:ErixsbOR:871284432575791114> Çekilişi Bitirirsiniz
`)
 .setImage("https://media.discordapp.net/attachments/868513056756490300/871310947703222333/ezgif.com-gif-maker.gif?width=351&height=45")
 .setTimestamp()
 message.channel.send(GweepEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "",
  permLevel: 0
};

exports.help = {
  name: 'çekiliş-yap',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};