const token = 'ODM3ODU1NzE1MDk1NzQwNDU2.YIyn8Q.5QFO5ACfpaoAGT7FEgnPWOV-eio'; // Bot dev application token.
 
const prefix = '!'; // Sets prefix for bot commands
 
const Discord = require('discord.js'); // Requires machine running it to have discord.js
 
const client = new Discord.Client(); // Logs into token
 
const helpmessage = new Discord.MessageEmbed() // Help message sent in channel
    .setColor('#cc33ff')
    .setTitle('Rikka Fun Bot Commands.')
    .addField('Prefix used to run all commands "'+ prefix + '"', 'Commands: help, slap, kiss,')
    .setFooter('rikka fun bot')
 
 
client.on('message', message =>{ // Basic command handler
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
 
 
 
 
    if(command === 'help'){
        message.channel.send(helpmessage);// help command
        } else if(command === 'amongus'){
            message.channel.send(amongushelp);
 
 
        }else {
        }
 
    });
 
    client.login(token);
