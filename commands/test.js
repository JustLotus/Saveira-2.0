const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require("fs")
module.exports =  { 
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('test kodu!')
		
				,




	async execute(interaction) {
let api = require("../test")

const { MessageActionRow, Modal, TextInputComponent } = require('discord.js');

let database = require("../databasemanager")	
let kullanıcılar = database.Database.collection("users");
let kullanıcı = kullanıcılar.data("301033144306630666");
let veri = await kullanıcı.get("profil");
console.log(veri)

}


	}
