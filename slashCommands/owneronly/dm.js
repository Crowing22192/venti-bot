module.exports = {
    name: 'dm',
    description: 'DM 1 người',
    ownerOnly: true,
    options: [
    {
        name: 'user',
        description: 'Provide user to send dms',
        type: 'USER',
        required: true,
    },
    {
        name: 'message',
        description: 'Nội dung',
        type: 'STRING',
        required: true,
    }
],

    run: async(client, interaction) => {
        const user = interaction.options.getUser('user');
        const dm = interaction.options.getString('message')
        try {
            await user.send(dm)
        } catch (error) {
            return interaction.reply('DM của người này đã đóng')
        }
        interaction.reply({ content: `Đã gửi DM cho ${user.username}`, ephemeral: true})
    }
}