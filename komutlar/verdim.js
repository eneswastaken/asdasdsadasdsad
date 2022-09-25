const {EmbedBuilder} = require("discord.js");
const ayarlar = require("../ayarlar.json")
exports.run = async (client, message, args) => {
    let guild = ayarlar.sunucuid
    let destekçi = ayarlar.destekçi
    if(message.guild.id!== guild) return message.reply(`**Bu komutu destek sunucusunda kullanmalısın! <a:yanlss:1008733112592769024>**`)
  
  message.reply("**Başarıyla destekçi rolün verildi! <a:basarl:1008732951288234084>**")
  message.react('<:onays:1015371223531802695>')
  message.guild.members.cache.get(message.author.id).roles.add(destekçi)

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "oyverdim"
};