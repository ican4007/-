const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '파잌봇 뭐해') {
    message.reply('그냥있음');
  }
});

client.on('message', (message) => {
    if(message.content === '파잌봇 놀자') {
      message.reply('부방한테 놀아달라고 하셈');
    }
  });

  client.on('message', (message) => {
    if(message.content === '파잌봇 설명') {
      message.reply('전 방장 컴퓨터에서 살고 있어요 그래서 방장이 컴을 켜야 등장해요');
    }
  });

  client.on('message', (message) => {
    if(message.content === '파잌봇 방장 나빠') {
      message.reply('맞아요!');
    }
  });

  client.on('message', (message) => {
    if(message.content === '파잌봇 섹') {
      message.reply('전 그런거 모르는데 스');
    }
  });

  client.on('message', (message) => {
    if(message.content === '파잌봇 빡빡이') {
      message.reply('감사요♥');
    }
  });

client.login(token);