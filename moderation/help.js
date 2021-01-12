module.exports = {
    name: 'help',
    description: "sends embed and then reacts",
    async execute(message, args, Discord, client) {
        const channel = '790800090247462950'
        const user = message.member 

        const itsduckinglit = message.guild.emojis.cache.find(emoji => emoji.name ==="itsduckinglit") 
        const dungeonportal= message.guild.emojis.cache.find(emoji => emoji.name ==="dungeonportal")
        const shatters = message.guild.emojis.cache.find(emoji => emoji.name ==="shatters")
        const nest = message.guild.emojis.cache.find(emoji => emoji.name ==="nest")
        const fungal = message.guild.emojis.cache.find(emoji => emoji.name ==="fungal")
        const tomb = message.guild.emojis.cache.find(emoji => emoji.name ==="tomb")
        const Void = message.guild.emojis.cache.find(emoji => emoji.name ==="void")
        const cult = message.guild.emojis.cache.find(emoji => emoji.name ==="cult")
        const osanc = message.guild.emojis.cache.find(emoji => emoji.name ==="osanc")

        let embed = new Discord.MessageEmbed()
            .setColor('#FFFFFF')
            .setTitle( `IPMDIABOT Documentation`)
            .setDescription( ` **Bot Prefix:** $ \n \u200B \n **Headcounts:** $hc- \n **AFK checks:** $afk- \n 
            **Help:** $help \n **Purge:** $purge [0-100] \n messages older then 14 days cannot be purged \n \u200B \n \u200B`)
            .addFields(
                {name: `${osanc} Oryx's Sanctuary`, value: '$hc-oryx3 \n $afk-oryx3',inline: true},
                {name: `${Void} The Void`, value: '$hc-void \n $afk-void',inline: true},
                {name: `${cult} Cultish Hideout`, value: '$hc-cult \n $afk-cult',inline: true},
                {name: `${shatters} The Shatters`, value: '$hc-shatters \n $afk-shatters',inline: true},
                {name: `${nest} The Nest`, value: '$hc-nest \n $afk-nest',inline: true},
                {name: `${fungal} Fungal + Crystal Caverns`, value: '$hc-fungal \n $afk-fungal',inline: true},
                {name: `${tomb} The Tomb`, value: '$hc-tomb \n $afk-tomb',inline: true},
                {name: `${dungeonportal} Realm Clearing`, value: '$hc-realmclearing \n $afk-realmclearing',inline: true},
                {name: `${itsduckinglit} Random Dungeons`, value: '$hc-random \n $afk-random',inline: true},
                {name: '\u200B', value: '\u200B'}
            )
            .setFooter('© IPMDIABOD', 'https://i.imgur.com/34hsUpc.png');
        let messageEmbed = await message.channel.send(embed);
    }
}