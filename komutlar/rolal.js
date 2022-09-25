const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")

exports.run = (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send(`Bu Komudu Kullanmaya İznin Yok! \n <@${message.author.id}>`)
    let role = message.mentions.roles.first();
    let member = message.mentions.members.first();
    if (!role) return message.reply('**Lütfen Almak İstediğiniz Rolü Etiketleyin! <a:yanlss:1008733112592769024>**')
    if (!member) return message.reply('**Lütfen Rol Almak İstediğiniz Kişiyi Etiketleyin! <a:yanlss:1008733112592769024>**')
    member.roles.remove(role)
    const embed = new MessageEmbed()
    .setAuthor(`Rolü Aldım`)
    .setDescription(`**<:14:1008732364198920263> Rolü Alınan Kullanıcı: **${message.mentions.users.first()}\n**<:disPa:1011781606480027739> Alınan Rol: **${role}\n**<:c49f979065f75a7928bfa258070445b2:1008348079868612758> Yetkili: <@${message.author.id}>**`)
    .setTimestamp()
    .setFooter( "MaveraBot", client.user.avatarURL())
    .setColor("#660099")
    message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  permLevel: 0,
  aliases: ["rol-al"]
};

exports.help = {
  name: "rolal",
  description: "Birinden rol alırsınız.",
  usage: "rolal"
};