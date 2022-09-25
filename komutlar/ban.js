const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {
if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor("#660099")
  .setTimestamp()
  .setFooter( "MaveraBot", client.user.avatarURL())
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('Uyarı', '`ban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let dızcılaraselam = message.mentions.users.first();

  if (message.mentions.users.size < 1) return message.channel.send(`**Lütfen sunucudan yasaklayacağınız kişiyi etiketleyin. <a:yanlss:1008733112592769024>**`).catch(console.error);

  if (!message.guild.member(dızcılaraselam).bannable) return message.channel.send(`**Belirttiğiniz kişinin Yetkisi Benden Daha Üstün! <a:yanlss:1008733112592769024>**`);
  message.guild.member(dızcılaraselam).ban({ reason: reason });

  message.channel.send("*Başarılı,* <@" + dızcılaraselam + ">**" + reason + "** **sebebiyle sunucudan yasaklandı. <:NarcosEmoji4cd81edc78b692b13faa8:1016690760822816858>**")
dızcılaraselam.send(`**${message.guild.name}** İsimli Sunucudan **${reason}** Sebebiyle **${message.author.tag}** Tarafından Yasaklandın!`)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi sunucudan yasaklar.',
  usage: 'ban <@kullanıcı> <sebep>',
 
};