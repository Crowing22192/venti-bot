module.exports = {
    name: 'kick',
    description: 'Xử người nào đó ra khỏi server',
    options: [
        {
            name: 'user',
            description: 'Chọn 1 người',
            type: 'USER',
            required: true,
        },
        {
            name: 'reason',
            description: 'Lý do muốn đuổi',
            type: 'STRING',
            require: false,
        }
    ],
    run: async (client, interaction) => {
        if (!interaction.member.permissions.has('KICK_MEMBERS')) return interaction.reply('<a:go_Heart:922134856174022697> Không thể kick vì bạn không có quyền');
        const user = interaction.options.getUser('user');
        if (user.id === interaction.user.id) return interaction.reply('<a:go_Heart:922134856174022697> Không thể kick bản thân');
        const reason = interaction.options.getString('reason');
        try {
            interaction.guild.members.kick(user.id, reason);
            interaction.reply('<a:go_Tick:940893817672978452> Kick thành công');
        } catch (err) {
            interaction.reply('<a:go_Heart:922134856174022697> Lỗi - Không thể kick');
            console.error(err);
        }
    },
};