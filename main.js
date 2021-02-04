const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const prefix = '$';
const fs = require('fs');


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

const modFiles = fs.readdirSync('./moderation/').filter(file => file.endsWith('.js'));
for(const file of modFiles){
    const mod = require(`./moderation/${file}`);

    client.commands.set(mod.name, mod);
}

const headcount = fs.readdirSync('./headcounts/').filter(file => file.endsWith('.js'));
for(const file of headcount){
    const hc = require(`./headcounts/${file}`);

    client.commands.set(hc.name, hc);
}


client.once('ready', () => {
    console.log('IPMDIABOT is online. Happy Raiding!');
    client.user.setActivity("$help", {type: 1});
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // afk checks

    if(command === 'afk-oryx3') {
        client.commands.get('afk-oryx3').execute(message,args, Discord, client);
    } else if (command === 'afk-void') {
        client.commands.get('afk-void').execute(message,args, Discord, client);
    } else if (command === 'afk-shatters') {
        client.commands.get('afk-shatters').execute(message,args, Discord, client);
    } else if (command === 'afk-cult') {
        client.commands.get('afk-cult').execute(message,args, Discord, client);
    } else if (command === 'afk-nest') {
        client.commands.get('afk-nest').execute(message,args, Discord, client);
    } else if (command === 'afk-fungal') {
        client.commands.get('afk-fungal').execute(message,args, Discord, client);
    } else if (command === 'afk-tomb') {
        client.commands.get('afk-tomb').execute(message,args, Discord, client);
    } else if (command === 'afk-realmclearing') {
        client.commands.get('afk-realmclearing').execute(message,args, Discord, client);
    } else if (command === 'afk-random') {
        client.commands.get('afk-random').execute(message,args, Discord, client);
    } 

});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const hc = args.shift().toLowerCase();

    if (hc === 'hc-oryx3') {
        client.commands.get('hc-oryx3').execute(message,args, Discord, client);
    } else if (hc  === 'hc-void') {
        client.commands.get('hc-void').execute(message,args, Discord, client);
    } else if (hc  === 'hc-shatters') {
        client.commands.get('hc-shatters').execute(message,args, Discord, client);
    } else if (hc  === 'hc-cult') {
        client.commands.get('hc-cult').execute(message,args, Discord, client);
    } else if (hc  === 'hc-nest') {
        client.commands.get('hc-nest').execute(message,args, Discord, client);
    } else if (hc  === 'hc-fungal') {
        client.commands.get('hc-fungal').execute(message,args, Discord, client);
    } else if (hc  === 'hc-tomb') {
        client.commands.get('hc-tomb').execute(message,args, Discord, client);
    } else if (hc  === 'hc-realmclearing') {
        client.commands.get('hc-realmclearing').execute(message,args, Discord, client);
    } else if (hc  === 'hc-random') {
        client.commands.get('hc-random').execute(message,args, Discord, client);
    }

});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const moderation = args.shift().toLowerCase();

    if (moderation === 'help') {
        client.commands.get('help').execute(message,args, Discord, client);
    } else if (moderation === 'purge'){
        client.commands.get('purge').execute(message,args);  
    } else if (moderation === 'nnn'){
        client.commands.get('nnn').execute(message,args, Discord, client);  
    } else if (moderation === 'apply'){
        client.commands.get('apply').execute(message,args, Discord, client);  
    } 

});



client.login(process.env.token);


