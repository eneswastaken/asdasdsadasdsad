const Discord = require('discord.js');
const db = require('croxydb')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
exports.run = (client, message, args, member ) => {
    let prefix = ayarlar.prefix
    let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new Discord.MessageEmbed()
 .setColor("#660099")
 .setFooter("MaveraBot", client.user.avatarURL())
 .setDescription(`**${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/kqaBAxkkuX) gelebilirsin!`)
  if(karaliste) 
    return message.channel.send(westraben)
  
 if (!message.member.hasPermission("BAN_MEMBERS")) 
{
    const prmlv = new Discord.MessageEmbed()
    .setColor('#660099')
    .setDescription('**Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!**')
   .setTimestamp() 
    .setFooter("MaveraBot", client.user.avatarURL())
   return message.channel.send(prmlv)
  } 
  if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('#660099')
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(' Uyarı ', '`unban`komutu özel mesajlarda kullanılamaz.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  if (!user) {
    const bid = new Discord.MessageEmbed()
    .setColor('#660099')
    .setDescription(`**Banı kaldırılacak kişinin ID numarasını yazmalısın!**`)
   .setTimestamp() 
    .setFooter("MaveraBot", client.user.avatarURL())
   return message.channel.send(bid).catch(console.error);
  }
  
  message.guild.members.unban(user);
  const embed = new Discord.MessageEmbed()
    .setColor('#660099')
    .setTimestamp()
    .setDescription(`**<@!${user}> Adlı Kullanıcının Yasağı Kaldırıldı**`)
  .setFooter("MaveraBot", client.user.avatarURL())
    
   message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'unban',
  description: 'İstediğiniz kişinin banını kaldırır.',
  usage: 'unban [kullanıcı] [sebep]'
};