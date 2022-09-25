const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("../ayarlar.json");
const moment = require("moment");
const db = require('croxydb');

exports.run = async (client, message, args) => {
  let pc = message.guild.members.cache

    .filter(m => !m.user.bot && m.user.presence.status !== "offline")

    .filter(m => Object.keys(m.user.presence.clientStatus).includes("desktop"))

    .size;

  let web = message.guild.members.cache

    .filter(m => !m.user.bot && m.user.presence.status !== "offline")

    .filter(m => Object.keys(m.user.presence.clientStatus).includes("web"))

    .size;

  let mobil = message.guild.members.cache

    .filter(m => !m.user.bot && m.user.presence.status !== "offline")

    .filter(m => Object.keys(m.user.presence.clientStatus).includes("mobile"))

    .size;
  var prefix = db.get(`prefix_${message.guild.id}`) || ayarlar.prefix;
  let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor(`#660099`)
        .setDescription(`Komudu Kullanazsın Çünkü **Kara Listedesin!**`)
        .setFooter(client.user.username, client.user.avatarURL())
    );
  let user = message.mentions.users.first() || message.author;
  let userinfo = {};

  userinfo.rozetler = user.flags.toArray().join("\n")
    ? user.flags
        .toArray()
        .join("\n")
        .replace("HOUSE_BRAVERY", "<a:rozetler:1023533263526035547> Bravery")
        .replace("HOUSE_BRILLIANCE", "<a:rozetler:1023533263526035547> Brillianca")
        .replace("HOUSE_BALANCE", "<a:rozetler:1023533263526035547> Balance")
        .replace("VERIFIED_DEVELOPER", "<a:rozetler:1023533263526035547> Doğrulanmış Discord Bot Geliştiricisi")
        .replace("VERIFIED_BOT", "<a:rozetler:1023533263526035547> Onaylı Bot")
        .replace("DISCORD_EMPLOYEE", "<a:rozetler:1023533263526035547> Discord Çalışanı")
        .replace("DISCORD_PARTNER", "<a:rozetler:1023533263526035547> Partner")
        .replace("HYPESQUAD_EVENTS", "<a:rozetler:1023533263526035547> Events Rozeti")
        .replace("BUGHUNTER_LEVEL_1", "<a:rozetler:1023533263526035547> Bug Avcısı Level 1")
        .replace("EARLY_SUPPORTER", "<a:rozetler:1023533263526035547> Erken Dönem Destekcisi")
        .replace("TEAM_USER", "<a:rozetler:1023533263526035547> Takım Üyesi")
        .replace("SYSTEM", "<a:rozetler:1023533263526035547> Sistem")
        .replace("BUGHUNTER_LEVEL_2", "<a:rozetler:1023533263526035547> Bug Avcısı Level 2")
    : `<:dur:1023225539319840868> Hiçbir Rozeti Yok`;

  userinfo.status = user.presence.status
    .toString()
    .replace("dnd", `<:50:1010178944571547658> Rahatsız Etmeyin`)
    .replace("online", `<:51:1010178990155255808> Çevrimiçi`)
    .replace("idle", `<:idle:1010190092222079006> Boşta`)
    .replace("offline", `<:offline:1010189869332578354> Çevrimdışı`);

  userinfo.bot = user.bot
    .toString()
    .replace("false", `<:986566457385173013:1010201714508439642> Hayır`)
    .replace("true", `<:997463847948533790:1010201691431391342> Evet`);
  userinfo.dctarih = moment
    .utc(message.guild.members.cache.get(user.id).user.createdAt)
    .format("**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)")
    .replace("Monday", `**Pazartesi**`)
    .replace("Tuesday", `**Salı**`)
    .replace("Wednesday", `**Çarşamba**`)
    .replace("Thursday", `**Perşembe**`)
    .replace("Friday", `**Cuma**`)
    .replace("Saturday", `**Cumartesi**`)
    .replace("Sunday", `**Pazar**`)
    .replace("January", `**Ocak**`)
    .replace("February", `**Şubat**`)
    .replace("March", `**Mart**`)
    .replace("April", `**Nisan**`)
    .replace("May", `**Mayıs**`)
    .replace("June", `**Haziran**`)
    .replace("July", `**Temmuz**`)
    .replace("August", `**Ağustos**`)
    .replace("September", `**Eylül**`)
    .replace("October", `**Ekim**`)
    .replace("November", `**Kasım**`)
    .replace("December", `**Aralık**`);
    userinfo.dctarihkatilma = moment

    .utc(message.guild.members.cache.get(user.id).joinedAt)

    .format("**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)")

    .replace("Monday", `**Pazartesi**`)

    .replace("Tuesday", `**Salı**`)

    .replace("Wednesday", `**Çarşamba**`)

    .replace("Thursday", `**Perşembe**`)

    .replace("Friday", `**Cuma**`)

    .replace("Saturday", `**Cumartesi**`)

    .replace("Sunday", `**Pazar**`)

    .replace("January", `**Ocak**`)

    .replace("February", `**Şubat**`)

    .replace("March", `**Mart**`)

    .replace("April", `**Nisan**`)

    .replace("May", `**Mayıs**`)

    .replace("June", `**Haziran**`)

    .replace("July", `**Temmuz**`)

    .replace("August", `**Ağustos**`)

    .replace("September", `**Eylül**`)

    .replace("October", `**Ekim**`)

    .replace("November", `**Kasım**`)

    .replace("December", `**Aralık**`);
  const DarkCode = new Discord.MessageEmbed()
    .setColor("#660099")
    .setThumbnail(
      user.avatarURL({
        dynamic: true,
        format: "gif",
        format: "png",
        format: "jpg",
        size: 2048
      })
    )
    .addField(`Nick`, `${user.tag}`, true)
    .addField(`ID`, `${user.id}`, true)
    .addField(`Durum`, userinfo.status, true)
    .addField(`Bot Mu?`, userinfo.bot, true)
    .addField(`<a:816692735385141258:1005931906828873759> Discord'a Katılım Tarihi`, userinfo.dctarih, false)
      .addField(`<a:816692735385141258:1005931906828873759> Sunucuya Katılım Tarihi`, userinfo.dctarihkatilma, false)
      .addField(

      `Güvenilirlik?`,

      `${

        new Date().getTime() - user.createdAt.getTime() <

        15 * 24 * 60 * 60 * 1000

          ? "<:986566457385173013:1010201714508439642> **__Tehlikeli__**"

          : "<:997463847948533790:1010201691431391342> **__Güvenli__**"

      }

`,

      true

    )
    .addField(`Rozetleri`, userinfo.rozetler, false)
  .setAuthor(`${message.guild.name}`,
        message.guild.iconURL({
          dynamic: true,
          format: "gif",
          format: "png",
          format: "jpg",
          size: 2048
        }))
/*
      .setFooter(

        `${message.author.tag} Tarafından İstendi!`,

        message.author.avatarURL({

          dynamic: true,

          format: "gif",

          format: "png",

          format: "jpg",

          size: 2048*/
    .setFooter(client.user.username, client.user.avatarURL())
          

message.channel.send(DarkCode);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kullanıcıbilgi",
  description: "Kullanıcının Bilgilerini Gösterir.",
  usage: "kullanıcı-bilgi"
};