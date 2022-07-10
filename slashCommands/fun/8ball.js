const { MessageEmbed } = require('discord.js');

module.exports = {
    name: '8ball',
    description: 'Hỏi đáp "Có - Không" - ngu với bot',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'question',
            description: 'Hỏi ngu',
            type: 'STRING',
            required: true
        }
    ],

    run: async (client, interaction) => {
        const question = interaction.options.getString('question');
        const n = Math.floor(Math.random() * 2);
        let result;
        if ( n === 0 ) result = 'Có';
        if ( n === 1 ) result = 'Không';
        if ( n === 2 ) result = 'Đoán xem <:go_MeguminHeh:992394743751381032>';

        const embed = new MessageEmbed()
            .setColor("AQUA")
            .setDescription(`**__${client.user.username}:__ ${result}**`)
            .setTitle(`${interaction.user.username} hỏi ngu:\n${question}`);

            interaction.reply({ embeds: [embed] })
    }
}