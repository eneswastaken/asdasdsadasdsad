const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const rexus = new Discord.MessageEmbed()
    .setColor("#660099")
    .setFooter("MaveraBot", client.user.avatarURL())
    .setDescription("**<:earlydev:1011784997893578903> Yapımcım:** <@847596022020309013>")
  message.channel.send(rexus);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yapımcım",
  description: "",
  usage: ""
};