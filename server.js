const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
const http = require("http");
const express = require("express");
require("./util/eventLoader")(client);
const path = require("path");
const request = require("request");


const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Pinglendi.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 8;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

//bot sunucuya girince kanal açıp bilgilendirme

client.on('guildCreate', guild => {
  if(guild.me.hasPermission('MANAGE_CHANNELS')) {
    guild.channels.create(client.user.username, { type: 'text' }).then(channel => {
      return channel.send(new Discord.MessageEmbed() 
      .setColor("#660099")
      .setFooter("MaveraBot", client.user.avatarURL())
      .setThumbnail('https://media.discordapp.net/attachments/1022843509016895568/1023170182463627345/143d6bc7-3090-43dd-854c-def1789613a9.png?width=435&height=433')
      .setDescription(`
*<a:emoji_123:1011716944950480937> Selam;*
**<a:583014055443169301:1012334678126112850> Benim adım Mavera. Beni sunucuna eklediğin için teşekkür ederim :) Sunucunu koruyabilir, sunucundaki üyeleri eğlendirebilir ve daha bir çok şeyi yapabilirim.**

*<:9520_Amongus_pog:1007984090231877662> Bot İnfo;*
**<:51:1010178990155255808> İstatistiklerim: Toplam \`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\` Kullanıcı \`${client.guilds.cache.size.toLocaleString()}\` Sunucuya Hizmet Veriyorum.**
**<:51:1010178990155255808> Prefixim: \`m!\`**
*<a:583021641747923145:1012336321471189014> Bilgilendirme;*
**<:51:1010178990155255808> Yardım Menüsü: \`m!yardım\`**
**<:51:1010178990155255808> İstatistiklerim: \`m!istatistik\`**

*:link: Bağlantılar;*
<:888414495423225866:1005818896596611154> [**Destek Sunucum**](https://discord.gg/RvPfmr6CCx)
<a:583014055443169301:1012334678126112850> [**Botu Ekle**](https://discord.com/api/oauth2/authorize?client_id=893238888179580958&permissions=8&scope=bot)
<:onays:1015371223531802695> [**Oy Ver**](https://top.gg/bot/893238888179580958/vote)`)
      );
    });
  };
});

client.on("message", async message => {
  const ms = require('parse-ms')
  
  let cooldown = 1800000 /// Cooldown MS olarak kendinize göre ayarlayabilirsiniz.
  
  let sure = await db.fetch(`sahipsure_${message.author.id}`);
  
  let kisi = "851163417330843718" // ID'nizi 2 Tırnak Arasına Yazınız.
      if(message.author.id === kisi) {
      if (sure !== null && cooldown - (Date.now() - sure) > 0) {
          let time = ms(cooldown - (Date.now() - sure));
      } else {
    if (message.content.length > 1) {
  
  db.set(`sahipsure_${message.author.id}`, Date.now());
    const embed = new Discord.MessageEmbed()
    .setDescription(`Sahibim Geldiiii.`)
    .setColor(15844367)
     message.channel.send(embed)
    }
  };
  }
  if (message.author.id !== kisi) return;
  });

client.login(process.env.token);