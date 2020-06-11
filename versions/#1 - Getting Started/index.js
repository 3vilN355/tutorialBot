const Discord = require('discord.js')
const client = new Discord.Client();
const token = 'NzE5ODU4MjAzODU2NDcwMDU3.XuIhYw.wHo_NWPq1x0jMvfG64m9gmGxPA8'

client.on('ready', () => {
    console.log('YEY')
})

client.on('message', message => {
    if(message.author.bot) return;
    message.reply('Hello')
    console.log(message.content)
})

client.login(token)