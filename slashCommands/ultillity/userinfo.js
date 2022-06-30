const { MessageEmbed } = require('discord.js');
const moment = require("moment")

module.exports = {
  name: "whois",
  ownerOnly: true,
  description: "Hiển thị info của người này",
  options: [
    {
      name: 'user',
      description: 'Đối tượng',
      type: 'USER',
      required: true,
    }
  ],
  run: async (client, interaction, args) => {
    const user = interaction.options.getMember('user') || interaction.member;
    const MemLogo = user.user.avatarURL({ dynamic: true });

    const embed1 = new MessageEmbed()
      .setThumbnail(MemLogo)
      .setColor('#0189A1')
      .addField("**Tên Người Dùng:**", `**${user.user.username}**`, true)
      .addField("**Tag:**", `**#${user.user.discriminator}**`, true)
      .addField("**ID:**", `**${user.user.id}**`, true)
      .addField("**Tham gia Discord khi:**", `** <t:${parseInt(user.user.createdAt / 1000)}> **`, true)
      .addField("**Tham gia Server khi:**", `** <t:${parseInt(user.joinedAt / 1000)}> **`, true)


    interaction.reply({ embeds: [embed1]})


  }
}