const Discord = require("discord.js");

exports.run = (client, message, args) => {
  
  if(!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('Bu komutu kullanabilmek için `İsimleri Yönet` yetkisine sahip olmalısın')
  
  let uye = message.mentions.users.first();
  if(!uye) return message.channel.send("Lütfen Bir üye Etiketle.")
  
  let uyee = args[0]
  
  let isim = args.slice(1).join(' ');
  if(!isim) return message.channel.send("Lütfen Bir İsim Gir.")
  
  const embed = new Discord.MessageEmbed()
  .setDescription(`*Başarılı!* ${uye} isimli kullanıcının yeni ismi \`${isim}\` oldu.`)
  .setTimestamp()
  .setColor("#660099")
  .setFooter( "MaveraBot", client.user.avatarURL())
  message.channel.send(embed)
  message.guild.members.cache.get(uye.id).setNickname(`${isim}`)
  
  
}

exports.conf = {
  aliases: ["isimdeğiştir"],
  enabled: true,
  permLevel: 0,
  guildOnly: true
}
exports.help = {
  name: "isim-değiştir",
  description: "Belirtilen kişinin ismini değiştirir.",
  usage: "isim-değiştir"
}