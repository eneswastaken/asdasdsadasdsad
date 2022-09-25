//ayarlamasız abone rolü verir idleri girerseniz çalışır
const Discord = require('discord.js');


exports.run = async (client, message, args) => {

  if(!message.member.roles.cache.has("1017573192908406924")) return message.channel.send(`Bu komutu kullanabilmek için yeterli yetkiye sahip olmasınız.`);
    let kullanıcı = message.mentions.users.first()
    if (!kullanıcı) return message.channel.send('Kullanıcıyı etiketlemeyi unuttun kanka.')
    let rol = message.mentions.roles.first()
    let member = message.guild.member(kullanıcı)
        if(!member) return message.channel.send(`Abone Rolü Verilcek Kullanıcıyı Etiketle`)
member.roles.add("1012748525571944518")
return message.channel.send(new Discord.MessageEmbed()
.setColor('#660099')
.setFooter("MaveraBot", client.user.avatarURL())
  .setDescription(`${member} *Adlı Kullanıcıya* <@&1012748525571944518> *Rol Verildi!*`))



};
exports.conf = {
    enabled: true,     //ayarlamasız abone rol /
    guildOnly: true,
    aliases: []
  };
  
  exports.help = {
    name: 'a1',
    description: '',
    usage: 'abone'
  };