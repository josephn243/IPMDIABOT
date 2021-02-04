module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '790788148657258526';
        const minecraft = message.guild.roles.cache.find(role => role.name === "minecraft");
        const brawhalla = message.guild.roles.cache.find(role => role.name === "brawhalla");
        const league = message.guild.roles.cache.find(role => role.name === "league");
        const among_us = message.guild.roles.cache.find(role => role.name === "among us");
        const apex_legends = message.guild.roles.cache.find(role => role.name === "apex legends");
        const other_games = message.guild.roles.cache.find(role => role.name === "other games");
        const weeb = message.guild.roles.cache.find(role => role.name === "weeb");
 
        const minecrafte = message.guild.emojis.cache.find(emoji => emoji.name ==="minecraft");
        const brawhallae = message.guild.emojis.cache.find(emoji => emoji.name ==="brawhalla");
        const leaguee = message.guild.emojis.cache.find(emoji => emoji.name ==="leagueoflegends");
        const amonguse = message.guild.emojis.cache.find(emoji => emoji.name ==="amongus");
        const apexlegendse = message.guild.emojis.cache.find(emoji => emoji.name ==="apexlegends");
        const weebe = message.guild.emojis.cache.find(emoji => emoji.name ==="weeb");
        const other_gamese = '⚪';



        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose a team to play on!')
            .setDescription('Choosing a team will allow you to interact with your teammates!\n\n'
                + `${yellowTeamEmoji} for yellow team\n`
                + `${blueTeamEmoji} for blue team`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(blueTeamEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
                }
            } else {
                return;
            }
        });
    }
 
}   