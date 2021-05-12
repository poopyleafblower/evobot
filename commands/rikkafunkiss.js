const {
    Client,
    MessageEmbed
} = require("discord.js");
 
const Discord = require('discord.js');
 
const bot = new Discord.Client();
 
const token = "ODM3ODU1NzE1MDk1NzQwNDU2.YIyn8Q.yZRxwkIe5gL3Ou2Co-DSzowFX-4";
 
const PREFIX = "!";
 
bot.on('ready', () => {
    console.log('I am online master');
    bot.user.setActivity('dan', {
        type: 'WATCHING'
    });
})
 
function doKissAction() {
    var rand = [
        'https://media2.giphy.com/media/G3va31oEEnIkM/giphy.gif',
        'https://media1.tenor.com/images/f5167c56b1cca2814f9eca99c4f4fab8/tenor.gif?itemid=6155657',
        'https://media.tenor.com/images/fbb2b4d5c673ffcf8ec35e4652084c2a/tenor.gif',
        'https://media.giphy.com/media/ZRSGWtBJG4Tza/giphy.gif',
        'https://media.giphy.com/media/oHZPerDaubltu/giphy.gif',
        'https://acegif.com/wp-content/uploads/anime-kiss-m.gif',
        'https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif',
        'https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif',
        'https://media0.giphy.com/media/KH1CTZtw1iP3W/source.gif'
    ];
 
    return rand[Math.floor(Math.random() * rand.length)];
}
 
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
                   case 'kiss':
                const personTagged = message.mentions.members.first();
 
                if(!args[1]) {
                    message.channel.send('You are missing arguments!')
                }else{
                           const personTagged = message.mentions.members.first();
                    const acceptedEmbed = new Discord.MessageEmbed()
                    .setColor('#7289DA')
                  .setTitle('Kiss')
                .setImage(doKissAction())
                .setDescription('`' + message.author.username + '`' + ' has kissed ' + personTagged.displayName + ' ')
                message.channel.send(acceptedEmbed);
                //    personTagged.send();
                }
 
            break;
 
   }
})
 
bot.login(token);