const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'dice',
    description: 'Tung xúc xắc xem bảo nhiêu nút',
    type: 'CHAT_INPUT',
    options: [],

    run: async (client, interaction) => {
        const n = Math.floor(Math.random() * 5);
        let result;

        // Vì 6 sẽ gây ra tình trạng có số 0 nên phải để 5
        if(n === 0) result = '1';
        else if(n === 1) result = '2';
        else if(n === 2) result = '3';
        else if(n === 3) result = '4';
        else if(n === 4) result = '5';
        else if(n === 5) result = '6';

        
        const dice = new MessageEmbed()
            .setColor("AQUA")
            .setDescription(`**🎲 Xúc xắc có số nút là ${result}**\n\n*Nghiện cờ bạc là không tốt đâu. Thân là nhà cái, để tôi làm ví dụ nhỏ cho bạn xem, bạn có **${result}** hột xúc xắc, làm sao thắng được 7 hột xúc xắc của tôi chứ?*\n- Yelan -`)
            .setTitle(`<:LYG_OkayuMogu:978881918240194600> ${interaction.user.username} tung xúc xắc...`)
            .setThumbnail(`https://thumbs.gfycat.com/ElatedImpartialArmadillo-max-1mb.gif`)
            .setImage(`https://static.wikia.nocookie.net/gensin-impact/images/7/73/Namecard_Background_Yelan_Throw.png/revision/latest?cb=20220531064425`);

        interaction.reply({ embeds: [dice] })
    }
}