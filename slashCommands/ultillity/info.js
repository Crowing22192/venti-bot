const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'info',
    description: 'Info bot',
    type: 'CHAT_INPUT',
    options: [],
    run: async (client, interaction) => {

        const info = new MessageEmbed()
            .setTitle(`<a:go_VentiHeadpat:986982966230138900> Venti - Info <:go_Ventisleep:985071960897761300>`)
            .setDescription('<a:go_Moon:940894681120788511> __**VER:**__ `v1.7.1` <a:go_HeartGreen:940894169893834763>')
            .setColor('AQUA')
            .setTimestamp()
            .setImage(`https://cdn.discordapp.com/attachments/985096083904548906/990897119030288404/ezgif.com-gif-maker.gif`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/856116847279996938/984751955916226570/unknown.png`)
            .setFooter({
                text: 'Made by @Crowing#6292',
                iconURL: `https://cdn.discordapp.com/attachments/856116847279996938/983671427846799410/unknown.png`})
            .addField('**<a:go_Arrow:901447773252100097> All Commands**', '**✉️ Ultility:** `avatar`, `info` `ping`\n<a:go_DapBan:954973071113060382> **Mod:** `ban`, `kick`, `timeout (bug)`\n<a:go_HutaoSugoi:901442280446132294> **Fun:** `say`, `coinflip`, `quemua`, `howgay`')
            .addField('<a:go_TV:986983894471557200> __**Development:**__ `In Progress`', '<a:go_Clock:901448078798757898> __**Lần cuối cập nhật:**__ <t:1656225626>\n<a:go_Unlock:922135006766305280> **Source Code (View Only):** [Github](https://github.com/Crowing22192/venti-bot)')
            interaction.reply({embeds: [info]})
        
    },
};

