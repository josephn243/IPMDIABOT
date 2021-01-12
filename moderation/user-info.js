const {MessageEmbed} =require('discord.js')
const Commando = require('discord.js-commando')

module.exports =  class UserinfoCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'userinfo',
            group: 'moderation',
            memberName: 'userinfo',
            description: 'display user info'
            
        })
    }

    run = async () => {
        const {guild,channel} = message

        const user = message.mentions.users.first() || message.member.user
        const member = guild.members.cache.get(user.id)

         execute(message, args, Discord)
             const newEmbed = new Discord.MessageEmbed()
             .setAuthor(`User info for ${user.nickname}`, 
             user.displayAvatarURL()
            );
            
        channel.send(embed)
        }
}
