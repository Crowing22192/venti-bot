const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'quemua',
    description: 'Shipper bán rổ',
    type: 'CHAT_INPUT',
    options: [
        {
        name: 'tag',
        description: 'Ai bị quê?',
        type: 'USER',
        required: true,
        },
    ],

    run: async (client, interaction) => {
        const bique = interaction.options.getUser('tag');

        const quemua = new MessageEmbed()
            .setColor("AQUA")
            .setDescription(`<:go_Que:908278029086756915> __**${bique.user.username}**__ bị quê à, đừng lo, shipper Venti \ncực dảk tặng bạn cái rổ cho đỡ quê`)
            .setImage(`https://cdn.discordapp.com/attachments/900923009446084641/990463371532959795/unknown.png`)
            .setTitle('<:go_Que:908278029086756915> Quê mùa');

        interaction.reply({embeds: [quemua]});
    }
}