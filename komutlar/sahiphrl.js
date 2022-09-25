const Discord = require('discord.js');
exports.run = async(client, message, args) => {
  if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(`Bu özelliği kullanabilmek için \`Mesajları Yönet\` yetkisine sahip olmalısınız.`);

let sahip = "847596022020309013"; //sahip id
  let sebep = args.slice(0).join(" ");
  let davet = await message.channel.createInvite({ maxAge: 0, maxUses: 0 }).catch(console.error);


  if(!sebep) return message.reply('Lütfen Mesajınızı belirtin');
  message.channel.send('İletiniz gönderilmiştir.')

let mesaj = new Discord.MessageEmbed()  
.setAuthor((`${message.author.tag} (${message.author.id})`) ,message.author.avatarURL())
.setTitle(`Seni Yardım İçin Çağırdı!`)
.setThumbnail('https://media.discordapp.net/attachments/1022843509016895568/1023170182463627345/143d6bc7-3090-43dd-854c-def1789613a9.png?width=435&height=433')
.setColor('#660099')
.setFooter( "MaveraBot", client.user.avatarURL())
.addField(`<:Duyuru:1005818488172064819> Sebep`, sebep, true)
.addField(`<:Link:1023527672355242015> Davet link`, davet, true)

client.users.cache.get(sahip).send(mesaj)

};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'sahipçağır',
  description: 'sahibi çağırır',
  usage: 'sahip-çağır [sebep]',
};