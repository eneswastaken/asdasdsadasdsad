const Discord = require('discord.js');
const fs = require('fs');
const db = require("croxydb");
const database = require('croxydb');

exports.run = (client, message, args) => {
if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor("#660099")
    .setFooter( "MaveraBot", client.user.avatarURL())
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('Uyarı', '`kick` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
 // let kicklimit = db.fetch(`kicklimit{message.guild.id}`)
  //if(!kicklimit) return;
  
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let dızcılaraselam = message.mentions.users.first();

  if (message.mentions.users.size < 1) return message.channel.send(`**Lütfen sunucudan atacağım kişiyi etiketleyin. <a:yanlss:1008733112592769024>**`).catch(console.error);

  if (!message.guild.member(dızcılaraselam).bannable) return message.channel.send(`**Belirttiğiniz kişinin Yetkisi Benden Daha Üstün! <a:yanlss:1008733112592769024>**`);
  message.guild.member(dızcılaraselam).kick();

  message.channel.send(" *Başarılı,* <@" + dızcılaraselam + ">**" + reason + "** sebebiyle sunucudan atıldı. <:leave:1018637599952339015>")
     
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi sunucudan yasaklar.',
  usage: 'ban <@kullanıcı> <sebep>',
 
};