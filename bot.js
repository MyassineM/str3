const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";
var adminprefix = '!'
const developers = ["545666998365978634"]

client.on('message', message => {//حقوق Alpha and FireKingYT and SoEdit
    if (message.author.bot) return;//حقوق Alpha and FireKingYT and SoEdit
    if (!message.content.startsWith(prefix)) return;//حقوق Alpha and FireKingYT and SoEdit
  let args = message.content.split(" ").slice(1);//حقوق Alpha and FireKingYT and SoEdit
  let x = args.join(" ")//حقوق Alpha and FireKingYT and SoEdit
    if(message.content.startsWith(prefix + 'say')) {//حقوق Alpha and FireKingYT and SoEdit
        let FireKing1 = new Discord.RichEmbed()//حقوق Alpha and FireKingYT and SoEdit
        .setTitle("**اختار كيف تريد الساي**")//حقوق Alpha and FireKingYT and SoEdit
       .setDescription(`**
       📬 | اذا تريد البوت يرسلك ساي بي امبد
       📇 | اذا تريد البوت يرسلك ساي بدون امبد
       **`)//حقوق Alpha and FireKingYT and SoEdit
        message.channel.send(FireKing1).then(b => {//حقوق Alpha and FireKingYT and SoEdit
            b.react('📇')//حقوق Alpha and FireKingYT and SoEdit
            .then(() => b.react('📬'))//حقوق Alpha and FireKingYT and SoEdit and SoEdit
            .then(() =>b.react('📇'))//حقوق Alpha and FireKingYT and SoEdit
            let reaction2Filter = (reaction, user) => reaction.emoji.name === '📇' && user.id === message.author.id;//حقوق Alpha and FireKingYT and SoEdit
let reaction1Filter = (reaction, user) => reaction.emoji.name === '📬' && user.id === message.author.id;//حقوق Alpha and FireKingYT and SoEdit
//حقوق Alpha and FireKingYT and SoEdit
let reaction1 = b.createReactionCollector(reaction1Filter, { time: 12000 });//حقوق Alpha and FireKingYT and SoEdit
let reaction2 = b.createReactionCollector(reaction2Filter, { time: 12000 });//حقوق Alpha and FireKingYT and SoEdit
reaction2.on("collect", r => {//حقوق Alpha and FireKingYT and SoEdit
    message.channel.send('#'+x).then(a => {//حقوق Alpha and FireKingYT and SoEdit
        a.delete(5000)//حقوق Alpha and FireKingYT and SoEdit
    })//حقوق Alpha and FireKingYT and SoEdit
    })//حقوق Alpha and FireKingYT and SoEdit
    reaction1.on("collect", r => {//حقوق Alpha and FireKingYT and SoEdit
        let FireKing2 = new Discord.RichEmbed()//حقوق Alpha and FireKingYT and SoEdit
    .setDescription('#'+x)//حقوق Alpha and FireKingYT and SoEdit
    .setFooter(`Alpha Codes For Ever`)//حقوق Alpha and FireKingYT and SoEdit
    message.channel.send(FireKing2).then(a => {//حقوق Alpha and FireKingYT and SoEdit
    a.delete(5000)//حقوق Alpha and FireKingYT and SoEdit
    //حقوق Alpha and FireKingYT and SoEdit
    })//حقوق Alpha and FireKingYT and SoEdit
    })//حقوق Alpha and FireKingYT and SoEdit
        })//حقوق Alpha and FireKingYT and SoEdit
    }//حقوق Alpha and FireKingYT and SoEdit
});//حقوق Alpha and FireKingYT and SoEdit


client.login(process.env.TOKEN);// لا تغير فيها شيء
