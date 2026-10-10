const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once('ready', () => {
  console.log(`✅ البوت متصل باسم: ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content === '!ping') {
    message.reply('🏓 Pong!');
  }

  if (message.content === '!help') {
    message.reply('الأوامر المتاحة:\n!help\n!ping\n!stats');
  }

  if (message.content === '!stats') {
    message.reply(`📊 إحصائيات السيرفر:\nالأعضاء: ${message.guild.memberCount}`);
  }
});

client.login(process.env.DISCORD_TOKEN);
