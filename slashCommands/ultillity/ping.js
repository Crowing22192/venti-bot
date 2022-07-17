module.exports = {
    name: 'ping',
    description: 'Xem độ trễ của bot',
    type: 'CHAT_INPUT',
    run: async (client, interaction) => {
        interaction.reply(`<:go_YaePing:954972099087335434> Pong! \`${client.ws.ping}ms\` `);
    },
};