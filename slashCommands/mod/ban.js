module.exports = {
    name: 'ban',
    description: 'Tiễn người nào đó ra khỏi server',
    options: [
        {
            name: 'user',
            description: 'Ban ai nào?',
            type: 'USER',
            required: true,
        },
        {
            name: 'reason',
            description: 'Tại sao?',
            type: 'STRING',
            require: false,
        },
        {
            name: 'days',
            description: 'Ngày xoá tin nhắn',
            type: 'INTEGER',
            minValue: 0,
            maxValue: 7,
        }
    ],
    run: async (client, interaction) => {
        if (!interaction.member.permissions.has('BAN_MEMBERS')) return interaction.reply('<a:go_Fubuki_no:929731174870417418> Lỗi - Không có quyền');
        const user = interaction.options.getUser('user');
        if (user.id === interaction.user.id) return interaction.reply('<a:go_Fubuki_no:929731174870417418> Không thể ban chính mình được');
        const reason = interaction.options.getString('reason');
        const days = interaction.options.getInteger('days');
        try {
            interaction.guild.members.ban(user.id, { reason, days });
            interaction.reply('<a:go_Tick:940893817672978452> Tiễn thành công');
        } catch (err) {
            interaction.reply('<a:go_Fubuki_no:929731174870417418> Không thể ban !?!?');
            console.error(err);
        }
    },
};