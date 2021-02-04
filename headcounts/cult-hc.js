module.exports = {
    name: 'hc-cult',
    description: "sends embed and then reacts",
    async execute(message, args, Discord, client) {
        let sendchannel = client.channels.cache.find(channel => channel.name.toLowerCase() === 'raid-afk-check')
        const user = message.member

        // ability emojis
        const whitebag = message.guild.emojis.cache.find(emoji => emoji.name ==="whitebag") 
        const slow = message.guild.emojis.cache.find(emoji => emoji.name ==="slowed")  
        const expose = message.guild.emojis.cache.find(emoji => emoji.name ==="expose")
        const daze = message.guild.emojis.cache.find(emoji => emoji.name ==="daze")
        const armorbreak = message.guild.emojis.cache.find(emoji => emoji.name ==="armorbreak")
        const paralyze = message.guild.emojis.cache.find(emoji => emoji.name ==="paralyze")
        const mseal = message.guild.emojis.cache.find(emoji => emoji.name ==="mseal")
        const fungaltome = message.guild.emojis.cache.find(emoji => emoji.name ==="fungaltome")
        const t2orb = message.guild.emojis.cache.find(emoji => emoji.name ==="t2orb")

        //character emojis
        const itsduckinglit = message.guild.emojis.cache.find(emoji => emoji.name ==="itsduckinglit") 
        const warrior = message.guild.emojis.cache.find(emoji => emoji.name ==="warrior") 
        const paladin = message.guild.emojis.cache.find(emoji => emoji.name ==="paladin") 
        const knight = message.guild.emojis.cache.find(emoji => emoji.name ==="knight") 
        const mystic = message.guild.emojis.cache.find(emoji => emoji.name ==="mystic") 
        const trickster = message.guild.emojis.cache.find(emoji => emoji.name ==="trickster") 

        //consumables
        const inc = message.guild.emojis.cache.find(emoji => emoji.name ==="inc")
        const shield = message.guild.emojis.cache.find(emoji => emoji.name ==="shield")
        const sword = message.guild.emojis.cache.find(emoji => emoji.name ==="sword")
        const helmet = message.guild.emojis.cache.find(emoji => emoji.name ==="helmet")
        const vial = message.guild.emojis.cache.find(emoji => emoji.name ==="vial")
        const dexeff = message.guild.emojis.cache.find(emoji => emoji.name ==="dexeff")
        const atteff = message.guild.emojis.cache.find(emoji => emoji.name ==="atteff")

        //dungeon portals
        const dungeonportal= message.guild.emojis.cache.find(emoji => emoji.name ==="dungeonportal")
        const shatters = message.guild.emojis.cache.find(emoji => emoji.name ==="shatters")
        const nest = message.guild.emojis.cache.find(emoji => emoji.name ==="nest")
        const fungal = message.guild.emojis.cache.find(emoji => emoji.name ==="fungal")
        const tomb = message.guild.emojis.cache.find(emoji => emoji.name ==="tomb")
        const Void = message.guild.emojis.cache.find(emoji => emoji.name ==="void")
        const cult = message.guild.emojis.cache.find(emoji => emoji.name ==="cult")
        const osanc = message.guild.emojis.cache.find(emoji => emoji.name ==="osanc")

        let embed = new Discord.MessageEmbed()
            .setColor('#A0470D')
            .setTitle( `${user.nickname} has started a headcount for a Cultish Hideout run`)
            .setThumbnail('https://i.imgur.com/nPkovWR.png')
            .setDescription(`${cult} if you can participate \n ${knight}${slow}${daze} for stun/slow/daze \n ${trickster}  if you can rush `)
            .setTimestamp()
            .setFooter('© IPMDIABOD');
    
                  
             
        let messageEmbed = await sendchannel.send('@here', {embed: embed});
        messageEmbed.react(cult);
        messageEmbed.react(knight);
        messageEmbed.react(slow);
        messageEmbed.react(daze);
        messageEmbed.react(trickster);
        
    }
}


