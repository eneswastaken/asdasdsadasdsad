const { MessageEmbed } = require('discord.js');
const paginationEmbed = require('discord.js-pagination');

module.exports.run = async(client, message, args) =>  {
const emojiList =  ['⏪', '⏩']
    let emojis50 = message.guild.emojis.cache.map(e => e).slice(0, 50).join(' ')
    let emojis100 = message.guild.emojis.cache.map(e => e).slice(50, 100).join(' ')
    let emojis150 = message.guild.emojis.cache.map(e => e).slice(100, 150).join(' ')
    let emojis200 = message.guild.emojis.cache.map(e => e).slice(150, 200).join(' ')
    let emojis250 = message.guild.emojis.cache.map(e => e).slice(200, 250).join(' ')
    const embed1 = new MessageEmbed()
.setColor('#660099')
.setFooter("MaveraBot", client.user.avatarURL())
.setAuthor(message.guild.name, message.guild.iconURL({dynamic: true}))
    .setDescription(emojis50)
     const embed2 = new MessageEmbed()
.setColor('#660099')
.setFooter("MaveraBot", client.user.avatarURL())
.setAuthor(message.guild.name, message.guild.iconURL({dynamic: true}))
     .setDescription(emojis100)
     const embed3 = new MessageEmbed()
.setColor('#660099')
.setFooter("MaveraBot", client.user.avatarURL())
.setAuthor(message.guild.name, message.guild.iconURL({dynamic: true}))
     .setDescription(emojis150)
     const embed4 = new MessageEmbed()
.setColor('#660099')
.setFooter("MaveraBot", client.user.avatarURL())
.setAuthor(message.guild.name, message.guild.iconURL({dynamic: true}))
     .setDescription(emojis200)
     const embed5 = new MessageEmbed()
.setColor('#660099')
.setFooter("MaveraBot", client.user.avatarURL())
.setAuthor(message.guild.name, message.guild.iconURL({dynamic: true}))
     .setDescription(emojis250)
    let pages = [
        embed1,
        embed2,
        embed3,
        embed4,
        embed5,
    ];
    if (message.guild.emojis.cache.size < 50) {
      return message.channel.send(new MessageEmbed()
      .setDescription(emojis50)
      )
    }
    if(message.guild.emojis.cache.size > 50 && message.guild.emojis.cache.size < 100) {
      pages = [pages[0], pages[1]]
    } else if(message.guild.emojis.cache.size > 100 && message.guild.emojis.cache.size < 150) {
      pages = [pages[0], pages[1], pages[2]]
    }else if(message.guild.emojis.cache.size > 150 && message.guild.emojis.cache.size < 200) {
      pages = [pages[0], pages[1], pages[2], pages[3]]
    }else if(message.guild.emojis.cache.size > 200 && message.guild.emojis.cache.size < 250) {
      pages = [pages[0], pages[1], pages[2], pages[3], pages[4]]
    }
    paginationEmbed(message, pages, emojiList, 50000);
  }
module.exports.conf = {
aliases: []
}

module.exports.help ={
name: 'emojiler'
}