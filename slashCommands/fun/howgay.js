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
        let result;
        if (rng === 0) result = '<:go_AnyaPanic:984102959879180319> Đỉnh của chóp, bạn méo gay, rất tốt, very well, +1 respect'
        if (rng === 100) result = '<:go_MioWheez:990972876372996096> **Ối dồi ôi, kinh thiên động địa bà con ơi!!!!!**'
        if (rng < 50) {
            result = `<:go_AnyaAhShit:970980222658809856> Uầy, cũng mạnh :)`}
        else if (rng > 50) {
            result = `<:go_AnyaHehe:970979061088280596> Ehe, gay quá r, thế này ko dc, cha sứ ko cần đến, chúa ở đây r :)`
        }

        const gay = new MessageEmbed()
            .setColor('AQUA')
            .setTitle(`Máy đo thông số gay 🏳️‍🌈`)
            .setDescription(`<a:go_Arrow:901447773252100097> __**${user.username}**__ có chỉ số gay là \`${rng}%\` <:LYG_Ayame_Eh:990216225814630450>`)
            .addField(`<:go_KannaNani:954971986688360488> Nhận xét:`, `${result}`)
            .setImage(`https://media2.giphy.com/headers/jmckeehen/s2wy7iphPP98.gif`);


        interaction.reply({ embeds: [gay] });
    }
}