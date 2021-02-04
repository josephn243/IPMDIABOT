module.exports = {
    name: 'apply',
    description: "sends embed",
    async execute(message, args, Discord, client) {
        const channel = '766825932803407873'
        const user = message.member 

        let embed = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle( `Welcome to ItsDuckingLit`)
            .setDescription( ` To apply, post your RealmEye link below. If we have not gotten back to you in a timely manner, feel free to DM any <@&702976781228965982> , <@&701944958680039485> , or <@&701944952464343042>  when you're online or ping them in <#701701668198285325> `)
            .setFooter('© IPMDIABOD', 'https://i.imgur.com/34hsUpc.png');
        let messageEmbed = await message.channel.send(embed);
    }
}