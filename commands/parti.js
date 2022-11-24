const { SlashCommandBuilder } = require('@discordjs/builders');
let fs = require("fs")
let db = JSON.parse(fs.readFileSync("./uyeler.json"))
let yazdır =  function(veri){ fs.writeFileSync("./uyeler.json", veri)} 
 let kullanıcılar = DatabaseManager.Database.collection("users");
    let kullanıcı = kullanıcılar.data(message.author.id);
    let targetMember = message.mentions.members.first() || null;
    let etiketlenen = kullanıcılar.data(targetMember.id) || null;
    let veri = await kullanıcı.get("profil");
    let veri2 = await etiketlenen.get("profil")
module.exports = {
	data: new SlashCommandBuilder()
		.setName('parti')
		.setDescription('parti parti parti')
        .addStringOption(option =>
            option.setName('seçenek')
                .setDescription('seçeneği seç')
                .setRequired(true)
                .addChoices(
                    { name: 'davet', value: 'davet' },
                    { name: 'kabul', value: 'kabul' },
                    { name: 'red', value: 'red' },
                ))
            
        .addUserOption(option =>
			option.setName('kişi')
				.setDescription('kişiyi seçiniz')
				.setRequired(true)),
	async execute(interaction) {
    console.log(interaction.options.getString("seçenek"))
    
        let kisi = interaction.options.getUser("kişi")
        console.log(kisi)
        switch(interaction.options.getString("seçenek")){
            case "davet": {
		     veri2.parti.davet.push(uye1)
                veri2.save
                interaction.reply({content:`${kisi.username} oyuncusuna davet gönderildi,
                umarız ki icabet eder.`})
                 break;
            }
           
        }
        
  
    
    //veritabanı olayı buraya
	},
};
