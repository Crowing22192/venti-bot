const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'info',
    description: 'Check Info',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'options',
            description: 'Loại',
            type: 'STRING',
            required: true,
            choices: [ 
            { 
                name: 'update', 
                value: 'update' 
            },
            { 
                name: 'main', 
                value: 'main' 
            },
            { 
                name: 'server', 
                value: 'server' 
            }
            ]
        }
    ],
    run: async (client, interaction) => {

 
        const info = new MessageEmbed()
            .setTitle(`<a:go_VentiHeadpat:986982966230138900> Venti - Info <:go_Ventisleep:985071960897761300>`)
            .setDescription('<a:go_Moon:940894681120788511> __**VER:**__ `v2.1` <a:go_HeartGreen:940894169893834763>')
            .setColor('AQUA')
            .setTimestamp()
            .setImage(`https://cdn.discordapp.com/attachments/985096083904548906/990897119030288404/ezgif.com-gif-maker.gif`)
            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true }))
            .setFooter({
                text: 'Made by @Crowing#6292',
                iconURL: `https://cdn.discordapp.com/attachments/856116847279996938/983671427846799410/unknown.png`})
            .addField('**<a:go_Arrow:901447773252100097> All Commands**', '**✉️ Ultility:** `avatar`, `info`, `ping`, `svinfo`, `whois`\n<a:go_DapBan:954973071113060382> **Mod:** `ban`, `kick`, `lock`, `unlock`\n<a:go_HutaoSugoi:901442280446132294> **Fun:** `say`, `coinflip`, `quemua`, `howgay`, `dice`\n<:go_RushiaKnife:990973042970742845> **Dev Only (Teaser Only):** `dm`')
            .addField('<a:go_TV:986983894471557200> __**Development:**__ `In Progress`', '<a:go_Clock:901448078798757898> __**Lần cuối cập nhật:**__ <t:1656225626>\n<a:go_Unlock:922135006766305280> __**Source Code (View Only):**__ [Github](https://github.com/Crowing22192/venti-bot)')



            const update = new MessageEmbed()
            .setTitle(`<a:go_VentiHeadpat:986982966230138900> Venti - Update Info <:go_Ventisleep:985071960897761300>`)
            .setDescription('<a:go_Moon:940894681120788511> __**VER:**__ `v2.2` <a:go_HeartGreen:940894169893834763>')
            .setColor('AQUA')
            .setTimestamp()
            .setImage(`https://cdn.discordapp.com/attachments/985096083904548906/990897119030288404/ezgif.com-gif-maker.gif`)
            .setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true }))
            .setFooter({
                text: 'Made by @Crowing#6292',
                iconURL: `https://cdn.discordapp.com/attachments/856116847279996938/983671427846799410/unknown.png`})          
            .addField('<a:go_Arrow:901447773252100097> __**Nội dung cập nhật:**__', '・ Rút gọn 3 command `svinfo, info, updateinfo` vào 1 command `info`')
            .addField('<a:go_KannaFire:901445882606665740> **__Special Thanks:__**','・ Quilla for option string')
            .addField('<a:go_TV:986983894471557200> __**Development:**__ `In Progress`', '<a:go_Clock:901448078798757898> __**Lần cuối cập nhật:**__ <t:1658052660:R>')



            const server = new MessageEmbed()
			.setAuthor(interaction.guild.name, interaction.guild.iconURL({ dynamic: true }))
			.setColor('AQUA')
			.setThumbnail(interaction.guild.iconURL({ dynamic: true }))
            .setFooter({
                text: 'Made by @Crowing#6292',
                iconURL: `https://cdn.discordapp.com/attachments/856116847279996938/983671427846799410/unknown.png`})
			.addFields(
				{
					name: '<a:go_Diamond:901435528833019925> Server ID:',
					value: interaction.guild.id,
					inline: false,
				},
				{
					name: '<a:go_Clock:901448078798757898> Thành lập khi:',
					value: `<t:${Math.floor(interaction.guild.createdTimestamp / 1000)}:f> | <t:${Math.floor(
						interaction.guild.createdTimestamp / 1000,
					)}:R>`,
					inline: false,
				},
				{
					name: '<a:go_TV:986983894471557200> Main Owner - Người tạo ra server:',
					value: `<@${interaction.guild.ownerId}>`,
					inline: false,
				},
				{
					name: `<a:go_Sparkle:901447893238566942> Thành viên: (${interaction.guild.memberCount})`,
					value: `${interaction.guild.premiumSubscriptionCount} Boosts :sparkles:`,
					inline: false,
				},
				{
					name: `<a:go_NezukoChillin:901444592908525568> Kênh (${interaction.guild.channels.cache.size})`,
					value: `**${interaction.guild.channels.cache.filter((r) => r.type == 'GUILD_TEXT').size}** Text | **${
						interaction.guild.channels.cache.filter((r) => r.type == 'GUILD_VOICE').size
					}** Voice | **${interaction.guild.channels.cache.filter((r) => r.type === 'GUILD_CATEGORY').size}** Category`,
					inline: false,
				},

				{
					name: '<a:go_Planet:922134442930233415> Khác',
					value: `**Độ bảo mật:** ${interaction.guild.verificationLevel}`,
					inline: false,
				},
			);

                if (interaction.options.getString('options') === 'main') {
                    interaction.reply({ embeds: [info] });
                } 
                else if (interaction.options.getString('options') === 'update') {
                    interaction.reply({ embeds: [update] });
                }
                else if (interaction.options.getString('options') === 'server') {
                    interaction.reply({ embeds: [server] });
                }

    },
};

