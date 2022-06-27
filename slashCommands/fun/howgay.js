const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'howgay',
    description: 'Máy đo gay (vui vẻ ko quạu nha)',
    type: 'CHAT_INPUT',
    options: [        
        {
        name: 'user',
        description: 'Chọn 1 người',
        type: 'USER',
        required: true,
        },
    ],

    run: async (client, interaction) => {
        const user = interaction.options.getUser('user');
        const rng = Math.floor(Math.random() * 101);

        const gay = new MessageEmbed()
            .setColor('AQUA')
            .setTitle(`Máy đo thông số gay 🏳️‍🌈`)
            .setDescription(`**${user.username}** có chỉ số gay là \`${rng}%\``)
            .setImage(`https://media2.giphy.com/headers/jmckeehen/s2wy7iphPP98.gif`)

        interaction.reply({embeds: [gay]});
    }
}