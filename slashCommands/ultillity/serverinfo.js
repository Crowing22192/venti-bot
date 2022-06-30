const Discord = require('discord.js');

module.exports = {
    name: 'svinfo',
    description: 'Check info server',
    type: 'CHAT_INPUT',
    options: [],
run: async(client, interaction, args)=> {
		const embed = new Discord.MessageEmbed()
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
		interaction.reply({embeds: [embed]})
        }
}
