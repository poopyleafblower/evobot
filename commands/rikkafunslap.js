const {
    Client,
    MessageEmbed
} = require("discord.js");
 
const Discord = require('discord.js');
 
const bot = new Discord.Client();
 
const token = "ODM3ODU1NzE1MDk1NzQwNDU2.YIyn8Q.5QFO5ACfpaoAGT7FEgnPWOV-eio";
 
const PREFIX = "!";
 
function doKissAction() {
    var rand = [
        'https://media1.tenor.com/images/358986720d4b533a49bdb67cbc4fe3e5/tenor.gif?',
        'https://media1.tenor.com/images/153b2f1bfd3c595c920ce60f1553c5f7/tenor.gif?',
        'https://media1.tenor.com/images/fe39cfc3be04e3cbd7ffdcabb2e1837b/tenor.gif?',
        'https://media.tenor.com/images/47a6be1fbc1c40c3a55c0e2c8b725603/tenor.gif',
        'https://media.tenor.com/images/b09b36ae92b2b5c6da7212472514063d/tenor.gif',
        'https://media.tenor.com/images/356fec15c3c741170a67fd740f918ecd/tenor.gif',
        'https://media1.tenor.com/images/9ea4fb41d066737c0e3f2d626c13f230/tenor.gif?',
        'https://media.tenor.com/images/998aa3b095f342dba06ab13e7debbb55/tenor.gif',
        'https://media.tenor.com/images/c17db25a1a7644a2bb6d5ddbcb8c9f33/tenor.gif'
    ];
 
    return rand[Math.floor(Math.random() * rand.length)];
}
 
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
                   case 'slap':
                const personTagged = message.mentions.members.first();
 
                if(!args[1]) {
                    message.channel.send('You are missing arguments!')
                }else{
                           const personTagged = message.mentions.members.first();
                    const acceptedEmbed = new Discord.MessageEmbed()
                    .setColor('#7289DA')
                  .setTitle('Slap')
                .setImage(doKissAction())
                .setDescription('`' + message.author.username + '`' + ' has slapped ' + personTagged.displayName + ' ')
                message.channel.send(acceptedEmbed);
                //    personTagged.send();
                }
 
            break;
 
   }
})
 
bot.login(token);