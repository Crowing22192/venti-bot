const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'quemua',
    description: 'Shipper bán rổ',
    type: 'CHAT_INPUT',
    options: [],

    run: async (client, interaction) => {
        const quemua = new MessageEmbed()
            .setColor("AQUA")
            .setDescription(`Ai cha, ai bị quê vậy nhỉ, đây nè, đội vào đi cho đỡ quê`)
            .setImage(`https://cdn.discordapp.com/attachments/900923009446084641/990463371532959795/unknown.png`)
            .setTitle('Quê mùa')
        interaction.reply({embeds: [quemua]});
    },
};