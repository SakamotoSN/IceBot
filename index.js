  
const Discord = require('discord.js');
const bot = new Discord.Client();
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const client = new Discord.Client();
const Util = require ('discord.js')
const fs = require('fs')
let active = new Map()
const ytdl = require('ytdl-core')
const queue = new Map();
const Youtube = require('simple-youtube-api')
const YTKEY =process.env.YTAPI
const thereisasong = false
const youtube = new Youtube(YTKEY)
var OP = "234368202379886593 305758596971626498 330676716676710400 435125705907503105 424677919512723466 773582054880182282 434070408501919745 434070408501919745 371653593473744896"

function random(min, max) {
    min = Math.ceil(0)// 0 est impossible a avoir !ice-bot
    max = Math.floor(100)
    RNG = Math.floor(Math.random() * (max - min +1) + min);
 }

function aléa1(min, max) {
    min = Math.ceil(0)
    max = Math.floor(3)
    alé1 = Math.floor(Math.random() * (max - min +1) + min);
 }


var party_launch = false;
var number_random = 0;
var nom = ("Ice-Bot")      //speudo
var prefix = ("!ice-bot")//prefix
var jeu = ("Smash Ultimate")//jeu
var prefixM = ("!MP")//prefix bot
var aléa_random = 0
var plus_petit = -2
var plus_grand = -1
var tentative = 0
var OnOff = false





bot.on('ready', function() {
    bot.user.setUsername(nom)
    bot.user.setActivity(jeu)
    console.log("Connected")});

bot.login(process.env.TOKEN);









bot.on('message', message => {





  //debut AFM

if(message.content === "Quoiffeurbot On"){
    if(OP.includes(message.author.id) ){
      OnOff = true;
      message.react('✅')
    }else{
      message.react('⛔')
    }
  }
  
    if(message.content === "Quoiffeurbot Off"){
      if(OP.includes(message.author.id)){
        OnOff = false;
        message.react('❌')
      }else{
        message.react('⛔')
      }
  }
  
  
  
  if (OnOff === true){
    if (message.author.bot) return; //le bot ne peu pas prendre ces message
      let test = message.content.split(" ");
    //console.log(`entrer ${test}`)
    var texte = test[test.length - 1];
    //console.log(`dernier mot : ${texte}`) //prend que le dernier mots
    if((texte === ('?')) || (texte === ('!')) ||(texte === ('.') )){
      var texte = test[test.length - 2];
      //console.log("un ? a etais detecter dans le code" )
      //console.log(texte)
    } //si un ? est le dernier mots prend avant dernier
      if (texte === undefined) {
        return;
    }else{
  
      if ( message.content.includes("@everyone")  || message.content.includes("@here")){
        //console.log("Everyone dedected")
       return;
  
      }else{
        //console.log("pas de everyone")
  
  
          //console.log("passage !")
      if ( (texte.toLowerCase()).includes("quoi", (texte.length-4) ) ||  (texte.toLowerCase()).includes("quoi.", (texte.length-5) ) ||  (texte.toLowerCase()).includes("quoi?", (texte.length-5) )||  (texte.toLowerCase()).includes("quoi!", (texte.length-5) )){
      if ((message.content.length) > 200){
        message.channel.send(`"Pour éviter de flood le salon nous avons decider de ne pas citer le message, merci de votre compréhension"\n${message.author}`, {
          files: [
            "./folder/feur.mp4"
          ]
        })}
        else{
          message.channel.send(` "${message}" ${message.author} `, {
            files: [
              "./folder/feur.mp4"
            ]
          })
  
        }
      }
      if ( (texte.toLowerCase()).includes("non", (texte.length-3) ) ||  (texte.toLowerCase()).includes("non.", (texte.length-4) ) ||  (texte.toLowerCase()).includes("non?", (texte.length-4) )||  (texte.toLowerCase()).includes("non!", (texte.length-4) )){
        if (message.content.length > 200){
          message.channel.send(`"Pour éviter de flood le salon nous avons decider de ne pas citer le message, merci de votre compréhension"\n${message.author}`, {
              files: [
                "./folder/bril.mp4"
              ]
            })}
          else{
            message.channel.send(` "${message}" ${message.author} `, {
              files: [
                "./folder/bril.mp4"
              ]
            })
  
          }
        }
        if ( (texte.toLowerCase()).includes("oui", (texte.length-3) ) ||  (texte.toLowerCase()).includes("oui.", (texte.length-4) ) ||  (texte.toLowerCase()).includes("oui?", (texte.length-4) )||  (texte.toLowerCase()).includes("oui!", (texte.length-4) )){
        if (message.content.length > 200){
          message.channel.send(`"Pour éviter de flood le salon nous avons decider de ne pas citer le message, merci de votre compréhension"\n${message.author}`, {
              files: [
                "./folder/stiti.mp4"
              ]
            })
          }else{
            message.channel.send(` "${message}" ${message.author} `, {
              files: [
                "./folder/stiti.mp4"
              ]
            })
          }
        }


          if ( (texte.toLowerCase()).includes("ouais", (texte.length-5) ) ||  (texte.toLowerCase()).includes("ouais.", (texte.length-6) ) ||  (texte.toLowerCase()).includes("ouais?", (texte.length-6) )||  (texte.toLowerCase()).includes("ouais!", (texte.length-6) )   ||      (texte.toLowerCase()).includes("ouai", (texte.length-4) ) ||  (texte.toLowerCase()).includes("ouai.", (texte.length-5) ) ||  (texte.toLowerCase()).includes("ouai?", (texte.length-5) )||  (texte.toLowerCase()).includes("ouai!", (texte.length-5) )   ||   (texte.toLowerCase()).includes("oe", (texte.length-2) ) ||  (texte.toLowerCase()).includes("oe.", (texte.length-3) ) ||  (texte.toLowerCase()).includes("oe?", (texte.length-3) )||  (texte.toLowerCase()).includes("oe!", (texte.length-3) )  ){
            if (message.content.length > 200){
              message.channel.send(`"Pour éviter de flood le salon nous avons decider de ne pas citer le message, merci de votre compréhension"\n${message.author}`, {
                  files: [
                    "./folder/sternn.mp4"
                  ]
                })
              }else{
                message.channel.send(` "${message}" ${message.author} `, {
                  files: [
                    "./folder/sternn.mp4"
                  ]
                })
              }
            }
   
  
            if ( (texte.toLowerCase()).includes("a", (texte.length-1) ) ||  (texte.toLowerCase()).includes("a.", (texte.length-2) ) ||  (texte.toLowerCase()).includes("a?", (texte.length-2) )||  (texte.toLowerCase()).includes("a!", (texte.length-2) )          ||  (texte.toLowerCase()).includes("ha", (texte.length-2) ) ||  (texte.toLowerCase()).includes("ha.", (texte.length-3) ) ||  (texte.toLowerCase()).includes("ha?", (texte.length-3) )||  (texte.toLowerCase()).includes("ha!", (texte.length-3) )     || (texte.toLowerCase()).includes("ah", (texte.length-2) ) ||  (texte.toLowerCase()).includes("ah.", (texte.length-3) ) ||  (texte.toLowerCase()).includes("ah?", (texte.length-3) )||  (texte.toLowerCase()).includes("ah!", (texte.length-3) )     ){
              if (message.content.length > 200){
                message.channel.send(`"Pour éviter de flood le salon nous avons decider de ne pas citer le message, merci de votre compréhension"\n${message.author}`, {
                    files: [
                      "./folder/vion.mp4"
                    ]
                  })
                }else{
                  message.channel.send(` "${message}" ${message.author} `, {
                    files: [
                      "./folder/vion.mp4"
                    ]
                  })
                }
              }











  else{//console.log("OFF") 
  return;}

  //fin


if(message.content.startsWith("!ice-bot meme")){
message.channel.send(`Je ne parviens pas à trouver ta merde, précise mieux ${message.author}`)
}
if(message.content.startsWith("!ice bot")){
    message.channel.send(`T'as oublié le - dans la commande batard`)
    }
    

if(message.content.startsWith("!ice-bot search")){
    function random(min, max) {
        min = Math.ceil(0)// 0 est impossible a avoir
        max = Math.floor(100)
        RNG = Math.floor(Math.random() * (max - min +1) + min);
     }
    random();
    console.log(RNG)
    if (RNG < 80){
        console.log("RNG normal")
        message.channel.send(`Je ne parviens pas à trouver ta merde, précise mieux ${message.author}`)
}else{
    console.log("RNG google")
    message.channel.send(`Tien BG : https://www.google.fr`)   
}
}




if(message.content.startsWith("!ice-bot play")){
message.channel.send(`Je ne parviens pas à trouver ta merde, précise mieux ${message.author}`)
} 

if(message.content.startsWith("!ice-bot hello")){
message.channel.send("Bonjour, je suis un bot")
}


if(message.content.startsWith("!IBS")){
    if("234368202379886593 330676716676710400 396423644794060800 394603568373694474 305758596971626498 434070408501919745".includes(message.author.id)){
    let args = message.content.split(" ").slice(1)
    let thingToEcho = args.join(" ")
    message.delete();
    message.channel.send(`${thingToEcho}`)  
}else{
    
    message.delete();
}
}
if(message.content.startsWith('!ice-bot-MP')) {

    if(message.mentions.users.first()){

    let messageToSend = message.content.split(" ").slice(2).join(" ");
    let userToSend = message.mentions.users.first();

    userToSend.send(`🧊 ${message.author.username} vous a envoyer un message! 🧊\n\n${messageToSend}`);
    message.delete();
    message.channel.send(`**${message.author}** , votre message a bien été envoyer a **${message.mentions.users.first().username}**`)
}else{
message.delete();
message.channel.send(`erreur`)

}
}




if(message.content.startsWith("!(S)MP")) {
    if("234368202379886593".includes(message.author.id)){
    if(message.mentions.users.first()){

    let messageToSend = message.content.split(" ").slice(2).join(" ");
    let userToSend = message.mentions.users.first();

    userToSend.send(`${messageToSend}`);
    message.delete();
}else{
message.delete();
}
}else{
    console.log("WII")
    }
}



if(message.content === "!ice-bot help"){ //help
 
    const embed = new Discord.MessageEmbed()
    .setTitle("Voici les commandue de Ice-Bot")
    .setAuthor("Ice-Bot")
    .setColor(0x00FFF8)
    .setFooter("Ce bot est principalement un bot troll")
    .addField("Commande actuel",
    "!ice-bot meme\n!ice-bot search\n!ice-bot play\n!ice-bot hello\n!ice-bot-MP (envois un message priver a la personne mentionner)\n!ice-bot NotFunny (envois un gif)\n!ice-bot Funny (envois un gif)")
     .setThumbnail("https://cdn.glitch.com/df793cf6-f71f-4846-9616-877b6c1bd870%2Fpdp.jpg?v=1590321784039")
    message.channel.send({embed});
}

if(message.content === "!ice-bot eurobeat"){ 
    message.channel.send({ 
      files: ["https://cdn.glitch.com/df793cf6-f71f-4846-9616-877b6c1bd870%2Feuro.jpg?v=1590321756166"]
  })
}

if(message.content === "!ice-bot anime"){ 
    message.channel.send("Rentres dans ce trou, s'il te plaît.", {
    files: ["https://cdn.glitch.com/df793cf6-f71f-4846-9616-877b6c1bd870%2Fhole.gif?v=1590321840080"]
})
}
  
  
if(message.content === "!ice-bot GachaLife"){ 
    message.channel.send({ 
      files: ["https://cdn.glitch.com/df793cf6-f71f-4846-9616-877b6c1bd870%2FPicsArt_05-25-12.59.15.png?v=1590434060648"]
  })
}
if(message.content === "!ice-bot NotFunny"){ 
    message.channel.send({ 
      files: ["https://cdn.glitch.com/df793cf6-f71f-4846-9616-877b6c1bd870%2FFeistyHeftyAmericanbobtail-max-1mb.gif?v=1590688129485"]
  })
}
  
  
  
  
if(message.content === "!ice-bot Funny"){
  
  
  if("543925622741663766".includes(message.author.id)){ //oyi
   console.log('nan') 
  }else{
      if("394603568373694474".includes(message.author.id)){ //ice
    message.channel.send({ 
      files: ["https://cdn.glitch.com/df793cf6-f71f-4846-9616-877b6c1bd870%2FIMG_20191213_141543.png?v=1590770559545"]
  })
                console.log('ice !') 
}else{
  function random1(min, max) {
    min = Math.ceil(1)
    max = Math.floor(2)
    random2 = Math.floor(Math.random() * (max - min +1) + min);
 }
  random1();
    console.log(random2)
  if (random2 == 1){
    message.channel.send({ 
      files: ["https://cdn.glitch.com/df793cf6-f71f-4846-9616-877b6c1bd870%2F20200529_155849.gif?v=1590768423865"]
  })
  
}else{
  if (random2 == 2){
    message.channel.send({ 
      files: ["https://cdn.glitch.com/df793cf6-f71f-4846-9616-877b6c1bd870%2Ffunny.gif?v=1590770443035"]
  })
}
}
}    
}
}
 
  if(message.content === "!ice-bot Furry"){ 
    message.channel.send("Dans la série LazyTwon Saison 2 épisodes 15, Robbie Rotten (connu pour le meme We Are N°1) se crée un costume de furry pour luide furry pour lui même", {
    files: ["https://cdn.glitch.com/df793cf6-f71f-4846-9616-877b6c1bd870%2FWhat.png?v=1591100936037"]
})
}
  


  
  
}
)
