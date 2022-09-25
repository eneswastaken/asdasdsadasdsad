const Discord = require('discord.js');

exports.run = async(client, message) => {

let embed = new Discord.MessageEmbed()
.setColor("#660099")
.setFooter("MaveraBot", client.user.avatarURL())
.addField("**<:1009095264398753822:1012341965884489831> Gecikme Sürem**", `
**${client.ws.ping}** Ms`,true)


message.channel.send(embed)

}

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['p', 'ms'],
permLevel: 0
};

exports.help = {
name: 'ping',
description: 'Botun pingini gösterir',
usage: 'ping' };
