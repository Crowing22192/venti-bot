const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'Lấy avatar của ai đó',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'user',
            description: 'Người má muốn lấy avatar',
            type: 'USER',
            required: false,
        }
    ],
    run: async (client, interaction) => {
        const user = interaction.options.getUser('user') || interaction.user;
        const avatarURL = user.displayAvatarURL({ format: 'png', size: 4096, dynamic: true });
        const embed = new MessageEmbed()
            .setColor('AQUA')
            .setImage(avatarURL)
            .setTimestamp()
            .setTitle(`<a:go_Moon:940894681120788511> Avatar của ${user.tag}`)
            .addField('PNG', `[Link](${user.displayAvatarURL({ size: 4096, dynamic: true, format: "png" })})`, true)
            .addField('JPG', `[Link](${user.displayAvatarURL({ size: 4096, dynamic: true, format: "jpg" })})`, true)
            .addField('GIF', `[Link](${user.displayAvatarURL({ size: 4096, dynamic: true, format: "gif" })})`, true);
        interaction.reply({ embeds: [embed] });
    },
};