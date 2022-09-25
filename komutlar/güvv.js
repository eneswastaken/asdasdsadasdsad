const { MessageEmbed } = require('discord.js');

exports.run = async(client, interaction) => {
const guild = interaction.guild;
const embed = new MessageEmbed().addFields(
name: "Üye Sayısı", value: `${guild.memberCount}`, inline: true },
name: "İnsan Sayısı", value: `${guild.members.cache.filter(m => !m.user.bot).size}`, inline: true },
name: "Bot Sayısı", value: `${guild.members.cache.filter(m => m.user.bot).size}`, inline: true,
name: "Rol Sayısı", value: `${guild.roles.cache.size}`, inline: true ,
name: "Emoji Sayısı", value: `${guild.emojis.cache.size}`, inline: true ,
name: "Kanal Sayısı", value: `${guild.channels.cache.size}`, inline: true ,
name: "Yazı Kanal Sayısı", value: `${guild.channels.cache.filter(c => c.type == "text").size}`, inline: true,
name: "Ses Kanal Sayısı", value: `${guild.channels.cache.filter(c => c.type == "voice").size}`, inline: true
}

exports.conf = {
name: "say",
description: "Sunucudaki verileri gösterir."}