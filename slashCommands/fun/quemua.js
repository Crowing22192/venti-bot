const { createCanvas, loadImage } = require('canvas');
const { MessageAttachment } = require('discord.js');

module.exports = {
        name: "quemua",
        description: "Shipper bán rổ",
        type: "CHAT_INPUT",
        options: [
            {
                name: "user",
                description: "Ai bị quê?",
                type: "USER",
                required: true,
            },
            {
                name: "reason",
                description: "Vì sao bị quê?",
                type: "STRING",
                required: true,
            }
        ],


    run: async (client, interaction) => {

        const user = interaction.options.getUser('user')
        const reason = interaction.options.getString('reason')
        const canvas = createCanvas(1200, 700);
        const ctx = canvas.getContext('2d');
        const avatar = await loadImage(user.displayAvatarURL({ dynamic: false, format: "png" }));
        const quemua = await loadImage(`./assets/que.png`);
        const diameter = 500;


        ctx.fillStyle = '#4c50b4';
        ctx.font = "bold 50px Impact"
        ctx.textAlign = "center";
        ctx.fillText("Quê Mùa", 600, 670);

        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, diameter / 2, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.clip();

        ctx.drawImage(avatar, canvas.width / 2 - diameter / 2, canvas.height / 2 - diameter / 2, diameter, diameter);
        ctx.drawImage(quemua, canvas.width / 2 - diameter / 2, canvas.height / 2 - diameter / 2, diameter, diameter);

        const image = new MessageAttachment(canvas.toBuffer(), "image.png");

        interaction.reply({ content: `<:go_Que:908278029086756915> __**${user}**__ bị quê vì **${reason}** à, ko sao. Đội rổ đi cho đỡ quê.`, files: [image], ephemeral: false });
    }
    }
