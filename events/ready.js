const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
 '✨ m!yardım',
 '🎃 m!botlistyardım',
 '🎫 m!ticketyardım',
 '🤝 discord.gg/altyapilar',
 '🤝 discord.gg/altyapilar',
 '🤝 discord.gg/altyapilar'
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], `${client.users.size} Users` );
        }, 2 * 2500);
    
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot aktif edildi!`);
  client.user.setStatus("online");
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Komutlar yüklendi!`);
};
