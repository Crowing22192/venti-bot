const { Discord , MessageEmbed} = require('discord.js')
module.exports = {
  name: "unlock",
  description: "Mở khóa kênh bị lock",
  options: [],
run : async (client, interaction, args) => {
      if (!interaction.member.permissions.has("MANAGE_CHANNELS")) return interaction.editReply({content : `** <a:go_Fubuki_no:929731174870417418> Bạn không có quyền**`});
interaction.channel.permissionOverwrites.edit(interaction.guild.id, {
SEND_MESSAGES: true
      })
      .then(() => {
let locked = new MessageEmbed()
.setTitle("Unlock")
.setDescription(`
> ✅ | **Mở khóa kênh**
> **Kênh đã mở khóa**: <#${interaction.channel.id}>
> **Mở khóa bởi**: <@${interaction.user.id}>`)
.setColor("AQUA")
.setTimestamp()
 interaction.reply({ embeds: [locked] })
});
}
}