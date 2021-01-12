module.exports = {
    name: 'purge',
    description: "Channel purge",
    async execute(message, args) {
        if(!args[0]) return message.reply("Enter the amount of messages you wish to purge");
        if(isNaN(args[0])) return message.reply("Please enter a real number");

        if(args[0] > 100) return message.reply("You cannot delete more then 100 messages");
        if(args[0] < 1)  return message.reply("You must delete at least one message");

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        });

    }

}