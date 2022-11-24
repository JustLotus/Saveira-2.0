let uyesema = {
    "id": null,
    "class": null,
    "envanter": [],
    "para": 100,
    "stat": {},
    party:{
        davet:[],
        partimembers:[]
    },
}
let token = ""
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.once('ready', () => {
	console.log('Bot opened!');
});

const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');


client.login(token)
let fs = require("fs")
const { findSourceMap } = require("module")
let db = JSON.parse(fs.readFileSync("./uyeler.json"))
let yazdır =  function(veri){ fs.writeFileSync("./uyeler.json", veri)}  

function uyecreate(sınıf) {

    uyesema.class = sınıf
    uyesema.id = db.length
    db.push(uyesema)

yazdır(JSON.stringify(db))
}
function party(action,uye1id,uye2id){
    switch(action){
        case "davet": {
            //üye etiketleyip davet mesajı atacak ve davet atanın davet bölümüne id yazılacak
       
            let uye1 =  db.find(user => user.id == uye1id)
           
            db[uye1.id].party.davet.push(uye2id)
            yazdır(JSON.stringify(db))
            break;

        }
        case "kabul": {
//birini etikeleyecek üye,  eğer etiketlenen üyenin davet bölümünde etiketleyen üyenin idsi varsa 
//ikisi de birbirinin partiemmber kısmına yazılacak davet kısmından silinecek
let uye1 =  db.find(user => user.id == uye1id)
let uye2 =  db.find(user => user.id == uye2id)
let davetcheck = uye2.party.davet.find(davet=> davet == uye1id)          
if(davetcheck){
    db[uye2.id].party.partimembers.push(uye1id)
    db[uye1.id].party.partimembers.push(uye2id)
    
    db[uye2.id].party.davet = db[uye2.id].party.davet.filter(davet => davet !== uye1id)
    yazdır(JSON.stringify(db))

}else{
    //SEKTER GET YAZAN MESAJ BURAYA
}

break;
        }
        case  "reddet": {
            if(db[uye1.id].party.davet.find(davet => davet == uye2id)){

                db[uye1.id].party.davet = db[uye1.id].party.davet.filter(davet => davet !== uye2id)
                yazdır(JSON.stringify(db))
//REDDETTİĞİNE DAHİL MESAJ GÖNDERMEKKE    

            }
         
            break;
        }
    }
}
function pvp(mod, uye1id, uye2id) {
    switch (mod) {
        case "1v1":
            let uye1 = db.find(user => user.id == uye1id)
            let uye2 = db.find(user => user.id == uye2id)

           

    }
	function gorev(mod,adet,hedef,yer,tanım,odultürü,odul){

switch(mod){
case "topla": {
console.log(`Görevin ${yer} yerden ${adet} adet ${hedef} toplamak. \n ${tanım} \n \`Ödül ${odultürü} : ${odul}\``)


}


}

}

gorev("topla",5,"ayı postu", "kara in", "5 adet ayıyı öldürüp ayı postu elde etmelisin ve Henry'e teslim etmelisin.", "seviye", 1)

	
}



