const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'coinflip',
    description: 'Tung đồng xu và xem kết quả',
    type: 'CHAT_INPUT',
    options: [],

    run: async (interaction) => {
        const n = Math.floor(Math.random() * 2);
        let result;
        if (n === 1) result = 'ngửa';
        else result = 'úp';

        const cf = new MessageEmbed()
            .setColor("AQUA")
            .setDescription(`**🪙 Đồng xu mặt ${result}**!`)
            interaction.reply({embeds: [cf]});
    }
};