const { Client, Intents, Collection } = require('discord.js');
require('dotenv').config();
const { Player } = require('discord-player');
const fs = require('fs');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });

client.commands = new Collection();
client.aliases = new Collection();
client.categories = new Collection();
client.interactions = new Collection();
client.cooldowns = new Collection();

['event', 'slashCommand'].forEach(handler => require(`./handlers/${handler}`)(client));
client.config = require('./config.json')

client.login(process.env.TOKEN);