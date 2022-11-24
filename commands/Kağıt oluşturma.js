const Discord = require("discord.js");
const DatabaseManager = require("../managers/DatabaseManager");

const Stats = global.Stats = new Map();

// key, value
// key = id
// value = değerler

/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {String[]} args
 */
module.exports.execute = async function (client, message, args) {
  let oyuncular = DatabaseManager.Database.collection("users");
  let oyuncu = oyuncular.data(message.author.id);

  let veri = await oyuncu.get("profil");

  if (veri == undefined) {
    veri = await kullanıcı.set("profil", {
      Kuvvet: 1,
      Zeka: 1,
      Çeviklik: 1,
      Dayanıklılık: 1,
      Ünvan: 0,
      CanDeğeri: 100,
      MaxCanDeğeri: 100,
      ManaDeğeri: 100,
      MaxManaDeğeri: 100,
      Seviye: 1,
      Statü: " ",
      Para: 500,
      StatPuanı: 3,
      Buff: 0,
    });

    message.reply("Karakter penceresi oluşturdun.");
  }
  else {
    message.reply("Zaten bir karakter penceren var.");
  }
};

module.exports.command = {
  commands: ["oluştur"]
};
