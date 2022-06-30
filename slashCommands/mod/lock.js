const { Discord , MessageEmbed} = require('discord.js')
module.exports = {
  name: "lock",
  category: "mod",
  description: "locks the current or selected text channels",
  options: [],
run : async (client, interaction, args) => {
      if (!interaction.member.permissions.has("MANAGE_CHANNELS")) return interaction.editReply({content : `** <a:go_Fubuki_no:929731174870417418> Bạn không có quyền**`});
interaction.channel.permissionOverwrites.edit(interaction.guild.id, {
SEND_MESSAGES: false
      })
      .then(() => {
let locked = new MessageEmbed()
.setTitle("Khóa")
.setDescription(`
> ✅ | **Khóa Kênh**
> **Kênh bị khóa**: <#${interaction.channel.id}>
> **Khóa bởi**: <@${interaction.user.id}>`)
.setColor("AQUA")
.setTimestamp()
 interaction.reply({ embeds: [locked] })
});
}
}