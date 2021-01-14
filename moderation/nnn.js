module.exports = {
    name: 'nnn',
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
            .setColor('#460A07')
            .setTitle( `**ItsDuckingLit presents:** a 2021 Celebration`)
            .setThumbnail('https://i.imgur.com/byfSV5w.png')
            .setDescription('<@&701944956100542464> <@&766821698229239839> <@&722901824000098385>')
            .addFields(
                {name: `The contest will be starting in 1 hour (7:30 Central, 5:30 PST, 8:30 EST) `, value: ' \u200B'},
                {name: 'Rules:', value: `${itsduckinglit} Fresh lvl 20 characters only \n ${itsduckinglit} T0 gear only \n ${itsduckinglit} Gear earned in dungeon can be worn  \n ${itsduckinglit} Last 3 survivors earn 1/2/3/ points respectively \n ${itsduckinglit} If 4, or more, players survive, everyone earns 1 point \n ${itsduckinglit} UT/ST earns 1 point (screenshot proof) \n ${itsduckinglit} Leaching = bad \n ${itsduckinglit} Dragging = good`},
                {name: 'Rewards', value: `1st: 3 skins, Deca \n 2nd: Pixie, Deca, Skin \n 3rd: Pixie, Deca, Skin \n 4th/5th: Etherite Dagger`}
            )
            .setTimestamp()
            .setFooter('© IPMDIABOD');
    
                  
             
                
       
        let messageEmbed = await sendchannel.send(embed);
        messageEmbed.react(itsduckinglit);
        messageEmbed.react(whitebag);
       
    }
}