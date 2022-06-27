module.exports = (client, interaction) => {
    if (!interaction.isCommand()) return;
    const command = client.interactions.get(interaction.commandName);
    if (!command) interaction.reply('<:go_Ventisleep:985071960897761300> Venti: Lỗi - Không tìm thấy lệnh...');
    command.run(client, interaction);
}