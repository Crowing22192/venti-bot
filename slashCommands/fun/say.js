module.exports = {
    name: 'say',
    description: 'Nhờ bot nói giúp gì đó',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'query',
            description: 'Nội dung cần nói',
            type: 'STRING',
            required: true,
        }
    ],
    run: async (client, interaction) => {
        if (!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply('<a:go_Fubuki_no:929731174870417418> Ah ah ah - Ko dc nha, spam chứ j <a:go_Fubuki_no:929731174870417418>');
        const query = interaction.options.getString('query');
        interaction.reply({ content: 'Rồi rồi, xong r, muốn j nữa má <a:go_VentiHeadpat:986982966230138900>', ephemeral: true });
        interaction.channel.send(query);
    },
};